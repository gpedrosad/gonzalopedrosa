import type { Metadata } from "next";
import Link from "next/link";

import { getAdsManageData } from "@/lib/google-ads-manage";
import { formatInternoError, isInternoDashboardAuthorized } from "@/lib/interno-auth";

import { InternoNav } from "../../components/InternoNav";
import { AdsManagePanel } from "./components/AdsManagePanel";

export const metadata: Metadata = {
  title: "Google Ads · gestión (interno)",
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

export default async function AdsManagePage({ searchParams }: PageProps) {
  const params = await searchParams;
  const key = params.key;

  if (!isInternoDashboardAuthorized(key)) {
    return (
      <main style={{ maxWidth: 480, margin: "4rem auto", padding: "0 1.5rem" }}>
        <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Acceso restringido</h1>
        <p style={{ color: "#666", lineHeight: 1.6 }}>
          Añade <code>?key=TU_SECRETO</code> a la URL.
        </p>
      </main>
    );
  }

  const q = key ? `?key=${encodeURIComponent(key)}` : "";

  try {
    const data = await getAdsManageData();

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
          Interno · Escritura en Google Ads · Usar con cuidado
        </p>

        <InternoNav current="ads-manage" keyParam={key} />

        <h1
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            marginBottom: "0.5rem",
          }}
        >
          Gestionar campaña
        </h1>

        <p style={{ color: "#666", marginBottom: "1.5rem", lineHeight: 1.6 }}>
          Cuenta <strong>{data.customerId}</strong> · {data.currency} · Cambios vía Google Ads API.
          <br />
          Actualizado: {new Date(data.generatedAt).toLocaleString("es-CL")}
        </p>

        <p style={{ fontSize: "0.8125rem", color: "#999", marginBottom: "2rem" }}>
          <Link href={`/interno/ads${q}`} style={{ color: "#666" }}>
            ← Volver al dashboard de rendimiento
          </Link>
          {" · "}
          CLI: <code>npm run google-ads:manage -- list</code>
        </p>

        <AdsManagePanel data={data} keyParam={key} />
      </main>
    );
  } catch (error) {
    return (
      <main style={{ maxWidth: 560, margin: "4rem auto", padding: "0 1.5rem" }}>
        <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>No se pudo cargar la gestión</h1>
        <p style={{ color: "#666", lineHeight: 1.6 }}>{formatInternoError(error)}</p>
      </main>
    );
  }
}
