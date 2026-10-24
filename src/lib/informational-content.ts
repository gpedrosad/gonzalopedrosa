/**
 * Guías y preguntas informativas. No describen una oferta de sesión.
 * Las cifras solo aparecen cuando tienen una fuente pública citada en la página.
 */

export const INFORMATIONAL_UPDATED = "2026-10-17";

export const PORTRAIT_ALT = "Retrato de Gonzalo Pedrosa, psicólogo clínico";

export const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: PORTRAIT_ALT,
} as const;

const MINSAL_4141 = {
  label: "Ministerio de Salud de Chile: línea *4141",
  href: "https://www.minsal.cl/linea-de-atencion-4141-no-estas-solo-no-estas-sola/",
};

const SALUD_RESPONDE = {
  label: "Salud Responde: preguntas frecuentes del servicio",
  href: "https://saludresponde.minsal.cl/preguntas-frecuentes-de-nuestro-servicio/",
};

const DIPRECE_ANSIEDAD = {
  label: "DIPRECE, MINSAL: descripción del trastorno ansioso",
  href: "https://diprece.minsal.cl/temas-de-salud/orden-alfabetico/guias-clinicas-no-ges/guias-clinicas-no-ges-salud-mental/trastorno-ansioso/descripcion-y-epidemiologia/",
};

const OMS_BURNOUT = {
  label: "Organización Mundial de la Salud: el burnout como fenómeno ocupacional",
  href: "https://www.who.int/news/item/28-05-2019-burn-out-an-occupational-phenomenon-international-classification-of-diseases",
};

const NICE_ANSIEDAD = {
  label: "NICE: guía CG113 sobre ansiedad generalizada y pánico",
  href: "https://www.nice.org.uk/guidance/cg113",
};

const NICE_ALCOHOL = {
  label: "NICE: guía CG115 sobre trastornos por consumo de alcohol",
  href: "https://www.nice.org.uk/guidance/cg115",
};

const OMS_ALCOHOL = {
  label: "Organización Mundial de la Salud: hoja informativa sobre el alcohol",
  href: "https://www.who.int/news-room/fact-sheets/detail/alcohol",
};

const OMS_DEPRESION = {
  label: "Organización Mundial de la Salud: hoja informativa sobre la depresión",
  href: "https://www.who.int/news-room/fact-sheets/detail/depression",
};

const NICE_TOC = {
  label: "NICE: guía CG31 sobre trastorno obsesivo-compulsivo",
  href: "https://www.nice.org.uk/guidance/cg31",
};

const OMS_ESTRES = {
  label: "OMS: guía de manejo de condiciones relacionadas con el estrés",
  href: "https://www.who.int/publications/i/item/9789241505406",
};

const APA_APEGO = {
  label: "American Psychological Association: attachment",
  href: "https://www.apa.org/topics/attachment",
};

const NHS_SUENO = {
  label: "NHS: hábitos para dormir mejor",
  href: "https://www.nhs.uk/every-mind-matters/mental-health-issues/sleep/",
};

const NHS_AUTOESTIMA = {
  label: "NHS: ideas para una autoestima más amable",
  href: "https://www.nhs.uk/mental-health/self-help/tips-and-support/raise-low-self-esteem/",
};

export type InfoSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type InfoLink = {
  href: string;
  label: string;
};

export type InfoSource = {
  label: string;
  href: string;
};

export type InfoPage = {
  cluster: "guias" | "preguntas";
  slug: string;
  /** Fecha de esta ficha. Si falta, se usa INFORMATIONAL_UPDATED. */
  updated?: string;
  navLabel: string;
  title: string;
  h1: string;
  description: string;
  answer: string;
  sections: InfoSection[];
  faqs: Array<{ question: string; answer: string }>;
  related: InfoLink[];
  product?: {
    href: string;
    label: string;
    note: string;
  };
  safety?: string;
  sources: InfoSource[];
};

export const GUIDE_HUB = {
  path: "/guias",
  title: "Guías de salud mental para entender lo que te pasa",
  h1: "Guías para cuidar la salud mental",
  description:
    "Lecturas sobre duelo, pareja, alcohol, ansiedad, TEPT, EMDR, apego, burnout y sueño. Explican el tema. No reemplazan una atención profesional.",
};

export const QUESTION_HUB = {
  path: "/preguntas",
  title: "Preguntas sobre terapia, ansiedad, duelo y burnout",
  h1: "Preguntas frecuentes sobre terapia",
  description:
    "Respuestas sobre sesión online, ansiedad, autoestima, estrés, duelo, TEPT y EMDR. Cada ficha explica una pregunta. No reemplazan una consulta.",
};

const EMDR_PRODUCT = {
  href: "/emdr-autoadministrado",
  label: "Abrir el ejercicio de estimulación bilateral",
  note: "Es un recurso gratuito del sitio para malestar leve. No procesa un trauma ni reemplaza un trabajo con alguien formado en EMDR.",
};

