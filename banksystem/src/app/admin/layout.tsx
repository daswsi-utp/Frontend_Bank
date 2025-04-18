export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="admin-layout">
      <h2>Panel de Administración</h2>
      <nav>{/* Menú de admin */}</nav>
      {children}
    </div>
  )
}