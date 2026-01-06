import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psicólogo Identidad de Género en Chillán | Gonzalo Pedrosa",
  description:
    "Psicólogo afirmativo para identidad de género en Chillán. Acompañamiento profesional y respetuoso en tu proceso de exploración o transición.",
  alternates: {
    canonical: "/psicologo-identidad-genero-chillan",
  },
  openGraph: {
    title: "Psicólogo Identidad de Género en Chillán | Gonzalo Pedrosa",
    description: "Psicólogo afirmativo para identidad de género en Chillán. Acompañamiento profesional y respetuoso en tu proceso de exploración o transición.",
    url: "https://gonzalopedrosa.cl/psicologo-identidad-genero-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicólogo Identidad de Género en Chillán",
    description: "Psicólogo afirmativo para identidad de género en Chillán. Acompañamiento profesional y respetuoso en tu proceso de exploración o transición.",
  },
};


// FAQPage Schema para rich snippets en Google
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Me vas a tratar de convencer de algo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Mi rol es acompañarte en tu proceso de exploración. Las decisiones sobre tu identidad y tu cuerpo son tuyas. No tengo una agenda."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puedes emitir informes para tratamiento hormonal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Si estás en proceso de transición y necesitas un{\" \"} informe psicológico {\" \"} para tratamiento hormonal o cirugía, puedo evaluarte y emitirlo si corresponde."
      }
    },
    {
      "@type": "Question",
      "name": "¿Atiendes a menores de edad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mi trabajo es con adultos. Si tienes un hijo/a menor que necesita apoyo, puedo derivarte a un colega especialista en infanto-juvenil."
      }
    }
  ]
};

export default function PsicologoIdentidadGeneroChillanPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main style={{ maxWidth: 640, margin: "0 auto", padding: "4rem 1.5rem", fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
        <Image src="/yo.png" alt="Gonzalo Pedrosa - Psicólogo" width={64} height={64} priority style={{ borderRadius: "9999px", objectFit: "cover" }} />
        <div>
          <p style={{ fontWeight: 600, marginBottom: "0.125rem" }}>Gonzalo Pedrosa</p>
          <p style={{ fontSize: "0.875rem", color: "#666" }}>Psicólogo Clínico · +7 años de experiencia</p>
        </div>
      </div>

      <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.75rem" }}>Chillán, Chile</p>

      <h1 style={{ fontSize: "2.5rem", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "1rem", lineHeight: 1.1 }}>
        Psicólogo Identidad de Género en Chillán
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "3rem", lineHeight: 1.6 }}>
        Ofrezco un espacio seguro y afirmativo para explorar tu identidad de
        género, sin patologización ni presión. Mi rol es acompañarte, no
        decidir por ti.
      </p>

      <section style={{ padding: "1.25rem", backgroundColor: "#f0fdf4", borderRadius: "12px", marginBottom: "2.5rem", border: "1px solid #bbf7d0" }}>
        <p style={{ fontWeight: 600, color: "#166534", marginBottom: "0.5rem", fontSize: "0.9375rem" }}>🏳️‍⚧️ Enfoque afirmativo</p>
        <p style={{ color: "#14532d", fontSize: "0.875rem", lineHeight: 1.6 }}>
          No trabajo con terapias de conversión ni enfoques patologizantes.
          Tu identidad de género no es un problema a resolver, sino una parte
          de ti que merece respeto.
        </p>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Puedo ayudarte con
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Explorar tu identidad de género",
            "Manejar disforia de género",
            "Prepararte para salir del closet (si decides hacerlo)",
            "Lidiar con reacciones de familia o entorno",
            "Proceso de transición (acompañamiento emocional)",
            "Informes para tratamientos médicos (si los requieres)",
            "Ansiedad, depresión u otras dificultades relacionadas",
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
          Preguntas frecuentes
        </h2>
        <div style={{ display: "grid", gap: "0.5rem" }}>
          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Me vas a tratar de convencer de algo?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              No. Mi rol es acompañarte en tu proceso de exploración. Las
              decisiones sobre tu identidad y tu cuerpo son tuyas. No tengo
              una agenda.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Puedes emitir informes para tratamiento hormonal?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Sí. Si estás en proceso de transición y necesitas un{" "}
              <Link href="/informe-psicologico-chillan" style={{ color: "#000", textDecoration: "underline" }}>
                informe psicológico
              </Link>{" "}
              para tratamiento hormonal o cirugía, puedo evaluarte y emitirlo
              si corresponde.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Atiendes a menores de edad?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Mi trabajo es con adultos. Si tienes un hijo/a menor que necesita
              apoyo, puedo derivarte a un colega especialista en infanto-juvenil.
            </p>
          </details>
        </div>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#000", borderRadius: "16px", marginBottom: "3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          Un espacio seguro para ti
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          Tal como eres.
        </p>
        <a href="https://wa.me/56968257817" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", backgroundColor: "#fff", color: "#000", borderRadius: "9999px", textDecoration: "none", fontWeight: 500, fontSize: "0.875rem" }}>
          Agendar sesión →
        </a>
      </section>

      <nav style={{ paddingTop: "2rem", borderTop: "1px solid #eaeaea" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.75rem" }}>Servicios relacionados</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Depresión", href: "/psicologo-depresion-chillan" },
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            { label: "Autoestima", href: "/psicologo-baja-autoestima-chillan" },
            { label: "Informe psicológico", href: "/informe-psicologico-chillan" },
          ].map((item, i) => (
            <Link key={i} href={item.href} style={{ color: "#666", fontSize: "0.875rem", textDecoration: "none", padding: "0.375rem 0.75rem", border: "1px solid #eaeaea", borderRadius: "9999px" }}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </main>
    </>
  );
}


