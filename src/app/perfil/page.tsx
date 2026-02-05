// src/app/profile/page.tsx
import type { Metadata } from "next";
import Profile from "../components/Perfil";
import { CANONICAL_ORIGIN } from "@/lib/site-config";

export const dynamic = "force-dynamic";

/** Metadatos (versión única) */
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Orientación profesional y bienestar | Gonzalo Pedrosa",
    description:
      "Espacio online de acompañamiento para reflexionar, mejorar el bienestar personal y tomar decisiones con claridad. Modalidad 100% online.",
    alternates: {
      canonical: "/perfil",
    },
    openGraph: {
      title: "Gonzalo Pedrosa | Orientación profesional y bienestar",
      description:
        "Más de 7 años de experiencia ofreciendo acompañamiento online",
      url: `${CANONICAL_ORIGIN}/perfil`,
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
