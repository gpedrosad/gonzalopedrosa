import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import { OrganicSeoScripts } from "@/app/components/OrganicSeoScripts";
import { getTwitterDescription } from "@/lib/schemas";
import { RelatedReading } from "@/app/components/RelatedReading";

const description =
  "Psicólogo especialista en obesidad en Chillán: alimentación emocional y hábitos. La evaluación para manga o bypass, con el informe, está en esta misma página.";

export const metadata: Metadata = {
  title: "Psicólogo especialista en obesidad | Chillán",
  description,
  alternates: {
    canonical: "/psicologo-obesidad-chillan",
  },
  openGraph: {
    locale: "es_CL",
    title: "Psicólogo especialista en obesidad | Chillán",
    description,
    url: "https://www.gonzalopedrosa.cl/psicologo-obesidad-chillan",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Retrato de Gonzalo Pedrosa, psicólogo clínico" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicólogo Obesidad Chillán",
    description: getTwitterDescription(description),
  },
};



const psicologo_obesidad_chillanFAQs = [
  {
    question: "¿Por qué no puedo mantener las dietas?",
    answer:
      "Probablemente porque no has trabajado los aspectos emocionales. Si comes por razones emocionales, necesitas otras herramientas además de una dieta.",
  },
  {
    question: "¿Trabajas junto con nutricionistas?",
    answer:
      "Sí, cuando es necesario me coordino con nutricionistas para un abordaje integral. La combinación es más efectiva.",
  },
  {
    question: "¿La terapia me hará bajar de peso?",
    answer:
      "Esta página no informa un resultado de peso. Mira los factores psicológicos de la alimentación. La guía de emoción y comida tampoco es una dieta.",
  },
  {
    question: "¿Esta página incluye la evaluación psicológica para una cirugía bariátrica?",
    answer:
      "Sí. La evaluación para manga gástrica o bypass, con el informe para el equipo quirúrgico, está en esta misma página. Suele tomar una o dos sesiones y el informe se entrega dentro de la semana siguiente. El resto mira la alimentación emocional, que es otro motivo.",
  },
  {
    question: "¿Me pueden rechazar en la evaluación bariátrica?",
    answer:
      "La evaluación mira si estás preparado o preparada en este momento. Si hay algo que conviene trabajar antes, se puede retomar más adelante.",
  },
  {
    question: "¿El informe lo acepta cualquier clínica?",
    answer:
      "El informe cumple estándares profesionales. Si el equipo pide un formato específico, se adapta a ese requerimiento.",
  },
];

const breadcrumbItems = [
  { label: "Inicio", href: "/" },
  { label: "Psicólogo Obesidad Chillán" },
];

