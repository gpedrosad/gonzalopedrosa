import type { NextConfig } from "next";
import {
  TRAILING_SLASH,
} from "./src/lib/site-config";

const nextConfig: NextConfig = {
  trailingSlash: TRAILING_SLASH,
  // Formatos modernos de imagen para mejor performance
  images: {
    formats: ["image/avif", "image/webp"],
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
    ];
  },
};

export default nextConfig;
