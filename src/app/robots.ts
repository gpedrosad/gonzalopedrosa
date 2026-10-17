import { MetadataRoute } from "next";
import { toCanonicalUrl } from "@/lib/site-config";

const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "PerplexityBot",
  "ClaudeBot",
  "anthropic-ai",
  "Google-Extended",
  "Bingbot",
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/interno", "/api/"],
      },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/interno", "/api/"],
      })),
    ],
    sitemap: toCanonicalUrl("/sitemap.xml"),
  };
}
