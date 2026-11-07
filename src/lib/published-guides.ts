export type PublishedGuide = {
  href: string;
  title: string;
  note: string;
};

/** Guías estáticas que ya estaban en main. El hub y el directorio las suman a las de informational-content. */
export const PUBLISHED_GUIDES: PublishedGuide[] = [
  {
    href: "/guias/como-elegir-psicologo-online",
    title: "Cómo elegir psicólogo online en Chile",
    note: "Cómo verificar que está habilitado, qué preguntar antes de la primera sesión, privacidad y señales de alerta.",
  },
  {
    href: "/guias/terapia-online-es-segura",
    title: "¿Es segura la terapia online? Confidencialidad y límites",
    note: "Confidencialidad, grabaciones, desventajas del formato y qué hacer ante una crisis en sesión.",
  },
  {
    href: "/guias/terapia-online-o-presencial",
    title: "Terapia online o presencial: cómo elegir el formato",
    note: "Criterios prácticos: lugar privado, tiempos, horarios, motivo de consulta y qué cambia en cada formato.",
  },
  {
    href: "/guias/familiar-con-ludopatia",
    title: "Ayudar a un familiar con adicción al juego",
    note: "Señales que ve la familia, cómo conversar y cómo dejar de financiar la apuesta sin abandonar a la persona.",
  },
  {
    href: "/guias/psicologo-o-psiquiatra",
    title: "Psicólogo o psiquiatra: diferencia y quién hace terapia",
    note: "El psiquiatra es médico y puede recetar. El psicólogo no indica fármacos. Criterios para no elegir a ciegas.",
  },
  {
    href: "/guias/ataque-de-panico-que-hacer",
    title: "Ataque de pánico: qué hacer en el momento",
    note: "Pasos mientras el miedo está en el techo, y cuándo el episodio pide una urgencia médica.",
  },
  {
    href: "/guias/duelo-etapas-y-mitos",
    title: "Duelo: etapas, mitos y qué sí ayuda",
    note: "Por qué las cinco etapas no son obligatorias y qué mitos le agregan peso a la pena.",
  },
  {
    href: "/guias/acompanar-a-alguien-en-duelo",
    title: "Cómo acompañar a alguien que está en duelo",
    note: "Presencia, frases que sobran y ayuda concreta para las semanas en que el resto ya volvió a su vida.",
  },
  {
    href: "/guias/si-un-cercano-habla-de-hacerse-dano",
    title: "Si un cercano habla de hacerse daño",
    note: "Cómo preguntar, qué no prometer y qué números usar en Chile si el riesgo es inmediato.",
  },
];
