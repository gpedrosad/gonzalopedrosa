export const CANONICAL_ORIGIN = "https://gonzalopedrosa.cl";
export const CANONICAL_HOST = new URL(CANONICAL_ORIGIN).host;
export const TRAILING_SLASH = false;

export const toCanonicalUrl = (path: string): string => {
  if (!path || path === "/") {
    return CANONICAL_ORIGIN;
  }

  return `${CANONICAL_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
};
