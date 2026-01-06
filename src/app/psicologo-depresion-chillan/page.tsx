import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psicólogo Depresión en Chillán, Chile | Gonzalo Pedrosa",
  description:
    "Psicólogo especializado en depresión en Chillán, Chile. Tratamiento con enfoque cognitivo-conductual basado en evidencia. Sesiones presenciales y online.",
  alternates: {
    canonical: "/psicologo-depresion-chillan",
  },
  openGraph: {
    title: "Psicólogo Depresión en Chillán, Chile | Gonzalo Pedrosa",
    description: "Psicólogo especializado en depresión en Chillán, Chile. Tratamiento con enfoque cognitivo-conductual basado en evidencia. Sesiones presenciales y online.",
    url: "https://gonzalopedrosa.cl/psicologo-depresion-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicólogo Depresión en Chillán, Chile",
    description: "Psicólogo especializado en depresión en Chillán, Chile. Tratamiento con enfoque cognitivo-conductual basado en evidencia. Sesiones presenciales y onli",
  },
};


// FAQPage Schema para rich snippets en Google
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto dura el tratamiento para depresión?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La duración varía según cada persona y la severidad del cuadro. Generalmente, se comienzan a notar mejorías entre las 8-12 sesiones, aunque algunos casos requieren tratamiento más prolongado."
      }
    },
    {
      "@type": "Question",
      "name": "¿Necesito medicación además de terapia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depende de cada caso. Para depresiones moderadas a severas, la combinación de terapia y medicación suele ser más efectiva. Si es necesario, te derivo a psiquiatra para evaluación."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puedo tener terapia online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, la{\" \"} terapia online {\" \"} es efectiva para el tratamiento de la depresión. Evaluamos juntos la modalidad más adecuada para ti."
      }
    }
  ]
};

export default function PsicologoDepresionChillanPage() {
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "1.5rem",
        }}
      >
        <Image
          src="/yo.png"
          alt="Gonzalo Pedrosa - Psicólogo"
          width={56}
          height={56}
          priority
          style={{
            borderRadius: "9999px",
            objectFit: "cover",
          }}
        />
        <div>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#999",
              marginBottom: "0.125rem",
            }}
          >
            Chillán, Chile
          </p>
          <p style={{ fontWeight: 500, color: "#000" }}>Gonzalo Pedrosa</p>
        </div>
      </div>

      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          marginBottom: "1rem",
          lineHeight: 1.1,
        }}
      >
        Psicólogo Depresión en Chillán
      </h1>

      <p
        style={{
          fontSize: "1.125rem",
          color: "#666",
          marginBottom: "3rem",
          lineHeight: 1.6,
        }}
      >
        La depresión es más que tristeza pasajera. Es una condición que afecta
        cómo te sientes, piensas y manejas las actividades diarias. Con el
        tratamiento adecuado, es posible recuperar el bienestar.
      </p>

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
          Señales de depresión
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Tristeza persistente o vacío emocional",
            "Pérdida de interés en actividades que antes disfrutabas",
            "Cambios en el apetito o peso",
            "Problemas de sueño (insomnio o dormir demasiado)",
            "Fatiga y falta de energía",
            "Dificultad para concentrarse o tomar decisiones",
            "Sentimientos de inutilidad o culpa excesiva",
            "Pensamientos de muerte o suicidio",
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

      <section
        style={{
          padding: "1.25rem",
          backgroundColor: "#fef3c7",
          borderRadius: "12px",
          marginBottom: "2.5rem",
          border: "1px solid #fcd34d",
        }}
      >
        <p
          style={{
            fontWeight: 600,
            color: "#92400e",
            marginBottom: "0.5rem",
            fontSize: "0.9375rem",
          }}
        >
          ⚠️ Importante
        </p>
        <p style={{ color: "#78350f", fontSize: "0.875rem", lineHeight: 1.6 }}>
          Si tienes pensamientos de hacerte daño, busca ayuda inmediata.
          Contacta a <strong>Salud Responde (600 360 7777)</strong> o acude a
          urgencias. Están disponibles 24/7.
        </p>
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
          Tratamiento
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
          La{" "}
          <Link
            href="/psicologo-cognitivo-conductual-chillan"
            style={{ color: "#000", textDecoration: "underline" }}
          >
            terapia cognitivo-conductual
          </Link>{" "}
          es uno de los tratamientos más efectivos para la depresión. Trabajamos
          en:
        </p>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Identificar y modificar patrones de pensamiento negativos",
            "Activación conductual (retomar actividades gradualmente)",
            "Desarrollar habilidades de afrontamiento",
            "Mejorar relaciones interpersonales",
            "Prevenir recaídas",
          ].map((item, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                color: "#444",
                fontSize: "0.9375rem",
              }}
            >
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
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>
              ¿Cuánto dura el tratamiento para depresión?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              La duración varía según cada persona y la severidad del cuadro.
              Generalmente, se comienzan a notar mejorías entre las 8-12
              sesiones, aunque algunos casos requieren tratamiento más
              prolongado.
            </p>
          </details>

          <details
            style={{
              padding: "1rem",
              border: "1px solid #eaeaea",
              borderRadius: "12px",
            }}
          >
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>
              ¿Necesito medicación además de terapia?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Depende de cada caso. Para depresiones moderadas a severas, la
              combinación de terapia y medicación suele ser más efectiva. Si es
              necesario, te derivo a psiquiatra para evaluación.
            </p>
          </details>

          <details
            style={{
              padding: "1rem",
              border: "1px solid #eaeaea",
              borderRadius: "12px",
            }}
          >
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>
              ¿Puedo tener terapia online?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Sí, la{" "}
              <Link
                href="/terapia-online"
                style={{ color: "#000", textDecoration: "underline" }}
              >
                terapia online
              </Link>{" "}
              es efectiva para el tratamiento de la depresión. Evaluamos juntos
              la modalidad más adecuada para ti.
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
          No tienes que enfrentarlo solo
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            marginBottom: "1.5rem",
            fontSize: "0.9375rem",
          }}
        >
          La depresión tiene tratamiento. Da el primer paso hoy.
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
          Agendar sesión →
        </a>
      </section>

      <nav style={{ paddingTop: "2rem", borderTop: "1px solid #eaeaea" }}>
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
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            { label: "Duelo", href: "/psicologo-duelo-chillan" },
            { label: "Autoestima", href: "/psicologo-baja-autoestima-chillan" },
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

