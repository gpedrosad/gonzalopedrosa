import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/Button";

export const metadata: Metadata = {
  title: "Psicólogo para Adultos en Chillán, Chile | Gonzalo Pedrosa",
  description:
    "Psicólogo para adultos en Chillán, Chile. Atención profesional para ansiedad, depresión, estrés y desarrollo personal. Sesiones presenciales y online.",
  alternates: {
    canonical: "/psicologo-adulto-chillan",
  },
  openGraph: {
    title: "Psicólogo para Adultos en Chillán, Chile | Gonzalo Pedrosa",
    description: "Psicólogo para adultos en Chillán, Chile. Atención profesional para ansiedad, depresión, estrés y desarrollo personal. Sesiones presenciales y online.",
    url: "https://gonzalopedrosa.cl/psicologo-adulto-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicólogo para Adultos en Chillán, Chile",
    description: "Psicólogo para adultos en Chillán, Chile. Atención profesional para ansiedad, depresión, estrés y desarrollo personal. Sesiones presenciales y online.",
  },
};


// FAQPage Schema para rich snippets en Google
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Con qué frecuencia son las sesiones?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Generalmente comenzamos con sesiones semanales. A medida que avanza el proceso, la frecuencia puede espaciarse según tus avances."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puedo elegir entre presencial y online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, ofrezco ambas modalidades. Puedes elegir la que mejor se adapte e incluso alternarlas. Más info en{\" \"} terapia online ."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo elegir un buen psicólogo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Es importante sentirte cómodo con tu terapeuta. Lee sobre{\" \"} cómo elegir un psicólogo {\" \"} para orientarte."
      }
    }
  ]
};

export default function PsicologoAdultoChillanPage() {
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
        Psicólogo Adulto en Chillán
      </h1>

      <p
        style={{
          fontSize: "1.125rem",
          color: "#666",
          marginBottom: "3rem",
          lineHeight: 1.6,
        }}
      >
        La vida adulta trae desafíos particulares. Cuando generan malestar
        persistente, la terapia puede ser un espacio valioso para trabajar en tu
        bienestar.
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
          Motivos frecuentes de consulta
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "0.5rem",
          }}
        >
          {[
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            {
              label: "Crisis de pánico",
              href: "/psicologo-crisis-de-panico-chillan",
            },
            { label: "Síntomas depresivos", href: null },
            { label: "Estrés laboral", href: null },
            { label: "Relaciones interpersonales", href: null },
            { label: "Duelo y pérdidas", href: null },
            { label: "Autoestima", href: null },
            { label: "Adicciones", href: "/psicologo-adicciones-chillan" },
          ].map((item, i) =>
            item.href ? (
              <Link
                key={i}
                href={item.href}
                style={{
                  padding: "0.75rem 1rem",
                  backgroundColor: "#fafafa",
                  borderRadius: "8px",
                  fontSize: "0.875rem",
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                {item.label} →
              </Link>
            ) : (
              <div
                key={i}
                style={{
                  padding: "0.75rem 1rem",
                  backgroundColor: "#fafafa",
                  borderRadius: "8px",
                  fontSize: "0.875rem",
                  color: "#444",
                }}
              >
                {item.label}
              </div>
            )
          )}
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
          Enfoque de trabajo
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
          Mi aproximación se basa principalmente en la{" "}
          <Link
            href="/psicologo-cognitivo-conductual-chillan"
            style={{ color: "#000", textDecoration: "underline" }}
          >
            terapia cognitivo-conductual
          </Link>
          , complementada con técnicas de otras corrientes según tus
          necesidades. El proceso es colaborativo: trabajamos hacia objetivos
          que tú defines.
        </p>
        <p style={{ color: "#444", lineHeight: 1.7 }}>
          Las sesiones ofrecen un espacio confidencial donde explorar tus
          dificultades y desarrollar herramientas prácticas.
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
          ¿Cuándo buscar ayuda?
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
            "Malestar emocional que persiste en el tiempo",
            "Dificultad para manejar situaciones cotidianas",
            "Problemas que afectan tu trabajo o relaciones",
            "Sensación de estar estancado o sin dirección",
            "Patrones de comportamiento que quieres cambiar",
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
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  backgroundColor: "#000",
                  borderRadius: "9999px",
                  flexShrink: 0,
                }}
              />
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
            <summary
              style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}
            >
              ¿Con qué frecuencia son las sesiones?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Generalmente comenzamos con sesiones semanales. A medida que
              avanza el proceso, la frecuencia puede espaciarse según tus
              avances.
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
              ¿Puedo elegir entre presencial y online?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Sí, ofrezco ambas modalidades. Puedes elegir la que mejor se
              adapte e incluso alternarlas. Más info en{" "}
              <Link
                href="/terapia-online"
                style={{ color: "#000", textDecoration: "underline" }}
              >
                terapia online
              </Link>
              .
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
              ¿Cómo elegir un buen psicólogo?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Es importante sentirte cómodo con tu terapeuta. Lee sobre{" "}
              <Link
                href="/psicologo-adulto-chillan-mejor-valorados"
                style={{ color: "#000", textDecoration: "underline" }}
              >
                cómo elegir un psicólogo
              </Link>{" "}
              para orientarte.
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
          Comienza tu proceso
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            marginBottom: "1.5rem",
            fontSize: "0.9375rem",
          }}
        >
          Si es momento de buscar apoyo profesional, te invito a dar el primer
          paso.
        </p>
        <Link
          href="/agendar"
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
          Agendar sesión <span aria-hidden="true">→</span>
        </Link>
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
          <Link
            href="/psicologo-ansiedad-chillan"
            style={{
              color: "#666",
              fontSize: "0.875rem",
              textDecoration: "none",
              padding: "0.375rem 0.75rem",
              border: "1px solid #eaeaea",
              borderRadius: "9999px",
            }}
          >
            Ansiedad
          </Link>
          <Link
            href="/psicologo-crisis-de-panico-chillan"
            style={{
              color: "#666",
              fontSize: "0.875rem",
              textDecoration: "none",
              padding: "0.375rem 0.75rem",
              border: "1px solid #eaeaea",
              borderRadius: "9999px",
            }}
          >
            Crisis de pánico
          </Link>
          <Link
            href="/psicologo-adicciones-chillan"
            style={{
              color: "#666",
              fontSize: "0.875rem",
              textDecoration: "none",
              padding: "0.375rem 0.75rem",
              border: "1px solid #eaeaea",
              borderRadius: "9999px",
            }}
          >
            Adicciones
          </Link>
          <Link
            href="/psicologo-cognitivo-conductual-chillan"
            style={{
              color: "#666",
              fontSize: "0.875rem",
              textDecoration: "none",
              padding: "0.375rem 0.75rem",
              border: "1px solid #eaeaea",
              borderRadius: "9999px",
            }}
          >
            TCC
          </Link>
          <Link
            href="/terapia-online"
            style={{
              color: "#666",
              fontSize: "0.875rem",
              textDecoration: "none",
              padding: "0.375rem 0.75rem",
              border: "1px solid #eaeaea",
              borderRadius: "9999px",
            }}
          >
            Online
          </Link>
        </div>
      </nav>
    </main>
    </>
  );
}
