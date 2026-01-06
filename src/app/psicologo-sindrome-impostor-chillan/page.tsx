import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psicólogo Síndrome del Impostor en Chillán | Gonzalo Pedrosa",
  description:
    "Psicólogo especializado en síndrome del impostor en Chillán. Supera la sensación de no merecer tus logros y reconoce tu verdadero valor.",
  alternates: {
    canonical: "/psicologo-sindrome-impostor-chillan",
  },
};

export default function PsicologoSindromeImpostorChillanPage() {
  return (
    <main style={{ maxWidth: 640, margin: "0 auto", padding: "4rem 1.5rem", fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
        <Image src="/yo.png" alt="Gonzalo Pedrosa - Psicólogo" width={56} height={56} priority style={{ borderRadius: "9999px", objectFit: "cover" }} />
        <div>
          <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.125rem" }}>Chillán, Chile</p>
          <p style={{ fontWeight: 500, color: "#000" }}>Gonzalo Pedrosa</p>
        </div>
      </div>

      <h1 style={{ fontSize: "2.5rem", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "1rem", lineHeight: 1.1 }}>
        Psicólogo Síndrome del Impostor en Chillán
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "3rem", lineHeight: 1.6 }}>
        El síndrome del impostor te hace sentir que tus logros son suerte y
        que pronto descubrirán que eres un fraude. La terapia te ayuda a
        reconocer tu verdadero valor.
      </p>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Señales del síndrome del impostor
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Atribuir tus éxitos a la suerte o al azar",
            "Miedo constante a ser \"descubierto\"",
            "Minimizar tus logros o calificaciones",
            "Compararte desfavorablemente con otros",
            "Sentir que no mereces tu puesto o reconocimiento",
            "Prepararte excesivamente para evitar errores",
            "Dificultad para aceptar elogios",
            "Pensar que engañaste a quienes te contrataron o admitieron",
          ].map((item, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "0.75rem 1rem", backgroundColor: "#fafafa", borderRadius: "8px", fontSize: "0.9375rem", color: "#444" }}>
              <span style={{ color: "#000", flexShrink: 0 }}>—</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Lo que trabajamos
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Identificar y cuestionar pensamientos de impostor",
            "Reconocer tus logros objetivamente",
            "Desarrollar una autoevaluación más realista",
            "Trabajar el perfeccionismo subyacente",
            "Manejar la ansiedad en contextos de evaluación",
            "Construir confianza en tus capacidades",
          ].map((item, i) => (
            <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#444", fontSize: "0.9375rem" }}>
              <span style={{ color: "#000" }}>✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Preguntas frecuentes
        </h2>
        <div style={{ display: "grid", gap: "0.5rem" }}>
          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Es muy común el síndrome del impostor?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Sí, estudios sugieren que hasta el 70% de las personas lo
              experimentan en algún momento. Es especialmente común en personas
              exitosas y en transiciones profesionales.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Tiene relación con la autoestima?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Sí, están conectados. El síndrome del impostor suele coexistir con{" "}
              <Link href="/psicologo-baja-autoestima-chillan" style={{ color: "#000", textDecoration: "underline" }}>
                baja autoestima
              </Link>{" "}
              y{" "}
              <Link href="/psicologo-perfeccionismo-autoexigencia-chillan" style={{ color: "#000", textDecoration: "underline" }}>
                perfeccionismo
              </Link>
              . Trabajamos todo en conjunto.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Cuánto tiempo toma superarlo?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Varía según cada persona. Algunos notan cambios significativos en
              pocas sesiones, otros necesitan un trabajo más profundo. Lo
              importante es que es tratable.
            </p>
          </details>
        </div>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#000", borderRadius: "16px", marginBottom: "3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          Tus logros son reales
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          No es suerte. Es tu esfuerzo y capacidad.
        </p>
        <a href="https://wa.me/56968257817" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", backgroundColor: "#fff", color: "#000", borderRadius: "9999px", textDecoration: "none", fontWeight: 500, fontSize: "0.875rem" }}>
          Agendar sesión →
        </a>
      </section>

      <nav style={{ paddingTop: "2rem", borderTop: "1px solid #eaeaea" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.75rem" }}>Servicios relacionados</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Perfeccionismo", href: "/psicologo-perfeccionismo-autoexigencia-chillan" },
            { label: "Autoestima", href: "/psicologo-baja-autoestima-chillan" },
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            { label: "Estrés laboral", href: "/psicologo-estres-laboral-chillan" },
          ].map((item, i) => (
            <Link key={i} href={item.href} style={{ color: "#666", fontSize: "0.875rem", textDecoration: "none", padding: "0.375rem 0.75rem", border: "1px solid #eaeaea", borderRadius: "9999px" }}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </main>
  );
}

