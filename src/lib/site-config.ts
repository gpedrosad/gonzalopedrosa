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

/** Registro Nacional de Prestadores Individuales de Salud (Superintendencia). */
export const HEALTH_PROVIDER_REGISTRY = "504978";
export const HEALTH_PROVIDER_REGISTRY_NAME =
  "Registro Nacional de Prestadores de Salud";
export const HEALTH_PROVIDER_REGISTRY_LABEL = `${HEALTH_PROVIDER_REGISTRY_NAME} N.° ${HEALTH_PROVIDER_REGISTRY}`;
export const HEALTH_PROVIDER_REGISTRY_URL = "https://rnpi.superdesalud.gob.cl/";

export const healthProviderIdentifierSchema = {
  "@type": "PropertyValue",
  name: HEALTH_PROVIDER_REGISTRY_NAME,
  value: HEALTH_PROVIDER_REGISTRY,
} as const;

export const CONTENT_LASTMOD = "2026-08-23";

export const toCanonicalUrl = (path: string): string => {
  if (!path || path === "/") {
    return CANONICAL_ORIGIN;
  }

  return `${CANONICAL_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
};
