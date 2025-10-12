// next.config.ts
import type { NextConfig } from "next";

/**
 * Encabezados de seguridad recomendados:
 * - CSP estricta pero compatible con tu uso actual (Pixel solo tras interacción).
 * - HSTS para forzar HTTPS (requiere servir por HTTPS).
 * - Referrer, XFO, X-CTO, Permissions-Policy.
 *
 * Ajusta `script-src`/`connect-src` si agregas más orígenes externos.
 */
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // fbevents.js se carga perezoso desde connect.facebook.net
      "script-src 'self' https://connect.facebook.net 'unsafe-inline'",
      // imágenes locales y https (incluye OG). Data: para SVG/inline si lo usas.
      "img-src 'self' https: data:",
      // estilos locales + inline de Next/Tailwind
      "style-src 'self' 'unsafe-inline'",
      // conexiones XHR/fetch/beacon: mismo origen + Facebook Pixel (tr)
      "connect-src 'self' https://www.facebook.com",
      // fuentes locales + https
      "font-src 'self' https:",
      // no iframes de terceros
      "frame-ancestors 'none'",
      // evita cambios de <base>
      "base-uri 'self'",
      // formularios solo al propio sitio
      "form-action 'self'",
      // opcional: fuerza actualización de recursos http→https
      "upgrade-insecure-requests",
    ].join("; "),
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "geolocation=(), microphone=(), camera=()" },
  { key: "X-Frame-Options", value: "DENY" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  /**
   * Redirección canónica de host (www → raíz).
   * En Vercel, HTTPS ya se fuerza a nivel de plataforma; esto garantiza host único.
   * Si usas otro proveedor, fuerza HTTP→HTTPS allí.
   */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "^www\\.gonzalopedrosa\\.cl$" }],
        destination: "https://gonzalopedrosa.cl/:path*",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;