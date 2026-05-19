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
  "Psicólogo para hombres en Chillán. Terapia cognitivo-conductual para ansiedad, estrés laboral, ira, pareja y salud mental masculina. Presencial y online. Espacio confidencial.";

export const metadata: Metadata = {
  title: "Psicólogo para Hombres en Chillán | Gonzalo Pedrosa",
  description,
  alternates: {
    canonical: "/psicologo-hombres-chillan",
  },
  openGraph: {
    title: "Psicólogo para Hombres en Chillán | Gonzalo Pedrosa",
    description,
    url: "https://www.gonzalopedrosa.cl/psicologo-hombres-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicólogo para Hombres en Chillán",
    description: getTwitterDescription(
      "Terapia para hombres en Chillán: ansiedad, estrés, ira y pareja. TCC, presencial u online. Espacio confidencial."
    ),
  },
};

const breadcrumbItems = [
  { label: "Inicio", href: "/" },
  { label: "Psicólogo para Hombres Chillán" },
];

const hombresFAQs = [
  {
    question: "¿Por qué un psicólogo para hombres y no terapia general?",
    answer:
      "La terapia es la misma en fondo, pero muchos hombres se sienten más cómodos cuando el espacio entiende barreras concretas: dificultad para nombrar emociones, presión por ser fuerte o resolver solo, y miedo a ser juzgado.",
  },
  {
    question: "¿Qué pasa en la primera sesión?",
    answer:
      "Conversamos sobre qué te trae, qué esperas y definimos objetivos. No tienes que tener un diagnóstico ni un discurso armado. Muchos hombres llegan diciendo solo que algo no está bien, y eso es suficiente para empezar.",
  },
  {
    question: "¿Puedo hacer terapia online si me da vergüenza ir presencial?",
    answer:
      "Sí. La terapia online tiene la misma confidencialidad y suele facilitar el primer contacto. Puedes combinar modalidades según tu disponibilidad en Chillán o desde otra ciudad de Chile.",
  },
  {
    question: "¿Trabajas ira, adicciones o problemas de pareja?",
    answer:
      "Sí. Son motivos frecuentes de consulta masculina. Integramos técnicas de regulación emocional, comunicación y cambio de hábitos según tu situación.",
  },
];

const faqSchema = getFAQSchema(hombresFAQs);
const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);
const serviceSchema = getServiceSchema({
  serviceType: "Psicología para Hombres",
  description:
    "Atención psicológica para hombres en Chillán: ansiedad, estrés laboral, ira, pareja y salud mental masculina con enfoque cognitivo-conductual.",
  areaServed: "Chillán",
});

const relatedLinks = [
  { label: "Control de ira", href: "/terapia-control-ira-chillan" },
  { label: "Estrés laboral", href: "/psicologo-estres-laboral-chillan" },
  { label: "Terapia de pareja", href: "/terapia-de-pareja-chillan" },
  { label: "Adicciones", href: "/psicologo-adicciones-chillan" },
  { label: "Adultos", href: "/psicologo-adulto-chillan" },
  { label: "Agendar", href: "/agendar" },
];

