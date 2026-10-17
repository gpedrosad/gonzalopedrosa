import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/app/components/JsonLd";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import { getBreadcrumbSchema } from "@/lib/schemas";
import { CANONICAL_ORIGIN } from "@/lib/site-config";

export const GUIA_UPDATED_ISO = "2026-10-17";
export const GUIA_UPDATED_LABEL = "17 de octubre de 2026";

export type GuiaLink = {
  href: string;
  label: string;
  note: string;
};

type GuiaArticleProps = {
  h1: string;
  breadcrumbLabel: string;
  path: string;
  description: string;
  children: ReactNode;
  relatedSite: GuiaLink[];
  relatedGuides: GuiaLink[];
};

export function guiaMetadata(opts: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${CANONICAL_ORIGIN}${opts.path}`;

  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      type: "article",
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
      title: opts.title,
      description: opts.description,
      images: ["/og.png"],
    },
    robots: { index: true, follow: true, "max-image-preview": "large" },
  };
}

function articleSchema(props: {
  h1: string;
  path: string;
  description: string;
}) {
  const url = `${CANONICAL_ORIGIN}${props.path}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: props.h1,
    description: props.description,
    inLanguage: "es-CL",
    datePublished: GUIA_UPDATED_ISO,
    dateModified: GUIA_UPDATED_ISO,
    image: [`${CANONICAL_ORIGIN}/og.png`],
    author: {
      "@type": "Person",
      "@id": `${CANONICAL_ORIGIN}/#persona`,
      name: "Gonzalo Pedrosa",
      url: `${CANONICAL_ORIGIN}/perfil`,
      jobTitle: "Psicólogo",
    },
    publisher: {
      "@type": "Organization",
      name: "Gonzalo Pedrosa - Psicólogo",
      url: CANONICAL_ORIGIN,
      logo: {
        "@type": "ImageObject",
        url: `${CANONICAL_ORIGIN}/og.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

export function GuiaArticle({
  h1,
  breadcrumbLabel,
  path,
  description,
  children,
  relatedSite,
  relatedGuides,
}: GuiaArticleProps) {
  const breadcrumbItems = [
    { label: "Inicio", href: "/" },
    { label: "Guías", href: "/guias" },
    { label: breadcrumbLabel },
  ];

  return (
    <>
      <JsonLd id="article" data={articleSchema({ h1, path, description })} />
      <JsonLd
        id="breadcrumb"
        data={getBreadcrumbSchema(breadcrumbItems) as Record<string, unknown>}
      />
      <main className="guia">
        <Breadcrumb items={breadcrumbItems} />
        <h1>{h1}</h1>
        <p className="guia-byline">
          Por{" "}
          <Link href="/perfil">Gonzalo Pedrosa</Link>, psicólogo · Actualizado
          el {GUIA_UPDATED_LABEL}
        </p>
        <p className="guia-disclaimer" role="note">
          Esta guía es información general. No hace un diagnóstico, no reemplaza
          una evaluación clínica y no sustituye la atención de un profesional de
          la salud. Si tú o alguien cercano está en riesgo de hacerse daño,
          busca ayuda de inmediato.
        </p>
        <article className="guia-prose">{children}</article>

        <section className="guia-related" aria-labelledby="en-este-sitio">
          <h2 id="en-este-sitio">En este sitio</h2>
          <ul>
            {relatedSite.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
                <span>{item.note}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="guia-related" aria-labelledby="mas-recursos">
          <h2 id="mas-recursos">Más recursos</h2>
          <p>
            Estas páginas son lecturas. Si quieres seguir informándote, vuelve
            al índice o abre otra guía.
          </p>
          <ul>
            <li>
              <Link href="/guias">Índice de guías</Link>
              <span>Todas las lecturas de esta sección.</span>
            </li>
            {relatedGuides.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
                <span>{item.note}</span>
              </li>
            ))}
          </ul>
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
          margin: 0 0 0.75rem;
        }
        .guia-byline {
          color: #666;
          font-size: 0.95rem;
          margin: 0 0 1.25rem;
        }
        .guia-byline a {
          color: #111;
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
        .guia-prose h2 {
          font-size: 1.35rem;
          line-height: 1.25;
          letter-spacing: -0.02em;
          margin: 2.4rem 0 0.75rem;
        }
        .guia-prose h3 {
          font-size: 1.08rem;
          margin: 1.5rem 0 0.5rem;
        }
        .guia-prose p,
        .guia-prose li {
          font-size: 1.05rem;
          line-height: 1.75;
          color: #333;
        }
        .guia-prose p { margin: 0 0 1rem; }
        .guia-prose ul,
        .guia-prose ol {
          margin: 0 0 1.1rem;
          padding-left: 1.25rem;
        }
        .guia-prose li { margin: 0.35rem 0; }
        .guia-prose a {
          color: #111;
          text-underline-offset: 2px;
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
          margin: 0 0 0.85rem;
        }
        .guia-related p {
          color: #444;
          line-height: 1.6;
          margin: 0 0 0.85rem;
        }
        .guia-related ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 0.85rem;
        }
        .guia-related li {
          display: grid;
          gap: 0.15rem;
        }
        .guia-related a {
          color: #111;
          font-weight: 600;
          text-underline-offset: 2px;
        }
        .guia-related span {
          color: #555;
          font-size: 0.95rem;
          line-height: 1.5;
        }
      `}</style>
    </>
  );
}
