import { unitsToMicros } from "./google-ads-client";

export { formatMoneyInput } from "./google-ads-manage-types";

export const parseMoneyInput = (value: string, currency: string): number => {
  const normalized = value.replace(/[^\d.,-]/g, "").replace(",", ".");
  const units = Number.parseFloat(normalized);
  if (!Number.isFinite(units) || units <= 0) {
    throw new Error(`Importe inválido (${currency}).`);
  }
  return unitsToMicros(units);
};
