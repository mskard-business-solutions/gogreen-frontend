'use client';

import { User, UserRole } from '@/types/auth';
import axios from 'axios';
import { createContext, ReactNode, useContext, useEffect, useState, useRef } from 'react';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  hasRole: (role: UserRole) => boolean;
  isAdmin: () => boolean;
  isEditor: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const CACHE_KEY = 'auth_cache';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
let authCheckPromise: Promise<User | null> | null = null;

// Helper to get cached auth from sessionStorage
function getCachedAuth(): { user: User | null; timestamp: number } | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (!cached) return null;
    
    const parsed = JSON.parse(cached);
    if (Date.now() - parsed.timestamp > CACHE_DURATION) {
      sessionStorage.removeItem(CACHE_KEY);
      return null;
    }
    
    return parsed;
  } catch {
    return null;
  }
}

// Helper to set cached auth in sessionStorage
function setCachedAuth(user: User | null) {
  if (typeof window === 'undefined') return;
  
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({
      user,
      timestamp: Date.now()
    }));
  } catch {
    // Ignore storage errors
  }
}

// Helper to clear cached auth
function clearCachedAuth() {
  if (typeof window === 'undefined') return;
  
  try {
    sessionStorage.removeItem(CACHE_KEY);
  } catch {
    // Ignore storage errors
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const isMountedRef = useRef(true);
  const hasCheckedRef = useRef(false);

  useEffect(() => {
    isMountedRef.current = true;
    
    // Only check auth once per provider instance
    if (!hasCheckedRef.current) {
      hasCheckedRef.current = true;
      checkAuth();
    }
    
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const checkAuth = async () => {
    // Check sessionStorage cache first
    const cached = getCachedAuth();
    if (cached) {
      if (isMountedRef.current) {
        setUser(cached.user);
        setIsLoading(false);
      }
      return;
    }

    // If there's already an auth check in progress, wait for it
    if (authCheckPromise) {
      try {
        const result = await authCheckPromise;
        if (isMountedRef.current) {
          setUser(result);
          setIsLoading(false);
        }
      } catch (error) {
        if (isMountedRef.current) {
          setUser(null);
          setIsLoading(false);
        }
      }
      return;
    }

    // Start a new auth check
    authCheckPromise = (async () => {
      try {
        const response = await axios.get('/api/admin/auth/me');
        const userData = response.data;
        
        // Cache the result
        setCachedAuth(userData);
        
        return userData;
      } catch (error) {
        // 401 is expected when not authenticated, don't log it as an error
        if (axios.isAxiosError(error) && error.response?.status !== 401) {
          console.error('Auth check failed:', error);
        }
        
        // Cache null user
        setCachedAuth(null);
        
        return null;
      }
    })();

    try {
      const result = await authCheckPromise;
      if (isMountedRef.current) {
        setUser(result);
      }
    } finally {
      authCheckPromise = null;
      if (isMountedRef.current) {
        setIsLoading(false);
      }
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post('/api/admin/auth/login', { email, password });
      const userData = response.data.user;
      setUser(userData);
      
      // Cache the logged-in user
      setCachedAuth(userData);
    } catch (error: any) {
      throw new Error(error.response?.data?.error || 'Login failed');
    }
  };

  const logout = async () => {
    try {
      await axios.post('/api/admin/auth/logout');
    } finally {
      setUser(null);
      
      // Clear the cache
      clearCachedAuth();
    }
  };

  const hasRole = (role: UserRole): boolean => {
    return user?.role === role;
  };

  const isAdmin = (): boolean => {
    return user?.role === UserRole.ADMIN;
  };

  const isEditor = (): boolean => {
    return user?.role === UserRole.EDITOR || user?.role === UserRole.ADMIN;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        hasRole,
        isAdmin,
        isEditor
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
