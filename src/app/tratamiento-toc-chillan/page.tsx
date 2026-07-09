import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import { OrganicSeoScripts } from "@/app/components/OrganicSeoScripts";
import { SITE_URL, getTwitterDescription } from "@/lib/schemas";

const description =
  "Terapia ERP (EPR) para TOC en Chillán: exposición con prevención de respuesta, obsesiones y compulsiones. Presencial u online. Agenda evaluación.";

export const metadata: Metadata = {
  title: "Terapia ERP TOC Chillán | Exposición y prevención de respuesta",
  description,
  alternates: {
    canonical: "/tratamiento-toc-chillan",
  },
  openGraph: {
    title: "Terapia ERP TOC Chillán | Exposición y prevención de respuesta",
    description,
    url: `${SITE_URL}/tratamiento-toc-chillan`,
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terapia ERP TOC Chillán | EPR y TCC",
    description: getTwitterDescription(
      "Terapia ERP (EPR) para TOC en Chillán. Exposición con prevención de respuesta, online o presencial."
    ),
  },
};



const tratamiento_toc_chillanFAQs = [
  {
    question: "¿Qué es la terapia ERP para TOC?",
    answer:
      "ERP (Exposure and Response Prevention), también llamada EPR en español, es el tratamiento de primera línea para el TOC: te expones de forma gradual a lo que dispara la obsesión y aprendes a no hacer la compulsión, hasta que la ansiedad baja sola.",
  },
  {
    question: "¿El TOC tiene cura?",
    answer:
      "El TOC es una condición crónica, pero con tratamiento adecuado muchas personas logran reducir significativamente sus síntomas y llevar una vida normal. La terapia ERP/EPR tiene tasas de éxito entre 60-80%.",
  },
  {
    question: "¿Necesito medicación?",
    answer:
      "No siempre. La terapia ERP puede ser muy efectiva por sí sola. En casos moderados a severos, la combinación con medicación (antidepresivos ISRS) puede ser más efectiva. Si es necesario, te derivo a psiquiatra.",
  },
  {
    question: "¿Cuánto dura el tratamiento?",
    answer:
      "Típicamente entre 12-20 sesiones para casos de severidad leve a moderada. Casos más severos pueden requerir tratamiento más extenso. Se pueden notar mejorías desde las primeras semanas.",
  },
];

const breadcrumbItems = [
  { label: "Inicio", href: "/" },
  { label: "Tratamiento TOC Chillán" },
];

