import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import { OrganicSeoScripts } from "@/app/components/OrganicSeoScripts";
import { getTwitterDescription } from "@/lib/schemas";
import { RelatedReading } from "@/app/components/RelatedReading";

export const metadata: Metadata = {
  title: "Estrés laboral y burnout en Chillán: en qué se diferencian",
  description:
    "El estrés laboral es la carga del día. El burnout es el agotamiento que el descanso ya no repone, con distancia y menos eficacia. El acoso es otro motivo.",
  alternates: {
    canonical: "/psicologo-estres-laboral-chillan",
  },
  openGraph: {
    locale: "es_CL",
    title: "Estrés laboral y burnout en Chillán: en qué se diferencian",
    description:
      "El estrés laboral es la carga del día. El burnout es el agotamiento que el descanso ya no repone, con distancia y menos eficacia. El acoso es otro motivo.",
    url: "https://www.gonzalopedrosa.cl/psicologo-estres-laboral-chillan",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Retrato de Gonzalo Pedrosa, psicólogo clínico" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Estrés laboral y burnout en Chillán: en qué se diferencian",
    description: getTwitterDescription("El estrés laboral es la carga del día. El burnout es el agotamiento que el descanso ya no repone, con distancia y menos eficacia. El acoso es otro motivo."),
  },
};



const psicologo_estres_laboral_chillanFAQs = [
  {
    question: "¿El burnout es lo mismo que el estrés laboral?",
    answer:
      "No. Un período de presión puede aflojar con descanso. En el burnout vuelves igual de vacío: agotamiento, distancia mental y la idea de que haces más y rindes menos. No es una debilidad. A veces alcanzan límites. A veces el puesto no deja margen. No hay un plazo único ni una renuncia decidida por esta página.",
  },
  {
    question: "¿El acoso laboral entra en esta página?",
    answer:
      "No. El acoso es sistemático, se sostiene en el tiempo y busca dañar. Una carga alta o un mal clima no son lo mismo. Esa diferencia está en la página de acoso laboral.",
  },
  {
    question: "¿La hora puede ser fuera de la oficina?",
    answer:
      "La hora presencial es de lunes a viernes, mañana o tarde. La videollamada está descrita en la página de terapia online.",
  },
];

const breadcrumbItems = [
  { label: "Inicio", href: "/" },
  { label: "Psicólogo Estres Laboral Chillán" },
];

