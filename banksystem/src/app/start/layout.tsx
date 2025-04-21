export default function StartLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return ( 
    <div className="grid place items-center min-h-screen">
      <div className="flex flex-col items-center justify-center w-full max-w-2xl px-4 py-8 mx-auto lg:px-8">
        <h1 className="text-3xl font-bold text-center">Bienvenido al Sistema Bancario</h1>
        <p className="mt-4 text-lg text-center">Para continuar, debes iniciar sesión primero.</p>
        <p className="mt-4 text-lg text-center">Si no tienes una cuenta, por favor regístrate.</p>
     
      {children}
      </div>
    </div>
  )
}