import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psicólogo Isapre Chillán | Reembolso y Bonos - Gonzalo Pedrosa",
  description:
    "Psicólogo en Chillán con boleta para reembolso Isapre. Consulta cobertura con tu plan de salud. Atención presencial y online. Ansiedad, depresión, estrés.",
  alternates: {
    canonical: "/psicologo-isapre-chillan",
  },
};

export default function PsicologoIsapreChillanPage() {
  return (
    <main
      style={{
        maxWidth: 640,
        margin: "0 auto",
        padding: "4rem 1.5rem",
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
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
        Psicólogo Isapre en Chillán
      </h1>

      <p
        style={{
          fontSize: "1.125rem",
          color: "#666",
          marginBottom: "3rem",
          lineHeight: 1.6,
        }}
      >
        Si tienes Isapre y buscas psicólogo en Chillán, puedo ayudarte. Emito
        boleta de honorarios que te permite solicitar reembolso según la
        cobertura de tu plan.
      </p>

      <section
        style={{
          padding: "1.25rem",
          backgroundColor: "#f0fdf4",
          borderRadius: "12px",
          marginBottom: "2.5rem",
          border: "1px solid #bbf7d0",
        }}
      >
        <p
          style={{
            fontWeight: 600,
            color: "#166534",
            marginBottom: "0.5rem",
            fontSize: "0.9375rem",
          }}
        >
          ✓ Boleta para reembolso
        </p>
        <p style={{ color: "#15803d", fontSize: "0.875rem", lineHeight: 1.6 }}>
          Emito boleta de honorarios electrónica después de cada sesión. Con
          ella puedes solicitar reembolso en tu Isapre según tu plan.
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
          ¿Cómo funciona el reembolso?
        </h2>
        <ol style={{ listStyle: "none", padding: 0, counterReset: "step" }}>
          {[
            {
              title: "Consulta tu plan",
              desc: "Verifica con tu Isapre qué porcentaje reembolsan por psicólogo",
            },
            {
              title: "Agenda tu sesión",
              desc: "Coordina fecha y hora para tu atención",
            },
            {
              title: "Recibe tu boleta",
              desc: "Te envío la boleta electrónica después de cada sesión",
            },
            {
              title: "Solicita reembolso",
              desc: "Presenta la boleta en tu Isapre (app, web o sucursal)",
            },
          ].map((step, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                gap: "1rem",
                marginBottom: "1rem",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "1.75rem",
                  height: "1.75rem",
                  backgroundColor: "#000",
                  color: "#fff",
                  borderRadius: "9999px",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  flexShrink: 0,
                }}
              >
                {i + 1}
              </span>
              <div>
                <strong style={{ display: "block", marginBottom: "0.125rem" }}>
                  {step.title}
                </strong>
                <span style={{ color: "#666", fontSize: "0.9375rem" }}>
                  {step.desc}
                </span>
              </div>
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
          Motivos de consulta
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "0.5rem",
          }}
        >
          {[
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            { label: "Depresión", href: null },
            { label: "Crisis de pánico", href: "/psicologo-crisis-de-panico-chillan" },
            { label: "Estrés laboral", href: null },
            { label: "Problemas de pareja", href: null },
            { label: "Autoestima", href: null },
          ].map((item, i) =>
            item.href ? (
              <Link
                key={i}
                href={item.href}
                style={{
                  padding: "0.75rem 1rem",
                  backgroundColor: "#fafafa",
                  borderRadius: "8px",
                  fontSize: "0.875rem",
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                {item.label} →
              </Link>
            ) : (
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
                {item.label}
              </div>
            )
          )}
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
          <details
            style={{
              padding: "1rem",
              border: "1px solid #eaeaea",
              borderRadius: "12px",
            }}
          >
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>
              ¿Cuánto reembolsa la Isapre?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              El monto varía según tu plan y la Isapre. Generalmente cubren
              entre un 50% y 80% del valor, con un tope por sesión. Te
              recomiendo consultar directamente con tu Isapre para conocer tu
              cobertura exacta.
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
              ¿Tiene convenio directo con Isapres?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              No tengo convenio directo, pero emito boleta de honorarios que
              permite reembolso. Esto te da flexibilidad para elegir sin
              depender de convenios específicos.
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
              ¿La terapia online también se puede reembolsar?
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
              genera la misma boleta y puede reembolsarse igual que la
              presencial.
            </p>
          </details>
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
          Isapres compatibles
        </h2>
        <p
          style={{
            color: "#666",
            fontSize: "0.9375rem",
            lineHeight: 1.6,
            marginBottom: "1rem",
          }}
        >
          La boleta de honorarios es aceptada por todas las Isapres del país:
        </p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            "Colmena",
            "Cruz Blanca",
            "Banmédica",
            "Consalud",
            "Vida Tres",
            "Nueva Masvida",
          ].map((item, i) => (
            <span
              key={i}
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#fafafa",
                borderRadius: "9999px",
                fontSize: "0.875rem",
                color: "#444",
              }}
            >
              {item}
            </span>
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
          Agenda con reembolso Isapre
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            marginBottom: "1.5rem",
            fontSize: "0.9375rem",
          }}
        >
          Aprovecha la cobertura de tu plan de salud.
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
          Más servicios
        </p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Adultos", href: "/psicologo-adulto-chillan" },
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            { label: "TCC", href: "/psicologo-cognitivo-conductual-chillan" },
            { label: "Online", href: "/terapia-online" },
            { label: "Agendar", href: "/agendar" },
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
  );
}

