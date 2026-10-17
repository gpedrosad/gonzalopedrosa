import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página no encontrada | Gonzalo Pedrosa",
  description:
    "Esta URL no existe o ya no está disponible. Vuelve al inicio o agenda una sesión con el psicólogo en Chillán.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
        style={{
          maxWidth: 640,
          margin: "0 auto",
          padding: "4rem 1.5rem",
          fontFamily:
            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            marginBottom: "1rem",
            lineHeight: 1.1,
          }}
        >
          Página no encontrada
        </h1>
        <p
          style={{
            fontSize: "1.125rem",
            color: "#666",
            marginBottom: "2rem",
            lineHeight: 1.6,
          }}
        >
          Esta URL no existe o ya no está disponible. Puedes volver al inicio o
          agendar una sesión.
        </p>
        <p style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "#000", fontWeight: 500 }}>
            Ir al inicio
          </Link>
          <Link href="/agendar" style={{ color: "#000", fontWeight: 500 }}>
            Agendar sesión
          </Link>
        </p>
      </main>
  );
}
