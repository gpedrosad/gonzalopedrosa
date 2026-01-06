import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psicólogo Online en Chillán, Chile | Gonzalo Pedrosa",
  description:
    "Psicólogo online desde Chillán para todo Chile. Sesiones por videollamada con la misma efectividad que presencial. Horarios flexibles y comodidad desde tu hogar.",
  alternates: {
    canonical: "/psicologo-online-chillan",
  },
  openGraph: {
    title: "Psicólogo Online en Chillán, Chile | Gonzalo Pedrosa",
    description: "Psicólogo online desde Chillán para todo Chile. Sesiones por videollamada con la misma efectividad que presencial. Horarios flexibles y comodidad desde tu hogar.",
    url: "https://gonzalopedrosa.cl/psicologo-online-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicólogo Online en Chillán, Chile",
    description: "Psicólogo online desde Chillán para todo Chile. Sesiones por videollamada con la misma efectividad que presencial. Horarios flexibles y comodidad desd",
  },
};


// FAQPage Schema para rich snippets en Google
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Es tan efectiva como presencial?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Múltiples estudios demuestran que la terapia online tiene la misma efectividad que la presencial para la mayoría de las condiciones, especialmente con{\" \"} enfoque cognitivo-conductual ."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué pasa si falla internet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Si hay problemas técnicos, nos reconectamos o reprogramamos sin costo adicional. La flexibilidad es parte del servicio."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puedo tener reembolso Isapre?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, las Isapres aceptan reembolso por sesiones online. Emito boleta electrónica el mismo día. Más detalles en{\" \"} reembolso Isapre ."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puedo combinar online y presencial?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutamente. Muchos pacientes combinan ambas modalidades según su disponibilidad de cada semana. Tienes total flexibilidad."
      }
    }
  ]
};

export default function PsicologoOnlineChillanPage() {
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
            Chillán · Todo Chile
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
        Psicólogo Online en Chillán
      </h1>

      <p
        style={{
          fontSize: "1.125rem",
          color: "#666",
          marginBottom: "3rem",
          lineHeight: 1.6,
        }}
      >
        Terapia psicológica desde donde estés. Sin traslados, sin esperas en
        sala, con la misma calidad y efectividad que una sesión presencial.
        Disponible para todo Chile.
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
          ¿Cómo funciona?
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          <li
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
            <span
              style={{
                backgroundColor: "#000",
                color: "#fff",
                width: 24,
                height: 24,
                borderRadius: "9999px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.75rem",
                fontWeight: 600,
                flexShrink: 0,
              }}
            >
              1
            </span>
            Agendas tu sesión por{" "}
            <a
              href="https://wa.me/56968257817"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#000", textDecoration: "underline" }}
            >
              WhatsApp
            </a>{" "}
            o correo
          </li>
          {[
            "Te envío link de Google Meet antes de la hora",
            "Te conectas desde tu computador, tablet o celular",
            "La sesión dura 50 minutos, igual que presencial",
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
              <span
                style={{
                  backgroundColor: "#000",
                  color: "#fff",
                  width: 24,
                  height: 24,
                  borderRadius: "9999px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  flexShrink: 0,
                }}
              >
                {i + 2}
              </span>
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
          Ventajas de la terapia online
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Desde tu hogar u oficina, sin desplazamientos",
            "Mayor flexibilidad de horarios",
            "Ideal si vives fuera de Chillán o tienes movilidad reducida",
            "Misma efectividad que sesiones presenciales",
            "Total privacidad y confidencialidad",
            "Compatible con reembolso Isapre",
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

      <section
        style={{
          padding: "1.25rem",
          backgroundColor: "#f0f9ff",
          borderRadius: "12px",
          marginBottom: "2.5rem",
          border: "1px solid #bae6fd",
        }}
      >
        <p
          style={{
            fontWeight: 600,
            color: "#0369a1",
            marginBottom: "0.5rem",
            fontSize: "0.9375rem",
          }}
        >
          🖥️ Requisitos técnicos
        </p>
        <p style={{ color: "#0c4a6e", fontSize: "0.875rem", lineHeight: 1.6 }}>
          Computador, tablet o celular con cámara y micrófono. Conexión a
          internet estable. Un espacio privado donde puedas hablar con
          tranquilidad.
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
          ¿Para qué temas sirve?
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
          La terapia online es efectiva para la mayoría de las problemáticas que
          atiendo:
        </p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            { label: "Depresión", href: "/psicologo-depresion-chillan" },
            { label: "Estrés laboral", href: "/psicologo-estres-laboral-chillan" },
            { label: "Crisis de pánico", href: "/psicologo-crisis-de-panico-chillan" },
            { label: "Duelo", href: "/psicologo-duelo-chillan" },
            { label: "TOC", href: "/tratamiento-toc-chillan" },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              style={{
                color: "#444",
                fontSize: "0.875rem",
                textDecoration: "none",
                padding: "0.5rem 1rem",
                backgroundColor: "#fafafa",
                borderRadius: "9999px",
              }}
            >
              {item.label}
            </Link>
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
              ¿Es tan efectiva como presencial?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Sí. Múltiples estudios demuestran que la terapia online tiene la
              misma efectividad que la presencial para la mayoría de las
              condiciones, especialmente con{" "}
              <Link
                href="/psicologo-cognitivo-conductual-chillan"
                style={{ color: "#000", textDecoration: "underline" }}
              >
                enfoque cognitivo-conductual
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
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>
              ¿Qué pasa si falla internet?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Si hay problemas técnicos, nos reconectamos o reprogramamos sin
              costo adicional. La flexibilidad es parte del servicio.
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
              ¿Puedo tener reembolso Isapre?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Sí, las Isapres aceptan reembolso por sesiones online. Emito
              boleta electrónica el mismo día. Más detalles en{" "}
              <Link
                href="/psicologo-reembolso-isapre-chillan"
                style={{ color: "#000", textDecoration: "underline" }}
              >
                reembolso Isapre
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
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>
              ¿Puedo combinar online y presencial?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Absolutamente. Muchos pacientes combinan ambas modalidades según su
              disponibilidad de cada semana. Tienes total flexibilidad.
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
          Agenda tu sesión online
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            marginBottom: "1.5rem",
            fontSize: "0.9375rem",
          }}
        >
          Desde cualquier lugar de Chile. Simple y sin complicaciones.
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
          Más información
        </p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Terapia online", href: "/terapia-online" },
            { label: "Particular", href: "/psicologo-particular-chillan" },
            { label: "Precios", href: "/consulta-psicologica-precio-chillan" },
            { label: "Reembolso", href: "/psicologo-reembolso-isapre-chillan" },
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

