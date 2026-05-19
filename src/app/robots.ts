import { MetadataRoute } from "next";
import { toCanonicalUrl } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/interno/"],
    },
    sitemap: toCanonicalUrl("/sitemap.xml"),
  };
}
