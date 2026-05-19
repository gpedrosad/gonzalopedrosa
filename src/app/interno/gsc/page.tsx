import type { Metadata } from "next";

import { getGscDashboardData, isGscDashboardAuthorized } from "@/lib/gsc";

import { GscDashboard } from "./components/GscDashboard";

export const metadata: Metadata = {
  title: "Search Console (interno)",
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

export default async function GscDashboardPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const key = params.key;

  if (!isGscDashboardAuthorized(key)) {
    return (
      <main style={{ maxWidth: 480, margin: "4rem auto", padding: "0 1.5rem" }}>
        <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Acceso restringido</h1>
        <p style={{ color: "#666", lineHeight: 1.6 }}>
          Añade <code>?key=TU_SECRETO</code> a la URL o configura{" "}
          <code>GSC_DASHBOARD_SECRET</code> en <code>.env.local</code>.
        </p>
      </main>
    );
  }

  try {
    const data = await getGscDashboardData();
    return <GscDashboard data={data} />;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Error desconocido";
    return (
      <main style={{ maxWidth: 560, margin: "4rem auto", padding: "0 1.5rem" }}>
        <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
          No se pudo cargar Search Console
        </h1>
        <p style={{ color: "#666", lineHeight: 1.6, marginBottom: "1rem" }}>{message}</p>
        <p style={{ fontSize: "0.875rem", color: "#999" }}>
          En local: <code>npm run gsc:auth</code> y revisa <code>GSC_SITE_URL</code> en{" "}
          <code>.env.local</code>.
        </p>
      </main>
    );
  }
}
