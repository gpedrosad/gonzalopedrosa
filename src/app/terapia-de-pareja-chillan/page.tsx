import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/app/components/JsonLd";
import { ProfessionalCredentials } from "@/app/components/ProfessionalCredentials";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import { IntentClusterSection } from "@/app/components/IntentClusterSection";
import { RelatedReading } from "@/app/components/RelatedReading";
import {
  COUPLES_CLUSTER,
  getClusterBreadcrumb,
} from "@/lib/intent-clusters";
import {
  SITE_URL,
  getBreadcrumbSchema,
  getServiceSchema,
  getPageFAQSchema,
  getWebPageSchema,
  getTwitterDescription,
} from "@/lib/schemas";

const description =
  "La terapia de pareja es un espacio para los dos: se mira el ciclo de la pelea, los celos o la distancia, sin tomar bandos. En Chillán, también si están casados.";

export const metadata: Metadata = {
  title: "Terapia de pareja en Chillán: qué es y cómo funciona",
  description,
  alternates: {
    canonical: "/terapia-de-pareja-chillan",
  },
  openGraph: {
    locale: "es_CL",
    title: "Terapia de pareja en Chillán: qué es y cómo funciona",
    description,
    url: `${SITE_URL}/terapia-de-pareja-chillan`,
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Retrato de Gonzalo Pedrosa, psicólogo clínico" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terapia de pareja en Chillán: qué es y cómo funciona",
    description: getTwitterDescription(description),
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
      "No hay un número de sesiones que sirva para todas las parejas. Depende de lo que traigan los dos y de cómo avanza la conversación.",
  },
  {
    question: "¿Los celos siempre indican inseguridad?",
    answer:
      "No siempre. A veces reflejan una traición anterior o un patrón aprendido. Conviene distinguir qué es una señal y qué es una interpretación ansiosa.",
  },
  {
    question: "¿Los celos se conversan de a uno o de a dos?",
    answer:
      "Puedes venir solo o con tu pareja. El trabajo suele ser individual, y en algunos momentos sirve que la otra persona entre.",
  },
  {
    question: "¿El objetivo es que los celos desaparezcan?",
    answer:
      "No. Los celos son una emoción humana. El punto es que dejen de controlar la relación. Si hay una razón real de desconfianza, eso también se puede conversar. No hay un plazo único.",
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
  {
    question: "¿Atiendes matrimonios de muchos años?",
    answer:
      "Sí. La misma atención cubre matrimonios recién casados y parejas con décadas de convivencia. Los temas cambian. El espacio sigue siendo para los dos.",
  },
];

const faqSchema = getPageFAQSchema(parejaFAQs);
const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);
const webPageSchema = getWebPageSchema({
  name: "Terapia de pareja en Chillán: qué es y cómo funciona",
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
      <JsonLd id="webpage" data={webPageSchema as Record<string, unknown>} />
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
          marginBottom: "2rem",
        }}
      >
        <Image
          src="/yo.png"
          alt="Retrato de Gonzalo Pedrosa, psicólogo clínico"
          width={64}
          height={64}
            sizes="64px"
          style={{
            borderRadius: "9999px",
            objectFit: "cover",
          }}
        loading="lazy"
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
        Terapia de pareja en Chillán: qué es y cómo funciona
      </h1>

      <p
        style={{
          fontSize: "1.125rem",
          color: "#666",
          marginBottom: "1.5rem",
          lineHeight: 1.6,
        }}
      >
        La terapia de pareja es un espacio para los dos. Se mira cómo discuten,
        la distancia, los{" "}
        <Link href="#celos" style={{ color: "#000", textDecoration: "underline" }}>
          celos
        </Link>{" "}
        o una crisis de confianza, sin tomar bandos. Puede ser presencial en
        Chillán o por{" "}
        <Link href="/psicologo-online-chillan" style={{ color: "#000", textDecoration: "underline" }}>
          videollamada
        </Link>{" "}
        si están en el mismo lugar. El ciclo de la pelea, antes de la atención
        local, está en la guía de{" "}
        <Link href="/guias/comunicacion-en-pareja" style={{ color: "#000", textDecoration: "underline" }}>
          comunicación en pareja
        </Link>
        .
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
            fontSize: "1.35rem",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            marginBottom: "0.75rem",
            lineHeight: 1.3,
          }}
        >
          Si están casados
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
          La terapia de pareja y la que antes se llamaba matrimonial son la
          misma atención. Cubre novios, convivientes y matrimonios. En un
          matrimonio de años suelen aparecer el desgaste de la convivencia, la
          plata que tensiona la casa, la crianza, la intimidad y una crisis
          después de la jubilación o cuando los hijos se van.
        </p>
        <p style={{ color: "#444", lineHeight: 1.7, margin: 0 }}>
          Venir no obliga a “salvar” el matrimonio. También puede ordenar una
          separación respetuosa si los dos lo ven así. La sesión es para los
          cónyuges. Si el tema son los hijos de forma directa, se mira aparte:
          la{" "}
          <Link href="/orientacion-padres-chillan" style={{ color: "#000", textDecoration: "underline" }}>
            orientación para padres
          </Link>{" "}
          es otra página. Los estilos de búsqueda de cercanía están en la guía
          de{" "}
          <Link href="/guias/estilos-de-apego" style={{ color: "#000", textDecoration: "underline" }}>
            estilos de apego
          </Link>
          . Si la relación ya terminó, o hay dependencia o control, eso no es
          esta página: está en{" "}
          <Link href="/psicologo-ruptura-amorosa-chillan" style={{ color: "#000", textDecoration: "underline" }}>
            ruptura, dependencia y relación tóxica
          </Link>
          .
        </p>
      </section>

      <section id="celos" style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontSize: "1.35rem",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            marginBottom: "0.75rem",
            lineHeight: 1.3,
          }}
        >
          Si el tema son los celos
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
          Los celos, en cierta medida, son normales. Cuando se vuelven intensos,
          frecuentes o infundados, pueden dañar la relación. No siempre son
          inseguridad: a veces hay una traición anterior o un patrón aprendido.
          Conviene separar una señal de una interpretación ansiosa.
        </p>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem", marginBottom: "1rem" }}>
          {[
            "Revisar el celular o las redes de tu pareja una y otra vez",
            "Necesitar saber dónde está en todo momento",
            "Leer un gesto corriente como infidelidad",
            "Limitar los contactos sociales de la otra persona",
            "Buscar pruebas",
          ].map((item) => (
            <li
              key={item}
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
        <p style={{ color: "#444", lineHeight: 1.7, margin: 0 }}>
          Detrás puede haber miedo al abandono, una infidelidad anterior,{" "}
          <Link href="/psicologo-baja-autoestima-chillan" style={{ color: "#000", textDecoration: "underline" }}>
            autoestima baja
          </Link>
          , ansiedad o un apego ansioso. Ese mapa está en la guía de estilos de
          apego. Puedes venir solo o con tu pareja. El objetivo no es que la
          emoción desaparezca: es que deje de controlar la relación. Si hay una
          razón real de desconfianza, eso también se conversa.
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
              No hay un número de sesiones que sirva para todas las parejas.
              Depende de lo que traigan los dos y de cómo avanza la conversación.
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

          <details
            style={{
              padding: "1rem",
              border: "1px solid #eaeaea",
              borderRadius: "12px",
            }}
          >
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>
              ¿Atiendes matrimonios de muchos años?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Sí. La misma atención cubre matrimonios recién casados y parejas
              con décadas de convivencia. Los temas cambian. El espacio sigue
              siendo para los dos.
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
              ¿Los celos siempre indican inseguridad?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              No siempre. A veces reflejan una traición anterior o un patrón
              aprendido. Conviene distinguir qué es una señal y qué es una
              interpretación ansiosa.
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
              ¿Los celos se conversan de a uno o de a dos?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Puedes venir solo o con tu pareja. El trabajo suele ser
              individual, y en algunos momentos sirve que la otra persona entre.
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
              ¿El objetivo es que los celos desaparezcan?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              No. Los celos son una emoción humana. El punto es que dejen de
              controlar la relación. Si hay una razón real de desconfianza, eso
              también se puede conversar. No hay un plazo único.
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

      <ProfessionalCredentials />

      <RelatedReading currentPath="/terapia-de-pareja-chillan" />

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
