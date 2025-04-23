import UserSidebar from '@/components/user/UserSidebar';
export default function UsersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen overflow-hidden">
    <UserSidebar />
    <main className="flex-1 overflow-auto bg-gray-50 p-6">
      {children}
    </main>
  </div>
  )
}