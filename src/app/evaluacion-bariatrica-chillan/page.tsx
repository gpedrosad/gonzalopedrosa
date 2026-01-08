import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Evaluación Bariátrica en Chillán | Psicólogo Gonzalo Pedrosa",
  description:
    "Evaluación psicológica para cirugía bariátrica en Chillán. Informe psicológico requerido para operación de manga gástrica y bypass.",
  alternates: {
    canonical: "/evaluacion-bariatrica-chillan",
  },
  openGraph: {
    title: "Evaluación Bariátrica en Chillán | Psicólogo Gonzalo Pedrosa",
    description: "Evaluación psicológica para cirugía bariátrica en Chillán. Informe psicológico requerido para operación de manga gástrica y bypass.",
    url: "https://gonzalopedrosa.cl/evaluacion-bariatrica-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evaluación Bariátrica en Chillán | Psicólogo Gonzalo Pedrosa",
    description: "Evaluación psicológica para cirugía bariátrica en Chillán. Informe psicológico requerido para operación de manga gástrica y bypass.",
  },
};


// FAQPage Schema para rich snippets en Google
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo toma?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Generalmente 1-2 sesiones de evaluación. El informe se entrega dentro de la semana siguiente a completar la evaluación."
      }
    },
    {
      "@type": "Question",
      "name": "¿Me pueden rechazar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La evaluación es para determinar si estás preparado/a actualmente. Si hay contraindicaciones, trabajamos en ellas para que puedas optar más adelante."
      }
    },
    {
      "@type": "Question",
      "name": "¿El informe lo acepta cualquier clínica?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, el informe cumple estándares profesionales. Si tu equipo requiere un formato específico, me adapto a sus requerimientos."
      }
    }
  ]
};

export default function EvaluacionBariatricaChillanPage() {
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
        Evaluación Bariátrica en Chillán
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "3rem", lineHeight: 1.6 }}>
        Si estás considerando una cirugía bariátrica (manga gástrica, bypass),
        necesitas una evaluación psicológica. Realizo el informe requerido por
        los equipos quirúrgicos.
      </p>

      <section style={{ padding: "1.25rem", backgroundColor: "#f0fdf4", borderRadius: "12px", marginBottom: "2.5rem", border: "1px solid #bbf7d0" }}>
        <p style={{ fontWeight: 600, color: "#166534", marginBottom: "0.5rem", fontSize: "0.9375rem" }}>✓ Informe válido para cirugía</p>
        <p style={{ color: "#14532d", fontSize: "0.875rem", lineHeight: 1.6 }}>
          El informe psicológico que emito es aceptado por clínicas y equipos
          bariátricos. Cumple con los estándares requeridos para la aprobación
          quirúrgica.
        </p>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          ¿Qué evalúo?
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Motivación y expectativas realistas",
            "Historia con la alimentación y el peso",
            "Presencia de trastornos alimentarios",
            "Estado emocional y psicopatología",
            "Capacidad de adherencia al tratamiento",
            "Red de apoyo familiar/social",
            "Comprensión de los cambios post-cirugía",
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
          El proceso
        </h2>
        <div style={{ display: "grid", gap: "0.75rem" }}>
          {[
            { paso: "1", titulo: "Entrevista clínica", desc: "1-2 sesiones donde exploramos tu historia, motivación y situación actual." },
            { paso: "2", titulo: "Aplicación de tests", desc: "Pruebas psicológicas estandarizadas cuando el equipo lo requiera." },
            { paso: "3", titulo: "Elaboración del informe", desc: "Documento profesional con la evaluación completa." },
            { paso: "4", titulo: "Entrega", desc: "Recibes el informe para presentar a tu equipo médico." },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "1rem", padding: "1rem", backgroundColor: "#fafafa", borderRadius: "8px" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: 700, color: "#000", flexShrink: 0 }}>{item.paso}.</span>
              <div>
                <p style={{ fontWeight: 600, marginBottom: "0.25rem", color: "#000" }}>{item.titulo}</p>
                <p style={{ fontSize: "0.875rem", color: "#666" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Preguntas frecuentes
        </h2>
        <div style={{ display: "grid", gap: "0.5rem" }}>
          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Cuánto tiempo toma?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Generalmente 1-2 sesiones de evaluación. El informe se entrega
              dentro de la semana siguiente a completar la evaluación.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Me pueden rechazar?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              La evaluación es para determinar si estás preparado/a actualmente.
              Si hay contraindicaciones, trabajamos en ellas para que puedas
              optar más adelante.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿El informe lo acepta cualquier clínica?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Sí, el informe cumple estándares profesionales. Si tu equipo
              requiere un formato específico, me adapto a sus requerimientos.
            </p>
          </details>
        </div>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#000", borderRadius: "16px", marginBottom: "3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          Agenda tu evaluación
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          Informe profesional para tu proceso bariátrico.
        </p>
        <a href="https://wa.me/56968257817" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", backgroundColor: "#fff", color: "#000", borderRadius: "9999px", textDecoration: "none", fontWeight: 500, fontSize: "0.875rem" }}>
          Agendar evaluación →
        </a>
      </section>

      <nav style={{ paddingTop: "2rem", borderTop: "1px solid #eaeaea" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.75rem" }}>Servicios relacionados</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Trastornos alimenticios", href: "/psicologo-trastornos-alimenticios-chillan" },
            { label: "Obesidad", href: "/psicologo-obesidad-chillan" },
            { label: "Informe psicológico", href: "/informe-psicologico-chillan" },
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
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




