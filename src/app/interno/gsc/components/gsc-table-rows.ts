import type { GscSearchAnalyticsRow } from "@/lib/gsc";
import { fmt, pct } from "./gsc-format";

export const analyticsRows = (items: GscSearchAnalyticsRow[]): string[][] =>
  items.map((row) => [
    row.keys[0] ?? "—",
    fmt(row.clicks),
    fmt(row.impressions),
    pct(row.ctr),
    row.position.toFixed(1),
  ]);
