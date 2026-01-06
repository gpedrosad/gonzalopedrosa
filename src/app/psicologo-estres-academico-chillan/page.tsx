import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psicólogo Estrés Académico en Chillán | Gonzalo Pedrosa",
  description:
    "Psicólogo especializado en estrés académico en Chillán. Tratamiento para burnout estudiantil, ansiedad por exámenes y presión universitaria.",
  alternates: {
    canonical: "/psicologo-estres-academico-chillan",
  },
  openGraph: {
    title: "Psicólogo Estrés Académico en Chillán | Gonzalo Pedrosa",
    description: "Psicólogo especializado en estrés académico en Chillán. Tratamiento para burnout estudiantil, ansiedad por exámenes y presión universitaria.",
    url: "https://gonzalopedrosa.cl/psicologo-estres-academico-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicólogo Estrés Académico en Chillán",
    description: "Psicólogo especializado en estrés académico en Chillán. Tratamiento para burnout estudiantil, ansiedad por exámenes y presión universitaria.",
  },
};


// FAQPage Schema para rich snippets en Google
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿No debería poder manejar esto solo/a?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El sistema educativo actual genera niveles de presión que pueden superar los recursos de cualquiera. Pedir ayuda es inteligente, no una debilidad."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puede la terapia mejorar mi rendimiento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Al reducir la ansiedad y mejorar tu organización, muchos estudiantes rinden mejor. Pero el objetivo principal es tu bienestar, no solo las notas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Tienen horarios para estudiantes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, tengo horarios flexibles. También ofrezco{\" \"} terapia online{\" \"} para mayor comodidad."
      }
    }
  ]
};

export default function PsicologoEstresAcademicoChillanPage() {
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
        Psicólogo Estrés Académico en Chillán
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "3rem", lineHeight: 1.6 }}>
        La presión por rendir puede volverse abrumadora. Cuando el estrés
        académico afecta tu salud, sueño y bienestar, es momento de buscar
        apoyo profesional.
      </p>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Señales de estrés académico
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Ansiedad constante por las notas y evaluaciones",
            "Problemas de sueño en época de pruebas",
            "Sensación de estar siempre atrasado/a",
            "Bloqueos mentales al estudiar o en exámenes",
            "Agotamiento físico y mental",
            "Pérdida de motivación por la carrera",
            "Aislamiento social por estudiar",
            "Síntomas físicos: dolores de cabeza, tensión",
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
            "Técnicas de manejo del estrés",
            "Ansiedad ante exámenes",
            "Organización y gestión del tiempo",
            "Perfeccionismo y autoexigencia",
            "Equilibrio estudio-vida personal",
            "Estrategias para evitar el burnout",
          ].map((item, i) => (
            <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#444", fontSize: "0.9375rem" }}>
              <span style={{ color: "#000" }}>✓</span>
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
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿No debería poder manejar esto solo/a?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              El sistema educativo actual genera niveles de presión que pueden
              superar los recursos de cualquiera. Pedir ayuda es inteligente, no
              una debilidad.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Puede la terapia mejorar mi rendimiento?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Sí. Al reducir la ansiedad y mejorar tu organización, muchos
              estudiantes rinden mejor. Pero el objetivo principal es tu
              bienestar, no solo las notas.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Tienen horarios para estudiantes?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Sí, tengo horarios flexibles. También ofrezco{" "}
              <Link href="/terapia-online" style={{ color: "#000", textDecoration: "underline" }}>terapia online</Link>{" "}
              para mayor comodidad.
            </p>
          </details>
        </div>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#000", borderRadius: "16px", marginBottom: "3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          Estudiar no tiene que ser sufrimiento
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          Aprende a rendir sin destruirte en el proceso.
        </p>
        <a href="https://wa.me/56968257817" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", backgroundColor: "#fff", color: "#000", borderRadius: "9999px", textDecoration: "none", fontWeight: 500, fontSize: "0.875rem" }}>
          Agendar sesión →
        </a>
      </section>

      <nav style={{ paddingTop: "2rem", borderTop: "1px solid #eaeaea" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.75rem" }}>Servicios relacionados</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Estudiantes", href: "/psicologo-estudiantes-chillan" },
            { label: "Procrastinación", href: "/psicologo-procrastinacion-estudios-chillan" },
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            { label: "Perfeccionismo", href: "/psicologo-perfeccionismo-autoexigencia-chillan" },
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

