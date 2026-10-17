import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/app/components/JsonLd";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import { getBreadcrumbSchema, SITE_URL } from "@/lib/schemas";
import { CANONICAL_ORIGIN } from "@/lib/site-config";
import { GUIA_UPDATED_ISO, GUIA_UPDATED_LABEL } from "./guia-article";

const title = "Guías para cuidar la salud mental";
const description =
  "Lecturas para un duelo, un ataque de pánico o un familiar con ludopatía, y para distinguir al psicólogo del psiquiatra. No reemplazan atención.";
const path = "/guias";
const url = `${CANONICAL_ORIGIN}${path}`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    type: "website",
    locale: "es_CL",
    siteName: "Gonzalo Pedrosa - Psicólogo",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Gonzalo Pedrosa - Psicólogo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true, "max-image-preview": "large" },
};

const breadcrumbItems = [
  { label: "Inicio", href: "/" },
  { label: "Guías" },
];

const guides = [
  {
    href: "/guias/familiar-con-ludopatia",
    title: "Ayudar a un familiar con adicción al juego",
    note: "Señales que ve la familia, cómo conversar y cómo dejar de financiar la apuesta sin abandonar a la persona.",
  },
  {
    href: "/guias/psicologo-o-psiquiatra",
    title: "Psicólogo y psiquiatra: cuál es la diferencia",
    note: "Formación, medicamentos y criterios generales para saber a quién consultar.",
  },
  {
    href: "/guias/ataque-de-panico-que-hacer",
    title: "Ataque de pánico: qué hacer en el momento",
    note: "Pasos mientras el miedo está en el techo, y cuándo el episodio pide una urgencia médica.",
  },
  {
    href: "/guias/duelo-etapas-y-mitos",
    title: "Duelo: etapas, mitos y qué sí ayuda",
    note: "Por qué las cinco etapas no son obligatorias y qué mitos le agregan peso a la pena.",
  },
  {
    href: "/guias/acompanar-a-alguien-en-duelo",
    title: "Cómo acompañar a alguien que está en duelo",
    note: "Presencia, frases que sobran y ayuda concreta para las semanas en que el resto ya volvió a su vida.",
  },
  {
    href: "/guias/si-un-cercano-habla-de-hacerse-dano",
    title: "Si un cercano habla de hacerse daño",
    note: "Cómo preguntar, qué no prometer y qué números usar en Chile si el riesgo es inmediato.",
  },
];

const itemList = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: title,
  description,
  url,
  inLanguage: "es-CL",
  dateModified: GUIA_UPDATED_ISO,
  isPartOf: `${SITE_URL}/`,
  mainEntity: {
    "@type": "ItemList",
    itemListElement: guides.map((guide, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: guide.title,
      url: `${CANONICAL_ORIGIN}${guide.href}`,
    })),
  },
};

export default function GuiasIndexPage() {
  return (
    <>
      <JsonLd id="collection" data={itemList} />
      <JsonLd
        id="breadcrumb"
        data={getBreadcrumbSchema(breadcrumbItems) as Record<string, unknown>}
      />
      <main className="guia">
        <Breadcrumb items={breadcrumbItems} />
        <h1>{title}</h1>
        <p className="guia-lead">
          Textos para entender una situación y saber qué puedes hacer hoy.
          Actualizados el {GUIA_UPDATED_LABEL}. No son una ficha clínica ni un
          reemplazo de la atención profesional.
        </p>
        <p className="guia-disclaimer" role="note">
          Si tú o alguien cercano está en riesgo de hacerse daño, no uses estas
          lecturas como único recurso. En Chile puedes llamar al 131, a Salud
          Responde (600 360 7777) o al Fono de la Esperanza (717 200 200).
        </p>
        <ul className="guia-list">
          {guides.map((guide) => (
            <li key={guide.href}>
              <Link href={guide.href}>{guide.title}</Link>
              <p>{guide.note}</p>
            </li>
          ))}
        </ul>
        <section className="guia-related">
          <h2>Más recursos</h2>
          <p>
            El <Link href="/perfil">perfil de quien escribe</Link> sitúa la
            autoría. Cada guía, al final, enlaza lecturas del mismo sitio que
            tocan el tema desde otro ángulo.
          </p>
        </section>
      </main>
      <style>{`
        .guia {
          max-width: 42rem;
          margin: 0 auto;
          padding: 3.5rem 1.5rem 4rem;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          color: #1a1a1a;
        }
        .guia h1 {
          font-size: 2.15rem;
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin: 0 0 0.85rem;
        }
        .guia-lead {
          color: #444;
          font-size: 1.08rem;
          line-height: 1.7;
          margin: 0 0 1.25rem;
        }
        .guia-disclaimer {
          background: #f7f4ee;
          border: 1px solid #e6dfd2;
          border-radius: 12px;
          padding: 0.9rem 1rem;
          color: #3f3a32;
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0 0 2rem;
        }
        .guia-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 1.25rem;
        }
        .guia-list a {
          color: #111;
          font-weight: 600;
          font-size: 1.12rem;
          text-underline-offset: 3px;
        }
        .guia-list p {
          margin: 0.3rem 0 0;
          color: #444;
          line-height: 1.6;
        }
        .guia-related {
          margin-top: 2.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid #eaeaea;
        }
        .guia-related h2 {
          font-size: 0.78rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #888;
          margin: 0 0 0.75rem;
        }
        .guia-related p {
          color: #444;
          line-height: 1.65;
          margin: 0;
        }
        .guia-related a { color: #111; }
      `}</style>
    </>
  );
}
