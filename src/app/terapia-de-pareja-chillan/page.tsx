import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import { IntentClusterSection } from "@/app/components/IntentClusterSection";
import {
  COUPLES_CLUSTER,
  getClusterBreadcrumb,
} from "@/lib/intent-clusters";
import {
  SITE_URL,
  localBusinessSchema,
  getBreadcrumbSchema,
  getServiceSchema,
  getPageFAQSchema,
  getWebPageSchema,
  getTwitterDescription,
} from "@/lib/schemas";

const description =
  "¿Problemas en la pareja? Terapia de pareja en Chillán con psicólogo TCC. Comunicación, celos y crisis. Online o presencial — agenda hoy por web o WhatsApp.";

export const metadata: Metadata = {
  title: "Terapia de pareja Chillán | Psicólogo TCC · Online o presencial",
  description,
  alternates: {
    canonical: "/terapia-de-pareja-chillan",
  },
  openGraph: {
    title: "Terapia de pareja Chillán | Psicólogo TCC · Online o presencial",
    description,
    url: `${SITE_URL}/terapia-de-pareja-chillan`,
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terapia de pareja Chillán | Psicólogo TCC",
    description: getTwitterDescription(
      "Terapia de pareja en Chillán: comunicación, celos o crisis. Psicólogo TCC. Online o presencial. Agenda por web o WhatsApp."
    ),
  },
};

const breadcrumbItems = getClusterBreadcrumb(
  COUPLES_CLUSTER,
  "/terapia-de-pareja-chillan",
);

const parejaFAQs = [
  {
    question: "¿Deben asistir ambos siempre?",
    answer:
      "Lo ideal es que asistan juntos, pero en algunas sesiones puede ser útil trabajar individualmente con cada uno. Lo definimos según las necesidades del proceso.",
  },
  {
    question: "¿Cuánto dura el proceso?",
    answer:
      "Depende de la situación de cada pareja. Algunos temas se trabajan en 8-12 sesiones, otros requieren más tiempo. Evaluamos el avance continuamente.",
  },
  {
    question: "¿Puede ser online?",
    answer:
      "Sí, la terapia de pareja online funciona bien si están en el mismo lugar con conexión estable. También ofrezco sesiones presenciales en Chillán.",
  },
  {
    question: "¿Y si mi pareja no quiere venir?",
    answer:
      "Puedes comenzar solo/a. A veces trabajar individualmente sobre la relación genera cambios que motivan a la otra persona a sumarse después.",
  },
];

const faqSchema = getPageFAQSchema(parejaFAQs);
const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);
const webPageSchema = getWebPageSchema({
  name: "Terapia de pareja Chillán",
  description,
  path: "/terapia-de-pareja-chillan",
});
const serviceSchema = getServiceSchema({
  serviceType: "Terapia de pareja",
  description:
    "Acompañamiento psicológico para parejas en Chillán o por videollamada, con foco en comunicación y resolución de conflictos.",
  areaServed: "Chillán",
  url: `${SITE_URL}/terapia-de-pareja-chillan`,
});

export default function TerapiaParejaChillanPage() {
  return (
    <>
      <Script
        id="webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
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
          <p style={{ fontWeight: 600, marginBottom: "0.125rem" }}>Gonzalo Pedrosa</p>
          <p style={{ fontSize: "0.875rem", color: "#666" }}>
            Psicólogo Clínico · +7 años · Parejas y familias
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
        Terapia de pareja en Chillán
      </h1>

      <p
        style={{
          fontSize: "1.125rem",
          color: "#666",
          marginBottom: "1.5rem",
          lineHeight: 1.6,
        }}
      >
        Si están buscando terapia de pareja en Chillán, este espacio ayuda a trabajar
        comunicación, distancia emocional,{" "}
        <Link href="/terapia-celos-chillan" style={{ color: "#000", textDecoration: "underline" }}>
          celos
        </Link>
        , confianza o crisis de convivencia,
        en formato presencial u{" "}
        <Link href="/psicologo-online-chillan" style={{ color: "#000", textDecoration: "underline" }}>
          online
        </Link>
        , sin tomar bandos. El primer paso es una evaluación conjunta para entender el
        problema y proponer un plan claro.
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
          Agendar terapia de pareja →
        </Link>
        <Link
          href="/consulta-psicologica-precio-chillan"
          style={{ fontSize: "0.875rem", color: "#666", textDecoration: "underline" }}
        >
          Ver precio de sesión
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
          ¿Cuándo considerar terapia de pareja?
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Dificultades para comunicarse sin discutir",
            "Sensación de distancia emocional o desconexión",
            "Conflictos recurrentes sin solución",
            "Crisis de confianza o infidelidad",
            "Decisiones importantes que no logran tomar juntos",
            "Diferencias en expectativas de vida o crianza",
            "Rutina que ha afectado la intimidad",
            "Dudas sobre continuar o no la relación",
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
          {[
            "Espacio neutral donde ambos pueden expresarse",
            "Identificación de patrones de comunicación problemáticos",
            "Herramientas prácticas para resolver conflictos",
            "Trabajo en las necesidades de cada uno",
            "Reconstrucción de la conexión emocional",
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
          💡 No es necesario estar en crisis
        </p>
        <p style={{ color: "#0c4a6e", fontSize: "0.875rem", lineHeight: 1.6 }}>
          Muchas parejas consultan para fortalecer su relación antes de que los
          problemas se agraven. La terapia preventiva puede ser muy efectiva.
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
              ¿Deben asistir ambos siempre?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Lo ideal es que asistan juntos, pero en algunas sesiones puede ser
              útil trabajar individualmente con cada uno. Lo definimos según las
              necesidades del proceso.
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
              ¿Cuánto dura el proceso?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Depende de la situación de cada pareja. Algunos temas se trabajan
              en 8-12 sesiones, otros requieren más tiempo. Evaluamos el avance
              continuamente.
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
              ¿Puede ser online?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Sí, la{" "}
              <Link
                href="/psicologo-online-chillan"
                style={{ color: "#000", textDecoration: "underline" }}
              >
                terapia online
              </Link>{" "}
              funciona bien para parejas. Solo necesitan estar en el mismo lugar
              con una conexión estable.
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
              ¿Y si mi pareja no quiere venir?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Puedes comenzar solo/a. A veces trabajar individualmente sobre la
              relación genera cambios que motivan a la otra persona a sumarse
              después.
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
          Den el primer paso juntos
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            marginBottom: "1.5rem",
            fontSize: "0.9375rem",
          }}
        >
          Agenda una primera sesión para evaluar su situación.
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

      <IntentClusterSection
        currentPath="/terapia-de-pareja-chillan"
        extraLinks={[
          { label: "Psicólogo online", href: "/psicologo-online-chillan" },
          { label: "Precios", href: "/consulta-psicologica-precio-chillan" },
        ]}
      />
    </main>
    </>
  );
}
