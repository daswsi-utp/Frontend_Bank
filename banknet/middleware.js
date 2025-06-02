import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const PRIVATE_PATHS = ["/admin", "/private"];

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "banknet_secret");

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  const isPrivate = PRIVATE_PATHS.some((path) => pathname.startsWith(path));
  if (!isPrivate) return NextResponse.next();

  const token = request.cookies.get("token")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const { payload } = await jwtVerify(token, SECRET);

    if (pathname.startsWith("/admin") && !["ADMIN", "CAJERO", "SOPORTE"].includes(payload.rol)) {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }

    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/private/:path*",
  ],
};
