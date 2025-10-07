// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Metadata neutral y apta para anuncios.
 * En línea con la clasificación de orígenes de datos de Meta (“General / Servicios profesionales”):
 * - Evita lenguaje clínico/diagnóstico.
 * - No promete resultados médicos.
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://gonzalopedrosa.cl"),
  title: "Gonzalo Pedrosa | Psicólogo online",
  description:
    "Orientación psicológica en formato online, cercana y práctica. Agenda simple y sesiones privadas de 50 minutos.",
  alternates: {
    canonical: "/",
    languages: { "es-CL": "/" },
  },
  openGraph: {
    type: "website",
    url: "https://gonzalopedrosa.cl/",
    title: "Gonzalo Pedrosa | Psicólogo online",
    description:
      "Sesiones online con enfoque claro y cercano. Reserva en minutos y comienza por lo importante.",
    siteName: "Gonzalo Pedrosa",
    locale: "es_CL",
    images: [
      {
        url: "/yo.png",
        width: 1200,
        height: 630,
        alt: "Consulta de psicología online con Gonzalo Pedrosa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gonzalo Pedrosa | Psicólogo online",
    description:
      "Orientación psicológica online. Agenda simple y sesiones privadas de 50 minutos.",
    images: ["/yo.png"],
  },
  robots: { index: true, follow: true, "max-image-preview": "large" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Categoría del origen de datos en Meta: "General / Servicios profesionales".
  // Importante:
  // - No enviar información sensible (salud, financiera, etc.) en parámetros de eventos.
  // - Limitar eventos a interacciones generales (PageView, ViewContent, Lead, Contact, Schedule).
  // - Evitar cualquier identificador que revele condiciones o tratamientos.
  const PIXEL_ID =
    process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID ??
    process.env.FACEBOOK_PIXEL_ID ??
    "378202177406742";

  return (
    <html lang="es-CL">
      <head>
        {/* Meta Pixel (Facebook) */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){
              if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
            }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${PIXEL_ID}');
            // Solo eventos generales. No incluir datos sensibles en 'custom_data'.
            fbq('track', 'PageView');
          `}
        </Script>

        {/* JSON-LD neutral (servicio profesional, sin datos de salud) */}
        <Script id="ld-psicologo" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Gonzalo Pedrosa",
            areaServed: ["Online"],
            url: "https://gonzalopedrosa.cl/",
            image: "https://gonzalopedrosa.cl/yo.png",
            description:
              "Orientación psicológica online con enfoque práctico y cercano. Agenda simple y sesiones privadas.",
            sameAs: [
              // Añade tus redes si corresponde
              // "https://www.instagram.com/tu_perfil",
              // "https://www.facebook.com/tu_pagina",
            ],
          })}
        </Script>

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}

        {/* NoScript fallback para Pixel */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}