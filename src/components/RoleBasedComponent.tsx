'use client';

import { useAuth } from '@/contexts/AuthContext';
import { UserRole } from '@/types/auth';
import { ReactNode } from 'react';

interface RoleBasedComponentProps {
  children: ReactNode;
  allowedRoles: UserRole[];
  fallback?: ReactNode;
}

export function RoleBasedComponent({ 
  children, 
  allowedRoles, 
  fallback = null 
}: RoleBasedComponentProps) {
  const { user } = useAuth();

  if (!user || !allowedRoles.includes(user.role)) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}

export function AdminOnly({ children, fallback }: { children: ReactNode; fallback?: ReactNode }) {
  return (
    <RoleBasedComponent allowedRoles={[UserRole.ADMIN]} fallback={fallback}>
      {children}
    </RoleBasedComponent>
  );
}

export function EditorOrAdmin({ children, fallback }: { children: ReactNode; fallback?: ReactNode }) {
  return (
    <RoleBasedComponent allowedRoles={[UserRole.ADMIN, UserRole.EDITOR]} fallback={fallback}>
      {children}
    </RoleBasedComponent>
  );
}
