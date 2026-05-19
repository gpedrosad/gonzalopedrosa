export const fmt = (n: number, digits = 0) =>
  n.toLocaleString("es-CL", { maximumFractionDigits: digits });

export const pct = (n: number) => `${(n * 100).toFixed(2)}%`;

/** Variación porcentual: (current − previous) / previous. */
export const deltaPct = (current: number, previous: number) => {
  if (previous === 0) return current > 0 ? "+∞" : "—";
  const change = ((current - previous) / previous) * 100;
  const sign = change > 0 ? "+" : "";
  return `${sign}${change.toFixed(1)}%`;
};
