'use client';

import Link from 'next/link';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { AdminOnly } from '@/components/RoleBasedComponent';
import { useRouter } from 'next/navigation';

function AdminNavigation() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/admin/login');
  };

  return (
    <nav className="bg-white shadow-sm p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/admin" className="text-xl font-bold text-green-700">
          Vidhi Admin
        </Link>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">
            {user?.email} ({user?.role})
          </span>
          <Link href="/admin/pages" className="text-gray-600 hover:text-green-700">Pages</Link>
          <Link href="/admin/categories" className="text-gray-600 hover:text-green-700">Categories</Link>
          <Link href="/admin/products" className="text-gray-600 hover:text-green-700">Products</Link>
          <Link href="/admin/contacts" className="text-gray-600 hover:text-green-700">Contacts</Link>
          <AdminOnly>
            <Link href="/admin/users" className="text-gray-600 hover:text-green-700">Users</Link>
          </AdminOnly>
          <button 
            onClick={handleLogout}
            className="text-red-600 hover:text-red-800"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

function AdminLayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100">
        <AdminNavigation />
        <main className="container mx-auto p-8">
          {children}
        </main>
      </div>
    </ProtectedRoute>
  );
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </AuthProvider>
  );
}