export default function PsicologoEstresLaboralChillanPage() {
  return (
    <>
      <OrganicSeoScripts
        breadcrumbItems={breadcrumbItems}
        faqs={psicologo_estres_laboral_chillanFAQs}
        serviceType="Psicología Estres Laboral"
        serviceDescription={"El estrés laboral es la carga del día. El burnout es el agotamiento que el descanso ya no repone, con distancia y menos eficacia. El acoso es otro motivo."}
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
        Estrés laboral y burnout en Chillán
      </h1>

      <p
        style={{
          fontSize: "1.125rem",
          color: "#666",
          marginBottom: "1rem",
          lineHeight: 1.6,
        }}
      >
        La presión de una semana cargada no es lo mismo que el burnout. En el
        estrés laboral pesa la exigencia del día. En el burnout el descanso ya
        no repone: hay agotamiento, distancia o cinismo hacia la pega, y la
        sensación de rendir menos.
      </p>

      <p
        style={{
          fontSize: "0.9375rem",
          color: "#666",
          marginBottom: "3rem",
          lineHeight: 1.6,
        }}
      >
        La Organización Mundial de la Salud describe el burnout como un
        fenómeno del trabajo, no como una enfermedad. El detalle está en la guía{" "}
        <Link href="/guias/burnout-laboral" style={{ color: "#000", textDecoration: "underline" }}>
          qué es el burnout laboral
        </Link>{" "}
        y en la pregunta{" "}
        <Link href="/preguntas/como-saber-si-es-burnout" style={{ color: "#000", textDecoration: "underline" }}>
          cómo saber si es burnout
        </Link>
        . Si el daño es sistemático y dirigido a ti, eso es{" "}
        <Link href="/psicologo-acoso-laboral-chillan" style={{ color: "#000", textDecoration: "underline" }}>
          acoso laboral
        </Link>
        , no carga de trabajo.
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
          Señales de estrés laboral
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "0.5rem",
          }}
        >
          {[
            "Agotamiento constante",
            "Irritabilidad",
            "Dificultad para desconectar",
            "Insomnio",
            "Dolores de cabeza",
            "Falta de motivación",
            "Problemas de concentración",
            "Cinismo hacia el trabajo",
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
          ¿Qué es el burnout?
        </h2>
        <div
          style={{
            padding: "1.25rem",
            backgroundColor: "#fafafa",
            borderRadius: "12px",
          }}
        >
          <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
            El síndrome de burnout, o &quot;estar quemado&quot;, es agotamiento
            físico, emocional y mental por estrés laboral crónico. Un límite
            chico (no responder después de cierta hora, o soltar una de tres
            prioridades) está descrito en{" "}
            <Link href="/preguntas/como-poner-un-limite" style={{ color: "#000", textDecoration: "underline" }}>
              cómo poner un límite
            </Link>
            . Se caracteriza por:
          </p>
          <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
            {[
              "Agotamiento extremo que no mejora con descanso",
              "Distanciamiento mental del trabajo (cinismo)",
              "Reducción de la eficacia profesional",
              "El sueño, el humor o el cuerpo no se recuperan en el fin de semana",
              "Te aislas de la gente con la que trabajas",
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
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    backgroundColor: "#000",
                    borderRadius: "9999px",
                    flexShrink: 0,
                  }}
                />
                {item}
              </li>
            ))}
          </ul>
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
          Cómo puedo ayudarte
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Identificar fuentes de estrés y patrones disfuncionales",
            "Desarrollar estrategias de afrontamiento efectivas",
            "Establecer límites saludables en el trabajo",
            "Técnicas de manejo del tiempo y priorización",
            "Recuperar el equilibrio vida-trabajo",
            "Trabajar la ansiedad asociada",
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
              ¿El burnout es lo mismo que el estrés laboral?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              No. Un período de presión puede aflojar con descanso. En el
              burnout vuelves igual de vacío: agotamiento, distancia mental y la
              idea de que haces más y rindes menos. No es una debilidad. A veces
              alcanzan límites. A veces el puesto no deja margen. No hay un
              plazo único ni una renuncia decidida por esta página.
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
              ¿El acoso laboral entra en esta página?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              No. El acoso es sistemático, se sostiene en el tiempo y busca
              dañar. Una carga alta o un mal clima no son lo mismo. Esa
              diferencia está en la página de acoso laboral.
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
              ¿La hora puede ser fuera de la oficina?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              La hora presencial es de lunes a viernes, mañana o tarde. Cómo es
              la videollamada está en{" "}
              <Link
                href="/terapia-online"
                style={{ color: "#000", textDecoration: "underline" }}
              >
                terapia online
              </Link>{" "}
              y en{" "}
              <Link
                href="/preguntas/como-es-una-sesion-de-psicologia-online"
                style={{ color: "#000", textDecoration: "underline" }}
              >
                cómo es una sesión de psicología online
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
          Recupera tu bienestar
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            marginBottom: "1.5rem",
            fontSize: "0.9375rem",
          }}
        >
          El trabajo no debería costarte la salud.
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
            { label: "Depresión", href: "/psicologo-depresion-chillan" },
            { label: "Acoso laboral", href: "/psicologo-acoso-laboral-chillan" },
            { label: "Psicólogo adultos", href: "/psicologo-adulto-chillan" },
            { label: "Adultos", href: "/psicologo-adulto-chillan" },
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
    <RelatedReading currentPath="/psicologo-estres-laboral-chillan" />
    </main>
    </>
  );
}

