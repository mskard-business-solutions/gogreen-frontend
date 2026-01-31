import Sidebar from '@/components/Sidebar';
import { ProtectedRoute } from '@/components/ProtectedRoute';

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <div className="flex h-screen bg-gray-100 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </ProtectedRoute>
  );
}
