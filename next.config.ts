import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";
import {
  TRAILING_SLASH,
} from "./src/lib/site-config";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  outputFileTracingRoot: projectRoot,
  trailingSlash: TRAILING_SLASH,
  // Formatos modernos de imagen para mejor performance
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24,
    imageSizes: [48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      {
        source: "/index",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/psicologo-hombres-chillan",
        destination: "/psicologo-adulto-chillan",
        permanent: true,
      },
      {
        source: "/psicologo-especialista-ansiedad-chillan",
        destination: "/psicologo-ansiedad-chillan",
        permanent: true,
      },
      {
        source: "/guias/diferencia-psicologo-psiquiatra",
        destination: "/guias/psicologo-o-psiquiatra",
        permanent: true,
      },
      {
        source: "/guias/ansiedad-y-estres",
        destination: "/preguntas/ansiedad-o-estres",
        permanent: true,
      },
      {
        source: "/guias/terapia-cognitivo-conductual",
        destination: "/preguntas/que-es-la-terapia-cognitivo-conductual",
        permanent: true,
      },
      {
        source: "/preguntas/que-hacer-en-un-ataque-de-panico",
        destination: "/guias/ataque-de-panico-que-hacer",
        permanent: true,
      },
      {
        source: "/preguntas/psicologo-o-psiquiatra",
        destination: "/guias/psicologo-o-psiquiatra",
        permanent: true,
      },
      {
        source: "/psicologo-alcoholismo-chillan",
        destination: "/alcoholismo-chillan",
        permanent: true,
      },
      {
        source: "/tratamiento-alcoholismo-chillan",
        destination: "/alcoholismo-chillan",
        permanent: true,
      },
      {
        source: "/dejar-de-beber-chillan",
        destination: "/alcoholismo-chillan",
        permanent: true,
      },
      {
        source: "/psicologo-adulto-chillan-mejor-valorados",
        destination: "/psicologo-adulto-chillan",
        permanent: true,
      },
      {
        source: "/certificado-salud-mental-trabajo-chillan",
        destination: "/certificado-salud-mental-chillan",
        permanent: true,
      },
      {
        source: "/psicologo-matrimonial-chillan",
        destination: "/terapia-de-pareja-chillan",
        permanent: true,
      },
      {
        source: "/tratamiento-anorexia-bulimia-chillan",
        destination: "/psicologo-trastornos-alimenticios-chillan",
        permanent: true,
      },
      {
        source: "/psicologo-centro-chillan",
        destination: "/",
        permanent: true,
      },
      {
        source: "/psicologo-estres-academico-chillan",
        destination: "/psicologo-estudiantes-chillan",
        permanent: true,
      },
    ];
  },
  // Headers de seguridad (CSP se maneja en middleware.ts con nonce)
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        source: "/:file(.*\\.(?:png|jpg|jpeg|webp|avif|svg|ico|gif))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