export const INFORMATIONAL_PAGES: InfoPage[] = [
        {
    cluster: "guias",
    slug: "que-es-el-emdr",
    updated: "2026-10-20",
    navLabel: "Qué es el EMDR",
    title: "EMDR: qué es, para qué se usa y qué no reemplaza",
    h1: "Qué es el EMDR",
    description:
      "El EMDR es una psicoterapia para procesar recuerdos que siguen activos. Conoce sus fases, sus límites y el ejercicio gratuito del sitio.",
    answer:
      "EMDR significa desensibilización y reprocesamiento por movimientos oculares. Es una psicoterapia usada sobre todo cuando un recuerdo sigue disparando miedo, vergüenza o imágenes como si estuviera pasando ahora. La estimulación bilateral (ojos, sonidos o golpes suaves alternados) es una parte del procedimiento, no el tratamiento entero.",
    sections: [
      {
        heading: "Para qué se desarrolló",
        paragraphs: [
          "El procedimiento se usa en el trabajo con trauma y con el trastorno de estrés postraumático. La guía de la OMS de 2013 sobre condiciones relacionadas con el estrés incluye, para adultos con TEPT, terapias centradas en el trauma, entre ellas la cognitivo-conductual y el EMDR. Si tu búsqueda es especialista en TEPT, la explicación del trastorno está en la guía de TEPT. Esta página se queda en el método.",
          "Que una guía lo nombre no convierte cualquier video de un punto que se mueve en una sesión de EMDR. El procedimiento completo incluye evaluación, preparación y cierre, con alguien que sepa detenerse si la activación se dispara.",
        ],
      },
      {
        heading: "Las fases, en lenguaje simple",
        paragraphs: [
          "Primero se revisa tu historia y si hoy estás lo bastante estable para trabajar un recuerdo. Después se acuerdan recursos para volver a sentirte en el presente. Solo entonces se elige una memoria concreta y se alterna la atención entre esa memoria y la estimulación bilateral.",
          "Al cierre se comprueba cómo quedaste y qué harás si el malestar sube en las horas siguientes. Saltarse la preparación y el cierre es el error más común de los ejercicios sueltos.",
        ],
        bullets: [
          "No se parte por el peor recuerdo el primer día.",
          "La persona puede parar. Eso es parte del método, no una falla.",
          "Procesar no es contar el hecho con todo el detalle cada vez.",
          "Un recuerdo único y un trauma complejo no se abordan igual.",
        ],
      },
      {
        heading: "Qué puedes probar en este sitio",
        paragraphs: [
          "El ejercicio de estimulación bilateral visual es un recurso gratuito para emociones cotidianas o estrés leve, con instrucciones y una advertencia. Sirve para conocer la sensación del movimiento de ojos en un contexto acotado.",
          "No lo uses para reprocesar un abuso, un accidente o un TEPT por tu cuenta. Si al intentarlo aparecen imágenes que no puedes guardar, para y busca apoyo. El recurso lo dice en su propia página y conviene leerlo antes de abrirlo.",
        ],
      },
      {
        heading: "Límites que conviene tener claros",
        paragraphs: [
          "EMDR no es hipnosis ni te obliga a creer una versión nueva del pasado. Tampoco está indicado como primer paso si estás en crisis, con ideas de hacerte daño, o sin un lugar seguro donde volver después.",
          "Si tu búsqueda es especialista en TEPT, el nombre de la técnica no reemplaza la evaluación. Hay otros tratamientos centrados en el trauma. La elección depende del recuerdo, de tu estabilidad actual y de la formación de quien te atiende.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿El movimiento de ojos es lo único que importa?",
        answer:
          "No. Es un componente dentro de un procedimiento con evaluación, preparación y cierre. Un punto en la pantalla, solo, no es una terapia EMDR.",
      },
      {
        question: "¿Puedo hacerlo por videollamada?",
        answer:
          "Hay adaptaciones con estimulación visual o táctil a distancia. Que se pueda adaptar no significa que cualquier caso deba partir así. Eso se decide en una evaluación.",
      },
      {
        question: "¿Duele recordar?",
        answer:
          "Puede haber emoción intensa durante el trabajo. Por eso existe la preparación y la opción de parar. Si el recuerdo te desborda, no es material para un ejercicio solo.",
      },
    ],
    related: [
      { href: "/preguntas/que-es-un-trauma-psicologico", label: "Qué es un trauma psicológico" },
      { href: "/guias/que-es-el-tept", label: "Qué es el TEPT" },
      { href: "/preguntas/emdr-autoadministrado-y-terapia", label: "¿El ejercicio reemplaza la terapia?" },
      { href: "/emdr-autoadministrado/ejercicio", label: "Ir al ejercicio bilateral" },
      { href: "/estres-postraumatico-chillan", label: "Información sobre estrés postraumático" },
      { href: "/terapia-emdr-chillan", label: "Página de atención con EMDR" },
    ],
    product: EMDR_PRODUCT,
    safety:
      "Si hay ideas de hacerte daño o de querer morir, llama al *4141 (gratuito, 24 horas, desde celular o fijo). Para otra orientación de salud, Salud Responde atiende al 600 360 7777. Esa llamada tiene costo de llamada local según tu plan.",
    sources: [OMS_ESTRES, MINSAL_4141, SALUD_RESPONDE],
  },
  {
    cluster: "guias",
    slug: "comunicacion-en-pareja",
    updated: "2026-10-23",
    navLabel: "Comunicación en pareja",
    title: "Comunicación en pareja y ciclos de discusión",
    h1: "Comunicación en pareja: cuando la pelea se repite",
    description:
      "Cómo se arma un ciclo de discusión en la pareja, qué lo mantiene y cómo pausar la misma pelea. Una guía para entender, no para reservar hora.",
    answer:
      "Muchas parejas no discuten un tema distinto cada vez: recorren el mismo ciclo. Una persona insiste, la otra se cierra, sube el volumen o el silencio, y al final las dos quedan con la sensación de que la otra no escuchó. El contenido (plata, celos, tareas, la familia) cambia. El circuito, no.",
    sections: [
      {
        heading: "Cómo se ve el ciclo",
        paragraphs: [
          "Parte con un roce chico. Una pide claridad y la otra responde corto. La primera insiste porque el silencio se siente como abandono. La segunda se aleja porque la insistencia se siente como ataque. Cada paso confirma el miedo del otro.",
          "Desde fuera parece que pelean por el plato sucio o por un mensaje. Desde dentro, una busca que la conversación no se corte y la otra busca que la conversación no se vuelva un juicio. Las dos están defendiéndose de algo distinto.",
        ],
        bullets: [
          "Persecución y retirada: una habla más, la otra habla menos.",
          "El mismo reproche con otro tema. Si cambias el ejemplo y la pelea es idéntica, es un ciclo.",
          "El cierre en falso: «ya, da lo mismo» no cierra. Deja la conversación a medias.",
          "La cuenta de viejos: se trae una pelea de hace meses para ganar la de hoy.",
        ],
      },
      {
        heading: "Qué suele trabar la comunicación",
        paragraphs: [
          "Criticar a la persona en vez de nombrar el hecho. Defenderse antes de haber escuchado la frase entera. Contestar con otro reproche. Irse de la pieza o del chat sin decir que necesitas una pausa. Esas cuatro jugadas alargan el ciclo aunque el tema original ya no importe.",
          "También lo alarga pedir que el otro adivine. «Si me quisieras, sabrías» deja a la otra persona sin una petición concreta. Una frase usable nombra el hecho, lo que te pasó y qué pides ahora.",
        ],
      },
      {
        heading: "Cómo pausar sin abandonar la conversación",
        paragraphs: [
          "Acuerden una pausa antes de la próxima pelea, no en el minuto más alto. Una pausa sirve si tiene hora de regreso: veinte minutos, o esta noche después de comer. Irse sin hora de regreso se vive como castigo.",
          "Al volver, partan por repetir lo que entendieron del otro, en una frase, antes de explicar su versión. Si no pueden repetirlo, todavía no están en la misma conversación. No hace falta resolver el fondo en ese intento. Alcanza con salir del circuito.",
        ],
        bullets: [
          "Bajen el tema a un ejemplo de esta semana, no a «siempre».",
          "Una petición por vez. Tres reclamos juntos no se pueden responder.",
          "Si hay gritos, insultos o miedo, la pausa no es un truco: es el límite.",
          "Escribir el mensaje y leerlo al día siguiente evita el chat de las dos de la mañana.",
        ],
      },
      {
        heading: "Cuándo el patrón pide otra mirada",
        paragraphs: [
          "Tiene sentido pedir ayuda si el ciclo se repite cada semana, si uno de los dos ya no quiere hablar, o si la conversación incluye desprecio, control o miedo. Esta guía solo nombra el circuito. No dice quién tiene la razón ni qué debería hacer tu pareja.",
          "El estilo de apego a veces explica por qué uno insiste y el otro se cierra. Esa lectura está en la guía de [estilos de apego en adultos](/guias/estilos-de-apego). La página de terapia de pareja en Chillán describe la atención local, que es otra intención: aquí el objetivo es entender la pelea.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Toda discusión que se repite es un problema?",
        answer:
          "No. Una diferencia que vuelve y se puede conversar es parte de convivir. El ciclo es otro: las dos personas salen peor, el tema no avanza y la forma de pelear ya es el problema.",
      },
      {
        question: "¿Sirve si mi pareja no quiere leer esto?",
        answer:
          "Puedes usar la pausa y la petición concreta aunque la otra persona no participe. No puedes obligarla a escuchar. Si solo una quiere cambiar el circuito, el cambio es más chico y sigue siendo real.",
      },
      {
        question: "¿Y si hay violencia?",
        answer:
          "Una guía de comunicación no alcanza. Si hay golpes, amenazas o miedo de estar en la casa, la prioridad es tu seguridad. En Chile, Carabineros atiende en el 133.",
      },
    ],
    related: [
      { href: "/terapia-de-pareja-chillan", label: "Terapia de pareja en Chillán" },
      { href: "/guias/estilos-de-apego", label: "Estilos de apego en adultos" },
      { href: "/preguntas/que-es-el-apego-ansioso", label: "Qué es el apego ansioso" },
      { href: "/preguntas/como-poner-un-limite", label: "Cómo poner un límite" },
    ],
    sources: [APA_APEGO],
  },
  {
    cluster: "guias",
    slug: "que-es-el-tept",
    updated: "2026-10-21",
    navLabel: "Qué es el TEPT",
    title: "Qué es el TEPT y qué busca un especialista en TEPT",
    h1: "Qué es el TEPT",
    description:
      "Especialista en TEPT: qué es el trastorno de estrés postraumático, qué señales se repiten y cuándo pedir ayuda. Enlaza el EMDR y la atención en Chillán.",
    answer:
      "TEPT significa trastorno de estrés postraumático. Aparece después de un hecho que amenazó la vida, la integridad o la de alguien cercano, cuando el recuerdo no queda archivado: vuelve en imágenes, sueños o alarma, y la persona organiza el día para no toparse con él.",
    sections: [
      {
        heading: "Qué lo distingue de un mal recuerdo",
        paragraphs: [
          "Un susto fuerte puede dejar días de alerta y eso no es, por sí solo, un TEPT. El cuadro se parece más a esto: el hecho ya pasó y el cuerpo sigue reaccionando como si estuviera pasando. Un ruido, un olor o una fecha alcanzan para traer la escena.",
          "No todo trauma deriva en TEPT. Hay personas que atraviesan un hecho grave y siguen con miedo un tiempo, sin que el recuerdo tome el control de la semana. Ponerse el nombre sin una evaluación no ayuda. Sirve para reconocer el patrón y decidir si conversarlo.",
        ],
      },
      {
        heading: "Señales que se repiten",
        paragraphs: [
          "Las señales cambian de persona a persona. Estas son las que más se nombran cuando alguien describe un TEPT. No son una lista para diagnosticarte.",
        ],
        bullets: [
          "El recuerdo vuelve solo: imágenes, pesadillas o la sensación de estar otra vez ahí.",
          "Evitas lugares, conversaciones, noticias o personas que lo disparan.",
          "Estás en alerta: te sobresaltas, duermes liviano o te cuesta bajar la guardia.",
          "Cambia el ánimo: culpa, vergüenza, distancia de quienes quieres o una sensación de peligro presente.",
        ],
      },
      {
        heading: "Cuándo conviene pedir ayuda",
        paragraphs: [
          "Conviene conversarlo con un profesional si estas señales llevan semanas, te limitan en la pega o en la casa, o si evitas cada vez más cosas para no activarte. También si el sueño no vuelve o si un cercano te dice que ya no estás en el presente.",
          "Si hay ideas de hacerte daño o de querer morir, eso no espera una hora programada. En Chile la línea *4141 es gratuita y atiende las 24 horas. Esta guía no evalúa riesgo.",
        ],
      },
      {
        heading: "Qué terapias se usan con más frecuencia",
        paragraphs: [
          "La guía de la OMS de 2013 sobre condiciones relacionadas con el estrés nombra, para adultos con TEPT, terapias centradas en el trauma. Entre ellas están la terapia cognitivo-conductual focalizada en el trauma y el EMDR. Que una guía las nombre no dice qué te corresponde a ti ni en qué orden.",
          "El EMDR no es un video de un punto que se mueve. El procedimiento completo incluye evaluación, preparación y cierre. El ejercicio gratuito de este sitio solo muestra la estimulación bilateral para un malestar leve. No procesa un trauma ni un TEPT por tu cuenta.",
          "Esta página explica el trastorno. La atención con EMDR en Chillán y la ficha local de estrés postraumático son otras URLs: una es el método en consulta, la otra es la información de esa atención.",
        ],
      },
      {
        heading: "Si buscas un especialista en TEPT",
        paragraphs: [
          "Esa búsqueda suele pedir a alguien que evalúe un recuerdo que sigue activo y que conozca terapias centradas en el trauma. La guía de la OMS nombra, para adultos, la terapia cognitivo-conductual focalizada en el trauma y el EMDR, cuando las aplica personal de salud capacitado. El nombre de la técnica no reemplaza la evaluación.",
          "Qué hace esa persona en la evaluación está en la pregunta sobre el especialista en estrés postraumático. Esta guía se queda en el cuadro. No certifica a quien la escribe. Las fases del EMDR están en la guía correspondiente. La página de EMDR en Chillán es la de atención con ese método. El ejercicio bilateral del sitio queda fuera de este tema: no reprocesa un TEPT.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿El TEPT solo aparece después de una guerra o un accidente?",
        answer:
          "No. También se describe después de violencia, abuso, un asalto o haber presenciado que otra persona estaba en peligro. El hecho importa menos que el efecto: el recuerdo sigue activo y limita la vida.",
      },
      {
        question: "¿Puedo usar el ejercicio bilateral del sitio si creo que tengo TEPT?",
        answer:
          "No para reprocesar ese recuerdo. El ejercicio es para emoción cotidiana o estrés leve, y la propia página pide que lo pares si aparecen imágenes que no puedes guardar.",
      },
      {
        question: "¿Una guía alcanza para saber si lo tengo?",
        answer:
          "No. Sirve para reconocer señales. El nombre de TEPT lo pone una evaluación, no una lista leída en internet.",
      },
    ],
    related: [
      { href: "/preguntas/que-hace-un-especialista-en-estres-postraumatico", label: "Qué hace un especialista en estrés postraumático" },
      { href: "/preguntas/que-es-un-trauma-psicologico", label: "Qué es un trauma psicológico" },
      { href: "/guias/que-es-el-emdr", label: "Qué es el EMDR" },
      { href: "/preguntas/emdr-autoadministrado-y-terapia", label: "Límites del ejercicio bilateral" },
      { href: "/emdr-autoadministrado", label: "Ejercicio bilateral gratuito" },
      { href: "/terapia-emdr-chillan", label: "Página de atención con EMDR" },
      { href: "/estres-postraumatico-chillan", label: "Estrés postraumático en Chillán" },
    ],
    product: EMDR_PRODUCT,
    safety:
      "Si hay ideas de hacerte daño o de querer morir, llama al *4141 (gratuito, 24 horas, desde celular o fijo). Para otra orientación de salud, Salud Responde atiende al 600 360 7777. Esa llamada tiene costo de llamada local según tu plan.",
    sources: [OMS_ESTRES, MINSAL_4141, SALUD_RESPONDE],
  },
  {
    cluster: "guias",
    slug: "estilos-de-apego",
    navLabel: "Estilos de apego",
    title: "Estilos de apego en adultos: una guía clara",
    h1: "Estilos de apego en adultos",
    description:
      "El apego describe cómo buscas cercanía cuando algo te importa. Revisa los estilos seguro, ansioso y evitativo sin convertirlos en una etiqueta.",
    answer:
      "El apego es la manera en que aprendiste a buscar cuidado y cercanía cuando algo te inquieta. En adultos se usa como un mapa, no como un diagnóstico. Los nombres más citados son seguro, ansioso y evitativo. Un cuarto, el desorganizado, describe una mezcla de acercarte y alejarte cuando la cercanía también fue fuente de miedo.",
    sections: [
      {
        heading: "De dónde sale el concepto",
        paragraphs: [
          "John Bowlby describió el apego como un sistema que se activa ante la separación, el miedo o la fatiga, y que busca a alguien disponible. Mary Ainsworth observó después cómo niñas y niños usaban a su figura de cuidado al reencontrarse.",
          "Llevar eso a la adultez es una traducción. Te puede servir para entender por qué en una discusión persigues una respuesta o te cierras. No explica toda tu historia ni condena a tu pareja.",
        ],
      },
      {
        heading: "Tres patrones que se reconocen fácil",
        paragraphs: [
          "En el apego seguro, puedes extrañar y también tolerar un silencio sin armarte una catástrofe. Pides y puedes estar solo un rato.",
          "En el ansioso, la distancia del otro enciende la alarma: revisas el celular, interpretas un atraso como rechazo y te cuesta soltar la conversación hasta quedar tranquilo. En el evitativo, la cercanía intensa incomoda: cambias de tema, te vas a la pega o minimizas lo que sientes para recuperar aire.",
        ],
        bullets: [
          "Ningún estilo es una identidad fija.",
          "Puedes verte ansioso con una persona y evitativo con otra.",
          "El estrés, el sueño y una relación inestable mueven el patrón.",
          "Ponerle nombre no reemplaza mirar qué haces en la discusión de hoy.",
        ],
      },
      {
        heading: "Cómo se ve en una discusión de pareja",
        paragraphs: [
          "Un ciclo frecuente: una persona pide claridad y la otra se retira porque se siente exigida. Quien pide, pide más fuerte. Quien se retira, se aleja más. Los dos quedan con la prueba de que el otro no está.",
          "Nombrar el ciclo (yo persigo, tú te cierras, o al revés) baja un poco la pelea por quién tiene la razón. No obliga a nadie a cambiar de estilo en una tarde.",
        ],
      },
      {
        heading: "Qué puedes practicar sin etiquetarte",
        paragraphs: [
          "Cuando notes la alarma, espera unos minutos antes del mensaje largo o de la puerta cerrada. Di una necesidad concreta: necesito saber si hablamos hoy en la noche, en vez de nunca te importo.",
          "Si el otro se aleja, no completes la historia por él. Pregunta. Si tú te cierras, avisa que vuelves en un rato en vez de desaparecer. Son conductas chicas. El estilo no se reescribe con una frase.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Un test de internet me dice mi apego?",
        answer:
          "Te da una foto gruesa y a veces te empuja a identificarte de más. Úsalo como curiosidad. Mira después qué haces en una conversación real.",
      },
      {
        question: "¿El apego ansioso es dependencia emocional?",
        answer:
          "Se parecen y no son sinónimos. La dependencia describe que tu estado queda tomado por el otro. El apego ansioso describe cómo reaccionas a la distancia. Pueden coincidir.",
      },
      {
        question: "¿Se puede cambiar?",
        answer:
          "Las personas modifican conductas de búsqueda y de retirada cuando practican otra respuesta y la relación lo permite. No es un interruptor ni una garantía.",
      },
    ],
    related: [
      { href: "/preguntas/que-es-el-apego-ansioso", label: "Qué es el apego ansioso" },
      { href: "/preguntas/como-poner-un-limite", label: "Cómo poner un límite" },
      { href: "/psicologo-apego-chillan", label: "Página de atención sobre apego" },
    ],
    sources: [APA_APEGO],
  },
  {
    cluster: "guias",
    slug: "burnout-laboral",
    updated: "2026-10-23",
    navLabel: "Burnout laboral",
    title: "Burnout laboral: qué es y cómo reconocerlo",
    h1: "Qué es el burnout laboral",
    description:
      "La OMS describe el burnout como un fenómeno del trabajo, no como una enfermedad. Revisa agotamiento, distancia y eficacia sin culparte del puesto.",
    answer:
      "El burnout es el resultado de un estrés laboral crónico que no se logró manejar. La Organización Mundial de la Salud lo clasifica como fenómeno ocupacional, no como una enfermedad. Se describe con tres rasgos: agotamiento, distancia mental o cinismo respecto del trabajo, y una sensación de ser menos eficaz.",
    sections: [
      {
        heading: "No es estar cansado un viernes",
        paragraphs: [
          "Un viernes intenso se recupera con descanso. En el burnout el descanso ya no repone: vuelves el lunes igual de vacío, te irrita la gente con la que trabajas y sientes que haces más y rindes menos.",
          "La definición importa porque mueve la causa. Si todo se explica como falta de carácter, se te pide aguantar un puesto que está mal diseñado. Parte del problema puede ser tuya (límites, autoexigencia) y parte está en la carga, los turnos, el jefe o la falta de control.",
        ],
      },
      {
        heading: "Tres señales para mirar con calma",
        paragraphs: [
          "Agotamiento: te cuesta partir el día y el sueño no alcanza. Distancia: te da lo mismo, contestas seco o evitas reuniones que antes te importaban. Eficacia: dudas de tu criterio aunque los hechos no muestren un error claro.",
          "Si solo está el cansancio de una semana punta, todavía no completa el cuadro. Si las tres se instalan por semanas, ya no es un mal día.",
        ],
        bullets: [
          "El fin de semana ya no alcanza para volver a sentirte tú.",
          "Aparece cinismo hacia usuarios, alumnos o compañeros.",
          "Trabajas más horas y te sientes menos capaz.",
          "El malestar se mete en el sueño, el ánimo o la casa.",
        ],
      },
      {
        heading: "Qué no se arregla solo con actitud",
        paragraphs: [
          "Dormir mejor y poner un límite ayudan, y a veces no alcanzan si la dotación, la meta o el maltrato siguen iguales. Decir que es burnout no te obliga a renunciar mañana. Te obliga a dejar de tratarlo como una falla personal única.",
          "Tampoco es lo mismo que una depresión. Pueden coincidir. Si el vacío está en toda tu vida y no solo en la pega, o si aparecen ideas de hacerte daño, hace falta una evaluación más amplia que un artículo.",
        ],
      },
      {
        heading: "Un orden para revisarlo",
        paragraphs: [
          "Anota carga real de la semana, horas de desconexión y una tarea que podrías soltar o delegar. Después mira un límite chico: no responder después de cierta hora, o pedir una prioridad en vez de aceptar tres.",
          "Si el lugar no permite ningún límite y tu salud ya se quebró, la conversación deja de ser de hábitos y pasa a ser de riesgo laboral y de apoyo médico. Un texto no decide esa renuncia por ti. La ficha local, distinta de esta guía, reúne el [estrés laboral y el burnout en Chillán](/psicologo-estres-laboral-chillan).",
        ],
      },
    ],
    faqs: [
      {
        question: "¿El burnout es una enfermedad?",
        answer:
          "La OMS lo ubica como fenómeno ocupacional en la CIE-11, no como un trastorno médico. Igual puede coincidir con ansiedad, depresión o problemas de sueño que sí requieren evaluación.",
      },
      {
        question: "¿Vacaciones alcanzan?",
        answer:
          "Sirven para ver si el descanso repone. Si a los dos días de volver estás igual, el puesto y tus hábitos de disponibilidad siguen produciendo el mismo resultado.",
      },
      {
        question: "¿Solo le pasa a quienes cuidan personas?",
        answer:
          "Se describió mucho en oficios de cuidado y también se usa para otros trabajos con carga crónica y poco control. El contexto laboral es parte de la definición.",
      },
    ],
    related: [
      { href: "/preguntas/como-saber-si-es-burnout", label: "Cómo saber si es burnout" },
      { href: "/preguntas/como-poner-un-limite", label: "Cómo poner un límite" },
      { href: "/guias/higiene-del-sueno", label: "Hábitos de sueño" },
      { href: "/psicologo-estres-laboral-chillan", label: "Estrés laboral y burnout en Chillán" },
    ],
    safety:
      "Si el agotamiento viene con ideas de hacerte daño, llama al *4141. Es gratuito y atiende las 24 horas.",
    sources: [OMS_BURNOUT, MINSAL_4141],
  },
  {
    cluster: "guias",
    slug: "higiene-del-sueno",
    navLabel: "Higiene del sueño",
    title: "Higiene del sueño: hábitos que ayudan a dormir",
    h1: "Higiene del sueño: hábitos que sí puedes probar",
    description:
      "Horario, luz, cafeína y cama solo para dormir. Una guía de hábitos de sueño y el límite de lo que esos hábitos pueden resolver por sí solos.",
    answer:
      "La higiene del sueño es un conjunto de hábitos que facilitan que el cuerpo asocie la noche con dormir: horario parejo, luz de día, cafeína más temprano y cama reservada al sueño. No es un tratamiento completo del insomnio. Si llevas semanas sin dormir pese a hacerlo bien, los hábitos ya no son toda la respuesta.",
    sections: [
      {
        heading: "Lo que más mueve la aguja",
        paragraphs: [
          "Levántate a una hora parecida también el fin de semana. Esa regularidad ordena el reloj mejor que intentar acostarte temprano a la fuerza un solo lunes. De día, toma luz natural. De noche, baja el brillo de las pantallas cerca de la hora de dormir.",
          "La cafeína se queda varias horas en el cuerpo. Si tomas café, té negro o bebidas cola después de media tarde y te cuesta conciliar, prueba mover esa taza más temprano durante una semana antes de concluir que tienes un trastorno.",
        ],
        bullets: [
          "Usa la cama para dormir, no para trabajar ni para rumiar con el celular.",
          "Si no te duermes en un rato, levántate y vuelve cuando aparezca el sueño.",
          "Evita usar el alcohol como inductor: fragmenta el sueño de la madrugada.",
          "Una siesta larga y tarde le roba sueño a la noche.",
        ],
      },
      {
        heading: "La cama no es el lugar para resolver el día",
        paragraphs: [
          "Si te acuestas a pensar la pega, el cerebro aprende que la almohada es una sala de reuniones. Deja una libreta fuera de la cama para anotar lo pendiente y retómalo al día siguiente. No es magia: es dejar de ensayar el problema a oscuras.",
          "El NHS resume ideas prácticas del mismo tipo: regularidad, luz, y no quedarte dando vueltas en la cama. Son hábitos, no una promesa de dormirte en diez minutos.",
        ],
      },
      {
        heading: "Cuando los hábitos no alcanzan",
        paragraphs: [
          "Si duermes mal tres noches o más por semana, durante más de un mes, y al día siguiente rindes peor, ya estás en terreno de insomnio y no solo de una mala higiene. El abordaje psicológico con más investigación para ese cuadro es la terapia cognitivo-conductual para el insomnio. No la reemplaza esta lista.",
          "Ronquidos con pausas, sueño que no repone nunca, dolor o síntomas de ánimo muy bajo necesitan una evaluación médica. Ajustar el café no trata una apnea.",
        ],
      },
      {
        heading: "Una prueba de siete días",
        paragraphs: [
          "Elige una sola variable: la hora de levantarte o la cafeína de la tarde. Cambiar cinco cosas a la vez no te deja saber cuál importó. Anota hora de acostarte, hora de levantarte y cuántas veces miraste el reloj.",
          "Mirar el reloj cada diez minutos aumenta la alerta. Da vuelta el celular o déjalo fuera del velador si esa es tu costumbre.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Cuántas horas tengo que dormir?",
        answer:
          "En adultos, muchas personas se sienten bien entre 7 y 9 horas. El número exacto es el que te deja funcionar al día siguiente, no una meta para forzar.",
      },
      {
        question: "¿La melatonina reemplaza estos hábitos?",
        answer:
          "Es un fármaco o suplemento, según cómo se venda, y no corresponde indicarla en una guía. Si ya la usas, un médico puede revisar si te sirve. Los hábitos siguen teniendo un lugar.",
      },
      {
        question: "¿Dormir más el sábado recupera la semana?",
        answer:
          "Alivia un poco y desordena el horario. Una diferencia enorme entre semana y fin de semana es una causa frecuente de domingo con insomnio.",
      },
    ],
    related: [
      { href: "/preguntas/por-que-la-mente-no-para", label: "Por qué la mente no para" },
      { href: "/preguntas/ansiedad-o-estres", label: "Ansiedad y estrés" },
      { href: "/tratamiento-insomnio-chillan", label: "Página de atención por insomnio" },
    ],
    sources: [NHS_SUENO],
  },
  {
    cluster: "guias",
    slug: "emocion-y-comida",
    updated: "2026-10-23",
    navLabel: "Emoción y comida",
    title: "Emoción y comida: cuando comes por malestar",
    h1: "Cuando comes para calmar una emoción",
    description:
      "Comer para bajar la angustia es una estrategia, no un defecto. Aprende a distinguir hambre, alivio y culpa sin dietas ni metas de peso. No es un plan alimentario.",
    answer:
      "Comer para calmarte es una forma de regular una emoción: ansiedad, aburrimiento, rabia o vacío. Funciona un rato porque distrae y porque ciertos alimentos activan una sensación de alivio. El problema no es moral. El problema es cuando esa queda como la única vía y después llega la culpa, que vuelve a pedir alivio.",
    sections: [
      {
        heading: "Hambre y alivio no se sienten igual",
        paragraphs: [
          "El hambre física suele subir de a poco, acepta más de un alimento y se calma al comer. El impulso por emoción llega rápido, pide un alimento muy concreto y no se detiene fácil en la saciedad. A veces aparece justo después de una discusión, de una reunión o de quedarte solo en la noche.",
          "No tienes que acertar siempre. Con notar la diferencia en dos o tres episodios de la semana ya tienes información. No es un diario para castigarte.",
        ],
      },
      {
        heading: "El ciclo de la culpa",
        paragraphs: [
          "Comes para bajar la tensión. Después te criticas. La crítica es otra emoción incómoda y el mismo recurso queda a la mano. Saltarte la comida siguiente para compensar suele aumentar el impulso más tarde.",
          "Esta página no propone una dieta, una cifra de peso ni una evaluación para una cirugía. Esas decisiones son médicas y nutricionales. Aquí solo se mira la función emocional del acto de comer.",
        ],
        bullets: [
          "Pregunta qué pasó en la hora previa, no solo qué comiste.",
          "Si hay hambre, come. Restringir de más también dispara el impulso.",
          "La culpa no corrige el episodio. Lo alarga.",
          "Un atracón con pérdida de control sostenida necesita evaluación, no un consejo de fuerza de voluntad.",
        ],
      },
      {
        heading: "Una pausa breve, no una prohibición",
        paragraphs: [
          "Cuando notes el impulso, espera diez minutos y ponle nombre a la emoción: estoy ansioso, estoy agotado, estoy solo. Después decide. A veces vas a comer igual. La pausa sirve para que deje de ser automático, no para ganarle una pelea a la comida.",
          "Ten a mano una alternativa corta que no sea comida ni castigo: salir a la vereda, un vaso de agua, escribir tres líneas, llamar a alguien. Si ninguna está disponible, el impulso va a ganar casi siempre. No es falta de carácter. Es falta de un plan.",
        ],
      },
      {
        heading: "Cuándo esto se queda chico",
        paragraphs: [
          "Si vomitas, usas laxantes, haces ejercicio para castigarte o el día se organiza alrededor de la comida y el cuerpo, esto supera una guía de hábitos. Los trastornos de la conducta alimentaria se evalúan con profesionales de salud, no con un artículo. En Chillán, anorexia, bulimia y atracón están en la página de [trastornos alimenticios](/psicologo-trastornos-alimenticios-chillan).",
          "Si el comer aparece junto con un ánimo muy bajo o con ansiedad que ya no te deja funcionar, mira también esas páginas del sitio. El alimento puede ser la parte visible de otra cosa.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Comer por ansiedad significa que tengo un trastorno alimentario?",
        answer:
          "No por sí solo. Se vuelve un problema clínico cuando hay pérdida de control frecuente, conductas compensatorias o un daño claro en tu salud y tu día. Ante la duda, pide una evaluación.",
      },
      {
        question: "¿Debo sacar esos alimentos de la casa?",
        answer:
          "Prohibirlos del todo suele aumentar el deseo. A algunas personas les sirve no tener el alimento más impulsivo a la vista durante un tiempo. Es un experimento, no una ley.",
      },
      {
        question: "¿Esta guía baja de peso?",
        answer:
          "No está escrita para eso y no informa resultados de peso. El foco es entender la función emocional de comer.",
      },
    ],
    related: [
      { href: "/preguntas/ansiedad-o-estres", label: "Ansiedad y estrés" },
      { href: "/guias/regulacion-emocional", label: "Cómo se regula una emoción" },
      { href: "/psicologo-trastornos-alimenticios-chillan", label: "Información sobre trastornos alimentarios" },
    ],
    sources: [DIPRECE_ANSIEDAD],
  },
  {
    cluster: "guias",
    slug: "regulacion-emocional",
    updated: "2026-10-23",
    navLabel: "Regulación emocional",
    title: "Regulación emocional: qué es y qué puedes practicar",
    h1: "Qué es la regulación emocional",
    description:
      "Regular una emoción no es borrarla. Es notar qué sientes y elegir una acción que no te deje peor. Una guía breve para el día a día, sin prometer milagros.",
    answer:
      "Regular una emoción es influir en cómo la sientes y en qué haces con ella. No es dejar de sentir rabia, miedo o pena. Es que esa emoción no sea la única que decide el mensaje que envías, la comida que tomas o la noche que te quedas despierto.",
    sections: [
      {
        heading: "Sentir y actuar no son el mismo paso",
        paragraphs: [
          "La emoción llega con una urgencia: hablar ahora, irte, comer, revisar. Esa urgencia es información, no una orden. Entre el impulso y el acto hay una ventana corta. Regular es usar esa ventana.",
          "Intentar no sentir suele fallar y suma una segunda capa: rabia por estar ansioso, vergüenza por estar triste. El objetivo más realista es sentir y hacer algo que no multiplique el daño.",
        ],
      },
      {
        heading: "Tres palancas que sí existen",
        paragraphs: [
          "El cuerpo: dormir, comer, bajar la cafeína y moverte cambian el volumen de la emoción. La atención: nombrar lo que sientes baja un poco la confusión. La acción: una conducta distinta a la automática (esperar, salir, pedir una pausa) enseña otra salida.",
          "Ninguna de las tres borra un problema real. Si la emoción viene de una deuda o de un maltrato, regularte no reemplaza resolver el hecho. Te deja en mejores condiciones para hacerlo.",
        ],
        bullets: [
          "Ponle un nombre simple: miedo, rabia, pena, vergüenza, alivio.",
          "Baja el cuerpo antes de la conversación difícil, no durante el grito.",
          "Elige una acción de 10 minutos, no un cambio de vida.",
          "Si la estrategia es siempre evitar, la emoción manda igual.",
        ],
      },
      {
        heading: "Estrategias que alivian y después cobran",
        paragraphs: [
          "Beber para soltar la pena, discutir para no sentir miedo, o trabajar hasta no pensar son regulaciones. Funcionan corto y dejan una cuenta. Verlas como estrategias, y no como tu personalidad, permite probar otra.",
          "El ejercicio de estimulación bilateral del sitio puede servir como pausa en un malestar leve. No es una técnica para una crisis ni para un recuerdo traumático. Léelo antes de usarlo.",
        ],
      },
      {
        heading: "Cómo practicar sin un programa de ocho semanas",
        paragraphs: [
          "Elige una situación repetida, por ejemplo el correo de la jefatura. Anota emoción, impulso y qué hiciste. Al día siguiente cambia solo el tercer paso. Una semana de ese registro enseña más que una lista larga de técnicas.",
          "Si la emoción es tan intensa que no hay ventana, o si viene con ideas de hacerte daño, esta práctica se queda corta. Ahí corresponde apoyo de otra persona, no más fuerza de voluntad. Si además los vínculos se vuelven el centro del malestar y las emociones cambian muy rápido, la ficha de atención es [trastorno límite de la personalidad en Chillán](/tratamiento-tlp-chillan). Esta guía no pone ese diagnóstico.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Regularme significa aguantar?",
        answer:
          "No. Aguantar es no decir nada y explotar después. Regular es elegir cuándo y cómo dices lo que necesitas, con menos daño.",
      },
      {
        question: "¿Por qué me desbordo por algo chico?",
        answer:
          "A veces el hecho es chico y el cansancio, el hambre o una historia previa ya tenían la emoción alta. El disparador no es toda la causa.",
      },
      {
        question: "¿Sirve contar hasta diez?",
        answer:
          "Puede abrir la ventana si de verdad paras. Si cuentas mientras sigues escribiendo el mensaje, no cambió la acción.",
      },
    ],
    related: [
      { href: "/guias/emocion-y-comida", label: "Comer para calmar una emoción" },
      { href: "/preguntas/por-que-la-mente-no-para", label: "Por qué la mente no para" },
      { href: "/preguntas/como-poner-un-limite", label: "Cómo poner un límite" },
      { href: "/emdr-autoadministrado", label: "Ejercicio bilateral para malestar leve" },
    ],
    sources: [NICE_ANSIEDAD],
  },
  {
    cluster: "guias",
    slug: "familiar-con-problema-de-alcohol",
    updated: "2026-10-18",
    navLabel: "Familiar con problema de alcohol",
    title: "Familiar con alcohol: señales y cómo puedes ayudar",
    h1: "Cómo reconocer un problema con el alcohol y ayudar a un familiar",
    description:
      "Señales de que el alcohol ya ordena la vida de un familiar, cómo conversar y qué no ayuda. No diagnostica y no reemplaza una urgencia médica.",
    answer:
      "Una relación problemática con el alcohol no se define solo por la cantidad. Importa si la bebida ya decide el ánimo, el sueño, la plata o las peleas, y si los intentos de parar duran menos de lo que la persona se promete. Desde la familia puedes describir lo que ves, cuidar tus límites y pedir ayuda. No puedes controlar el trago de otra persona ni diagnosticarla.",
    sections: [
      {
        heading: "Señales que se ven desde afuera",
        paragraphs: [
          "La guía de NICE sobre trastornos por consumo de alcohol y la hoja de la OMS describen un patrón que se sostiene: beber más o por más tiempo del que se pensaba, no poder cortar, y seguir aunque aparezcan daños en la salud, el trabajo o los vínculos. Tú no tienes el diario de la persona. Sí puedes anotar hechos.",
          "Un hecho es distinto de un insulto. Llegó tarde tres veces esta semana, escondió botellas, pidió plata para una deuda que no explica, o al día siguiente no recuerda la pelea. Una noche aislada no alcanza para ponerle un nombre clínico. Un patrón que se repite, sí merece una conversación y, si la persona quiere, una evaluación.",
        ],
        bullets: [
          "Bebe para dormir, para calmarse o para poder estar con gente.",
          "Minimiza la cantidad o se enoja si le preguntas con calma.",
          "Cambia el humor después de tomar: irritabilidad, culpa o aislamiento.",
          "El fin de semana, o un día cualquiera, ya se organiza alrededor del próximo trago.",
        ],
      },
      {
        heading: "Cómo conversar sin convertir la casa en un juicio",
        paragraphs: [
          "Elige un momento en que la persona esté sobria y tú no estés en la peor rabia. Habla de hechos y de cómo te afecta: el domingo no pudiste dormir porque no sabías si iba a llegar. Evita la etiqueta como primera frase. Alcoholismo, dicho como insulto, suele cerrar la puerta.",
          "Puedes ofrecer una opción concreta: acompañar a una evaluación, dejar un número a mano, o leer juntos la página general sobre alcoholismo. La decisión de ir sigue siendo de la otra persona. Si dice que no, el límite tuyo igual puede existir.",
        ],
        bullets: [
          "Una razón breve alcanza. Un discurso largo invita a discutir cada ejemplo.",
          "No negocies el límite en medio de la borrachera.",
          "Si hay niños en la casa, prioriza que estén cuidados esa noche.",
          "Repite la misma frase si hace falta. No armes un argumento nuevo cada vez.",
        ],
      },
      {
        heading: "Qué suele empeorar el problema",
        paragraphs: [
          "Pagar la deuda del trago, mentir en la pega o esconder las botellas para que no se note enseña que el costo lo absorbe otra persona. Es parecido a lo que ocurre cuando una familia financia la apuesta: la guía sobre un familiar con ludopatía recorre ese mismo nudo de plata, secreto y desgaste.",
          "Vigilar el celular toda la noche tampoco es un plan. Te agota y no le devuelve el control a quien bebe. Un límite dice lo que tú vas a hacer: no presto plata para alcohol, no cubro la ausencia en el trabajo, no sigo la pelea si hay gritos.",
        ],
      },
      {
        heading: "Tu desgaste y la alerta médica",
        paragraphs: [
          "Cuidar a alguien que bebe de más también desordena el sueño, la rabia y la culpa. Eso no se arregla con más control. Puedes bajar la activación del día con un recurso acotado, como el ejercicio de estimulación bilateral del sitio, si el malestar es leve y cotidiano. No lo uses para procesar una escena de violencia ni para reemplazar una conversación con alguien que te escuche.",
          "Cortar el alcohol de golpe puede ser peligroso si el consumo es alto. Temblores marcados, sudoración intensa, confusión o un antecedente de convulsiones al dejar de beber piden evaluación médica, no una promesa de aguantar en la casa. Si hay ideas de hacerse daño, la llamada es al *4141.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Tengo que esperar a que toque fondo?",
        answer:
          "No. Puedes hablar cuando el patrón ya se nota, aunque la persona siga trabajando. Tocar fondo no es un requisito clínico. Sí hace falta que la otra persona acepte una evaluación para que el trabajo sea con ella.",
      },
      {
        question: "¿Sirve esconder las botellas?",
        answer:
          "Quitar el alcohol de la casa puede ser parte de un plan que la persona ya aceptó. Esconderlo a escondidas, sin acuerdo, suele volverse una pelea y no corta el patrón.",
      },
      {
        question: "¿Y si no quiere hablar?",
        answer:
          "Puedes mantener el límite con la plata y con lo que estás dispuesto a cubrir. También puedes buscar orientación para ti. Forzar una sesión no reemplaza esa decisión.",
      },
    ],
    related: [
      { href: "/alcoholismo-chillan", label: "Alcoholismo: qué es y qué señales importan" },
      { href: "/guias/familiar-con-ludopatia", label: "Ayudar a un familiar con adicción al juego" },
      { href: "/preguntas/como-poner-un-limite", label: "Cómo poner un límite" },
      { href: "/psicologo-adicciones-chillan", label: "Información sobre adicciones" },
    ],
    product: EMDR_PRODUCT,
    safety:
      "Si hay ideas de hacerse daño, llama al *4141 (gratuito, 24 horas). Ante temblores, confusión o un antecedente de convulsiones al dejar el alcohol, pide evaluación médica. Salud Responde atiende al 600 360 7777. En una urgencia, llama al 131.",
    sources: [NICE_ALCOHOL, OMS_ALCOHOL, MINSAL_4141, SALUD_RESPONDE],
  },
];

const QUESTION_PAGES: InfoPage[] = [
    {
    cluster: "preguntas",
    slug: "que-es-la-erp-para-el-toc",
    navLabel: "Qué es la ERP para el TOC",
    title: "Qué es la terapia ERP para el TOC",
    h1: "Qué es la terapia ERP para el TOC",
    description:
      "La ERP es exposición con prevención de respuesta: te acercas al miedo del TOC y no haces el ritual. Esta página explica; la atención en Chillán es otra.",
    answer:
      "ERP significa exposición con prevención de respuesta. En el TOC, te acercas de forma planificada a lo que dispara la obsesión y no haces el ritual que normalmente baja la angustia. El aprendizaje es que la ansiedad sube, se mantiene un rato y puede bajar sin la compulsión.",
    sections: [
      {
        heading: "Por qué el ritual no cierra el tema",
        paragraphs: [
          "La obsesión trae una alarma (contaminación, daño, duda). El ritual (lavar, revisar, rezar, pedir confirmación, rumiar hasta quedar seguro) baja esa alarma. El alivio enseña que el ritual era necesario. A la siguiente, la duda vuelve más pronto.",
          "La ERP interrumpe esa clase. No discute durante horas si el peligro era real. Ensaya quedarte con la duda sin completar el ritual.",
        ],
      },
      {
        heading: "Cómo se ve en la práctica",
        paragraphs: [
          "Se arma una lista de situaciones de menor a mayor miedo. Se elige una que puedas sostener, se acuerda qué ritual no vas a hacer y se permanece ahí el tiempo pactado. No se parte por la imagen más aterradora ni se hace como castigo.",
          "La guía CG31 de NICE considera la TCC que incluye ERP como un tratamiento psicológico principal del TOC. Eso orienta la elección del método. No indica que debas diseñarte una exposición intensa sin evaluación, sobre todo si hay riesgo de daño, de contaminación grave o de horas de ritual.",
        ],
        bullets: [
          "Exposición: acercarte al disparador en un paso acordado.",
          "Prevención de respuesta: no hacer el ritual ni uno escondido.",
          "La ansiedad puede subir antes de bajar. Eso es esperable.",
          "Pedirle a alguien que te confirme que quedó bien suele ser otro ritual.",
        ],
      },
      {
        heading: "Qué no es ERP",
        paragraphs: [
          "No es exponerte al peor miedo el primer día para ver si aguantas. Tampoco es pensar en positivo ni distraerte hasta que se te pase. Si te distraes del todo, no aprendiste que podías estar con la duda.",
          "Los rituales mentales cuentan: repasar, rezar en un orden, o revisar la memoria hasta sentir certeza. Dejar de lavarte las manos y seguir rumiando una hora es una ERP a medias.",
        ],
      },
      {
        heading: "Errores frecuentes",
        paragraphs: [
          "Hacer la exposición y después compensar con un ritual más largo. Pedir que la familia participe del ritual para terminar antes. Medir el éxito solo por si la ansiedad llegó a cero. El éxito temprano es hacer el paso sin el ritual, aunque el nervio siga.",
          "Si el TOC ocupa varias horas del día, esta explicación no alcanza como plan. Sirve para reconocer el método cuando lo converses con quien te evalúe. La página de terapia ERP para el TOC en Chillán es la ficha local: esta pregunta no la reemplaza.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿ERP y EPR son lo mismo?",
        answer:
          "Sí. En español se dice exposición con prevención de respuesta. Las siglas ERP vienen del nombre en inglés. No es otro tratamiento.",
      },
      {
        question: "¿Tengo que dejar todos los rituales el primer día?",
        answer:
          "No. Se elige un paso. Dejar todo de golpe suele llevar a abandonar y a concluir que no sirvió.",
      },
      {
        question: "¿La medicación reemplaza la ERP?",
        answer:
          "No necesariamente. En cuadros moderados o severos un médico puede indicar fármacos, a veces junto con la terapia. La decisión de medicar no se toma en una página.",
      },
    ],
    related: [
      { href: "/preguntas/obsesiones-y-compulsiones", label: "Obsesiones y compulsiones" },
      { href: "/preguntas/que-es-la-terapia-cognitivo-conductual", label: "Qué es la terapia cognitivo-conductual" },
      { href: "/preguntas/por-que-la-mente-no-para", label: "Por qué la mente no para" },
      { href: "/tratamiento-toc-chillan", label: "Página de atención para TOC" },
    ],
    sources: [NICE_TOC],
  },
  {
    cluster: "preguntas",
    slug: "emdr-autoadministrado-y-terapia",
    navLabel: "EMDR autoadministrado y terapia",
    title: "EMDR autoadministrado: qué puede y qué no puede",
    h1: "¿El EMDR autoadministrado reemplaza la terapia?",
    description:
      "El ejercicio bilateral del sitio no reemplaza una terapia EMDR. Mira para qué malestar leve puede servir y cuándo tienes que parar. Léelo antes.",
    answer:
      "No. El ejercicio de este sitio no reemplaza una terapia EMDR ni un tratamiento para trauma o TEPT. Es una práctica de estimulación bilateral visual para emoción cotidiana o estrés leve, con la condición de que puedas parar y volver al presente.",
    sections: [
      {
        heading: "Qué incluye el recurso y qué le falta",
        paragraphs: [
          "El ejercicio muestra un punto que se mueve y te permite ajustar la velocidad y la duración. Eso imita solo el componente bilateral. No incluye evaluación de tu historia, preparación de recursos ni el cierre que tiene un procedimiento EMDR completo.",
          "Por eso la página del recurso advierte que no lo uses en crisis, trauma complejo o un trastorno diagnosticado que te desborde. Leer esa advertencia es parte de usarlo bien.",
        ],
      },
      {
        heading: "Cuándo puede tener sentido probarlo",
        paragraphs: [
          "Un malestar moderado, con los pies en el presente: el nervio de una reunión, una discusión que ya terminó, una emoción que da vueltas y no te saca de la realidad. Reserva un rato sin interrupciones, en un lugar donde puedas detenerte.",
          "Si al pensar en el tema aparecen imágenes que no controlas, vergüenza extrema o ganas de hacerte daño, no es material para este ejercicio. Para ahí.",
        ],
        bullets: [
          "Sirve como práctica guiada y gratuita, no como sesión clínica.",
          "Parte por algo leve. No elijas el peor recuerdo para probar.",
          "Si te desorganizas, ciérralo. No completes los sets por disciplina.",
          "Un buen uso incluye leer los límites antes de apretar empezar.",
        ],
      },
      {
        heading: "Qué hacer si se pone intenso",
        paragraphs: [
          "Para el movimiento, nombra tres objetos de la pieza y apoya los pies. No sigas para ver si se te pasa dentro del ejercicio. Intensidad que crece y te desconecta es una señal de detenerte, no de aguantar.",
          "Si eso te pasa con recuerdos de accidentes, violencia o abuso, el paso siguiente es una evaluación con alguien formado en trauma, no otro intento a solas.",
        ],
      },
      {
        heading: "Cómo se relaciona con la guía de EMDR",
        paragraphs: [
          "La guía explica las fases del procedimiento profesional. Esta pregunta responde solo al recurso digital. Leer las dos evita confundir un punto en la pantalla con un tratamiento de TEPT.",
          "La guía de la OMS nombra el EMDR dentro de las terapias para adultos con TEPT cuando lo aplica personal de salud capacitado. Esa frase no se extiende a un ejercicio autónomo.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Es gratis?",
        answer:
          "Sí. El ejercicio está en el sitio y no pide pago. Que sea gratis no lo vuelve adecuado para cualquier malestar.",
      },
      {
        question: "¿Cuántos minutos lo uso?",
        answer:
          "La página del recurso habla de sets breves y de reservar unos 15 a 20 minutos si vas a hacer varios. Para y ajusta si te cansas o te activas de más.",
      },
      {
        question: "¿Puedo usarlo todas las noches para dormirme?",
        answer:
          "No está pensado como inductor del sueño ni como reemplazo de hábitos de higiene del sueño. Si el insomnio ya es el problema, mira esa guía.",
      },
    ],
    related: [
      { href: "/guias/que-es-el-emdr", label: "Qué es el EMDR" },
      { href: "/emdr-autoadministrado/ejercicio", label: "Abrir el ejercicio" },
      { href: "/guias/higiene-del-sueno", label: "Higiene del sueño" },
    ],
    product: EMDR_PRODUCT,
    safety:
      "Si aparecen ideas de hacerte daño, deja el ejercicio y llama al *4141. Es gratuito, confidencial y funciona las 24 horas.",
    sources: [OMS_ESTRES, MINSAL_4141],
  },
  {
    cluster: "preguntas",
    slug: "como-saber-si-es-burnout",
    navLabel: "Cómo saber si es burnout",
    title: "Cómo saber si lo que tienes es burnout",
    h1: "Cómo saber si es burnout",
    description:
      "Tres preguntas para separar un mal mes de un burnout: si el descanso repone, si te distanciaste de la pega y si dudas de tu eficacia. Sin etiqueta.",
    answer:
      "Puede ser burnout si el agotamiento no se va con el descanso, si te distanciaste de tu trabajo con cinismo o indiferencia, y si te sientes menos capaz aunque estés echándole más horas. Una sola semana mala no completa ese cuadro. Semanas en las que el descanso ya no repone, sí se le parecen.",
    sections: [
      {
        heading: "Tres preguntas concretas",
        paragraphs: [
          "Después de un fin de semana sin pendientes, ¿vuelves con algo de energía o partes el lunes igual de vacío? ¿Te importa menos la gente a la que atiendes, enseñas o acompañas, y contestas en seco para que te dejen? ¿Sientes que tu criterio empeoró, aunque nadie te haya mostrado un error claro?",
          "Si respondes que sí a las tres y esto lleva semanas, calza con la descripción de la OMS: agotamiento, distancia mental y menor eficacia, ligados al trabajo. Sigue siendo una orientación, no un diagnóstico que te pongas solo.",
        ],
      },
      {
        heading: "Qué más se le parece",
        paragraphs: [
          "Una depresión puede quitarte energía también en la casa, en cosas que antes te gustaban y no solo en la pega. Un duelo tiene un hecho de pérdida. Un trastorno de sueño puede dejar el mismo cansancio con otra causa. Por eso la palabra burnout no cierra la evaluación.",
          "Tampoco es lo mismo que no te guste tu carrera. Puedes estar en el puesto correcto y en una carga imposible, o en el puesto incorrecto y descansado. Las dos cosas existen.",
        ],
        bullets: [
          "Mal mes: hay un pico y el descanso lo mueve.",
          "Burnout: el descanso ya no cambia el estado de base.",
          "Depresión: el vacío atraviesa áreas que no son el trabajo.",
          "Pueden superponerse. No elijas una etiqueta para evitar la otra.",
        ],
      },
      {
        heading: "Qué hacer con la respuesta",
        paragraphs: [
          "Si es un mal mes, recorta una demanda concreta y cuida el sueño una semana antes de concluir. Si se parece al burnout, mira qué parte es carga del puesto y qué parte es tu disponibilidad sin borde. Las dos se pueden conversar. Solo la segunda depende de ti.",
          "Renunciar, pedir un cambio de funciones o ir a un médico son decisiones distintas. Esta respuesta no elige por ti. Sí deja fuera la idea de que te falta carácter.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Me lo puedo autodiagnosticar?",
        answer:
          "Puedes reconocer el patrón. El nombre clínico o laboral, si hace falta para una licencia o un cambio, lo ve un profesional. La OMS no lo clasifica como enfermedad.",
      },
      {
        question: "¿Si amo mi pega, no puede ser burnout?",
        answer:
          "Puede. El compromiso alto a veces convive con una carga que ya no es sostenible. Que te importe el trabajo no te protege del agotamiento.",
      },
      {
        question: "¿Cuánto tiempo tiene que durar?",
        answer:
          "No hay un número oficial en esta página. Si el descanso dejó de reponer durante varias semanas, ya merece mirarlo en serio.",
      },
    ],
    related: [
      { href: "/guias/burnout-laboral", label: "Guía sobre burnout laboral" },
      { href: "/preguntas/duelo-o-depresion", label: "Duelo o depresión" },
      { href: "/guias/higiene-del-sueno", label: "Higiene del sueño" },
    ],
    sources: [OMS_BURNOUT],
  },
  {
    cluster: "preguntas",
    slug: "que-es-el-apego-ansioso",
    navLabel: "Qué es el apego ansioso",
    title: "Apego ansioso: qué es y cómo se nota",
    h1: "Qué es el apego ansioso",
    description:
      "El apego ansioso es una alarma ante la distancia de alguien que te importa. Mira cómo se nota y qué puedes hacer sin etiquetarte de por vida.",
    answer:
      "El apego ansioso es un patrón: cuando alguien importante se demora, se enfría o no responde, tu alarma de rechazo se enciende rápido. Buscas cercanía, revisas señales y te cuesta quedarte tranquilo hasta tener una confirmación. Es una descripción de esa reacción, no una enfermedad ni una sentencia.",
    sections: [
      {
        heading: "Cómo se nota en el día",
        paragraphs: [
          "Un mensaje sin respuesta se vuelve una prueba. Preguntas si está todo bien más de una vez. Lees un tono seco como el inicio de un abandono. Si la otra persona pide espacio, el espacio se siente como castigo y no como aire.",
          "También puede aparecer fuera de la pareja: con amistades o en la pega, cuando el silencio de alguien con autoridad te desordena el día. El mapa del apego viene de cómo buscamos cuidado ante una amenaza, no solo del pololeo.",
        ],
      },
      {
        heading: "Lo que la alarma intenta conseguir",
        paragraphs: [
          "La persecución (el texto largo, la pregunta repetida, el reclamo) busca recuperar cercanía. A veces lo logra un rato. Otras veces empuja al otro a retirarse, y esa retirada confirma el miedo. El ciclo queda armado entre los dos, no solo dentro de ti.",
          "Verlo no significa que inventes el problema. A veces el otro sí está distante o poco confiable. El patrón ansioso es la velocidad y el tamaño de la historia que completas antes de tener el dato.",
        ],
        bullets: [
          "Esperar unos minutos antes del segundo mensaje.",
          "Pedir un dato concreto: ¿hablamos hoy en la noche?",
          "No revisar el celular como si fuera un examen.",
          "Contarle a alguien que no sea la persona del conflicto, si necesitas bajar la urgencia.",
        ],
      },
      {
        heading: "Qué no ayuda",
        paragraphs: [
          "Decirte que estás loco, o que por tener apego ansioso no puedes querer a nadie. Tampoco sirve un test que te encasilla y te da una lista de defectos. El nombre es útil si te muestra la próxima conducta que puedes cambiar.",
          "Si la relación tiene control, humillación o miedo, el problema no es tu estilo de apego. Ahí el paso es protegerte, no trabajar tu tolerancia a la distancia.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Se cura?",
        answer:
          "No se habla como de una infección. Las personas pueden responder de otra forma cuando practican y cuando la relación es lo bastante estable. No hay un plazo único.",
      },
      {
        question: "¿Es lo mismo que dependencia emocional?",
        answer:
          "No siempre. La dependencia describe que tu estado queda tomado por el otro. El apego ansioso describe la alarma ante la distancia. Pueden ir juntos.",
      },
      {
        question: "¿Mi pareja tiene que cambiar para que yo esté bien?",
        answer:
          "Los dos participan del ciclo. Tú puedes cambiar tu parte (la persecución) aunque el otro no haga un proceso. Una relación sostenida en silencio o desprecio no se arregla solo con tu calma.",
      },
    ],
    related: [
      { href: "/guias/estilos-de-apego", label: "Guía de estilos de apego" },
      { href: "/preguntas/como-poner-un-limite", label: "Cómo poner un límite" },
      { href: "/psicologo-dependencia-emocional-chillan", label: "Información sobre dependencia emocional" },
    ],
    sources: [APA_APEGO],
  },
  {
    cluster: "preguntas",
    slug: "duelo-o-depresion",
    updated: "2026-10-23",
    navLabel: "Duelo o depresión",
    title: "Duelo o depresión: cómo distinguirlos",
    h1: "¿Es duelo o depresión?",
    description:
      "El duelo duele en olas y sigue conectado con lo que perdiste. La depresión aplana más áreas de la vida. Pueden coincidir. Una guía para no apurarte.",
    answer:
      "El duelo es la respuesta a una pérdida y suele venir en olas: un día puedes funcionar y al siguiente una canción te deja en el suelo. La depresión es un estado más global, en el que el interés, la energía y la idea de valer se apagan en varias áreas, no solo cuando recuerdas a quien o a lo que perdiste. Pueden ocurrir juntas.",
    sections: [
      {
        heading: "Qué se conserva en el duelo",
        paragraphs: [
          "En un duelo, el dolor está amarrado al hecho: la persona, la relación, la salud, el país que dejaste, el trabajo. A ratos aparece calidez al recordar, o ganas de hacer algo que a esa persona le importaba. La autoestima no tiene por qué caerse entera.",
          "No hay un calendario correcto. La idea de cinco fases obligatorias (negación, rabia, negociación, tristeza y aceptación) es un relato popular, no una regla. Muchas personas no pasan por esas etapas en orden, y eso no significa que lo estén haciendo mal.",
        ],
      },
      {
        heading: "Cuándo se parece más a depresión",
        paragraphs: [
          "Cuando casi nada genera interés, cuando te criticas de forma constante, cuando el cuerpo se frena durante semanas y la pena ya no se organiza alrededor del recuerdo sino de una sensación de vacío general. También cuando aparecen ideas de que no vales o de que otros estarían mejor sin ti. Cómo mirar ánimo, interés y energía sin un test está en [cómo saber si tengo depresión](/preguntas/senales-de-depresion). Si el peso es la culpa y no solo la pena, la ficha es [sentimiento de culpa en Chillán](/psicologo-sentimiento-culpa-chillan).",
          "Esas ideas no son una parte normal que haya que aguantar en silencio. Aunque hayan empezado con una pérdida, merecen una evaluación.",
        ],
        bullets: [
          "Duelo: el dolor se enciende con recordatorios y puede haber treguas.",
          "Depresión: el aplanamiento atraviesa el día, no solo el recuerdo.",
          "Culpa de duelo: ojalá hubiera alcanzado a decirle algo.",
          "Culpa depresiva: soy una carga, no sirvo, dañé todo.",
        ],
      },
      {
        heading: "Qué puedes hacer mientras lo distingues",
        paragraphs: [
          "Mantén una rutina mínima de comida, sueño y una salida corta. Habla de la persona o del hecho con alguien que no te apure a superarlo. Evita decidir cambios grandes (mudanza, renuncia, nueva relación) en las primeras semanas si puedes postergarlos.",
          "Si no comes, no duermes nada o aparecen ideas de muerte, no esperes a tener clara la etiqueta. Pide ayuda el mismo día.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Cuánto debe durar un duelo?",
        answer:
          "No hay un plazo único. Que siga doliendo después de unos meses no demuestra por sí solo una depresión. Que no puedas funcionar en absoluto, sí pide evaluación.",
      },
      {
        question: "¿Hablar de quien murió alarga el duelo?",
        answer:
          "No. Contar recuerdos suele ser parte de integrar la pérdida. Lo que agota es que te obliguen a estar bien o que nadie pueda escuchar.",
      },
      {
        question: "¿Un duelo por una separación cuenta?",
        answer:
          "Sí. También el duelo por una salud, una migración o un proyecto. La pérdida no tiene que ser una muerte para doler en serio.",
      },
    ],
    related: [
      { href: "/preguntas/senales-de-depresion", label: "Cómo saber si tengo depresión" },
      { href: "/guias/duelo-etapas-y-mitos", label: "Etapas y mitos del duelo" },
      { href: "/guias/acompanar-a-alguien-en-duelo", label: "Cómo acompañar a alguien en duelo" },
      { href: "/preguntas/cuanto-dura-un-duelo", label: "Cuánto dura un duelo" },
      { href: "/guias/regulacion-emocional", label: "Regulación emocional" },
      { href: "/psicologo-duelo-chillan", label: "Página de atención por duelo" },
      { href: "/psicologo-depresion-chillan", label: "Página de atención por depresión" },
    ],
    safety:
      "Si piensas en hacerte daño o en querer morir, llama ahora al *4141. Es gratuito, confidencial y atiende las 24 horas desde celular o fijo.",
    sources: [MINSAL_4141, SALUD_RESPONDE],
  },
  {
    cluster: "preguntas",
    slug: "por-que-la-mente-no-para",
    navLabel: "Por qué la mente no para",
    title: "Por qué la mente no para de pensar",
    h1: "Por qué la mente no para de pensar",
    description:
      "Rumiación no es lo mismo que resolver un problema. Mira por qué el pensamiento se queda pegado y qué intento de control lo empeora de noche.",
    answer:
      "La mente no para porque está tratando de cerrar una amenaza o una pena que no tiene un cierre claro. Eso se llama rumiación cuando das vueltas al mismo tema sin llegar a una acción. Resolver un problema tiene un paso siguiente. Rumiar se siente igual de urgente y no produce ese paso.",
    sections: [
      {
        heading: "Rumiación y problema no son iguales",
        paragraphs: [
          "Resolver suena así: mañana escribo el correo y pido el plazo. Rumiar suena así: por qué soy así, qué van a pensar, qué habría pasado si, durante cuarenta minutos y sin una acción al final. El tema puede ser real. El modo no avanza.",
          "La rumiación mantiene el ánimo bajo y la ansiedad alta porque el cerebro sigue en la escena. Intentar no pensar en eso suele traer el pensamiento de vuelta, igual que cuando te prohíbes imaginar un objeto.",
        ],
      },
      {
        heading: "Qué lo echa a andar",
        paragraphs: [
          "Cansancio, cafeína tarde, una conversación a medias y la costumbre de revisar el día en la cama. También la idea de que, si piensas un poco más, vas a quedar seguro. En el TOC esa búsqueda de certeza se vuelve un ritual mental. En la ansiedad, se vuelve anticipación.",
          "No necesitas una causa profunda para empezar a notarlo. La hora y el lugar ya te dan una pista: si siempre es de noche y en la cama, el tratamiento del hábito de la cama importa tanto como el contenido del pensamiento.",
        ],
        bullets: [
          "Ponle un límite de horario: lo veo mañana a las 9, con luz.",
          "Escribe la acción, no el ensayo de la conversación.",
          "Si no hay acción posible hoy, el tema se pospone. No se resuelve de madrugada.",
          "Sal de la cama si llevas un rato dando vueltas.",
        ],
      },
      {
        heading: "Un ensayo de diez minutos",
        paragraphs: [
          "Elige un momento del día, no la hora de dormir, y escribe durante diez minutos todo lo que la mente repite. Después subraya solo lo que tiene un paso concreto. El resto se queda en la hoja. Mañana puedes repetir. No es un diario infinito.",
          "Si al escribir aparecen ideas de hacerte daño, cierra la hoja y pide ayuda. Esa rumiación no se trata con un ejercicio de agenda.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Pensar mucho es inteligencia?",
        answer:
          "Analizar un problema puede ser útil. Dar vueltas sin una acción, de noche y con angustia, es rumiación. La diferencia está en si aparece un paso.",
      },
      {
        question: "¿Meditar lo detiene?",
        answer:
          "Una práctica de atención puede ayudarte a notar que estás rumiando. No es obligatorio ni es un curso de este sitio. Si meditar te deja peor, no insistas solo.",
      },
      {
        question: "¿Es TOC?",
        answer:
          "No por el solo hecho de pensar de más. En el TOC suele haber obsesiones y rituales para bajar la alarma. Si reconoces eso, lee la pregunta sobre la ERP.",
      },
    ],
    related: [
      { href: "/guias/higiene-del-sueno", label: "Higiene del sueño" },
      { href: "/preguntas/que-es-la-erp-para-el-toc", label: "Qué es la ERP para el TOC" },
      { href: "/preguntas/obsesiones-y-compulsiones", label: "Obsesiones y compulsiones" },
      { href: "/preguntas/procrastinacion-y-ansiedad", label: "Procrastinación y ansiedad" },
      { href: "/preguntas/ansiedad-o-estres", label: "Ansiedad y estrés" },
      { href: "/guias/regulacion-emocional", label: "Regulación emocional" },
    ],
    safety:
      "Si los pensamientos incluyen hacerte daño, llama al *4141. No uses un ejercicio a solas para eso.",
    sources: [NICE_ANSIEDAD, NICE_TOC, MINSAL_4141],
  },
  {
    cluster: "preguntas",
    slug: "como-poner-un-limite",
    navLabel: "Cómo poner un límite",
    title: "Cómo poner un límite sin sentirte culpable",
    h1: "Cómo poner un límite sin sentirte culpable",
    description:
      "Un límite dice lo que tú vas a hacer, no cómo debe portarse el otro. Una forma breve de decirlo y qué hacer con la culpa que aparece después.",
    answer:
      "Un límite es una decisión sobre tu conducta: a qué hora dejas de responder, qué tema no conversas en ese momento, qué ayuda puedes dar y cuál no. No es una orden para que el otro cambie de personalidad. La culpa aparece seguido, sobre todo si aprendiste que decir que no equivale a fallarle a alguien.",
    sections: [
      {
        heading: "Una frase que se puede decir",
        paragraphs: [
          "Prueba esta estructura: veo que necesitas esto, yo puedo hacer esta parte, y esto otro no lo voy a hacer. Por ejemplo: puedo hablar hoy veinte minutos, y no voy a seguir la conversación si hay gritos. O: el informe lo entrego el viernes, y no voy a revisarlo esta noche.",
          "Mientras más explicas, más material das para que te convenzan. Una razón breve alcanza. Repetir la misma frase, con calma, funciona mejor que un discurso nuevo cada vez.",
        ],
      },
      {
        heading: "La culpa no demuestra que esté mal",
        paragraphs: [
          "La culpa avisa que alguien puede molestarse o que tú te ves como la persona que siempre está. Es una emoción, no un veredicto. Si cada límite te hace volver atrás a los diez minutos, el otro aprende que insistir funciona.",
          "Otra cosa es el daño. Si dices que no por castigar, o si el límite esconde un desprecio, la culpa tiene otro dato. Un límite sano se puede explicar sin humillar.",
        ],
        bullets: [
          "Habla de tu conducta, no del carácter del otro.",
          "Elige un límite chico y cúmplelo una semana.",
          "No lo negocies en el momento de más rabia.",
          "Si hay miedo a una reacción violenta, prioriza seguridad antes que la frase perfecta.",
        ],
      },
      {
        heading: "En la pega y en la casa no suena igual",
        paragraphs: [
          "En la pega, un límite claro es un horario o una prioridad: esto lo hago hoy y esto queda para mañana, ¿cuál prefieres? En la casa, puede ser una tarea de cuidado: puedo ir el sábado en la tarde, y no puedo quedarme la semana entera.",
          "Si el otro se enoja, eso no anula el límite. Puedes reconocer la molestia sin retirar lo que dijiste. Me doy cuenta de que te frustra, y igual no voy a poder hoy.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Poner un límite es egoísta?",
        answer:
          "Es egoísta usar al otro. Decir qué puedes cumplir te deja disponible de verdad para esa parte, en vez de decir que sí y resentirte.",
      },
      {
        question: "¿Y si se enojan?",
        answer:
          "Es posible. Un límite no incluye la obligación de que el otro lo aplauda. Si la reacción es amenaza o violencia, el problema ya no es la frase: busca apoyo.",
      },
      {
        question: "¿Cuántas veces lo repito?",
        answer:
          "Las que hagan falta, con la misma frase. Cambiar la explicación cada vez invita a reabrir el trato.",
      },
    ],
    related: [
      { href: "/guias/regulacion-emocional", label: "Regulación emocional" },
      { href: "/guias/burnout-laboral", label: "Burnout laboral" },
      { href: "/preguntas/que-es-el-apego-ansioso", label: "Qué es el apego ansioso" },
      { href: "/psicologo-sentimiento-culpa-chillan", label: "Información sobre la culpa" },
    ],
    sources: [APA_APEGO],
  },
  {
    cluster: "preguntas",
    slug: "sintomas-fisicos-de-la-ansiedad",
    updated: "2026-10-18",
    navLabel: "Síntomas físicos de la ansiedad",
    title: "Síntomas físicos de la ansiedad y qué pueden indicar",
    h1: "Síntomas físicos de la ansiedad",
    description:
      "Palpitaciones, falta de aire, tensión o malestar digestivo pueden ser ansiedad. Cuándo conviene una revisión médica y qué no confirma un diagnóstico.",
    answer:
      "La ansiedad no vive solo en la cabeza. Puede sentirse en el corazón, la respiración, el estómago, los músculos o el sueño. Esas sensaciones son reales. Un síntoma físico no confirma por sí solo un trastorno de ansiedad, y un dolor de pecho nuevo o muy intenso igual pide una revisión médica.",
    sections: [
      {
        heading: "Qué se describe con más frecuencia",
        paragraphs: [
          "La guía NICE de ansiedad generalizada y pánico agrupa, entre otras, palpitaciones, sudor, temblor, boca seca, dificultad para respirar, molestia en el pecho, náuseas, mareo y tensión muscular. También aparecen cansancio, irritabilidad y un sueño que no repone. No tienes que cumplir la lista entera.",
          "El cuerpo entra en alarma aunque el peligro no esté delante. Por eso puedes tener el pulso rápido sentado en la pega, o el estómago revuelto antes de una conversación. Nombrar la sensación no la borra. Te permite no tratarla, de entrada, como una prueba de que algo catastrófico ya está pasando.",
        ],
        bullets: [
          "Corazón acelerado o latidos que notas de golpe.",
          "Aire corto, suspiro frecuente o pecho apretado.",
          "Estómago, náusea o diarrea cuando sube la preocupación.",
          "Mandíbula, hombros o manos tensas durante horas.",
        ],
      },
      {
        heading: "Ansiedad del día y ataque de pánico",
        paragraphs: [
          "La ansiedad puede quedarse como fondo: preocupación difícil de cortar, cuerpo inquieto, evitación. Un ataque de pánico es un pico de minutos, con miedo intenso y síntomas físicos muy marcados. Si el pico es lo que te asusta, la guía de qué hacer en el momento y la pregunta sobre el ataque ordenan esa diferencia.",
          "Que el episodio baje no demuestra que fue solo ansiedad, ni que fue un infarto. Si el dolor de pecho es nuevo, se va al brazo, viene con desmayo o no cede, la evaluación es médica. La psicología no reemplaza esa revisión.",
        ],
      },
      {
        heading: "Qué puedes hacer cuando el cuerpo ya está encendido",
        paragraphs: [
          "Baja el ritmo de una cosa a la vez. Apoya los pies en el suelo, alarga la salida del aire y nombra tres objetos que ves. No es un tratamiento. Es una forma de no alimentar la alarma con más lucha. La guía de regulación emocional explica por qué aguantar en silencio y explotar después no es lo mismo que bajar la activación.",
          "Si el malestar es leve y de un día cargado, el ejercicio de estimulación bilateral del sitio sirve para conocer esa sensación en un marco acotado. No lo uses en medio de un pánico que no puedes guardar, ni para un recuerdo de trauma. La propia página del ejercicio lo dice.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Si me late el corazón tengo ansiedad?",
        answer:
          "Puede ser una alarma de ansiedad y puede ser otra cosa. Un episodio nuevo, intenso o con dolor de pecho se mira con un médico. La etiqueta viene después, no antes de descartar lo urgente.",
      },
      {
        question: "¿Respirar profundo siempre ayuda?",
        answer:
          "A algunas personas les baja la activación. A otras, fijarse en la respiración la sube. Prueba con calma, en un momento que no sea el peor, y quédate con lo que tu cuerpo tolera.",
      },
      {
        question: "¿Estos síntomas significan que necesito medicación?",
        answer:
          "No se deduce de una lista. Hay personas que trabajan la ansiedad con terapia y hay casos en que un médico evalúa un fármaco. Esta página no indica medicamentos.",
      },
    ],
    related: [
      { href: "/psicologo-ansiedad-chillan", label: "Ansiedad: qué es y cómo se trabaja" },
      { href: "/guias/regulacion-emocional", label: "Cómo se regula una emoción" },
      { href: "/preguntas/ansiedad-o-estres", label: "Ansiedad o estrés" },
      { href: "/guias/ataque-de-panico-que-hacer", label: "Qué hacer en un ataque de pánico" },
      { href: "/preguntas/que-es-un-ataque-de-panico", label: "Qué es un ataque de pánico" },
    ],
    product: EMDR_PRODUCT,
    safety:
      "Dolor de pecho nuevo, desmayo o falta de aire que no cede: llama al 131 o acude a urgencia. Si hay ideas de hacerte daño, llama al *4141. Salud Responde atiende al 600 360 7777.",
    sources: [NICE_ANSIEDAD, DIPRECE_ANSIEDAD, MINSAL_4141],
  },
  {
    cluster: "preguntas",
    slug: "senales-de-baja-autoestima",
    updated: "2026-10-18",
    navLabel: "Señales de autoestima baja",
    title: "Señales de una autoestima baja: qué mirar y qué no es",
    h1: "Señales de autoestima baja",
    description:
      "Señales de autoestima baja en lo cotidiano: crítica dura, evitar y comparar. No es un test ni un diagnóstico. Enlaza con la página de Chillán.",
    answer:
      "La autoestima baja es un modo repetido de leerte como menos capaz o menos digno de cuidado, no un defecto de carácter ni un test de internet. Se nota en lo que haces: evitas, te disculpas de más, comparas y descartas un logro apenas aparece. Una lista de señales no diagnostica. Sirve para mirar el patrón con más precisión.",
    sections: [
      {
        heading: "Señales en el día a día",
        paragraphs: [
          "La crítica suele sonar como un hecho: si me equivoco en esto, confirmo que no sirvo. El elogio se explica por suerte o por lástima. Pedir algo cuesta más que ceder, y ceder después deja rabia. No hace falta que todas las señales estén presentes.",
          "También se ve en el cuerpo y en la agenda. Hombros tensos antes de hablar, revisar el mensaje diez veces, no postular, no decir que no. La guía de regulación emocional ayuda a separar la emoción del veredicto. Poner un límite es otra pieza: la culpa de decir que no no demuestra que el límite esté mal.",
        ],
        bullets: [
          "Compararte y salir siempre perdiendo, aunque el dato no alcance.",
          "Evitar una tarea para no sentir la vergüenza de hacerla mal.",
          "Pedir perdón por ocupar espacio, una pregunta o un descanso.",
          "Quedarte en relaciones o pegas donde el trato ya te achica.",
        ],
      },
      {
        heading: "Qué no es",
        paragraphs: [
          "No es modestia. La modestia puede reconocer un límite real. La autoestima baja convierte un error chico en una identidad. Tampoco es un diagnóstico con nombre propio en una tarde: a veces viene junto a ánimo bajo, ansiedad o una historia de crítica, y a veces no.",
          "Un día inseguro después de una mala noticia no es el patrón. El patrón es la lectura que se repite cuando las pruebas cambian y la conclusión sobre ti no cambia.",
        ],
      },
      {
        heading: "Qué puedes observar esta semana",
        paragraphs: [
          "Anota tres momentos en que la frase sobre ti fue más dura que el hecho. Al lado, escribe qué hiciste: evitaste, te adelantaste a pedir perdón, o seguiste. No tienes que corregirlo todo el mismo día. Ver la secuencia ya es información.",
          "Si la autocrítica te deja el cuerpo muy activo por un malestar leve, el ejercicio bilateral del sitio es un recurso para esa activación cotidiana. No procesa una historia de humillación grave ni reemplaza una evaluación. Si la crítica incluye hacerte daño, deja el ejercicio y llama.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿La autoestima baja es una enfermedad?",
        answer:
          "No es, por sí sola, un diagnóstico. Puede acompañar ansiedad, ánimo bajo u otras dificultades. Una evaluación mira el conjunto, no una frase suelta.",
      },
      {
        question: "¿Elogiarme frente al espejo lo cambia?",
        answer:
          "Una frase bonita que no te crees suele durar poco. Sirve más registrar el hecho, la crítica y la conducta que la siguió, y practicar una acción distinta en un caso chico.",
      },
      {
        question: "¿Se puede trabajar?",
        answer:
          "El modo de interpretarte se puede revisar. No hay un plazo único ni un resultado garantizado. La página sobre baja autoestima en Chillán cuenta cómo se plantea ese trabajo.",
      },
    ],
    related: [
      { href: "/psicologo-baja-autoestima-chillan", label: "Baja autoestima: cómo se trabaja" },
      { href: "/guias/regulacion-emocional", label: "Regulación emocional" },
      { href: "/preguntas/como-poner-un-limite", label: "Cómo poner un límite" },
      { href: "/preguntas/por-que-la-mente-no-para", label: "Por qué la mente no para" },
      { href: "/primera-consulta-psicologo-chillan", label: "Qué ocurre en una primera consulta" },
    ],
    product: EMDR_PRODUCT,
    safety:
      "Si la autocrítica incluye ideas de hacerte daño, llama al *4141. Salud Responde atiende al 600 360 7777. Esta lectura no reemplaza esa llamada.",
    sources: [NHS_AUTOESTIMA, MINSAL_4141],
  },
  {
    cluster: "preguntas",
    slug: "obsesiones-y-compulsiones",
    updated: "2026-10-19",
    navLabel: "Obsesiones y compulsiones",
    title: "Obsesiones y compulsiones: cómo distinguirlas en el TOC",
    h1: "Obsesiones y compulsiones en el TOC",
    description:
      "Obsesiones y compulsiones no son lo mismo: la obsesión alarma y la compulsión intenta bajar esa alarma. Cómo distinguirlas, sin un test ni un diagnóstico.",
    answer:
      "En el TOC, la obsesión es el pensamiento, la imagen o el impulso que llega sin que lo invites y sube la alarma. La compulsión es lo que haces, con las manos o con la mente, para bajar esa alarma. No son lo mismo: una es la duda y la otra es el intento de cerrarla.",
    sections: [
      {
        heading: "Cómo se ve una obsesión",
        paragraphs: [
          "Llega sola y se siente urgente. Puede ser una imagen de contaminación, una duda de si cerraste la puerta, un impulso que te asusta o la idea de que vas a hacer daño. No la elegiste. Tratar de empujarla fuera suele devolverla más fuerte.",
          "Pensar mucho en un problema no alcanza para llamarlo obsesión. En la rumiación das vueltas a un tema y no aparece un paso. En la obsesión del TOC la alarma pide un acto concreto para quedar seguro. Si lo que se repite es la mente de noche, sin ritual, la pregunta sobre por qué la mente no para está más cerca.",
        ],
      },
      {
        heading: "Cómo se ve una compulsión",
        paragraphs: [
          "Es el acto que baja la alarma un rato: lavar, revisar, rezar en un orden, pedir que alguien te confirme que quedó bien, o repasar la memoria hasta sentir certeza. El alivio enseña que el acto era necesario. A la siguiente, la duda vuelve más pronto.",
          "Un ritual mental cuenta. Dejar de lavarte las manos y seguir rumiando una hora no corta la compulsión: la cambia de lugar. La guía NICE CG31 trata la exposición con prevención de respuesta como parte de la TCC para el TOC. Esta página solo distingue las dos piezas. El método está en la pregunta sobre la ERP.",
        ],
        bullets: [
          "Obsesión: la alarma. Compulsión: lo que haces para apagarla.",
          "Pedir confirmación a la familia suele ser otra compulsión.",
          "Evitar el disparador también mantiene el circuito.",
          "Una lista leída en internet no pone el nombre de TOC.",
        ],
      },
      {
        heading: "Por qué se encadenan",
        paragraphs: [
          "La obsesión abre una amenaza y la compulsión la cierra en falso. El cerebro registra que, sin el ritual, el peligro seguía. Por eso la siguiente obsesión pide el mismo acto, o uno más largo. Discutir durante horas si el peligro era real alimenta la duda.",
          "La ERP ensaya quedarte con la duda sin completar el ritual, en un paso acordado. No se parte por la imagen más aterradora. Si el TOC ocupa varias horas del día, esta distinción no alcanza como plan. Sirve para reconocer las dos partes cuando lo converses con quien te evalúe.",
        ],
      },
      {
        heading: "Qué no corresponde a un ejercicio suelto",
        paragraphs: [
          "Una obsesión no se trabaja con un punto que se mueve en la pantalla. El ejercicio bilateral del sitio es para malestar leve y cotidiano, y la propia página pide que lo pares si aparecen imágenes que no puedes guardar. No es un tratamiento del TOC ni de un trauma.",
          "Si el malestar es una preocupación del día, sin ritual, puedes leer la guía de regulación emocional. Si aparecen ideas de hacerte daño, deja cualquier ejercicio y llama.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Pensar mucho es una obsesión?",
        answer:
          "No por sí solo. La obsesión del TOC trae alarma y empuja a un ritual para bajarla. Dar vueltas sin un acto de cierre se parece más a la rumiación.",
      },
      {
        question: "¿Un ritual mental cuenta como compulsión?",
        answer:
          "Sí. Repasar, rezar en un orden o revisar la memoria hasta quedar seguro es una compulsión, aunque nadie lo vea.",
      },
      {
        question: "¿Esto se trabaja con ERP?",
        answer:
          "La ERP es el método en que te acercas al disparador y no haces el ritual. La pregunta sobre la ERP lo explica. La página de Chillán es la de atención. Ninguna de las dos diagnostica.",
      },
    ],
    related: [
      { href: "/preguntas/que-es-la-erp-para-el-toc", label: "Qué es la ERP para el TOC" },
      { href: "/tratamiento-toc-chillan", label: "Terapia ERP para el TOC en Chillán" },
      { href: "/preguntas/por-que-la-mente-no-para", label: "Por qué la mente no para" },
      { href: "/preguntas/que-es-la-terapia-cognitivo-conductual", label: "Qué es la terapia cognitivo-conductual" },
      { href: "/guias/regulacion-emocional", label: "Regulación emocional" },
    ],
    safety:
      "Si hay ideas de hacerte daño o de querer morir, llama al *4141 (gratuito, 24 horas). Salud Responde atiende al 600 360 7777. En una urgencia, llama al 131. Esta lectura no reemplaza esa llamada.",
    sources: [NICE_TOC, MINSAL_4141, SALUD_RESPONDE],
  },
  {
    cluster: "preguntas",
    slug: "procrastinacion-y-ansiedad",
    updated: "2026-10-19",
    navLabel: "Procrastinación y ansiedad",
    title: "Procrastinación y ansiedad: por qué postergas la tarea",
    h1: "Procrastinación y ansiedad",
    description:
      "Postergar puede ir con ansiedad: evitas el malestar de empezar, no solo la tarea. Qué mantiene el circuito y qué puedes mirar en un paso chico.",
    answer:
      "A veces postergas porque la tarea trae una emoción que no quieres sentir: vergüenza de hacerla mal, miedo a empezar o la presión de que tiene que salir perfecta. La ansiedad y la postergación se empujan. No es solo desorden ni un horario que te falta.",
    sections: [
      {
        heading: "Cómo se arma el circuito",
        paragraphs: [
          "Ves la tarea y el cuerpo se apura: el pecho, la mandíbula o la cabeza. Abres otra cosa más fácil. El alivio es inmediato y la tarea queda más grande. Al día siguiente el mismo roce parte más alto, porque ahora también está la culpa de haberla dejado.",
          "El circuito se parece al de una evitación. No hace falta un diagnóstico para notarlo. Hace falta ver qué emoción aparece justo antes de cambiar de pestaña.",
        ],
        bullets: [
          "La tarea chica se siente enorme cuando el miedo es a hacerla mal.",
          "Empezar por el correo, el aseo o el celular baja la alarma un rato.",
          "La culpa llega después y vuelve más difícil sentarte.",
          "Un plazo más corto no corta el circuito si la emoción sigue igual.",
        ],
      },
      {
        heading: "Ansiedad y la tarea que crece",
        paragraphs: [
          "La ansiedad del día puede ser una preocupación que no se suelta. Aquí se engancha con una acción concreta que evitas. Si además la mente rumia de noche el mismo pendiente, la pregunta sobre por qué la mente no para ordena esa parte. Son piezas distintas del mismo cansancio.",
          "Perfeccionismo y postergación se acompañan seguido: si solo cuenta el resultado impecable, empezar se siente como un examen. Un borrador feo de diez minutos es un dato, no una prueba de capacidad.",
        ],
      },
      {
        heading: "Un paso chico, no un sistema nuevo",
        paragraphs: [
          "Elige una tarea que quepa en diez minutos y escribe la primera acción visible: abrir el archivo, una frase, el enunciado. Pon un temporizador. Cuando suene, te detienes aunque quede el resto. El aprendizaje es que pudiste estar con el malestar un rato, no que terminaste el semestre.",
          "Si al sentarte el cuerpo queda muy activado por un malestar leve, el ejercicio bilateral del sitio es un recurso para esa activación cotidiana. No es para una crisis, un trauma ni una obsesión con ritual. Léelo antes de abrirlo.",
        ],
      },
      {
        heading: "Cuándo el patrón pide otra mirada",
        paragraphs: [
          "Si la postergación ya te saca de los estudios, de la pega o del sueño durante semanas, esta explicación no alcanza como plan. La página de procrastinación en los estudios en Chillán describe ese motivo. Esta pregunta se queda en el circuito.",
          "Si junto con evitar aparecen ideas de hacerte daño, o dejas de comer y de dormir, pide ayuda el mismo día. Un temporizador no es la herramienta para eso.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Postergar es pereza?",
        answer:
          "La pereza es una palabra suelta. En este circuito hay una emoción incómoda justo antes de cambiar de tarea, y un alivio corto después. Mirar esa secuencia es más útil que el apodo.",
      },
      {
        question: "¿Es ansiedad o es el hábito de dejarlo para después?",
        answer:
          "Pueden ir juntos. La ansiedad sube al ver la tarea y el hábito es la salida que ya conoces. Separarlos ayuda a elegir un paso chico en vez de pelear con el carácter.",
      },
      {
        question: "¿El ejercicio bilateral sirve para ponerme a estudiar?",
        answer:
          "Sirve, si acaso, para un malestar leve antes de empezar. No ordena la materia ni reemplaza una evaluación cuando el patrón ya te limita la semana.",
      },
    ],
    related: [
      { href: "/psicologo-procrastinacion-estudios-chillan", label: "Procrastinación en los estudios" },
      { href: "/preguntas/por-que-la-mente-no-para", label: "Por qué la mente no para" },
      { href: "/psicologo-ansiedad-chillan", label: "Ansiedad: qué es y cómo se trabaja" },
      { href: "/preguntas/ansiedad-o-estres", label: "Ansiedad o estrés" },
      { href: "/guias/regulacion-emocional", label: "Regulación emocional" },
    ],
    product: EMDR_PRODUCT,
    safety:
      "Si hay ideas de hacerte daño, llama al *4141. Es gratuito, confidencial y atiende las 24 horas. Salud Responde atiende al 600 360 7777. En una urgencia, llama al 131.",
    sources: [NICE_ANSIEDAD, MINSAL_4141, SALUD_RESPONDE],
  },
  {
    cluster: "preguntas",
    slug: "senales-de-depresion",
    updated: "2026-10-20",
    navLabel: "Señales de depresión",
    title: "Cómo saber si tengo depresión: señales, no un test",
    h1: "Cómo saber si tengo depresión",
    description:
      "Cómo saber si lo que sientes se parece a depresión: ánimo, interés y energía durante semanas. No es un test. El duelo se distingue en otra pregunta.",
    answer:
      "No hay un test en esta página que te diga si tienes depresión. Lo que se mira es si el ánimo, el interés o la energía vienen bajos la mayor parte de los días, durante semanas, y si eso ya cambia el sueño, la comida, la pega o los vínculos. Un mal día, o una pena pegada a una pérdida, no alcanza para poner el nombre.",
    sections: [
      {
        heading: "Qué suele describir quien consulta",
        paragraphs: [
          "La hoja informativa de la OMS sobre la depresión habla de un ánimo bajo o de una pérdida de interés y de placer que se sostiene en el tiempo, junto con menos energía. En la vida diaria eso se parece a despertar sin ganas, a que las cosas que antes te importaban no muevan nada, y a un cansancio que no se explica solo por una mala noche.",
          "También puede cambiar el sueño (mucho o casi nada), el apetito, la concentración y la idea que tienes de ti. Una autocrítica constante, o la sensación de ser una carga, entra en esa descripción. Una coincidencia con este párrafo no confirma un diagnóstico.",
        ],
        bullets: [
          "El ánimo bajo ocupa la mayor parte del día, no solo un rato.",
          "El interés cae en varias áreas, no solo en una tarea que te carga.",
          "La energía no vuelve con un fin de semana de descanso.",
          "El patrón se mide en semanas, no en una tarde difícil.",
        ],
      },
      {
        heading: "Qué no alcanza para llamarlo depresión",
        paragraphs: [
          "Una semana pesada en la pega, una pelea o un examen pueden bajarte el ánimo y eso no es, por sí solo, una depresión. Si al bajar la exigencia vuelves a comer, a dormir y a interesarte, estás más cerca del estrés que de un cuadro depresivo. La pregunta sobre ansiedad o estrés ordena esa diferencia cuando la alarma es lo que predomina.",
          "Tampoco sirve una lista leída de noche para ponerte el nombre. Anotar duración, sueño e interés te da un lenguaje más preciso si después conversas con alguien. No reemplaza esa conversación.",
        ],
      },
      {
        heading: "Duelo y depresión no son la misma pena",
        paragraphs: [
          "El duelo duele en olas y sigue conectado con lo que perdiste. La depresión aplana más áreas, incluso cuando no hay un recordatorio. Pueden coincidir. La pregunta de duelo o depresión recorre esa distinción con más calma. Esta página se queda en las señales del ánimo bajo.",
          "Si la pena empezó con una pérdida y ya no puedes funcionar en absoluto, no esperes a tener clara la etiqueta. Pide ayuda el mismo día.",
        ],
      },
      {
        heading: "Malestar leve y lo que este sitio no reemplaza",
        paragraphs: [
          "Si lo que tienes es un malestar leve del día, sin semanas de ánimo caído y sin ideas de hacerte daño, el ejercicio de estimulación bilateral del sitio es un recurso para esa activación cotidiana. Léelo antes de abrirlo. No es un tratamiento de la depresión, no procesa un trauma y no sirve en una crisis.",
          "Cuando el patrón ya cambia el sueño, la pega o los vínculos durante semanas, la página de depresión en Chillán es la de atención. Esta pregunta no reserva una hora ni promete un plazo.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Una lista de internet diagnostica depresión?",
        answer:
          "No. Orienta qué mirar: duración, interés, energía y cómo está el día. El nombre lo pone una evaluación, no una coincidencia con un párrafo.",
      },
      {
        question: "¿Es depresión o es duelo?",
        answer:
          "El duelo se enciende con la pérdida y puede tener treguas. La depresión aplana más áreas de la vida. Pueden ir juntas. La otra pregunta lo distingue con más detalle.",
      },
      {
        question: "¿El ejercicio bilateral sirve si creo que estoy deprimido?",
        answer:
          "Solo si el malestar es leve y cotidiano. No trata una depresión de semanas, un trauma ni una crisis. Si hay ideas de hacerte daño, deja el ejercicio y llama.",
      },
    ],
    related: [
      { href: "/psicologo-depresion-chillan", label: "Depresión: información y atención en Chillán" },
      { href: "/preguntas/duelo-o-depresion", label: "Duelo o depresión" },
      { href: "/preguntas/por-que-la-mente-no-para", label: "Por qué la mente no para" },
      { href: "/guias/regulacion-emocional", label: "Regulación emocional" },
      { href: "/emdr-autoadministrado", label: "Ejercicio bilateral para un malestar leve" },
    ],
    product: EMDR_PRODUCT,
    safety:
      "Si hay ideas de hacerte daño o de querer morir, llama ahora al *4141. Es gratuito, confidencial y atiende las 24 horas. Salud Responde atiende al 600 360 7777. En una urgencia, llama al 131. Esta lectura no reemplaza esa llamada.",
    sources: [OMS_DEPRESION, MINSAL_4141, SALUD_RESPONDE],
  },
  {
    cluster: "preguntas",
    slug: "que-es-un-trauma-psicologico",
    updated: "2026-10-22",
    navLabel: "Qué es un trauma psicológico",
    title: "Qué es un trauma psicológico y cuándo no es un TEPT",
    h1: "Qué es un trauma psicológico",
    description:
      "Un trauma psicológico es un hecho que dejó la alarma encendida. No todo golpe duro es trauma ni todo trauma es TEPT. La guía de TEPT sigue desde aquí.",
    answer:
      "Un trauma psicológico es la marca que deja un hecho que superó lo que podías integrar en ese momento: una amenaza, violencia, un accidente, o haber visto que otra persona estaba en peligro. El hecho ya pasó y la alarma, la imagen o la vergüenza siguen. No todo momento difícil es un trauma, y no todo trauma llega a ser un trastorno de estrés postraumático.",
    sections: [
      {
        heading: "Qué lo distingue de un mal rato",
        paragraphs: [
          "Un despido, una pelea o una decepción duelen y no por eso son un trauma. El trauma se parece más a esto: el sistema de alarma no archivó el hecho. Un ruido, un olor, una fecha o una cercanía física traen la escena, o te dejan en guardia como si todavía estuviera pasando.",
          "Tampoco hace falta que el hecho haya salido en las noticias. Abuso, violencia en la casa, un asalto o un accidente alcanzan para dejar esa marca. La gravedad la miras por el efecto en tu semana, no por si otra persona lo consideraría suficiente.",
        ],
        bullets: [
          "El recuerdo vuelve solo, en imágenes, sueños o en el cuerpo.",
          "Evitas lugares, conversaciones o personas para no activarte.",
          "La vergüenza o la culpa se sienten presentes, no como un dato viejo.",
          "Un mal día de pega, sin esa alarma, no entra en esta definición.",
        ],
      },
      {
        heading: "Trauma y TEPT no son sinónimos",
        paragraphs: [
          "Puedes haber vivido un hecho grave y seguir con miedo un tiempo, sin que el recuerdo organice la semana. Eso no se llama TEPT por una búsqueda en internet. El TEPT es el cuadro en que el recuerdo sigue activo y limita la vida. La guía de qué es el TEPT recorre esas señales y cita la guía de la OMS sobre condiciones relacionadas con el estrés.",
          "Ponerte el nombre antes de una evaluación no ayuda. Sirve reconocer el patrón y decidir si conversarlo. Esta pregunta se queda en la definición. La guía sigue con el trastorno.",
        ],
      },
      {
        heading: "Qué lugar tiene el EMDR",
        paragraphs: [
          "La misma guía de la OMS nombra, para adultos con TEPT, terapias centradas en el trauma, entre ellas la cognitivo-conductual y el EMDR, cuando las aplica personal de salud capacitado. El EMDR no es un punto que se mueve en una pantalla. El procedimiento completo incluye evaluación, preparación y cierre. La guía de qué es el EMDR lo explica.",
          "Si buscas psicólogos que trabajen trauma, la página de EMDR en Chillán es la de atención con ese método. No certifica un resultado. Dice qué es la atención. La ficha local de estrés postraumático es otra URL, ya sobre ese cuadro.",
        ],
      },
      {
        heading: "El ejercicio del sitio no es para un trauma",
        paragraphs: [
          "Si lo que te pasa es un estrés leve del día, sin imágenes que no puedes guardar, el ejercicio de estimulación bilateral es un recurso acotado para esa activación. No lo uses para reprocesar un abuso, un accidente, un TEPT o una crisis. La propia página pide que lo pares si la escena vuelve y no puedes dejarla.",
          "Un trauma no se trabaja solo con un video. Si al leer esto la alarma sube mucho, cierra la página y busca a alguien que pueda detenerse contigo.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Todo hecho grave deja un trauma?",
        answer:
          "No. Hay personas que atraviesan un hecho grave y el recuerdo no toma el control de la semana. El nombre no se pone por el tamaño del hecho, sino por cómo quedó la alarma.",
      },
      {
        question: "¿Trauma y TEPT son lo mismo?",
        answer:
          "No. El trauma es la marca del hecho. El TEPT es un cuadro en que esa marca sigue limitando la vida. La guía de TEPT lo distingue. Esta página no diagnostica.",
      },
      {
        question: "¿Puedo usar el ejercicio bilateral si el tema es un trauma?",
        answer:
          "No para reprocesar ese recuerdo. El ejercicio es para un malestar leve y cotidiano. Si aparecen imágenes que no puedes guardar, páralo.",
      },
    ],
    related: [
      { href: "/guias/que-es-el-tept", label: "Qué es el TEPT" },
      { href: "/preguntas/que-hace-un-especialista-en-estres-postraumatico", label: "Qué hace un especialista en estrés postraumático" },
      { href: "/guias/que-es-el-emdr", label: "Qué es el EMDR" },
      { href: "/terapia-emdr-chillan", label: "EMDR en Chillán: página de atención" },
      { href: "/estres-postraumatico-chillan", label: "Estrés postraumático en Chillán" },
      { href: "/preguntas/emdr-autoadministrado-y-terapia", label: "Límites del ejercicio bilateral" },
      { href: "/emdr-autoadministrado", label: "Ejercicio bilateral para un malestar leve" },
      { href: "/preguntas/como-ayuda-la-terapia-tras-abuso-en-la-infancia", label: "Terapia tras un abuso en la infancia" },
    ],
    product: EMDR_PRODUCT,
    safety:
      "Si hay ideas de hacerte daño o de querer morir, llama al *4141 (gratuito, 24 horas). Salud Responde atiende al 600 360 7777. En una urgencia, llama al 131. Esta lectura no reemplaza esa llamada.",
    sources: [OMS_ESTRES, MINSAL_4141, SALUD_RESPONDE],
  },
  {
    cluster: "preguntas",
    slug: "como-ayuda-la-terapia-tras-abuso-en-la-infancia",
    updated: "2026-10-22",
    navLabel: "Terapia tras abuso en la infancia",
    title: "Terapia para un adulto que vivió abuso en la infancia",
    h1: "¿Cómo ayuda la terapia a un adulto que vivió abuso en la infancia?",
    description:
      "La terapia puede acompañar a un adulto que vivió abuso en la infancia, sin el relato completo y sin un plazo. El TEPT y el EMDR están en las guías.",
    answer:
      "La terapia puede acompañar a un adulto que vivió abuso en la infancia cuando la vergüenza, las imágenes o la guardia alta siguen en la semana. No pide el relato completo el primer día y no promete un plazo ni un resultado. Esta pregunta explica eso. No diagnostica y no abre una ciudad.",
    sections: [
      {
        heading: "Qué puede quedar años después",
        paragraphs: [
          "Un abuso, también sexual, puede dejar la alarma encendida: el hecho ya pasó y vuelven imágenes, sueños o una vergüenza que se siente de ahora. No todo momento difícil es un trauma, y no todo trauma es un trastorno de estrés postraumático. La pregunta de qué es un trauma psicológico separa esas palabras. La guía de TEPT sigue con el cuadro.",
          "Que haya ocurrido en la infancia no cierra el tema en la adultez. Tampoco lo convierte, por sí solo, en un diagnóstico. Sirve notar si el recuerdo organiza la semana. El nombre lo pone una evaluación, no esta lectura.",
        ],
        bullets: [
          "No tienes que contar el hecho con todo el detalle para empezar a hablar.",
          "Puedes parar. Eso es parte de la conversación, no una falla.",
          "La culpa o la vergüenza pueden sentirse presentes aunque el hecho haya sido de otra persona.",
          "Una coincidencia con este párrafo no confirma un TEPT.",
        ],
      },
      {
        heading: "Qué puede hacer una conversación, y qué no",
        paragraphs: [
          "El ritmo lo marcas tú. En la página de atención el orden que se nombra es este: primero un poco más de calma, y el trabajo del recuerdo cuando tú lo decides. No hay obligación de entrar al peor momento el primer día.",
          "El secreto profesional se mantiene. La excepción que esa página ya escribe es un riesgo vital o un menor en peligro actual. Esta pregunta no agrega otra.",
          "No hay un número de horas que sirva para todos ni una promesa de cómo vas a terminar. Si buscas la atención en Chillán, esa es otra URL. Esta se queda en la explicación.",
        ],
      },
      {
        heading: "TEPT, EMDR y el ejercicio del sitio",
        paragraphs: [
          "La guía de la OMS de 2013 sobre condiciones relacionadas con el estrés nombra, para adultos con TEPT, terapias centradas en el trauma. Entre ellas están la terapia cognitivo-conductual focalizada en el trauma y el EMDR, cuando las aplica personal de salud capacitado. Que una guía las nombre no dice cuál te corresponde ni en cuántas horas.",
          "El EMDR no es un punto que se mueve en una pantalla. El procedimiento completo incluye evaluación, preparación y cierre. Las fases están en la guía de qué es el EMDR. La página de EMDR en Chillán es la de atención con ese método. No certifica un resultado.",
          "El ejercicio de estimulación bilateral del sitio es para un malestar leve. No lo uses para reprocesar un abuso, un accidente o un TEPT. Si aparecen imágenes que no puedes guardar, la propia página pide que lo pares.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Tengo que contar lo que pasó?",
        answer:
          "No. Puedes hablar de lo que puedas y parar cuando quieras. El relato completo no es la entrada.",
      },
      {
        question: "¿Si fue en la infancia y ahora soy adulto, igual se conversa?",
        answer:
          "Sí se puede conversar. Que el hecho haya sido en la infancia no cierra el tema. Esta lectura no pone un plazo ni un resultado.",
      },
      {
        question: "¿Puedo usar el ejercicio bilateral para este recuerdo?",
        answer:
          "No para reprocesarlo. El ejercicio es para un malestar leve. Si la escena vuelve y no puedes dejarla, páralo.",
      },
    ],
    related: [
      { href: "/psicologo-abuso-sexual-chillan", label: "Atención en Chillán por abuso sexual" },
      { href: "/superar-trauma-infancia-chillan", label: "Trauma de infancia en Chillán" },
      { href: "/preguntas/que-es-un-trauma-psicologico", label: "Qué es un trauma psicológico" },
      { href: "/guias/que-es-el-tept", label: "Qué es el TEPT" },
      { href: "/guias/que-es-el-emdr", label: "Qué es el EMDR" },
      { href: "/terapia-emdr-chillan", label: "EMDR en Chillán: página de atención" },
      { href: "/preguntas/emdr-autoadministrado-y-terapia", label: "Límites del ejercicio bilateral" },
    ],
    product: EMDR_PRODUCT,
    safety:
      "Si hay ideas de hacerte daño o de querer morir, llama al *4141 (gratuito, 24 horas). Salud Responde atiende al 600 360 7777. En una urgencia, llama al 131. La página de atención también deja Fono Denuncia (600 400 0101) y Fono Familia (149). Esta lectura no reemplaza esa llamada.",
    sources: [OMS_ESTRES, MINSAL_4141, SALUD_RESPONDE],
  },
  {
    cluster: "preguntas",
    slug: "como-es-una-sesion-de-psicologia-online",
    updated: "2026-10-21",
    navLabel: "Cómo es una sesión online",
    title: "Cómo es una sesión de psicología online: 50 minutos",
    h1: "¿Cómo es una sesión de psicología online?",
    description:
      "Una sesión de psicología online es una videollamada de 50 minutos, con enlace previo y un lugar donde nadie más escuche. No es un chat ni una urgencia.",
    answer:
      "Una sesión de psicología online es una videollamada de 50 minutos. Antes de la hora recibes un enlace (Zoom, Google Meet u otra). Te conectas desde un computador, una tablet o un celular, con cámara, micrófono e internet estable, en una pieza donde nadie más escuche. El secreto profesional se mantiene igual que en una sala. La consulta presencial está en Chillán. La videollamada es para quien está en Chile.",
    sections: [
      {
        heading: "Qué ocurre en esos 50 minutos",
        paragraphs: [
          "La hora tiene inicio y cierre. Partes por lo que trajiste de la semana: una situación, un pensamiento que se repitió o algo que intentaste. La conversación se queda en ese punto. Al terminar puedes anotar un paso para los días que vienen. No es un chat abierto ni un mensaje que se responde cuando se puede.",
          "El enlace llega antes. Conviene probar cámara y micrófono y entrar ya sentado, no en un traslado. Si la conexión se corta, en la página de atención está escrito que se retoma o se reprograma sin un cobro extra por ese corte.",
        ],
        bullets: [
          "Duración: 50 minutos, los mismos de una sesión presencial.",
          "Llega un enlace de Zoom, Google Meet u otra videollamada.",
          "Sirve computador, tablet o celular, con cámara y micrófono.",
          "La pieza tiene puerta: la conversación no tiene público.",
        ],
      },
      {
        heading: "Conexión, privacidad y lugar",
        paragraphs: [
          "Internet estable, cámara y micrófono son el mínimo. Si la casa es ruidosa, unos audífonos ayudan. Avisos del celular en silencio. Si vives con más gente, esa hora no está disponible para el resto: una puerta cerrada cambia lo que te atreves a decir.",
          "El secreto profesional no cambia por la pantalla. Lo que sí cambia es tu entorno. Si alguien puede oír desde el pasillo, la reserva baja aunque la persona que atiende no esté en la misma ciudad. La diferencia entre videollamada y sala, con más detalle, está en la comparación de modalidades.",
        ],
      },
      {
        heading: "Qué no es esta hora",
        paragraphs: [
          "No reemplaza una urgencia médica ni una crisis con riesgo. Si hay ideas de hacerte daño, esa llamada es el *4141, Salud Responde o el 131, no una sesión programada. Tampoco es la página de atención: esa es la de psicólogo online, con consulta en Chillán y videollamada para quien está en Chile.",
          "Si la pregunta es cómo se organiza el proceso (antes, durante y después, y en qué se diferencia de la sala), está en la otra pregunta. Si la duda es si el formato puede servir, está en la pregunta de si la terapia online funciona. Esta ficha se queda en cómo es la hora.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Qué plataforma se usa?",
        answer:
          "Zoom, Google Meet u otra videollamada. El enlace se envía antes de la hora. No hace falta instalar algo distinto de lo que ya uses para una reunión.",
      },
      {
        question: "¿Es igual de reservada que una sala?",
        answer:
          "El secreto profesional se mantiene. La reserva de tu lado depende del lugar: puerta, audífonos si hace falta, y que nadie más esté en la pieza.",
      },
      {
        question: "¿Puedo estar en otra ciudad de Chile?",
        answer:
          "La videollamada es para quien está en Chile, con horario compatible, conexión y un lugar privado. La consulta presencial está en Chillán. Esta página no abre sedes en otras ciudades.",
      },
    ],
    related: [
      { href: "/terapia-online", label: "Terapia online en Chile" },
      { href: "/preguntas/como-funciona-la-terapia-psicologica-online", label: "Cómo funciona la terapia psicológica online" },
      { href: "/preguntas/la-terapia-online-funciona", label: "¿La terapia online funciona?" },
      { href: "/psicologo-online-chillan", label: "Psicólogo online en Chile, consulta en Chillán" },
      { href: "/terapia-online-vs-presencial-chillan", label: "Online y presencial" },
      { href: "/consulta-psicologica-precio-chillan", label: "Valor publicado de la sesión" },
    ],
    safety:
      "Una videollamada no es una urgencia. Si hay ideas de hacerte daño o de querer morir, llama ahora al *4141. Es gratuito, confidencial y atiende las 24 horas. Salud Responde atiende al 600 360 7777. En una urgencia, llama al 131.",
    sources: [MINSAL_4141, SALUD_RESPONDE],
  },
  {
    cluster: "preguntas",
    slug: "como-funciona-la-terapia-psicologica-online",
    updated: "2026-10-21",
    navLabel: "Cómo funciona la terapia online",
    title: "Cómo funciona la terapia psicológica online en Chile",
    h1: "¿Cómo funciona la terapia psicológica online?",
    description:
      "La terapia psicológica online es una hora con inicio, un tema de la semana y un cierre. Pide conexión, privacidad y poder alternarla con la sala.",
    answer:
      "La terapia psicológica online funciona como una cita con hora de inicio y de cierre, hecha por videollamada. Antes recibes el enlace. En los 50 minutos se trabaja un punto de la semana. Al terminar puedes anotar un paso. Se puede alternar con la consulta presencial en Chillán. Pide conexión estable, cámara, micrófono y un lugar donde nadie más escuche.",
    sections: [
      {
        heading: "El recorrido, sin una reserva en esta página",
        paragraphs: [
          "El orden que ya está descrito en el sitio es este: se coordina la hora, llega el enlace con una indicación breve, te conectas a la hora y la sesión dura 50 minutos. No es una conversación que queda abierta el resto del día. La página de terapia online en Chile resume el formato. Esta pregunta baja al funcionamiento.",
          "Llegas con un punto: una situación, un pensamiento que se repitió o algo que intentaste. Si entras a mitad de un traslado, la hora se gasta en acomodarte. Conviene estar sentado, con el enlace a mano.",
        ],
      },
      {
        heading: "Qué tiene que estar listo",
        paragraphs: [
          "Internet que no se corte cada minuto, cámara, micrófono y una pieza con puerta. Computador, tablet o celular alcanzan. Si la casa es ruidosa, audífonos. Si compartes pieza y no hay forma de hablar con reserva, el formato deja de cuidar la confidencialidad: eso ya está dicho en la pregunta de si la terapia online funciona.",
          "La videollamada es para quien está en Chile. La sala está en Chillán. No hay otras ciudades en esta ficha. Si estás en otra comuna, el requisito sigue siendo horario, conexión y un lugar privado.",
        ],
        bullets: [
          "Enlace de videollamada antes de la hora.",
          "Cámara, micrófono e internet estable.",
          "Lugar privado durante los 50 minutos.",
          "Un tema concreto de la semana, no un relato sin borde.",
        ],
      },
      {
        heading: "En qué se diferencia de la sala",
        paragraphs: [
          "No hay traslado. La privacidad depende de tu casa u oficina, no de una sala ya reservada. Se ve parte del lenguaje del cuerpo; el encuadre de la cámara importa. En un malestar muy intenso, la videollamada pide que tengas un lugar seguro. La sala puede sentirse más contenida para quien prefiere salir de la casa. La comparación online y presencial ordena esas diferencias. Se pueden alternar las dos modalidades.",
          "El secreto profesional es el mismo. Lo que cambia es el lugar desde el que hablas.",
        ],
      },
      {
        heading: "Cómo preguntar el valor",
        paragraphs: [
          "Online y presencial tienen el mismo valor. El número publicado en el sitio es $35.000 por 50 minutos, con boleta para reembolso Isapre. El pago, la primera sesión y la cancelación están en la ficha de precio. Esta pregunta no reserva una hora.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Puedo alternar online y presencial?",
        answer:
          "Sí. La videollamada y la consulta en Chillán se pueden alternar. El trabajo sigue siendo el mismo proceso, con otra puerta de entrada.",
      },
      {
        question: "¿El valor cambia por ser online?",
        answer:
          "No. El valor publicado es el mismo: $35.000 por 50 minutos, con boleta para Isapre. El detalle de pago está en la ficha de precio.",
      },
      {
        question: "¿Qué pasa si se corta internet?",
        answer:
          "En la página de atención está escrito que se retoma la conexión o se reprograma, sin un cobro extra por ese corte.",
      },
    ],
    related: [
      { href: "/preguntas/como-es-una-sesion-de-psicologia-online", label: "Cómo es una sesión de psicología online" },
      { href: "/terapia-online", label: "Terapia online en Chile" },
      { href: "/psicologo-online-chillan", label: "Psicólogo online en Chile, consulta en Chillán" },
      { href: "/terapia-online-vs-presencial-chillan", label: "Online y presencial" },
      { href: "/preguntas/la-terapia-online-funciona", label: "¿La terapia online funciona?" },
      { href: "/consulta-psicologica-precio-chillan", label: "Valor publicado de la sesión" },
    ],
    safety:
      "Una videollamada no es una urgencia. Si hay ideas de hacerte daño o de querer morir, llama ahora al *4141. Es gratuito, confidencial y atiende las 24 horas. Salud Responde atiende al 600 360 7777. En una urgencia, llama al 131.",
    sources: [MINSAL_4141, SALUD_RESPONDE],
  },
  {
    cluster: "preguntas",
    slug: "que-hace-un-especialista-en-estres-postraumatico",
    updated: "2026-10-21",
    navLabel: "Especialista en estrés postraumático",
    title: "Qué hace un especialista en estrés postraumático (TEPT)",
    h1: "¿Qué hace un especialista en estrés postraumático?",
    description:
      "Un especialista en estrés postraumático evalúa si el recuerdo sigue activo y limita la semana. No pone el nombre TEPT por un párrafo. La guía explica el cuadro.",
    answer:
      "Un especialista en estrés postraumático, o en TEPT, evalúa si un recuerdo sigue activo y limita la semana, y conoce terapias centradas en el trauma. No pone ese nombre porque leíste una lista. TEPT y estrés postraumático nombran el mismo cuadro. Qué es el trastorno está en la guía. Esta pregunta se queda en qué hace esa persona en el trabajo.",
    sections: [
      {
        heading: "Qué mira en una evaluación",
        paragraphs: [
          "Mira si el hecho ya pasó y el cuerpo sigue reaccionando como si estuviera pasando: imágenes, pesadillas o la sensación de estar otra vez ahí; si evitas lugares, conversaciones o personas; si la alerta no baja; y si eso ya cambia el sueño, la pega o los vínculos. Un susto fuerte de unos días no alcanza, por sí solo, para el nombre.",
          "Tampoco hace falta que el hecho sea una guerra o un accidente. La guía de TEPT recuerda que también se describe después de violencia, abuso, un asalto o haber presenciado que otra persona estaba en peligro. La evaluación escucha el efecto, no el tamaño de la noticia.",
        ],
        bullets: [
          "El recuerdo vuelve solo y organiza parte del día.",
          "La evitación crece para no activarse.",
          "La alerta se queda: sobresalto, sueño liviano, guardia alta.",
          "Una coincidencia con este párrafo no confirma el diagnóstico.",
        ],
      },
      {
        heading: "Qué terapias se nombran, sin un resultado prometido",
        paragraphs: [
          "La guía de la OMS de 2013 sobre condiciones relacionadas con el estrés nombra, para adultos con TEPT, terapias centradas en el trauma. Entre ellas están la terapia cognitivo-conductual focalizada en el trauma y el EMDR, cuando las aplica personal de salud capacitado. Que una guía las nombre no dice cuál te corresponde ni en cuántas horas.",
          "El EMDR no es un punto que se mueve en una pantalla. El procedimiento completo incluye evaluación, preparación y cierre. Las fases están en la guía de EMDR. La página de EMDR en Chillán es la de atención con ese método. No certifica un resultado.",
        ],
      },
      {
        heading: "Qué no hace esta lectura",
        paragraphs: [
          "No certifica a quien escribe el sitio ni publica un registro. No dice que un hecho grave siempre deje un TEPT. No usa el ejercicio de estimulación bilateral para reprocesar un trauma: ese recurso es para un malestar leve y la propia página pide pararlo si la escena vuelve y no puedes dejarla.",
          "La ficha local de estrés postraumático en Chillán es otra URL, ya sobre esa atención. Esta pregunta explica el oficio de la búsqueda. La guía explica el cuadro.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Especialista en TEPT y especialista en estrés postraumático es la misma búsqueda?",
        answer:
          "Sí. TEPT significa trastorno de estrés postraumático. Las dos frases piden a alguien que evalúe un recuerdo que sigue activo. La guía define el cuadro. Esta pregunta dice qué hace esa persona.",
      },
      {
        question: "¿Esta página dice si quien escribe es especialista?",
        answer:
          "No. No certifica títulos ni un registro. Explica qué suele pedir la búsqueda y enlaza la guía, el método y la atención en Chillán.",
      },
      {
        question: "¿Puedo usar el ejercicio bilateral si creo que tengo TEPT?",
        answer:
          "No para reprocesar ese recuerdo. El ejercicio es para un malestar leve. Si aparecen imágenes que no puedes guardar, páralo.",
      },
    ],
    related: [
      { href: "/guias/que-es-el-tept", label: "Qué es el TEPT" },
      { href: "/terapia-emdr-chillan", label: "EMDR en Chillán: página de atención" },
      { href: "/estres-postraumatico-chillan", label: "Estrés postraumático en Chillán" },
      { href: "/guias/que-es-el-emdr", label: "Qué es el EMDR" },
      { href: "/preguntas/que-es-un-trauma-psicologico", label: "Qué es un trauma psicológico" },
      { href: "/preguntas/emdr-autoadministrado-y-terapia", label: "Límites del ejercicio bilateral" },
    ],
    product: EMDR_PRODUCT,
    safety:
      "Si hay ideas de hacerte daño o de querer morir, llama al *4141 (gratuito, 24 horas). Salud Responde atiende al 600 360 7777. En una urgencia, llama al 131. Esta lectura no reemplaza esa llamada.",
    sources: [OMS_ESTRES, MINSAL_4141, SALUD_RESPONDE],
  },
];

INFORMATIONAL_PAGES.push(...QUESTION_PAGES);

export function pagesByCluster(cluster: InfoPage["cluster"]): InfoPage[] {
  return INFORMATIONAL_PAGES.filter((page) => page.cluster === cluster);
}

export function findInformationalPage(
  cluster: InfoPage["cluster"],
  slug: string,
): InfoPage | undefined {
  return INFORMATIONAL_PAGES.find((page) => page.cluster === cluster && page.slug === slug);
}

export function informationalPath(page: Pick<InfoPage, "cluster" | "slug">): string {
  return `/${page.cluster}/${page.slug}`;
}

const READING_BY_PATH: Record<string, InfoLink[]> = {
  "/psicologo-ansiedad-chillan": [
    { href: "/preguntas/sintomas-fisicos-de-la-ansiedad", label: "Síntomas físicos de la ansiedad" },
    { href: "/preguntas/ansiedad-o-estres", label: "Ansiedad o estrés" },
    { href: "/guias/ataque-de-panico-que-hacer", label: "Qué hacer en un ataque de pánico" },
    { href: "/guias/regulacion-emocional", label: "Cómo se regula una emoción" },
    { href: "/guias", label: "Guías" },
    { href: "/preguntas", label: "Preguntas" },
  ],
  "/agendar": [
    { href: "/primera-consulta-psicologo-chillan", label: "Qué esperar de la primera consulta" },
    { href: "/preguntas/cuanto-dura-una-terapia-psicologica", label: "Cuánto dura una terapia" },
    { href: "/guias", label: "Guías" },
    { href: "/preguntas", label: "Preguntas" },
  ],
  "/psicologo-adulto-chillan": [
    { href: "/guias/regulacion-emocional", label: "Cómo se regula una emoción" },
    { href: "/preguntas/ansiedad-o-estres", label: "Ansiedad o estrés" },
    { href: "/guias", label: "Guías" },
    { href: "/preguntas", label: "Preguntas" },
  ],
  "/primera-consulta-psicologo-chillan": [
    { href: "/preguntas/cuanto-dura-una-terapia-psicologica", label: "Cuánto dura una terapia" },
    { href: "/preguntas/que-es-la-terapia-cognitivo-conductual", label: "Qué es la terapia cognitivo-conductual" },
    { href: "/guias/psicologo-o-psiquiatra", label: "Psicólogo o psiquiatra" },
    { href: "/guias", label: "Guías" },
    { href: "/preguntas", label: "Preguntas" },
  ],
  "/psicologo-abuso-sexual-chillan": [
    { href: "/preguntas/como-ayuda-la-terapia-tras-abuso-en-la-infancia", label: "Terapia tras un abuso en la infancia" },
    { href: "/preguntas/que-es-un-trauma-psicologico", label: "Qué es un trauma psicológico" },
    { href: "/guias/que-es-el-tept", label: "Qué es el TEPT" },
    { href: "/guias/que-es-el-emdr", label: "Qué es el EMDR" },
    { href: "/preguntas/emdr-autoadministrado-y-terapia", label: "Límites del ejercicio bilateral" },
    { href: "/guias/si-un-cercano-habla-de-hacerse-dano", label: "Si un cercano habla de hacerse daño" },
    { href: "/guias", label: "Guías" },
    { href: "/preguntas", label: "Preguntas" },
  ],
  "/psicologo-baja-autoestima-chillan": [
    { href: "/preguntas/senales-de-baja-autoestima", label: "Señales de autoestima baja" },
    { href: "/preguntas/procrastinacion-y-ansiedad", label: "Procrastinación y ansiedad" },
    { href: "/guias/regulacion-emocional", label: "Cómo se regula una emoción" },
    { href: "/preguntas/como-poner-un-limite", label: "Cómo poner un límite" },
    { href: "/guias", label: "Guías" },
    { href: "/preguntas", label: "Preguntas" },
  ],
  "/psicologo-bipolaridad-chillan": [
    { href: "/guias/psicologo-o-psiquiatra", label: "Psicólogo o psiquiatra" },
    { href: "/preguntas/duelo-o-depresion", label: "Duelo o depresión" },
    { href: "/guias", label: "Guías" },
    { href: "/preguntas", label: "Preguntas" },
  ],
  "/psicologo-crisis-de-panico-chillan": [
    { href: "/guias/ataque-de-panico-que-hacer", label: "Qué hacer en un ataque de pánico" },
    { href: "/preguntas/que-es-un-ataque-de-panico", label: "Qué es un ataque de pánico" },
    { href: "/preguntas/ansiedad-o-estres", label: "Ansiedad o estrés" },
  ],
  "/psicologo-fobia-social-chillan": [
    { href: "/preguntas/por-que-la-mente-no-para", label: "Por qué la mente no para" },
    { href: "/preguntas/ansiedad-o-estres", label: "Ansiedad o estrés" },
    { href: "/guias/regulacion-emocional", label: "Regulación emocional" },
  ],
  "/psicologo-hipocondria-chillan": [
    { href: "/preguntas/ansiedad-o-estres", label: "Ansiedad o estrés" },
    { href: "/guias/psicologo-o-psiquiatra", label: "Psicólogo o psiquiatra" },
  ],
  "/terapia-de-pareja-chillan": [
    { href: "/guias/comunicacion-en-pareja", label: "Guía: comunicación en pareja" },
    { href: "/guias", label: "Guías" },
    { href: "/preguntas", label: "Preguntas" },
    { href: "/guias/estilos-de-apego", label: "Guía: estilos de apego" },
    { href: "/preguntas/que-es-el-apego-ansioso", label: "Qué es el apego ansioso" },
    { href: "/preguntas/como-poner-un-limite", label: "Cómo poner un límite" },
  ],
  "/terapia-celos-chillan": [
    { href: "/preguntas/que-es-el-apego-ansioso", label: "Qué es el apego ansioso" },
    { href: "/guias/estilos-de-apego", label: "Guía: estilos de apego" },
  ],
  "/terapia-emdr-chillan": [
    { href: "/preguntas/que-hace-un-especialista-en-estres-postraumatico", label: "Qué hace un especialista en estrés postraumático" },
    { href: "/preguntas/que-es-un-trauma-psicologico", label: "Qué es un trauma psicológico" },
    { href: "/guias/que-es-el-tept", label: "Guía: qué es el TEPT" },
    { href: "/guias/que-es-el-emdr", label: "Guía: qué es el EMDR" },
    { href: "/guias", label: "Guías" },
    { href: "/preguntas", label: "Preguntas" },
    { href: "/preguntas/emdr-autoadministrado-y-terapia", label: "Qué puede el ejercicio de EMDR" },
    { href: "/emdr-autoadministrado", label: "Ejercicio bilateral gratuito" },
    { href: "/preguntas/como-ayuda-la-terapia-tras-abuso-en-la-infancia", label: "Terapia tras un abuso en la infancia" },
  ],
  "/estres-postraumatico-chillan": [
    { href: "/preguntas/que-hace-un-especialista-en-estres-postraumatico", label: "Qué hace un especialista en estrés postraumático" },
    { href: "/guias/que-es-el-tept", label: "Guía: qué es el TEPT" },
    { href: "/guias", label: "Guías" },
    { href: "/preguntas", label: "Preguntas" },
    { href: "/guias/que-es-el-emdr", label: "Guía: qué es el EMDR" },
    { href: "/preguntas/emdr-autoadministrado-y-terapia", label: "Límites del EMDR autoadministrado" },
  ],
  "/tratamiento-toc-chillan": [
    { href: "/preguntas/que-es-la-erp-para-el-toc", label: "Qué es la ERP para el TOC" },
    { href: "/preguntas/obsesiones-y-compulsiones", label: "Obsesiones y compulsiones" },
    { href: "/guias", label: "Guías" },
    { href: "/preguntas", label: "Preguntas" },
    { href: "/preguntas/que-es-la-terapia-cognitivo-conductual", label: "Qué es la terapia cognitivo-conductual" },
  ],
  "/terapia-online": [
    { href: "/preguntas/como-es-una-sesion-de-psicologia-online", label: "¿Cómo es una sesión de psicología online?" },
    { href: "/preguntas/como-funciona-la-terapia-psicologica-online", label: "¿Cómo funciona la terapia psicológica online?" },
    { href: "/preguntas/la-terapia-online-funciona", label: "¿La terapia online funciona?" },
    { href: "/psicologo-online-chillan", label: "Psicólogo online en Chile" },
    { href: "/terapia-online-vs-presencial-chillan", label: "Online y presencial" },
  ],
  "/psicologo-online-chillan": [
    { href: "/preguntas/como-es-una-sesion-de-psicologia-online", label: "¿Cómo es una sesión de psicología online?" },
    { href: "/preguntas/como-funciona-la-terapia-psicologica-online", label: "¿Cómo funciona la terapia psicológica online?" },
    { href: "/terapia-online", label: "Terapia online en Chile" },
    { href: "/preguntas/la-terapia-online-funciona", label: "¿La terapia online funciona?" },
    { href: "/consulta-psicologica-precio-chillan", label: "Valor publicado de la sesión" },
    { href: "/terapia-online-vs-presencial-chillan", label: "Online y presencial" },
  ],
  "/psicologo-estres-laboral-chillan": [
    { href: "/guias/burnout-laboral", label: "Guía: burnout laboral" },
    { href: "/preguntas/como-saber-si-es-burnout", label: "Cómo saber si es burnout" },
    { href: "/preguntas/como-poner-un-limite", label: "Cómo poner un límite" },
    { href: "/psicologo-acoso-laboral-chillan", label: "Acoso laboral" },
  ],
  "/psicologo-apego-chillan": [
    { href: "/guias/estilos-de-apego", label: "Guía: estilos de apego" },
    { href: "/preguntas/que-es-el-apego-ansioso", label: "Qué es el apego ansioso" },
  ],
  "/psicologo-duelo-chillan": [
    { href: "/preguntas/duelo-o-depresion", label: "Duelo o depresión" },
    { href: "/guias/duelo-etapas-y-mitos", label: "Etapas y mitos del duelo" },
    { href: "/guias/acompanar-a-alguien-en-duelo", label: "Cómo acompañar a alguien en duelo" },
    { href: "/preguntas/cuanto-dura-un-duelo", label: "Cuánto dura un duelo" },
  ],
  "/psicologo-depresion-chillan": [
    { href: "/preguntas/senales-de-depresion", label: "Cómo saber si tengo depresión" },
    { href: "/preguntas/duelo-o-depresion", label: "Duelo o depresión" },
    { href: "/preguntas/por-que-la-mente-no-para", label: "Por qué la mente no para" },
    { href: "/guias", label: "Guías" },
    { href: "/preguntas", label: "Preguntas" },
  ],
  "/tratamiento-insomnio-chillan": [
    { href: "/guias/higiene-del-sueno", label: "Guía: higiene del sueño" },
    { href: "/preguntas/por-que-la-mente-no-para", label: "Por qué la mente no para" },
  ],
  "/psicologo-procrastinacion-estudios-chillan": [
    { href: "/preguntas/procrastinacion-y-ansiedad", label: "Procrastinación y ansiedad" },
    { href: "/preguntas/por-que-la-mente-no-para", label: "Por qué la mente no para" },
    { href: "/guias/regulacion-emocional", label: "Regulación emocional" },
    { href: "/guias", label: "Guías" },
    { href: "/preguntas", label: "Preguntas" },
  ],
  "/psicologo-dependencia-emocional-chillan": [
    { href: "/preguntas/que-es-el-apego-ansioso", label: "Qué es el apego ansioso" },
    { href: "/guias/estilos-de-apego", label: "Guía: estilos de apego" },
    { href: "/preguntas/como-poner-un-limite", label: "Cómo poner un límite" },
  ],
  "/psicologo-cognitivo-conductual-chillan": [
    { href: "/preguntas/que-es-la-terapia-cognitivo-conductual", label: "Qué es la terapia cognitivo-conductual" },
    { href: "/preguntas/cuanto-dura-una-terapia-psicologica", label: "Cuánto dura una terapia" },
    { href: "/guias/ataque-de-panico-que-hacer", label: "Qué hacer en un ataque de pánico" },
    { href: "/preguntas/que-es-un-ataque-de-panico", label: "Qué es un ataque de pánico" },
    { href: "/preguntas/ansiedad-o-estres", label: "Ansiedad o estrés" },
    { href: "/preguntas/que-es-la-erp-para-el-toc", label: "Qué es la ERP para el TOC" },
  ],
  "/psicologo-obesidad-chillan": [
    { href: "/guias/emocion-y-comida", label: "Guía: emoción y comida" },
    { href: "/guias/regulacion-emocional", label: "Regulación emocional" },
    { href: "/guias", label: "Guías" },
    { href: "/preguntas", label: "Preguntas" },
  ],
  "/psicologo-trastornos-alimenticios-chillan": [
    { href: "/guias/emocion-y-comida", label: "Guía: emoción y comida" },
  ],
  "/emdr-autoadministrado": [
    { href: "/guias/que-es-el-tept", label: "Guía: qué es el TEPT" },
    { href: "/emdr-autoadministrado/ejercicio", label: "Abrir el ejercicio bilateral" },
    { href: "/guias/que-es-el-emdr", label: "Guía: qué es el EMDR" },
    { href: "/preguntas/emdr-autoadministrado-y-terapia", label: "Qué puede y qué no puede el ejercicio" },
    { href: "/guias", label: "Guías" },
    { href: "/preguntas", label: "Preguntas" },
  ],
};

export function readingLinksFor(path: string): InfoLink[] {
  return READING_BY_PATH[path] ?? [];
}
