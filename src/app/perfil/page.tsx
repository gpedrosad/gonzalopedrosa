// src/app/profile/page.tsx
import type { Metadata } from "next";
import Profile from "../components/Perfil";

// Mantén o quita esta línea según tu necesidad de revalidación.
// No afecta al tema de Safe Browsing.
export const dynamic = "force-dynamic";

/**
 * Metadatos CONSISTENTES (sin detección por user-agent ni variantes para bots).
 * Evita cualquier señal de "cloaking" ante Google/Chrome.
 */
export const metadata: Metadata = {
  title: "Perfil | Gonzalo Pedrosa",
  description:
    "Orientación profesional y bienestar en formato online. Sesiones privadas con enfoque claro y cercano.",
  openGraph: {
    title: "Perfil | Gonzalo Pedrosa",
    description:
      "Orientación profesional y bienestar en formato online. Sesiones privadas con enfoque claro y cercano.",
    images: ["/yo.png"],
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function ProfilePage() {
  return <Profile />;
}