import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psicólogo Matrimonial en Chillán, Chile | Gonzalo Pedrosa",
  description:
    "Psicólogo matrimonial en Chillán. Terapia para matrimonios en crisis, problemas de comunicación y fortalecimiento del vínculo. Sesiones presenciales y online.",
  alternates: {
    canonical: "/psicologo-matrimonial-chillan",
  },
};

export default function PsicologoMatrimonialChillanPage() {
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
        Psicólogo Matrimonial en Chillán
      </h1>

      <p
        style={{
          fontSize: "1.125rem",
          color: "#666",
          marginBottom: "3rem",
          lineHeight: 1.6,
        }}
      >
        El matrimonio atraviesa etapas y desafíos. La terapia matrimonial ayuda
        a las parejas a reencontrarse, resolver conflictos acumulados y
        construir una relación más sólida y satisfactoria.
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
          Situaciones comunes en matrimonios
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Desgaste tras años de convivencia",
            "Comunicación que se ha vuelto conflictiva",
            "Diferencias en la crianza de los hijos",
            "Problemas económicos que generan tensión",
            "Infidelidad o pérdida de confianza",
            "Falta de intimidad física y emocional",
            "Proyectos de vida que ya no coinciden",
            "Crisis después de eventos importantes (jubilación, nido vacío)",
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
          ¿Qué trabajamos en terapia?
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Mejorar la comunicación y la escucha activa",
            "Identificar ciclos negativos de interacción",
            "Reconectar emocionalmente",
            "Negociar diferencias de forma constructiva",
            "Sanar heridas del pasado",
            "Fortalecer el compromiso mutuo",
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
          La terapia matrimonial no siempre significa "salvar" el matrimonio.
          También puede ayudar a tomar la decisión de separarse de forma sana y
          respetuosa si es lo mejor para ambos.
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
              ¿Cuántos años de matrimonio atienden?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Atiendo matrimonios en cualquier etapa: recién casados, con varios
              años, o con décadas de convivencia. Los desafíos varían, pero el
              proceso terapéutico se adapta a cada situación.
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
              ¿Qué diferencia hay con terapia de pareja?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              En esencia es similar. La{" "}
              <Link
                href="/terapia-de-pareja-chillan"
                style={{ color: "#000", textDecoration: "underline" }}
              >
                terapia de pareja
              </Link>{" "}
              incluye a novios y convivientes, mientras que la matrimonial se
              enfoca específicamente en parejas casadas y sus dinámicas
              particulares.
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
              ¿Pueden venir los hijos a algunas sesiones?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Generalmente la terapia matrimonial es solo para los cónyuges. Si
              hay temas que involucran directamente a los hijos, evaluamos la
              mejor forma de abordarlos.
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
              ¿Funciona si uno de los dos no está convencido?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Puede funcionar si ambos están dispuestos a intentarlo, aunque uno
              tenga más dudas que el otro. Lo importante es la apertura a
              participar del proceso.
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
          Inviertan en su matrimonio
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            marginBottom: "1.5rem",
            fontSize: "0.9375rem",
          }}
        >
          Agenda una primera sesión y comiencen a trabajar juntos.
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
            { label: "Terapia de pareja", href: "/terapia-de-pareja-chillan" },
            { label: "Celos", href: "/terapia-celos-chillan" },
            { label: "Online", href: "/terapia-online" },
            { label: "Precios", href: "/consulta-psicologica-precio-chillan" },
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

