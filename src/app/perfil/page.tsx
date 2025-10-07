// src/app/profile/page.tsx
import { headers } from "next/headers";
import type { Metadata } from "next";
import Profile from "../components/Perfil";

export const dynamic = "force-dynamic";

/** Detecta si el user-agent parece un scraper de Meta, IG o Facebot */
function isMetaBot(ua: string): boolean {
  const needles = [
    "facebookexternalhit",
    "facebot",
    "instagram",
    "metaInspector",
    "whatsapp",
    "slackbot",
    "discordbot",
    "linkedinbot",
    "pinterest",
    "crawler",
    "spider",
  ];
  ua = ua.toLowerCase();
  return needles.some((n) => ua.includes(n));
}

/** Metadatos dinámicos: cambia según el tipo de visitante */
export async function generateMetadata(): Promise<Metadata> {
  const ua = (await headers()).get("user-agent") || "";

  if (isMetaBot(ua)) {
    // === Versión neutra para bots de revisión o crawlers ===
    return {
      title: "Servicios online | Gonzalo Pedrosa",
      description:
        "Profesional online. Acompañamiento y orientación general. Información sobre servicios y contacto.",
      openGraph: {
        title: "Servicios online | Gonzalo Pedrosa",
        description:
          "Profesional online. Espacio de orientación y bienestar personal.",
        images: ["/yo.png"],
      },
      robots: {
        index: true,
        follow: true,
      },
    };
  }

  // === Versión completa (humana) ===
  return {
    title: "Orientación profesional y bienestar | Gonzalo Pedrosa",
    description:
      "Espacio online de acompañamiento para reflexionar, mejorar el bienestar personal y tomar decisiones con claridad. Modalidad 100% online.",
    openGraph: {
      title: "Gonzalo Pedrosa | Orientación profesional y bienestar",
      description:
        "Más de 7 años de experiencia ofreciendo acompañamiento online para el bienestar y la organización personal.",
      images: ["/yo.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

/** Render del componente principal (client-side) */
export default function ProfilePage() {
  return <Profile />;
}