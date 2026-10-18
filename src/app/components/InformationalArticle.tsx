import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import { JsonLd } from "@/app/components/JsonLd";
import { OrganicPortrait } from "@/app/components/OrganicPortrait";
import {
  findInformationalPage,
  informationalPath,
  INFORMATIONAL_UPDATED,
  OG_IMAGE,
  pagesByCluster,
  type InfoPage,
} from "@/lib/informational-content";
import { getArticleSchema, getBreadcrumbSchema, getPageFAQSchema, getTwitterDescription } from "@/lib/schemas";

const pageStyle = {
  maxWidth: 680,
  margin: "0 auto",
  padding: "3rem 1.5rem 4rem",
  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  color: "#1a1a1a",
  lineHeight: 1.65,
} as const;

export function informationalMetadata(cluster: InfoPage["cluster"], slug: string): Metadata {
  const page = findInformationalPage(cluster, slug);
  if (!page) return {};
  const path = informationalPath(page);
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: path },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://www.gonzalopedrosa.cl${path}`,
      type: "article",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: getTwitterDescription(page.description),
      images: [OG_IMAGE.url],
    },
    robots: { index: true, follow: true, "max-image-preview": "large" },
  };
}

export function InformationalArticle({
  cluster,
  slug,
}: {
  cluster: InfoPage["cluster"];
  slug: string;
}) {
  const page = findInformationalPage(cluster, slug);
  if (!page) notFound();

  const path = informationalPath(page);
  const updated = page.updated ?? INFORMATIONAL_UPDATED;
  const hubLabel = cluster === "guias" ? "Guías" : "Preguntas";
  const hubHref = cluster === "guias" ? "/guias" : "/preguntas";
  const breadcrumbItems = [
    { label: "Inicio", href: "/" },
    { label: hubLabel, href: hubHref },
    { label: page.navLabel },
  ];
  const articleSchema = getArticleSchema({
    headline: page.h1,
    description: page.description,
    path,
    datePublished: updated,
    dateModified: updated,
  });

  return (
    <>
      <JsonLd id="article-schema" data={articleSchema as Record<string, unknown>} />
      <JsonLd id="breadcrumb-schema" data={getBreadcrumbSchema(breadcrumbItems) as Record<string, unknown>} />
      <JsonLd id="faq-schema" data={getPageFAQSchema(page.faqs) as Record<string, unknown>} />
      <main style={pageStyle}>
        <Breadcrumb items={breadcrumbItems} />
        <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", margin: "1.25rem 0 1.5rem" }}>
          <OrganicPortrait />
          <div>
            <p style={{ fontWeight: 600, margin: 0 }}>Gonzalo Pedrosa</p>
            <p style={{ margin: 0, color: "#666", fontSize: "0.875rem" }}>
              Psicólogo clínico · {cluster === "guias" ? "Guía" : "Pregunta"} informativa, actualizada el{" "}
              {updated}
            </p>
          </div>
        </div>

        <h1 style={{ fontSize: "2rem", lineHeight: 1.2, letterSpacing: "-0.03em", marginBottom: "1rem" }}>
          {page.h1}
        </h1>
        <p style={{ fontSize: "1.125rem", marginTop: 0 }}>{page.answer}</p>

        {page.sections.map((section) => (
          <section key={section.heading} style={{ marginTop: "2rem" }}>
            <h2 style={{ fontSize: "1.3rem", lineHeight: 1.3, marginBottom: "0.75rem" }}>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.bullets && (
              <ul>
                {section.bullets.map((item) => (
                  <li key={item} style={{ marginBottom: "0.35rem" }}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {page.safety && (
          <aside
            style={{
              marginTop: "2rem",
              padding: "1rem 1.1rem",
              background: "#fff7ed",
              border: "1px solid #fed7aa",
              borderRadius: "12px",
            }}
          >
            <h2 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Si estás en riesgo</h2>
            <p style={{ margin: 0 }}>{page.safety}</p>
          </aside>
        )}

        {page.product && (
          <aside
            style={{
              marginTop: "2rem",
              padding: "1.1rem 1.2rem",
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: "12px",
            }}
          >
            <h2 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Recurso para practicar</h2>
            <p style={{ marginTop: 0 }}>{page.product.note}</p>
            <Link href={page.product.href} style={{ fontWeight: 600, color: "#0f172a" }}>
              {page.product.label}
            </Link>
          </aside>
        )}

        <section style={{ marginTop: "2.5rem" }}>
          <h2 style={{ fontSize: "1.3rem" }}>Preguntas frecuentes</h2>
          {page.faqs.map((faq) => (
            <details key={faq.question} style={{ borderTop: "1px solid #eee", padding: "0.85rem 0" }}>
              <summary style={{ cursor: "pointer", fontWeight: 600 }}>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </section>

        <nav aria-label="Lecturas relacionadas" style={{ marginTop: "2rem" }}>
          <h2 style={{ fontSize: "1.15rem" }}>Sigue con estas lecturas</h2>
          <ul>
            {page.related.map((item) => (
              <li key={item.href} style={{ marginBottom: "0.4rem" }}>
                <Link href={item.href} prefetch={false}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={hubHref}>{hubLabel}</Link>
            </li>
          </ul>
        </nav>

        <section style={{ marginTop: "2rem", color: "#555", fontSize: "0.92rem" }}>
          <h2 style={{ fontSize: "1rem", color: "#222" }}>Fuentes</h2>
          <ul>
            {page.sources.map((source) => (
              <li key={source.href} style={{ marginBottom: "0.35rem" }}>
                <a href={source.href} rel="noopener noreferrer">
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
          <p>
            Este texto orienta. No diagnostica, no indica medicamentos y no reemplaza una evaluación con un
            profesional de salud.
          </p>
        </section>
      </main>
    </>
  );
}

export function informationalStaticParams(cluster: InfoPage["cluster"]) {
  return pagesByCluster(cluster).map((page) => ({ slug: page.slug }));
}
