import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(req) {
  const { pathname } = req.nextUrl;
  const userCookie = req.cookies.get('user');

  const isAdminRoute = pathname.startsWith('/admin');
  const isPrivateRoute = pathname.startsWith('/private');

  // Si entra a /admin o /private y no hay cookie de usuario, redirige a /unauthorized
  if ((isAdminRoute || isPrivateRoute) && !userCookie) {
    const url = req.nextUrl.clone();
    url.pathname = '/unauthorized';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Aplica solo a estas rutas
export const config = {
  matcher: ['/admin/:path*', '/private/:path*'],
};
