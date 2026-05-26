import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Profile from "../components/Perfil";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import {
  SITE_URL,
  localBusinessSchema,
  getBreadcrumbSchema,
  getServiceSchema,
  getFAQSchema,
  getTwitterDescription,
} from "@/lib/schemas";

export const dynamic = "force-dynamic";

const description =
  "Perfil de Gonzalo Pedrosa, psicólogo en Chillán: formación, enfoque TCC, valoraciones y reserva de sesión online. Más de 7 años de experiencia clínica.";

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

const faqSchema = getFAQSchema(perfilFAQs);
const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);
const serviceSchema = getServiceSchema({
  serviceType: "Psicoterapia online",
  description:
    "Acompañamiento psicológico con enfoque cognitivo-conductual, principalmente en formato online.",
  areaServed: "Chillán",
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Gonzalo Pedrosa | Psicólogo Chillán · Perfil y reservas",
    description,
    alternates: {
      canonical: "/perfil",
    },
    openGraph: {
      title: "Gonzalo Pedrosa | Psicólogo en Chillán",
      description,
      url: `${SITE_URL}/perfil`,
      type: "profile",
      images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Gonzalo Pedrosa | Psicólogo Chillán",
      description: getTwitterDescription(
        "Perfil profesional, valoraciones y reserva de sesión online. TCC y +7 años de experiencia clínica."
      ),
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
        <section
          style={{
            marginBottom: "1.5rem",
            padding: "1rem 1.25rem",
            backgroundColor: "#fafafa",
            borderRadius: "12px",
          }}
        >
          <p style={{ color: "#444", lineHeight: 1.7, margin: "0 0 0.75rem" }}>
            Si quieres ver cómo trabajo según el motivo de consulta, aquí tienes tres páginas que hoy concentran la prioridad SEO del sitio.
          </p>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {[
              { label: "Psicólogo online", href: "/psicologo-online-chillan" },
              { label: "Depresión", href: "/psicologo-depresion-chillan" },
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
