import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import { OrganicSeoScripts } from "@/app/components/OrganicSeoScripts";
import { RelatedReading } from "@/app/components/RelatedReading";
import { getTwitterDescription } from "@/lib/schemas";

const description =
  "Autoestima baja, perfeccionismo y síndrome del impostor en Chillán: crítica dura, miedo a equivocarte y logros que se sienten prestados. No es un test ni un plazo.";

export const metadata: Metadata = {
  title: "Baja autoestima en Chillán: señales, exigencia e impostor",
  description,
  alternates: {
    canonical: "/psicologo-baja-autoestima-chillan",
  },
  openGraph: {
    locale: "es_CL",
    title: "Baja autoestima en Chillán: señales, exigencia e impostor",
    description,
    url: "https://www.gonzalopedrosa.cl/psicologo-baja-autoestima-chillan",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Retrato de Gonzalo Pedrosa, psicólogo clínico" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baja autoestima en Chillán: señales, exigencia e impostor",
    description: getTwitterDescription(description),
  },
};



const psicologo_baja_autoestima_chillanFAQs = [
  {
    question: "¿El perfeccionismo es lo mismo que la autoestima baja?",
    answer:
      "No. Pueden ir juntos. El perfeccionismo es la exigencia que no te deja cerrar una tarea. La autoestima baja es leerte, una y otra vez, como menos capaz. No hay un número de sesiones que sirva para todos.",
  },
  {
    question: "¿El síndrome del impostor es una enfermedad?",
    answer:
      "No. Es la lectura de que un logro fue suerte y de que van a descubrir un fraude. Aparece en la pega, en la carrera y en un cambio de rol. No es un diagnóstico ni un porcentaje de la población.",
  },
  {
    question: "¿De dónde puede venir la autoestima baja?",
    answer:
      "De mensajes repetidos, de compararte o de una historia de crítica. Una lista no lo diagnostica. La pregunta de señales describe el patrón sin convertirlo en un test.",
  },
];

const breadcrumbItems = [
  { label: "Inicio", href: "/" },
  { label: "Psicólogo Baja Autoestima Chillán" },
];

export default function PsicologoBajaAutoestimaChillanPage() {
  return (
    <>
      <OrganicSeoScripts
        breadcrumbItems={breadcrumbItems}
        faqs={psicologo_baja_autoestima_chillanFAQs}
        serviceType="Psicología Baja Autoestima"
        serviceDescription={"Autoestima baja, perfeccionismo y síndrome del impostor en Chillán. No es un test ni un plazo de sesiones."}
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
        Baja autoestima en Chillán: señales, exigencia e impostor
      </h1>

      <p
        style={{
          fontSize: "1.125rem",
          color: "#666",
          marginBottom: "3rem",
          lineHeight: 1.6,
        }}
      >
        La autoestima baja es un modo repetido de leerte como menos capaz. El
        perfeccionismo y el síndrome del impostor se le parecen y no son lo
        mismo. Las señales, sin convertirlas en un test, están en{" "}
        <Link href="/preguntas/senales-de-baja-autoestima" style={{ color: "#000", textDecoration: "underline" }}>
          señales de baja autoestima
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
          Señales de baja autoestima
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Autocrítica excesiva y constante",
            "Dificultad para aceptar cumplidos",
            "Miedo al rechazo o al fracaso",
            "Compararse negativamente con los demás",
            "Dificultad para poner límites",
            "Dependencia de la aprobación de otros",
            "Evitar desafíos por miedo a no ser capaz",
            "Sensación de no ser suficiente",
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
          Cómo afecta la baja autoestima
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "0.5rem",
          }}
        >
          {[
            "Relaciones",
            "Trabajo",
            "Toma de decisiones",
            "Salud mental",
            "Rendimiento",
            "Bienestar general",
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
          En la{" "}
          <Link
            href="/psicologo-cognitivo-conductual-chillan"
            style={{ color: "#000", textDecoration: "underline" }}
          >
            terapia cognitivo-conductual
          </Link>{" "}
          trabajamos en:
        </p>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Identificar creencias negativas sobre ti mismo",
            "Cuestionar el crítico interno",
            "Desarrollar una autoimagen más realista y compasiva",
            "Aprender a establecer límites saludables",
            "Reconocer tus fortalezas y logros",
            "Practicar la autocompasión",
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
          Perfeccionismo y autoexigencia
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7, margin: 0 }}>
          El perfeccionismo dañino no es tener un estándar. Es no poder cerrar
          una tarea porque nunca está bastante bien, y leer un error como
          prueba de que no sirves. Puedes cuidar la calidad sin que el miedo al
          rechazo dirija el día. Cuando la postergación viene de ese miedo, la
          pregunta de{" "}
          <Link href="/preguntas/procrastinacion-y-ansiedad" style={{ color: "#000", textDecoration: "underline" }}>
            procrastinación y ansiedad
          </Link>{" "}
          lo separa.
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
          Síndrome del impostor
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7, margin: 0 }}>
          Es la idea de que un logro fue suerte y de que van a descubrir un
          fraude. Aparece en la pega, en la carrera y en un cambio de rol. No es
          un diagnóstico ni una cifra de cuánta gente lo vive. Puede ir junto a
          la autoestima baja: aquí el logro existe y la lectura lo borra. Poner
          un límite, cuando la exigencia no te deja, está en{" "}
          <Link href="/preguntas/como-poner-un-limite" style={{ color: "#000", textDecoration: "underline" }}>
            cómo poner un límite
          </Link>
          .
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
              ¿El perfeccionismo es lo mismo que la autoestima baja?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              No. Pueden ir juntos. El perfeccionismo es la exigencia que no te
              deja cerrar una tarea. La autoestima baja es leerte, una y otra
              vez, como menos capaz. No hay un número de sesiones que sirva para
              todos.
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
              ¿El síndrome del impostor es una enfermedad?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              No. Es la lectura de que un logro fue suerte y de que van a
              descubrir un fraude. Aparece en la pega, en la carrera y en un
              cambio de rol. No es un diagnóstico ni un porcentaje de la
              población.
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
              ¿De dónde puede venir la autoestima baja?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              De mensajes repetidos, de compararte o de una historia de crítica.
              Una lista no lo diagnostica. La pregunta de señales describe el
              patrón sin convertirlo en un test.
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
          Mereces sentirte bien contigo mismo
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            marginBottom: "1.5rem",
            fontSize: "0.9375rem",
          }}
        >
          Da el primer paso hacia una mejor relación contigo.
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
            { label: "Depresión", href: "/psicologo-depresion-chillan" },
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            { label: "Fobia social", href: "/psicologo-fobia-social-chillan" },
            { label: "TCC", href: "/psicologo-cognitivo-conductual-chillan" },
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
      <RelatedReading currentPath="/psicologo-baja-autoestima-chillan" />
    </main>
    </>
  );
}

