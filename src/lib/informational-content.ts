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

const RNPI = {
  label: "Registro Nacional de Prestadores Individuales de Salud",
  href: "https://rnpi.superdesalud.gob.cl/",
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
  title: "Guías de psicología para entender lo que te pasa",
  h1: "Guías de psicología",
  description:
    "Guías claras sobre ansiedad, apego, burnout, EMDR, sueño y la diferencia entre psicólogo y psiquiatra. Para entender el tema, sin una hora de venta.",
};

export const QUESTION_HUB = {
  path: "/preguntas",
  title: "Preguntas de psicología respondidas con claridad",
  h1: "Preguntas de psicología",
  description:
    "Respuestas directas sobre pánico, ERP, apego ansioso, burnout, duelo y el ejercicio de EMDR. Orientación práctica, sin empujarte a reservar una sesión.",
};

const EMDR_PRODUCT = {
  href: "/emdr-autoadministrado",
  label: "Abrir el ejercicio de estimulación bilateral",
  note: "Es un recurso gratuito del sitio para malestar leve. No procesa un trauma ni reemplaza un trabajo con alguien formado en EMDR.",
};

export const INFORMATIONAL_PAGES: InfoPage[] = [
  {
    cluster: "guias",
    slug: "diferencia-psicologo-psiquiatra",
    navLabel: "Psicólogo o psiquiatra",
    title: "Diferencia entre psicólogo y psiquiatra en Chile",
    h1: "Diferencia entre psicólogo y psiquiatra",
    description:
      "El psiquiatra es médico y puede indicar medicamentos. El psicólogo clínico no receta: trabaja con psicoterapia. Mira cómo se diferencian en Chile.",
    answer:
      "El psiquiatra es un médico especialista: puede evaluar desde la medicina y recetar medicamentos. El psicólogo clínico no es médico y no receta. Su herramienta principal es la psicoterapia, es decir, un trabajo conversado y práctico sobre lo que piensas, sientes y haces.",
    sections: [
      {
        heading: "Qué puede hacer cada profesional",
        paragraphs: [
          "En Chile, quien ejerce como psicólogo tiene un título universitario de psicología. Si atiende en salud, puede estar inscrito en el Registro Nacional de Prestadores Individuales de Salud. Eso acredita el registro, no un resultado de tratamiento.",
          "El psiquiatra estudió medicina y después la especialidad. Por eso puede indicar, ajustar o suspender fármacos y extender una licencia médica. Un psicólogo no emite licencia médica ni prescribe.",
        ],
        bullets: [
          "Psicólogo clínico: evaluación psicológica y psicoterapia.",
          "Psiquiatra: evaluación médica y tratamiento con medicamentos.",
          "Algunos psiquiatras también hacen psicoterapia. No es la regla.",
          "Los dos pueden trabajar en paralelo cuando el caso lo necesita.",
        ],
      },
      {
        heading: "Cuándo suele bastar empezar por psicología",
        paragraphs: [
          "Para malestar que ya te complica el sueño, la pega, el estudio o los vínculos, y que no viene con un riesgo inmediato, la psicoterapia es un punto de partida habitual. Ansiedad, ánimo bajo, duelo, estrés sostenido y problemas de relación entran seguido en esa conversación.",
          "Eso no significa que la psicología reemplace una evaluación médica. Si ya tomas fármacos, si hubo un diagnóstico previo o si el malestar te impide funcionar, conviene que un médico revise esa parte.",
        ],
      },
      {
        heading: "Cuándo conviene una evaluación psiquiátrica",
        paragraphs: [
          "Pide una evaluación médica si hay ideas de hacerte daño, síntomas que aparecen de un día para otro y te desorganizan, sospecha de bipolaridad o psicosis, o un cuadro que no cede y te deja sin poder trabajar o cuidarte.",
          "También tiene sentido si ya hiciste un proceso psicológico y el malestar sigue igual de intenso, o si necesitas revisar una medicación que ya estás tomando. No tienes que elegir un bando: muchas personas usan las dos ayudas.",
        ],
      },
      {
        heading: "Cómo preparar la primera conversación",
        paragraphs: [
          "Anota desde cuándo te pasa, qué lo empeora, si duermes, si comes, si bebes o usas otras sustancias, y qué ya intentaste. Esos datos sirven tanto en psicología como en psiquiatría.",
          "Pregunta qué enfoque usa la persona y cómo decide si hace falta derivar. Una respuesta clara sobre los límites de su rol es una buena señal, más que una promesa de cuánto vas a mejorar.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Un psicólogo puede recetar ansiolíticos?",
        answer:
          "No. La prescripción de medicamentos es un acto médico. Si aparece esa necesidad, el psicólogo deriva a psiquiatra u otro médico.",
      },
      {
        question: "¿La psicoterapia y los fármacos se oponen?",
        answer:
          "No. En varios cuadros se usan juntos. Una cosa no anula la otra: responden a partes distintas del problema.",
      },
      {
        question: "¿El registro de la Superintendencia garantiza que me va a ir bien?",
        answer:
          "No. El registro muestra que el profesional está inscrito como prestador. El encaje con tu motivo y la seriedad del trabajo se ven en la atención, no en el número.",
      },
    ],
    related: [
      { href: "/preguntas/que-hacer-en-un-ataque-de-panico", label: "Qué hacer en un ataque de pánico" },
      { href: "/guias/terapia-cognitivo-conductual", label: "Qué es la terapia cognitivo-conductual" },
      { href: "/cuando-ir-al-psicologo-chillan", label: "Señales de cuándo pedir ayuda" },
    ],
    sources: [RNPI, MINSAL_4141],
  },
  {
    cluster: "guias",
    slug: "ansiedad-y-estres",
    navLabel: "Ansiedad y estrés",
    title: "Ansiedad y estrés: en qué se parecen y difieren",
    h1: "Ansiedad y estrés: en qué se diferencian",
    description:
      "El estrés responde a una carga concreta. La ansiedad sigue aunque la amenaza no esté. Aprende a distinguirlos y qué puedes observar en tu día.",
    answer:
      "El estrés es la respuesta del cuerpo y de la mente frente a una demanda: una prueba, un plazo, un conflicto, una cuenta. La ansiedad es una alarma que se enciende ante una amenaza que anticipas, a veces sin un hecho claro delante. Se parecen en el cuerpo y no son lo mismo.",
    sections: [
      {
        heading: "Qué suele sentirse en el cuerpo",
        paragraphs: [
          "En ambos puedes notar el corazón rápido, tensión en el cuello, sueño liviano, irritabilidad o dificultad para concentrarte. Esa activación sirvió, en términos evolutivos, para reaccionar. El problema aparece cuando se queda encendida.",
          "La guía de trastornos ansiosos del DIPRECE describe la ansiedad como una respuesta ante algo que la persona lee como peligroso, aunque esa lectura no calce con el riesgo real, y que termina alterando su funcionamiento.",
        ],
      },
      {
        heading: "Una forma simple de distinguirlos",
        paragraphs: [
          "Pregúntate si el malestar baja cuando la demanda termina. Si duermes mejor el domingo después de entregar el informe, se parece más a estrés. Si el informe ya salió y la alarma sigue, buscando el próximo peligro, se parece más a ansiedad.",
          "También mira el foco. El estrés suele tener un nombre: la pega, la plata del mes, el cuidado de alguien. La ansiedad a veces es difusa: una sensación de que algo malo va a pasar, sin un objeto preciso.",
        ],
        bullets: [
          "Estrés: hay una carga identificable y un alivio parcial al resolverla.",
          "Ansiedad: la alarma se adelanta o se queda después del hecho.",
          "Pueden venir juntos. Un período de estrés largo puede dejar la alarma sensible.",
          "Ni el estrés ni la ansiedad son, por sí solos, un diagnóstico.",
        ],
      },
      {
        heading: "Qué puedes observar durante una semana",
        paragraphs: [
          "Sin convertir esto en un examen, anota hora, situación, intensidad de 0 a 10 y qué hiciste después. El registro muestra patrones: cafeína tarde, dormir poco, discutir y luego rumiar, evitar un correo y sentirte peor.",
          "Evitar lo que temes baja la angustia al tiro y la enseña a volver. Resolver una parte pequeña de la demanda, en cambio, le devuelve al estrés un borde concreto.",
        ],
      },
      {
        heading: "Cuándo la distinción ya no alcanza",
        paragraphs: [
          "Si el malestar te saca de tus rutinas por semanas, si evitaste salir, trabajar o ver gente, o si aparecen crisis de pánico repetidas, ponerle solo el nombre de estrés se queda corto. Ahí corresponde una evaluación, no una etiqueta que te pongas solo.",
          "Una estimación citada por la guía DIPRECE, a partir de Vicente y colaboradores con criterios DSM-III, situó la prevalencia de vida de trastornos ansiosos en 16,2% en población chilena mayor de 15 años. Es una cifra antigua y poblacional. No describe tu caso.",
        ],
      },
      {
        heading: "Errores que mantienen la alarma",
        paragraphs: [
          "Revisar síntomas en internet durante la noche, cancelar planes para que no te dé, y exigirte estar calmado antes de hacer cualquier cosa. Esas tres maniobras son comprensibles y suelen alargar el problema.",
          "Una alternativa más útil es reducir un poco la activación (sueño, cafeína, pausas reales) y volver a una actividad pequeña aunque la alarma no esté en cero.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Puedo tener estrés y ansiedad a la vez?",
        answer:
          "Sí. Una carga real puede convivir con una alarma que se adelanta. Separarlos sirve para saber qué parte tiene una tarea concreta y qué parte es anticipación.",
      },
      {
        question: "¿Respirar hondo elimina la ansiedad?",
        answer:
          "Puede bajar un pico de activación. No borra el hábito de anticipar. Sirve como apoyo, no como prueba de que deberías poder controlarlo solo.",
      },
      {
        question: "¿Si es estrés, no necesito mirarlo?",
        answer:
          "El estrés también desgasta cuando se vuelve el estado de base. Distinguirlo de la ansiedad no es una razón para aguantar de más.",
      },
    ],
    related: [
      { href: "/preguntas/que-hacer-en-un-ataque-de-panico", label: "Qué hacer durante un ataque de pánico" },
      { href: "/preguntas/por-que-la-mente-no-para", label: "Por qué la mente no para" },
      { href: "/guias/higiene-del-sueno", label: "Hábitos de higiene del sueño" },
      { href: "/psicologo-ansiedad-chillan", label: "Página de atención por ansiedad" },
    ],
    sources: [DIPRECE_ANSIEDAD, NICE_ANSIEDAD],
  },
  {
    cluster: "guias",
    slug: "terapia-cognitivo-conductual",
    navLabel: "Terapia cognitivo-conductual",
    title: "Terapia cognitivo-conductual: qué es y cómo trabaja",
    h1: "Qué es la terapia cognitivo-conductual",
    description:
      "La TCC mira cómo se influyen pensamientos, emociones y conductas. Conoce qué se trabaja en sesión y qué no es pensar en positivo. Sin un plazo prometido.",
    answer:
      "La terapia cognitivo-conductual, o TCC, trabaja la relación entre lo que interpretas, lo que sientes en el cuerpo y lo que haces después. No busca que pienses bonito. Busca que puedas revisar interpretaciones rígidas y probar conductas que hoy estás evitando.",
    sections: [
      {
        heading: "El triángulo que se revisa",
        paragraphs: [
          "Una situación no trae una sola lectura. Si tu jefe no responde un mensaje, puedes concluir que estás en problemas, que está ocupado o que el mensaje no se vio. Cada lectura empuja una emoción y una acción distinta: revisar el celular, evitar, o esperar.",
          "En TCC se hace visible ese circuito. La pregunta útil no es si el pensamiento es positivo. Es si es el único posible y qué efecto tiene en lo que haces hoy.",
        ],
      },
      {
        heading: "Qué suele pasar en un proceso",
        paragraphs: [
          "Se define un problema concreto, se observa cuándo aparece y se acuerda una práctica entre sesiones. Esa práctica puede ser registrar pensamientos, retomar una actividad que evitabas o ensayar una conversación difícil.",
          "Las guías clínicas, entre ellas la CG113 de NICE para ansiedad generalizada y pánico, incluyen la TCC entre los abordajes psicológicos con más investigación. Eso no promete un plazo ni un resultado igual para todas las personas.",
        ],
        bullets: [
          "Se parte por un objetivo observable, no por cambiar tu personalidad.",
          "Hay tareas entre sesiones. Sin práctica, la sesión se queda en la conversación.",
          "Se miden cambios chicos: sueño, evitación, discusiones, tiempo rumiando.",
          "Si el enfoque no calza, se puede cambiar. No es una lealtad.",
        ],
      },
      {
        heading: "Qué no es",
        paragraphs: [
          "No es repetir frases motivacionales ni negar que algo te duele. Tampoco es un consejo rápido del tipo ánimo, tú puedes. Si el pensamiento tiene un dato real (una deuda, un duelo, una pega precaria), la TCC no lo borra: ayuda a separar el hecho de la catástrofe que se le suma.",
          "Tampoco reemplaza una evaluación médica cuando hay riesgo, síntomas físicos nuevos o un fármaco que revisar.",
        ],
      },
      {
        heading: "Cómo darte cuenta si el trabajo avanza",
        paragraphs: [
          "Una señal modesta y útil es que haces algo que antes evitabas, aunque siga habiendo nervios. Otra es que el mismo pensamiento dura menos y ya no ordena todo el día.",
          "Si pasan varias sesiones y no hay un problema definido ni una práctica, pregunta qué se está trabajando. La TCC se reconoce por ese orden, no por el nombre en una credencial.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿La TCC sirve solo para ansiedad?",
        answer:
          "No. También se usa en ánimo bajo, insomnio, algunos problemas de hábito y en el trabajo con pensamientos que se pegan. El plan cambia según el problema.",
      },
      {
        question: "¿Tengo que contar toda mi infancia?",
        answer:
          "No es el requisito para empezar. A veces la historia ayuda a entender una regla actual. El foco suele estar en lo que mantienes hoy.",
      },
      {
        question: "¿Si no hago las tareas, igual funciona?",
        answer:
          "El aprendizaje ocurre en la práctica. Sin ella, es fácil entender el modelo y seguir haciendo lo mismo entre una sesión y otra.",
      },
    ],
    related: [
      { href: "/guias/ansiedad-y-estres", label: "Diferencia entre ansiedad y estrés" },
      { href: "/preguntas/que-es-la-erp-para-el-toc", label: "Qué es la ERP para el TOC" },
      { href: "/psicologo-cognitivo-conductual-chillan", label: "Página sobre el enfoque clínico" },
    ],
    sources: [NICE_ANSIEDAD],
  },
  {
    cluster: "guias",
    slug: "que-es-el-emdr",
    navLabel: "Qué es el EMDR",
    title: "EMDR: qué es, para qué se usa y qué no reemplaza",
    h1: "Qué es el EMDR",
    description:
      "El EMDR es una psicoterapia para procesar recuerdos que siguen activos. Conoce sus fases, sus límites y el ejercicio gratuito del sitio. No es un video suelto.",
    answer:
      "EMDR significa desensibilización y reprocesamiento por movimientos oculares. Es una psicoterapia usada sobre todo cuando un recuerdo sigue disparando miedo, vergüenza o imágenes como si estuviera pasando ahora. La estimulación bilateral (ojos, sonidos o golpes suaves alternados) es una parte del procedimiento, no el tratamiento entero.",
    sections: [
      {
        heading: "Para qué se desarrolló",
        paragraphs: [
          "El procedimiento se usa en el trabajo con trauma y con el trastorno de estrés postraumático. La guía de la OMS de 2013 sobre condiciones relacionadas con el estrés incluye, para adultos con TEPT, terapias centradas en el trauma, entre ellas la cognitivo-conductual y el EMDR.",
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
          "Si el lugar no permite ningún límite y tu salud ya se quebró, la conversación deja de ser de hábitos y pasa a ser de riesgo laboral y de apoyo médico. Un texto no decide esa renuncia por ti.",
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
      { href: "/tratamiento-burnout-chillan", label: "Página de atención por burnout" },
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
      { href: "/guias/ansiedad-y-estres", label: "Ansiedad y estrés" },
      { href: "/tratamiento-insomnio-chillan", label: "Página de atención por insomnio" },
    ],
    sources: [NHS_SUENO],
  },
  {
    cluster: "guias",
    slug: "emocion-y-comida",
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
          "Si vomitas, usas laxantes, haces ejercicio para castigarte o el día se organiza alrededor de la comida y el cuerpo, esto supera una guía de hábitos. Los trastornos de la conducta alimentaria se evalúan con profesionales de salud, no con un artículo.",
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
      { href: "/guias/ansiedad-y-estres", label: "Ansiedad y estrés" },
      { href: "/guias/regulacion-emocional", label: "Cómo se regula una emoción" },
      { href: "/psicologo-trastornos-alimenticios-chillan", label: "Información sobre trastornos alimentarios" },
    ],
    sources: [DIPRECE_ANSIEDAD],
  },
  {
    cluster: "guias",
    slug: "regulacion-emocional",
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
          "Si la emoción es tan intensa que no hay ventana, o si viene con ideas de hacerte daño, esta práctica se queda corta. Ahí corresponde apoyo de otra persona, no más fuerza de voluntad.",
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
];

const QUESTION_PAGES: InfoPage[] = [
  {
    cluster: "preguntas",
    slug: "que-hacer-en-un-ataque-de-panico",
    navLabel: "Qué hacer en un ataque de pánico",
    title: "Qué hacer durante un ataque de pánico",
    h1: "Qué hacer durante un ataque de pánico",
    description:
      "Un ataque de pánico sube y baja. Qué hacer en los minutos de más miedo, cuándo ver a un médico y qué evita que el siguiente sea peor. Quédate si puedes.",
    answer:
      "Durante un ataque de pánico, el cuerpo dispara una alarma de peligro aunque no haya una amenaza externa clara. El pico suele ceder en minutos. En ese rato, quédate donde estás si es seguro, nombra lo que ocurre y deja que la ola baje, en vez de pelear con ella o salir arrancando.",
    sections: [
      {
        heading: "En los minutos del pico",
        paragraphs: [
          "Di, en voz baja si puedes: es un ataque de pánico, es intenso y va a bajar. Apoya los pies en el suelo y mira tres objetos que estén quietos. Suelta un poco el aire, sin forzar una respiración perfecta. Hiperventilar a propósito, o aguantar el aire hasta marearte, empeora la sensación.",
          "No tienes que demostrar calma. El objetivo es no sumar una huida que después te dé miedo repetir. Si estás manejando, estaciona. Si estás en una fila, quédate sentado o apóyate. Irte corriendo enseña que solo afuera estabas a salvo.",
        ],
        bullets: [
          "Nombra el episodio. Ponerle nombre baja la idea de que te estás muriendo, cuando ya sabes que es pánico.",
          "Quédate, si el lugar es seguro, hasta que el pico ceda un punto.",
          "No midas el pulso cada diez segundos. Eso mantiene la alarma.",
          "Cuando baje, no retomes el día como si nada: toma agua y siéntate un momento.",
        ],
      },
      {
        heading: "La primera vez no se despacha solo",
        paragraphs: [
          "Un dolor de pecho, falta de aire o mareo pueden ser pánico y también pueden ser un problema médico. Si es la primera vez, si el dolor es distinto, si te desmayas o si tienes antecedentes cardíacos, corresponde que te evalúe un servicio de urgencia o el SAMU (131). Esta página no distingue eso por ti.",
          "Después de descartar una causa médica, el miedo a que vuelva a pasar suele ser el problema que queda. Ese miedo lleva a evitar el metro, el supermercado o el ejercicio, y la evitación prepara el episodio siguiente.",
        ],
      },
      {
        heading: "Qué mantiene los ataques",
        paragraphs: [
          "Revisar síntomas, cancelar salidas y pedir que alguien te acompañe a todos lados bajan la angustia hoy y la suben mañana. La guía NICE sobre pánico describe ese círculo: la interpretación catastrófica de una sensación corporal y la conducta de seguridad que la confirma.",
          "Volver, de a poco y a propósito, al lugar que evitaste es la dirección contraria. No se hace el mismo día del primer episodio ni se hace como una prueba de valentía sin plan. Se hace cuando ya entiendes que la sensación, siendo horrible, no es el peligro que anuncia.",
        ],
      },
      {
        heading: "Después del episodio",
        paragraphs: [
          "Anota hora, qué estabas haciendo, qué pensaste (me va a dar un infarto, me voy a desmayar) y qué hiciste. Ese registro sirve más que castigarte por haber tenido miedo.",
          "Si los episodios se repiten o ya organizaste la semana para que no te dé, lee la guía de ansiedad y estrés y busca una evaluación. Un artículo te orienta en el momento. No reemplaza ese paso.",
        ],
      },
    ],
    faqs: [
      {
        question: "¿Cuánto dura un ataque de pánico?",
        answer:
          "El pico suele bajar en minutos, aunque el temblor y el cansancio pueden quedarse más rato. Si una sensación grave no cede o es la primera vez, que te vea un médico.",
      },
      {
        question: "¿Respirar en una bolsa es obligatorio?",
        answer:
          "No. Forzar la respiración puede marearte más. Mejor soltar el aire con calma y apoyar los pies, sin convertir la respiración en otra emergencia.",
      },
      {
        question: "¿Si salgo del lugar, fallé?",
        answer:
          "No fallaste. Salir a veces es necesario. El aprendizaje problemático es cuando la única forma de terminar el miedo es escapar, y empiezas a evitar antes de llegar.",
      },
    ],
    related: [
      { href: "/guias/ansiedad-y-estres", label: "Ansiedad y estrés" },
      { href: "/guias/diferencia-psicologo-psiquiatra", label: "Psicólogo o psiquiatra" },
      { href: "/psicologo-crisis-de-panico-chillan", label: "Página de atención por crisis de pánico" },
    ],
    safety:
      "Si además aparecen ideas de hacerte daño, llama al *4141, gratuito y de 24 horas. Ante dolor de pecho nuevo o desmayo, usa el 131.",
    sources: [NICE_ANSIEDAD, MINSAL_4141, SALUD_RESPONDE],
  },
  {
    cluster: "preguntas",
    slug: "que-es-la-erp-para-el-toc",
    navLabel: "Qué es la ERP para el TOC",
    title: "Terapia ERP para el TOC: en qué consiste",
    h1: "Qué es la terapia ERP para el TOC",
    description:
      "La ERP expone al miedo del TOC y frena el ritual que lo calma un rato. Mira en qué consiste y por qué no es aguantar a ciegas. Sirve para reconocer el método.",
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
          "Si el TOC ocupa varias horas del día, esta explicación no alcanza como plan. Sirve para reconocer el método cuando lo converses con quien te evalúe.",
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
      { href: "/guias/terapia-cognitivo-conductual", label: "Qué es la terapia cognitivo-conductual" },
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
          "Cuando casi nada genera interés, cuando te criticas de forma constante, cuando el cuerpo se frena durante semanas y la pena ya no se organiza alrededor del recuerdo sino de una sensación de vacío general. También cuando aparecen ideas de que no vales o de que otros estarían mejor sin ti.",
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
      { href: "/guias/ansiedad-y-estres", label: "Ansiedad y estrés" },
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
    { href: "/guias/ansiedad-y-estres", label: "Guía: ansiedad y estrés" },
    { href: "/preguntas/que-hacer-en-un-ataque-de-panico", label: "Qué hacer en un ataque de pánico" },
  ],
  "/psicologo-crisis-de-panico-chillan": [
    { href: "/preguntas/que-hacer-en-un-ataque-de-panico", label: "Qué hacer en un ataque de pánico" },
    { href: "/guias/ansiedad-y-estres", label: "Guía: ansiedad y estrés" },
  ],
  "/psicologo-fobia-social-chillan": [
    { href: "/guias/ansiedad-y-estres", label: "Guía: ansiedad y estrés" },
    { href: "/guias/regulacion-emocional", label: "Regulación emocional" },
  ],
  "/tratamiento-agorafobia-chillan": [
    { href: "/preguntas/que-hacer-en-un-ataque-de-panico", label: "Qué hacer en un ataque de pánico" },
    { href: "/guias/ansiedad-y-estres", label: "Guía: ansiedad y estrés" },
  ],
  "/psicologo-hipocondria-chillan": [
    { href: "/guias/ansiedad-y-estres", label: "Guía: ansiedad y estrés" },
    { href: "/guias/diferencia-psicologo-psiquiatra", label: "Psicólogo o psiquiatra" },
  ],
  "/terapia-de-pareja-chillan": [
    { href: "/guias/estilos-de-apego", label: "Guía: estilos de apego" },
    { href: "/preguntas/que-es-el-apego-ansioso", label: "Qué es el apego ansioso" },
    { href: "/preguntas/como-poner-un-limite", label: "Cómo poner un límite" },
  ],
  "/psicologo-matrimonial-chillan": [
    { href: "/guias/estilos-de-apego", label: "Guía: estilos de apego" },
    { href: "/preguntas/como-poner-un-limite", label: "Cómo poner un límite" },
  ],
  "/terapia-celos-chillan": [
    { href: "/preguntas/que-es-el-apego-ansioso", label: "Qué es el apego ansioso" },
    { href: "/guias/estilos-de-apego", label: "Guía: estilos de apego" },
  ],
  "/terapia-emdr-chillan": [
    { href: "/guias/que-es-el-emdr", label: "Guía: qué es el EMDR" },
    { href: "/preguntas/emdr-autoadministrado-y-terapia", label: "Qué puede el ejercicio de EMDR" },
    { href: "/emdr-autoadministrado", label: "Ejercicio bilateral gratuito" },
  ],
  "/estres-postraumatico-chillan": [
    { href: "/guias/que-es-el-emdr", label: "Guía: qué es el EMDR" },
    { href: "/preguntas/emdr-autoadministrado-y-terapia", label: "Límites del EMDR autoadministrado" },
  ],
  "/tratamiento-toc-chillan": [
    { href: "/preguntas/que-es-la-erp-para-el-toc", label: "Qué es la ERP para el TOC" },
    { href: "/guias/terapia-cognitivo-conductual", label: "Qué es la TCC" },
  ],
  "/tratamiento-burnout-chillan": [
    { href: "/guias/burnout-laboral", label: "Guía: burnout laboral" },
    { href: "/preguntas/como-saber-si-es-burnout", label: "Cómo saber si es burnout" },
  ],
  "/psicologo-estres-laboral-chillan": [
    { href: "/guias/burnout-laboral", label: "Guía: burnout laboral" },
    { href: "/preguntas/como-saber-si-es-burnout", label: "Cómo saber si es burnout" },
    { href: "/preguntas/como-poner-un-limite", label: "Cómo poner un límite" },
  ],
  "/psicologo-apego-chillan": [
    { href: "/guias/estilos-de-apego", label: "Guía: estilos de apego" },
    { href: "/preguntas/que-es-el-apego-ansioso", label: "Qué es el apego ansioso" },
  ],
  "/psicologo-duelo-chillan": [
    { href: "/preguntas/duelo-o-depresion", label: "Duelo o depresión" },
    { href: "/guias/regulacion-emocional", label: "Regulación emocional" },
  ],
  "/psicologo-depresion-chillan": [
    { href: "/preguntas/duelo-o-depresion", label: "Duelo o depresión" },
    { href: "/preguntas/por-que-la-mente-no-para", label: "Por qué la mente no para" },
  ],
  "/tratamiento-insomnio-chillan": [
    { href: "/guias/higiene-del-sueno", label: "Guía: higiene del sueño" },
    { href: "/preguntas/por-que-la-mente-no-para", label: "Por qué la mente no para" },
  ],
  "/psicologo-procrastinacion-estudios-chillan": [
    { href: "/preguntas/por-que-la-mente-no-para", label: "Por qué la mente no para" },
    { href: "/guias/regulacion-emocional", label: "Regulación emocional" },
  ],
  "/psicologo-dependencia-emocional-chillan": [
    { href: "/preguntas/que-es-el-apego-ansioso", label: "Qué es el apego ansioso" },
    { href: "/guias/estilos-de-apego", label: "Guía: estilos de apego" },
    { href: "/preguntas/como-poner-un-limite", label: "Cómo poner un límite" },
  ],
  "/psicologo-cognitivo-conductual-chillan": [
    { href: "/guias/terapia-cognitivo-conductual", label: "Guía: qué es la TCC" },
    { href: "/preguntas/que-es-la-erp-para-el-toc", label: "Qué es la ERP para el TOC" },
  ],
  "/psicologo-obesidad-chillan": [
    { href: "/guias/emocion-y-comida", label: "Guía: emoción y comida" },
    { href: "/guias/regulacion-emocional", label: "Regulación emocional" },
  ],
  "/psicologo-trastornos-alimenticios-chillan": [
    { href: "/guias/emocion-y-comida", label: "Guía: emoción y comida" },
  ],
  "/emdr-autoadministrado": [
    { href: "/guias/que-es-el-emdr", label: "Guía: qué es el EMDR" },
    { href: "/preguntas/emdr-autoadministrado-y-terapia", label: "Qué puede y qué no puede el ejercicio" },
  ],
};

export function readingLinksFor(path: string): InfoLink[] {
  return READING_BY_PATH[path] ?? [];
}
