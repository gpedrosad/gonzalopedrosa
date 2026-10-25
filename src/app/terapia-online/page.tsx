import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/app/components/JsonLd";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import { IntentClusterSection } from "@/app/components/IntentClusterSection";
import { RelatedReading } from "@/app/components/RelatedReading";
import { Button } from "../components/Button";
import {
  ONLINE_CLUSTER,
  getClusterBreadcrumb,
} from "@/lib/intent-clusters";
import {
  SITE_URL,
  localBusinessSchema,
  getBreadcrumbSchema,
  getServiceSchema,
  getPageFAQSchema,
  getTwitterDescription,
} from "@/lib/schemas";

const description =
  "La terapia online en Chile es una videollamada con hora de inicio y de cierre, un lugar privado y continuidad. La atención local, en Chillán, está en otra página.";

export const metadata: Metadata = {
  title: "Terapia online en Chile: cómo funciona, paso a paso",
  description,
  alternates: {
    canonical: "/terapia-online",
  },
  openGraph: {
    locale: "es_CL",
    title: "Terapia online en Chile: cómo funciona, paso a paso",
    description,
    url: `${SITE_URL}/terapia-online`,
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Retrato de Gonzalo Pedrosa, psicólogo clínico" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terapia online en Chile: cómo funciona, paso a paso",
    description: getTwitterDescription(description),
  },
};

const breadcrumbItems = getClusterBreadcrumb(
  ONLINE_CLUSTER,
  "/terapia-online",
);

