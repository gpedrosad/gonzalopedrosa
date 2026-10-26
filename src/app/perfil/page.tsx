import type { Metadata } from "next";
import Link from "next/link";
import Profile from "../components/Perfil";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import { JsonLd } from "@/app/components/JsonLd";
import {
  SITE_URL,
  getBreadcrumbSchema,
  getServiceSchema,
  getPageFAQSchema,
  getProfilePageSchema,
  getTwitterDescription,
} from "@/lib/schemas";

export const dynamic = "force-dynamic";

const title = "Gonzalo Pedrosa | Perfil de psicólogo clínico en Chillán";
const description =
  "Perfil de Gonzalo Pedrosa, psicólogo clínico en Chillán: TCC, boleta Isapre y +7 años. Ficha de quien escribe las guías; el mismo nombre de la portada.";

const breadcrumbItems = [
  { label: "Inicio", href: "/" },
  { label: "Perfil profesional" },
];

const perfilFAQs = [
  {
    question: "¿Cómo reservo una sesión desde el perfil?",
    answer:
      "Puedes usar el botón de agendar en esta página o ir a la sección de agendamiento del sitio. También respondo por WhatsApp en menos de 24 horas hábiles.",
  },
];

const faqSchema = getPageFAQSchema(perfilFAQs);
const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);
const serviceSchema = getServiceSchema({
  serviceType: "Psicoterapia online",
  description:
    "Acompañamiento psicológico con enfoque cognitivo-conductual, principalmente en formato online.",
  areaServed: "Chillán",
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title,
    description,
    alternates: {
      canonical: "/perfil",
    },
    openGraph: {
    locale: "es_CL",
      title,
      description,
      url: `${SITE_URL}/perfil`,
      type: "profile",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "Retrato de Gonzalo Pedrosa, psicólogo clínico" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: getTwitterDescription(description),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function ProfilePage() {
  return (
    <>
      <JsonLd
        id="profile-page"
        data={getProfilePageSchema({ name: "Gonzalo Pedrosa", description }) as Record<string, unknown>}
      />
      <JsonLd id="breadcrumb" data={breadcrumbSchema as Record<string, unknown>} />
      <JsonLd id="service" data={serviceSchema as Record<string, unknown>} />
      <JsonLd id="faq-schema" data={faqSchema as Record<string, unknown>} />
      <div
        style={{
          maxWidth: 640,
          margin: "0 auto",
          padding: "1.5rem 1.5rem 0",
          fontFamily:
            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        <Breadcrumb items={breadcrumbItems} />
        <h1
          style={{
            fontSize: "1.75rem",
            fontWeight: 700,
            lineHeight: 1.3,
            margin: "0 0 1.25rem",
            color: "#111",
          }}
        >
          Perfil de Gonzalo Pedrosa
        </h1>
        <section
          style={{
            marginBottom: "1.5rem",
            padding: "1rem 1.25rem",
            backgroundColor: "#fafafa",
            borderRadius: "12px",
          }}
        >
          <p style={{ color: "#444", lineHeight: 1.7, margin: "0 0 0.75rem" }}>
            Este es el perfil de{" "}
            <Link href="/" style={{ color: "#000", textDecoration: "underline" }}>
              Gonzalo Pedrosa
            </Link>
            , psicólogo clínico en Chillán. La portada usa el mismo nombre.
            Para leer, parte por las guías o las preguntas.
          </p>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {[
              { label: "Inicio", href: "/" },
              { label: "Guías", href: "/guias" },
              { label: "Preguntas", href: "/preguntas" },
              { label: "Terapia de pareja", href: "/terapia-de-pareja-chillan" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: "inline-block",
                  padding: "0.5rem 1rem",
                  backgroundColor: "#fff",
                  border: "1px solid #e5e5e5",
                  borderRadius: "9999px",
                  fontSize: "0.875rem",
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
      <Profile />
    </>
  );
}
