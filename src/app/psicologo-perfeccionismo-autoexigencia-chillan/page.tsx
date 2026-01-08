import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psicólogo Perfeccionismo y Autoexigencia en Chillán | Gonzalo Pedrosa",
  description:
    "Psicólogo especializado en perfeccionismo y autoexigencia en Chillán. Terapia para soltar el control excesivo y vivir con más flexibilidad.",
  alternates: {
    canonical: "/psicologo-perfeccionismo-autoexigencia-chillan",
  },
  openGraph: {
    title: "Psicólogo Perfeccionismo y Autoexigencia en Chillán | Gonzalo Pedrosa",
    description: "Psicólogo especializado en perfeccionismo y autoexigencia en Chillán. Terapia para soltar el control excesivo y vivir con más flexibilidad.",
    url: "https://gonzalopedrosa.cl/psicologo-perfeccionismo-autoexigencia-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicólogo Perfeccionismo y Autoexigencia en Chillán",
    description: "Psicólogo especializado en perfeccionismo y autoexigencia en Chillán. Terapia para soltar el control excesivo y vivir con más flexibilidad.",
  },
};


// FAQPage Schema para rich snippets en Google
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Voy a dejar de ser exigente?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No se trata de conformarte con menos, sino de exigirte de forma realista. Puedes mantener altos estándares sin que te destruyan."
      }
    },
    {
      "@type": "Question",
      "name": "¿El perfeccionismo tiene que ver con la ansiedad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, están muy relacionados. El perfeccionismo suele ser una estrategia para controlar la{\" \"} ansiedad. Trabajamos ambos en terapia."
      }
    },
    {
      "@type": "Question",
      "name": "¿Por qué me cuesta tanto cometer errores?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Generalmente hay un miedo profundo al rechazo o a no ser suficiente. Exploramos de dónde viene y trabajamos para cambiar esa relación con el error."
      }
    }
  ]
};

export default function PsicologoPerfeccionismoChillanPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main style={{ maxWidth: 640, margin: "0 auto", padding: "4rem 1.5rem", fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
        <Image src="/yo.png" alt="Gonzalo Pedrosa - Psicólogo" width={56} height={56} priority style={{ borderRadius: "9999px", objectFit: "cover" }} />
        <div>
          <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.125rem" }}>Chillán, Chile</p>
          <p style={{ fontWeight: 500, color: "#000" }}>Gonzalo Pedrosa</p>
        </div>
      </div>

      <h1 style={{ fontSize: "2.5rem", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "1rem", lineHeight: 1.1 }}>
        Psicólogo Perfeccionismo y Autoexigencia en Chillán
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "3rem", lineHeight: 1.6 }}>
        El perfeccionismo puede parecer una virtud, pero cuando es excesivo te
        paraliza, te agota y nunca te permite sentir satisfacción. La terapia te
        ayuda a encontrar un equilibrio más sano.
      </p>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Señales de perfeccionismo dañino
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Nunca sientes que algo está suficientemente bien",
            "Procrastinas por miedo a no hacerlo perfecto",
            "Te criticas duramente por errores pequeños",
            "Dificultad para delegar o confiar en otros",
            "Agotamiento por estándares imposibles",
            "Miedo al fracaso o al juicio de los demás",
            "Dificultad para celebrar logros",
            "Todo o nada: si no es perfecto, es un fracaso",
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
            "Identificar el origen de tu autoexigencia",
            "Cuestionar estándares irrealistas",
            "Desarrollar autocompasión",
            "Tolerar la imperfección y la incertidumbre",
            "Manejar el miedo al fracaso",
            "Encontrar satisfacción en el proceso, no solo en el resultado",
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
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Voy a dejar de ser exigente?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              No se trata de conformarte con menos, sino de exigirte de forma
              realista. Puedes mantener altos estándares sin que te destruyan.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿El perfeccionismo tiene que ver con la ansiedad?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Sí, están muy relacionados. El perfeccionismo suele ser una
              estrategia para controlar la{" "}
              <Link href="/psicologo-ansiedad-chillan" style={{ color: "#000", textDecoration: "underline" }}>ansiedad</Link>.
              Trabajamos ambos en terapia.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Por qué me cuesta tanto cometer errores?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Generalmente hay un miedo profundo al rechazo o a no ser
              suficiente. Exploramos de dónde viene y trabajamos para cambiar
              esa relación con el error.
            </p>
          </details>
        </div>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#000", borderRadius: "16px", marginBottom: "3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          Suficientemente bueno es suficiente
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          Aprende a soltar el control y vivir con más libertad.
        </p>
        <a href="https://wa.me/56968257817" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", backgroundColor: "#fff", color: "#000", borderRadius: "9999px", textDecoration: "none", fontWeight: 500, fontSize: "0.875rem" }}>
          Agendar sesión →
        </a>
      </section>

      <nav style={{ paddingTop: "2rem", borderTop: "1px solid #eaeaea" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.75rem" }}>Servicios relacionados</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            { label: "Síndrome del impostor", href: "/psicologo-sindrome-impostor-chillan" },
            { label: "Burnout", href: "/tratamiento-burnout-chillan" },
            { label: "Autoestima", href: "/psicologo-baja-autoestima-chillan" },
          ].map((item, i) => (
            <Link key={i} href={item.href} style={{ color: "#666", fontSize: "0.875rem", textDecoration: "none", padding: "0.375rem 0.75rem", border: "1px solid #eaeaea", borderRadius: "9999px" }}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </main>
    </>
  );
}




