/**
 * Inventario único de rutas orgánicas indexables.
 * Excluye: ads, interno, links, sitelink y páginas con canonical externo.
 */
export const ORGANIC_EXCLUDED_PREFIXES = [
  "/ads/",
  "/interno/",
  "/links/",
  "/sitelink/",
] as const;

export type OrganicSitemapEntry = {
  route: string;
  changeFrequency: "daily" | "weekly" | "monthly";
  priority: number;
};

export const ORGANIC_SITEMAP_ENTRIES: OrganicSitemapEntry[] = [
  { route: "/", changeFrequency: "weekly", priority: 1 },
  { route: "/agendar", changeFrequency: "monthly", priority: 0.9 },
  { route: "/perfil", changeFrequency: "monthly", priority: 0.6 },
  { route: "/emdr-autoadministrado", changeFrequency: "monthly", priority: 0.7 },
  {
    route: "/emdr-autoadministrado/ejercicio",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  { route: "/terapia-online", changeFrequency: "monthly", priority: 0.85 },
  {
    route: "/cuando-ir-al-psicologo-chillan",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    route: "/terapia-online-vs-presencial-chillan",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    route: "/primera-consulta-psicologo-chillan",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  { route: "/psicologo-ansiedad-chillan", changeFrequency: "monthly", priority: 0.8 },
  {
    route: "/psicologo-crisis-de-panico-chillan",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { route: "/psicologo-adulto-chillan", changeFrequency: "monthly", priority: 0.8 },
  {
    route: "/psicologo-cognitivo-conductual-chillan",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    route: "/psicologo-adulto-chillan-mejor-valorados",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  { route: "/psicologo-adicciones-chillan", changeFrequency: "monthly", priority: 0.8 },
  {
    route: "/hora-psicologo-chillan-hoy",
    changeFrequency: "daily",
    priority: 0.9,
  },
  { route: "/terapia-emdr-chillan", changeFrequency: "monthly", priority: 0.8 },
  { route: "/psicologo-chillan-viejo", changeFrequency: "monthly", priority: 0.7 },
  { route: "/psicologo-isapre-chillan", changeFrequency: "monthly", priority: 0.8 },
  { route: "/psicologo-depresion-chillan", changeFrequency: "monthly", priority: 0.8 },
  {
    route: "/psicologo-estres-laboral-chillan",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { route: "/psicologo-duelo-chillan", changeFrequency: "monthly", priority: 0.8 },
  {
    route: "/psicologo-baja-autoestima-chillan",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    route: "/psicologo-fobia-social-chillan",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { route: "/tratamiento-toc-chillan", changeFrequency: "monthly", priority: 0.8 },
  {
    route: "/psicologo-reembolso-isapre-chillan",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { route: "/psicologo-particular-chillan", changeFrequency: "monthly", priority: 0.8 },
  { route: "/psicologo-online-chillan", changeFrequency: "monthly", priority: 0.9 },
  {
    route: "/consulta-psicologica-precio-chillan",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { route: "/terapia-de-pareja-chillan", changeFrequency: "monthly", priority: 0.9 },
  { route: "/psicologo-matrimonial-chillan", changeFrequency: "monthly", priority: 0.65 },
  { route: "/terapia-celos-chillan", changeFrequency: "monthly", priority: 0.65 },
  {
    route: "/psicologo-ruptura-amorosa-chillan",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    route: "/psicologo-dependencia-emocional-chillan",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    route: "/superar-relacion-toxica-chillan",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { route: "/psicologo-apego-chillan", changeFrequency: "monthly", priority: 0.8 },
  { route: "/psicologo-tdah-adulto-chillan", changeFrequency: "monthly", priority: 0.8 },
  {
    route: "/psicologo-perfeccionismo-autoexigencia-chillan",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { route: "/tratamiento-burnout-chillan", changeFrequency: "monthly", priority: 0.8 },
  { route: "/tratamiento-ludopatia-chillan", changeFrequency: "monthly", priority: 0.8 },
  {
    route: "/mejor-psicologo-chillan-opiniones",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  { route: "/psicologo-centro-chillan", changeFrequency: "monthly", priority: 0.7 },
  {
    route: "/psicologo-sindrome-impostor-chillan",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    route: "/psicologo-crisis-vital-chillan",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { route: "/terapia-control-ira-chillan", changeFrequency: "monthly", priority: 0.8 },
  { route: "/tratamiento-insomnio-chillan", changeFrequency: "monthly", priority: 0.8 },
  { route: "/psicologo-estudiantes-chillan", changeFrequency: "monthly", priority: 0.8 },
  {
    route: "/psicologo-estres-academico-chillan",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    route: "/psicologo-procrastinacion-estudios-chillan",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    route: "/psicologo-abuso-sexual-chillan",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    route: "/superar-trauma-infancia-chillan",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { route: "/estres-postraumatico-chillan", changeFrequency: "monthly", priority: 0.8 },
  { route: "/tratamiento-tlp-chillan", changeFrequency: "monthly", priority: 0.8 },
  { route: "/psicologo-bipolaridad-chillan", changeFrequency: "monthly", priority: 0.8 },
  {
    route: "/psicologo-manejo-frustracion-chillan",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { route: "/psicologo-timidez-chillan", changeFrequency: "monthly", priority: 0.8 },
  { route: "/evaluacion-bariatrica-chillan", changeFrequency: "monthly", priority: 0.8 },
  { route: "/informe-psicologico-chillan", changeFrequency: "monthly", priority: 0.8 },
  {
    route: "/certificado-salud-mental-chillan",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    route: "/psicologo-trastornos-alimenticios-chillan",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    route: "/tratamiento-anorexia-bulimia-chillan",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { route: "/psicologo-obesidad-chillan", changeFrequency: "monthly", priority: 0.8 },
  { route: "/psicologo-fibromialgia-chillan", changeFrequency: "monthly", priority: 0.8 },
  { route: "/tratamiento-agorafobia-chillan", changeFrequency: "monthly", priority: 0.8 },
  { route: "/psicologo-acoso-laboral-chillan", changeFrequency: "monthly", priority: 0.8 },
  {
    route: "/psicologo-falta-deseo-sexual-chillan",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { route: "/orientacion-padres-chillan", changeFrequency: "monthly", priority: 0.8 },
  {
    route: "/psicologo-sentimiento-culpa-chillan",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    route: "/psicologo-soledad-aislamiento-chillan",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    route: "/psicologo-toma-decisiones-chillan",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    route: "/certificado-salud-mental-trabajo-chillan",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    route: "/ayuda-psicologica-urgente-chillan",
    changeFrequency: "daily",
    priority: 0.9,
  },
  { route: "/psicologo-autolesiones-chillan", changeFrequency: "monthly", priority: 0.8 },
  {
    route: "/psicologo-identidad-genero-chillan",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { route: "/alcoholismo-chillan", changeFrequency: "monthly", priority: 0.9 },
  { route: "/psicologo-alcoholismo-chillan", changeFrequency: "monthly", priority: 0.65 },
  {
    route: "/tratamiento-alcoholismo-chillan",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  { route: "/dejar-de-beber-chillan", changeFrequency: "monthly", priority: 0.85 },
  { route: "/psicologo-hipocondria-chillan", changeFrequency: "monthly", priority: 0.8 },
];

export const ORGANIC_INDEXABLE_ROUTES = ORGANIC_SITEMAP_ENTRIES.map(
  (entry) => entry.route,
) as readonly string[];

export const isOrganicExcludedPath = (pathname: string): boolean => {
  const normalized =
    pathname === "/" ? "/" : pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

  return ORGANIC_EXCLUDED_PREFIXES.some((prefix) => {
    const segment = prefix.endsWith("/") ? prefix.slice(0, -1) : prefix;
    return normalized === segment || normalized.startsWith(prefix);
  });
};

export const getOrganicPathsCsv = (): string => ORGANIC_INDEXABLE_ROUTES.join(",");
