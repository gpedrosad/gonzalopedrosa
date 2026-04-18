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
  "Qué esperar en la primera consulta con psicólogo en Chillán: duración, confidencialidad, qué llevar y cómo agendar. TCC con Gonzalo Pedrosa. Presencial u online.";

export const metadata: Metadata = {
  title: "Primera consulta con psicólogo en Chillán | Qué esperar | Gonzalo Pedrosa",
  description,
  alternates: {
    canonical: "/primera-consulta-psicologo-chillan",
  },
  openGraph: {
    title: "Primera consulta con psicólogo en Chillán | Gonzalo Pedrosa",
    description,
    url: "https://www.gonzalopedrosa.cl/primera-consulta-psicologo-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Primera consulta con psicólogo en Chillán",
    description: getTwitterDescription(
      "Prepara tu primera sesión sin sorpresas: tiempo, valor, agenda y modalidad. Chillán y videollamada."
    ),
  },
};

const breadcrumbItems = [
  { label: "Inicio", href: "/" },
  { label: "Primera consulta psicólogo" },
];

const primeraFAQs = [
  {
    question: "¿La primera sesión es solo de evaluación o ya empiezo el tratamiento?",
    answer:
      "Combinamos ambas: escucho tu historia y objetivos, hago preguntas para entender el contexto y, si hay encaje mutuo, esbozamos un plan inicial. No es un interrogatorio: vas a espacio para contar a tu ritmo.",
  },
  {
    question: "¿Debo llevar exámenes o informes previos?",
    answer:
      "Si tenés derivación médica, informes de salud mental o estudios recientes, pueden ayudar, pero no son obligatorios para comenzar. Muchas personas llegan solo con ganas de ordenar lo que les pasa.",
  },
  {
    question: "¿Puedo ir acompañado a la primera consulta?",
    answer:
      "En general trabajo uno a uno; si considerás relevante un apoyo puntual, lo conversamos antes. En adolescentes puede participar un adulto responsable en parte de la sesión según el caso.",
  },
  {
    question: "¿Cuánto demora en confirmarse un horario?",
    answer:
      "Suelo responder por WhatsApp en menos de 24 horas hábiles. La disponibilidad varía según la semana; si tenés urgencia, indicalo en el mensaje.",
  },
];

const faqSchema = getFAQSchema(primeraFAQs);
const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);
const serviceSchema = getServiceSchema({
  serviceType: "Primera consulta psicológica",
  description:
    "Evaluación inicial y acuerdo terapéutico en sesión de 50 minutos, presencial en Chillán o por videollamada, con enfoque cognitivo-conductual.",
  areaServed: "Chillán",
});

