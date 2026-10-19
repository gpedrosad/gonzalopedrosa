export const alcoholClusterOrder = ["alcoholismo-chillan"] as const;

export type AlcoholismPageKey = (typeof alcoholClusterOrder)[number];

type QuickFact = {
  title: string;
  description: string;
};

type Section = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

type ProcessStep = {
  title: string;
  description: string;
};

type FAQ = {
  question: string;
  answer: string;
};

export type AlcoholismPage = {
  slug: `/${AlcoholismPageKey}`;
  metaTitle: string;
  description: string;
  h1: string;
  shortTitle: string;
  cardDescription: string;
  serviceType: string;
  intentLabel: string;
  lead: string;
  heroHighlights: string[];
  quickFacts: QuickFact[];
  sections: Section[];
  processTitle: string;
  processSteps: ProcessStep[];
  faqTitle: string;
  faqs: FAQ[];
  ctaTitle: string;
  ctaDescription: string;
  whatsappMessage: string;
};

export const alcoholismPages: Record<AlcoholismPageKey, AlcoholismPage> = {
  "alcoholismo-chillan": {
    slug: "/alcoholismo-chillan",
    metaTitle: "Alcoholismo en Chillán: qué es, señales y tratamiento",
    description:
      "Qué se entiende por alcoholismo, qué señales aparecen en la casa o el trabajo y en qué se diferencia de un plan para dejar de beber. Página principal.",
    h1: "Alcoholismo: qué es, señales y cómo se trata",
    shortTitle: "Alcoholismo: qué es",
    cardDescription:
      "Página principal: qué es el problema y qué señales importan.",
    serviceType: "Apoyo psicológico para alcoholismo",
    intentLabel: "Página principal sobre alcoholismo",
    lead:
      "Esta es la página principal sobre alcoholismo. Resume qué se entiende por el problema y qué señales se ven en la casa, el trabajo o la pareja. No pone un diagnóstico.",
    heroHighlights: [
      "Terapia online",
      "Atención para adultos",
      "Enfoque cognitivo-conductual",
    ],
    quickFacts: [
      {
        title: "Qué evaluamos",
        description:
          "Frecuencia, contexto, consecuencias y función emocional que cumple el alcohol.",
      },
      {
        title: "Primer objetivo",
        description:
          "Reducir daño, ordenar el consumo y definir un plan realista para avanzar.",
      },
      {
        title: "Modalidad",
        description:
          "Sesiones online para empezar sin traslados y con mayor continuidad.",
      },
    ],
    sections: [
      {
        title:
          "Cuándo el consumo deja de ser una costumbre y pasa a dominar la vida",
        paragraphs: [
          "Muchas personas tardan en consultar porque comparan su caso con situaciones más extremas. Piensan que si todavía trabajan, cumplen con parte de sus responsabilidades o no beben todos los días, entonces no puede hablarse de alcoholismo. En la práctica clínica el criterio más útil es otro: observar si el alcohol ya empezó a tomar decisiones por ti, si aparece como salida automática para calmar ansiedad, aburrimiento, rabia o vergüenza, y si cada intento de control dura menos de lo que prometiste.",
          "También importa revisar el costo acumulado del consumo. A veces el daño no se ve en un solo episodio dramático, sino en pequeñas pérdidas repetidas: discusiones que se vuelven rutina, resacas que reducen tu rendimiento, planes familiares que cancelas, dinero que desaparece o una sensación persistente de culpa al día siguiente. Cuando el alcohol se instala como la herramienta principal para regular emociones, el problema merece una evaluación seria aunque desde afuera todavía parezca funcional.",
        ],
        bullets: [
          "Beber para dormir, relajarte o poder desconectarte del día.",
          "Ocultar la cantidad consumida o minimizar episodios de exceso.",
          "Discutir con la pareja o la familia por conductas ligadas al alcohol.",
          "Perder energía, concentración o motivación después de beber.",
        ],
      },
      {
        title:
          "Señales de alcoholismo que suelen verse en el trabajo, la casa y la relación de pareja",
        paragraphs: [
          "En consulta es frecuente que el alcoholismo se manifieste más por sus efectos indirectos que por la bebida en sí. La persona empieza a llegar tarde, posterga tareas, evita conversaciones incómodas y vive en una secuencia de desorden, culpa y nuevas promesas de control. A veces lo que más preocupa no es la cantidad de alcohol, sino la irritabilidad, el aislamiento o el cambio de personalidad después de consumir.",
          "Otra señal importante es la pérdida de libertad. Tal vez logras pasar algunos días sin beber, pero cuando aparece estrés, soledad o presión social vuelves al mismo patrón. Eso también ocurre en quienes hacen consumo de fin de semana o se emborrachan por episodios, no solo en quienes toman a diario. Por eso buscar ayuda para alcoholismo en Chillán no significa etiquetarte de inmediato, sino entender con honestidad si el alcohol ya está afectando tu salud mental y tu capacidad de decidir.",
        ],
        bullets: [
          "Necesidad de beber más para obtener el mismo efecto.",
          "Pensar con anticipación cuándo vas a tomar o cuánto alcohol habrá.",
          "Sentir vergüenza, vacío o ansiedad después de consumir.",
          "Volver a beber pese a problemas laborales, familiares o de salud.",
        ],
      },
      {
        title:
          "Qué tipo de ayuda para alcoholismo en Chillán suele necesitar una persona",
        paragraphs: [
          "No todos los casos requieren la misma intervención. Algunas personas necesitan principalmente terapia psicológica para trabajar detonantes emocionales, hábitos y prevención de recaídas. Otras además requieren evaluación médica porque existe riesgo de abstinencia, consumo muy alto, antecedentes de convulsiones o síntomas físicos relevantes. Diferenciar eso al comienzo es parte de un tratamiento responsable y evita promesas simplistas del tipo 'solo tienes que poner voluntad'.",
          "También es común que quien consulta primero sea un familiar. Si te preocupa la conducta de tu pareja, de un hijo adulto o de alguien cercano, una primera orientación puede ayudarte a dejar de discutir desde la impotencia y empezar a responder de forma más útil. El trabajo terapéutico no siempre parte con la persona que bebe sentada frente al terapeuta; a veces comienza ordenando el entorno, los límites y el modo de pedir ayuda sin perseguir ni encubrir.",
        ],
        bullets: [
          "Evaluación psicológica del patrón de consumo y sus consecuencias.",
          "Definición de objetivos: reducción de daño, control o abstinencia.",
          "Derivación médica cuando hay riesgo de abstinencia o comorbilidades.",
          "Orientación inicial para familiares que no saben cómo intervenir.",
        ],
      },
      {
        title: "Cómo puede ayudarte una terapia online si decides empezar ahora",
        paragraphs: [
          "La terapia online suele facilitar el inicio porque reduce barreras prácticas y emocionales. Muchas personas postergan pedir hora por vergüenza, falta de tiempo o cansancio para trasladarse. Con una sesión por videollamada es posible empezar desde un espacio privado, revisar qué está pasando y construir un plan concreto para la semana siguiente. No es una conversación abstracta: se trabaja con situaciones específicas, horarios, desencadenantes y respuestas alternativas.",
          "En este tipo de proceso se analiza qué función cumple el alcohol en tu vida y cómo reemplazar esa función con herramientas más sanas. Se revisan pensamientos como 'solo hoy', 'me lo merezco' o 'si paro me voy a sentir peor', y se diseñan medidas de prevención de recaídas que sean realistas para tu contexto. Si hoy estás buscando alcoholismo Chillán porque ya te cansaste de prometerte cambios que no duran, pedir una primera sesión puede transformar una intención difusa en un comienzo concreto.",
        ],
      },
    ],
    processTitle: "Qué se trabaja al iniciar terapia",
    processSteps: [
      {
        title: "Entender el patrón",
        description:
          "Revisamos cuándo bebes, qué lo activa y qué consecuencias ya aparecieron en tu rutina.",
      },
      {
        title: "Definir un objetivo posible",
        description:
          "Acordamos una meta realista para tu caso y no una promesa extrema imposible de sostener.",
      },
      {
        title: "Prevenir recaídas",
        description:
          "Diseñamos respuestas para craving, presión social, fines de semana y momentos de mayor vulnerabilidad.",
      },
    ],
    faqTitle: "Preguntas frecuentes sobre alcoholismo en Chillán",
    faqs: [
      {
        question: "¿Tengo que tocar fondo para pedir ayuda?",
        answer:
          "No. Mientras antes se interviene, más fácil es reducir daño y evitar que el consumo se consolide. Esperar a que aparezca una crisis mayor solo suele aumentar culpa, desgaste familiar y riesgo físico.",
      },
      {
        question: "¿La terapia sirve si todavía sigo bebiendo?",
        answer:
          "Sí. Muchas personas empiezan terapia mientras aún consumen. La primera parte del trabajo consiste precisamente en entender el patrón actual, evaluar riesgos y construir cambios graduales o abstinencia según corresponda.",
      },
      {
        question: "¿Puede consultar un familiar aunque la persona no quiera ir?",
        answer:
          "Sí. Una orientación inicial para familiares puede ser útil para ordenar límites, dejar de reforzar ciertas conductas y aprender formas más efectivas de pedir ayuda sin entrar en peleas estériles.",
      },
      {
        question: "¿El alcoholismo siempre requiere internación?",
        answer:
          "No. La internación se reserva para situaciones específicas de alta gravedad o riesgo médico. Muchos casos pueden abordarse de forma ambulatoria con terapia psicológica y, cuando corresponde, apoyo médico complementario.",
      },
    ],
    ctaTitle: "Agenda terapia online para empezar a tratar el alcoholismo",
    ctaDescription:
      "Si el alcohol ya está afectando tu descanso, tu trabajo o tus relaciones, una primera sesión puede ayudarte a ordenar el problema y definir un plan serio.",
    whatsappMessage:
      "Hola, me interesa agendar una terapia online por alcoholismo en Chillán.",
  },
};
