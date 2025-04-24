import AdminSidebar from '@/components/admin/AdminSidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <AdminSidebar />
      <main className="flex-1 overflow-auto bg-gray-50 p-6">
        {children}
      </main>
    </div>
  );
}
