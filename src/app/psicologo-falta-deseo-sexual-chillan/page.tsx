import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psicólogo Falta de Deseo Sexual en Chillán | Gonzalo Pedrosa",
  description:
    "Psicólogo para problemas de deseo sexual en Chillán. Terapia confidencial para abordar la disminución del deseo y mejorar tu vida íntima.",
  alternates: {
    canonical: "/psicologo-falta-deseo-sexual-chillan",
  },
};

export default function PsicologoFaltaDeseoSexualChillanPage() {
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
        Psicólogo Falta de Deseo Sexual en Chillán
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "3rem", lineHeight: 1.6 }}>
        La falta de deseo sexual es más común de lo que crees y tiene múltiples
        causas. Muchas son psicológicas y pueden trabajarse en terapia de forma
        confidencial.
      </p>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Posibles causas psicológicas
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Estrés, ansiedad o depresión",
            "Problemas de pareja o comunicación",
            "Experiencias traumáticas pasadas",
            "Baja autoestima o imagen corporal negativa",
            "Creencias restrictivas sobre la sexualidad",
            "Rutina y monotonía en la relación",
            "Cansancio crónico o burnout",
            "Efectos secundarios de medicamentos",
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
          Cómo trabajamos
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Explorar las causas en un espacio seguro",
            "Trabajar factores emocionales subyacentes",
            "Mejorar la comunicación de pareja (si aplica)",
            "Abordar creencias limitantes sobre sexualidad",
            "Manejar ansiedad relacionada con el desempeño",
            "Reconstruir una sexualidad satisfactoria",
          ].map((item, i) => (
            <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#444", fontSize: "0.9375rem" }}>
              <span style={{ color: "#000" }}>✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section style={{ padding: "1.25rem", backgroundColor: "#f0f9ff", borderRadius: "12px", marginBottom: "2.5rem", border: "1px solid #bae6fd" }}>
        <p style={{ fontWeight: 600, color: "#0369a1", marginBottom: "0.5rem", fontSize: "0.9375rem" }}>💡 Confidencialidad total</p>
        <p style={{ color: "#0c4a6e", fontSize: "0.875rem", lineHeight: 1.6 }}>
          Este es un tema íntimo y delicado. Todo lo conversado está protegido
          por secreto profesional. Puedes hablar con total confianza.
        </p>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Preguntas frecuentes
        </h2>
        <div style={{ display: "grid", gap: "0.5rem" }}>
          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Debería descartar causas médicas primero?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Es recomendable. Factores hormonales o medicamentos pueden influir.
              Si ya lo descartaste o quieres explorar lo psicológico, podemos
              comenzar.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Tiene que venir mi pareja?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              No necesariamente. Puedes trabajarlo de forma individual. Si más
              adelante tiene sentido incluir a tu pareja, lo evaluamos. También
              ofrezco{" "}
              <Link href="/terapia-de-pareja-chillan" style={{ color: "#000", textDecoration: "underline" }}>
                terapia de pareja
              </Link>.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Es normal que esto pase?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Sí, es muy común en distintas etapas de la vida. No significa que
              algo esté mal contigo. Con trabajo adecuado, muchas personas
              recuperan una vida sexual satisfactoria.
            </p>
          </details>
        </div>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#000", borderRadius: "16px", marginBottom: "3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          Recupera tu bienestar íntimo
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          Conversemos en un espacio seguro y sin juicios.
        </p>
        <a href="https://wa.me/56968257817" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", backgroundColor: "#fff", color: "#000", borderRadius: "9999px", textDecoration: "none", fontWeight: 500, fontSize: "0.875rem" }}>
          Agendar sesión →
        </a>
      </section>

      <nav style={{ paddingTop: "2rem", borderTop: "1px solid #eaeaea" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.75rem" }}>Servicios relacionados</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Terapia de pareja", href: "/terapia-de-pareja-chillan" },
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            { label: "Depresión", href: "/psicologo-depresion-chillan" },
            { label: "Autoestima", href: "/psicologo-baja-autoestima-chillan" },
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