export default function PrimeraConsultaPsicologoChillanPage() {
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
              Psicólogo Clínico · +7 años de experiencia
            </p>
          </div>
        </div>

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
          Chillán · Online
        </p>

        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            marginBottom: "1rem",
            lineHeight: 1.1,
          }}
        >
          Primera consulta con psicólogo en Chillán
        </h1>

        <p
          style={{
            fontSize: "1.125rem",
            color: "#666",
            marginBottom: "3rem",
            lineHeight: 1.6,
          }}
        >
          La primera sesión suele generar alivio y también dudas: qué contar primero, si habrá
          diagnóstico en el día uno o cómo se paga. Acá va un mapa claro para que llegues más
          tranquilo y podamos usar el tiempo de forma útil —incluida la decisión de{" "}
          <Link href="/cuando-ir-al-psicologo-chillan" style={{ color: "#000", textDecoration: "underline" }}>
            si este es el momento adecuado para ti
          </Link>
          .
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
            Qué ocurre en la primera sesión (50 minutos)
          </h2>
          <ol style={{ paddingLeft: "1.25rem", color: "#444", lineHeight: 1.75, fontSize: "0.9375rem" }}>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong style={{ color: "#000" }}>Acuerdos básicos:</strong> confidencialidad, forma de
              contacto entre sesiones y qué hacer si no podés asistir.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong style={{ color: "#000" }}>Tu motivo de consulta:</strong> qué te trae hoy, desde
              cuándo y qué querés que sea distinto en unas semanas.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong style={{ color: "#000" }}>Contexto breve:</strong> historia relevante sin necesidad
              de contarlo todo el primer día; profundizamos en sesiones siguientes.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong style={{ color: "#000" }}>Encaje y plan:</strong> te explico cómo trabajo con{" "}
              <Link href="/psicologo-cognitivo-conductual-chillan" style={{ color: "#000", textDecoration: "underline" }}>
                TCC
              </Link>
              , frecuencia sugerida y próximos pasos. Si hace falta otro tipo de ayuda, lo digo con
              honestidad.
            </li>
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
            Valor y pago
          </h2>
          <div style={{ padding: "1rem", backgroundColor: "#fafafa", borderRadius: "8px" }}>
            <p style={{ fontWeight: 600, marginBottom: "0.5rem", color: "#000" }}>
              $35.000 por sesión (50 minutos)
            </p>
            <p style={{ fontSize: "0.875rem", color: "#666", lineHeight: 1.6 }}>
              Primera consulta al mismo valor que las siguientes. Emito boleta para{" "}
              <Link href="/psicologo-reembolso-isapre-chillan" style={{ color: "#000", textDecoration: "underline" }}>
                reembolso Isapre
              </Link>
              . Detalle en{" "}
              <Link href="/consulta-psicologica-precio-chillan" style={{ color: "#000", textDecoration: "underline" }}>
                precio consulta psicológica Chillán
              </Link>
              .
            </p>
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
            Cómo agendar (rápido)
          </h2>
          <div style={{ display: "grid", gap: "0.75rem" }}>
            {[
              {
                paso: "Elegí modalidad",
                desc: "Presencial en Chillán o sesión por videollamada. Compará matices en terapia online vs presencial.",
                link: "/terapia-online-vs-presencial-chillan",
                linkLabel: "Ver comparación",
              },
              {
                paso: "Reservá hora",
                desc: "Usá la página de agendamiento o escribí por WhatsApp con días y franja horaria posibles.",
                link: "/agendar",
                linkLabel: "Ir a agendar",
              },
              {
                paso: "Confirmación",
                desc: "Te respondo con horario cerrado y, si es online, el enlace para la videollamada.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "1rem",
                  padding: "1rem",
                  backgroundColor: "#fafafa",
                  borderRadius: "8px",
                }}
              >
                <span style={{ fontSize: "1.25rem", fontWeight: 700, color: "#000", flexShrink: 0 }}>
                  {i + 1}.
                </span>
                <div>
                  <p style={{ fontWeight: 600, marginBottom: "0.25rem", color: "#000" }}>{item.paso}</p>
                  <p style={{ fontSize: "0.875rem", color: "#666", marginBottom: item.link ? "0.5rem" : 0 }}>
                    {item.desc}
                  </p>
                  {item.link && (
                    <Link href={item.link} style={{ fontSize: "0.875rem", color: "#000", textDecoration: "underline" }}>
                      {item.linkLabel} →
                    </Link>
                  )}
                </div>
              </div>
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
            {primeraFAQs.map((faq, index) => (
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
            Reservá tu primera sesión
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              marginBottom: "1.5rem",
              fontSize: "0.9375rem",
            }}
          >
            Elige el canal que te resulte más simple hoy.
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
            Más lecturas
          </p>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {[
              { label: "Terapia online", href: "/terapia-online" },
              { label: "Cuándo ir al psicólogo", href: "/cuando-ir-al-psicologo-chillan" },
              { label: "Online vs presencial", href: "/terapia-online-vs-presencial-chillan" },
              { label: "Hora hoy", href: "/hora-psicologo-chillan-hoy" },
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