export default function TratamientoTocChillanPage() {
  return (
    <>
      <OrganicSeoScripts
        breadcrumbItems={breadcrumbItems}
        faqs={tratamiento_toc_chillanFAQs}
        serviceType="Tratamiento TOC"
        serviceDescription={description}
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
        Tratamiento TOC en Chillán
      </h1>

      <p
        style={{
          fontSize: "1.125rem",
          color: "#666",
          marginBottom: "3rem",
          lineHeight: 1.6,
        }}
      >
        Si buscas terapia ERP para TOC en Chillán, trabajo con Terapia
        Cognitivo-Conductual y Exposición con Prevención de Respuesta (ERP/EPR)
        para reducir obsesiones, compulsiones y el tiempo que el TOC consume
        en tu día.
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
          Terapia ERP para TOC
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
          La <strong>terapia ERP</strong> (Exposure and Response Prevention),
          conocida en español como <strong>EPR</strong>, es el tratamiento con
          más evidencia para el trastorno obsesivo-compulsivo. No se trata de
          “dejar de pensar”: se trata de enfrentar el disparador y{" "}
          <em>no</em> hacer el ritual, hasta que el cerebro aprende que la
          amenaza baja sin compulsión.
        </p>
        <div style={{ display: "grid", gap: "0.75rem" }}>
          {[
            {
              title: "Exposición (Exposure)",
              desc: "Te acercas de forma gradual y planificada a pensamientos, imágenes o situaciones que activan la obsesión.",
            },
            {
              title: "Prevención de respuesta",
              desc: "Practicas no hacer la compulsión (lavar, chequear, pedir seguridad, rituales mentales) mientras la ansiedad sube y luego baja.",
            },
            {
              title: "Jerarquía a tu ritmo",
              desc: "Empezamos por ítems manejables y subimos. En Chillán u online, con tareas entre sesiones para consolidar avances.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                padding: "1.25rem",
                backgroundColor: "#fafafa",
                borderRadius: "12px",
              }}
            >
              <h3 style={{ fontWeight: 600, marginBottom: "0.5rem" }}>{item.title}</h3>
              <p style={{ color: "#666", fontSize: "0.9375rem", lineHeight: 1.6, margin: 0 }}>
                {item.desc}
              </p>
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
          ¿Qué es el TOC?
        </h2>
        <div style={{ display: "grid", gap: "1rem" }}>
          <div
            style={{
              padding: "1.25rem",
              backgroundColor: "#fafafa",
              borderRadius: "12px",
            }}
          >
            <h3 style={{ fontWeight: 600, marginBottom: "0.5rem" }}>Obsesiones</h3>
            <p style={{ color: "#666", fontSize: "0.9375rem", lineHeight: 1.6 }}>
              Pensamientos, imágenes o impulsos recurrentes no deseados que
              causan ansiedad o malestar significativo.
            </p>
          </div>
          <div
            style={{
              padding: "1.25rem",
              backgroundColor: "#fafafa",
              borderRadius: "12px",
            }}
          >
            <h3 style={{ fontWeight: 600, marginBottom: "0.5rem" }}>Compulsiones</h3>
            <p style={{ color: "#666", fontSize: "0.9375rem", lineHeight: 1.6 }}>
              Comportamientos o actos mentales repetitivos que la persona se
              siente impulsada a realizar para reducir la ansiedad.
            </p>
          </div>
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
          Tipos comunes de TOC
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "0.5rem",
          }}
        >
          {[
            "Contaminación",
            "Verificación",
            "Orden y simetría",
            "Pensamientos prohibidos",
            "Acumulación",
            "Escrupulosidad",
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
          Cómo se aplica la ERP / EPR
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
          El tratamiento de elección para el TOC es la{" "}
          <strong>terapia ERP</strong> (Exposición con Prevención de Respuesta /
          EPR), una forma especializada de{" "}
          <Link
            href="/psicologo-cognitivo-conductual-chillan"
            style={{ color: "#000", textDecoration: "underline" }}
          >
            terapia cognitivo-conductual
          </Link>
          . El proceso incluye:
        </p>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Psicoeducación sobre el TOC y su funcionamiento",
            "Construcción de jerarquía de exposiciones",
            "Exposición gradual a situaciones que provocan obsesiones",
            "Prevención de rituales o compulsiones",
            "Reestructuración cognitiva",
            "Prevención de recaídas",
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
              ¿Qué es la terapia ERP para TOC?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              ERP (Exposure and Response Prevention), también llamada EPR en
              español, es el tratamiento de primera línea para el TOC: te
              expones de forma gradual a lo que dispara la obsesión y aprendes
              a no hacer la compulsión, hasta que la ansiedad baja sola.
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
              ¿El TOC tiene cura?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              El TOC es una condición crónica, pero con tratamiento adecuado
              muchas personas logran reducir significativamente sus síntomas y
              llevar una vida normal. La terapia ERP/EPR tiene tasas de éxito
              entre 60-80%.
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
              ¿Necesito medicación?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              No siempre. La terapia ERP puede ser muy efectiva por sí sola. En
              casos moderados a severos, la combinación con medicación
              (antidepresivos ISRS) puede ser más efectiva. Si es necesario, te
              derivo a psiquiatra.
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
              ¿Cuánto dura el tratamiento?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Típicamente entre 12-20 sesiones para casos de severidad leve a
              moderada. Casos más severos pueden requerir tratamiento más
              extenso. Se pueden notar mejorías desde las primeras semanas.
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
          Rompe el ciclo del TOC
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            marginBottom: "1.5rem",
            fontSize: "0.9375rem",
          }}
        >
          El tratamiento especializado puede ayudarte a recuperar tu vida.
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
          {[
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            { label: "Crisis de pánico", href: "/psicologo-crisis-de-panico-chillan" },
            { label: "TCC", href: "/psicologo-cognitivo-conductual-chillan" },
            { label: "EMDR", href: "/terapia-emdr-chillan" },
            { label: "Psicólogo online", href: "/psicologo-online-chillan" },
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
