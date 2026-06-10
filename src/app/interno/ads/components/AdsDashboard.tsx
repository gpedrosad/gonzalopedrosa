import type { CSSProperties } from "react";
import Link from "next/link";

import type { AdsDashboardData } from "@/lib/google-ads";

import { InternoNav } from "../../components/InternoNav";
import { GscCard } from "../../gsc/components/GscCard";
import { GscDataTable } from "../../gsc/components/GscDataTable";
import { GscSectionTitle } from "../../gsc/components/GscSectionTitle";

import { AdsLandingRankSection } from "./AdsLandingRankSection";
import { cpaLabel, deltaPct, fmt, metricsCells, money, pct } from "./ads-format";

const shellStyle: CSSProperties = {
  maxWidth: 960,
  margin: "0 auto",
  padding: "3rem 1.5rem 4rem",
  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
};

export function AdsDashboard({
  data,
  keyParam,
}: {
  data: AdsDashboardData;
  keyParam?: string;
}) {
  const kpis = [
    {
      label: "Clics",
      value: fmt(data.summary.clicks),
      change: deltaPct(data.summary.clicks, data.previousSummary.clicks),
    },
    {
      label: "Impresiones",
      value: fmt(data.summary.impressions),
      change: deltaPct(data.summary.impressions, data.previousSummary.impressions),
    },
    {
      label: "CTR",
      value: pct(data.summary.ctr),
      change: deltaPct(data.summary.ctr, data.previousSummary.ctr),
    },
    {
      label: "Costo",
      value: money(data.summary.cost_micros, data.currency),
      change: deltaPct(data.summary.cost_micros, data.previousSummary.cost_micros),
    },
    {
      label: "CPC medio",
      value: money(data.summary.cpc * 1_000_000, data.currency),
      change: deltaPct(data.summary.cpc, data.previousSummary.cpc),
    },
    {
      label: "Conversiones",
      value: fmt(data.summary.conversions, 1),
      change: deltaPct(data.summary.conversions, data.previousSummary.conversions),
    },
    {
      label: "CPA",
      value: cpaLabel(data.summary.cpa, data.currency),
      change:
        data.summary.cpa != null && data.previousSummary.cpa != null
          ? deltaPct(data.summary.cpa, data.previousSummary.cpa)
          : "—",
    },
  ];

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
        Interno · No indexable · Solo paid
      </p>

      <InternoNav current="ads" keyParam={keyParam} />

      <h1
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          marginBottom: "0.5rem",
        }}
      >
        Google Ads · laboratorio interno
      </h1>

      <p style={{ color: "#666", marginBottom: "2rem", lineHeight: 1.6 }}>
        Cuenta <strong>{data.customerId}</strong> · Moneda <strong>{data.currency}</strong>
        <br />
        {data.period.range} vs {data.previousPeriod.range}
        <br />
        Conversión: <code>{data.conversionTag}</code>
        <br />
        Actualizado: {new Date(data.generatedAt).toLocaleString("es-CL")}
      </p>

      <section style={{ marginBottom: "2.5rem" }}>
        <GscSectionTitle>Resumen ejecutivo (paid)</GscSectionTitle>
        <GscCard>
          <p style={{ fontSize: "0.9375rem", color: "#333", lineHeight: 1.65, margin: 0 }}>
            En {data.period.days} días: <strong>{fmt(data.summary.clicks)}</strong> clics,{" "}
            <strong>{money(data.summary.cost_micros, data.currency)}</strong> de gasto y{" "}
            <strong>{fmt(data.summary.conversions, 1)}</strong> conversiones
            {data.summary.cpa != null ? (
              <>
                {" "}
                (CPA <strong>{cpaLabel(data.summary.cpa, data.currency)}</strong>)
              </>
            ) : null}
            . No incluye tráfico orgánico — para eso usa Search Console.
          </p>
        </GscCard>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "0.75rem",
            marginTop: "1rem",
          }}
        >
          {kpis.map((card) => (
            <GscCard key={card.label}>
              <p style={{ fontSize: "0.75rem", color: "#999", marginBottom: "0.25rem" }}>
                {card.label}
              </p>
              <p style={{ fontSize: "1.35rem", fontWeight: 700 }}>{card.value}</p>
              <p style={{ fontSize: "0.8125rem", color: "#666" }}>vs anterior: {card.change}</p>
            </GscCard>
          ))}
        </div>
      </section>

      <AdsLandingRankSection data={data} />

      <section style={{ marginBottom: "2.5rem" }}>
        <GscSectionTitle>Ads vs no-ads (dentro del paid)</GscSectionTitle>
        <GscCard>
          <ul style={{ margin: 0, paddingLeft: "1.25rem", color: "#444", lineHeight: 1.7 }}>
            {data.landingInsights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </GscCard>
        <div style={{ marginTop: "1rem" }}>
          <GscDataTable
            title="Buckets de landing"
            headers={["Bucket", "Clics", "Imp.", "Costo", "Conv.", "CPA", "% clics"]}
            rows={data.landingBuckets.map((b) => [
              b.label,
              fmt(b.metrics.clicks),
              fmt(b.metrics.impressions),
              money(b.metrics.cost_micros, data.currency),
              fmt(b.metrics.conversions, 1),
              cpaLabel(b.cpa, data.currency),
              `${b.clickShare.toFixed(1)}%`,
            ])}
          />
        </div>
      </section>

      <GscDataTable
        title="Campañas"
        headers={["Campaña", "Estado", "Clics", "Imp.", "CTR", "Costo", "Conv.", "CPA"]}
        rows={data.campaigns.map((row) => [
          row.name,
          row.status,
          ...metricsCells(row.metrics, data.currency, { includeCtr: true }),
          cpaLabel(row.cpa, data.currency),
        ])}
      />

      <GscDataTable
        title="Grupos de anuncios"
        headers={["Campaña", "Grupo", "Clics", "Imp.", "Costo", "Conv."]}
        rows={data.adGroups.map((row) => [
          row.campaignName,
          row.adGroupName,
          ...metricsCells(row.metrics, data.currency),
        ])}
      />

      <GscDataTable
        title="Palabras clave (puja)"
        headers={["Keyword", "Match", "Clics", "Imp.", "Costo", "Conv."]}
        rows={data.keywords.map((row) => [
          row.text,
          row.matchType,
          ...metricsCells(row.metrics, data.currency),
        ])}
      />

      <GscDataTable
        title="Términos de búsqueda reales"
        headers={["Término", "Clics", "Imp.", "Costo", "Conv."]}
        rows={data.searchTerms.map((row) => [row.term, ...metricsCells(row.metrics, data.currency)])}
      />

      <GscDataTable
        title="Desperdicio paid (gasto sin conversión)"
        headers={["Término", "Clics", "Costo"]}
        rows={data.wastedTerms.map((row) => [
          row.term,
          fmt(row.clicks),
          money(row.cost_micros, data.currency),
        ])}
      />

      <GscDataTable
        title="Landings /ads/*"
        headers={["URL", "Clics", "Imp.", "Costo", "Conv.", "CPA", "Inventario"]}
        rows={data.adsLandings.map((row) => [
          row.url,
          ...metricsCells(row.metrics, data.currency),
          cpaLabel(row.cpa, data.currency),
          row.inInventory ? "sí" : "revisar",
        ])}
      />

      <GscDataTable
        title="Paid fuera de /ads/* (sitelinks y fugas)"
        headers={["URL", "Tipo", "Clics", "Imp.", "Costo", "Conv."]}
        rows={data.nonAdsLandings.map((row) => [
          row.url,
          row.bucketLabel,
          ...metricsCells(row.metrics, data.currency),
        ])}
      />

      <GscDataTable
        title="Dispositivos"
        headers={["Dispositivo", "Clics", "Imp.", "Costo", "Conv."]}
        rows={data.devices.map((row) => [row.device, ...metricsCells(row.metrics, data.currency)])}
      />

      <GscDataTable
        title="Red de anuncios"
        headers={["Red", "Clics", "Imp.", "Costo", "Conv."]}
        rows={data.networks.map((row) => [row.network, ...metricsCells(row.metrics, data.currency)])}
      />

      <GscDataTable
        title="Serie diaria"
        headers={["Fecha", "Clics", "Imp.", "Costo", "Conv."]}
        rows={data.daily.map((row) => [
          row.date,
          fmt(row.clicks),
          fmt(row.impressions),
          money(row.cost_micros, data.currency),
          fmt(row.conversions, 1),
        ])}
      />

      <section style={{ marginBottom: "2.5rem" }}>
        <GscSectionTitle>Negativas y propuestas</GscSectionTitle>
        <GscCard>
          <p style={{ margin: "0 0 0.75rem", color: "#333", lineHeight: 1.6 }}>
            Negativas configuradas: <strong>{data.negatives.campaignCount}</strong> a nivel campaña,{" "}
            <strong>{data.negatives.adGroupCount}</strong> a nivel grupo (
            <strong>{data.negatives.uniqueTerms}</strong> términos únicos).
          </p>
          {data.proposedNegatives.length > 0 ? (
            <>
              <p style={{ fontSize: "0.875rem", color: "#666", marginBottom: "0.5rem" }}>
                Sugeridas para agregar ({data.proposedNegatives.length}):
              </p>
              <p style={{ fontSize: "0.8125rem", color: "#444", lineHeight: 1.6, margin: 0 }}>
                {data.proposedNegatives.join(" · ")}
              </p>
            </>
          ) : (
            <p style={{ fontSize: "0.875rem", color: "#666", margin: 0 }}>
              Sin nuevas negativas sugeridas en este corte.
            </p>
          )}
          <p style={{ fontSize: "0.8125rem", color: "#999", marginTop: "0.75rem", marginBottom: 0 }}>
            CLI: <code>npm run google-ads:negatives -- propose</code> ·{" "}
            <code>npm run google-ads:negatives -- apply --apply</code>
          </p>
        </GscCard>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <GscSectionTitle>Acciones recomendadas</GscSectionTitle>
        <GscCard>
          <ol style={{ margin: 0, paddingLeft: "1.25rem", color: "#444", lineHeight: 1.75 }}>
            {data.actions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </GscCard>
      </section>

      <p style={{ fontSize: "0.8125rem", color: "#999" }}>
        <Link href="/" style={{ color: "#666" }}>
          ← Volver al sitio público
        </Link>
        {" · "}
        Datos vía Google Ads API (GAQL). Regenerar informe markdown:{" "}
        <code>npm run google-ads:informe</code>
      </p>
    </main>
  );
}
