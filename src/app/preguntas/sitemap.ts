import type { MetadataRoute } from "next";
import { guides } from "./_content/guides";
import { toCanonicalUrl } from "@/lib/site-config";

const PUBLISHED = new Date("2026-10-17");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: toCanonicalUrl("/preguntas"),
      lastModified: PUBLISHED,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...guides.map((guide) => ({
      url: toCanonicalUrl(guide.path),
      lastModified: PUBLISHED,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
