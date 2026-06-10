import type { Metadata } from "next";
import Link from "next/link";

import { isInternoDashboardAuthorized } from "@/lib/interno-auth";

import { InternoNav } from "./components/InternoNav";

export const metadata: Metadata = {
  title: "Interno",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const dynamic = "force-dynamic";

type PageProps = {
  searchParams: Promise<{ key?: string }>;
};

const shellStyle = {
  maxWidth: 960,
  margin: "0 auto",
  padding: "3rem 1.5rem 4rem",
  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
} as const;

const cardStyle = {
  display: "block",
  padding: "1.25rem",
  backgroundColor: "#fafafa",
  borderRadius: 12,
  border: "1px solid #eaeaea",
  textDecoration: "none",
  color: "inherit",
} as const;

export default async function InternoPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const key = params.key;

  if (!isInternoDashboardAuthorized(key)) {
    return (
      <main style={{ maxWidth: 480, margin: "4rem auto", padding: "0 1.5rem" }}>
        <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Acceso restringido</h1>
        <p style={{ color: "#666", lineHeight: 1.6 }}>
          Añade <code>?key=TU_SECRETO</code> a la URL o configura un secreto en{" "}
          <code>.env.local</code>.
        </p>
      </main>
    );
  }

  const q = key ? `?key=${encodeURIComponent(key)}` : "";

  return (
    <main style={shellStyle}>
      <p
        style={{
          fontSize: "0.75rem",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "#999",
          marginBottom: "0.5rem",
        }}
      >
        Interno · No indexable
      </p>

      <InternoNav current="hub" keyParam={key} />

      <h1
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          marginBottom: "0.5rem",
        }}
      >
        Laboratorio interno
      </h1>

      <p style={{ color: "#666", marginBottom: "2rem", lineHeight: 1.6 }}>
        Paneles de rendimiento. No indexables y protegidos por clave en producción.
      </p>

      <div style={{ display: "grid", gap: "1rem" }}>
        <Link href={`/interno/gsc${q}`} style={cardStyle}>
          <p style={{ fontWeight: 700, marginBottom: "0.35rem" }}>Google Search Console</p>
          <p style={{ fontSize: "0.875rem", color: "#666", margin: 0, lineHeight: 1.55 }}>
            Orgánico: clics, impresiones, CTR, indexación, sitemaps y plan de acción.
          </p>
        </Link>

        <Link href={`/interno/ads${q}`} style={cardStyle}>
          <p style={{ fontWeight: 700, marginBottom: "0.35rem" }}>Google Ads</p>
          <p style={{ fontSize: "0.875rem", color: "#666", margin: 0, lineHeight: 1.55 }}>
            Paid: campañas, keywords, search terms, landings /ads/* vs sitelinks, negativas y CPA.
          </p>
        </Link>
      </div>

      <p style={{ fontSize: "0.8125rem", color: "#999", marginTop: "2rem" }}>
        <Link href="/" style={{ color: "#666" }}>
          ← Volver al sitio público
        </Link>
      </p>
    </main>
  );
}
