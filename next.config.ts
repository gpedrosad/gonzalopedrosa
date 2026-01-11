import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Formatos modernos de imagen para mejor performance
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Headers de seguridad y SEO
  async headers() {
    // Content-Security-Policy para permitir GTM, GA y Meta Pixel
    const cspDirectives = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net",
      "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://www.google.com https://*.facebook.com",
      "img-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://www.google.com https://www.facebook.com data: blob:",
      "frame-src 'self' https://www.googletagmanager.com",
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self' data:",
    ].join("; ");

    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Content-Security-Policy", value: cspDirectives },
        ],
      },
    ];
  },
};

export default nextConfig;
