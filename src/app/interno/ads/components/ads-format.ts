import type { AdsMetrics } from "@/lib/google-ads";

export const fmt = (n: number, digits = 0) =>
  n.toLocaleString("es-CL", { maximumFractionDigits: digits });

export const pct = (n: number) => `${(n * 100).toFixed(2)}%`;

export const deltaPct = (current: number, previous: number) => {
  if (previous === 0) return current > 0 ? "+∞" : "—";
  const change = ((current - previous) / previous) * 100;
  const sign = change > 0 ? "+" : "";
  return `${sign}${change.toFixed(1)}%`;
};

export const money = (micros: number, currency: string) => {
  const value = micros / 1_000_000;
  return value.toLocaleString("es-CL", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  });
};

export const cpaLabel = (cpa: number | null, currency: string) =>
  cpa != null ? money(cpa * 1_000_000, currency) : "n/d";

export const metricsCells = (
  m: AdsMetrics,
  currency: string,
  opts?: { includeCtr?: boolean },
) => {
  const cells = [
    fmt(m.clicks),
    fmt(m.impressions),
    ...(opts?.includeCtr && m.ctr != null ? [pct(m.ctr)] : []),
    money(m.cost_micros, currency),
    fmt(m.conversions, 1),
  ];
  return cells;
};
