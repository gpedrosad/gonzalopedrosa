import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import {
  localBusinessSchema,
  getBreadcrumbSchema,
  getServiceSchema,
  getFAQSchema,
  getTwitterDescription,
} from "@/lib/schemas";

const description =
  "Terapia EMDR en Chillán para trauma, ansiedad y estrés postraumático. Técnica con respaldo internacional, sesiones presenciales u online. Reserva por web o WhatsApp.";

export const metadata: Metadata = {
  title: "Terapia EMDR Chillán | Trauma y TEPT | Gonzalo Pedrosa",
  description,
  alternates: {
    canonical: "/terapia-emdr-chillan",
  },
  openGraph: {
    title: "Terapia EMDR Chillán | Gonzalo Pedrosa",
    description,
    url: "https://www.gonzalopedrosa.cl/terapia-emdr-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terapia EMDR Chillán",
    description: getTwitterDescription(
      "EMDR para trauma en Chillán u online. Evaluación inicial y plan a tu ritmo. Agenda en el sitio."
    ),
  },
};

const breadcrumbItems = [
  { label: "Inicio", href: "/" },
  { label: "Terapia EMDR Chillán" },
];

const emdrFAQs = [
  {
    question: "¿Qué es EMDR?",
    answer:
      "EMDR (Eye Movement Desensitization and Reprocessing) es una terapia reconocida para procesar memorias traumáticas mediante estimulación bilateral, con amplio respaldo científico.",
  },
  {
    question: "¿Cuántas sesiones de EMDR necesito?",
    answer:
      "Varía según el caso. Traumas únicos pueden procesarse en pocas sesiones; traumas complejos o múltiples requieren más tiempo. Lo evaluamos en la primera consulta.",
  },
  {
    question: "¿Se puede hacer EMDR online?",
    answer:
      "Sí, EMDR puede adaptarse al formato online con estimulación bilateral alternativa. Evaluamos juntos la modalidad más adecuada.",
  },
];

const faqSchema = getFAQSchema(emdrFAQs);
const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);
const serviceSchema = getServiceSchema({
  serviceType: "Terapia EMDR",
  description:
    "Tratamiento EMDR para trauma y estrés postraumático en Chillán o por videollamada.",
  areaServed: "Chillán",
});

