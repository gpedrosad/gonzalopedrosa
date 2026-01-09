// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
 * Metadata base del sitio.
 * Las páginas individuales pueden sobrescribir estos valores.
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://gonzalopedrosa.cl"),
  title: {
    default: "Gonzalo Pedrosa | Psicólogo",
    template: "%s | Gonzalo Pedrosa",
  },
  description:
    "Psicólogo con más de 7 años de experiencia. Atención profesional para ansiedad, depresión, estrés y más. Terapia cognitivo-conductual. Sesiones online y presenciales.",
  alternates: {
    canonical: "/",
    languages: { "es-CL": "/" },
  },
  openGraph: {
    type: "website",
    url: "https://gonzalopedrosa.cl/",
    title: "Gonzalo Pedrosa | Psicólogo",
    description:
      "Psicólogo con enfoque cognitivo-conductual. Ansiedad, depresión, estrés. Sesiones online y presenciales.",
    siteName: "Gonzalo Pedrosa - Psicólogo",
    locale: "es_CL",
    images: [
      {
        url: "/yo.png",
        width: 1200,
        height: 630,
        alt: "Gonzalo Pedrosa - Psicólogo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gonzalo Pedrosa | Psicólogo",
    description:
      "Psicólogo. Ansiedad, depresión, estrés. TCC. Online y presencial.",
    images: ["/yo.png"],
  },
  robots: { index: true, follow: true, "max-image-preview": "large" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // ID del Pixel (si no existe, el stub no hace nada)
  const PIXEL_ID =
    process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID ??
    process.env.FACEBOOK_PIXEL_ID ??
    "";

  return (
    <html lang="es-CL">
      <head>
        {/* Referrer reducido: menos fuga de parámetros a terceros */}
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/* ─────────────────────────────────────────────────────────────
           Google Tag Manager
           ───────────────────────────────────────────────────────────── */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N3DXMKTR');
          `}
        </Script>

        {/* ─────────────────────────────────────────────────────────────
           JSON-LD estructurado: Person + ProfessionalService + Offer
           ───────────────────────────────────────────────────────────── */}
        <Script id="ld-professional" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": "https://gonzalopedrosa.cl/#persona",
                name: "Gonzalo Pedrosa",
                jobTitle: "Psicólogo Clínico",
                description: "Psicólogo con más de 7 años de experiencia en atención clínica. Especialista en terapia cognitivo-conductual.",
                image: "https://gonzalopedrosa.cl/yo.png",
                url: "https://gonzalopedrosa.cl/",
                sameAs: ["https://wa.me/56968257817"],
                knowsAbout: ["Ansiedad", "Depresión", "Terapia Cognitivo-Conductual", "Crisis de pánico", "Estrés"],
              },
              {
                "@type": "ProfessionalService",
                "@id": "https://gonzalopedrosa.cl/#servicio",
                name: "Gonzalo Pedrosa - Psicólogo",
                provider: { "@id": "https://gonzalopedrosa.cl/#persona" },
                areaServed: [
                  { "@type": "City", name: "Chillán", "@id": "https://www.wikidata.org/wiki/Q203727" },
                  { "@type": "Country", name: "Chile" },
                ],
                serviceType: ["Psicoterapia individual", "Terapia online", "Terapia cognitivo-conductual"],
                url: "https://gonzalopedrosa.cl/",
                image: "https://gonzalopedrosa.cl/yo.png",
                description: "Atención psicológica profesional para ansiedad, depresión, estrés y más. Sesiones online y presenciales en Chillán.",
                priceRange: "$35.000 CLP",
                telephone: "+56968257817",
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Servicios de Psicología",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Sesión individual",
                        description: "Sesión de psicoterapia de 50 minutos, online o presencial",
                      },
                      price: "35000",
                      priceCurrency: "CLP",
                    },
                  ],
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.8",
                  reviewCount: "124",
                  bestRating: "5",
                },
              },
            ],
          })}
        </Script>

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* ─────────────────────────────────────────────────────────────
           Google tag (gtag.js) - Google Ads
           ───────────────────────────────────────────────────────────── */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17861931009"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17861931009');
          `}
        </Script>

        {/* ─────────────────────────────────────────────────────────────
           Pixel de Meta con carga perezosa y sin PageView automático.
           - No se carga la librería hasta que ALGUIEN llame fbq(...)
           - En la primera llamada, se encola automáticamente fbq('init', PIXEL_ID)
           - NO hay 'PageView' por defecto.
           - Sin <noscript> (evita disparos en crawlers/headless)
           Esto reduce señales a bots y mantiene consistencia de contenido.
           ───────────────────────────────────────────────────────────── */}
        <Script id="fbq-lazy" strategy="afterInteractive">
          {`
            (function (w, d, pid) {
              if (!pid) return;
              if (w.fbq) return;

              var n = function() {
                var args = Array.prototype.slice.call(arguments);
                // Auto-init: si llega un 'track' antes de 'init', encolamos 'init' primero
                if (!n.__inited && args[0] !== 'init') {
                  n.queue.push(['init', pid]);
                  n.__inited = true;
                } else if (args[0] === 'init') {
                  n.__inited = true;
                }
                n.queue.push(args);

                // Carga perezosa de la librería al primer uso
                if (!n.__loading) {
                  n.__loading = true;
                  var s = d.createElement('script');
                  s.async = true;
                  s.src = 'https://connect.facebook.net/en_US/fbevents.js';
                  var x = d.getElementsByTagName('script')[0];
                  x.parentNode.insertBefore(s, x);
                }
              };

              n.queue = [];
              n.version = '2.0';
              n.loaded = true;
              n.push = n; // compat

              w.fbq = n;
              if (!w._fbq) w._fbq = n;
            })(window, document, '${PIXEL_ID}');
          `}
        </Script>
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N3DXMKTR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}

        {/* Analytics de Vercel (no bloqueante) */}
      </body>
    </html>
  );
}