export default function PsicologoObesidadChillanPage() {
  return (
    <>
      <OrganicSeoScripts
        breadcrumbItems={breadcrumbItems}
        faqs={psicologo_obesidad_chillanFAQs}
        serviceType="Psicología Obesidad"
        serviceDescription={description}
      />
      <main style={{ maxWidth: 640, margin: "0 auto", padding: "4rem 1.5rem", fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
      <Breadcrumb items={breadcrumbItems} />
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
        <Image src="/yo.png" alt="Retrato de Gonzalo Pedrosa, psicólogo clínico" width={64} height={64} sizes="64px" style={{ borderRadius: "9999px", objectFit: "cover" }} loading="lazy" />
        <div>
          <p style={{ fontWeight: 600, marginBottom: "0.125rem" }}>Gonzalo Pedrosa</p>
          <p style={{ fontSize: "0.875rem", color: "#666" }}>Psicólogo Clínico · +7 años de experiencia</p>
        </div>
      </div>

      <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.75rem" }}>Chillán, Chile</p>

      <h1 style={{ fontSize: "2.5rem", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "1rem", lineHeight: 1.1 }}>
        Psicólogo especialista en obesidad en Chillán
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "3rem", lineHeight: 1.6 }}>
        La obesidad tiene componentes psicológicos. Si comes para calmar
        ansiedad, tristeza o aburrimiento, la guía{" "}
        <Link href="/guias/emocion-y-comida" style={{ color: "#000", textDecoration: "underline" }}>
          cuando comes para calmar una emoción
        </Link>{" "}
        explica ese ciclo, sin dieta ni meta de peso. La evaluación psicológica
        para manga gástrica o bypass, con el informe, está en{" "}
        <Link href="#evaluacion-bariatrica" style={{ color: "#000", textDecoration: "underline" }}>
          esta misma página
        </Link>
        .
      </p>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Aspectos psicológicos de la obesidad
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Alimentación emocional (comer por ansiedad, tristeza, aburrimiento)",
            "Atracones de comida",
            "Uso de comida como regulador emocional",
            "Baja autoestima relacionada con el peso",
            "Historial de dietas restrictivas y efecto rebote",
            "Dificultad para mantener hábitos a largo plazo",
            "Relación conflictiva con el cuerpo",
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
          Qué trabajamos
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Identificar la función emocional de comer",
            "Desarrollar estrategias alternativas de regulación",
            "Cambiar patrones de pensamiento sobre comida y cuerpo",
            "Trabajar autoestima independiente del peso",
            "Motivación y mantenimiento de cambios",
            "Preparación psicológica para cirugía bariátrica (si aplica)",
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
          Cluster relacionado
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem", fontSize: "0.9375rem" }}>
          Si además de peso trabajas atracones, imagen corporal o preparación
          quirúrgica, estas páginas profundizan cada caso:
        </p>
        <div style={{ display: "grid", gap: "0.5rem" }}>
          {[
            {
              label: "Evaluación bariátrica",
              href: "#evaluacion-bariatrica",
              desc: "Informe psicológico para manga o bypass, en esta página",
            },
            {
              label: "Trastornos alimenticios",
              href: "/psicologo-trastornos-alimenticios-chillan",
              desc: "Anorexia, bulimia, atracones y relación con la comida",
            },
            {
              label: "Ansiedad",
              href: "/psicologo-ansiedad-chillan",
              desc: "Cuando la ansiedad dispara la alimentación emocional",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: "block",
                padding: "0.875rem 1rem",
                backgroundColor: "#fafafa",
                borderRadius: "8px",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <strong style={{ display: "block", marginBottom: "0.125rem", color: "#000" }}>
                {item.label}
              </strong>
              <span style={{ fontSize: "0.875rem", color: "#666" }}>{item.desc}</span>
            </Link>
          ))}
        </div>
      </section>

      <section id="evaluacion-bariatrica" style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.35rem", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: "0.75rem", lineHeight: 1.3 }}>
          Evaluación psicológica para cirugía bariátrica
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
          Si estás considerando una manga gástrica o un bypass, el informe para
          el equipo quirúrgico se hace aquí. No es el trabajo de alimentación
          emocional de más arriba. El informe cumple estándares profesionales y
          es el que la ficha describía como aceptado por clínicas y equipos
          bariátricos. Si piden un formato específico, se adapta.
        </p>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem", marginBottom: "1rem" }}>
          {[
            "Motivación y expectativas",
            "Historia con la alimentación y el peso",
            "Si hay un trastorno alimentario",
            "Estado emocional",
            "Capacidad de seguir el tratamiento",
            "Red de apoyo",
            "Si comprendes los cambios después de la cirugía",
          ].map((item) => (
            <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "0.75rem 1rem", backgroundColor: "#fafafa", borderRadius: "8px", fontSize: "0.9375rem", color: "#444" }}>
              <span style={{ color: "#000", flexShrink: 0 }}>—</span>
              {item}
            </li>
          ))}
        </ul>
        <p style={{ color: "#444", lineHeight: 1.7, margin: 0 }}>
          El proceso que ya estaba escrito es este: una entrevista de una o dos
          sesiones, pruebas cuando el equipo las pide, el informe y la entrega
          para presentarlo al equipo médico. El informe sale dentro de la
          semana siguiente a completar la evaluación. Otras formas de informe
          están en{" "}
          <Link href="/informe-psicologico-chillan" style={{ color: "#000", textDecoration: "underline" }}>
            informe psicológico
          </Link>
          .
        </p>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Preguntas frecuentes
        </h2>
        <div style={{ display: "grid", gap: "0.5rem" }}>
          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Por qué no puedo mantener las dietas?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Probablemente porque no has trabajado los aspectos emocionales.
              Si comes por razones emocionales, necesitas otras herramientas
              además de una dieta.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Trabajas junto con nutricionistas?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Sí, cuando es necesario me coordino con nutricionistas para un
              abordaje integral. La combinación es más efectiva.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿La terapia me hará bajar de peso?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Esta página no informa un resultado de peso. Mira los factores
              psicológicos de la alimentación. La guía de emoción y comida
              tampoco es una dieta.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Esta página incluye la evaluación psicológica para una cirugía bariátrica?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Sí. La evaluación para manga gástrica o bypass, con el informe
              para el equipo quirúrgico, está en esta misma página. Suele tomar
              una o dos sesiones y el informe se entrega dentro de la semana
              siguiente. El resto mira la alimentación emocional, que es otro
              motivo.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Me pueden rechazar en la evaluación bariátrica?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              La evaluación mira si estás preparado o preparada en este momento.
              Si hay algo que conviene trabajar antes, se puede retomar más
              adelante.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿El informe lo acepta cualquier clínica?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              El informe cumple estándares profesionales. Si el equipo pide un
              formato específico, se adapta a ese requerimiento.
            </p>
          </details>
        </div>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#000", borderRadius: "16px", marginBottom: "3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          Cambia tu relación con la comida
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          Esta vez puede ser diferente.
        </p>
        <a href="https://wa.me/56968257817" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", backgroundColor: "#fff", color: "#000", borderRadius: "9999px", textDecoration: "none", fontWeight: 500, fontSize: "0.875rem" }}>
          Agendar sesión →
        </a>
      </section>

      <nav style={{ paddingTop: "2rem", borderTop: "1px solid #eaeaea" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.75rem" }}>Servicios relacionados</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Evaluación bariátrica", href: "#evaluacion-bariatrica" },
            { label: "Trastornos alimenticios", href: "/psicologo-trastornos-alimenticios-chillan" },
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            { label: "Autoestima", href: "/psicologo-baja-autoestima-chillan" },
          ].map((item, i) => (
            <Link key={i} href={item.href} style={{ color: "#666", fontSize: "0.875rem", textDecoration: "none", padding: "0.375rem 0.75rem", border: "1px solid #eaeaea", borderRadius: "9999px" }}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    <RelatedReading currentPath="/psicologo-obesidad-chillan" />
    </main>
    </>
  );
}




