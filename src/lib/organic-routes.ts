/**
 * Prioridad y lastmod de rutas orgánicas ya conocidas.
 * El sitemap no se limita a esta lista: descubre `page.tsx` nuevas
 * (por ejemplo bajo /guias y /preguntas) y les asigna valores por defecto.
 * Excluye: ads, interno, links, sitelink, redirects y canónicos externos.
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
  /** Fecha de una actualización significativa de esta página, no del despliegue. */
  lastModified?: string;
};

export const ORGANIC_SITEMAP_ENTRIES: OrganicSitemapEntry[] = [
  {
    route: "/",
    lastModified: "2026-10-24",
    changeFrequency: "weekly",
    priority: 1,
  },
  { route: "/agendar", lastModified: "2026-10-18", changeFrequency: "monthly", priority: 0.9 },
  { route: "/perfil", lastModified: "2026-10-20", changeFrequency: "monthly", priority: 0.6 },
  { route: "/emdr-autoadministrado",
    lastModified: "2026-10-19", changeFrequency: "monthly", priority: 0.7 },
  {
    route: "/emdr-autoadministrado/ejercicio",
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    route: "/terapia-online",
    lastModified: "2026-10-21",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    route: "/cuando-ir-al-psicologo-chillan",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    route: "/terapia-online-vs-presencial-chillan",
    lastModified: "2026-10-13",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    route: "/primera-consulta-psicologo-chillan",
    lastModified: "2026-10-20",
    changeFrequency: "monthly",
    priority: 0.85,
  },
  {
    route: "/psicologo-ansiedad-chillan",
    lastModified: "2026-10-20",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    route: "/psicologo-crisis-de-panico-chillan",
    lastModified: "2026-10-24",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    route: "/psicologo-adulto-chillan",
    lastModified: "2026-10-23",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    route: "/psicologo-cognitivo-conductual-chillan",
    lastModified: "2026-10-22",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { route: "/psicologo-adicciones-chillan", changeFrequency: "monthly", priority: 0.8 },
  {
    route: "/hora-psicologo-chillan-hoy",
    changeFrequency: "daily",
    priority: 0.9,
  },
  { route: "/terapia-emdr-chillan",
    lastModified: "2026-10-22", changeFrequency: "monthly", priority: 0.8 },
  { route: "/psicologo-isapre-chillan", changeFrequency: "monthly", priority: 0.8 },
  { route: "/psicologo-depresion-chillan",
    lastModified: "2026-10-20", changeFrequency: "monthly", priority: 0.8 },
  {
    route: "/psicologo-estres-laboral-chillan",
    lastModified: "2026-10-24",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { route: "/psicologo-duelo-chillan",
    lastModified: "2026-10-22", changeFrequency: "monthly", priority: 0.8 },
  {
    route: "/psicologo-baja-autoestima-chillan",
    lastModified: "2026-10-24",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    route: "/psicologo-fobia-social-chillan",
    lastModified: "2026-10-24",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { route: "/tratamiento-toc-chillan",
    lastModified: "2026-10-23", changeFrequency: "monthly", priority: 0.8 },
  {
    route: "/psicologo-reembolso-isapre-chillan",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { route: "/psicologo-particular-chillan", changeFrequency: "monthly", priority: 0.8 },
  {
    route: "/psicologo-online-chillan",
    lastModified: "2026-10-21",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    route: "/consulta-psicologica-precio-chillan",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    route: "/terapia-de-pareja-chillan",
    lastModified: "2026-10-23",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    route: "/terapia-celos-chillan",
    lastModified: "2026-10-17",
    changeFrequency: "monthly",
    priority: 0.65,
  },
  {
    route: "/psicologo-ruptura-amorosa-chillan",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    route: "/psicologo-dependencia-emocional-chillan",
    lastModified: "2026-10-17",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    route: "/superar-relacion-toxica-chillan",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { route: "/psicologo-apego-chillan",
    lastModified: "2026-10-17", changeFrequency: "monthly", priority: 0.8 },
  { route: "/psicologo-tdah-adulto-chillan", changeFrequency: "monthly", priority: 0.8 },
  { route: "/tratamiento-ludopatia-chillan", lastModified: "2026-10-22", changeFrequency: "monthly", priority: 0.8 },
  {
    route: "/mejor-psicologo-chillan-opiniones",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    route: "/psicologo-crisis-vital-chillan",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { route: "/terapia-control-ira-chillan", changeFrequency: "monthly", priority: 0.8 },
  { route: "/tratamiento-insomnio-chillan",
    lastModified: "2026-10-17", changeFrequency: "monthly", priority: 0.8 },
  { route: "/psicologo-estudiantes-chillan", lastModified: "2026-10-24", changeFrequency: "monthly", priority: 0.8 },
  {
    route: "/psicologo-procrastinacion-estudios-chillan",
    lastModified: "2026-10-23",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    route: "/psicologo-abuso-sexual-chillan",
    lastModified: "2026-10-22",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    route: "/superar-trauma-infancia-chillan",
    lastModified: "2026-10-22",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { route: "/estres-postraumatico-chillan",
    lastModified: "2026-10-21", changeFrequency: "monthly", priority: 0.8 },
  { route: "/tratamiento-tlp-chillan", changeFrequency: "monthly", priority: 0.8 },
  { route: "/psicologo-bipolaridad-chillan", lastModified: "2026-10-18", changeFrequency: "monthly", priority: 0.8 },
  {
    route: "/psicologo-manejo-frustracion-chillan",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { route: "/evaluacion-bariatrica-chillan", changeFrequency: "monthly", priority: 0.8 },
  { route: "/informe-psicologico-chillan", changeFrequency: "monthly", priority: 0.8 },
  {
    route: "/certificado-salud-mental-chillan",
    lastModified: "2026-10-23",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    route: "/psicologo-trastornos-alimenticios-chillan",
    lastModified: "2026-10-23",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { route: "/psicologo-obesidad-chillan",
    lastModified: "2026-10-22", changeFrequency: "monthly", priority: 0.8 },
  { route: "/psicologo-fibromialgia-chillan", changeFrequency: "monthly", priority: 0.8 },
  { route: "/psicologo-acoso-laboral-chillan", lastModified: "2026-10-24", changeFrequency: "monthly", priority: 0.8 },
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
    route: "/ayuda-psicologica-urgente-chillan",
    lastModified: "2026-10-22",
    changeFrequency: "daily",
    priority: 0.9,
  },
  { route: "/psicologo-autolesiones-chillan", changeFrequency: "monthly", priority: 0.8 },
  {
    route: "/psicologo-identidad-genero-chillan",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { route: "/alcoholismo-chillan", lastModified: "2026-10-20", changeFrequency: "monthly", priority: 0.9 },
  {
    route: "/psicologo-hipocondria-chillan",
    lastModified: "2026-10-17",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { route: "/guias", lastModified: "2026-10-19", changeFrequency: "monthly", priority: 0.75 },
  { route: "/guias/familiar-con-ludopatia", lastModified: "2026-10-23", changeFrequency: "monthly", priority: 0.7 },
  { route: "/guias/psicologo-o-psiquiatra", lastModified: "2026-10-17", changeFrequency: "monthly", priority: 0.7 },
  { route: "/guias/ataque-de-panico-que-hacer", lastModified: "2026-10-24", changeFrequency: "monthly", priority: 0.7 },
  { route: "/guias/duelo-etapas-y-mitos", lastModified: "2026-10-17", changeFrequency: "monthly", priority: 0.7 },
  { route: "/guias/acompanar-a-alguien-en-duelo", lastModified: "2026-10-17", changeFrequency: "monthly", priority: 0.7 },
  { route: "/guias/si-un-cercano-habla-de-hacerse-dano", lastModified: "2026-10-17", changeFrequency: "monthly", priority: 0.7 },
  { route: "/guias/que-es-el-emdr", lastModified: "2026-10-20", changeFrequency: "monthly", priority: 0.72 },
  { route: "/guias/comunicacion-en-pareja", lastModified: "2026-10-23", changeFrequency: "monthly", priority: 0.72 },
  { route: "/guias/que-es-el-tept", lastModified: "2026-10-21", changeFrequency: "monthly", priority: 0.72 },
  { route: "/guias/estilos-de-apego", lastModified: "2026-10-17", changeFrequency: "monthly", priority: 0.7 },
  { route: "/guias/burnout-laboral", lastModified: "2026-10-24", changeFrequency: "monthly", priority: 0.7 },
  { route: "/guias/higiene-del-sueno", lastModified: "2026-10-17", changeFrequency: "monthly", priority: 0.7 },
  { route: "/guias/emocion-y-comida", lastModified: "2026-10-23", changeFrequency: "monthly", priority: 0.7 },
  { route: "/guias/regulacion-emocional", lastModified: "2026-10-23", changeFrequency: "monthly", priority: 0.7 },
  {
    route: "/guias/familiar-con-problema-de-alcohol",
    lastModified: "2026-10-18",
    changeFrequency: "monthly",
    priority: 0.72,
  },
  { route: "/preguntas", lastModified: "2026-10-23", changeFrequency: "monthly", priority: 0.75 },
  { route: "/preguntas/cuanto-dura-una-terapia-psicologica", lastModified: "2026-10-17", changeFrequency: "monthly", priority: 0.7 },
  { route: "/preguntas/que-es-la-terapia-cognitivo-conductual", lastModified: "2026-10-17", changeFrequency: "monthly", priority: 0.7 },
  { route: "/preguntas/la-terapia-online-funciona", lastModified: "2026-10-21", changeFrequency: "monthly", priority: 0.7 },
  { route: "/preguntas/ansiedad-o-estres", lastModified: "2026-10-17", changeFrequency: "monthly", priority: 0.7 },
  { route: "/preguntas/la-ludopatia-es-una-enfermedad", lastModified: "2026-10-17", changeFrequency: "monthly", priority: 0.7 },
  { route: "/preguntas/pareja-con-adiccion-al-juego", lastModified: "2026-10-17", changeFrequency: "monthly", priority: 0.7 },
  { route: "/preguntas/cada-cuanto-ir-al-psicologo", lastModified: "2026-10-17", changeFrequency: "monthly", priority: 0.7 },
  { route: "/preguntas/que-es-un-ataque-de-panico", lastModified: "2026-10-24", changeFrequency: "monthly", priority: 0.7 },
  { route: "/preguntas/cuanto-dura-un-duelo", lastModified: "2026-10-23", changeFrequency: "monthly", priority: 0.7 },
  { route: "/preguntas/que-es-la-erp-para-el-toc", lastModified: "2026-10-19", changeFrequency: "monthly", priority: 0.72 },
  { route: "/preguntas/obsesiones-y-compulsiones", lastModified: "2026-10-19", changeFrequency: "monthly", priority: 0.72 },
  { route: "/preguntas/procrastinacion-y-ansiedad", lastModified: "2026-10-19", changeFrequency: "monthly", priority: 0.72 },
  { route: "/preguntas/emdr-autoadministrado-y-terapia", lastModified: "2026-10-17", changeFrequency: "monthly", priority: 0.72 },
  { route: "/preguntas/como-saber-si-es-burnout", lastModified: "2026-10-17", changeFrequency: "monthly", priority: 0.7 },
  { route: "/preguntas/que-es-el-apego-ansioso", lastModified: "2026-10-17", changeFrequency: "monthly", priority: 0.7 },
  { route: "/preguntas/duelo-o-depresion", lastModified: "2026-10-23", changeFrequency: "monthly", priority: 0.7 },
  { route: "/preguntas/senales-de-depresion", lastModified: "2026-10-20", changeFrequency: "monthly", priority: 0.72 },
  { route: "/preguntas/que-es-un-trauma-psicologico", lastModified: "2026-10-22", changeFrequency: "monthly", priority: 0.72 },
  {
    route: "/preguntas/como-ayuda-la-terapia-tras-abuso-en-la-infancia",
    lastModified: "2026-10-22",
    changeFrequency: "monthly",
    priority: 0.72,
  },
  { route: "/preguntas/como-es-una-sesion-de-psicologia-online", lastModified: "2026-10-21", changeFrequency: "monthly", priority: 0.72 },
  { route: "/preguntas/como-funciona-la-terapia-psicologica-online", lastModified: "2026-10-21", changeFrequency: "monthly", priority: 0.72 },
  { route: "/preguntas/que-hace-un-especialista-en-estres-postraumatico", lastModified: "2026-10-21", changeFrequency: "monthly", priority: 0.72 },
  { route: "/preguntas/por-que-la-mente-no-para", lastModified: "2026-10-19", changeFrequency: "monthly", priority: 0.7 },
  { route: "/preguntas/como-poner-un-limite", lastModified: "2026-10-17", changeFrequency: "monthly", priority: 0.7 },
  {
    route: "/preguntas/sintomas-fisicos-de-la-ansiedad",
    lastModified: "2026-10-18",
    changeFrequency: "monthly",
    priority: 0.72,
  },
  {
    route: "/preguntas/senales-de-baja-autoestima",
    lastModified: "2026-10-18",
    changeFrequency: "monthly",
    priority: 0.72,
  },
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
