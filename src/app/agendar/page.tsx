import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import { Button } from "../components/Button";
import {
  SITE_URL,
  localBusinessSchema,
  getBreadcrumbSchema,
  getServiceSchema,
  getFAQSchema,
  getTwitterDescription,
} from "@/lib/schemas";

const description =
  "Agenda psicólogo en Chillán hoy: presencial u online por videollamada. Respuesta en 24 h, TCC, boleta Isapre y primera consulta sin complicaciones.";

export const metadata: Metadata = {
  title: "Agenda psicólogo Chillán hoy | Online o presencial",
  description,
  alternates: {
    canonical: "/agendar",
  },
  openGraph: {
    title: "Agenda psicólogo Chillán hoy | Online o presencial",
    description,
    url: `${SITE_URL}/agendar`,
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agenda psicólogo Chillán hoy",
    description: getTwitterDescription(
      "Coordina tu primera sesión presencial u online hoy. WhatsApp o web. TCC y boleta Isapre."
    ),
  },
};

const breadcrumbItems = [
  { label: "Inicio", href: "/" },
  { label: "Agendar sesión" },
];

const agendarFAQs = [
  {
    question: "¿Cuánto demora la respuesta al agendar?",
    answer:
      "Suelo responder en menos de 24 horas hábiles por WhatsApp o correo. Si tienes urgencia, indícalo en el mensaje.",
  },
  {
    question: "¿Puedo elegir sesión online al agendar?",
    answer:
      "Sí. Puedes reservar videollamada desde cualquier lugar de Chile o sesión presencial en Chillán. Mismo valor y boleta Isapre.",
  },
];

const faqSchema = getFAQSchema(agendarFAQs);
const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);
const serviceSchema = getServiceSchema({
  serviceType: "Agendamiento de psicoterapia",
  description:
    "Reserva de sesiones individuales de 50 minutos, presenciales en Chillán o por videollamada.",
  areaServed: "Chillán",
});

