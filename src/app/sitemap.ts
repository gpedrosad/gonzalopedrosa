import { MetadataRoute } from "next";
import { ORGANIC_SITEMAP_ENTRIES } from "@/lib/organic-routes";
import { toCanonicalUrl } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ORGANIC_SITEMAP_ENTRIES.map((entry) => ({
    url: toCanonicalUrl(entry.route),
    lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
