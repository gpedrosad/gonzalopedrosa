import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { CANONICAL_HOST } from "@/lib/site-config";

/**
 * Middleware que:
 * 1. Redirige a www si la petición viene sin www
 * 2. Setea CSP relajada para permitir GTM/GA/Ads.
 *
 * NOTA CSP: Los wildcards como *.doubleclick.net NO cubren subdominios anidados
 * (ej: googleads.g.doubleclick.net). Por eso se agregan explícitamente.
 */
export function middleware(request: NextRequest) {
  const isDev = process.env.NODE_ENV === "development";
  
  // Redirigir a www si no está presente (solo en producción)
  if (!isDev) {
    const hostname = request.headers.get("host") || "";
    
    // Si la petición viene de gonzalopedrosa.cl (sin www), redirigir a www
    if (hostname === "gonzalopedrosa.cl" && CANONICAL_HOST === "www.gonzalopedrosa.cl") {
      const url = request.nextUrl.clone();
      url.host = CANONICAL_HOST;
      return NextResponse.redirect(url, { status: 301 });
    }
  }

  // CSP relajada: permite scripts inline para compatibilidad con GTM
  const cspDirectives = [
    "default-src 'self'",
    // Scripts: unsafe-inline + unsafe-eval para GTM y sus tags dinámicos
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googletagmanager.com https://*.google-analytics.com https://*.google.com https://googleads.g.doubleclick.net https://*.doubleclick.net https://connect.facebook.net https://*.googleadservices.com",
    // script-src-elem: requerido por algunos navegadores para <script> elements (GTM + Ads)
    "script-src-elem 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.googleadservices.com https://www.google-analytics.com",
    // Conexiones: APIs de tracking + subdominios anidados de doubleclick (stats.g, googleads.g)
    "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.google.com https://*.doubleclick.net https://googleads.g.doubleclick.net https://stats.g.doubleclick.net https://*.googleadservices.com https://*.facebook.com https://connect.facebook.net",
    // Imágenes: píxeles de tracking + googleads.g.doubleclick.net (subdominio anidado)
    "img-src 'self' https://*.google-analytics.com https://*.googletagmanager.com https://*.google.com https://*.doubleclick.net https://googleads.g.doubleclick.net https://*.facebook.com https://*.googleadservices.com data: blob:",
    // Frames: GTM preview, ads + tagassistant (debug, solo útil en dev pero no hace daño en prod)
    `frame-src 'self' https://*.googletagmanager.com https://*.doubleclick.net https://*.google.com${isDev ? " https://tagassistant.google.com" : ""}`,
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
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:png|jpg|jpeg|svg|ico|webp|avif|gif|xml|txt)$).*)",
  ],
};