export default function TerapiaEmdrChillanPage() {
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
          <p style={{ fontWeight: 600, marginBottom: "0.125rem" }}>Gonzalo Pedrosa</p>
          <p style={{ fontSize: "0.875rem", color: "#666" }}>
            Psicólogo Clínico · +7 años · EMDR y trauma
          </p>
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
        Terapia EMDR en Chillán
      </h1>

      <p
        style={{
          fontSize: "1.125rem",
          color: "#666",
          marginBottom: "1.5rem",
          lineHeight: 1.6,
        }}
      >
        La terapia EMDR en Chillán trata trauma, ansiedad y estrés postraumático con una técnica
        reconocida internacionalmente, en sesiones presenciales o{" "}
        <Link href="/psicologo-online-chillan" style={{ color: "#000", textDecoration: "underline" }}>
          online
        </Link>
        . Evaluamos si EMDR encaja contigo en la primera consulta.
      </p>

      <div
        style={{
          marginBottom: "2.5rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "0.75rem",
          alignItems: "center",
        }}
      >
        <Link
          href="/agendar"
          style={{
            display: "inline-flex",
            padding: "0.75rem 1.25rem",
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: "9999px",
            textDecoration: "none",
            fontWeight: 500,
            fontSize: "0.875rem",
          }}
        >
          Agendar evaluación EMDR →
        </Link>
        <Link
          href="/psicologo-abuso-sexual-chillan"
          style={{ fontSize: "0.875rem", color: "#666", textDecoration: "underline" }}
        >
          Trauma y abuso sexual
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
          ¿Qué es EMDR?
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
          EMDR es una psicoterapia integradora que utiliza estimulación
          bilateral (movimientos oculares u otras formas) para ayudar al cerebro
          a procesar recuerdos traumáticos o perturbadores que no se han
          integrado adecuadamente.
        </p>
        <p style={{ color: "#444", lineHeight: 1.7 }}>
          Desarrollada por Francine Shapiro en 1987, EMDR está reconocida por la
          OMS y diversas organizaciones de salud mental como tratamiento
          efectivo para el trauma.
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
          ¿Para qué sirve?
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "0.5rem",
          }}
        >
          {[
            { label: "Estrés postraumático", href: "/estres-postraumatico-chillan" },
            { label: "Trauma infantil", href: "/superar-trauma-infancia-chillan" },
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            { label: "Abuso sexual", href: "/psicologo-abuso-sexual-chillan" },
            { label: "Duelo complicado", href: "/psicologo-duelo-chillan" },
            { label: "Ataques de pánico", href: "/psicologo-crisis-de-panico-chillan" },
            { label: "Fobias", href: "/psicologo-fobia-social-chillan" },
            { label: "Baja autoestima", href: "/psicologo-baja-autoestima-chillan" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                padding: "0.75rem 1rem",
                backgroundColor: "#fafafa",
                borderRadius: "8px",
                fontSize: "0.875rem",
                color: "#444",
                textDecoration: "none",
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
            marginBottom: "1.25rem",
          }}
        >
          Cómo funciona
        </h2>
        <ol style={{ listStyle: "none", padding: 0, counterReset: "step" }}>
          {[
            {
              title: "Historia clínica",
              desc: "Evaluación inicial y preparación del plan de tratamiento",
            },
            {
              title: "Preparación",
              desc: "Aprendizaje de técnicas de regulación emocional",
            },
            {
              title: "Evaluación",
              desc: "Identificación de recuerdos objetivo a procesar",
            },
            {
              title: "Desensibilización",
              desc: "Procesamiento con estimulación bilateral",
            },
            {
              title: "Instalación",
              desc: "Fortalecimiento de creencias positivas",
            },
            {
              title: "Cierre",
              desc: "Estabilización y evaluación del progreso",
            },
          ].map((step, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                gap: "1rem",
                marginBottom: "1rem",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "1.75rem",
                  height: "1.75rem",
                  backgroundColor: "#000",
                  color: "#fff",
                  borderRadius: "9999px",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  flexShrink: 0,
                }}
              >
                {i + 1}
              </span>
              <div>
                <strong style={{ display: "block", marginBottom: "0.125rem" }}>
                  {step.title}
                </strong>
                <span style={{ color: "#666", fontSize: "0.9375rem" }}>
                  {step.desc}
                </span>
              </div>
            </li>
          ))}
        </ol>
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
              ¿EMDR es seguro?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Sí, EMDR es una terapia segura cuando es aplicada por un
              profesional entrenado. Es reconocida por la OMS y otras
              organizaciones de salud a nivel mundial.
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
              ¿Cuántas sesiones se necesitan?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              El número de sesiones varía según el caso. Traumas únicos pueden
              procesarse en pocas sesiones, mientras que traumas complejos o
              múltiples requieren más tiempo.
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
              ¿Se puede hacer EMDR online?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Sí, EMDR puede adaptarse al formato{" "}
              <Link
                href="/psicologo-online-chillan"
                style={{ color: "#000", textDecoration: "underline" }}
              >
                online
              </Link>{" "}
              utilizando diferentes formas de estimulación bilateral. Evaluamos
              juntos la modalidad más adecuada.
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
          Procesa tu pasado, libera tu presente
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            marginBottom: "1.5rem",
            fontSize: "0.9375rem",
          }}
        >
          Consulta si EMDR puede ayudarte con lo que estás viviendo.
        </p>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.75rem", alignItems: "center" }}
        >
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
            Agendar en el sitio →
          </Link>
          <a
            href="https://wa.me/56968257817"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: "0.875rem",
              textDecoration: "underline",
            }}
          >
            O escribir por WhatsApp
          </a>
        </div>
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
            { label: "Trauma infancia", href: "/superar-trauma-infancia-chillan" },
            { label: "Estrés postraumático", href: "/estres-postraumatico-chillan" },
            { label: "Abuso sexual", href: "/psicologo-abuso-sexual-chillan" },
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            { label: "Crisis de pánico", href: "/psicologo-crisis-de-panico-chillan" },
            { label: "Online", href: "/psicologo-online-chillan" },
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

