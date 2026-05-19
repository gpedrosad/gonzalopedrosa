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
  "Guía sobre terapia online: pasos de cada sesión, requisitos técnicos, ventajas y confidencialidad. Información clara desde Chillán. Para reservar videollamada, agenda en el sitio.";

export const metadata: Metadata = {
  title: "Terapia online: cómo funciona | Psicólogo Chillán | Gonzalo Pedrosa",
  description,
  alternates: {
    canonical: "/terapia-online",
  },
  openGraph: {
    title: "Terapia online: cómo funciona | Gonzalo Pedrosa",
    description,
    url: `${SITE_URL}/terapia-online`,
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terapia online: cómo funciona",
    description: getTwitterDescription(
      "Qué esperar en cada sesión por videollamada: requisitos, ventajas y FAQs. Chillán. Para agendar, usa psicólogo online."
    ),
  },
};

const breadcrumbItems = [
  { label: "Inicio", href: "/" },
  { label: "Terapia online" },
];

const terapiaOnlineFAQs = [
  {
    question: "¿Es igual de efectiva que la terapia presencial?",
    answer:
      "Diversos estudios indican que la terapia online puede ser tan efectiva como la presencial para muchas problemáticas, siempre que se mantengan las condiciones adecuadas.",
  },
  {
    question: "¿Qué plataforma utilizan?",
    answer:
      "Utilizo plataformas seguras de videollamada (Zoom, Google Meet u otra según preferencia). El enlace se envía antes de cada sesión.",
  },
  {
    question: "¿Puedo combinar sesiones online y presenciales?",
    answer:
      "Sí, es posible alternar modalidades según tu disponibilidad y preferencia.",
  },
];

const faqSchema = getFAQSchema(terapiaOnlineFAQs);
const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);
const serviceSchema = getServiceSchema({
  serviceType: "Información sobre terapia psicológica online",
  description:
    "Explicación del formato de atención por videollamada: proceso, requisitos y ventajas, desde Chillán.",
  areaServed: "Chillán",
});

export default function TerapiaOnlinePage() {
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
            <p style={{ fontWeight: 500, color: "#000" }}>Gonzalo Pedrosa</p>
            <p style={{ fontSize: "0.875rem", color: "#666" }}>
              Psicólogo · Chillán
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
            Página informativa · Para reservar sesión:{" "}
            <Link href="/psicologo-online-chillan" style={{ color: "#000", textDecoration: "underline" }}>
              psicólogo online Chillán
            </Link>
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
          Terapia online: cómo funciona
        </h1>

        <p
          style={{
            fontSize: "1.125rem",
            color: "#666",
            marginBottom: "1.5rem",
            lineHeight: 1.6,
          }}
        >
          Esta página explica el formato de atención por videollamada: pasos,
          requisitos y ventajas. Si buscas reservar una sesión, ve a{" "}
          <Link href="/psicologo-online-chillan" style={{ color: "#000", textDecoration: "underline" }}>
            psicólogo online en Chillán
          </Link>
          .
        </p>

        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
            marginBottom: "3rem",
          }}
        >
          <Button href="/agendar">Agendar sesión</Button>
          <Link
            href="/psicologo-online-chillan"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.75rem 1.25rem",
              border: "1px solid #e5e5e5",
              borderRadius: "9999px",
              textDecoration: "none",
              fontWeight: 500,
              fontSize: "0.875rem",
              color: "#000",
            }}
          >
            Reservar psicólogo online
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
              marginBottom: "1.25rem",
            }}
          >
            Cómo funciona
          </h2>
          <ol style={{ listStyle: "none", padding: 0, counterReset: "step" }}>
            <li
              style={{
                display: "flex",
                gap: "1rem",
                marginBottom: "1.25rem",
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
                1
              </span>
              <div>
                <strong style={{ display: "block", marginBottom: "0.125rem" }}>
                  Contacto inicial
                </strong>
                <span style={{ color: "#666", fontSize: "0.9375rem" }}>
                  Coordinas por{" "}
                  <Link href="/agendar" style={{ color: "#000", textDecoration: "underline" }}>
                    agendar
                  </Link>{" "}
                  o WhatsApp.
                </span>
              </div>
            </li>
            {[
              {
                title: "Confirmación",
                desc: "Te envío el enlace de videollamada junto con instrucciones básicas.",
              },
              {
                title: "Sesión",
                desc: "Nos conectamos en el horario acordado. Duración: 50 minutos.",
              },
              {
                title: "Seguimiento",
                desc: "Acordamos la frecuencia según tus necesidades.",
              },
            ].map((step, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  gap: "1rem",
                  marginBottom: "1.25rem",
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
                  {i + 2}
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
            Ventajas
          </h2>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              display: "grid",
              gap: "0.75rem",
            }}
          >
            {[
              "Sin traslados",
              "Mayor flexibilidad horaria",
              "Acceso desde cualquier ubicación",
              "Mismo nivel de confidencialidad",
              "Comodidad de tu propio espacio",
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  color: "#444",
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
            Requisitos técnicos
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
            {["Internet estable", "Cámara y micrófono", "Espacio privado"].map(
              (item, i) => (
                <li
                  key={i}
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#f5f5f5",
                    borderRadius: "9999px",
                    fontSize: "0.875rem",
                  }}
                >
                  {item}
                </li>
              )
            )}
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
            {terapiaOnlineFAQs.map((faq, index) => (
              <details
                key={index}
                style={{
                  padding: "1rem",
                  border: "1px solid #eaeaea",
                  borderRadius: "12px",
                }}
              >
                <summary
                  style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}
                >
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
                </p>
              </details>
            ))}
          </div>
        </section>

        <section
          style={{
            padding: "2rem",
            backgroundColor: "#fafafa",
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
            }}
          >
            ¿Listo para comenzar?
          </h2>
          <p
            style={{
              color: "#666",
              marginBottom: "1.5rem",
              fontSize: "0.9375rem",
            }}
          >
            Reserva tu primera sesión online en la página de agendamiento.
          </p>
          <Button href="/agendar">Agendar sesión</Button>
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
              { label: "Psicólogo online", href: "/psicologo-online-chillan" },
              { label: "Online vs presencial", href: "/terapia-online-vs-presencial-chillan" },
              { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
              { label: "TCC", href: "/psicologo-cognitivo-conductual-chillan" },
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
