import type { CSSProperties } from "react";
import Link from "next/link";

import type { GscDashboardData } from "@/lib/gsc";

import { InternoNav } from "../../components/InternoNav";

import { GscCtrSection } from "./GscCtrSection";
import { GscExecutiveSummary } from "./GscExecutiveSummary";
import { GscIndexingSection } from "./GscIndexingSection";
import { GscInsightsSection } from "./GscInsightsSection";
import { GscMethodologySection } from "./GscMethodologySection";
import { GscPerformanceSection } from "./GscPerformanceSection";
import { GscPropertiesAndActionPlan } from "./GscPropertiesAndActionPlan";
import { GscSitemapsDetailSection } from "./GscSitemapsDetailSection";
import { GscUrlInspectionSection } from "./GscUrlInspectionSection";

const shellStyle: CSSProperties = {
  maxWidth: 960,
  margin: "0 auto",
  padding: "3rem 1.5rem 4rem",
  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
};

export function GscDashboard({
  data,
  keyParam,
}: {
  data: GscDashboardData;
  keyParam?: string;
}) {
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

      <InternoNav current="gsc" keyParam={keyParam} />

      <h1
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          marginBottom: "0.5rem",
        }}
      >
        Google Search Console · laboratorio interno
      </h1>

      <p style={{ color: "#666", marginBottom: "2rem", lineHeight: 1.6 }}>
        <strong>{data.siteUrl}</strong>
        <br />
        Período: {data.period.start} → {data.period.end} ({data.period.days} días)
        <br />
        Comparado con: {data.previousPeriod.start} → {data.previousPeriod.end}
        <br />
        Actualizado: {new Date(data.generatedAt).toLocaleString("es-CL")}
      </p>

      <GscMethodologySection />
      <GscExecutiveSummary data={data} />
      <GscInsightsSection insights={data.insights} />
      <GscCtrSection data={data} />
      <GscPerformanceSection data={data} />
      <GscIndexingSection />
      <GscUrlInspectionSection data={data} />
      <GscSitemapsDetailSection data={data} />
      <GscPropertiesAndActionPlan data={data} />

      <p style={{ fontSize: "0.8125rem", color: "#999" }}>
        <Link href="/" style={{ color: "#666" }}>
          ← Volver al sitio público
        </Link>
        {" · "}
        Los datos llegan mediante Search Console API (no reemplazan la auditoría dentro de console.google.com).
        Esta URL interna lleva meta <code style={{ fontSize: "0.76rem" }}>noindex</code> configurada desde metadatos.
      </p>
    </main>
  );
}
