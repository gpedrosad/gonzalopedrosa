import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IntentClusterSection } from "@/app/components/IntentClusterSection";
import { ANXIETY_CLUSTER, getClusterBreadcrumb } from "@/lib/intent-clusters";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import { OrganicSeoScripts } from "@/app/components/OrganicSeoScripts";
import { getTwitterDescription } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Psicólogo para crisis de pánico en Chillán | Pedrosa",
  description:
    "Psicólogo especializado en crisis de pánico en Chillán, Chile. Tratamiento basado en evidencia para ataques de pánico. Atención presencial y online.",
  alternates: {
    canonical: "/psicologo-crisis-de-panico-chillan",
  },
  openGraph: {
    locale: "es_CL",
    title: "Psicólogo para crisis de pánico en Chillán | Pedrosa",
    description: "Psicólogo especializado en crisis de pánico en Chillán, Chile. Tratamiento basado en evidencia para ataques de pánico. Atención presencial y online.",
    url: "https://www.gonzalopedrosa.cl/psicologo-crisis-de-panico-chillan",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Retrato de Gonzalo Pedrosa, psicólogo clínico" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicólogo Crisis de Pánico en Chillán, Chile",
    description: getTwitterDescription("Psicólogo especializado en crisis de pánico en Chillán, Chile. Tratamiento basado en evidencia para ataques de pánico. Atención presencial y online."),
  },
};



const psicologo_crisis_de_panico_chillanFAQs = [
  {
    question: "¿Las crisis de pánico son peligrosas?",
    answer:
      "Aunque los síntomas son muy intensos, las crisis no son peligrosas en sí mismas. Es importante descartar causas médicas con un profesional de salud.",
  },
  {
    question: "¿Puedo tener terapia online?",
    answer:
      "Sí. Si salir de casa está difícil, la videollamada puede ser el primer formato. Cómo es esa hora está en la página de terapia online.",
  },
  {
    question: "¿Cuánto tiempo toma el tratamiento?",
    answer:
      "No hay un plazo único. Depende del caso y no se promete un número de sesiones.",
  },
  {
    question: "¿La agorafobia es lo mismo que una crisis de pánico?",
    answer:
      "No. La crisis es el episodio: un pico de miedo que sube y baja. La agorafobia es evitar lugares porque temes que la crisis aparezca y no puedas salir o pedir ayuda, como la micro, una tienda, una fila o estar fuera de casa. Pueden ir juntas.",
  },
];

const breadcrumbItems = getClusterBreadcrumb(ANXIETY_CLUSTER, "/psicologo-crisis-de-panico-chillan");

