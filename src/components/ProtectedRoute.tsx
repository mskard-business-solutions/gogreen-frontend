'use client';

import { useAuth } from '@/contexts/AuthContext';
import { UserRole } from '@/types/auth';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
  requiredRole?: UserRole;
  fallbackUrl?: string;
}

export function ProtectedRoute({ 
  children, 
  requiredRole,
  fallbackUrl = '/admin/login' 
}: ProtectedRouteProps) {
  const { isAuthenticated, isLoading, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        router.push(fallbackUrl);
      } else if (requiredRole && user?.role !== requiredRole) {
        // If admin-only content, redirect non-admins
        router.push('/admin');
      }
    }
  }, [isAuthenticated, isLoading, user, requiredRole, router, fallbackUrl]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (!isAuthenticated || (requiredRole && user?.role !== requiredRole)) {
    return null;
  }

  return <>{children}</>;
}
