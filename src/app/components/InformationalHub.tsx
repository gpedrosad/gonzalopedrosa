import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import { JsonLd } from "@/app/components/JsonLd";
import { OrganicPortrait } from "@/app/components/OrganicPortrait";
import {
  GUIDE_HUB,
  informationalPath,
  OG_IMAGE,
  pagesByCluster,
  QUESTION_HUB,
  type InfoPage,
} from "@/lib/informational-content";
import { getBreadcrumbSchema, getTwitterDescription, getWebPageSchema } from "@/lib/schemas";

const pageStyle = {
  maxWidth: 680,
  margin: "0 auto",
  padding: "3rem 1.5rem 4rem",
  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  color: "#1a1a1a",
  lineHeight: 1.65,
} as const;

const HUBS = {
  guias: GUIDE_HUB,
  preguntas: QUESTION_HUB,
} as const;

export function informationalHubMetadata(cluster: InfoPage["cluster"]): Metadata {
  const hub = HUBS[cluster];
  return {
    title: hub.title,
    description: hub.description,
    alternates: { canonical: hub.path },
    openGraph: {
      title: hub.title,
      description: hub.description,
      url: `https://www.gonzalopedrosa.cl${hub.path}`,
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: hub.title,
      description: getTwitterDescription(hub.description),
      images: [OG_IMAGE.url],
    },
  };
}

export function InformationalHub({ cluster }: { cluster: InfoPage["cluster"] }) {
  const hub = HUBS[cluster];
  const pages = pagesByCluster(cluster);
  const other = cluster === "guias" ? QUESTION_HUB : GUIDE_HUB;
  const breadcrumbItems = [
    { label: "Inicio", href: "/" },
    { label: hub.h1 },
  ];

  return (
    <>
      <JsonLd
        id="webpage-schema"
        data={
          getWebPageSchema({
            name: hub.h1,
            description: hub.description,
            path: hub.path,
          }) as Record<string, unknown>
        }
      />
      <JsonLd id="breadcrumb-schema" data={getBreadcrumbSchema(breadcrumbItems) as Record<string, unknown>} />
      <main style={pageStyle}>
        <Breadcrumb items={breadcrumbItems} />
        <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", margin: "1.25rem 0 1.5rem" }}>
          <OrganicPortrait />
          <p style={{ margin: 0, color: "#444" }}>
            Gonzalo Pedrosa, psicólogo clínico. Textos para entender un tema. El recurso práctico del sitio es el
            ejercicio de EMDR autoadministrado.
          </p>
        </div>
        <h1 style={{ fontSize: "2rem", lineHeight: 1.2, letterSpacing: "-0.03em" }}>{hub.h1}</h1>
        <p>{hub.description}</p>
        {cluster === "guias" ? (
          <p>
            Cada guía responde una duda que el sitio no tenía como artículo: la diferencia entre profesiones, el
            estrés y la ansiedad, la TCC, el EMDR, el apego, el burnout, el sueño, la comida emocional y la
            regulación. No son fichas de venta de horas.
          </p>
        ) : (
          <p>
            Cada respuesta parte por la frase que resuelve la pregunta y después muestra los matices: pánico, ERP,
            el ejercicio de EMDR, burnout, apego ansioso, duelo, rumiación y límites. Si el tema te deja en riesgo,
            la propia página indica el *4141.
          </p>
        )}
        <p>
          <Link href="/emdr-autoadministrado">Ejercicio gratuito de estimulación bilateral</Link>
          {" · "}
          <Link href={other.path}>{other.h1}</Link>
        </p>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {pages.map((page) => (
            <li key={page.slug} style={{ borderTop: "1px solid #eee", padding: "1rem 0" }}>
              <Link href={informationalPath(page)} style={{ fontWeight: 650, fontSize: "1.05rem" }}>
                {page.h1}
              </Link>
              <p style={{ margin: "0.35rem 0 0", color: "#444" }}>{page.answer.slice(0, 180)}…</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
