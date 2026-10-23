import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import { OrganicSeoScripts } from "@/app/components/OrganicSeoScripts";
import { getTwitterDescription } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Psicólogo para estudiantes en Chillán: estrés académico",
  description:
    "Psicólogo para estudiantes en Chillán: estrés académico, pruebas, procrastinación y dudas de carrera. Sin un diagnóstico ni un plazo de notas.",
  alternates: {
    canonical: "/psicologo-estudiantes-chillan",
  },
  openGraph: {
    locale: "es_CL",
    title: "Psicólogo para estudiantes en Chillán: estrés académico",
    description: "Psicólogo para estudiantes en Chillán: estrés académico, pruebas, procrastinación y dudas de carrera. Sin un diagnóstico ni un plazo de notas.",
    url: "https://www.gonzalopedrosa.cl/psicologo-estudiantes-chillan",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Retrato de Gonzalo Pedrosa, psicólogo clínico" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicólogo para estudiantes en Chillán: estrés académico",
    description: getTwitterDescription("Psicólogo para estudiantes en Chillán: estrés académico, pruebas, procrastinación y dudas de carrera. Sin un diagnóstico ni un plazo de notas."),
  },
};



const psicologo_estudiantes_chillanFAQs = [
  {
    question: "¿Mis papás se van a enterar de lo que hablo?",
    answer:
      "No. Si eres mayor de edad, todo es confidencial. Si eres menor, hablamos sobre qué información compartir con tus padres.",
  },
  {
    question: "¿Cómo pago si no tengo ingresos propios?",
    answer:
      "Muchos estudiantes vienen con apoyo de sus familias. También emito boleta para reembolso Isapre si tienes cobertura.",
  },
  {
    question: "¿Es normal sentirse así?",
    answer:
      "Es más común de lo que crees. Muchos estudiantes pasan por momentos difíciles. Que sea común no significa que tengas que aguantarlo solo/a.",
  },
  {
    question: "¿No debería poder manejar esto solo/a?",
    answer:
      "La presión de estudiar puede superar los recursos de cualquiera. Pedir una conversación es una decisión, no una debilidad.",
  },
  {
    question: "¿La terapia apunta a subir las notas?",
    answer:
      "El foco es cómo estás, no un promedio. Al bajar la ansiedad y ordenar el tiempo, algunas personas rinden con menos desgaste. Eso no es una promesa de resultado.",
  },
];

const breadcrumbItems = [
  { label: "Inicio", href: "/" },
  { label: "Psicólogo Estudiantes Chillán" },
];

