import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psicólogo para Estudiantes en Chillán | Gonzalo Pedrosa",
  description:
    "Psicólogo para estudiantes universitarios y de enseñanza media en Chillán. Apoyo en ansiedad, estrés académico, procrastinación y orientación vocacional.",
  alternates: {
    canonical: "/psicologo-estudiantes-chillan",
  },
  openGraph: {
    title: "Psicólogo para Estudiantes en Chillán | Gonzalo Pedrosa",
    description: "Psicólogo para estudiantes universitarios y de enseñanza media en Chillán. Apoyo en ansiedad, estrés académico, procrastinación y orientación vocacional.",
    url: "https://gonzalopedrosa.cl/psicologo-estudiantes-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicólogo para Estudiantes en Chillán",
    description: "Psicólogo para estudiantes universitarios y de enseñanza media en Chillán. Apoyo en ansiedad, estrés académico, procrastinación y orientación vocacion",
  },
};


// FAQPage Schema para rich snippets en Google
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Mis papás se van a enterar de lo que hablo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Si eres mayor de edad, todo es confidencial. Si eres menor, hablamos sobre qué información compartir con tus padres."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo pago si no tengo ingresos propios?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Muchos estudiantes vienen con apoyo de sus familias. También emito boleta para{\" \"} reembolso Isapre{\" \"} si tienes cobertura."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es normal sentirse así?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Es más común de lo que crees. Muchos estudiantes pasan por momentos difíciles. Que sea común no significa que tengas que aguantarlo solo/a."
      }
    }
  ]
};

export default function PsicologoEstudiantesChillanPage() {
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
        Psicólogo para Estudiantes en Chillán
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "3rem", lineHeight: 1.6 }}>
        La etapa de estudiante puede ser desafiante. Presión académica, dudas
        vocacionales, relaciones, identidad... La terapia te ayuda a navegar
        este período con más claridad.
      </p>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Temas comunes en estudiantes
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Ansiedad ante exámenes y evaluaciones",
            "Procrastinación y dificultad para estudiar",
            "Estrés académico y burnout estudiantil",
            "Dudas vocacionales o de carrera",
            "Presión familiar por el rendimiento",
            "Problemas de adaptación (cambio de ciudad, de entorno)",
            "Relaciones, identidad y autoestima",
            "Síndrome del impostor académico",
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
          Cómo puedo ayudarte
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Técnicas para manejar la ansiedad académica",
            "Estrategias contra la procrastinación",
            "Organización y hábitos de estudio",
            "Clarificar decisiones vocacionales",
            "Trabajar la autoexigencia y perfeccionismo",
            "Equilibrio entre estudio y vida personal",
          ].map((item, i) => (
            <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#444", fontSize: "0.9375rem" }}>
              <span style={{ color: "#000" }}>✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section style={{ padding: "1.25rem", backgroundColor: "#fef3c7", borderRadius: "12px", marginBottom: "2.5rem", border: "1px solid #fcd34d" }}>
        <p style={{ fontWeight: 600, color: "#92400e", marginBottom: "0.5rem", fontSize: "0.9375rem" }}>💡 Horarios flexibles</p>
        <p style={{ color: "#78350f", fontSize: "0.875rem", lineHeight: 1.6 }}>
          Entiendo que tu horario puede ser complicado. Ofrezco sesiones en
          horarios compatibles con clases y también{" "}
          <Link href="/terapia-online" style={{ color: "#78350f", textDecoration: "underline" }}>terapia online</Link>.
        </p>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Preguntas frecuentes
        </h2>
        <div style={{ display: "grid", gap: "0.5rem" }}>
          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Mis papás se van a enterar de lo que hablo?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              No. Si eres mayor de edad, todo es confidencial. Si eres menor,
              hablamos sobre qué información compartir con tus padres.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Cómo pago si no tengo ingresos propios?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Muchos estudiantes vienen con apoyo de sus familias. También emito
              boleta para{" "}
              <Link href="/psicologo-reembolso-isapre-chillan" style={{ color: "#000", textDecoration: "underline" }}>reembolso Isapre</Link>{" "}
              si tienes cobertura.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Es normal sentirse así?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Es más común de lo que crees. Muchos estudiantes pasan por momentos
              difíciles. Que sea común no significa que tengas que aguantarlo solo/a.
            </p>
          </details>
        </div>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#000", borderRadius: "16px", marginBottom: "3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          Tu bienestar también importa
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          No tienes que sacrificar tu salud mental por las notas.
        </p>
        <a href="https://wa.me/56968257817" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", backgroundColor: "#fff", color: "#000", borderRadius: "9999px", textDecoration: "none", fontWeight: 500, fontSize: "0.875rem" }}>
          Agendar sesión →
        </a>
      </section>

      <nav style={{ paddingTop: "2rem", borderTop: "1px solid #eaeaea" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.75rem" }}>Servicios relacionados</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Estrés académico", href: "/psicologo-estres-academico-chillan" },
            { label: "Procrastinación", href: "/psicologo-procrastinacion-estudios-chillan" },
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            { label: "Síndrome impostor", href: "/psicologo-sindrome-impostor-chillan" },
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


