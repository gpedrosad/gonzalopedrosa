/**
 * Clusters de intención orgánica: una URL líder por tema y satélites que enlazan al hub.
 * El cluster alcohol vive en `alcoholism-pages.ts` + `AlcoholismLandingPage`.
 */

export type ClusterPage = {
  href: string;
  label: string;
  shortTitle: string;
  cardDescription: string;
  role: "hub" | "satellite";
};

export type IntentCluster = {
  id: string;
  hubHref: string;
  hubLabel: string;
  hubSectionTitle: string;
  hubSectionSubtitle: string;
  satelliteSectionTitle: string;
  pages: ClusterPage[];
};

export const COUPLES_CLUSTER: IntentCluster = {
  id: "couples",
  hubHref: "/terapia-de-pareja-chillan",
  hubLabel: "Terapia de pareja Chillán",
  hubSectionTitle: "Terapia de pareja y temas relacionados en Chillán",
  hubSectionSubtitle: "Profundiza por intención dentro del cluster de pareja",
  satelliteSectionTitle: "Guía del cluster de terapia de pareja",
  pages: [
    {
      href: "/terapia-de-pareja-chillan",
      label: "Terapia de pareja",
      shortTitle: "Terapia de pareja Chillán",
      cardDescription:
        "Comunicación, crisis, distancia emocional y primeros pasos para volver a conectar.",
      role: "hub",
    },
    {
      href: "/psicologo-matrimonial-chillan",
      label: "Matrimonial",
      shortTitle: "Psicólogo matrimonial Chillán",
      cardDescription:
        "Acompañamiento para matrimonios en crisis o que quieren fortalecer el vínculo.",
      role: "satellite",
    },
    {
      href: "/terapia-celos-chillan",
      label: "Celos",
      shortTitle: "Terapia para celos Chillán",
      cardDescription:
        "Trabajo sobre celos, desconfianza y patrones que erosionan la seguridad en la pareja.",
      role: "satellite",
    },
  ],
};

export const ONLINE_CLUSTER: IntentCluster = {
  id: "online",
  hubHref: "/psicologo-online-chillan",
  hubLabel: "Psicólogo online Chillán",
  hubSectionTitle: "Terapia online en Chillán",
  hubSectionSubtitle: "Reserva sesión o entiende cómo funciona el formato",
  satelliteSectionTitle: "Más sobre terapia online",
  pages: [
    {
      href: "/psicologo-online-chillan",
      label: "Psicólogo online",
      shortTitle: "Psicólogo online Chillán",
      cardDescription:
        "Videollamada, boleta Isapre y agenda directa para empezar tu proceso.",
      role: "hub",
    },
    {
      href: "/terapia-online",
      label: "Cómo funciona",
      shortTitle: "Terapia online: cómo funciona",
      cardDescription:
        "Página informativa sobre pasos, requisitos técnicos y confidencialidad.",
      role: "satellite",
    },
    {
      href: "/terapia-online-vs-presencial-chillan",
      label: "Online vs presencial",
      shortTitle: "Online vs presencial Chillán",
      cardDescription:
        "Comparación honesta entre modalidades para elegir con criterio.",
      role: "satellite",
    },
  ],
};

/** Rutas líderes (hub o intención principal) → prioridad sitemap más alta. */
export const CLUSTER_LEADER_ROUTES = new Set([
  "/alcoholismo-chillan",
  "/dejar-de-beber-chillan",
  "/terapia-de-pareja-chillan",
  "/psicologo-online-chillan",
  "/terapia-online",
]);

/** Satélites de cluster → prioridad sitemap reducida. */
export const CLUSTER_SATELLITE_ROUTES = new Set([
  "/psicologo-alcoholismo-chillan",
  "/tratamiento-alcoholismo-chillan",
  "/psicologo-matrimonial-chillan",
  "/terapia-celos-chillan",
  "/terapia-online-vs-presencial-chillan",
]);

export function getClusterForPath(path: string): IntentCluster | undefined {
  if (COUPLES_CLUSTER.pages.some((page) => page.href === path)) {
    return COUPLES_CLUSTER;
  }
  if (ONLINE_CLUSTER.pages.some((page) => page.href === path)) {
    return ONLINE_CLUSTER;
  }
  return undefined;
}

export function getClusterBreadcrumb(
  cluster: IntentCluster,
  currentPath: string,
): { label: string; href?: string }[] {
  const current = cluster.pages.find((page) => page.href === currentPath);
  if (!current) {
    return [{ label: "Inicio", href: "/" }];
  }

  if (current.role === "hub") {
    return [{ label: "Inicio", href: "/" }, { label: current.shortTitle }];
  }

  const hub = cluster.pages.find((page) => page.role === "hub");
  return [
    { label: "Inicio", href: "/" },
    { label: hub?.shortTitle ?? cluster.hubLabel, href: cluster.hubHref },
    { label: current.shortTitle },
  ];
}

export function getClusterNavPages(
  cluster: IntentCluster,
  currentPath: string,
): ClusterPage[] {
  const hub = cluster.pages.find((page) => page.role === "hub");
  if (!hub) {
    return cluster.pages.filter((page) => page.href !== currentPath);
  }

  if (currentPath === hub.href) {
    return cluster.pages.filter((page) => page.href !== currentPath);
  }

  return [
    hub,
    ...cluster.pages.filter(
      (page) => page.href !== currentPath && page.href !== hub.href,
    ),
  ];
}
