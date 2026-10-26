import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/app/components/JsonLd";
import { RelatedReading } from "@/app/components/RelatedReading";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import {
  SITE_URL,
  getBreadcrumbSchema,
  getServiceSchema,
  getPageFAQSchema,
  getTwitterDescription,
} from "@/lib/schemas";

const title = "Psicólogo abuso infantil en Chillán: trauma en adultos";
const description =
  "Si viviste abuso en la infancia, un psicólogo puede acompañarte en la adultez, sin el relato completo y sin un plazo. El TEPT y el EMDR están en las guías.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/psicologo-abuso-sexual-chillan",
  },
  openGraph: {
    locale: "es_CL",
    title,
    description,
    url: `${SITE_URL}/psicologo-abuso-sexual-chillan`,
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Retrato de Gonzalo Pedrosa, psicólogo clínico" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: getTwitterDescription(description),
  },
};

const breadcrumbItems = [
  { label: "Inicio", href: "/" },
  { label: "Psicólogo abuso sexual Chillán" },
];

const abusoFAQs = [
  {
    question: "¿Tengo que contar todo lo que pasó?",
    answer:
      "No. El ritmo lo marcas tú. Puedes hablar de lo que puedas y parar cuando quieras. Esta página no pide el relato completo.",
  },
  {
    question: "¿Sirve si el abuso fue en la infancia y ahora soy adulto?",
    answer:
      "Esta página está escrita para esa búsqueda. Que el hecho haya sido en la infancia no cierra el tema en la adultez. Tampoco promete un plazo ni un resultado.",
  },
  {
    question: "¿La conversación es confidencial?",
    answer:
      "El secreto profesional se mantiene. La excepción que esta página ya nombra es un riesgo vital o un menor en peligro actual.",
  },
];

const faqSchema = getPageFAQSchema(abusoFAQs);
const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);
const serviceSchema = getServiceSchema({
  serviceType: "Psicología trauma por abuso sexual",
  description:
    "Acompañamiento psicológico confidencial para procesar trauma por abuso sexual en Chillán o por videollamada.",
  areaServed: "Chillán",
});

