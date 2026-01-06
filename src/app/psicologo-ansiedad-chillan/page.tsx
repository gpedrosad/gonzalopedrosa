import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psicólogo Ansiedad en Chillán, Chile | Gonzalo Pedrosa",
  description:
    "Psicólogo especializado en ansiedad en Chillán, Chile. Tratamiento con enfoque cognitivo-conductual basado en evidencia. Sesiones presenciales y online.",
  alternates: {
    canonical: "/psicologo-ansiedad-chillan",
  },
  openGraph: {
    title: "Psicólogo Ansiedad en Chillán, Chile | Gonzalo Pedrosa",
    description: "Psicólogo especializado en ansiedad en Chillán, Chile. Tratamiento con enfoque cognitivo-conductual basado en evidencia. Sesiones presenciales y online.",
    url: "https://gonzalopedrosa.cl/psicologo-ansiedad-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicólogo Ansiedad en Chillán, Chile",
    description: "Psicólogo especializado en ansiedad en Chillán, Chile. Tratamiento con enfoque cognitivo-conductual basado en evidencia. Sesiones presenciales y onlin",
  },
};


// FAQPage Schema para rich snippets en Google
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto dura un tratamiento para ansiedad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Generalmente entre 8-16 sesiones para casos de ansiedad moderada. Algunos notan cambios en pocas semanas, mientras otros requieren un proceso más extenso. Lo evaluamos juntos durante el tratamiento."
      }
    },
    {
      "@type": "Question",
      "name": "¿La ansiedad puede derivar en crisis de pánico?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En algunos casos, la ansiedad sostenida puede manifestarse en{\" \"} crisis de pánico . Identificarla tempranamente puede ayudar a prevenir su escalada."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es confidencial la terapia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Todo lo conversado está protegido por secreto profesional, salvo excepciones legales que se explican al inicio del proceso."
      }
    },
    {
      "@type": "Question",
      "name": "¿Necesito medicación para tratar la ansiedad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No necesariamente. La TCC por sí sola es muy efectiva. En casos severos, puede combinarse con medicación (derivación a psiquiatra). Lo evaluamos según tu situación."
      }
    }
  ]
};

export default function PsicologoAnsiedadChillanPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main
      style={{
        maxWidth: 640,
        margin: "0 auto",
        padding: "4rem 1.5rem",
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      {/* Header con credenciales */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        <Image
          src="/yo.png"
          alt="Gonzalo Pedrosa - Psicólogo"
          width={64}
          height={64}
          priority
          style={{
            borderRadius: "9999px",
            objectFit: "cover",
          }}
        />
        <div>
          <p style={{ fontWeight: 600, marginBottom: "0.125rem" }}>
            Gonzalo Pedrosa
          </p>
          <p style={{ fontSize: "0.875rem", color: "#666" }}>
            Psicólogo Clínico · +7 años de experiencia
          </p>
        </div>
      </div>

      <p
        style={{
          fontSize: "0.75rem",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "#999",
          marginBottom: "0.75rem",
        }}
      >
        Chillán, Chile
      </p>

      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          marginBottom: "1rem",
          lineHeight: 1.1,
        }}
      >
        Psicólogo Ansiedad en Chillán
      </h1>

      <p
        style={{
          fontSize: "1.125rem",
          color: "#666",
          marginBottom: "3rem",
          lineHeight: 1.6,
        }}
      >
        La ansiedad es una respuesta natural, pero cuando se vuelve persistente
        puede afectar tu calidad de vida. El acompañamiento profesional te ayuda
        a recuperar el equilibrio.
      </p>

      {/* Credenciales y experiencia - EEAT */}
      <section
        style={{
          marginBottom: "3rem",
          padding: "1.5rem",
          backgroundColor: "#f8fafc",
          borderRadius: "12px",
          border: "1px solid #e2e8f0",
        }}
      >
        <h2
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#999",
            marginBottom: "1rem",
          }}
        >
          Sobre mi formación
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.625rem" }}>
          {[
            "Psicólogo titulado, Universidad de Chile",
            "Especialización en Terapia Cognitivo-Conductual",
            "Más de 7 años tratando trastornos de ansiedad",
            "Formación continua en técnicas basadas en evidencia",
            "Atención a más de 500 pacientes",
          ].map((item, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.625rem",
                fontSize: "0.9375rem",
                color: "#444",
              }}
            >
              <span style={{ color: "#22c55e" }}>✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#999",
            marginBottom: "1rem",
          }}
        >
          Señales comunes de ansiedad
        </h2>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            display: "grid",
            gap: "0.5rem",
          }}
        >
          {[
            "Preocupación excesiva o anticipación de lo peor",
            "Tensión muscular, dolores de cabeza o fatiga",
            "Dificultad para concentrarse",
            "Problemas de sueño (insomnio o sueño poco reparador)",
            "Irritabilidad o sensación de estar al límite",
            "Evitación de situaciones que generan malestar",
            "Síntomas físicos: taquicardia, sudoración, mareos",
          ].map((item, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.75rem",
                padding: "0.75rem 1rem",
                backgroundColor: "#fafafa",
                borderRadius: "8px",
                fontSize: "0.9375rem",
                color: "#444",
              }}
            >
              <span style={{ color: "#000", flexShrink: 0 }}>—</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#999",
            marginBottom: "1rem",
          }}
        >
          Tipos de ansiedad que trato
        </h2>
        <div style={{ display: "grid", gap: "0.75rem" }}>
          {[
            { tipo: "Ansiedad generalizada", desc: "Preocupación constante por múltiples áreas de la vida." },
            { tipo: "Ansiedad social", desc: "Miedo intenso a situaciones sociales o de evaluación.", link: "/psicologo-fobia-social-chillan" },
            { tipo: "Crisis de pánico", desc: "Episodios súbitos de miedo intenso con síntomas físicos.", link: "/psicologo-crisis-de-panico-chillan" },
            { tipo: "Ansiedad por estrés laboral", desc: "Malestar relacionado con el trabajo y el rendimiento.", link: "/psicologo-estres-laboral-chillan" },
          ].map((item, i) => (
            <div key={i} style={{ padding: "1rem", backgroundColor: "#fafafa", borderRadius: "8px" }}>
              <p style={{ fontWeight: 600, marginBottom: "0.25rem", color: "#000" }}>
                {item.link ? (
                  <Link href={item.link} style={{ color: "#000", textDecoration: "underline" }}>
                    {item.tipo}
                  </Link>
                ) : (
                  item.tipo
                )}
              </p>
              <p style={{ fontSize: "0.875rem", color: "#666" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#999",
            marginBottom: "1rem",
          }}
        >
          Mi enfoque de tratamiento
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
          Trabajo principalmente con{" "}
          <Link
            href="/psicologo-cognitivo-conductual-chillan"
            style={{ color: "#000", textDecoration: "underline" }}
          >
            Terapia Cognitivo-Conductual (TCC)
          </Link>
          , el tratamiento con mayor respaldo científico para la ansiedad. Este
          enfoque tiene tasas de efectividad del 60-80% según estudios clínicos.
        </p>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
          El proceso incluye:
        </p>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Comprender los patrones que mantienen tu ansiedad",
            "Aprender técnicas de regulación emocional",
            "Reestructurar pensamientos ansiosos",
            "Exposición gradual a situaciones temidas",
            "Desarrollar herramientas prácticas para el día a día",
          ].map((item, i) => (
            <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#444", fontSize: "0.9375rem" }}>
              <span style={{ color: "#000" }}>✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#999",
            marginBottom: "1rem",
          }}
        >
          Cómo iniciar tu tratamiento
        </h2>
        <div style={{ display: "grid", gap: "0.75rem" }}>
          {[
            { paso: "1. Agenda tu primera sesión", desc: "Escríbeme por WhatsApp o agenda directamente. Respondo en menos de 24 horas." },
            { paso: "2. Primera sesión de evaluación", desc: "Conversamos sobre tu situación, objetivos y acordamos un plan de trabajo." },
            { paso: "3. Sesiones semanales", desc: "Sesiones de 50 minutos, presenciales en Chillán u online por videollamada." },
            { paso: "4. Seguimiento y ajustes", desc: "Evaluamos avances y ajustamos el tratamiento según tu progreso." },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "1rem", padding: "1rem", backgroundColor: "#fafafa", borderRadius: "8px" }}>
              <span style={{ fontSize: "1.25rem", fontWeight: 700, color: "#000", flexShrink: 0 }}>{item.paso.split(".")[0]}.</span>
              <div>
                <p style={{ fontWeight: 600, marginBottom: "0.25rem", color: "#000" }}>{item.paso.split(". ")[1]}</p>
                <p style={{ fontSize: "0.875rem", color: "#666" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#999",
            marginBottom: "1rem",
          }}
        >
          Modalidades de atención
        </h2>
        <div style={{ display: "grid", gap: "0.75rem" }}>
          <div style={{ padding: "1rem", backgroundColor: "#fafafa", borderRadius: "8px", border: "1px solid #eaeaea" }}>
            <p style={{ fontWeight: 600, marginBottom: "0.25rem", color: "#000" }}>📍 Presencial en Chillán</p>
            <p style={{ fontSize: "0.875rem", color: "#666" }}>Consulta ubicada en el centro de la ciudad. Ambiente privado y cómodo.</p>
          </div>
          <Link href="/terapia-online" style={{ textDecoration: "none" }}>
            <div style={{ padding: "1rem", backgroundColor: "#fafafa", borderRadius: "8px", border: "1px solid #eaeaea" }}>
              <p style={{ fontWeight: 600, marginBottom: "0.25rem", color: "#000" }}>💻 Terapia online →</p>
              <p style={{ fontSize: "0.875rem", color: "#666" }}>Por videollamada desde donde estés. Misma efectividad que presencial.</p>
            </div>
          </Link>
        </div>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#999",
            marginBottom: "1rem",
          }}
        >
          Valor y formas de pago
        </h2>
        <div style={{ padding: "1rem", backgroundColor: "#fafafa", borderRadius: "8px" }}>
          <p style={{ fontWeight: 600, marginBottom: "0.5rem", color: "#000" }}>
            $35.000 por sesión (50 minutos)
          </p>
          <p style={{ fontSize: "0.875rem", color: "#666", marginBottom: "0.5rem" }}>
            Transferencia o efectivo · Emito boleta para{" "}
            <Link href="/psicologo-reembolso-isapre-chillan" style={{ color: "#000", textDecoration: "underline" }}>
              reembolso Isapre
            </Link>
          </p>
          <p style={{ fontSize: "0.8125rem", color: "#999" }}>
            Recupera entre el 50-80% según tu plan
          </p>
        </div>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#999",
            marginBottom: "1rem",
          }}
        >
          Preguntas frecuentes
        </h2>

        <div style={{ display: "grid", gap: "0.5rem" }}>
          <details
            style={{
              padding: "1rem",
              border: "1px solid #eaeaea",
              borderRadius: "12px",
            }}
          >
            <summary
              style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}
            >
              ¿Cuánto dura un tratamiento para ansiedad?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Generalmente entre 8-16 sesiones para casos de ansiedad moderada.
              Algunos notan cambios en pocas semanas, mientras otros requieren
              un proceso más extenso. Lo evaluamos juntos durante el tratamiento.
            </p>
          </details>

          <details
            style={{
              padding: "1rem",
              border: "1px solid #eaeaea",
              borderRadius: "12px",
            }}
          >
            <summary
              style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}
            >
              ¿La ansiedad puede derivar en crisis de pánico?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              En algunos casos, la ansiedad sostenida puede manifestarse en{" "}
              <Link
                href="/psicologo-crisis-de-panico-chillan"
                style={{ color: "#000", textDecoration: "underline" }}
              >
                crisis de pánico
              </Link>
              . Identificarla tempranamente puede ayudar a prevenir su escalada.
            </p>
          </details>

          <details
            style={{
              padding: "1rem",
              border: "1px solid #eaeaea",
              borderRadius: "12px",
            }}
          >
            <summary
              style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}
            >
              ¿Es confidencial la terapia?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Sí. Todo lo conversado está protegido por secreto profesional,
              salvo excepciones legales que se explican al inicio del proceso.
            </p>
          </details>

          <details
            style={{
              padding: "1rem",
              border: "1px solid #eaeaea",
              borderRadius: "12px",
            }}
          >
            <summary
              style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}
            >
              ¿Necesito medicación para tratar la ansiedad?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              No necesariamente. La TCC por sí sola es muy efectiva. En casos
              severos, puede combinarse con medicación (derivación a
              psiquiatra). Lo evaluamos según tu situación.
            </p>
          </details>
        </div>
      </section>

      <section
        style={{
          padding: "2rem",
          backgroundColor: "#000",
          borderRadius: "16px",
          marginBottom: "3rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "0.75rem",
            color: "#fff",
          }}
        >
          Da el primer paso
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            marginBottom: "1.5rem",
            fontSize: "0.9375rem",
          }}
        >
          Si la ansiedad está afectando tu día a día, conversemos.
        </p>
        <a
          href="https://wa.me/56968257817"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.75rem 1.5rem",
            backgroundColor: "#fff",
            color: "#000",
            borderRadius: "9999px",
            textDecoration: "none",
            fontWeight: 500,
            fontSize: "0.875rem",
          }}
        >
          Agendar por WhatsApp →
        </a>
      </section>

      <nav
        style={{
          paddingTop: "2rem",
          borderTop: "1px solid #eaeaea",
        }}
      >
        <p
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#999",
            marginBottom: "0.75rem",
          }}
        >
          Servicios relacionados
        </p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Crisis de pánico", href: "/psicologo-crisis-de-panico-chillan" },
            { label: "Estrés laboral", href: "/psicologo-estres-laboral-chillan" },
            { label: "Fobia social", href: "/psicologo-fobia-social-chillan" },
            { label: "TCC", href: "/psicologo-cognitivo-conductual-chillan" },
            { label: "Online", href: "/terapia-online" },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              style={{
                color: "#666",
                fontSize: "0.875rem",
                textDecoration: "none",
                padding: "0.375rem 0.75rem",
                border: "1px solid #eaeaea",
                borderRadius: "9999px",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </main>
    </>
  );
}
