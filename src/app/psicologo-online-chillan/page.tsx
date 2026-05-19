import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import {
  SITE_URL,
  localBusinessSchema,
  getBreadcrumbSchema,
  getServiceSchema,
  getFAQSchema,
  getTwitterDescription,
} from "@/lib/schemas";

const description =
  "Psicólogo online en Chillán atiende por videollamada a todo Chile. TCC, sesiones de 50 min, boleta Isapre y horarios flexibles. Reserva primera sesión por web o WhatsApp hoy.";

export const metadata: Metadata = {
  title: "Psicólogo online Chillán | Agenda videollamada | Gonzalo Pedrosa",
  description,
  alternates: {
    canonical: "/psicologo-online-chillan",
  },
  openGraph: {
    title: "Psicólogo online Chillán | Gonzalo Pedrosa",
    description,
    url: `${SITE_URL}/psicologo-online-chillan`,
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicólogo online Chillán | Agenda videollamada",
    description: getTwitterDescription(
      "Sesiones por videollamada con TCC desde Chillán para todo Chile. Boleta Isapre y $35.000 por sesión. Agenda hoy."
    ),
  },
};

const breadcrumbItems = [
  { label: "Inicio", href: "/" },
  { label: "Psicólogo online Chillán" },
];

const onlineFAQs = [
  {
    question: "¿Es tan efectiva como presencial?",
    answer:
      "Sí. Múltiples estudios demuestran que la terapia online tiene la misma efectividad que la presencial para la mayoría de las condiciones, especialmente con enfoque cognitivo-conductual.",
  },
  {
    question: "¿Qué pasa si falla internet?",
    answer:
      "Si hay problemas técnicos, nos reconectamos o reprogramamos sin costo adicional. La flexibilidad es parte del servicio.",
  },
  {
    question: "¿Puedo tener reembolso Isapre?",
    answer:
      "Sí, las Isapres aceptan reembolso por sesiones online. Emito boleta electrónica el mismo día.",
  },
  {
    question: "¿Puedo combinar online y presencial?",
    answer:
      "Absolutamente. Muchos pacientes combinan ambas modalidades según su disponibilidad de cada semana.",
  },
];

const faqSchema = getFAQSchema(onlineFAQs);
const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);
const serviceSchema = getServiceSchema({
  serviceType: "Psicoterapia online",
  description:
    "Sesiones de psicología por videollamada desde Chillán para pacientes en Chile, con Terapia Cognitivo-Conductual.",
  areaServed: "Chillán",
});

export default function PsicologoOnlineChillanPage() {
  return (
    <>
      <Script
        id="local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
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
        <Breadcrumb items={breadcrumbItems} />

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

        <section
          style={{
            marginBottom: "1.5rem",
            padding: "1rem 1.25rem",
            backgroundColor: "#fafafa",
            borderRadius: "12px",
          }}
        >
          <p style={{ fontSize: "0.8125rem", color: "#444", lineHeight: 1.6, margin: 0 }}>
            ★ 4,8 · +7 años experiencia · TCC · Boleta Isapre · $35.000 / 50 min
          </p>
        </section>

        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            marginBottom: "1rem",
            lineHeight: 1.1,
          }}
        >
          Psicólogo online en Chillán
        </h1>

        <p
          style={{
            fontSize: "1.125rem",
            color: "#666",
            marginBottom: "1.5rem",
            lineHeight: 1.6,
          }}
        >
          Terapia psicológica por videollamada desde donde estés. Sin traslados, con la
          misma calidad clínica que una sesión presencial. Atiendo a personas de todo
          Chile con horarios flexibles.
        </p>

        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
            marginBottom: "3rem",
          }}
        >
          <Link
            href="/agendar"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.875rem 1.5rem",
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: "9999px",
              textDecoration: "none",
              fontWeight: 500,
              fontSize: "0.9375rem",
            }}
          >
            Agendar sesión →
          </Link>
          <Link
            href="/terapia-online"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.875rem 1.5rem",
              border: "1px solid #e5e5e5",
              borderRadius: "9999px",
              textDecoration: "none",
              fontWeight: 500,
              fontSize: "0.9375rem",
              color: "#000",
            }}
          >
            Cómo funciona la terapia online
          </Link>
        </div>

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
              Reservas en{" "}
              <Link href="/agendar" style={{ color: "#000", textDecoration: "underline" }}>
                agendar
              </Link>{" "}
              o por WhatsApp
            </li>
            {[
              "Te envío link de videollamada antes de la hora",
              "Te conectas desde computador, tablet o celular",
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
            Requisitos técnicos
          </p>
          <p style={{ color: "#0c4a6e", fontSize: "0.875rem", lineHeight: 1.6 }}>
            Computador, tablet o celular con cámara y micrófono. Conexión estable y un
            espacio privado. Más detalle en{" "}
            <Link href="/terapia-online" style={{ color: "#0369a1", textDecoration: "underline" }}>
              terapia online (guía)
            </Link>
            .
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
            {onlineFAQs.map((faq, index) => (
              <details
                key={index}
                style={{
                  padding: "1rem",
                  border: "1px solid #eaeaea",
                  borderRadius: "12px",
                }}
              >
                <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>
                  {faq.question}
                </summary>
                <p
                  style={{
                    marginTop: "0.75rem",
                    color: "#666",
                    lineHeight: 1.6,
                    fontSize: "0.9375rem",
                  }}
                >
                  {faq.answer}
                  {index === 0 && (
                    <>
                      {" "}
                      <Link
                        href="/psicologo-cognitivo-conductual-chillan"
                        style={{ color: "#000", textDecoration: "underline" }}
                      >
                        Ver enfoque TCC
                      </Link>
                      .
                    </>
                  )}
                  {index === 2 && (
                    <>
                      {" "}
                      <Link
                        href="/psicologo-reembolso-isapre-chillan"
                        style={{ color: "#000", textDecoration: "underline" }}
                      >
                        Reembolso Isapre
                      </Link>
                      .
                    </>
                  )}
                </p>
              </details>
            ))}
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
            Desde cualquier lugar de Chile. Reserva en el sitio o por WhatsApp.
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
            Ir a agendar →
          </Link>
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
              { label: "Cómo funciona terapia online", href: "/terapia-online" },
              { label: "Online vs presencial", href: "/terapia-online-vs-presencial-chillan" },
              { label: "Particular", href: "/psicologo-particular-chillan" },
              { label: "Precios", href: "/consulta-psicologica-precio-chillan" },
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
