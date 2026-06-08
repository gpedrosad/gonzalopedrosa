import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import { IntentClusterSection } from "@/app/components/IntentClusterSection";
import { OrganicSeoScripts } from "@/app/components/OrganicSeoScripts";
import {
  COUPLES_CLUSTER,
  getClusterBreadcrumb,
} from "@/lib/intent-clusters";
import { getTwitterDescription } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Terapia para Celos en Chillán, Chile | Gonzalo Pedrosa",
  description:
    "Psicólogo especializado en celos en Chillán. Tratamiento para celos patológicos, inseguridad en la pareja y celotipia. Terapia cognitivo-conductual.",
  alternates: {
    canonical: "/terapia-celos-chillan",
  },
  openGraph: {
    title: "Terapia para Celos en Chillán | Gonzalo Pedrosa",
    description: "Tratamiento para celos patológicos e inseguridad en la pareja. Terapia cognitivo-conductual efectiva.",
    url: "https://www.gonzalopedrosa.cl/terapia-celos-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terapia para Celos en Chillán",
    description: getTwitterDescription("Supera los celos y la inseguridad con terapia profesional."),
  },
};


const terapia_celos_chillanFAQs = [
  {
    question: "¿Los celos siempre indican inseguridad?",
    answer:
      "No siempre. A veces reflejan experiencias previas de traición o patrones aprendidos. En terapia distinguimos qué es señal real y qué es interpretación ansiosa.",
  },
  {
    question: "¿Pueden ir en pareja?",
    answer:
      "Sí. Trabajo con parejas y también con personas que consultan por celos recurrentes en distintas relaciones.",
  },
  {
    question: "¿Cuánto dura el proceso?",
    answer:
      "Depende de la historia y objetivos. Muchas parejas notan cambios en comunicación entre 8 y 16 sesiones.",
  },
];

const breadcrumbItems = getClusterBreadcrumb(
  COUPLES_CLUSTER,
  "/terapia-celos-chillan",
);

export default function TerapiaCelosChillanPage() {
  return (
    <>
      <OrganicSeoScripts
        breadcrumbItems={breadcrumbItems}
        faqs={terapia_celos_chillanFAQs}
        serviceType="Terapia para Celos"
        serviceDescription="Tratamiento para celos patológicos e inseguridad en la pareja en Chillán. Terapia cognitivo-conductual, presencial y online."
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
            Chillán, Chile
          </p>
          <p style={{ fontWeight: 500, color: "#000" }}>Gonzalo Pedrosa</p>
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
        Terapia Celos en Chillán
      </h1>

      <p
        style={{
          fontSize: "1.125rem",
          color: "#666",
          marginBottom: "3rem",
          lineHeight: 1.6,
        }}
      >
        Los celos en cierta medida son normales, pero cuando se vuelven
        intensos, frecuentes o infundados, pueden dañar seriamente la relación y
        tu bienestar. La terapia te ayuda a entender y manejar estos
        sentimientos.
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
          Señales de celos problemáticos
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Revisar constantemente el celular o redes de tu pareja",
            "Necesidad de saber dónde está en todo momento",
            "Interpretar gestos normales como señales de infidelidad",
            "Discusiones frecuentes por interacciones con otras personas",
            "Prohibir o limitar contactos sociales de tu pareja",
            "Pensamientos intrusivos sobre engaños",
            "Ansiedad intensa cuando tu pareja no está",
            "Buscar \"pruebas\" constantemente",
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
          ¿Qué hay detrás de los celos?
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
          Los celos suelen estar relacionados con:
        </p>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Baja autoestima e inseguridad personal",
            "Miedo al abandono",
            "Experiencias pasadas de infidelidad o traición",
            "Patrones de apego ansioso",
            "Ansiedad generalizada",
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
              <span style={{ color: "#000" }}>•</span>
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
          Tratamiento
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
          La{" "}
          <Link
            href="/psicologo-cognitivo-conductual-chillan"
            style={{ color: "#000", textDecoration: "underline" }}
          >
            terapia cognitivo-conductual
          </Link>{" "}
          es muy efectiva para trabajar los celos. El proceso incluye:
        </p>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Identificar pensamientos distorsionados sobre la pareja",
            "Reducir conductas de control y verificación",
            "Trabajar la autoestima y seguridad personal",
            "Manejar la ansiedad asociada",
            "Mejorar la comunicación con tu pareja",
            "Desarrollar confianza en ti mismo/a y en la relación",
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
              ¿Debo venir solo/a o con mi pareja?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Generalmente el trabajo de celos es individual, ya que implica
              cambios personales profundos. Pero en algunos momentos puede ser
              útil incluir a tu pareja. Evaluamos caso a caso.
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
              ¿Los celos se pueden superar completamente?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              El objetivo no es eliminar los celos por completo (son una emoción
              humana), sino que dejen de controlar tu vida y tu relación. Con
              trabajo, es posible tener una relación de confianza.
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
              ¿Cuánto tiempo toma ver resultados?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Algunos cambios pueden notarse en pocas semanas, pero un trabajo
              más profundo suele tomar varios meses. Depende de la intensidad de
              los celos y tu compromiso con el proceso.
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
              ¿Y si mis celos tienen fundamento?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Si hay razones reales de desconfianza, también lo trabajamos. La
              terapia te ayuda a distinguir entre celos infundados y situaciones
              que ameritan una conversación seria con tu pareja.
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
          Recupera tu tranquilidad
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            marginBottom: "1.5rem",
            fontSize: "0.9375rem",
          }}
        >
          Los celos no tienen que dominar tu vida ni tu relación.
        </p>
        <a
          href="https://wa.me/56968257817"
          target="_blank"
          rel="noopener noreferrer"
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
        </a>
      </section>

      <IntentClusterSection
        currentPath="/terapia-celos-chillan"
        extraLinks={[
          { label: "Autoestima", href: "/psicologo-baja-autoestima-chillan" },
          { label: "Psicólogo online", href: "/psicologo-online-chillan" },
        ]}
      />
    </main>
    </>
  );
}

