#!/usr/bin/env node

const DEFAULT_BASE_URL = "https://gonzalopedrosa.cl";
const REDIRECT_CODES = new Set([301, 302, 307, 308]);
const MAX_REDIRECT_HOPS = 5;

const baseUrl = new URL(process.env.SEO_AUDIT_BASE_URL ?? DEFAULT_BASE_URL);
const expectedHost = baseUrl.host;

const routes = (
  process.env.SEO_AUDIT_ROUTES ??
  "/,/agendar,/psicologo-ansiedad-chillan,/emdr-autoadministrado,/emdr-autoadministrado/ejercicio"
)
  .split(",")
  .map((route) => route.trim())
  .filter(Boolean);

const errors = [];

const normalizeCanonicalPath = (pathname) => {
  if (pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
};

const followRedirects = async (route) => {
  const hops = [];
  let currentUrl = new URL(route, baseUrl).toString();

  for (let i = 0; i < MAX_REDIRECT_HOPS; i += 1) {
    const response = await fetch(currentUrl, {
      redirect: "manual",
      headers: {
        "user-agent": "seo-audit-script/1.0",
      },
    });

    if (!REDIRECT_CODES.has(response.status)) {
      return { hops, finalUrl: currentUrl, response };
    }

    const location = response.headers.get("location");
    if (!location) {
      throw new Error(`Redirect sin header Location en ${currentUrl}`);
    }

    const nextUrl = new URL(location, currentUrl).toString();
    hops.push({ from: currentUrl, status: response.status, to: nextUrl });
    currentUrl = nextUrl;
  }

  throw new Error(`Más de ${MAX_REDIRECT_HOPS} redirects en ${route}`);
};

const extractCanonical = async (response) => {
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("text/html")) return null;

  const html = await response.text();
  const canonicalMatch = html.match(
    /<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i,
  );

  if (!canonicalMatch?.[1]) return null;
  return canonicalMatch[1];
};

const ensureCanonicalForRoute = async (route) => {
  const errorsBefore = errors.length;
  const result = await followRedirects(route);
  const finalUrl = new URL(result.finalUrl);

  if (result.hops.length > 1) {
    errors.push(`✗ ${route}: más de 1 salto (${result.hops.length})`);
  }

  if (result.response.status !== 200) {
    errors.push(`✗ ${route}: status final ${result.response.status} (esperado 200)`);
    return;
  }

  const canonicalHref = await extractCanonical(result.response);
  if (!canonicalHref) {
    errors.push(`✗ ${route}: no se encontró link canonical`);
    return;
  }

  const canonicalUrl = new URL(canonicalHref, finalUrl.toString());
  const normalizedCanonicalPath = normalizeCanonicalPath(canonicalUrl.pathname);
  const normalizedFinalPath = normalizeCanonicalPath(finalUrl.pathname);

  if (canonicalUrl.protocol !== "https:") {
    errors.push(`✗ ${route}: canonical no es https (${canonicalUrl.toString()})`);
  }

  if (canonicalUrl.host !== expectedHost) {
    errors.push(`✗ ${route}: canonical host inválido (${canonicalUrl.host})`);
  }

  if (normalizedCanonicalPath !== normalizedFinalPath) {
    errors.push(
      `✗ ${route}: canonical path ${normalizedCanonicalPath} no coincide con final ${normalizedFinalPath}`,
    );
  }

  if (errors.length === errorsBefore) {
    const hopsLabel = result.hops.length === 0 ? "0 saltos" : `${result.hops.length} salto`;
    console.log(`✓ ${route}: 200, canonical ok, ${hopsLabel}`);
  }
};

const checkRobots = async () => {
  const robotsUrl = new URL("/robots.txt", baseUrl);
  const response = await fetch(robotsUrl);
  const body = await response.text();

  if (response.status !== 200) {
    errors.push(`✗ robots.txt status ${response.status}`);
    return;
  }

  const expectedSitemap = `Sitemap: ${new URL("/sitemap.xml", baseUrl).toString()}`;
  if (!body.includes(expectedSitemap)) {
    errors.push(`✗ robots.txt no contiene "${expectedSitemap}"`);
    return;
  }

  console.log("✓ robots.txt: status 200 y Sitemap correcto");
};

const checkSitemap = async () => {
  const sitemapUrl = new URL("/sitemap.xml", baseUrl);
  const response = await fetch(sitemapUrl);
  const xml = await response.text();

  if (response.status !== 200) {
    errors.push(`✗ sitemap.xml status ${response.status}`);
    return;
  }

  const locMatches = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  if (locMatches.length === 0) {
    errors.push("✗ sitemap.xml no contiene URLs");
    return;
  }

  const invalidLoc = locMatches.find((loc) => {
    const url = new URL(loc);
    const normalizedPath = normalizeCanonicalPath(url.pathname);
    return (
      url.protocol !== "https:" ||
      url.host !== expectedHost ||
      normalizedPath !== url.pathname
    );
  });

  if (invalidLoc) {
    errors.push(`✗ sitemap.xml contiene URL no canónica: ${invalidLoc}`);
    return;
  }

  console.log(`✓ sitemap.xml: status 200 y ${locMatches.length} URLs canónicas`);
};

const main = async () => {
  console.log(`Auditando SEO técnico en ${baseUrl.toString()}`);

  for (const route of routes) {
    await ensureCanonicalForRoute(route);
  }

  await checkRobots();
  await checkSitemap();

  if (errors.length > 0) {
    console.error("\nErrores detectados:");
    for (const error of errors) {
      console.error(`- ${error}`);
    }
    process.exitCode = 1;
    return;
  }

  console.log("\nTodo bien: redirects, canonical, robots y sitemap están consistentes.");
};

main().catch((error) => {
  console.error(`Error ejecutando auditoría: ${error instanceof Error ? error.message : String(error)}`);
  process.exitCode = 1;
});
