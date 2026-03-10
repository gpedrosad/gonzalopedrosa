export const alcoholClusterOrder = [
  "alcoholismo-chillan",
  "psicologo-alcoholismo-chillan",
  "tratamiento-alcoholismo-chillan",
  "dejar-de-beber-chillan",
] as const;

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
    metaTitle: "Alcoholismo en Chillán | Ayuda Psicológica | Gonzalo Pedrosa",
    description:
      "Señales de alcoholismo en Chillán, opciones de ayuda profesional y terapia online para empezar a cambiar tu relación con el alcohol.",
    h1: "Alcoholismo en Chillán: señales, ayuda y primeros pasos para tratarlo",
    shortTitle: "Alcoholismo en Chillán",
    cardDescription:
      "Una guía clara para reconocer el problema y entender cuándo conviene pedir ayuda.",
    serviceType: "Apoyo psicológico para alcoholismo",
    intentLabel: "Búsqueda general sobre alcoholismo",
    lead:
      "Cuando el alcohol empieza a ordenar tu descanso, tu ánimo, tus discusiones o tus fines de semana, el problema ya no es solo cuánto bebes, sino el lugar que el consumo tomó en tu vida. Esta página está pensada para quienes buscan orientación inicial sobre alcoholismo en Chillán y quieren entender qué tipo de ayuda psicológica existe antes de dar el primer paso.",
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
  "psicologo-alcoholismo-chillan": {
    slug: "/psicologo-alcoholismo-chillan",
    metaTitle:
      "Psicólogo para Alcoholismo en Chillán | Gonzalo Pedrosa",
    description:
      "Psicólogo para alcoholismo en Chillán. Evaluación clínica, terapia online y acompañamiento para cambiar tu relación con el alcohol.",
    h1:
      "Psicólogo para alcoholismo en Chillán: apoyo profesional para cambiar tu relación con el alcohol",
    shortTitle: "Psicólogo alcoholismo Chillán",
    cardDescription:
      "Pensada para quien ya sabe que necesita apoyo profesional y quiere entender cómo trabaja un psicólogo.",
    serviceType: "Terapia psicológica para alcoholismo",
    intentLabel: "Búsqueda por profesional",
    lead:
      "Buscar un psicólogo para alcoholismo en Chillán suele aparecer cuando ya intentaste controlar el consumo por tu cuenta y viste que no basta con proponértelo. El trabajo terapéutico no consiste en juzgarte ni en repetir consejos obvios, sino en evaluar el problema con criterio clínico, entender qué mantiene el patrón y diseñar un tratamiento que puedas sostener en tu vida real.",
    heroHighlights: [
      "Evaluación clínica",
      "Trabajo con recaídas",
      "Sesiones online",
    ],
    quickFacts: [
      {
        title: "Qué aborda la terapia",
        description:
          "Consumo, ansiedad, culpa, impulsividad y conflictos familiares asociados.",
      },
      {
        title: "Cómo se trabaja",
        description:
          "Con objetivos medibles, tareas concretas y seguimiento de detonantes.",
      },
      {
        title: "Cuándo derivar",
        description:
          "Si hay abstinencia, depresión intensa o necesidad de evaluación médica.",
      },
    ],
    sections: [
      {
        title: "Qué hace un psicólogo cuando hay problemas con el alcohol",
        paragraphs: [
          "La primera función de un psicólogo en este contexto es evaluar con precisión. No basta con saber cuántos tragos consumes; también hay que entender en qué momentos bebes, qué emociones anteceden el consumo, qué intentos de cambio ya hiciste y qué consecuencias aparecen después. Esa evaluación permite distinguir si estás frente a un hábito problemático, a un trastorno por consumo de alcohol más instalado o a un cuadro mezclado con ansiedad, depresión, trauma o problemas de pareja.",
          "La segunda función es intervenir sobre los factores que mantienen el problema. En lugar de centrar toda la sesión en convencerte de que el alcohol hace mal, se trabaja sobre disparadores concretos: cansancio al final del día, presión social, sensación de fracaso, conflictos familiares o miedo a sentir ciertas emociones sin anestesia. Ese enfoque permite pasar de la culpa a la comprensión del patrón, y desde ahí construir cambios más estables.",
        ],
        bullets: [
          "Frecuencia, cantidad y contexto del consumo.",
          "Emociones y pensamientos que empujan a beber.",
          "Costos reales en salud, trabajo, pareja y autoestima.",
          "Objetivos terapéuticos ajustados al momento de cada persona.",
        ],
      },
      {
        title: "Alcoholismo y problemas que casi siempre vienen juntos",
        paragraphs: [
          "Rara vez el alcohol aparece aislado. Con mucha frecuencia se mezcla con ansiedad alta, insomnio, irritabilidad, vergüenza, sensación de vacío o episodios depresivos. También es común encontrar historias de autoexigencia extrema, dificultades para poner límites o aprendizajes familiares donde beber era la forma habitual de regular malestar. Si esos elementos no se trabajan, el consumo puede bajar por un tiempo y luego volver por la misma puerta.",
          "Por eso un psicólogo para alcoholismo en Chillán no solo atiende el síntoma visible. También ayuda a ordenar aquello que el alcohol estaba tapando o administrando mal: discusiones constantes, miedo al fracaso, soledad, rabia acumulada, duelo no elaborado o una identidad muy golpeada por la culpa. En muchos pacientes, avanzar en estas áreas produce más cambio que cualquier sermón sobre disciplina.",
        ],
        bullets: [
          "Ansiedad que se calma momentáneamente al beber.",
          "Depresión o apatía que aumentan después del consumo.",
          "Conflictos de pareja y pérdida de confianza en la familia.",
          "Vergüenza y secretismo que dificultan pedir ayuda.",
        ],
      },
      {
        title: "Cómo trabajo la terapia para alcoholismo en consulta",
        paragraphs: [
          "El trabajo terapéutico combina herramientas de terapia cognitivo-conductual y entrevista motivacional. Eso significa que no se fuerza una postura moral ni se trata a la persona como si fuera incapaz de pensar, sino que se la ayuda a mirar con claridad el costo del consumo, fortalecer su motivación y practicar respuestas distintas frente a situaciones de riesgo. La idea no es prometer cambios mágicos, sino instalar decisiones repetibles.",
          "En la práctica esto incluye registros de consumo, identificación de pensamientos permisivos, estrategias para surfear el craving, planificación de fines de semana, revisión de recaídas sin dramatismo y construcción de rutinas más compatibles con la salud mental. También se trabaja mucho la relación entre emoción y acción: aprender a tolerar tensión, frustración o soledad sin recurrir al alcohol como anestesia principal.",
        ],
        bullets: [
          "Registro breve para detectar patrones y horas críticas.",
          "Respuesta concreta frente a ganas intensas de beber.",
          "Planificación de contextos sociales o días de mayor riesgo.",
          "Prevención de recaídas con foco en aprendizaje y ajuste.",
        ],
      },
      {
        title: "Cuándo conviene sumar apoyo médico o psiquiátrico",
        paragraphs: [
          "Hay momentos en que la terapia psicológica no debe trabajar sola. Si existe consumo muy alto, temblores, sudoración intensa, antecedentes de abstinencia complicada, ideas suicidas, crisis depresivas severas o trastornos del sueño muy marcados, es prudente sumar evaluación médica o psiquiátrica. Eso no reemplaza la terapia: la vuelve más segura y mejor integrada.",
          "Un buen tratamiento para alcoholismo sabe coordinar apoyos. Algunas personas necesitan primero estabilizar síntomas físicos; otras requieren ayuda farmacológica transitoria para sueño, ansiedad o deseo intenso de beber. El criterio clínico está en identificar qué combinación de recursos aumenta la probabilidad de cambio sin hacerte depender de soluciones parciales.",
        ],
      },
    ],
    processTitle: "En qué suele consistir el trabajo terapéutico",
    processSteps: [
      {
        title: "Entender tu caso",
        description:
          "Evaluamos el papel que cumple el alcohol y los problemas asociados que hoy sostienen el consumo.",
      },
      {
        title: "Cambiar detonantes",
        description:
          "Entrenamos respuestas nuevas para estrés, presión social, fines de semana y emociones difíciles.",
      },
      {
        title: "Sostener el cambio",
        description:
          "Revisamos avances, recaídas y ajustes hasta que el nuevo patrón se vuelva más estable.",
      },
    ],
    faqTitle: "Preguntas frecuentes sobre terapia con psicólogo para alcoholismo",
    faqs: [
      {
        question: "¿Puedo ir a terapia aunque me dé vergüenza hablar del tema?",
        answer:
          "Sí. La vergüenza es una de las razones más comunes para postergar el tratamiento. Justamente por eso la consulta debe ser un espacio de evaluación y trabajo, no de juicio moral.",
      },
      {
        question: "¿Necesito llegar totalmente sobrio a la primera sesión?",
        answer:
          "No necesitas haber resuelto el problema antes de consultar. Lo importante es llegar en condiciones de conversar y evaluar bien tu situación. El objetivo inicial es entender el patrón actual y decidir cómo intervenir.",
      },
      {
        question: "¿Atiendes a familiares de alguien con alcoholismo?",
        answer:
          "Sí. Cuando la persona que consume no quiere consultar, la familia igual puede beneficiarse de una orientación para ordenar límites, reducir discusiones improductivas y definir pasos razonables.",
      },
      {
        question: "¿Qué pasa si recaigo entre sesiones?",
        answer:
          "Una recaída no invalida el proceso. Se analiza qué la disparó, qué señales previas aparecieron y qué ajuste hace falta. Trabajar así suele ser mucho más útil que volver a la culpa o al todo o nada.",
      },
    ],
    ctaTitle: "Agenda terapia online con psicólogo para alcoholismo en Chillán",
    ctaDescription:
      "Si buscas apoyo profesional, la primera sesión sirve para evaluar tu caso, aclarar riesgos y definir un tratamiento posible para ti.",
    whatsappMessage:
      "Hola, me interesa agendar una terapia online con psicólogo por alcoholismo en Chillán.",
  },
  "tratamiento-alcoholismo-chillan": {
    slug: "/tratamiento-alcoholismo-chillan",
    metaTitle:
      "Tratamiento del Alcoholismo en Chillán | Gonzalo Pedrosa",
    description:
      "Tratamiento del alcoholismo en Chillán con evaluación, objetivos claros y prevención de recaídas. Agenda terapia online con Gonzalo Pedrosa.",
    h1:
      "Tratamiento del alcoholismo en Chillán: en qué consiste y cómo se organiza el proceso",
    shortTitle: "Tratamiento alcoholismo Chillán",
    cardDescription:
      "Explica cómo se estructura un tratamiento serio, qué fases tiene y cuándo conviene apoyo complementario.",
    serviceType: "Tratamiento psicológico del alcoholismo",
    intentLabel: "Búsqueda de tratamiento",
    lead:
      "Cuando alguien busca tratamiento alcoholismo Chillán normalmente ya no quiere solo información general: quiere entender cómo se ve un proceso terapéutico de verdad, cuánto dura, qué objetivos se trabajan y qué pasa si hay recaídas. Un buen tratamiento no se reduce a decirte que dejes de beber; organiza fases, mide avances y adapta la intervención al nivel de riesgo y al contexto de cada persona.",
    heroHighlights: [
      "Evaluación inicial",
      "Plan por fases",
      "Prevención de recaídas",
    ],
    quickFacts: [
      {
        title: "Fase 1",
        description:
          "Evaluar gravedad, riesgos físicos y problemas emocionales asociados.",
      },
      {
        title: "Fase 2",
        description:
          "Instalar herramientas para cortar el patrón de consumo y sostener cambios.",
      },
      {
        title: "Fase 3",
        description:
          "Consolidar hábitos, revisar recaídas y mantener seguimiento estratégico.",
      },
    ],
    sections: [
      {
        title: "El tratamiento del alcoholismo no es solo decir 'deja de beber'",
        paragraphs: [
          "Uno de los mayores errores es pensar el tratamiento como una orden simple: dejar el alcohol y resistir. Ese enfoque suele fracasar porque no considera para qué estaba sirviendo el consumo, qué detonantes lo activan ni qué recursos tiene hoy la persona para enfrentar malestar sin beber. Un tratamiento útil necesita entender el sistema completo: horarios, vínculos, emociones, historia previa, motivación y nivel de daño actual.",
          "Además, no todos los pacientes parten desde el mismo punto. En algunos casos el objetivo inicial es abstinencia; en otros, reducción de daño y evaluación más detallada antes de decidir el siguiente paso. Lo importante es que el plan tenga lógica clínica y no dependa solo del entusiasmo de la primera semana. Eso es lo que diferencia un proceso de tratamiento de una suma de buenas intenciones.",
        ],
        bullets: [
          "Objetivos claros y realistas para el momento actual.",
          "Evaluación de riesgos médicos y psicológicos desde el inicio.",
          "Intervenciones ajustadas al contexto laboral, familiar y social.",
          "Seguimiento para medir cambios y corregir recaídas a tiempo.",
        ],
      },
      {
        title: "Fase de evaluación: qué revisamos antes de intervenir",
        paragraphs: [
          "La evaluación inicial busca responder preguntas concretas. Cuánto se consume, con qué frecuencia, si existen pérdidas de control, si hubo intentos de dejar de beber, si aparecen síntomas de abstinencia, qué trastornos conviven con el problema y cuánto apoyo real ofrece el entorno. Esta fase es esencial porque permite decidir si basta con terapia ambulatoria o si conviene sumar apoyo médico, psiquiátrico o una red familiar más ordenada.",
          "También se revisa la función subjetiva del alcohol. Para algunas personas es una vía para apagar ansiedad; para otras, una forma de socializar, dormir, anestesiar rabia o tolerar vacío. Si no se comprende eso, el tratamiento se vuelve genérico. En cambio, cuando se identifica la lógica del consumo, las sesiones pueden apuntar a reemplazar esa función con estrategias más sanas y mucho más estables.",
        ],
        bullets: [
          "Severidad del consumo y riesgo de abstinencia.",
          "Ansiedad, depresión, trauma o insomnio asociados.",
          "Disponibilidad de apoyo familiar y límites necesarios.",
          "Objetivo terapéutico más adecuado para este momento.",
        ],
      },
      {
        title: "Fase activa: habilidades para cortar el patrón y sostener el cambio",
        paragraphs: [
          "Una vez definido el plan, el tratamiento entra en la fase activa. Aquí se entrenan habilidades específicas: reconocer señales tempranas de recaída, desarmar pensamientos permisivos, preparar respuestas para invitaciones sociales, ordenar rutinas nocturnas, tolerar craving sin actuarlo y resolver conflictos sin usar el alcohol como escape. La terapia deja de ser solo comprensión y se convierte en práctica deliberada.",
          "En esta etapa también se revisa qué hábitos estaban dejando a la persona más vulnerable. Saltarse comidas, dormir poco, aislarse, vivir en improvisación o exponerse siempre a los mismos contextos de consumo aumenta mucho la probabilidad de recaer. Por eso el tratamiento del alcoholismo no trabaja solo con la bebida, sino con el estilo de vida que la vuelve probable.",
        ],
        bullets: [
          "Registro de situaciones de alto riesgo y respuesta planificada.",
          "Técnicas para craving, urgencia emocional y presión social.",
          "Cambios de rutina que reduzcan exposición al consumo.",
          "Trabajo sobre culpa, autoimagen y motivación de largo plazo.",
        ],
      },
      {
        title: "Mantenimiento, recaídas y seguimiento",
        paragraphs: [
          "La recuperación no es una línea perfecta. Por eso la última fase del tratamiento se centra en consolidar cambios y aprender a leer las recaídas como información, no como prueba de incapacidad. Cuando una recaída se analiza bien, suele mostrar con bastante claridad qué señales se ignoraron, qué contexto fue subestimado y qué apoyo faltó en ese momento. Esa lectura permite volver a encaminar el proceso sin caer en el todo o nada.",
          "El seguimiento puede hacerse con sesiones más espaciadas cuando hay mayor estabilidad, pero no desaparece de un día para otro. Mantener puntos de control ayuda a proteger lo avanzado, ajustar objetivos y evitar que el consumo vuelva a instalarse silenciosamente. Si buscas tratamiento alcoholismo Chillán, conviene pensar en un proceso con fases y continuidad, no en una solución aislada para salir del paso.",
        ],
      },
    ],
    processTitle: "Fases habituales de un tratamiento",
    processSteps: [
      {
        title: "Evaluación clínica",
        description:
          "Se define la gravedad del problema, los riesgos y el tipo de apoyo que conviene activar.",
      },
      {
        title: "Intervención inicial",
        description:
          "Se ponen límites al patrón de consumo y se trabajan medidas concretas para cortar la inercia.",
      },
      {
        title: "Cambio de hábitos",
        description:
          "Se desarrollan habilidades para sostener el cambio en trabajo, casa, ocio y vida social.",
      },
      {
        title: "Seguimiento",
        description:
          "Se revisan recaídas, avances y ajustes necesarios para estabilizar el nuevo patrón.",
      },
    ],
    faqTitle: "Preguntas frecuentes sobre tratamiento del alcoholismo",
    faqs: [
      {
        question: "¿Cuánto dura un tratamiento para alcoholismo?",
        answer:
          "Depende de la severidad, la frecuencia del consumo y los problemas asociados. En algunos casos se observan cambios tempranos en pocas semanas, pero consolidar un nuevo patrón suele requerir varios meses de trabajo y seguimiento.",
      },
      {
        question: "¿El tratamiento siempre incluye medicamentos?",
        answer:
          "No siempre. Hay personas que avanzan con terapia psicológica y cambios conductuales. Los medicamentos se evalúan cuando hay síntomas físicos, alto riesgo de abstinencia, craving intenso o trastornos asociados que hacen prudente sumar apoyo médico.",
      },
      {
        question: "¿Se puede hacer tratamiento online?",
        answer:
          "Sí. La terapia online permite evaluar, trabajar detonantes, revisar recaídas y sostener seguimiento con muy buena continuidad. Si hubiera señales de riesgo médico, se complementa con evaluación presencial donde corresponda.",
      },
      {
        question: "¿Una recaída significa que el tratamiento fracasó?",
        answer:
          "No. Significa que apareció una situación que todavía supera las herramientas disponibles. Analizarla a tiempo suele fortalecer el proceso más que ocultarla o abandonar el tratamiento por vergüenza.",
      },
    ],
    ctaTitle: "Agenda terapia online para iniciar tratamiento del alcoholismo",
    ctaDescription:
      "La primera sesión permite evaluar gravedad, definir objetivos y decidir qué tipo de tratamiento conviene en tu caso.",
    whatsappMessage:
      "Hola, me interesa agendar una terapia online para tratamiento del alcoholismo en Chillán.",
  },
  "dejar-de-beber-chillan": {
    slug: "/dejar-de-beber-chillan",
    metaTitle:
      "Terapia para Dejar de Beber en Chillán | Gonzalo Pedrosa",
    description:
      "Terapia para dejar de beber en Chillán. Ayuda psicológica online para cortar el consumo y sostener cambios reales en el tiempo.",
    h1:
      "Terapia para dejar de beber en Chillán: ayuda concreta para empezar hoy",
    shortTitle: "Dejar de beber Chillán",
    cardDescription:
      "Dirigida a quien quiere empezar ya y necesita pasos concretos para cortar el consumo con apoyo profesional.",
    serviceType: "Terapia para dejar de beber",
    intentLabel: "Búsqueda de ayuda inmediata",
    lead:
      "Querer dejar de beber no siempre significa tener claro cómo hacerlo. Muchas personas llegan cansadas de prometerse cambios los domingos y romperlos a mitad de semana, o asustadas porque el alcohol ya se convirtió en la respuesta automática frente al estrés. Si hoy buscas terapia para dejar de beber Chillán o ayuda para alcoholismo Chillán, lo importante es transformar esa urgencia en un plan seguro y posible.",
    heroHighlights: [
      "Primeros pasos claros",
      "Apoyo para craving",
      "Terapia online",
    ],
    quickFacts: [
      {
        title: "Primer foco",
        description:
          "Cortar la inercia del consumo y ordenar las horas o contextos más vulnerables.",
      },
      {
        title: "Qué entrenamos",
        description:
          "Manejo de ansiedad, presión social y pensamientos que empujan a beber.",
      },
      {
        title: "Apoyo extra",
        description:
          "Derivación médica si hay signos físicos de abstinencia o riesgo importante.",
      },
    ],
    sections: [
      {
        title: "Quiero dejar de beber: por dónde empezar sin hacer promesas imposibles",
        paragraphs: [
          "El primer error suele ser plantearse un cambio enorme sin revisar el terreno. Decir 'nunca más voy a tomar' puede sonar fuerte, pero si no entiendes qué momentos te llevan a beber, quiénes lo facilitan y qué harás en vez de consumir, la promesa queda sola. Un comienzo útil ordena variables concretas: horarios críticos, stock de alcohol en casa, personas con las que más te descontrolas y emociones que hoy te empujan a buscar alivio rápido.",
          "También conviene definir si estás intentando cortar de golpe, reducir de forma supervisada o simplemente frenar una escalada. Esa decisión no se toma por orgullo, sino por seguridad. En algunos casos el consumo es tan alto que dejarlo sin evaluación médica puede ser riesgoso. Por eso la ayuda psicológica sirve mejor cuando se combina con criterio: actuar rápido, sí, pero sin improvisar ni negar los riesgos físicos que pueden aparecer.",
        ],
        bullets: [
          "Anotar horas y situaciones en que aparecen más ganas de beber.",
          "Sacar o limitar el acceso inmediato al alcohol en casa.",
          "Avisar a una persona de confianza que estás intentando cambiar.",
          "Pedir evaluación si hay antecedentes de abstinencia complicada.",
        ],
      },
      {
        title:
          "Qué hacer con la ansiedad, el insomnio y las ganas de beber de los primeros días",
        paragraphs: [
          "Los primeros días suelen ser los más desordenados porque el cuerpo y la rutina extrañan un alivio artificial que estaba automatizado. Aparecen ansiedad, irritabilidad, insomnio, pensamientos insistentes y la idea de que una sola copa resolvería todo. Justamente ahí la terapia aporta estructura. Se trabaja con planes breves para las horas más difíciles, técnicas de regulación fisiológica, manejo del impulso y lectura de pensamientos que inflan la urgencia.",
          "Es importante diferenciar malestar esperable de señales de alerta. Si aparecen temblores importantes, sudoración intensa, palpitaciones fuertes, confusión o síntomas físicos preocupantes, no basta con aguantar: hace falta evaluación médica. La meta de dejar de beber no debería convertirse en un acto temerario. Un proceso bien acompañado cuida tanto la decisión de cambio como la seguridad del cuerpo.",
        ],
        bullets: [
          "No pasar demasiadas horas sin comer ni dormir muy poco.",
          "Tener actividades cortas para atravesar la urgencia sin quedarte solo con el impulso.",
          "Posponer la decisión de beber y ganar tiempo con acciones concretas.",
          "Buscar atención médica si aparecen síntomas físicos intensos o inusuales.",
        ],
      },
      {
        title: "Herramientas terapéuticas para no volver automáticamente a la botella",
        paragraphs: [
          "Dejar de beber no depende solo de fuerza de voluntad. En terapia se entrenan herramientas para que el deseo no se convierta automáticamente en acción. Eso incluye identificar pensamientos permisivos, discutir la fantasía de alivio inmediato, preparar salidas para reuniones sociales, ensayar respuestas cuando otros insisten y construir actividades compatibles con una rutina más ordenada. El cambio se sostiene mejor cuando deja de depender de una pelea interna constante.",
          "También se trabaja la dimensión emocional. Muchas recaídas ocurren porque la persona no sabe qué hacer con frustración, soledad, rabia o cansancio sin recurrir al alcohol. Aprender a registrar esas emociones antes de que escalen, nombrarlas y responder con otra conducta cambia mucho el pronóstico. En ese sentido, la terapia para dejar de beber no solo busca quitar una sustancia: busca devolverte margen de decisión.",
        ],
        bullets: [
          "Registro de craving para detectar duración, intensidad y contexto.",
          "Plan previo para fines de semana, celebraciones o momentos de soledad.",
          "Rutinas de sueño, comida y descanso que reduzcan vulnerabilidad.",
          "Trabajo sobre vergüenza y autoimagen para no volver al consumo por culpa.",
        ],
      },
      {
        title: "Por qué pedir ayuda a tiempo cambia mucho el pronóstico",
        paragraphs: [
          "Cuando una persona intenta dejar de beber sola, suele pelear con el problema en silencio hasta agotarse. Pedir ayuda no te quita responsabilidad; te da un marco para usarla mejor. Contar con sesiones online permite revisar semana a semana qué funcionó, dónde estuviste más expuesto y cómo ajustar tu estrategia antes de que el consumo recupere terreno. Esa continuidad marca una diferencia importante.",
          "Además, la ayuda para alcoholismo en Chillán no tiene por qué empezar cuando todo está roto. Puedes consultar si todavía dudas, si alternas periodos de control con excesos o si te preocupa estar organizando la vida alrededor del próximo trago. Cuanto antes aparezca una conversación clínica honesta, más fácil es que dejar de beber se convierta en un proceso concreto y no en otra promesa que te deja peor contigo mismo.",
        ],
      },
    ],
    processTitle: "Cómo puede empezar el cambio",
    processSteps: [
      {
        title: "Primer contacto",
        description:
          "Evaluamos el patrón de consumo y definimos si conviene cortar de inmediato, reducir o derivar.",
      },
      {
        title: "Semana crítica",
        description:
          "Armamos un plan para horas vulnerables, craving, sueño y presión social.",
      },
      {
        title: "Nuevo patrón",
        description:
          "Consolidamos hábitos y estrategias para que el alcohol deje de ser tu respuesta automática.",
      },
    ],
    faqTitle: "Preguntas frecuentes sobre dejar de beber",
    faqs: [
      {
        question: "¿Es mejor reducir o dejar de beber por completo?",
        answer:
          "Depende del nivel de consumo, de la pérdida de control y de los riesgos físicos. En algunos casos la abstinencia total es la opción más segura; en otros se define una reducción supervisada mientras se evalúa mejor el cuadro.",
      },
      {
        question: "¿Necesito ayuda aunque solo me descontrole los fines de semana?",
        answer:
          "Sí, puede ser conveniente. El problema no se mide solo por la frecuencia, sino por la pérdida de control, el impacto posterior y la función emocional que cumple el alcohol en esos episodios.",
      },
      {
        question: "¿Qué pasa si mi pareja o mis amigos siguen tomando?",
        answer:
          "Eso aumenta el riesgo, pero no vuelve imposible el cambio. En terapia se trabajan límites, planificación de contextos sociales y formas de pedir apoyo sin depender de que todo tu entorno cambie primero.",
      },
      {
        question: "¿La terapia online alcanza para dejar de beber?",
        answer:
          "En muchos casos sí, especialmente cuando se necesita continuidad, seguimiento y entrenamiento de habilidades. Si surgieran señales de riesgo médico, la terapia se complementa con evaluación presencial o derivación según corresponda.",
      },
    ],
    ctaTitle: "Agenda terapia online para dejar de beber con apoyo profesional",
    ctaDescription:
      "Si quieres empezar ahora, la primera sesión puede ayudarte a pasar de la urgencia al plan, con criterios claros y acompañamiento real.",
    whatsappMessage:
      "Hola, me interesa agendar una terapia online para dejar de beber en Chillán.",
  },
};
