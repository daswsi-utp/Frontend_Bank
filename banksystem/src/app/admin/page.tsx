export default function AdminPage() {
  return (
    <div className="flex flex-col justify-center items-center h-full text-center p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">👋 Bienvenido, Administrador</h1>
      <p className="text-lg text-gray-700 max-w-xl">
        Desde aquí puedes gestionar los usuarios, cuentas y movimientos del sistema. Usa el menú lateral para navegar entre las secciones.
      </p>
    </div>
  );
}
