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
  "Consulta psicológica en Chillán: $35.000 por sesión de 50 min, mismo valor online o presencial. Boleta Isapre, formas de pago y cancelación. Agenda sin compromiso.";

export const metadata: Metadata = {
  title: "Consulta psicológica precio Chillán | $35.000 | Gonzalo Pedrosa",
  description,
  alternates: {
    canonical: "/consulta-psicologica-precio-chillan",
  },
  openGraph: {
    title: "Consulta psicológica precio Chillán | Gonzalo Pedrosa",
    description,
    url: "https://www.gonzalopedrosa.cl/consulta-psicologica-precio-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consulta psicológica precio Chillán",
    description: getTwitterDescription(
      "Sesión $35.000 en Chillán u online. Boleta Isapre, pago claro y política de cancelación. Reserva en el sitio."
    ),
  },
};

const breadcrumbItems = [
  { label: "Inicio", href: "/" },
  { label: "Precio consulta psicológica" },
];

const precioFAQs = [
  {
    question: "¿La primera sesión tiene otro valor?",
    answer:
      "No. Todas las sesiones tienen el mismo valor, incluyendo la primera. No hay cargos adicionales por evaluación inicial.",
  },
  {
    question: "¿Cuántas sesiones necesitaré?",
    answer:
      "Depende de cada caso y tus objetivos. Algunas personas ven mejorías en 8-12 sesiones, otras prefieren un proceso más largo. Lo definimos juntos según tu evolución.",
  },
  {
    question: "¿Hay descuento por pack de sesiones?",
    answer:
      "Por el momento no ofrezco packs. Prefiero que avancemos sesión a sesión, sin compromisos de largo plazo que puedan generar presión.",
  },
  {
    question: "¿Cuándo se paga?",
    answer:
      "El pago se realiza antes de cada sesión, idealmente el mismo día o el día anterior por transferencia. También puedes pagar al inicio de la sesión presencial.",
  },
  {
    question: "¿Hay política de cancelación?",
    answer:
      "Si necesitas cancelar, avísame con al menos 24 horas de anticipación para reagendar sin costo. Cancelaciones con menos de 24 horas se cobran el 50% del valor.",
  },
];

const faqSchema = getFAQSchema(precioFAQs);
const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);
const serviceSchema = getServiceSchema({
  serviceType: "Consulta psicológica",
  description:
    "Sesión individual de psicología clínica de 50 minutos en Chillán o por videollamada, con boleta para reembolso Isapre.",
  areaServed: "Chillán",
});

export default function ConsultaPsicologicaPrecioChillanPage() {
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
            Psicólogo Clínico · +7 años · Boleta Isapre
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
        Consulta psicológica precio en Chillán
      </h1>

      <p
        style={{
          fontSize: "1.125rem",
          color: "#666",
          marginBottom: "1.5rem",
          lineHeight: 1.6,
        }}
      >
        La consulta psicológica en Chillán cuesta <strong style={{ color: "#000" }}>$35.000</strong> por
        sesión de 50 minutos, con el mismo valor presencial u{" "}
        <Link href="/psicologo-online-chillan" style={{ color: "#000", textDecoration: "underline" }}>
          online
        </Link>
        . Incluye boleta para reembolso Isapre y política de cancelación transparente.
      </p>

      <div
        style={{
          marginBottom: "2rem",
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
          Agendar consulta →
        </Link>
        <Link
          href="/primera-consulta-psicologo-chillan"
          style={{ fontSize: "0.875rem", color: "#666", textDecoration: "underline" }}
        >
          Qué esperar en la primera sesión
        </Link>
      </div>

      <section
        style={{
          padding: "1.5rem",
          backgroundColor: "#fafafa",
          borderRadius: "16px",
          marginBottom: "2.5rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#999",
            marginBottom: "0.5rem",
          }}
        >
          Sesión individual (50 min)
        </p>
        <p
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#000",
            marginBottom: "0.5rem",
          }}
        >
          $35.000
        </p>
        <p style={{ color: "#666", fontSize: "0.875rem" }}>
          Presencial u online · Mismo valor
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
          ¿Qué incluye?
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Sesión completa de 50 minutos",
            "Espacio privado y confidencial",
            "Boleta electrónica para reembolso Isapre",
            "Seguimiento y material cuando corresponda",
            "Comunicación entre sesiones para dudas puntuales",
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
          Formas de pago
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Transferencia bancaria",
            "Efectivo (en sesiones presenciales)",
            "Tarjeta de débito o crédito",
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
          backgroundColor: "#f0fdf4",
          borderRadius: "12px",
          marginBottom: "2.5rem",
          border: "1px solid #bbf7d0",
        }}
      >
        <p
          style={{
            fontWeight: 600,
            color: "#166534",
            marginBottom: "0.5rem",
            fontSize: "0.9375rem",
          }}
        >
          💰 Reembolso Isapre
        </p>
        <p style={{ color: "#15803d", fontSize: "0.875rem", lineHeight: 1.6 }}>
          Si tienes Isapre, puedes recuperar entre el 50-80% del valor según tu
          plan. Emito boleta el mismo día. Más detalles en{" "}
          <Link
            href="/psicologo-reembolso-isapre-chillan"
            style={{ color: "#166534", textDecoration: "underline" }}
          >
            reembolso Isapre
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
              ¿La primera sesión tiene otro valor?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              No. Todas las sesiones tienen el mismo valor, incluyendo la
              primera. No hay cargos adicionales por evaluación inicial.
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
              ¿Cuántas sesiones necesitaré?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Depende de cada caso y tus objetivos. Algunas personas ven
              mejorías en 8-12 sesiones, otras prefieren un proceso más largo.
              Lo definimos juntos según tu evolución.
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
              ¿Hay descuento por pack de sesiones?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Por el momento no ofrezco packs. Prefiero que avancemos sesión a
              sesión, sin compromisos de largo plazo que puedan generar presión.
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
              ¿Cuándo se paga?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              El pago se realiza antes de cada sesión, idealmente el mismo día o
              el día anterior por transferencia. También puedes pagar al inicio
              de la sesión presencial.
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
              ¿Hay política de cancelación?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Si necesitas cancelar, avísame con al menos 24 horas de
              anticipación para reagendar sin costo. Cancelaciones con menos de
              24 horas se cobran el 50% del valor.
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
          ¿Tienes más preguntas?
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            marginBottom: "1.5rem",
            fontSize: "0.9375rem",
          }}
        >
          Escríbeme y te respondo personalmente. Sin compromiso.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", alignItems: "center" }}>
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
          Más información
        </p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Reembolso Isapre", href: "/psicologo-reembolso-isapre-chillan" },
            { label: "Particular", href: "/psicologo-particular-chillan" },
            { label: "Online", href: "/psicologo-online-chillan" },
            { label: "Agendar", href: "/agendar" },
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

