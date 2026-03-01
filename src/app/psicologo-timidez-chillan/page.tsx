import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Psicólogo Timidez en Chillán | Gonzalo Pedrosa",
  description:
    "Psicólogo para superar la timidez en Chillán. Terapia para ganar confianza social, expresarte mejor y conectar con otros sin ansiedad.",
  alternates: {
    canonical: "/psicologo-timidez-chillan",
  },
  openGraph: {
    title: "Psicólogo Timidez en Chillán | Gonzalo Pedrosa",
    description: "Psicólogo para superar la timidez en Chillán. Terapia para ganar confianza social, expresarte mejor y conectar con otros sin ansiedad.",
    url: "https://www.gonzalopedrosa.cl/psicologo-timidez-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicólogo Timidez en Chillán",
    description: "Psicólogo para superar la timidez en Chillán. Terapia para ganar confianza social, expresarte mejor y conectar con otros sin ansiedad.",
  },
};


// FAQPage Schema para rich snippets en Google
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Se puede dejar de ser tímido/a?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No se trata de cambiar tu personalidad, sino de que la timidez no te limite. Puedes seguir siendo introvertido/a pero desenvolverte con más soltura."
      }
    },
    {
      "@type": "Question",
      "name": "¿Me va a obligar a hacer cosas incómodas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trabajamos gradualmente y respetando tu ritmo. La exposición es necesaria pero siempre de forma progresiva y con tu acuerdo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Funciona la terapia online para timidez?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, e incluso puede ser más cómoda al principio. La{\" \"} terapia online{\" \"} es igual de efectiva y luego puedes pasar a presencial si quieres."
      }
    }
  ]
};

export default function PsicologoTimidezChillanPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
        Psicólogo Timidez en Chillán
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "3rem", lineHeight: 1.6 }}>
        La timidez puede limitarte socialmente, laboralmente y emocionalmente.
        La terapia te ayuda a ganar confianza para conectar con otros sin que
        la ansiedad te paralice.
      </p>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          ¿Cómo te afecta la timidez?
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Evitas situaciones sociales o las sufres intensamente",
            "Te cuesta hablar con desconocidos o en grupos",
            "Miedo excesivo a ser juzgado/a o hacer el ridículo",
            "Dificultad para expresar opiniones o pedir cosas",
            "Te callas aunque tengas algo que decir",
            "Pocos amigos o relaciones superficiales",
            "Limitaciones laborales (no postulas, no hablas en reuniones)",
            "Rumiación después de interacciones sociales",
          ].map((item, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "0.75rem 1rem", backgroundColor: "#fafafa", borderRadius: "8px", fontSize: "0.9375rem", color: "#444" }}>
              <span style={{ color: "#000", flexShrink: 0 }}>—</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section style={{ padding: "1.25rem", backgroundColor: "#f0f9ff", borderRadius: "12px", marginBottom: "2.5rem", border: "1px solid #bae6fd" }}>
        <p style={{ fontWeight: 600, color: "#0369a1", marginBottom: "0.5rem", fontSize: "0.9375rem" }}>💡 Timidez vs Fobia Social</p>
        <p style={{ color: "#0c4a6e", fontSize: "0.875rem", lineHeight: 1.6 }}>
          La timidez es un rasgo que puede trabajarse. Si tu miedo es tan intenso
          que evitas muchas situaciones, podría ser{" "}
          <Link href="/psicologo-fobia-social-chillan" style={{ color: "#0369a1", textDecoration: "underline" }}>fobia social</Link>,
          que también tiene tratamiento efectivo.
        </p>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Qué trabajamos
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Entender el origen de tu timidez",
            "Cuestionar pensamientos autocríticos",
            "Desarrollar habilidades sociales",
            "Exposición gradual a situaciones temidas",
            "Manejar la ansiedad en el momento",
            "Construir confianza en ti mismo/a",
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
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Se puede dejar de ser tímido/a?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              No se trata de cambiar tu personalidad, sino de que la timidez no
              te limite. Puedes seguir siendo introvertido/a pero desenvolverte
              con más soltura.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Me va a obligar a hacer cosas incómodas?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Trabajamos gradualmente y respetando tu ritmo. La exposición es
              necesaria pero siempre de forma progresiva y con tu acuerdo.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Funciona la terapia online para timidez?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Sí, e incluso puede ser más cómoda al principio. La{" "}
              <Link href="/terapia-online" style={{ color: "#000", textDecoration: "underline" }}>terapia online</Link>{" "}
              es igual de efectiva y luego puedes pasar a presencial si quieres.
            </p>
          </details>
        </div>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#000", borderRadius: "16px", marginBottom: "3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          Tu voz merece ser escuchada
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          Tienes mucho que aportar. Aprende a mostrarlo.
        </p>
        <a href="https://wa.me/56968257817" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", backgroundColor: "#fff", color: "#000", borderRadius: "9999px", textDecoration: "none", fontWeight: 500, fontSize: "0.875rem" }}>
          Agendar sesión →
        </a>
      </section>

      <nav style={{ paddingTop: "2rem", borderTop: "1px solid #eaeaea" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.75rem" }}>Servicios relacionados</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Fobia social", href: "/psicologo-fobia-social-chillan" },
            { label: "Autoestima", href: "/psicologo-baja-autoestima-chillan" },
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            { label: "Online", href: "/terapia-online" },
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