const terapiaOnlineFAQs = [
  {
    question: "¿Cómo funciona la terapia online en Chile?",
    answer:
      "Es una videollamada con hora de inicio y de cierre. Llega un enlace antes. En la hora se trabaja un punto de la semana y al terminar puedes anotar un paso. Pide conexión, cámara, micrófono y un lugar privado. La sala está en Chillán. La videollamada es para quien está en Chile.",
  },
  {
    question: "¿Dónde se describe cómo es la hora?",
    answer:
      "En la pregunta dedicada: el enlace, los 50 minutos y la pieza con puerta. Qué necesitas tener listo está en otra pregunta. Esta página explica el formato.",
  },
  {
    question: "¿Esta página dice si el formato sirve?",
    answer:
      "No compara resultados. Si la duda es si puede servirte, está en la pregunta de si la terapia online funciona. Aquí se explica cómo funciona el formato en Chile.",
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

const faqSchema = getPageFAQSchema(terapiaOnlineFAQs);
const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);
const serviceSchema = getServiceSchema({
  serviceType: "Información sobre terapia psicológica online",
  description:
    "Cómo funciona la terapia online en Chile: videollamada, hora con inicio y cierre, y diferencia con la sala. La atención local está en Chillán.",
});

export default function TerapiaOnlinePage() {
  return (
    <>
      <JsonLd id="local-business" data={localBusinessSchema as Record<string, unknown>} />
      <JsonLd id="breadcrumb" data={breadcrumbSchema as Record<string, unknown>} />
      <JsonLd id="service" data={serviceSchema as Record<string, unknown>} />
      <JsonLd id="faq-schema" data={faqSchema as Record<string, unknown>} />
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
            alt="Retrato de Gonzalo Pedrosa, psicólogo clínico"
            width={56}
            height={56}
            sizes="56px"
            style={{
              borderRadius: "9999px",
              objectFit: "cover",
            }}
          loading="lazy"
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
            Página informativa de Chile. La atención, con consulta en Chillán, está en{" "}
            <Link href="/psicologo-online-chillan" style={{ color: "#000", textDecoration: "underline" }}>
              psicólogo online
            </Link>
            .
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
          Terapia online en Chile: cómo funciona
        </h1>

        <p
          style={{
            fontSize: "1.125rem",
            color: "#666",
            marginBottom: "1.5rem",
            lineHeight: 1.6,
          }}
        >
          La terapia online en Chile funciona como una videollamada con hora de
          inicio y de cierre. Antes llega un enlace. En la hora se trabaja un
          punto de la semana y al terminar puedes anotar un paso. Pide conexión
          estable, cámara, micrófono y un lugar donde nadie más escuche. La
          consulta presencial está en Chillán. La atención local está en{" "}
          <Link href="/psicologo-online-chillan" style={{ color: "#000", textDecoration: "underline" }}>
            psicólogo online en Chillán
          </Link>
          . Cómo es la hora está en{" "}
          <Link href="/preguntas/como-es-una-sesion-de-psicologia-online" style={{ color: "#000", textDecoration: "underline" }}>
            cómo es una sesión de psicología online
          </Link>
          . Qué necesitas tener listo está en{" "}
          <Link href="/preguntas/como-funciona-la-terapia-psicologica-online" style={{ color: "#000", textDecoration: "underline" }}>
            qué necesitas para la terapia psicológica online
          </Link>
          . Si la duda es si el formato sirve, está en{" "}
          <Link href="/preguntas/la-terapia-online-funciona" style={{ color: "#000", textDecoration: "underline" }}>
            ¿la terapia online funciona?
          </Link>
          .
        </p>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.35rem",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              marginBottom: "0.75rem",
              lineHeight: 1.3,
            }}
          >
            {terapiaOnlineFAQs[0].question}
          </h2>
          <p style={{ color: "#444", lineHeight: 1.7, margin: 0 }}>
            {terapiaOnlineFAQs[0].answer}{" "}
            El recorrido de la hora está en{" "}
            <Link href="/preguntas/como-es-una-sesion-de-psicologia-online" style={{ color: "#000", textDecoration: "underline" }}>
              cómo es una sesión de psicología online
            </Link>
            .
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.35rem",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              marginBottom: "0.75rem",
              lineHeight: 1.3,
            }}
          >
            {terapiaOnlineFAQs[1].question}
          </h2>
          <p style={{ color: "#444", lineHeight: 1.7, margin: 0 }}>
            {terapiaOnlineFAQs[1].answer}{" "}
            Qué necesitas tener listo está en{" "}
            <Link href="/preguntas/como-funciona-la-terapia-psicologica-online" style={{ color: "#000", textDecoration: "underline" }}>
              qué necesitas para la terapia psicológica online
            </Link>
            . Si la duda es si el formato sirve, está en{" "}
            <Link href="/preguntas/la-terapia-online-funciona" style={{ color: "#000", textDecoration: "underline" }}>
              ¿la terapia online funciona?
            </Link>
          </p>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.35rem",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              marginBottom: "0.75rem",
              lineHeight: 1.3,
            }}
          >
            Qué preparas antes de conectarte
          </h2>
          <p style={{ color: "#444", lineHeight: 1.7, margin: "0 0 0.75rem" }}>
            Deja el enlace a mano. Prueba cámara y micrófono. Elige una pieza
            con puerta, donde la conversación no tenga público. La hora son 50
            minutos, los mismos de una sesión presencial, así que conviene
            entrar ya sentado y no en medio de un traslado.
          </p>
          <ul style={{ margin: 0, paddingLeft: "1.2rem", color: "#444", lineHeight: 1.7 }}>
            <li>Internet estable y el enlace de Zoom, Google Meet u otra videollamada.</li>
            <li>Cámara, micrófono y un lugar privado.</li>
            <li>Un punto de la semana: una situación, un pensamiento o algo que intentaste.</li>
          </ul>
        </section>

        <section style={{ marginBottom: "2.5rem" }}>
          <h2
            style={{
              fontSize: "1.35rem",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              marginBottom: "0.75rem",
              lineHeight: 1.3,
            }}
          >
            En qué se diferencia de una sala
          </h2>
          <p style={{ color: "#444", lineHeight: 1.7, margin: "0 0 0.75rem" }}>
            No hay traslado. La privacidad depende de tu casa u oficina. Se ve
            parte del lenguaje del cuerpo y el encuadre de la cámara importa.
            En un malestar muy intenso, la videollamada pide un lugar seguro.
            La sala, en Chillán, puede sentirse más contenida si prefieres
            salir de la casa. El secreto profesional es el mismo. Se pueden
            alternar las dos modalidades. La comparación está en{" "}
            <Link href="/terapia-online-vs-presencial-chillan" style={{ color: "#000", textDecoration: "underline" }}>
              terapia online y presencial
            </Link>
            . El valor publicado es el mismo en las dos; el número y el pago
            están en{" "}
            <Link href="/consulta-psicologica-precio-chillan" style={{ color: "#000", textDecoration: "underline" }}>
              la ficha de precio
            </Link>
            .
          </p>
        </section>

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
            {terapiaOnlineFAQs.slice(2).map((faq, index) => (
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

        <RelatedReading currentPath="/terapia-online" />

        <IntentClusterSection
          currentPath="/terapia-online"
          extraLinks={[
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            { label: "TCC", href: "/psicologo-cognitivo-conductual-chillan" },
          ]}
        />
      </main>
    </>
  );
}
