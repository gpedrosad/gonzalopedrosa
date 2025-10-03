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

// === Metadata simple y apta para ads (es-CL) ===
export const metadata: Metadata = {
  metadataBase: new URL("https://gonzalopedrosa.cl"),
  title: "Gonzalo Pedrosa | Psicólogo online",
  description:
    "Acompañamiento profesional en psicología con un enfoque cercano y práctico. Sesiones online de 50 minutos y agenda simple para avanzar a tu ritmo.",
  alternates: {
    canonical: "/",
    languages: { "es-CL": "/" },
  },
  openGraph: {
    type: "website",
    url: "https://gonzalopedrosa.cl/",
    title: "Gonzalo Pedrosa | Psicólogo online",
    description:
      "Sesiones online, enfoque claro y cercano. Reserva en minutos y empieza por lo importante.",
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
      "Acompañamiento profesional en formato online. Agenda simple y sesiones de 50 minutos.",
    images: ["/yo.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const PIXEL_ID = "378202177406742";

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
            fbq('track', 'PageView');
          `}
        </Script>

        {/* JSON-LD mínimo y neutral */}
        <Script id="ld-person" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Gonzalo Pedrosa",
            jobTitle: "Psicólogo",
            url: "https://gonzalopedrosa.cl/",
            image: "https://gonzalopedrosa.cl/yo.png",
            description:
              "Acompañamiento profesional en psicología, con sesiones online y un enfoque claro y cercano.",
            areaServed: ["Chile", "Online"],
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