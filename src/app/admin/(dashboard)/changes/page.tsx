'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { AdminOnly } from '@/components/RoleBasedComponent';
import { UserRole } from '@/types/auth'; // Ensure this exists

interface PendingChange {
  id: string;
  action: 'create' | 'update' | 'delete';
  resourceType: string;
  resourceId?: string;
  changeData: any;
  previousData?: any;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
  user: {
      email: string;
  } // Backend might need to join user or we just show userId if not joined.
    // The current backend getPending routes just return columns. We might need to fetch users mapping or update backend to join.
    // For now, I'll rely on userId or if backend joins it. 
    // Looking at backend model, it just selects from pendingChanges. It doesn't join.
    // I will display userId for now or fetch user details.
  userId: string;
}

export default function ChangesPage() {
  const [changes, setChanges] = useState<PendingChange[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedChange, setSelectedChange] = useState<PendingChange | null>(null);

  useEffect(() => {
    fetchChanges();
  }, []);

  const fetchChanges = async () => {
    try {
      const response = await axios.get('/api/admin/pending-changes/pending');
      setChanges(response.data.data || []);
    } catch (error) {
      console.error('Failed to fetch changes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleReview = async (id: string, status: 'approved' | 'rejected') => {
    if (!confirm(`Are you sure you want to ${status} this change?`)) return;

    try {
      await axios.post(`/api/admin/pending-changes/${id}/review`, { status });
      setSelectedChange(null);
      fetchChanges();
      alert(`Change ${status} successfully`);
    } catch (error: any) {
      alert(error.response?.data?.error || `Failed to ${status} change`);
    }
  };

  return (
    <AdminOnly>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Content Approvals</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* List */}
          <div className="lg:col-span-1 bg-white shadow rounded-lg overflow-hidden border border-gray-200">
             <div className="p-4 border-b border-gray-100 bg-gray-50">
                <h2 className="font-semibold text-gray-700">Pending Requests</h2>
             </div>
             <div className="divide-y divide-gray-200 max-h-[600px] overflow-y-auto">
                {loading ? (
                    <div className="p-4 text-center text-gray-500">Loading...</div>
                ) : changes.length === 0 ? (
                    <div className="p-4 text-center text-gray-500">No pending changes</div>
                ) : (
                    changes.map(change => (
                        <div 
                            key={change.id} 
                            onClick={() => setSelectedChange(change)}
                            className={`p-4 cursor-pointer hover:bg-gray-50 transition ${selectedChange?.id === change.id ? 'bg-green-50 border-l-4 border-green-500' : ''}`}
                        >
                            <div className="flex justify-between items-start">
                                <span className={`px-2 py-1 text-xs font-semibold rounded uppercase ${
                                    change.action === 'create' ? 'bg-green-100 text-green-800' :
                                    change.action === 'delete' ? 'bg-red-100 text-red-800' :
                                    'bg-blue-100 text-blue-800'
                                }`}>
                                    {change.action}
                                </span>
                                <span className="text-xs text-gray-500">
                                    {new Date(change.createdAt).toLocaleDateString()}
                                </span>
                            </div>
                            <div className="mt-2 text-sm font-medium text-gray-900 capitalize">
                                {change.resourceType}
                            </div>
                             <div className="mt-1 text-xs text-gray-500 truncate">
                                By User ID: {change.userId}
                            </div>
                        </div>
                    ))
                )}
             </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-2 bg-white shadow rounded-lg overflow-hidden border border-gray-200 h-fit">
               {selectedChange ? (
                   <div>
                       <div className="p-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                           <h2 className="font-semibold text-gray-700">Change Details</h2>
                           <div className="space-x-2">
                               <button 
                                   onClick={() => handleReview(selectedChange.id, 'rejected')}
                                   className="px-3 py-1 bg-white border border-red-300 text-red-700 rounded hover:bg-red-50 text-sm"
                               >
                                   Reject
                               </button>
                               <button 
                                   onClick={() => handleReview(selectedChange.id, 'approved')}
                                   className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
                               >
                                   Approve & Activate
                               </button>
                           </div>
                       </div>
                       <div className="p-6 space-y-4">
                           <div>
                               <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Resource</h3>
                               <p className="mt-1 text-lg font-medium text-gray-900 capitalize">{selectedChange.resourceType} {selectedChange.resourceId && `(ID: ${selectedChange.resourceId})`}</p>
                           </div>
                           
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                               {selectedChange.previousData && (
                                   <div>
                                       <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">Previous Data</h3>
                                       <pre className="bg-gray-50 p-3 rounded text-xs overflow-x-auto border border-gray-200 max-h-96">
                                           {JSON.stringify(selectedChange.previousData, null, 2)}
                                       </pre>
                                   </div>
                               )}
                               <div className={selectedChange.previousData ? '' : 'col-span-2'}>
                                   <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                                       {selectedChange.action === 'delete' ? 'Data to Delete' : 'New Data'}
                                   </h3>
                                   <div className="bg-gray-50 p-3 rounded border border-gray-200">
                                      {selectedChange.changeData.pdfUrl && (
                                        <div className="mb-2 p-2 bg-blue-50 text-blue-800 text-xs rounded border border-blue-100 flex items-center justify-between">
                                            <span>📄 PDF Attachment Included</span>
                                            <a href={selectedChange.changeData.pdfUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900">View PDF</a>
                                        </div>
                                      )}
                                      <pre className="text-xs overflow-x-auto max-h-96">
                                          {JSON.stringify(selectedChange.changeData, null, 2)}
                                      </pre>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               ) : (
                   <div className="p-12 text-center text-gray-500">
                       Select a change request to view details
                   </div>
               )}
          </div>
        </div>
      </div>
    </AdminOnly>
  );
}