export default function AgendarPage() {
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
            gap: "1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          <Image
            src="/yo.png"
            alt="Gonzalo Pedrosa - Psicólogo"
            width={80}
            height={80}
            priority
            style={{
              borderRadius: "9999px",
              objectFit: "cover",
            }}
          />
          <div>
            <h1
              style={{
                fontSize: "2rem",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                marginBottom: "0.25rem",
                lineHeight: 1.1,
              }}
            >
              Agenda tu sesión
            </h1>
            <p style={{ color: "#666", fontSize: "0.9375rem" }}>
              Gonzalo Pedrosa · Psicólogo · Chillán
            </p>
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
            ★ 4,8 · TCC · Boleta Isapre · Presencial o{" "}
            <Link href="/psicologo-online-chillan" style={{ color: "#000", textDecoration: "underline" }}>
              psicólogo online
            </Link>
          </p>
        </section>

        <p
          style={{
            fontSize: "1.125rem",
            color: "#666",
            marginBottom: "2rem",
            lineHeight: 1.6,
          }}
        >
          Dar el primer paso es lo más importante. Escríbeme para coordinar una
          sesión inicial, resolver dudas o consultar disponibilidad —presencial en
          Chillán o por videollamada.
        </p>

        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
            marginBottom: "3rem",
          }}
        >
          <a
            href="https://wa.me/56968257817"
            target="_blank"
            rel="noopener noreferrer"
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
            WhatsApp →
          </a>
          <Link
            href="/psicologo-online-chillan"
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
            Ver psicólogo online
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
            Contacto directo
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            <a
              href="https://wa.me/56968257817"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1rem 1.25rem",
                border: "1px solid #e5e5e5",
                borderRadius: "12px",
                textDecoration: "none",
                color: "#000",
              }}
            >
              <span style={{ fontSize: "1.25rem" }}>💬</span>
              <span>
                <strong style={{ display: "block", marginBottom: "0.125rem" }}>
                  WhatsApp
                </strong>
                <span style={{ fontSize: "0.875rem", color: "#666" }}>
                  +56 9 6825 7817
                </span>
              </span>
            </a>

            <a
              href="mailto:gpedrosadom@gmail.com"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1rem 1.25rem",
                border: "1px solid #e5e5e5",
                borderRadius: "12px",
                textDecoration: "none",
                color: "#000",
              }}
            >
              <span style={{ fontSize: "1.25rem" }}>✉️</span>
              <span>
                <strong style={{ display: "block", marginBottom: "0.125rem" }}>
                  Email
                </strong>
                <span style={{ fontSize: "0.875rem", color: "#666" }}>
                  gpedrosadom@gmail.com
                </span>
              </span>
            </a>
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
            ¿Qué esperar?
          </h2>
          <p style={{ color: "#444", lineHeight: 1.7 }}>
            Respondo dentro de 24 horas hábiles. En el primer contacto
            conversaremos brevemente sobre tu situación y acordaremos un horario.
            La primera sesión es para conocernos y evaluar juntos si el proceso
            puede ayudarte. Más detalle en{" "}
            <Link href="/primera-consulta-psicologo-chillan" style={{ color: "#000", textDecoration: "underline" }}>
              primera consulta
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
            Modalidades
          </h2>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              display: "flex",
              gap: "0.5rem",
              flexWrap: "wrap",
            }}
          >
            <li
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#f5f5f5",
                borderRadius: "9999px",
                fontSize: "0.875rem",
              }}
            >
              Presencial en Chillán
            </li>
            <li>
              <Link
                href="/psicologo-online-chillan"
                style={{
                  display: "inline-block",
                  padding: "0.5rem 1rem",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "9999px",
                  fontSize: "0.875rem",
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                Online (videollamada)
              </Link>
            </li>
          </ul>
          <p style={{ marginTop: "1rem", fontSize: "0.875rem", color: "#666", lineHeight: 1.6 }}>
            ¿Dudas entre formatos? Lee la{" "}
            <Link href="/terapia-online-vs-presencial-chillan" style={{ color: "#000", textDecoration: "underline" }}>
              comparación online vs presencial
            </Link>{" "}
            o cómo funciona la{" "}
            <Link href="/terapia-online" style={{ color: "#000", textDecoration: "underline" }}>
              terapia online
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
            Reservas frecuentes
          </h2>
          <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
            Si ya sabes el motivo de consulta, estas páginas te ayudan a llegar con más contexto a la primera sesión.
          </p>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {[
              { label: "Psicólogo online", href: "/psicologo-online-chillan" },
              { label: "Depresión", href: "/psicologo-depresion-chillan" },
              { label: "Terapia de pareja", href: "/terapia-de-pareja-chillan" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: "inline-block",
                  padding: "0.5rem 1rem",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "9999px",
                  fontSize: "0.875rem",
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </Link>
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
              fontSize: "1.125rem",
              fontWeight: 600,
              marginBottom: "0.75rem",
              color: "#fff",
            }}
          >
            ¿Prefieres escribir ahora?
          </h2>
          <a
            href="https://wa.me/56968257817"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.75rem 1.5rem",
              backgroundColor: "#fff",
              color: "#000",
              borderRadius: "9999px",
              textDecoration: "none",
              fontWeight: 500,
              fontSize: "0.875rem",
            }}
          >
            Abrir WhatsApp →
          </a>
        </section>

        <nav
          style={{
            paddingTop: "2rem",
            borderTop: "1px solid #eaeaea",
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
          }}
        >
          <Button href="/terapia-online" variant="secondary">
            Cómo funciona terapia online
          </Button>
          <Button href="/psicologo-online-chillan" variant="secondary">
            Psicólogo online
          </Button>
          <Button href="/psicologo-depresion-chillan" variant="secondary">
            Depresión
          </Button>
          <Button href="/terapia-de-pareja-chillan" variant="secondary">
            Terapia de pareja
          </Button>
          <Button href="/psicologo-ansiedad-chillan" variant="secondary">
            Ansiedad
          </Button>
        </nav>
      </main>
    </>
  );
}
