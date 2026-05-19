/**
 * Helpers SEO para landings orgánicas (Paso 6+).
 * No importar desde `src/app/ads/**`.
 */

import type { BreadcrumbItem } from "@/lib/schemas";

/** Enlaces transaccionales "Online" → landing orgánica de psicólogo online. */
export const ORGANIC_ONLINE_TRANSACTIONAL_HREF = "/psicologo-online-chillan";

export function slugToBreadcrumbLabel(slug: string): string {
  const withoutSuffix = slug.replace(/-chillan$/, "");
  const words = withoutSuffix.split("-").filter(Boolean);
  const titled = words.map((w) => {
    const lower = w.toLowerCase();
    const map: Record<string, string> = {
      psicologo: "Psicólogo",
      terapia: "Terapia",
      tratamiento: "Tratamiento",
      online: "Online",
      tcc: "TCC",
      toc: "TOC",
      tlp: "TLP",
      emdr: "EMDR",
      tdah: "TDAH",
      isapre: "Isapre",
      compin: "COMPIN",
    };
    return map[lower] ?? lower.charAt(0).toUpperCase() + lower.slice(1);
  });
  return `${titled.join(" ")} Chillán`;
}

export function slugToServiceType(slug: string): string {
  const label = slugToBreadcrumbLabel(slug).replace(/ Chillán$/, "");
  if (slug.startsWith("tratamiento-")) return label;
  if (slug.startsWith("terapia-")) return label;
  if (slug.startsWith("psicologo-")) return label.replace(/^Psicólogo /, "Psicología ");
  return label;
}

export function buildOrganicBreadcrumb(slug: string): BreadcrumbItem[] {
  return [{ label: "Inicio", href: "/" }, { label: slugToBreadcrumbLabel(slug) }];
}

export function defaultServiceDescription(slug: string, metaDescription?: string): string {
  if (metaDescription && metaDescription.length <= 200) {
    return metaDescription;
  }
  return `Atención psicológica en Chillán: ${slugToBreadcrumbLabel(slug).replace(/ Chillán$/, "")}. Sesiones presenciales y online con enfoque cognitivo-conductual.`;
}
