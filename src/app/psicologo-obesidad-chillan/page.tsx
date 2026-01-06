import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psicólogo Obesidad en Chillán | Gonzalo Pedrosa",
  description:
    "Psicólogo especializado en obesidad en Chillán. Tratamiento psicológico para pérdida de peso, alimentación emocional y cambio de hábitos.",
  alternates: {
    canonical: "/psicologo-obesidad-chillan",
  },
  openGraph: {
    title: "Psicólogo Obesidad en Chillán | Gonzalo Pedrosa",
    description: "Psicólogo especializado en obesidad en Chillán. Tratamiento psicológico para pérdida de peso, alimentación emocional y cambio de hábitos.",
    url: "https://gonzalopedrosa.cl/psicologo-obesidad-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicólogo Obesidad en Chillán",
    description: "Psicólogo especializado en obesidad en Chillán. Tratamiento psicológico para pérdida de peso, alimentación emocional y cambio de hábitos.",
  },
};


// FAQPage Schema para rich snippets en Google
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Por qué no puedo mantener las dietas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Probablemente porque no has trabajado los aspectos emocionales. Si comes por razones emocionales, necesitas otras herramientas además de una dieta."
      }
    },
    {
      "@type": "Question",
      "name": "¿Trabajas junto con nutricionistas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, cuando es necesario me coordino con nutricionistas para un abordaje integral. La combinación es más efectiva."
      }
    },
    {
      "@type": "Question",
      "name": "¿La terapia me hará bajar de peso?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La terapia trabaja los factores psicológicos que dificultan mantener cambios. Combinada con alimentación y actividad física adecuadas, facilita resultados duraderos."
      }
    }
  ]
};

export default function PsicologoObesidadChillanPage() {
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
        Psicólogo Obesidad en Chillán
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "3rem", lineHeight: 1.6 }}>
        La obesidad tiene componentes psicológicos importantes. Las dietas
        solas no funcionan si no trabajas la relación emocional con la comida.
        La terapia te ayuda a hacer cambios duraderos.
      </p>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Aspectos psicológicos de la obesidad
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Alimentación emocional (comer por ansiedad, tristeza, aburrimiento)",
            "Atracones de comida",
            "Uso de comida como regulador emocional",
            "Baja autoestima relacionada con el peso",
            "Historial de dietas restrictivas y efecto rebote",
            "Dificultad para mantener hábitos a largo plazo",
            "Relación conflictiva con el cuerpo",
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
          Qué trabajamos
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Identificar la función emocional de comer",
            "Desarrollar estrategias alternativas de regulación",
            "Cambiar patrones de pensamiento sobre comida y cuerpo",
            "Trabajar autoestima independiente del peso",
            "Motivación y mantenimiento de cambios",
            "Preparación psicológica para cirugía bariátrica (si aplica)",
          ].map((item, i) => (
            <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#444", fontSize: "0.9375rem" }}>
              <span style={{ color: "#000" }}>✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section style={{ padding: "1.25rem", backgroundColor: "#f0f9ff", borderRadius: "12px", marginBottom: "2.5rem", border: "1px solid #bae6fd" }}>
        <p style={{ fontWeight: 600, color: "#0369a1", marginBottom: "0.5rem", fontSize: "0.9375rem" }}>💡 ¿Considerando cirugía bariátrica?</p>
        <p style={{ color: "#0c4a6e", fontSize: "0.875rem", lineHeight: 1.6 }}>
          También realizo la{" "}
          <Link href="/evaluacion-bariatrica-chillan" style={{ color: "#0369a1", textDecoration: "underline" }}>evaluación psicológica requerida</Link>{" "}
          para manga gástrica y bypass. La preparación psicológica mejora los
          resultados.
        </p>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Preguntas frecuentes
        </h2>
        <div style={{ display: "grid", gap: "0.5rem" }}>
          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Por qué no puedo mantener las dietas?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Probablemente porque no has trabajado los aspectos emocionales.
              Si comes por razones emocionales, necesitas otras herramientas
              además de una dieta.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Trabajas junto con nutricionistas?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Sí, cuando es necesario me coordino con nutricionistas para un
              abordaje integral. La combinación es más efectiva.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿La terapia me hará bajar de peso?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              La terapia trabaja los factores psicológicos que dificultan
              mantener cambios. Combinada con alimentación y actividad física
              adecuadas, facilita resultados duraderos.
            </p>
          </details>
        </div>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#000", borderRadius: "16px", marginBottom: "3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          Cambia tu relación con la comida
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          Esta vez puede ser diferente.
        </p>
        <a href="https://wa.me/56968257817" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", backgroundColor: "#fff", color: "#000", borderRadius: "9999px", textDecoration: "none", fontWeight: 500, fontSize: "0.875rem" }}>
          Agendar sesión →
        </a>
      </section>

      <nav style={{ paddingTop: "2rem", borderTop: "1px solid #eaeaea" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.75rem" }}>Servicios relacionados</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Evaluación bariátrica", href: "/evaluacion-bariatrica-chillan" },
            { label: "Trastornos alimenticios", href: "/psicologo-trastornos-alimenticios-chillan" },
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            { label: "Autoestima", href: "/psicologo-baja-autoestima-chillan" },
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