export default function PsicologoHombresChillanPage() {
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
            alt="Gonzalo Pedrosa - Psicólogo para hombres en Chillán"
            width={64}
            height={64}
            priority
            style={{ borderRadius: "9999px", objectFit: "cover" }}
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
          Chillán, Ñuble · Presencial y online
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
          Psicólogo para Hombres en Chillán
        </h1>

        <p
          style={{
            fontSize: "1.125rem",
            color: "#666",
            marginBottom: "2rem",
            lineHeight: 1.6,
          }}
        >
          Muchos hombres crecieron con el mensaje de que pedir ayuda es debilidad.
          Reconocer que necesitas apoyo suele ser un acto de responsabilidad, no de
          fracaso. Trabajo con un enfoque{" "}
          <Link href="/psicologo-cognitivo-conductual-chillan" style={{ color: "#000" }}>
            cognitivo-conductual
          </Link>{" "}
          práctico y directo.
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
            Por qué cuesta pedir ayuda (y no eres el único)
          </h2>
          <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
            En consulta aparecen con frecuencia frases como &ldquo;no sé qué me
            pasa&rdquo;, &ldquo;debería poder solo&rdquo; o &ldquo;no quiero que
            nadie se entere&rdquo;. No es falta de voluntad: muchas veces nadie
            enseñó a identificar emociones ni a pedir apoyo sin sentir vergüenza.
          </p>
          <p style={{ color: "#444", lineHeight: 1.7 }}>
            La terapia no busca que hables como en una película: busca que entiendas
            qué te pasa, cómo reaccionas y qué puedes cambiar con herramientas
            concretas. Si tu malestar está ligado al trabajo, también trabajamos{" "}
            <Link href="/psicologo-estres-laboral-chillan" style={{ color: "#000" }}>
              estrés laboral
            </Link>{" "}
            y agotamiento.
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
            Temas que trabajamos
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
              "Dificultad para expresar o identificar emociones",
              "Estrés laboral, presión por el rendimiento o burnout",
              "Problemas de pareja y comunicación",
              "Ira, frustración o impulsividad",
              "Ansiedad o síntomas depresivos no reconocidos",
              "Crisis de identidad, propósito o transiciones de vida",
              "Paternidad y nuevos roles familiares",
              "Conductas de riesgo, adicciones o evitación",
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
            ¿En qué se diferencia de psicólogo para adultos?
          </p>
          <p style={{ color: "#0c4a6e", fontSize: "0.875rem", lineHeight: 1.6 }}>
            La{" "}
            <Link href="/psicologo-adulto-chillan" style={{ color: "#0369a1" }}>
              atención para adultos
            </Link>{" "}
            cubre cualquier edad y motivo de consulta. Esta página describe un
            espacio pensado en las barreras que muchos hombres encuentran al iniciar
            terapia. El tratamiento sigue siendo personalizado; no hay un
            &ldquo;protocolo masculino&rdquo; único, sino un enfoque que respeta tu
            ritmo y tu forma de comunicarte.
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
            Cómo es el proceso
          </h2>
          <ol
            style={{
              listStyle: "none",
              padding: 0,
              display: "grid",
              gap: "0.75rem",
            }}
          >
            {[
              {
                step: "1",
                text: "Primer contacto por WhatsApp o formulario de agendar. Respondemos en menos de 24 horas.",
              },
              {
                step: "2",
                text: "Primera sesión (50 min): exploramos tu situación y objetivos sin presión.",
              },
              {
                step: "3",
                text: "Plan de trabajo con técnicas de TCC: pensamientos, conductas y regulación emocional.",
              },
              {
                step: "4",
                text: "Seguimiento semanal o quincenal según avances; puedes elegir presencial en Chillán u online.",
              },
            ].map((item) => (
              <li
                key={item.step}
                style={{
                  display: "flex",
                  gap: "1rem",
                  padding: "1rem",
                  border: "1px solid #eaeaea",
                  borderRadius: "12px",
                }}
              >
                <span
                  style={{
                    fontWeight: 700,
                    color: "#000",
                    flexShrink: 0,
                    width: "1.5rem",
                  }}
                >
                  {item.step}
                </span>
                <span style={{ color: "#444", fontSize: "0.9375rem", lineHeight: 1.6 }}>
                  {item.text}
                </span>
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
            Mi enfoque
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
              "Conversación directa, sin rodeos innecesarios",
              "Sin juzgar ni decirte cómo deberías sentirte",
              "Herramientas aplicables entre sesiones",
              "Trabajo en regulación emocional y comunicación",
              "Confidencialidad absoluta (secreto profesional)",
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
              style={{
                padding: "1rem",
                border: "1px solid #eaeaea",
                borderRadius: "12px",
              }}
            >
              <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>
                ¿Por qué un psicólogo &quot;para hombres&quot;?
              </summary>
              <p
                style={{
                  marginTop: "0.75rem",
                  color: "#666",
                  lineHeight: 1.6,
                  fontSize: "0.9375rem",
                }}
              >
                No es que necesites algo diferente, sino que muchos hombres se sienten
                más cómodos cuando el espacio entiende sus dificultades para hablar de
                emociones. También puedes ver{" "}
                <Link href="/psicologo-adulto-chillan" style={{ color: "#000" }}>
                  psicólogo para adultos en Chillán
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
                ¿Qué pasa en la primera sesión?
              </summary>
              <p
                style={{
                  marginTop: "0.75rem",
                  color: "#666",
                  lineHeight: 1.6,
                  fontSize: "0.9375rem",
                }}
              >
                Conversamos sobre qué te trae, qué esperas del proceso y definimos
                objetivos. No hay presión. Vas a tu ritmo.
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
                ¿Es confidencial?
              </summary>
              <p
                style={{
                  marginTop: "0.75rem",
                  color: "#666",
                  lineHeight: 1.6,
                  fontSize: "0.9375rem",
                }}
              >
                100%. Todo lo que conversamos está protegido por secreto profesional.
                Nadie se enterará de que vienes ni de lo que hablamos.
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
                ¿Trabajas ira, adicciones o pareja?
              </summary>
              <p
                style={{
                  marginTop: "0.75rem",
                  color: "#666",
                  lineHeight: 1.6,
                  fontSize: "0.9375rem",
                }}
              >
                Sí. Puedes ver también{" "}
                <Link href="/terapia-control-ira-chillan" style={{ color: "#000" }}>
                  control de ira
                </Link>
                ,{" "}
                <Link href="/psicologo-adicciones-chillan" style={{ color: "#000" }}>
                  adicciones
                </Link>{" "}
                y{" "}
                <Link href="/terapia-de-pareja-chillan" style={{ color: "#000" }}>
                  terapia de pareja
                </Link>
                .
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
            Pedir ayuda es parte de ser fuerte
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              marginBottom: "1.5rem",
              fontSize: "0.9375rem",
            }}
          >
            Da el primer paso. Es más fácil de lo que parece.
          </p>
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
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
              Agendar sesión →
            </Link>
            <a
              href="https://wa.me/56968257817"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.5rem",
                backgroundColor: "transparent",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.4)",
                borderRadius: "9999px",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "0.875rem",
              }}
            >
              WhatsApp
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
            {relatedLinks.map((item, i) => (
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