export default function PsicologoCrisisPanicoChillanPage() {
  return (
    <>
      <OrganicSeoScripts
        breadcrumbItems={breadcrumbItems}
        faqs={psicologo_crisis_de_panico_chillanFAQs}
        serviceType="Psicología Crisis De Panico"
        serviceDescription={"Psicólogo especializado en crisis de pánico en Chillán, Chile. Tratamiento basado en evidencia para ataques de pánico. Atención presencial y online."}
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
          <p style={{ fontWeight: 600, marginBottom: "0.125rem" }}>
            Gonzalo Pedrosa
          </p>
          <p style={{ fontSize: "0.875rem", color: "#666" }}>Psicólogo</p>
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
        Chillán, Chile
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
        Psicólogo Crisis de Pánico en Chillán
      </h1>

      <p
        style={{
          fontSize: "1.125rem",
          color: "#666",
          marginBottom: "3rem",
          lineHeight: 1.6,
        }}
      >
        Las crisis de pánico son episodios intensos de miedo que aparecen de
        forma súbita. Aunque no son peligrosas, generan mucha angustia. El
        tratamiento psicológico puede ayudarte a comprenderlas y manejarlas.
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
          Síntomas típicos
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "0.5rem",
          }}
        >
          {[
            "Palpitaciones",
            "Sudoración",
            "Temblores",
            "Falta de aire",
            "Dolor en el pecho",
            "Náuseas",
            "Mareo",
            "Miedo a perder el control",
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
          Tratamiento
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
          El tratamiento con{" "}
          <Link
            href="/psicologo-cognitivo-conductual-chillan"
            style={{ color: "#000", textDecoration: "underline" }}
          >
            enfoque cognitivo-conductual
          </Link>{" "}
          ha demostrado ser efectivo para el trastorno de pánico.
        </p>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            display: "grid",
            gap: "0.5rem",
          }}
        >
          {[
            "Psicoeducación: entender qué ocurre en tu cuerpo",
            "Técnicas de respiración y regulación",
            "Modificación de pensamientos catastróficos",
            "Exposición gradual a sensaciones temidas",
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
          Relación con la ansiedad
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7 }}>
          Las crisis de pánico suelen estar vinculadas a cuadros de{" "}
          <Link
            href="/psicologo-ansiedad-chillan"
            style={{ color: "#000", textDecoration: "underline" }}
          >
            ansiedad
          </Link>
          . Es común desarrollar miedo a nuevas crisis, lo que puede limitar tus
          actividades. Un abordaje integral considera ambos aspectos.
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
          Si además evitas salir
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
          La agorafobia no es la crisis. Es el miedo a lugares donde escapar o
          pedir ayuda se ve difícil si aparece una: la micro, una plaza, una
          tienda, una fila o estar fuera de casa. Si salir está muy difícil, la
          videollamada puede ser el primer formato. Qué es el episodio está en{" "}
          <Link href="/preguntas/que-es-un-ataque-de-panico" style={{ color: "#000", textDecoration: "underline" }}>
            qué es un ataque de pánico
          </Link>{" "}
          y qué hacer en el minuto, en{" "}
          <Link href="/guias/ataque-de-panico-que-hacer" style={{ color: "#000", textDecoration: "underline" }}>
            ataque de pánico: qué hacer
          </Link>
          .
        </p>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Transporte público: buses, metro, aviones",
            "Espacios abiertos: plazas o estacionamientos",
            "Espacios cerrados: tiendas o cines",
            "Multitudes o filas",
            "Estar fuera de casa sin compañía",
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
            <summary
              style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}
            >
              ¿Las crisis de pánico son peligrosas?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Aunque los síntomas son muy intensos, las crisis no son peligrosas
              en sí mismas. Es importante descartar causas médicas con un
              profesional de salud.
            </p>
          </details>

          <details
            style={{
              padding: "1rem",
              border: "1px solid #eaeaea",
              borderRadius: "12px",
            }}
          >
            <summary
              style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}
            >
              ¿Puedo tener terapia online?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Sí. Si salir de casa está difícil, la{" "}
              <Link
                href="/psicologo-online-chillan"
                style={{ color: "#000", textDecoration: "underline" }}
              >
                videollamada
              </Link>{" "}
              puede ser el primer formato. Cómo es esa hora está en{" "}
              <Link
                href="/terapia-online"
                style={{ color: "#000", textDecoration: "underline" }}
              >
                terapia online
              </Link>
              . No es un chat ni una urgencia.
            </p>
          </details>

          <details
            style={{
              padding: "1rem",
              border: "1px solid #eaeaea",
              borderRadius: "12px",
            }}
          >
            <summary
              style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}
            >
              ¿Cuánto tiempo toma el tratamiento?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              No hay un plazo único. Depende del caso y no se promete un número
              de sesiones.
            </p>
          </details>

          <details
            style={{
              padding: "1rem",
              border: "1px solid #eaeaea",
              borderRadius: "12px",
            }}
          >
            <summary
              style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}
            >
              ¿La agorafobia es lo mismo que una crisis de pánico?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              No. La crisis es el episodio: un pico de miedo que sube y baja. La
              agorafobia es evitar lugares porque temes que la crisis aparezca y
              no puedas salir o pedir ayuda, como la micro, una tienda, una fila
              o estar fuera de casa. Pueden ir juntas.
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
          Las crisis de pánico pueden tratarse. Conversemos sobre cómo puedo
          ayudarte.
        </p>
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
          Agendar sesión <span aria-hidden="true">→</span>
        </Link>
      </section>

      <IntentClusterSection
        currentPath="/psicologo-crisis-de-panico-chillan"
        extraLinks={[
          { label: "Adultos", href: "/psicologo-adulto-chillan" },
          { label: "Terapia cognitivo-conductual", href: "/psicologo-cognitivo-conductual-chillan" },
          { label: "Psicólogo online", href: "/psicologo-online-chillan" },
        ]}
      />
    </main>
    </>
  );
}
