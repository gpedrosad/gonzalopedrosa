import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hora Psicólogo Chillán Hoy | Disponibilidad Inmediata",
  description:
    "¿Necesitas hora con psicólogo en Chillán hoy? Consulta disponibilidad inmediata. Atención presencial y online. Respuesta rápida por WhatsApp.",
  alternates: {
    canonical: "/hora-psicologo-chillan-hoy",
  },
};

export default function HoraPsicologoChillanHoyPage() {
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
          display: "inline-block",
          padding: "0.375rem 0.75rem",
          backgroundColor: "#000",
          color: "#fff",
          borderRadius: "9999px",
          fontSize: "0.75rem",
          fontWeight: 600,
          marginBottom: "1.5rem",
        }}
      >
        Disponibilidad hoy
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
        Hora Psicólogo en Chillán Hoy
      </h1>

      <p
        style={{
          fontSize: "1.125rem",
          color: "#666",
          marginBottom: "2rem",
          lineHeight: 1.6,
        }}
      >
        Si estás pasando por un momento difícil y necesitas hablar con un
        profesional pronto, puedo ayudarte. Consulta mi disponibilidad para hoy
        o los próximos días.
      </p>

      <section
        style={{
          padding: "1.5rem",
          backgroundColor: "#000",
          borderRadius: "16px",
          marginBottom: "2.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "1.25rem",
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
              border: "2px solid rgba(255,255,255,0.2)",
            }}
          />
          <div>
            <p style={{ fontWeight: 600, color: "#fff" }}>Gonzalo Pedrosa</p>
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.7)" }}>
              Psicólogo · Chillán
            </p>
          </div>
        </div>

        <a
          href="https://wa.me/56968257817?text=Hola%2C%20necesito%20una%20hora%20para%20hoy%20o%20lo%20antes%20posible"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            width: "100%",
            padding: "0.875rem 1.5rem",
            backgroundColor: "#fff",
            color: "#000",
            borderRadius: "9999px",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "0.9375rem",
          }}
        >
          Consultar disponibilidad hoy →
        </a>
        <p
          style={{
            textAlign: "center",
            fontSize: "0.8125rem",
            color: "rgba(255,255,255,0.5)",
            marginTop: "0.75rem",
          }}
        >
          Respuesta en minutos por WhatsApp
        </p>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
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
          ¿Qué puedo ofrecerte?
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Consulta mi disponibilidad para hoy mismo",
            "Sesión presencial en Chillán u online",
            "Primera sesión de orientación",
            "Espacio seguro y confidencial",
          ].map((item, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.75rem 1rem",
                backgroundColor: "#fafafa",
                borderRadius: "8px",
                fontSize: "0.9375rem",
                color: "#444",
              }}
            >
              <span style={{ color: "#000" }}>✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
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
          Motivos frecuentes de consulta urgente
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "0.5rem",
          }}
        >
          {[
            { label: "Ansiedad intensa", href: "/psicologo-ansiedad-chillan" },
            { label: "Crisis de pánico", href: "/psicologo-crisis-de-panico-chillan" },
            { label: "Momento de crisis", href: null },
            { label: "Angustia aguda", href: null },
            { label: "Duelo reciente", href: null },
            { label: "Estrés extremo", href: null },
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

      <section
        style={{
          padding: "1.25rem",
          backgroundColor: "#fef3c7",
          borderRadius: "12px",
          marginBottom: "2.5rem",
          border: "1px solid #fcd34d",
        }}
      >
        <p
          style={{
            fontWeight: 600,
            color: "#92400e",
            marginBottom: "0.5rem",
            fontSize: "0.9375rem",
          }}
        >
          ⚠️ Importante
        </p>
        <p style={{ color: "#78350f", fontSize: "0.875rem", lineHeight: 1.6 }}>
          Si estás en una crisis severa con pensamientos de hacerte daño,
          contacta a{" "}
          <strong>Salud Responde (600 360 7777)</strong> o acude a la urgencia
          más cercana. Están disponibles 24/7.
        </p>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
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
              ¿Tienen hora disponible para hoy?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              La disponibilidad varía cada día. Escríbeme por WhatsApp y te
              confirmo en minutos si tengo espacio hoy o cuál es el horario más
              próximo disponible.
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
              ¿Puedo tener sesión online ahora?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              La{" "}
              <Link
                href="/terapia-online"
                style={{ color: "#000", textDecoration: "underline" }}
              >
                terapia online
              </Link>{" "}
              permite mayor flexibilidad horaria. Consulta disponibilidad y
              podemos coordinar una sesión en el día si hay espacio.
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
              ¿Qué hago mientras espero la sesión?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Si sientes ansiedad intensa, intenta respirar lento y profundo.
              Busca un lugar tranquilo. Habla con alguien de confianza. Recuerda
              que lo que sientes es temporal y hay ayuda disponible.
            </p>
          </details>
        </div>
      </section>

      <section
        style={{
          textAlign: "center",
          padding: "2rem",
          backgroundColor: "#fafafa",
          borderRadius: "16px",
          marginBottom: "2.5rem",
        }}
      >
        <p
          style={{
            fontWeight: 600,
            marginBottom: "1rem",
            fontSize: "1.125rem",
          }}
        >
          ¿Necesitas hablar con alguien?
        </p>
        <a
          href="https://wa.me/56968257817?text=Hola%2C%20necesito%20una%20hora%20para%20hoy%20o%20lo%20antes%20posible"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.875rem 1.75rem",
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: "9999px",
            textDecoration: "none",
            fontWeight: 500,
            fontSize: "0.9375rem",
          }}
        >
          Escribir por WhatsApp →
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
          Más información
        </p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Agendar", href: "/agendar" },
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            { label: "Crisis de pánico", href: "/psicologo-crisis-de-panico-chillan" },
            { label: "Adultos", href: "/psicologo-adulto-chillan" },
            { label: "Online", href: "/terapia-online" },
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

