import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/Button";

export const metadata: Metadata = {
  title: "Psicólogo Cognitivo Conductual en Chillán, Chile | Gonzalo Pedrosa",
  description:
    "Psicólogo con enfoque cognitivo-conductual (TCC) en Chillán, Chile. Terapia basada en evidencia para ansiedad, depresión y más. Sesiones presenciales y online.",
  alternates: {
    canonical: "/psicologo-cognitivo-conductual-chillan",
  },
};

export default function PsicologoCognitivoConductualChillanPage() {
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
          marginBottom: "2rem",
        }}
      >
        <Image
          src="/yo.png"
          alt="Gonzalo Pedrosa - Psicólogo"
          width={64}
          height={64}
          priority
          style={{
            borderRadius: "9999px",
            objectFit: "cover",
          }}
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
        Psicólogo Cognitivo Conductual en Chillán
      </h1>

      <p
        style={{
          fontSize: "1.125rem",
          color: "#666",
          marginBottom: "3rem",
          lineHeight: 1.6,
        }}
      >
        La TCC es uno de los enfoques con mayor respaldo científico. Se centra
        en la relación entre pensamientos, emociones y conductas, trabajando de
        manera práctica y orientada a objetivos.
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
          ¿Qué es la TCC?
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
          La terapia cognitivo-conductual parte de la idea de que nuestros
          pensamientos influyen en cómo nos sentimos y actuamos. A través de
          técnicas específicas, aprendemos a identificar patrones poco útiles y
          desarrollar formas más adaptativas de afrontar las situaciones.
        </p>
        <p style={{ color: "#444", lineHeight: 1.7 }}>
          Es un enfoque activo y colaborativo: terapeuta y paciente trabajan
          juntos estableciendo metas claras, con ejercicios entre sesiones para
          consolidar los aprendizajes.
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
          Efectiva para
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
            {
              label: "Trastorno de pánico",
              href: "/psicologo-crisis-de-panico-chillan",
            },
            { label: "Depresión", href: null },
            { label: "TOC", href: null },
            { label: "Estrés postraumático", href: null },
            { label: "Problemas de sueño", href: null },
            { label: "Adicciones", href: "/psicologo-adicciones-chillan" },
            { label: "Baja autoestima", href: null },
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
          Características
        </h2>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            display: "grid",
            gap: "0.75rem",
          }}
        >
          {[
            {
              title: "Basado en evidencia",
              desc: "Técnicas validadas en investigación científica",
            },
            {
              title: "Orientado a objetivos",
              desc: "Metas concretas y medibles",
            },
            {
              title: "Limitado en el tiempo",
              desc: "Generalmente de duración definida",
            },
            {
              title: "Práctico",
              desc: "Herramientas aplicables en la vida cotidiana",
            },
            {
              title: "Colaborativo",
              desc: "El paciente es parte activa del cambio",
            },
          ].map((item, i) => (
            <li
              key={i}
              style={{
                padding: "1rem",
                backgroundColor: "#fafafa",
                borderRadius: "12px",
              }}
            >
              <strong
                style={{ display: "block", marginBottom: "0.25rem", color: "#000" }}
              >
                {item.title}
              </strong>
              <span style={{ color: "#666", fontSize: "0.9375rem" }}>
                {item.desc}
              </span>
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
              ¿En qué se diferencia de otros enfoques?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              La TCC se caracteriza por su enfoque en el presente y en
              soluciones prácticas. Cuando es relevante, también se trabajan
              experiencias pasadas que influyen en patrones actuales.
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
              ¿Cuántas sesiones se necesitan?
            </summary>
            <p
              style={{
                marginTop: "0.75rem",
                color: "#666",
                lineHeight: 1.6,
                fontSize: "0.9375rem",
              }}
            >
              Depende del motivo de consulta. Para problemas focalizados pueden
              bastar pocas sesiones. Para cuadros más complejos, el proceso
              puede extenderse.
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
              ¿La TCC funciona en formato online?
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
              con enfoque cognitivo-conductual ha mostrado efectividad
              comparable a la presencial.
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
          Inicia tu proceso con TCC
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            marginBottom: "1.5rem",
            fontSize: "0.9375rem",
          }}
        >
          Si buscas un enfoque práctico y basado en evidencia.
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

      <nav
        style={{
          paddingTop: "2rem",
          borderTop: "1px solid #eaeaea",
        }}
      >
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
          <Link
            href="/psicologo-ansiedad-chillan"
            style={{
              color: "#666",
              fontSize: "0.875rem",
              textDecoration: "none",
              padding: "0.375rem 0.75rem",
              border: "1px solid #eaeaea",
              borderRadius: "9999px",
            }}
          >
            Ansiedad
          </Link>
          <Link
            href="/psicologo-crisis-de-panico-chillan"
            style={{
              color: "#666",
              fontSize: "0.875rem",
              textDecoration: "none",
              padding: "0.375rem 0.75rem",
              border: "1px solid #eaeaea",
              borderRadius: "9999px",
            }}
          >
            Crisis de pánico
          </Link>
          <Link
            href="/psicologo-adulto-chillan"
            style={{
              color: "#666",
              fontSize: "0.875rem",
              textDecoration: "none",
              padding: "0.375rem 0.75rem",
              border: "1px solid #eaeaea",
              borderRadius: "9999px",
            }}
          >
            Adultos
          </Link>
          <Link
            href="/psicologo-adicciones-chillan"
            style={{
              color: "#666",
              fontSize: "0.875rem",
              textDecoration: "none",
              padding: "0.375rem 0.75rem",
              border: "1px solid #eaeaea",
              borderRadius: "9999px",
            }}
          >
            Adicciones
          </Link>
          <Link
            href="/terapia-online"
            style={{
              color: "#666",
              fontSize: "0.875rem",
              textDecoration: "none",
              padding: "0.375rem 0.75rem",
              border: "1px solid #eaeaea",
              borderRadius: "9999px",
            }}
          >
            Online
          </Link>
        </div>
      </nav>
    </main>
  );
}
