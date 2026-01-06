import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psicólogo Procrastinación y Estudios en Chillán | Gonzalo Pedrosa",
  description:
    "Psicólogo para superar la procrastinación en Chillán. Terapia para dejar de postergar, mejorar hábitos de estudio y vencer la pereza crónica.",
  alternates: {
    canonical: "/psicologo-procrastinacion-estudios-chillan",
  },
};

export default function PsicologoProcrastinacionChillanPage() {
  return (
    <main style={{ maxWidth: 640, margin: "0 auto", padding: "4rem 1.5rem", fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
        <Image src="/yo.png" alt="Gonzalo Pedrosa - Psicólogo" width={64} height={64} priority style={{ borderRadius: "9999px", objectFit: "cover" }} />
        <div>
          <p style={{ fontWeight: 600, marginBottom: "0.125rem" }}>Gonzalo Pedrosa</p>
          <p style={{ fontSize: "0.875rem", color: "#666" }}>Psicólogo Clínico · +7 años de experiencia</p>
        </div>
      </div>

      <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.75rem" }}>Chillán, Chile</p>

      <h1 style={{ fontSize: "2.5rem", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "1rem", lineHeight: 1.1 }}>
        Psicólogo Procrastinación en Chillán
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "3rem", lineHeight: 1.6 }}>
        La procrastinación no es flojera. Es un problema de regulación emocional
        que tiene solución. La terapia te ayuda a entender por qué postergas y
        a desarrollar nuevos hábitos.
      </p>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          ¿Te identificas?
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Dejas todo para último momento",
            "Sabes lo que debes hacer pero no lo haces",
            "Sientes culpa por no avanzar",
            "Te distraes con cualquier cosa",
            "Solo puedes trabajar bajo presión extrema",
            "Prometes cambiar pero vuelves a lo mismo",
            "Tu rendimiento no refleja tu capacidad real",
          ].map((item, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "0.75rem 1rem", backgroundColor: "#fafafa", borderRadius: "8px", fontSize: "0.9375rem", color: "#444" }}>
              <span style={{ color: "#000", flexShrink: 0 }}>—</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section style={{ padding: "1.25rem", backgroundColor: "#f0f9ff", borderRadius: "12px", marginBottom: "2.5rem", border: "1px solid #bae6fd" }}>
        <p style={{ fontWeight: 600, color: "#0369a1", marginBottom: "0.5rem", fontSize: "0.9375rem" }}>💡 La procrastinación no es falta de voluntad</p>
        <p style={{ color: "#0c4a6e", fontSize: "0.875rem", lineHeight: 1.6 }}>
          Investigaciones muestran que procrastinamos para evitar emociones
          incómodas (ansiedad, aburrimiento, miedo al fracaso). El problema no
          es la tarea, es cómo te sientes respecto a ella.
        </p>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Qué trabajamos
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Identificar qué emociones evitas al procrastinar",
            "Técnicas de regulación emocional",
            "Manejar el perfeccionismo paralizante",
            "Crear sistemas y rutinas que funcionen para ti",
            "Dividir tareas en pasos manejables",
            "Cambiar tu relación con la incomodidad",
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
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Por qué no puedo simplemente &quot;hacerlo&quot;?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Porque la procrastinación es un hábito automático que protege de
              emociones incómodas. Cambiarlo requiere trabajar a nivel más
              profundo que solo &quot;fuerza de voluntad&quot;.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Puede ser TDAH?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Es posible. La procrastinación crónica puede ser síntoma de{" "}
              <Link href="/psicologo-tdah-adulto-chillan" style={{ color: "#000", textDecoration: "underline" }}>TDAH</Link>.
              En terapia exploramos si hay algo más que explique el patrón.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Cuánto tiempo toma ver cambios?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Con trabajo consistente, muchas personas notan cambios en 4-8
              semanas. Cambiar hábitos arraigados toma tiempo, pero es posible.
            </p>
          </details>
        </div>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#000", borderRadius: "16px", marginBottom: "3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          Deja de postergar tu bienestar
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          Agenda ahora. Literalmente.
        </p>
        <a href="https://wa.me/56968257817" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", backgroundColor: "#fff", color: "#000", borderRadius: "9999px", textDecoration: "none", fontWeight: 500, fontSize: "0.875rem" }}>
          Agendar sesión →
        </a>
      </section>

      <nav style={{ paddingTop: "2rem", borderTop: "1px solid #eaeaea" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.75rem" }}>Servicios relacionados</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "TDAH adulto", href: "/psicologo-tdah-adulto-chillan" },
            { label: "Estrés académico", href: "/psicologo-estres-academico-chillan" },
            { label: "Perfeccionismo", href: "/psicologo-perfeccionismo-autoexigencia-chillan" },
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
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