export default function PsicologoAbusoSexualChillanPage() {
  return (
    <>
      <JsonLd id="breadcrumb" data={breadcrumbSchema as Record<string, unknown>} />
      <JsonLd id="service" data={serviceSchema as Record<string, unknown>} />
      <JsonLd id="faq-schema" data={faqSchema as Record<string, unknown>} />
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
        Psicólogo por abuso sexual vivido en la infancia
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "1.5rem", lineHeight: 1.6 }}>
        Si buscas psicólogo por abuso infantil, esta página habla de adultos que
        vivieron abuso sexual en la infancia. La atención es en Chillán o{" "}
        <Link href="/psicologo-online-chillan" style={{ color: "#000", textDecoration: "underline" }}>
          por videollamada
        </Link>
        . No tienes que traer el relato completo. No hay un resultado prometido.
        El método de{" "}
        <Link href="/terapia-emdr-chillan" style={{ color: "#000", textDecoration: "underline" }}>
          EMDR en Chillán
        </Link>{" "}
        es otra URL.
      </p>

      <div style={{ marginBottom: "2.5rem", display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center" }}>
        <Link
          href="/agendar"
          style={{
            display: "inline-flex",
            padding: "0.75rem 1.25rem",
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: "9999px",
            textDecoration: "none",
            fontWeight: 500,
            fontSize: "0.875rem",
          }}
        >
          Agendar consulta confidencial →
        </Link>
      </div>

      <section style={{ padding: "1.25rem", backgroundColor: "#fef3c7", borderRadius: "12px", marginBottom: "2.5rem", border: "1px solid #fcd34d" }}>
        <p style={{ fontWeight: 600, color: "#92400e", marginBottom: "0.5rem", fontSize: "0.9375rem" }}>⚠️ Si estás en crisis</p>
        <p style={{ color: "#78350f", fontSize: "0.875rem", lineHeight: 1.6 }}>
          Fono Denuncia: 600 400 0101 (24/7)<br />
          Fono Familia Carabineros: 149 (24/7)<br />
          Si necesitas ayuda urgente, llama. Si quien habla de hacerse daño es un
          cercano, la guía{" "}
          <Link href="/guias/si-un-cercano-habla-de-hacerse-dano" style={{ color: "#78350f", textDecoration: "underline" }}>
            si un cercano habla de hacerse daño
          </Link>{" "}
          ordena cómo preguntar, con números que este sitio ya publica.
        </p>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.35rem", fontWeight: 600, letterSpacing: "-0.02em", marginBottom: "0.75rem", lineHeight: 1.3 }}>
          Si el abuso fue en la infancia
        </h2>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
          Hay adultos que buscan un psicólogo por un abuso vivido en la infancia.
          El hecho ya pasó y pueden seguir la vergüenza, las imágenes o la
          guardia alta. Eso no confirma un diagnóstico. Qué es un trauma
          psicológico está en{" "}
          <Link href="/preguntas/que-es-un-trauma-psicologico" style={{ color: "#000", textDecoration: "underline" }}>
            esta pregunta
          </Link>
          . En qué se distingue de un TEPT está en la{" "}
          <Link href="/guias/que-es-el-tept" style={{ color: "#000", textDecoration: "underline" }}>
            guía de TEPT
          </Link>
          .
        </p>
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
          No tienes que contar el relato completo. El ritmo lo marcas tú. Primero
          se busca un poco más de calma, y el trabajo del recuerdo queda para
          cuando tú lo decides. La explicación, sin una comuna, está en{" "}
          <Link href="/preguntas/como-ayuda-la-terapia-tras-abuso-en-la-infancia" style={{ color: "#000", textDecoration: "underline" }}>
            cómo ayuda la terapia a un adulto que vivió abuso en la infancia
          </Link>
          . La otra ficha de atención es{" "}
          <Link href="/superar-trauma-infancia-chillan" style={{ color: "#000", textDecoration: "underline" }}>
            trauma de infancia en Chillán
          </Link>
          .
        </p>
        <p style={{ color: "#444", lineHeight: 1.7 }}>
          La guía de la OMS de 2013 nombra, para adultos con TEPT, la terapia
          cognitivo-conductual focalizada en el trauma y el EMDR, cuando las
          aplica personal de salud capacitado. Que las nombre no dice cuál te
          corresponde. Las fases están en{" "}
          <Link href="/guias/que-es-el-emdr" style={{ color: "#000", textDecoration: "underline" }}>
            qué es el EMDR
          </Link>
          . El ejercicio bilateral del sitio no es para reprocesar un abuso: el
          límite está en{" "}
          <Link href="/preguntas/emdr-autoadministrado-y-terapia" style={{ color: "#000", textDecoration: "underline" }}>
            la pregunta del ejercicio
          </Link>{" "}
          y el recurso en{" "}
          <Link href="/emdr-autoadministrado" style={{ color: "#000", textDecoration: "underline" }}>
            estimulación bilateral para un malestar leve
          </Link>
          .
        </p>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Efectos comunes del trauma
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Flashbacks, pesadillas o recuerdos intrusivos",
            "Vergüenza, culpa o sentirte \"sucio/a\"",
            "Dificultad para confiar en otros",
            "Problemas en relaciones íntimas",
            "Ansiedad, depresión o disociación",
            "Evitación de situaciones que recuerdan el trauma",
            "Problemas con la imagen corporal",
            "Sensación de estar dañado/a o ser diferente",
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
        <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
          El proceso es a tu ritmo. No hay obligación de hablar de detalles si
          no quieres. Trabajamos con:
        </p>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Crear un espacio seguro y de confianza",
            "Estabilización emocional primero",
            "Procesamiento del trauma cuando estés listo/a",
            "Reconstruir tu sentido de seguridad",
            "Trabajar la culpa y la vergüenza",
            "Recuperar tu vida y relaciones",
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
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Tengo que contar todo lo que pasó?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              No. El ritmo lo marcas tú. Puedes hablar de lo que puedas y parar
              cuando quieras. Esta página no pide el relato completo.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿Sirve si el abuso fue en la infancia y ahora soy adulto?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              Esta página está escrita para esa búsqueda. Que el hecho haya sido
              en la infancia no cierra el tema en la adultez. Tampoco promete un
              plazo ni un resultado.
            </p>
          </details>

          <details style={{ padding: "1rem", border: "1px solid #eaeaea", borderRadius: "12px" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>¿La conversación es confidencial?</summary>
            <p style={{ marginTop: "0.75rem", color: "#666", lineHeight: 1.6, fontSize: "0.9375rem" }}>
              El secreto profesional se mantiene. La excepción que esta página
              ya nombra es un riesgo vital o un menor en peligro actual.
            </p>
          </details>
        </div>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#000", borderRadius: "16px", marginBottom: "3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          La explicación está en una pregunta
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          <Link href="/preguntas/como-ayuda-la-terapia-tras-abuso-en-la-infancia" style={{ color: "#fff", textDecoration: "underline" }}>
            Cómo ayuda la terapia a un adulto que vivió abuso en la infancia
          </Link>
          . Esta URL es la atención en Chillán. No promete un plazo.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", alignItems: "center" }}>
          <Link href="/agendar" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", backgroundColor: "#fff", color: "#000", borderRadius: "9999px", textDecoration: "none", fontWeight: 500, fontSize: "0.875rem" }}>
            Agendar en el sitio →
          </Link>
          <a href="https://wa.me/56968257817" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.875rem", textDecoration: "underline" }}>
            O escribir por WhatsApp
          </a>
        </div>
      </section>

      <nav style={{ paddingTop: "2rem", borderTop: "1px solid #eaeaea" }}>
        <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.75rem" }}>Servicios relacionados</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Trauma infancia", href: "/superar-trauma-infancia-chillan" },
            { label: "Estrés postraumático", href: "/estres-postraumatico-chillan" },
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            { label: "Depresión", href: "/psicologo-depresion-chillan" },
          ].map((item, i) => (
            <Link key={i} href={item.href} style={{ color: "#666", fontSize: "0.875rem", textDecoration: "none", padding: "0.375rem 0.75rem", border: "1px solid #eaeaea", borderRadius: "9999px" }}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
      <RelatedReading currentPath="/psicologo-abuso-sexual-chillan" />
    </main>
    </>
  );
}



