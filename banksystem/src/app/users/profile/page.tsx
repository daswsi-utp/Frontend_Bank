export default function ProfilePage() {
  return (
    <div>
      <h2>Perfil de Usuario</h2>
      <div>
        <h3>Información Personal</h3>
        <form>
          <div>
            <label>Nombre:</label>
            <input type="text" />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" />
          </div>
          <button type="submit">Guardar Cambios</button>
        </form>
      </div>
    </div>
  )
}