import type { Metadata } from "next";
import { toCanonicalUrl } from "@/lib/site-config";
import type { Guide } from "../_content/guides";

export function questionMetadata(guide: Pick<Guide, "path" | "title" | "description">): Metadata {
  const url = toCanonicalUrl(guide.path);

  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: guide.title,
      description: guide.description,
      siteName: "Gonzalo Pedrosa - Psicólogo",
      locale: "es_CL",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "Gonzalo Pedrosa - Psicólogo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
      images: ["/og.png"],
    },
    robots: { index: true, follow: true },
  };
}
