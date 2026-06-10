type GoogleAdsFailure = {
  errors?: Array<{ message?: string }>;
  message?: string;
};

/** Extrae mensaje legible de errores de Google Ads API (no son instancias de Error). */
export const formatInternoError = (error: unknown): string => {
  if (error instanceof Error && error.message) return error.message;
  const ads = error as GoogleAdsFailure;
  if (ads?.errors?.[0]?.message) return ads.errors[0].message;
  if (typeof ads?.message === "string" && ads.message) return ads.message;
  try {
    return JSON.stringify(error);
  } catch {
    return "Error desconocido";
  }
};

/** Auth compartida para paneles en /interno/* */
export const isInternoDashboardAuthorized = (key: string | null | undefined) => {
  const secret =
    process.env.INTERNO_DASHBOARD_SECRET ??
    process.env.GSC_DASHBOARD_SECRET ??
    process.env.ADS_DASHBOARD_SECRET;
  if (!secret) return true;
  return key === secret;
};
