import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ayuda Psicológica Urgente en Chillán | Psicólogo Gonzalo Pedrosa",
  description:
    "Ayuda psicológica urgente en Chillán. Si estás en crisis emocional y necesitas hablar con un profesional, contáctame.",
  alternates: {
    canonical: "/ayuda-psicologica-urgente-chillan",
  },
};

export default function AyudaPsicologicaUrgenteChillanPage() {
  return (
    <main style={{ maxWidth: 640, margin: "0 auto", padding: "4rem 1.5rem", fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
        <Image src="/yo.png" alt="Gonzalo Pedrosa - Psicólogo" width={64} height={64} priority style={{ borderRadius: "9999px", objectFit: "cover" }} />
        <div>
          <p style={{ fontWeight: 600, marginBottom: "0.125rem" }}>Gonzalo Pedrosa</p>
          <p style={{ fontSize: "0.875rem", color: "#666" }}>Psicólogo Clínico · +7 años de experiencia</p>
        </div>
      </div>

      <section style={{ padding: "1.25rem", backgroundColor: "#fef2f2", borderRadius: "12px", marginBottom: "2rem", border: "1px solid #fecaca" }}>
        <p style={{ fontWeight: 600, color: "#991b1b", marginBottom: "0.5rem", fontSize: "0.9375rem" }}>🚨 Si hay riesgo vital</p>
        <p style={{ color: "#7f1d1d", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "0.75rem" }}>
          Si estás pensando en hacerte daño o quitarte la vida, llama ahora:
        </p>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.375rem", color: "#7f1d1d", fontSize: "0.875rem" }}>
          <li><strong>Salud Responde:</strong> 600 360 7777</li>
          <li><strong>Fono de la Esperanza:</strong> 717 200 200</li>
          <li><strong>Urgencias:</strong> 131</li>
        </ul>
      </section>

      <h1 style={{ fontSize: "2.5rem", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "1rem", lineHeight: 1.1 }}>
        Ayuda Psicológica Urgente en Chillán
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "3rem", lineHeight: 1.6 }}>
        Si estás pasando por una crisis emocional y necesitas hablar con un
        profesional lo antes posible, puedo intentar darte una hora pronto.
      </p>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Situaciones de urgencia
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Crisis de ansiedad o pánico intensas",
            "Crisis emocional por una noticia o evento",
            "Ruptura o pérdida reciente",
            "Desborde emocional que no puedes manejar",
            "Pensamientos muy negativos o desesperanza",
            "Necesidad urgente de hablar con alguien",
          ].map((item, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "0.75rem 1rem", backgroundColor: "#fafafa", borderRadius: "8px", fontSize: "0.9375rem", color: "#444" }}>
              <span style={{ color: "#000", flexShrink: 0 }}>—</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Cómo funciona
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Escríbeme por WhatsApp explicando brevemente qué pasa",
            "Intentaré darte hora lo antes posible según disponibilidad",
            "Sesión puede ser presencial u online",
            "Si no tengo disponibilidad, te orientaré sobre alternativas",
          ].map((item, i) => (
            <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#444", fontSize: "0.9375rem" }}>
              <span style={{ color: "#000" }}>✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section style={{ padding: "1.25rem", backgroundColor: "#fef3c7", borderRadius: "12px", marginBottom: "2.5rem", border: "1px solid #fcd34d" }}>
        <p style={{ fontWeight: 600, color: "#92400e", marginBottom: "0.5rem", fontSize: "0.9375rem" }}>⚠️ Importante</p>
        <p style={{ color: "#78350f", fontSize: "0.875rem", lineHeight: 1.6 }}>
          No ofrezco atención 24/7. Si escribes fuera de horario, responderé
          cuando pueda. Para emergencias fuera de horario, usa las líneas de
          crisis arriba mencionadas.
        </p>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#000", borderRadius: "16px", marginBottom: "3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          ¿Necesitas hablar?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          Escríbeme y buscaremos un espacio pronto.
        </p>
        <a href="https://wa.me/56968257817" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", backgroundColor: "#fff", color: "#000", borderRadius: "9999px", textDecoration: "none", fontWeight: 500, fontSize: "0.875rem" }}>
          WhatsApp →
        </a>
      </section>

      <nav style={{ paddingTop: "2rem", borderTop: "1px solid #eaeaea" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.75rem" }}>Servicios relacionados</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Hora hoy", href: "/hora-psicologo-chillan-hoy" },
            { label: "Crisis de pánico", href: "/psicologo-crisis-de-panico-chillan" },
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            { label: "Depresión", href: "/psicologo-depresion-chillan" },
          ].map((item, i) => (
            <Link key={i} href={item.href} style={{ color: "#666", fontSize: "0.875rem", textDecoration: "none", padding: "0.375rem 0.75rem", border: "1px solid #eaeaea", borderRadius: "9999px" }}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </main>
  );
}

