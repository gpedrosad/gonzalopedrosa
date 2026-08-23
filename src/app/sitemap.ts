import { MetadataRoute } from "next";
import { ORGANIC_SITEMAP_ENTRIES } from "@/lib/organic-routes";
import { CONTENT_LASTMOD, toCanonicalUrl } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return ORGANIC_SITEMAP_ENTRIES.map((entry) => ({
    url: toCanonicalUrl(entry.route),
    lastModified: new Date(CONTENT_LASTMOD),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
