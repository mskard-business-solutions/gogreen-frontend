'use client';

import { useAuth } from '@/contexts/AuthContext';
import { AdminOnly, EditorOrAdmin } from '@/components/RoleBasedComponent';

export default function AdminDashboard() {
  const { user, isAdmin, isEditor } = useAuth();

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Dashboard</h1>
        <p className="text-gray-600">Welcome back, {user?.email}!</p>
        <p className="text-sm text-gray-500 mt-2">Role: <span className="font-semibold uppercase">{user?.role}</span></p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <h2 className="text-gray-500 text-sm font-medium uppercase">Products</h2>
          <p className="text-3xl font-bold">Manage</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <h2 className="text-gray-500 text-sm font-medium uppercase">Categories</h2>
          <p className="text-3xl font-bold">Manage</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
          <h2 className="text-gray-500 text-sm font-medium uppercase">Contacts</h2>
          <p className="text-3xl font-bold">View</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
          <h2 className="text-gray-500 text-sm font-medium uppercase">Pages</h2>
          <p className="text-3xl font-bold">Edit</p>
        </div>
      </div>

      {/* Role-based Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <EditorOrAdmin>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Editor Access</h2>
            <p className="text-gray-600 mb-4">You can edit content, manage products, and update pages.</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ Edit products</li>
              <li>✓ Manage categories</li>
              <li>✓ Update pages</li>
              <li>✓ View contacts</li>
            </ul>
          </div>
        </EditorOrAdmin>

        <AdminOnly>
          <div className="bg-white rounded-lg shadow p-6 border-2 border-green-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Admin Access</h2>
            <p className="text-gray-600 mb-4">You have full access to all features including user management.</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ All editor permissions</li>
              <li>✓ Manage users</li>
              <li>✓ System settings</li>
              <li>✓ Analytics & reports</li>
            </ul>
          </div>
        </AdminOnly>
      </div>

      {/* Permission Indicator */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 mb-2">Your Permissions</h3>
        <div className="flex flex-wrap gap-2">
          {isEditor() && (
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              Content Editor
            </span>
          )}
          {isAdmin() && (
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
              Administrator
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
