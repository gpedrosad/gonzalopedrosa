import { readFileSync, readdirSync } from "fs";
import path from "path";

const DEFAULT_EXCLUDED_PREFIXES = ["/ads/", "/interno/", "/links/", "/sitelink/"];

const normalizePath = (pathname) => {
  if (!pathname || pathname === "/") return "/";
  const withSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return withSlash.endsWith("/") ? withSlash.slice(0, -1) : withSlash;
};

export const loadExcludedPrefixes = (projectRoot) => {
  const source = readFileSync(path.join(projectRoot, "src/lib/organic-routes.ts"), "utf8");
  const blockMatch = source.match(/ORGANIC_EXCLUDED_PREFIXES\s*=\s*\[([\s\S]*?)\]\s*as const/);
  if (!blockMatch?.[1]) return DEFAULT_EXCLUDED_PREFIXES;
  const prefixes = [...blockMatch[1].matchAll(/"([^"]+)"/g)].map((match) => match[1]);
  return prefixes.length > 0 ? prefixes : DEFAULT_EXCLUDED_PREFIXES;
};

export const isExcludedRoute = (route, prefixes) => {
  const normalized = normalizePath(route);
  return prefixes.some((prefix) => {
    const segment = prefix.endsWith("/") ? prefix.slice(0, -1) : prefix;
    return normalized === segment || normalized.startsWith(prefix);
  });
};

/** Orígenes de redirect permanente en next.config, sin patrones con `:`. */
export const loadRedirectSources = (projectRoot) => {
  const source = readFileSync(path.join(projectRoot, "next.config.ts"), "utf8");
  const sources = new Set();
  for (const match of source.matchAll(/source:\s*"([^"]+)"/g)) {
    if (match[1].includes(":")) continue;
    sources.add(normalizePath(match[1]));
  }
  return sources;
};

const routeFromPageDir = (appDir, pageDir) => {
  const relative = path.relative(appDir, pageDir);
  if (!relative || relative === "") return "/";
  const segments = relative
    .split(path.sep)
    .filter((segment) => segment && !segment.startsWith("(") && !segment.startsWith("@") && !segment.startsWith("_"));
  if (segments.length === 0) return "/";
  if (segments.some((segment) => segment.includes("["))) return null;
  return `/${segments.join("/")}`;
};

const canonicalPathFromSource = (source) => {
  const match = source.match(/canonical:\s*(?:"([^"]+)"|'([^']+)'|`([^`$]+)`)/);
  const raw = match?.[1] ?? match?.[2] ?? match?.[3];
  if (!raw) return null;
  if (raw.startsWith("http://") || raw.startsWith("https://")) {
    try {
      return normalizePath(new URL(raw).pathname);
    } catch {
      return null;
    }
  }
  if (!raw.startsWith("/")) return null;
  return normalizePath(raw);
};

const isNoindexSource = (source) => /robots:\s*\{[^}]*index:\s*false/.test(source);

/**
 * Rutas orgánicas indexables según el árbol de `src/app`.
 * Incluye páginas nuevas (por ejemplo /guias y /preguntas) sin editar una lista a mano.
 * Omite ads, interno, links, sitelink, redirects y canónicos que apuntan a otra URL.
 */
export const discoverIndexableRoutes = (projectRoot) => {
  const appDir = path.join(projectRoot, "src/app");
  const prefixes = loadExcludedPrefixes(projectRoot);
  const redirects = loadRedirectSources(projectRoot);
  const routes = [];

  const walk = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith("_") || entry.name.startsWith(".")) continue;
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name.includes("[")) continue;
        walk(fullPath);
        continue;
      }
      if (!/^page\.(tsx|ts|jsx|js)$/.test(entry.name)) continue;

      const route = routeFromPageDir(appDir, dir);
      if (!route || isExcludedRoute(route, prefixes) || redirects.has(route)) continue;

      const source = readFileSync(fullPath, "utf8");
      if (isNoindexSource(source)) continue;
      const canonical = canonicalPathFromSource(source);
      if (canonical && canonical !== route) continue;
      routes.push(route);
    }
  };

  walk(appDir);

  const infoSource = readFileSync(
    path.join(projectRoot, "src/lib/informational-content.ts"),
    "utf8",
  );
  for (const match of infoSource.matchAll(
    /cluster:\s*"(guias|preguntas)"\s*,\s*slug:\s*"([^"]+)"/g,
  )) {
    const route = `/${match[1]}/${match[2]}`;
    if (routes.includes(route) || isExcludedRoute(route, prefixes) || redirects.has(route)) continue;
    routes.push(route);
  }

  return routes;
};
