import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Middleware que genera un nonce único por request para CSP.
 * El nonce se pasa al layout via header x-nonce.
 */
export function middleware(request: NextRequest) {
  // Generar nonce criptográficamente seguro (base64 de 16 bytes)
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  // Construir CSP con nonce
  const cspDirectives = [
    "default-src 'self'",
    // Scripts: nonce para inline, dominios específicos para externos
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://googleads.g.doubleclick.net`,
    // Conexiones permitidas (APIs, tracking)
    "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com https://www.google.com https://*.google.com https://*.facebook.com https://connect.facebook.net",
    // Imágenes
    "img-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://www.google.com https://*.google.com https://www.facebook.com https://googleads.g.doubleclick.net data: blob:",
    // Frames (GTM preview, etc.)
    "frame-src 'self' https://www.googletagmanager.com https://td.doubleclick.net",
    // Estilos: unsafe-inline necesario para Next.js y algunos componentes
    "style-src 'self' 'unsafe-inline'",
    // Fuentes
    "font-src 'self' data:",
    // Mejores prácticas de seguridad
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'self'",
    "upgrade-insecure-requests",
  ].join("; ");

  // Clonar headers de request para la respuesta
  const requestHeaders = new Headers(request.headers);
  // Pasar el nonce al layout via header personalizado
  requestHeaders.set("x-nonce", nonce);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Setear CSP en la respuesta
  response.headers.set("Content-Security-Policy", cspDirectives);

  return response;
}

/**
 * Configuración: aplicar middleware a todas las páginas excepto assets estáticos.
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - public files (images, etc.)
     */
    {
      source:
        "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.png$|.*\\.jpg$|.*\\.svg$|.*\\.ico$).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
