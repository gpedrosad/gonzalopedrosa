import type { Metadata } from "next";

import { getAdsDashboardData } from "@/lib/google-ads";
import { formatInternoError, isInternoDashboardAuthorized } from "@/lib/interno-auth";

import { AdsDashboard } from "./components/AdsDashboard";

export const metadata: Metadata = {
  title: "Google Ads (interno)",
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

export default async function AdsDashboardPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const key = params.key;

  if (!isInternoDashboardAuthorized(key)) {
    return (
      <main style={{ maxWidth: 480, margin: "4rem auto", padding: "0 1.5rem" }}>
        <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Acceso restringido</h1>
        <p style={{ color: "#666", lineHeight: 1.6 }}>
          Añade <code>?key=TU_SECRETO</code> a la URL o configura{" "}
          <code>GSC_DASHBOARD_SECRET</code> / <code>INTERNO_DASHBOARD_SECRET</code> en{" "}
          <code>.env.local</code>.
        </p>
      </main>
    );
  }

  try {
    const data = await getAdsDashboardData();
    return <AdsDashboard data={data} keyParam={key} />;
  } catch (error) {
    const message = formatInternoError(error);
    return (
      <main style={{ maxWidth: 560, margin: "4rem auto", padding: "0 1.5rem" }}>
        <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
          No se pudo cargar Google Ads
        </h1>
        <p style={{ color: "#666", lineHeight: 1.6, marginBottom: "1rem" }}>{message}</p>
        <p style={{ fontSize: "0.875rem", color: "#999" }}>
          En local: <code>npm run google-ads:auth</code> y revisa <code>GOOGLE_ADS_*</code> en{" "}
          <code>.env.local</code>.
        </p>
      </main>
    );
  }
}
