export default function StartsPage() {
  return (
    <div>
      <h2>Inicios de Sesión</h2>
      <p>Historial de inicios de sesión del usuario</p>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Dispositivo</th>
          </tr>
        </thead>
        <tbody>
          {/* Datos dinámicos irían aquí */}
        </tbody>
      </table>
    </div>
  )
}