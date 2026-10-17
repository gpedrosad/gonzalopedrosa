import { MetadataRoute } from "next";
import { discoverIndexableRoutes } from "@/lib/discover-organic-routes";
import { ORGANIC_SITEMAP_ENTRIES, type OrganicSitemapEntry } from "@/lib/organic-routes";
import { CONTENT_LASTMOD, toCanonicalUrl } from "@/lib/site-config";

const defaultEntry = (route: string): OrganicSitemapEntry => ({
  route,
  changeFrequency: "monthly",
  priority: route.startsWith("/guias") || route.startsWith("/preguntas") ? 0.7 : 0.6,
  lastModified: CONTENT_LASTMOD,
});

export default function sitemap(): MetadataRoute.Sitemap {
  const discovered = new Set(discoverIndexableRoutes(process.cwd()));
  const known = ORGANIC_SITEMAP_ENTRIES.filter((entry) => discovered.has(entry.route));
  const knownRoutes = new Set(known.map((entry) => entry.route));
  const extras = [...discovered]
    .filter((route) => !knownRoutes.has(route))
    .sort((a, b) => a.localeCompare(b, "es"))
    .map(defaultEntry);

  return [...known, ...extras].map((entry) => ({
    url: toCanonicalUrl(entry.route),
    lastModified: new Date(entry.lastModified ?? CONTENT_LASTMOD),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
