import type { ReactNode } from "react";
import Link from "next/link";
import { JsonLd } from "@/app/components/JsonLd";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import { getArticleSchema, getBreadcrumbSchema, getPageFAQSchema } from "@/lib/schemas";
import type { Guide } from "../_content/guides";

const LINK_RE = /\[([^\]]+)\]\((\/[^)\s]+)\)/g;

function RichText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  const re = new RegExp(LINK_RE);
  let last = 0;
  let match: RegExpExecArray | null;

  while ((match = re.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    const label = match[1];
    const href = match[2];
    const blocked = href.startsWith("//") || href.startsWith("/ads") || href.startsWith("/sitelink");
    if (blocked) {
      nodes.push(label);
    } else {
      nodes.push(
        <Link key={`${href}-${match.index}`} href={href} style={{ color: "#111", textDecoration: "underline" }}>
          {label}
        </Link>,
      );
    }
    last = match.index + match[0].length;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes}</>;
}

const mainStyle = {
  maxWidth: 680,
  margin: "0 auto",
  padding: "2.5rem 1.25rem 4rem",
  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  color: "#1c1c1c",
} as const;

const pStyle = {
  fontSize: "1.0625rem",
  lineHeight: 1.75,
  color: "#333",
  margin: "0 0 1rem",
} as const;

const h2Style = {
  fontSize: "1.35rem",
  fontWeight: 650,
  letterSpacing: "-0.02em",
  lineHeight: 1.3,
  margin: "2.25rem 0 0.75rem",
} as const;

export function QuestionGuide({ guide }: { guide: Guide }) {
  const parent = guide.crumbParent ?? { label: "Preguntas", href: "/preguntas" };
  const breadcrumbItems = [
    { label: "Inicio", href: "/" },
    { label: parent.label, href: parent.href },
    { label: guide.breadcrumbLabel },
  ];

  return (
    <>
      <JsonLd id="breadcrumb" data={getBreadcrumbSchema(breadcrumbItems) as Record<string, unknown>} />
      {guide.updated ? (
        <JsonLd
          id="article"
          data={
            getArticleSchema({
              headline: guide.h1,
              description: guide.description,
              path: guide.path,
              datePublished: guide.updated,
              dateModified: guide.updated,
            }) as Record<string, unknown>
          }
        />
      ) : null}
      <JsonLd
        id="faq-schema"
        data={
          getPageFAQSchema([{ question: guide.h1, answer: guide.lead }, ...guide.faqs]) as Record<
            string,
            unknown
          >
        }
      />
      <main style={mainStyle}>
        <Breadcrumb items={breadcrumbItems} />
        <article>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#888",
              margin: "0 0 0.75rem",
            }}
          >
            Guía informativa
          </p>
          <h1
            style={{
              fontSize: "clamp(1.8rem, 7vw, 2.4rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              margin: "0 0 1rem",
            }}
          >
            {guide.h1}
          </h1>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.7,
              color: "#222",
              margin: "0 0 1.5rem",
            }}
          >
            {guide.lead}
          </p>

          {guide.sections.map((section) => (
            <section key={section.heading}>
              <h2 style={h2Style}>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} style={pStyle}>
                  <RichText text={paragraph} />
                </p>
              ))}
              {section.bullets ? (
                <ul style={{ margin: "0 0 1rem", paddingLeft: "1.2rem", color: "#333" }}>
                  {section.bullets.map((bullet) => (
                    <li key={bullet} style={{ marginBottom: "0.45rem", lineHeight: 1.6 }}>
                      <RichText text={bullet} />
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          <h2 style={h2Style}>Páginas relacionadas</h2>
          <ul style={{ margin: "0 0 1rem", paddingLeft: "1.2rem" }}>
            {guide.related.map((link) => (
              <li key={link.href} style={{ marginBottom: "0.45rem", lineHeight: 1.6 }}>
                <Link href={link.href} style={{ color: "#111", textDecoration: "underline" }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {guide.sources && guide.sources.length > 0 ? (
            <>
              <h2 style={h2Style}>Fuentes</h2>
              <ul style={{ margin: "0 0 1rem", paddingLeft: "1.2rem" }}>
                {guide.sources.map((source) => (
                  <li key={source.href} style={{ marginBottom: "0.45rem", lineHeight: 1.6 }}>
                    <a href={source.href} rel="noopener noreferrer" style={{ color: "#111" }}>
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
              <p style={pStyle}>
                La fuente está para que leas el estudio. Esta página no convierte sus resultados en un porcentaje
                para ti.
              </p>
            </>
          ) : null}

          <h2 style={h2Style}>Otras dudas frecuentes</h2>
          <div>
            {guide.faqs.map((faq) => (
              <details key={faq.question} style={{ borderTop: "1px solid #eee", padding: "0.85rem 0" }}>
                <summary style={{ cursor: "pointer", fontWeight: 600, lineHeight: 1.45 }}>{faq.question}</summary>
                <p style={{ ...pStyle, marginTop: "0.75rem" }}>{faq.answer}</p>
              </details>
            ))}
          </div>

          <p style={{ ...pStyle, marginTop: "2rem", fontSize: "0.95rem", color: "#444" }}>
            Esta página es información general para orientar tu lectura. No reemplaza una evaluación con un
            profesional de salud y no describe casos ni resultados de personas atendidas por{" "}
            <Link href="/perfil" style={{ color: "#111", textDecoration: "underline" }}>
              Gonzalo Pedrosa, psicólogo clínico en Chillán
            </Link>
            . Si tú o alguien cercano está en riesgo, llama al 131, a Salud Responde (600 360 7777) o al Fono
            de la Esperanza (717 200 200).
          </p>
        </article>
      </main>
    </>
  );
}
