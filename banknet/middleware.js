import { NextResponse } from 'next/server';
import { verifyToken } from './src/lib/auth';

const PUBLIC_ROUTES = ['/', '/login', '/registro', '/api/auth'];
const AUTH_ROUTES = ['/dashboard', '/cuenta', '/transferencias'];
const ADMIN_ROUTES = ['/admin'];

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(process.env.NEXT_PUBLIC_TOKEN_COOKIE_NAME)?.value;

  // Permitir acceso a rutas públicas
  if (PUBLIC_ROUTES.some(route => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // Verificar token para rutas protegidas
  try {
    const decoded = await verifyToken(token);
    request.user = decoded;

    // Redireccionar si no tiene permisos de admin
    if (ADMIN_ROUTES.some(route => pathname.startsWith(route)) && decoded.rol !== 'ADMIN') {
      return NextResponse.redirect(new URL('/acceso-denegado', request.url));
    }

    return NextResponse.next();
  } catch (error) {
    // Redireccionar a login si no está autenticado
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('from', pathname);
    return NextResponse.redirect(loginUrl);
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};