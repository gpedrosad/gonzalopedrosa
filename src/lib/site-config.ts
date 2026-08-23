export const CANONICAL_ORIGIN = "https://www.gonzalopedrosa.cl";
export const CANONICAL_HOST = new URL(CANONICAL_ORIGIN).host;
export const TRAILING_SLASH = false;

/** Cifras únicas para copy y schema. No inventar universidad, registro ni pacientes. */
export const CLINICAL_STATS = {
  yearsExperience: 7,
  ratingValue: "4.8",
  reviewCount: 124,
  experienceCount: 281,
  sessionPriceClp: 35000,
  sessionMinutes: 50,
} as const;

export const CONTENT_LASTMOD = "2026-08-23";

export const toCanonicalUrl = (path: string): string => {
  if (!path || path === "/") {
    return CANONICAL_ORIGIN;
  }

  return `${CANONICAL_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
};
