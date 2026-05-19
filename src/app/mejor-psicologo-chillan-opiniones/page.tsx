import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import {
  localBusinessSchema,
  getBreadcrumbSchema,
  getServiceSchema,
  getFAQSchema,
  getTwitterDescription,
} from "@/lib/schemas";

const description =
  "¿Buscas el mejor psicólogo en Chillán? Opiniones, enfoque TCC, precios y cómo elegir con criterio —sin promesas vacías. Conoce mi perfil y agenda una primera sesión.";

export const metadata: Metadata = {
  title: "Mejor psicólogo Chillán opiniones | Cómo elegir | Gonzalo Pedrosa",
  description,
  alternates: {
    canonical: "/mejor-psicologo-chillan-opiniones",
  },
  openGraph: {
    title: "Mejor psicólogo Chillán opiniones | Gonzalo Pedrosa",
    description,
    url: "https://www.gonzalopedrosa.cl/mejor-psicologo-chillan-opiniones",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mejor psicólogo Chillán opiniones",
    description: getTwitterDescription(
      "Cómo elegir psicólogo en Chillán: formación, TCC y experiencia real. Agenda primera sesión $35.000."
    ),
  },
};

const breadcrumbItems = [
  { label: "Inicio", href: "/" },
  { label: "Mejor psicólogo Chillán opiniones" },
];

const opinionesFAQs = [
  {
    question: "¿Cómo sé si un psicólogo es confiable?",
    answer:
      "Revisa formación, registro profesional, enfoque terapéutico con evidencia y si te explica el proceso con claridad. La primera sesión sirve para evaluar encaje.",
  },
  {
    question: "¿Las opiniones en internet son suficientes?",
    answer:
      "Ayudan, pero conviene contrastar con una consulta directa. Cada persona valora aspectos distintos: cercanía, método, horarios o modalidad online.",
  },
];

const faqSchema = getFAQSchema(opinionesFAQs);
const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);
const serviceSchema = getServiceSchema({
  serviceType: "Consulta psicológica",
  description: "Atención psicológica en Chillán con enfoque cognitivo-conductual y más de 7 años de experiencia clínica.",
  areaServed: "Chillán",
});

export default function MejorPsicologoChillanOpinionesPage() {
  return (
    <>
      <Script
        id="local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    <main style={{ maxWidth: 640, margin: "0 auto", padding: "4rem 1.5rem", fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
        <Breadcrumb items={breadcrumbItems} />
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
        <Image src="/yo.png" alt="Gonzalo Pedrosa - Psicólogo" width={56} height={56} priority style={{ borderRadius: "9999px", objectFit: "cover" }} />
        <div>
          <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.125rem" }}>Chillán, Chile</p>
          <p style={{ fontWeight: 500, color: "#000" }}>Gonzalo Pedrosa</p>
        </div>
      </div>

      <h1 style={{ fontSize: "2.5rem", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: "1rem", lineHeight: 1.1 }}>
        Mejor Psicólogo en Chillán Opiniones
      </h1>

      <p style={{ fontSize: "1.125rem", color: "#666", marginBottom: "1.5rem", lineHeight: 1.6 }}>
        Si buscas el mejor psicólogo en Chillán según opiniones, conviene mirar formación, enfoque
        (trabajo con TCC), años de experiencia y encaje en la primera sesión —no solo estrellas en
        Google. Acá resumo cómo elijo trabajar y qué dicen quienes consultan.
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
          Agendar primera sesión →
        </Link>
        <Link href="/perfil" style={{ fontSize: "0.875rem", color: "#666", textDecoration: "underline" }}>
          Ver perfil completo
        </Link>
      </div>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Lo que dicen mis pacientes
        </h2>
        <div style={{ display: "grid", gap: "0.75rem" }}>
          {[
            { texto: "Me ayudó a entender patrones que venía repitiendo hace años. Muy profesional y cercano.", autor: "M.R." },
            { texto: "La terapia online funciona muy bien. Flexible con los horarios y siempre puntual.", autor: "C.S." },
            { texto: "Por fin encontré un psicólogo que explica las cosas de forma clara y práctica.", autor: "J.L." },
            { texto: "El proceso de reembolso con Isapre fue súper fácil. Recomendado.", autor: "A.V." },
          ].map((item, i) => (
            <div key={i} style={{ padding: "1rem", backgroundColor: "#fafafa", borderRadius: "12px", border: "1px solid #eaeaea" }}>
              <p style={{ color: "#444", fontSize: "0.9375rem", lineHeight: 1.6, marginBottom: "0.5rem" }}>
                &quot;{item.texto}&quot;
              </p>
              <p style={{ color: "#999", fontSize: "0.8125rem" }}>— {item.autor}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Qué considerar al elegir psicólogo
        </h2>
        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.5rem" }}>
          {[
            "Formación y especialización en tu problemática",
            "Enfoque basado en evidencia (TCC, por ejemplo)",
            "Que te sientas cómodo/a y escuchado/a",
            "Claridad sobre el proceso y los objetivos",
            "Flexibilidad de horarios y modalidad",
            "Transparencia en precios y reembolsos",
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
          Mi enfoque
        </h2>
        <div style={{ display: "grid", gap: "0.75rem" }}>
          {[
            { titulo: "Terapia Cognitivo-Conductual", desc: "Enfoque basado en evidencia que trabaja pensamientos, emociones y conductas." },
            { titulo: "Centrado en objetivos", desc: "Definimos metas claras y medibles para tu proceso." },
            { titulo: "Cercano pero profesional", desc: "Un espacio seguro donde puedes hablar sin juicio." },
            { titulo: "Flexible", desc: "Sesiones presenciales u online, según te acomode." },
          ].map((item, i) => (
            <div key={i} style={{ padding: "1rem", backgroundColor: "#fafafa", borderRadius: "8px" }}>
              <p style={{ fontWeight: 600, marginBottom: "0.25rem", color: "#000" }}>{item.titulo}</p>
              <p style={{ fontSize: "0.875rem", color: "#666" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "1rem" }}>
          Áreas de especialización
        </h2>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
            { label: "Depresión", href: "/psicologo-depresion-chillan" },
            { label: "Estrés laboral", href: "/psicologo-estres-laboral-chillan" },
            { label: "Terapia de pareja", href: "/terapia-de-pareja-chillan" },
            { label: "Autoestima", href: "/psicologo-baja-autoestima-chillan" },
            { label: "Crisis de pánico", href: "/psicologo-crisis-de-panico-chillan" },
          ].map((item, i) => (
            <Link key={i} href={item.href} style={{ color: "#444", fontSize: "0.875rem", textDecoration: "none", padding: "0.5rem 1rem", backgroundColor: "#fafafa", borderRadius: "9999px" }}>
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#000", borderRadius: "16px", marginBottom: "3rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem", color: "#fff" }}>
          ¿Quieres conocerme?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "1.5rem", fontSize: "0.9375rem" }}>
          Agenda una primera sesión y ve si hacemos match.
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
        <p style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.75rem" }}>Más información</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Precios", href: "/consulta-psicologica-precio-chillan" },
            { label: "Reembolso Isapre", href: "/psicologo-reembolso-isapre-chillan" },
            { label: "Online", href: "/psicologo-online-chillan" },
            { label: "TCC", href: "/psicologo-cognitivo-conductual-chillan" },
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

