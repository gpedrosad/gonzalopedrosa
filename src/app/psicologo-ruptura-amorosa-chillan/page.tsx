import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psicólogo Ruptura Amorosa en Chillán | Gonzalo Pedrosa",
  description:
    "Psicólogo especializado en rupturas amorosas en Chillán. Supera el dolor de una separación con terapia profesional. Sesiones presenciales y online.",
  alternates: {
    canonical: "/psicologo-ruptura-amorosa-chillan",
  },
  openGraph: {
    title: "Psicólogo Ruptura Amorosa en Chillán | Gonzalo Pedrosa",
    description: "Psicólogo especializado en rupturas amorosas en Chillán. Supera el dolor de una separación con terapia profesional. Sesiones presenciales y online.",
    url: "https://gonzalopedrosa.cl/psicologo-ruptura-amorosa-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicólogo Ruptura Amorosa en Chillán",
    description: "Psicólogo especializado en rupturas amorosas en Chillán. Supera el dolor de una separación con terapia profesional. Sesiones presenciales y online.",
  },
};


// FAQPage Schema para rich snippets en Google
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo toma superar una ruptura?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No hay un tiempo fijo. Depende de la duración de la relación, cómo terminó y tus recursos emocionales. La terapia puede acelerar el proceso al trabajarlo activamente."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es normal seguir pensando en mi ex?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, es parte del proceso de duelo. El problema es cuando estos pensamientos te impiden funcionar o avanzar. Trabajamos técnicas para manejarlos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Sirve si la ruptura fue hace mucho?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. A veces el dolor se estanca y no se procesa correctamente. La terapia ayuda a cerrar ese capítulo aunque haya pasado tiempo."
      }
    }
  ]
};

export default function PsicologoRupturaAmorosaChillanPage() {
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
          style={{ borderRadius: "9999px", objectFit: "cover" }}
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
        Psicólogo Ruptura Amorosa en Chillán
      </h1>

      <p
        style={{
          fontSize: "1.125rem",
          color: "#666",
          marginBottom: "3rem",
          lineHeight: 1.6,
        }}
      >
        El fin de una relación puede ser devastador. La terapia te ayuda a
        procesar el dolor, entender qué pasó y reconstruirte para avanzar de
        forma saludable.
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
          Lo que puedes estar sintiendo
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Dolor intenso y vacío emocional",
            "Pensamientos constantes sobre tu ex",
            "Dificultad para dormir o comer",
            "Culpa o rabia hacia ti mismo/a o hacia el otro",
            "Idealización de la relación pasada",
            "Miedo a estar solo/a",
            "Pérdida de sentido o motivación",
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
          Cómo te puedo ayudar
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Procesar el duelo de la relación",
            "Entender patrones que se repiten en tus relaciones",
            "Trabajar la autoestima y el amor propio",
            "Manejar la ansiedad y los pensamientos intrusivos",
            "Reconstruir tu identidad fuera de la relación",
            "Prepararte para futuras relaciones más sanas",
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
            style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}
          >
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>
              ¿Cuánto tiempo toma superar una ruptura?
            </summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              No hay un tiempo fijo. Depende de la duración de la relación, cómo
              terminó y tus recursos emocionales. La terapia puede acelerar el
              proceso al trabajarlo activamente.
            </p>
          </details>

          <details
            style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}
          >
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>
              ¿Es normal seguir pensando en mi ex?
            </summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Sí, es parte del proceso de duelo. El problema es cuando estos
              pensamientos te impiden funcionar o avanzar. Trabajamos técnicas
              para manejarlos.
            </p>
          </details>

          <details
            style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}
          >
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>
              ¿Sirve si la ruptura fue hace mucho?
            </summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Sí. A veces el dolor se estanca y no se procesa correctamente. La
              terapia ayuda a cerrar ese capítulo aunque haya pasado tiempo.
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
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          Mereces sanar y avanzar
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          El dolor de una ruptura es real. Permítete recibir ayuda.
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
            { label: "Dependencia emocional", href: "/psicologo-dependencia-emocional-chillan" },
            { label: "Relación tóxica", href: "/superar-relacion-toxica-chillan" },
            { label: "Duelo", href: "/psicologo-duelo-chillan" },
            { label: "Autoestima", href: "/psicologo-baja-autoestima-chillan" },
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




