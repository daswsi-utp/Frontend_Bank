export default function StartLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid place-items-center min-h-screen bg-gray-50">
      <div className="flex flex-col items-center justify-center w-full max-w-2xl px-6 py-8 mx-auto lg:px-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800">Bienvenido al Sistema Bancario</h1>
        <p className="mt-4 text-lg text-center text-gray-600">Para continuar, debes iniciar sesión primero.</p>
        <p className="mt-4 text-lg text-center text-gray-600">Si no tienes una cuenta, por favor regístrate.</p>
        {children}  {/* Aquí se renderiza FormLogin */}
      </div>
    </div>
  );
}
