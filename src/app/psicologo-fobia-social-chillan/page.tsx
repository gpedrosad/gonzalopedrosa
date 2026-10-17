import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IntentClusterSection } from "@/app/components/IntentClusterSection";
import { ANXIETY_CLUSTER, getClusterBreadcrumb } from "@/lib/intent-clusters";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import { OrganicSeoScripts } from "@/app/components/OrganicSeoScripts";
import { getTwitterDescription } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Psicólogo Fobia Social en Chillán, Chile | Gonzalo Pedrosa",
  description:
    "Psicólogo especializado en fobia social y ansiedad social en Chillán, Chile. Tratamiento con terapia cognitivo-conductual. Sesiones presenciales y online.",
  alternates: {
    canonical: "/psicologo-fobia-social-chillan",
  },
  openGraph: {
    locale: "es_CL",
    title: "Psicólogo Fobia Social en Chillán, Chile | Gonzalo Pedrosa",
    description: "Psicólogo especializado en fobia social y ansiedad social en Chillán, Chile. Tratamiento con terapia cognitivo-conductual. Sesiones presenciales y online.",
    url: "https://www.gonzalopedrosa.cl/psicologo-fobia-social-chillan",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Retrato de Gonzalo Pedrosa, psicólogo clínico" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicólogo Fobia Social en Chillán, Chile",
    description: getTwitterDescription("Psicólogo especializado en fobia social y ansiedad social en Chillán, Chile. Tratamiento con terapia cognitivo-conductual. Sesiones presenciales y onl"),
  },
};



const psicologo_fobia_social_chillanFAQs = [
  {
    question: "¿Es lo mismo que ser tímido?",
    answer:
      "No exactamente. La timidez es un rasgo de personalidad, mientras que la fobia social es un trastorno de ansiedad que causa malestar significativo e interfiere con la vida cotidiana.",
  },
  {
    question: "¿La fobia social se cura?",
    answer:
      "Con tratamiento adecuado, muchas personas logran superar la fobia social o reducir significativamente sus síntomas. La TCC tiene alta efectividad para este problema.",
  },
  {
    question: "¿Me sirve la terapia online si tengo fobia social?",
    answer:
      "Sí, la terapia online puede ser especialmente útil al inicio, ya que es menos intimidante. A medida que avanza el tratamiento, podemos incorporar sesiones presenciales si es apropiado.",
  },
];

const breadcrumbItems = getClusterBreadcrumb(ANXIETY_CLUSTER, "/psicologo-fobia-social-chillan");

export default function PsicologoFobiaSocialChillanPage() {
  return (
    <>
      <OrganicSeoScripts
        breadcrumbItems={breadcrumbItems}
        faqs={psicologo_fobia_social_chillanFAQs}
        serviceType="Psicología Fobia Social"
        serviceDescription={"Psicólogo especializado en fobia social y ansiedad social en Chillán, Chile. Tratamiento con terapia cognitivo-conductual. Sesiones presenciales y online."}
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
        Psicólogo Fobia Social en Chillán
      </h1>

      <p
        style={{
          fontSize: "1.125rem",
          color: "#666",
          marginBottom: "3rem",
          lineHeight: 1.6,
        }}
      >
        La fobia social o ansiedad social es un miedo intenso a situaciones
        sociales donde podrías ser juzgado o evaluado. Es más que timidez: puede
        limitar seriamente tu vida. Con tratamiento adecuado, es posible
        superarla.
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
          Situaciones que generan ansiedad
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "0.5rem",
          }}
        >
          {[
            "Hablar en público",
            "Conocer gente nueva",
            "Comer frente a otros",
            "Ser el centro de atención",
            "Hacer llamadas telefónicas",
            "Asistir a reuniones sociales",
            "Expresar opiniones",
            "Pedir ayuda",
          ].map((item, i) => (
            <div
              key={i}
              style={{
                padding: "0.75rem 1rem",
                backgroundColor: "#fafafa",
                borderRadius: "8px",
                fontSize: "0.875rem",
                color: "#444",
              }}
            >
              {item}
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
          Síntomas
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Miedo intenso a ser juzgado o humillado",
            "Evitación de situaciones sociales",
            "Ansiedad anticipatoria días antes del evento",
            "Síntomas físicos: rubor, sudoración, temblor, taquicardia",
            "Mente en blanco al hablar",
            "Autocrítica después de interacciones sociales",
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
          es el tratamiento de elección para la fobia social. El proceso incluye:
        </p>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Identificar pensamientos distorsionados sobre situaciones sociales",
            "Reestructuración cognitiva",
            "Entrenamiento en habilidades sociales",
            "Exposición gradual a situaciones temidas",
            "Técnicas de manejo de la ansiedad",
            "Reducción de conductas de seguridad",
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
              ¿Es lo mismo que ser tímido?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              No exactamente. La timidez es un rasgo de personalidad, mientras
              que la fobia social es un trastorno de ansiedad que causa malestar
              significativo e interfiere con la vida cotidiana.
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
              ¿La fobia social se cura?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Con tratamiento adecuado, muchas personas logran superar la fobia
              social o reducir significativamente sus síntomas. La TCC tiene
              alta efectividad para este problema.
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
              ¿Me sirve la terapia online si tengo fobia social?
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
                href="/terapia-online"
                style={{ color: "#000", textDecoration: "underline" }}
              >
                terapia online
              </Link>{" "}
              puede ser especialmente útil al inicio, ya que es menos
              intimidante. A medida que avanza el tratamiento, podemos
              incorporar sesiones presenciales si es apropiado.
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
          Conecta sin miedo
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            marginBottom: "1.5rem",
            fontSize: "0.9375rem",
          }}
        >
          La fobia social tiene tratamiento efectivo. Da el primer paso.
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
        currentPath="/psicologo-fobia-social-chillan"
        extraLinks={[
          { label: "Autoestima", href: "/psicologo-baja-autoestima-chillan" },
          { label: "TCC", href: "/psicologo-cognitivo-conductual-chillan" },
          { label: "Psicólogo online", href: "/psicologo-online-chillan" },
        ]}
      />
    </main>
    </>
  );
}