export default function PsicologoEstudiantesChillanPage() {
  return (
    <>
      <OrganicSeoScripts
        breadcrumbItems={breadcrumbItems}
        faqs={psicologo_estudiantes_chillanFAQs}
        serviceType="Psicología Estudiantes"
        serviceDescription={"Psicólogo para estudiantes en Chillán: estrés académico, pruebas, procrastinación y dudas de carrera. Sin un diagnóstico ni un plazo de notas."}
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
        Psicólogo para estudiantes en Chillán
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "3rem", lineHeight: 1.6 }}>
        La etapa de estudiante puede ser desafiante: estrés académico, pruebas,
        dudas vocacionales, relaciones e identidad. Esta página describe esos
        temas. No diagnostica y no pone un plazo de notas.
      </p>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Temas comunes en estudiantes
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Ansiedad ante exámenes y evaluaciones",
            "Procrastinación y dificultad para estudiar",
            "Estrés académico y burnout estudiantil",
            "Dudas vocacionales o de carrera",
            "Presión familiar por el rendimiento",
            "Problemas de adaptación (cambio de ciudad, de entorno)",
            "Relaciones, identidad y autoestima",
            "Síndrome del impostor académico",
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
          Cómo puedo ayudarte
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Técnicas para manejar la ansiedad académica",
            "Estrategias contra la procrastinación",
            "Organización y hábitos de estudio",
            "Clarificar decisiones vocacionales",
            "Trabajar la autoexigencia y perfeccionismo",
            "Equilibrio entre estudio y vida personal",
          ].map((item, i) => (
            <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#444", fontSize: "0.9375rem" }}>
              <span style={{ color: "#000" }}>✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section style={{ padding: "1.25rem", backgroundColor: "#fef3c7", borderRadius: "12px", marginBottom: "2.5rem", border: "1px solid #fcd34d" }}>
        <p style={{ fontWeight: 600, color: "#92400e", marginBottom: "0.5rem", fontSize: "0.9375rem" }}>💡 Horarios flexibles</p>
        <p style={{ color: "#78350f", fontSize: "0.875rem", lineHeight: 1.6 }}>
          Entiendo que tu horario puede ser complicado. Ofrezco sesiones en
          horarios compatibles con clases y también{" "}
          <Link href="/terapia-online" style={{ color: "#78350f", textDecoration: "underline" }}>terapia online</Link>.
        </p>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Preguntas frecuentes
        </h2>
        <div style={{ display: "grid", gap: "0.5rem" }}>
          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Mis papás se van a enterar de lo que hablo?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              No. Si eres mayor de edad, todo es confidencial. Si eres menor,
              hablamos sobre qué información compartir con tus padres.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Cómo pago si no tengo ingresos propios?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Muchos estudiantes vienen con apoyo de sus familias. También emito
              boleta para{" "}
              <Link href="/psicologo-reembolso-isapre-chillan" style={{ color: "#000", textDecoration: "underline" }}>reembolso Isapre</Link>{" "}
              si tienes cobertura.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Es normal sentirse así?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Es más común de lo que crees. Muchos estudiantes pasan por momentos
              difíciles. Que sea común no significa que tengas que aguantarlo solo/a.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿No debería poder manejar esto solo/a?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              La presión de estudiar puede superar los recursos de cualquiera.
              Pedir una conversación es una decisión, no una debilidad.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿La terapia apunta a subir las notas?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              El foco es cómo estás, no un promedio. Al bajar la ansiedad y
              ordenar el tiempo, algunas personas rinden con menos desgaste.
              Eso no es una promesa de resultado.
            </p>
          </details>
        </div>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 650, marginBottom: "0.75rem" }}>
          Señales de estrés académico
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
          El estrés académico aparece cuando la carga de estudiar se mete en el
          sueño, el cuerpo o las ganas de seguir. No es lo mismo que una prueba
          difícil de una semana. Estas son señales frecuentes:
        </p>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem", marginBottom: "1rem" }}>
          {[
            "Ansiedad constante por las notas y las evaluaciones",
            "Problemas de sueño en época de pruebas",
            "Sensación de ir siempre atrasado o atrasada",
            "Bloqueos al estudiar o durante un examen",
            "Cansancio físico y mental",
            "Pérdida de motivación por la carrera",
            "Aislarse para estudiar",
            "Dolor de cabeza o tensión",
          ].map((item) => (
            <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "0.75rem 1rem", backgroundColor: "#fafafa", borderRadius: "8px", fontSize: "0.9375rem", color: "#444" }}>
              <span style={{ color: "#000", flexShrink: 0 }}>—</span>
              {item}
            </li>
          ))}
        </ul>
        <p style={{ color: "#444", lineHeight: 1.7 }}>
          Si lo que más pesa es postergar el estudio, la página de{" "}
          <Link href="/psicologo-procrastinacion-estudios-chillan" style={{ color: "#000", textDecoration: "underline" }}>
            procrastinación en los estudios
          </Link>{" "}
          lo separa. Si sientes que los demás van a descubrir que no sabes
          tanto como creen, el{" "}
          <Link href="/psicologo-sindrome-impostor-chillan" style={{ color: "#000", textDecoration: "underline" }}>
            síndrome del impostor
          </Link>{" "}
          tiene su propia ficha. En la sesión se puede hablar de manejo del
          estrés, ansiedad ante pruebas, organización del tiempo, perfeccionismo
          y el equilibrio entre estudiar y el resto del día.
        </p>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#000", borderRadius: "16px", marginBottom: "3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          Tu bienestar también importa
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          No tienes que sacrificar tu salud mental por las notas.
        </p>
        <a href="https://wa.me/56968257817" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", backgroundColor: "#fff", color: "#000", borderRadius: "9999px", textDecoration: "none", fontWeight: 500, fontSize: "0.875rem" }}>
          Agendar sesión →
        </a>
      </section>

      <nav style={{ paddingTop: "2rem", borderTop: "1px solid #eaeaea" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.75rem" }}>Servicios relacionados</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Procrastinación", href: "/psicologo-procrastinacion-estudios-chillan" },
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            { label: "Síndrome impostor", href: "/psicologo-sindrome-impostor-chillan" },
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


