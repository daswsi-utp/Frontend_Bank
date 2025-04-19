export default function UsersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="users-layout">
      <h1>Módulo de Usuarios</h1>
      <nav>
        {/* Navegación entre secciones de usuarios */}
        <ul>
          <li><a href="/users/profile">Perfil</a></li>
          <li><a href="/users/operations">Operaciones</a></li>
          <li><a href="/users/starts">Inicios</a></li>
        </ul>
      </nav>
      <div className="content">
        {children}
      </div>
    </div>
  )
}