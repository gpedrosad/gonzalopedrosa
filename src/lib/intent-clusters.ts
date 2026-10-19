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
  hubSectionSubtitle: "Consulta información sobre comunicación, matrimonio y celos",
  satelliteSectionTitle: "Más sobre terapia de pareja",
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
  hubLabel: "Psicólogo online en Chile",
  hubSectionTitle: "Terapia online en Chile",
  hubSectionSubtitle: "Reserva sesión o entiende cómo funciona el formato",
  satelliteSectionTitle: "Más sobre terapia online",
  pages: [
    {
      href: "/psicologo-online-chillan",
      label: "Psicólogo online",
      shortTitle: "Psicólogo online en Chile",
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

export const ANXIETY_CLUSTER: IntentCluster = {
  id: "anxiety",
  hubHref: "/psicologo-ansiedad-chillan",
  hubLabel: "Psicólogo para ansiedad en Chillán",
  hubSectionTitle: "Ansiedad y motivos de consulta relacionados",
  hubSectionSubtitle: "Encuentra información sobre lo que te está ocurriendo",
  satelliteSectionTitle: "Más información sobre atención para ansiedad",
  pages: [
    {
      href: "/psicologo-ansiedad-chillan",
      label: "Ansiedad",
      shortTitle: "Psicólogo para ansiedad en Chillán",
      cardDescription: "Conoce el enfoque de trabajo, los valores y las modalidades de atención.",
      role: "hub",
    },
    {
      href: "/psicologo-crisis-de-panico-chillan",
      label: "Crisis de pánico",
      shortTitle: "Atención para crisis de pánico",
      cardDescription: "Información sobre crisis de pánico y el miedo a que vuelvan a ocurrir.",
      role: "satellite",
    },
    {
      href: "/psicologo-fobia-social-chillan",
      label: "Ansiedad social",
      shortTitle: "Ansiedad social y fobia social",
      cardDescription: "Consulta por miedo a la evaluación de otros y dificultades en situaciones sociales.",
      role: "satellite",
    },
    {
      href: "/tratamiento-agorafobia-chillan",
      label: "Agorafobia",
      shortTitle: "Atención para agorafobia",
      cardDescription: "Información para quienes evitan salir o estar en lugares donde sienten inseguridad.",
      role: "satellite",
    },
    {
      href: "/psicologo-hipocondria-chillan",
      label: "Ansiedad por la salud",
      shortTitle: "Ansiedad por la salud e hipocondría",
      cardDescription: "Consulta por preocupación persistente por la salud y temor a enfermedades.",
      role: "satellite",
    },
  ],
};

/** Rutas líderes (hub o intención principal) → prioridad sitemap más alta. */
export const CLUSTER_LEADER_ROUTES = new Set([
  "/alcoholismo-chillan",
  "/terapia-de-pareja-chillan",
  "/psicologo-online-chillan",
  "/terapia-online",
]);

/** Satélites de cluster → prioridad sitemap reducida. */
export const CLUSTER_SATELLITE_ROUTES = new Set([
  "/psicologo-matrimonial-chillan",
  "/terapia-celos-chillan",
  "/terapia-online-vs-presencial-chillan",
]);

export function getClusterForPath(path: string): IntentCluster | undefined {
  return [COUPLES_CLUSTER, ONLINE_CLUSTER, ANXIETY_CLUSTER].find((cluster) =>
    cluster.pages.some((page) => page.href === path),
  );
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
