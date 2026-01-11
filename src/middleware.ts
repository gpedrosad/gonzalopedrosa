import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Middleware que setea CSP relajada para permitir GTM/GA/Ads.
 * Usa 'unsafe-inline' para scripts (menos seguro pero compatible con GTM).
 */
export function middleware(request: NextRequest) {
  // CSP relajada: permite scripts inline para compatibilidad con GTM
  const cspDirectives = [
    "default-src 'self'",
    // Scripts: unsafe-inline + unsafe-eval para GTM y sus tags dinámicos
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googletagmanager.com https://*.google-analytics.com https://*.google.com https://googleads.g.doubleclick.net https://*.doubleclick.net https://connect.facebook.net https://*.googleadservices.com",
    // Conexiones: APIs de tracking
    "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.google.com https://*.doubleclick.net https://*.facebook.com https://connect.facebook.net",
    // Imágenes: píxeles de tracking
    "img-src 'self' https://*.google-analytics.com https://*.googletagmanager.com https://*.google.com https://*.doubleclick.net https://*.facebook.com https://*.googleadservices.com data: blob:",
    // Frames: GTM preview y ads
    "frame-src 'self' https://*.googletagmanager.com https://*.doubleclick.net https://*.google.com",
    // Estilos
    "style-src 'self' 'unsafe-inline'",
    // Fuentes
    "font-src 'self' data:",
    // Seguridad básica
    "object-src 'none'",
    "base-uri 'self'",
  ].join("; ");

  const response = NextResponse.next();
  response.headers.set("Content-Security-Policy", cspDirectives);

  return response;
}

/**
 * Aplicar a todas las páginas excepto assets estáticos.
 */
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.png$|.*\\.jpg$|.*\\.svg$|.*\\.ico$).*)",
  ],
};
