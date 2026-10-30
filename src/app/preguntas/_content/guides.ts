export type GuideSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type GuideLink = {
  href: string;
  label: string;
};

export type GuideFaq = {
  question: string;
  answer: string;
};

export type Guide = {
  slug: string;
  path: string;
  title: string;
  description: string;
  breadcrumbLabel: string;
  /** Si está, la miga sube a esa ficha en vez del índice de preguntas. */
  crumbParent?: { label: string; href: string };
  h1: string;
  lead: string;
  sections: GuideSection[];
  related: GuideLink[];
  faqs: GuideFaq[];
  /** Si está, la página publica Article con la persona del sitio. */
  updated?: string;
  sources?: Array<{ label: string; href: string }>;
};

const durationLead =
  "Una terapia psicológica no tiene una duración única. El plazo cambia según el problema, qué tan intenso y antiguo es, los objetivos que te propones, cada cuánto asistes y lo que practicas entre sesiones. Un tema acotado a veces se trabaja en semanas o pocos meses. Un patrón de años, o varios problemas juntos, suele pedir más tiempo.";

const cbtLead =
  "La terapia cognitivo-conductual, o TCC, es una psicoterapia que trabaja la relación entre lo que piensas, lo que sientes y lo que haces. Suele mirar un problema de ahora, con un mapa simple y un paso concreto entre sesiones. No es pensar en positivo ni un plazo igual para todo el mundo.";

const onlineLead =
  "Puede servir, con matices. Una revisión de doce estudios de psicoterapia por videollamada no la encontró por debajo de la presencial en los síntomas que medían, y sí vio la alianza de trabajo más débil. No hay un porcentaje para todas las personas. No reemplaza una urgencia ni cuida la reserva si alguien puede oírte.";

const anxietyLead =
  "El estrés es la alarma frente a una exigencia concreta, como la pega, una prueba, una deuda o un conflicto. Cuando esa exigencia baja, el cuerpo suele aflojar. La ansiedad puede seguir encendida aunque el motivo ya pasó, o aparecer sin un disparador claro, con preocupación difícil de cortar y ganas de evitar. Las dos pueden ir juntas. Sentirlas no es, por sí solo, un diagnóstico.";

const gamblingLead =
  "En el lenguaje clínico, la ludopatía es un trastorno adictivo, llamado trastorno por juego en el DSM-5-TR y en la CIE-11. En la conversación cotidiana mucha gente le dice enfermedad, y esa palabra alcanza para entender que no se reduce a un vicio elegido con calma ni a una falta de carácter. El diagnóstico lo confirma un profesional cuando el juego se escapa de control y daña la vida.";

const partnerLead =
  "Si tu pareja tiene adicción al juego, protege la plata compartida, deja de cubrir deudas en silencio y habla en un momento tranquilo, con hechos concretos. Puedes ofrecer compañía para una evaluación y también buscar apoyo para ti. No puedes hacer el tratamiento por la otra persona. Si aparece una amenaza de hacerse daño, usa las líneas de urgencia.";

const frequencyLead =
  "Cada cuánto ir al psicólogo no tiene una cifra única. Al comienzo, lo más habitual es una sesión por semana, para retomar lo conversado antes de que se enfríe. Cuando el malestar baja y ya usas lo aprendido, hay personas que pasan a cada dos semanas. En una crisis corta a veces se acuerda un contacto más seguido. La frecuencia sale del problema, del riesgo y de tu vida práctica.";

const panicLead =
  "Un ataque de pánico es un golpe súbito de miedo intenso que llega a su punto máximo en minutos. Puede traer palpitaciones, falta de aire, mareo, sudor, temblor, sensación de irrealidad y miedo a perder el control o a morirte. Después baja, aunque el susto puede quedar un rato. No es lo mismo que la ansiedad de todo el día. Si el dolor de pecho es nuevo o muy fuerte, un médico tiene que descartar un problema cardíaco.";

const griefLead =
  "No hay un plazo único ni sano para el duelo. El dolor agudo suele cambiar de forma con los meses y, aun así, vuelve en fechas, canciones o lugares. Las clasificaciones hablan de duelo prolongado cuando, pasado un tiempo largo, la pena sigue tan intensa que traba la vida diaria: cerca de doce meses en adultos según el DSM-5-TR y seis meses según la CIE-11. Esas cifras sirven para evaluar, no para exigirte que ya estés bien.";

export const guides: Guide[] = [
  {
    slug: "cuanto-dura-una-terapia-psicologica",
    path: "/preguntas/cuanto-dura-una-terapia-psicologica",
    title: "¿Cuánto dura una terapia psicológica?",
    description:
      "No hay un plazo único. Influyen el problema, su intensidad, tus objetivos, la frecuencia y lo que practicas entre sesiones.",
    breadcrumbLabel: "Duración de la terapia",
    h1: "¿Cuánto dura una terapia psicológica?",
    lead: durationLead,
    sections: [
      {
        heading: "Qué factores mueven el plazo",
        paragraphs: [
          "El motivo pesa más que el calendario. Una dificultad reciente y delimitada, como un miedo concreto o un insomnio ligado a una etapa, suele ordenarse antes que un malestar que ya se metió en la pega, la pareja y el cuerpo.",
          "La intensidad también cuenta. Si puedes trabajar, dormir algo y mantener vínculos, el ritmo puede ser semanal y con tareas simples. Si el malestar te saca de tus rutinas, aparece consumo de alcohol u otras sustancias, o hay riesgo, el cuidado es mayor y a veces participan más profesionales.",
          "Los objetivos cambian la meta. Volver a tomar la micro sin tanto miedo tiene un cierre más visible. Revisar un modo de relacionarte que se repite desde la adolescencia se mueve por etapas, y cada etapa tiene su propio tiempo.",
        ],
      },
      {
        heading: "La hora de sesión no es la terapia",
        paragraphs: [
          "Un encuentro suele durar cerca de una hora. Ese dato describe la cita, no el proceso completo. Asistir varias veces no significa que el trabajo tenga que estar listo en una fecha fija.",
          "Entre sesiones ocurre gran parte del aprendizaje. Si pruebas una herramienta en una situación real y vuelves a contar qué pasó, cada hora rinde más. Si la idea queda solo en la conversación, el proceso se estira porque hay que retomar desde cero.",
          "La frecuencia se conversa. Una vez por semana es un ritmo frecuente al inicio, porque el hilo no se corta. Espaciar muy pronto puede hacer que cada sesión se vaya en ponerse al día. Más adelante, cuando ya usas lo aprendido, hay personas que amplían el espacio entre citas. De eso habla la guía sobre [cada cuánto ir al psicólogo](/preguntas/cada-cuanto-ir-al-psicologo).",
        ],
      },
      {
        heading: "Cómo se nota que algo avanza",
        paragraphs: [
          "El avance aparece en hechos chicos: duermes un poco mejor, evitas menos una situación, discutes con otra salida, o puedes nombrar el pensamiento que te empuja. Hay semanas peores dentro de un proceso que igual se mueve. Una línea recta de mejoría es rara.",
          "Cerrar tampoco es un solo acto. A veces se termina un objetivo y queda otro. A veces se pacta una pausa y se retoma si la vida se complica. Quedarte solo porque ya llevas harto tiempo, o irte el primer día en que te sientes mejor, son dos apuros distintos. La decisión se mira con lo que ocurre ahora.",
          "Nadie calcula tu plazo con una pregunta de internet. Quien te evalúe necesita el problema, la historia reciente, lo que ya intentaste y el apoyo que tienes. Dos personas que dicen ansiedad pueden necesitar caminos distintos. En la [primera consulta con un psicólogo](/primera-consulta-psicologo-chillan) se ordenan esos factores y se propone un tramo inicial, sujeto a revisión.",
        ],
      },
    ],
    related: [
      { href: "/primera-consulta-psicologo-chillan", label: "Qué ocurre en la primera consulta" },
      { href: "/cuando-ir-al-psicologo-chillan", label: "Señales de cuándo ir al psicólogo" },
      { href: "/psicologo-cognitivo-conductual-chillan", label: "Psicólogo cognitivo conductual en Chillán" },
      { href: "/preguntas/cada-cuanto-ir-al-psicologo", label: "¿Cada cuánto conviene ir al psicólogo?" },
      { href: "/preguntas/que-es-la-terapia-cognitivo-conductual", label: "¿Qué es la terapia cognitivo-conductual?" },
    ],
    faqs: [
      {
        question: "¿Hay un número estándar de sesiones?",
        answer:
          "No hay uno que sirva para todos. Algunos programas de terapia cognitivo-conductual organizan un problema acotado en varias semanas. Otros procesos siguen porque el objetivo es más amplio o el contexto sigue inestable.",
      },
      {
        question: "¿Una semana buena significa que ya terminó?",
        answer:
          "Una semana buena es un dato. Conviene ver si el cambio se sostiene cuando vuelve el disparador de siempre: la pega, la noche, una pelea o el lugar que evitabas.",
      },
    ],
  },
  {
    slug: "que-es-la-terapia-cognitivo-conductual",
    path: "/preguntas/que-es-la-terapia-cognitivo-conductual",
    title: "Terapia cognitivo-conductual (TCC): qué es y cómo es",
    description:
      "La terapia cognitivo-conductual (TCC) mira pensamientos, emociones y lo que haces ahora, con un paso entre sesiones. No es pensar en positivo ni un plazo fijo.",
    breadcrumbLabel: "Terapia cognitivo-conductual",
    h1: "¿Qué es la terapia cognitivo-conductual?",
    lead: cbtLead,
    updated: "2026-10-28",
    sections: [
      {
        heading: "Cómo se reconoce una sesión de TCC",
        paragraphs: [
          "Se elige un problema concreto y se arma un mapa: qué situación lo dispara, qué pensamiento aparece, qué emoción sube y qué haces después. Ese mapa muestra el círculo. Desde ahí se prueba un cambio chico, uno por vez.",
          "El trabajo mira el presente. Si una historia antigua sigue empujando el círculo de hoy, se nombra, y el énfasis sigue en lo que puedes ensayar esta semana. Tú traes el conocimiento de tu vida y quien atiende trae un método. Si una herramienta no te calza, se ajusta.",
        ],
        bullets: [
          "Hay un problema nombrado, no una charla sin borde.",
          "Se mira el pensamiento, la emoción y la conducta juntos.",
          "Queda un paso para la semana: anotar, acercarte o dejar una conducta que alivia un minuto y después empeora.",
          "Puedes preguntar el objetivo si sales sin saber qué observar.",
        ],
      },
      {
        heading: "Dónde se usa, en general",
        paragraphs: [
          "Hay programas descritos para ansiedad, crisis de pánico, fobia social, obsesiones y compulsiones, ánimo bajo, insomnio y algunos problemas de juego o de consumo. Que un manual describa pasos no dice que ese programa te corresponda ni en qué orden.",
          "Cuando el tema son obsesiones y rituales, una forma de TCC es la exposición con prevención de respuesta. Qué es esa pieza está en [qué es la ERP para el TOC](/preguntas/que-es-la-erp-para-el-toc). La diferencia entre la alarma y el ritual está en [obsesiones y compulsiones](/preguntas/obsesiones-y-compulsiones). La atención de ese método en Chillán es otra página: [terapia ERP para el TOC](/tratamiento-toc-chillan).",
          "La TCC convive con otros enfoques. Elegirla tiene sentido cuando quieres un foco claro y un paso práctico. Si el encaje no se siente, decirlo forma parte del proceso.",
        ],
      },
      {
        heading: "Qué puedes hacer entre una lectura y otra",
        paragraphs: [
          "Elige una situación de esta semana y escribe cuatro líneas: qué pasó, qué pensaste, qué sentiste y qué hiciste. No tienes que corregirlo. Ver el círculo ya es información.",
          "En las primeras conversaciones se nombra un problema, se arma ese mapa y queda un paso chico para la semana. No sales con una orden de pensar en positivo ni con un número de sesiones igual para todo el mundo. Si una herramienta no te calza, decirlo forma parte del método.",
          "Por videollamada, el mismo mapa se puede hacer si hay privacidad y continuidad. El formato en Chile está en [terapia online en Chile](/terapia-online). Cómo funciona ese proceso, de una semana a la otra, está en [cómo funciona la terapia psicológica online](/preguntas/como-funciona-la-terapia-psicologica-online). Cómo es una hora está en [cómo es una sesión de psicología online](/preguntas/como-es-una-sesion-de-psicologia-online). Si la duda es si el formato puede servir, está en [¿la terapia online funciona?](/preguntas/la-terapia-online-funciona).",
        ],
      },
      {
        heading: "Cuándo consultar",
        paragraphs: [
          "Conviene conversarlo si el círculo ya te limita en la pega, en la casa o en el sueño durante semanas, o si evitas cada vez más para no sentir la alarma. Esta página explica el método. No reserva una hora ni promete un plazo.",
          "Si buscas este enfoque con alguien que atiende en Chillán o por videollamada, la página de [psicólogo cognitivo conductual en Chillán](/psicologo-cognitivo-conductual-chillan) cuenta cómo se ofrece ese trabajo. La ansiedad del día, distinta del método, está en [ansiedad en Chillán](/psicologo-ansiedad-chillan).",
        ],
      },
    ],
    related: [
      { href: "/psicologo-cognitivo-conductual-chillan", label: "Psicólogo cognitivo conductual en Chillán" },
      { href: "/preguntas/que-es-la-erp-para-el-toc", label: "Qué es la ERP para el TOC" },
      { href: "/tratamiento-toc-chillan", label: "Terapia ERP para el TOC en Chillán" },
      { href: "/terapia-online", label: "Terapia online en Chile" },
      { href: "/preguntas/como-funciona-la-terapia-psicologica-online", label: "Cómo funciona la terapia psicológica online" },
      { href: "/preguntas/como-es-una-sesion-de-psicologia-online", label: "Cómo es una sesión de psicología online" },
      { href: "/psicologo-ansiedad-chillan", label: "Ansiedad: información y atención en Chillán" },
      { href: "/preguntas/cuanto-dura-una-terapia-psicologica", label: "¿Cuánto dura una terapia psicológica?" },
    ],
    faqs: [
      {
        question: "¿La TCC es pensar en positivo?",
        answer:
          "No. Revisa pensamientos que empujan una emoción o una conducta y los contrasta con lo que ocurre. Una frase alegre en el espejo, por sí sola, no es una sesión de TCC.",
      },
      {
        question: "¿Psicoterapia cognitivo-conductual es lo mismo que TCC?",
        answer:
          "En esta página, sí. Terapia cognitivo-conductual, psicoterapia cognitivo-conductual y TCC nombran este método. No nombran un plazo ni un resultado.",
      },
      {
        question: "¿La ERP es otra terapia, distinta de la TCC?",
        answer:
          "La ERP es una forma de trabajar obsesiones y compulsiones dentro de la TCC: te acercas al disparador y no haces el ritual. La pregunta de la ERP lo explica. Esta página se queda en el método general.",
      },
      {
        question: "¿Hay un número de sesiones que sirva para todos?",
        answer:
          "No. Un problema acotado y un patrón de años no piden el mismo tramo. Esta lectura no fija un plazo.",
      },
    ],
  },
  {
    slug: "la-terapia-online-funciona",
    path: "/preguntas/la-terapia-online-funciona",
    title: "¿La terapia online funciona? Evidencia y límites",
    description:
      "¿La terapia online funciona? En una revisión, la videollamada no quedó por debajo de la sala en síntomas. No hay un porcentaje único y no cubre una urgencia.",
    breadcrumbLabel: "Si la videollamada funciona",
    crumbParent: { label: "Terapia online", href: "/terapia-online" },
    h1: "¿La terapia online funciona?",
    lead: onlineLead,
    updated: "2026-10-30",
    sections: [
      {
        heading: "Qué se comparó",
        paragraphs: [
          "Norwood, Moghaddam, Malins y Sabin-Farrell publicaron en 2018, en Clinical Psychology & Psychotherapy, una revisión sistemática con metaanálisis. Reunieron doce estudios de psicoterapia por videollamada, en tiempo real, comparada con la presencial. No es una app de autoayuda ni un chat.",
          "En la reducción del síntoma que cada estudio buscaba tratar, la videollamada no quedó por debajo del margen de no inferioridad que los autores habían fijado. La alianza de trabajo, esa sensación de estar en la misma tarea, sí se vio más débil que en la sala, y el intervalo de confianza cruzó ese margen. La ficha de la revisión está en Fuentes.",
          "El método es distinto del canal. Una [terapia cognitivo-conductual](/preguntas/que-es-la-terapia-cognitivo-conductual), por ejemplo, se puede conversar en una sala o por videollamada. La pantalla no crea otra terapia.",
        ],
      },
      {
        heading: "Qué no dice esa revisión",
        paragraphs: [
          "No dice que te vaya a servir a ti, ni en qué problema, ni en cuántas horas. Los autores trabajaron con pocos estudios y dejaron abierta más investigación. Esta página no copia sus cifras ni las convierte en un porcentaje de éxito.",
          "Tampoco dice que la alianza sea igual de fácil. Si en tu casa te distraes, te censuras porque alguien podría escuchar, o la pantalla te deja lejos, el formato puede quedarse corto aunque el síntoma, en promedio, no haya quedado por debajo.",
        ],
      },
      {
        heading: "Cuándo la videollamada queda corta",
        paragraphs: [
          "Una crisis con riesgo para ti o para otra persona se atiende por las vías de urgencia, no como una sesión programada. Si hay ideas de hacerte daño, la llamada es el *4141, Salud Responde o el 131.",
          "Si compartes pieza y no hay forma de hablar con reserva, el formato deja de cuidar la confidencialidad. Una conexión que siempre se cae desgasta la hora. En ese caso, una sala puede ser mejor. La comparación entre [terapia online y presencial](/terapia-online-vs-presencial-chillan) ordena esas diferencias.",
        ],
      },
      {
        heading: "Dónde están el proceso y la hora",
        paragraphs: [
          "Esta respuesta no explica el formato entero ni reemplaza la ficha de terapia online. El mapa para cualquier región de Chile está en [terapia online y psicoterapia online](/terapia-online). Cómo funciona el proceso, de una semana a la otra, está en [cómo funciona la terapia psicológica online](/preguntas/como-funciona-la-terapia-psicologica-online).",
          "El minuto a minuto de la hora está en [cómo es una sesión de psicología online](/preguntas/como-es-una-sesion-de-psicologia-online). La atención con sala en Chillán es [psicólogo online en Chillán](/psicologo-online-chillan).",
        ],
      },
    ],
    related: [
      { href: "/terapia-online", label: "Psicoterapia online" },
      { href: "/preguntas/como-funciona-la-terapia-psicologica-online", label: "Cómo funciona la terapia psicológica online" },
      { href: "/preguntas/como-es-una-sesion-de-psicologia-online", label: "¿Cómo es una sesión de psicología online?" },
      { href: "/terapia-online-vs-presencial-chillan", label: "Terapia online y presencial en Chillán" },
      { href: "/psicologo-online-chillan", label: "Psicólogo online en Chillán" },
      { href: "/preguntas/que-es-la-terapia-cognitivo-conductual", label: "Qué es la terapia cognitivo-conductual" },
    ],
    faqs: [
      {
        question: "¿Esa revisión promete un resultado?",
        answer:
          "No. Describe estudios de psicoterapia por videollamada frente a la presencial. No es un porcentaje para todas las personas ni un plazo de sesiones.",
      },
      {
        question: "¿Es igual de confidencial que una sala?",
        answer:
          "El secreto profesional se mantiene. La diferencia está en tu entorno: si alguien puede oír desde el pasillo, la reserva baja. Audífonos y una puerta cerrada cuidan esa parte.",
      },
      {
        question: "¿Sirve si estoy en otra región de Chile?",
        answer:
          "La distancia deja de ser el obstáculo principal si hay horario compatible, conexión y un lugar privado. El tipo de problema, la continuidad y la reserva siguen pesando. La sala de esta consulta está en Chillán.",
      },
    ],
    sources: [
      {
        label: "Norwood y colegas, 2018: alianza y resultados de la psicoterapia por videollamada (PubMed)",
        href: "https://pubmed.ncbi.nlm.nih.gov/30014606/",
      },
    ],
  },
  {
    slug: "ansiedad-o-estres",
    path: "/preguntas/ansiedad-o-estres",
    title: "¿Cómo sé si tengo ansiedad o estrés?",
    description:
      "El estrés sigue a una exigencia concreta. La ansiedad puede quedar encendida aunque esa exigencia baje. Cómo distinguirlas, sin diagnóstico.",
    breadcrumbLabel: "Ansiedad o estrés",
    h1: "¿Cómo sé si tengo ansiedad o estrés?",
    lead: anxietyLead,
    sections: [
      {
        heading: "Dos formas de alarma",
        paragraphs: [
          "El estrés tiene un disparador que puedes señalar. Cierra un informe, llega la fecha de pago, cuidas a alguien enfermo, o discutes en la casa. El cuerpo se tensa para responder: duermes peor, estás irritable, te duele la espalda. Si la carga baja y el malestar también, estás describiendo estrés.",
          "La ansiedad se parece en el cuerpo y se distingue en el tiempo. La preocupación sigue dando vueltas cuando el informe ya se entregó. Evitas la micro, la reunión o el mensaje aunque la amenaza concreta haya pasado. A veces ni siquiera encuentras el motivo, y aun así el pecho está apretado y la cabeza no para.",
          "Una pista útil es esta pregunta: si mañana desapareciera la exigencia, ¿el malestar tendría dónde aflojar? Si la respuesta es sí, el estrés explica harto. Si la alarma seguiría buscando otro motivo, la ansiedad está más presente. Las dos respuestas pueden ser verdaderas a la vez.",
        ],
      },
      {
        heading: "Dónde se parecen y dónde se enredan",
        paragraphs: [
          "Tensión muscular, sueño cortado, fatiga, dolores de estómago e irritabilidad aparecen en el estrés y en la ansiedad. Por eso una semana muy cargada en la pega puede sentirse igual que un cuadro de ansiedad que ya lleva meses. El calendario ayuda: el estrés de una entrega tiene fecha. La ansiedad se queda después de la fecha.",
          "También se alimentan. Un período largo de estrés puede dejar la alarma sensible, y después cualquier correo te dispara. Si el agotamiento del trabajo ya no se repone con descanso, la guía de [burnout laboral](/guias/burnout-laboral) lo separa del estrés de un día. El [estrés laboral](/psicologo-estres-laboral-chillan) es la ficha de atención cuando el foco es ese trabajo.",
        ],
      },
      {
        heading: "Cuándo conviene una evaluación",
        paragraphs: [
          "Conviene conversarlo con un profesional si el malestar lleva varias semanas, te limita en la pega o en la casa, evitas cosas que antes hacías, o el sueño ya no se recupera. Un ataque súbito de miedo intenso es otro capítulo: la guía [qué es un ataque de pánico](/preguntas/que-es-un-ataque-de-panico) lo describe.",
          "En las clasificaciones, un trastorno de ansiedad generalizada incluye preocupación excesiva la mayor parte de los días durante varios meses, junto con otros síntomas. Esa etiqueta no se pone con una lista leída en una pantalla. Sirve para que sepas que la palabra ansiedad, en clínica, pide más que un día nervioso. La evaluación puede ser en una sala o por videollamada. El formato para cualquier región de Chile está en [terapia online en Chile](/terapia-online). Cómo funciona el proceso está en [cómo funciona la terapia psicológica online](/preguntas/como-funciona-la-terapia-psicologica-online).",
          "Mientras tanto, puedes anotar durante una semana tres datos: qué pasó antes del malestar, cuánto duró y qué hiciste después. Ese registro no diagnostica. Sí te da un lenguaje más preciso si decides pedir una evaluación. La página de [ansiedad en Chillán](/psicologo-ansiedad-chillan) sigue desde ahí, ya en clave de atención.",
        ],
      },
    ],
    related: [
      { href: "/psicologo-ansiedad-chillan", label: "Ansiedad: información y atención en Chillán" },
      { href: "/guias/burnout-laboral", label: "Qué es el burnout laboral" },
      { href: "/psicologo-estres-laboral-chillan", label: "Estrés laboral y burnout en Chillán" },
      { href: "/preguntas/como-saber-si-es-burnout", label: "Cómo saber si es burnout" },
      { href: "/preguntas/que-es-un-ataque-de-panico", label: "¿Qué es un ataque de pánico?" },
      { href: "/guias/ataque-de-panico-que-hacer", label: "Qué hacer en un ataque de pánico" },
      { href: "/terapia-online", label: "Terapia online en Chile" },
      { href: "/preguntas/como-funciona-la-terapia-psicologica-online", label: "Cómo funciona la terapia psicológica online" },
    ],
    faqs: [
      {
        question: "¿Puedo tener los dos al mismo tiempo?",
        answer:
          "Sí. Una carga real en la pega o en la casa puede convivir con una alarma que ya no se apaga cuando la carga baja. Separarlos en el relato ayuda a elegir por dónde partir.",
      },
      {
        question: "¿Un día muy nervioso es ansiedad?",
        answer:
          "Un día nervioso frente a algo concreto cabe en el estrés. La ansiedad clínica se mira por la duración, por la dificultad para cortar la preocupación y por cuánto te limita. Un episodio suelto no pone el nombre.",
      },
    ],
  },
  {
    slug: "la-ludopatia-es-una-enfermedad",
    path: "/preguntas/la-ludopatia-es-una-enfermedad",
    title: "¿La ludopatía es una enfermedad?",
    description:
      "La ludopatía es un trastorno adictivo en las clasificaciones clínicas. En la calle se le dice enfermedad. Qué significa eso en la vida diaria.",
    breadcrumbLabel: "Ludopatía",
    h1: "¿La ludopatía es una enfermedad?",
    lead: gamblingLead,
    sections: [
      {
        heading: "Cómo la nombran las clasificaciones",
        paragraphs: [
          "Durante años el juego problemático se discutió como un problema de hábito o de impulso. Hoy el DSM-5-TR lo ubica junto a los trastornos adictivos, y la CIE-11 lo describe como trastorno por juego. El cambio de nombre importa: el foco está en la pérdida de control y en el daño, no en una falla moral.",
          "La palabra enfermedad es la que usa la familia en la mesa. Sirve para pedir ayuda sin reducir a la persona a floja o mentirosa. En un informe clínico vas a encontrar trastorno, criterios y contexto. Las dos formas de hablar pueden convivir si se entiende qué nombra cada una.",
          "El diagnóstico mira un período, no una noche. Importan la preocupación por el juego, los intentos fallidos de parar, la necesidad de apostar más para sentir lo mismo, el malestar al intentar dejarlo, y el daño en la plata, el trabajo o los vínculos. Jugar de vez en cuando, con un monto que puedes perder, no es lo mismo.",
        ],
      },
      {
        heading: "Cómo se ve en la vida diaria",
        paragraphs: [
          "El ciclo suele repetirse. Hay tensión o una pena, aparece la idea de apostar, viene un alivio corto, y después la culpa, la deuda o la mentira. Para recuperar lo perdido se apuesta de nuevo. Ese intento de empatar es una de las señales más claras de que el juego dejó de ser un paseo.",
          "El formato cambia y el ciclo se parece. Casino, máquinas, póker, apuestas deportivas y juegos en el celular pueden verse distintos desde afuera. Por dentro comparten la dificultad para parar y el daño que se va acumulando. Esconder el celular o negar un cargo en la cuenta entra en ese patrón.",
          "La familia a veces se entera por una deuda. La página de [tratamiento de la ludopatía en Chillán](/tratamiento-ludopatia-chillan) sigue por el lado de la atención. Si quien apostó es tu pareja, lee [qué hacer si tu pareja tiene adicción al juego](/preguntas/pareja-con-adiccion-al-juego).",
        ],
      },
      {
        heading: "Qué no dice esta respuesta",
        paragraphs: [
          "Una página no confirma ni descarta el trastorno. Hay investigación sobre recompensa y hábito, y esa investigación no reemplaza la historia de la persona: desde cuándo juega, qué pierde, qué ha intentado y qué otras dificultades van al lado, como ánimo bajo o alcohol.",
          "Si el juego ya se llevó sueldo, ahorros o confianza, conviene una evaluación con alguien que conozca adicciones. También existe contexto en la página de [psicólogo para adicciones](/psicologo-adicciones-chillan).",
        ],
      },
    ],
    related: [
      { href: "/tratamiento-ludopatia-chillan", label: "Tratamiento de ludopatía en Chillán" },
      { href: "/psicologo-adicciones-chillan", label: "Psicólogo para adicciones en Chillán" },
      { href: "/preguntas/pareja-con-adiccion-al-juego", label: "¿Qué hacer si tu pareja tiene adicción al juego?" },
    ],
    faqs: [
      {
        question: "¿Apostar online también cuenta?",
        answer:
          "Sí. El trastorno se define por la pérdida de control y por el daño, no por el local. Las apuestas deportivas y los juegos del celular entran cuando se repite el ciclo de perseguir pérdidas y esconderlo.",
      },
      {
        question: "¿Jugar en un asado es ludopatía?",
        answer:
          "Un juego ocasional, con un monto decidido de antes y sin mentiras ni deudas, no cumple la idea de trastorno. La alarma sube cuando ya no puedes parar, recuperas pérdidas apostando más y el costo se nota en la casa o en la pega.",
      },
    ],
  },
  {
    slug: "pareja-con-adiccion-al-juego",
    path: "/preguntas/pareja-con-adiccion-al-juego",
    title: "¿Qué hacer si tu pareja tiene ludopatía?",
    description:
      "Protege la plata compartida, habla con hechos y busca apoyo para ti. No puedes hacer el tratamiento por la otra persona.",
    breadcrumbLabel: "Pareja y juego",
    h1: "¿Qué hacer si tu pareja tiene adicción al juego?",
    lead: partnerLead,
    sections: [
      {
        heading: "Qué puedes hacer esta semana",
        paragraphs: [
          "Parte por la plata, porque el juego se alimenta de acceso. Revisa qué cuentas están a tu nombre, qué deudas aparecieron y qué pagos automáticos no reconoces. Separa lo que puedas del dinero que se usa para apostar. Evita prestar para recuperar una pérdida: ese préstamo suele ser la ficha siguiente.",
          "Elige un momento sin pelea y sin una apuesta recién hecha. Di hechos: un monto, una fecha, una mentira concreta. Pide una evaluación con alguien que trabaje adicciones. Ofrecer compañía a la primera conversación es distinto de vigilar el celular o de hacer de terapeuta en la casa.",
          "Si hay amenazas de hacerse daño, la prioridad deja de ser la charla sobre el juego. Llama al 131, a Salud Responde (600 360 7777) o al Fono de la Esperanza (717 200 200). Si hay violencia, tu seguridad va primero: Carabineros atiende en el 133.",
        ],
      },
      {
        heading: "Qué suele enredar más el problema",
        paragraphs: [
          "Tapar la deuda con la familia o con un crédito nuevo esconde el tamaño del problema y deja a quien apostó sin el costo que a veces motiva el cambio. Discutir a gritos en el peor momento también cierra la conversación. Insultar el carácter de la persona mezcla el trastorno con un ataque, y la charla se va en defenderse.",
          "Controlar cada paso tampoco alcanza como tratamiento. Revisar el teléfono, cambiar claves a escondidas o seguir a la persona crea otra guerra. Los límites claros son otra cosa: no firmar un crédito, no dejar la tarjeta a mano, no mentirle al resto de la familia para cubrir el hoyo.",
          "La guía [la ludopatía es una enfermedad](/preguntas/la-ludopatia-es-una-enfermedad) explica por qué se habla de trastorno. Leerla puede ordenar la conversación. El [tratamiento de la ludopatía](/tratamiento-ludopatia-chillan) está pensado para quien necesita atención directa.",
        ],
      },
      {
        heading: "Tu propio desgaste también cuenta",
        paragraphs: [
          "Quien convive con el juego suele dormir mal, revisar cuentas a media noche y sentir rabia y pena en la misma tarde. Ese desgaste merece un espacio propio, aunque la otra persona todavía no pida ayuda. Puedes conversar con alguien de confianza o con un profesional sin llevar a tu pareja a la sesión.",
          "Si las dos personas quieren sentarse, la [terapia de pareja](/terapia-de-pareja-chillan) puede ordenar comunicación y acuerdos de plata. Si solo una quiere hablar, igual puedes ordenar tus límites.",
          "Mira hechos de varias semanas: menos acceso a la plata del juego, una evaluación hecha, menos mentiras nuevas. Tú puedes cuidar tu lado. El cambio del juego lo tiene que hacer quien apuesta.",
        ],
      },
    ],
    related: [
      { href: "/tratamiento-ludopatia-chillan", label: "Tratamiento de ludopatía en Chillán" },
      { href: "/psicologo-adicciones-chillan", label: "Psicólogo para adicciones en Chillán" },
      { href: "/terapia-de-pareja-chillan", label: "Terapia de pareja en Chillán" },
      { href: "/preguntas/la-ludopatia-es-una-enfermedad", label: "¿La ludopatía es una enfermedad?" },
    ],
    faqs: [
      {
        question: "¿Conviene pagar la deuda para bajar la crisis?",
        answer:
          "Pagar todo en silencio suele reiniciar el ciclo, porque el costo desaparece y el acceso a apostar sigue. Puedes proteger tus ingresos y exigir información clara de lo que se debe, sin cubrir la apuesta siguiente.",
      },
      {
        question: "¿Puedo obligar a mi pareja a tratarse?",
        answer:
          "Puedes poner condiciones sobre la plata y sobre lo que puedes sostener. No puedes asistir por la otra persona ni hacer que una terapia funcione si esa persona no habla. Tu propio apoyo sigue disponible igual.",
      },
    ],
  },
    {
    slug: "cada-cuanto-ir-al-psicologo",
    path: "/preguntas/cada-cuanto-ir-al-psicologo",
    title: "¿Cada cuánto ir al psicólogo? Una vez por semana",
    description:
      "Cada cuánto ir al psicólogo: al inicio suele ser una vez por semana. Después puedes espaciar. Qué mirar si faltas, sin un número único de horas.",
    breadcrumbLabel: "Frecuencia de sesiones",
    h1: "¿Cada cuánto ir al psicólogo?",
    updated: "2026-10-30",
    lead: frequencyLead,
    sections: [
      {
        heading: "El ritmo de las primeras semanas",
        paragraphs: [
          "Una sesión semanal da tiempo para probar algo y volver con información fresca. Si el espacio es de un mes desde el primer día, es fácil que la hora se vaya en reconstruir qué pasó, y el ensayo entre medio se pierde.",
          "En una crisis corta, por ejemplo los días posteriores a una pérdida o a un quiebre, a veces se acuerda verse más de una vez en la misma semana, por un tramo breve. Ese ritmo es de contención y orden. No tiene por qué volverse permanente.",
          "Tu agenda también es real. Un horario que no puedes cumplir produce inasistencias, y las inasistencias enfrían el trabajo. Mejor un ritmo que sí sostienes que un plan intenso que abandonas a la tercera semana. La [primera consulta](/primera-consulta-psicologo-chillan) es un buen lugar para decir con honestidad qué días tienes.",
        ],
      },
      {
        heading: "Cuándo tiene sentido espaciar",
        paragraphs: [
          "Espaciar se vuelve razonable cuando el objetivo inicial ya se nota en la vida diaria, tienes herramientas que usas sin que te las recuerden, y el malestar ya no te saca de tus rutinas. Pasar a cada dos semanas permite ver si el cambio se sostiene con menos apoyo.",
          "Espaciar demasiado pronto tiene otra cara. Si todavía evitas lo importante, si la semana se va en apagar incendios, o si no recuerdas qué ibas a practicar, volver al ritmo semanal suele ser más claro que insistir con citas sueltas.",
          "La duración total del proceso es otra pregunta. La frecuencia es el ritmo. El plazo es cuánto dura el conjunto. Los factores de ese plazo están en [cuánto dura una terapia psicológica](/preguntas/cuanto-dura-una-terapia-psicologica).",
        ],
      },
      {
        heading: "Qué mirar si faltas seguido",
        paragraphs: [
          "Faltar una vez por un imprevisto forma parte de la vida. Faltar seguido pide una conversación: si el horario no calza, si el tema asusta, si la sesión no se siente útil, o si la plata de la hora compite con otra necesidad. Cada una de esas razones tiene una salida distinta.",
          "Llegar tarde y salir corriendo también cambia la frecuencia real. Media hora alcanzando a conectarte no es una sesión semanal. Si la terapia es online, entra a la hora con el enlace listo. Cómo es esa hora está en [cómo es una sesión de psicología online](/preguntas/como-es-una-sesion-de-psicologia-online). El formato para cualquier región está en [psicoterapia online](/terapia-online).",
          "Revisa el ritmo cada cierto tiempo, con hechos: qué practicaste, qué mejoró y qué sigue igual. La frecuencia es un acuerdo vivo. Se ajusta cuando cambia el problema, no por costumbre ni por culpa.",
        ],
      },
    ],
    related: [
      { href: "/primera-consulta-psicologo-chillan", label: "Qué ocurre en la primera consulta" },
      { href: "/cuando-ir-al-psicologo-chillan", label: "Cuándo ir al psicólogo" },
      { href: "/terapia-online", label: "Terapia online" },
      { href: "/preguntas/como-es-una-sesion-de-psicologia-online", label: "Cómo es una sesión de psicología online" },
      { href: "/preguntas/cuanto-dura-una-terapia-psicologica", label: "¿Cuánto dura una terapia psicológica?" },
    ],
    faqs: [
      {
        question: "¿Sirve ir una vez al mes desde el inicio?",
        answer:
          "Como ritmo inicial suele quedarse corto, porque pasa demasiado tiempo entre un ensayo y la revisión. Una vez al mes puede servir más adelante, cuando el cambio ya está en marcha y solo necesitas un seguimiento.",
      },
      {
        question: "¿Qué hago si no puedo todas las semanas?",
        answer:
          "Dilo al partir. Un acuerdo realista, aunque sea un poco más espaciado, funciona mejor que faltar a un plan semanal que no puedes pagar ni en tiempo ni en energía.",
      },
    ],
  },
  {
    slug: "que-es-un-ataque-de-panico",
    path: "/preguntas/que-es-un-ataque-de-panico",
    title: "Ataques de pánico: qué es un ataque y qué puedes hacer",
    description:
      "Un ataque de pánico sube en minutos, con el cuerpo en alarma. Los ataques de pánico no son la ansiedad del día. Si el pecho duele y es nuevo, ve a un médico.",
    breadcrumbLabel: "Ataques de pánico",
    h1: "¿Qué es un ataque de pánico?",
    lead: panicLead,
    updated: "2026-10-28",
    sections: [
      {
        heading: "Cómo se reconoce un ataque de pánico",
        paragraphs: [
          "Llega rápido. En pocos minutos el corazón se acelera, falta el aire, tiemblan las manos, aparece sudor frío, mareo o un hormigueo. Hay personas que sienten el cuerpo raro, como si estuvieran lejos de sí mismas. El miedo más frecuente es morirte, volverse loco o perder el control delante de otros.",
          "Después la ola baja. Puedes quedar cansado, asustado y atento al cuerpo por horas. Ese residuo no es un segundo ataque: la alarma sigue sensible. Vigilar el pulso prepara el susto siguiente.",
          "Puede ocurrir de día o de noche, en la micro, en la pega o en la cama. A veces hay un disparador claro y a veces parece salir de la nada. Si lo que sientes es una alarma pareja, no un golpe de minutos, la pregunta [ansiedad o estrés](/preguntas/ansiedad-o-estres) está más cerca. Si el cuerpo se queda encendido sin ese pico, los [síntomas físicos de la ansiedad](/preguntas/sintomas-fisicos-de-la-ansiedad) ordenan esa diferencia. La ficha de [ansiedad en Chillán](/psicologo-ansiedad-chillan) es la atención de esa alarma, no de este pico.",
        ],
        bullets: [
          "Sube en minutos y después baja.",
          "El cuerpo entra en alarma: corazón, aire, mareo, sudor o temblor.",
          "Puede venir el miedo a morirte o a perder el control.",
          "El cansancio de después no es otro ataque.",
        ],
      },
      {
        heading: "Causas generales",
        paragraphs: [
          "Un ataque puede aparecer en una etapa de mucho estrés, con poco sueño, o encima de una ansiedad que ya venía de antes. También puede ser aislado y no repetirse. Esta página no lista una causa única ni un porcentaje.",
          "El cuerpo imita problemas del corazón y de la respiración. Por eso un episodio nuevo, con dolor de pecho intenso, desmayo o falta de aire que no cede, se mira primero con un médico. Descartar una causa física es cuidado, no una exageración.",
          "Cuando los ataques se repiten, es fácil empezar a evitar la micro, una tienda o salir, por si vuelve. Ese miedo al lugar no es el ataque: es la agorafobia, y la ficha de [crisis de pánico en Chillán](/psicologo-crisis-de-panico-chillan) la explica aparte.",
        ],
      },
      {
        heading: "Qué puedes hacer en el momento",
        paragraphs: [
          "Recuerda que la ola tiene subida y bajada. Apoya los pies en el suelo, suelta un poco los hombros y alarga la salida del aire, sin forzar una técnica perfecta. Una frase corta, del tipo esto es un ataque y va a bajar, le da contexto al cuerpo.",
          "Los pasos de esa hora, con más detalle, están en la guía [ataque de pánico: qué hacer](/guias/ataque-de-panico-que-hacer). Si el susto te deja con miedo a salir, anota hora, duración y qué estabas haciendo. Ese registro ordena una conversación posterior. No es un diagnóstico.",
        ],
      },
      {
        heading: "Cuándo consultar",
        paragraphs: [
          "Pide evaluación médica urgente si el dolor de pecho es nuevo o muy fuerte, si hay desmayo o si falta el aire y no cede. Si aparece una idea de hacerte daño, llama al 131 o a Salud Responde (600 360 7777).",
          "Conviene conversarlo con un profesional de salud mental si los ataques de pánico se repiten, si ya evitas lugares o si la ansiedad del día no baja entre un pico y otro. Qué puedes esperar de esa conversación es ordenar el pico: cuánto duró, qué hizo el cuerpo y qué empezaste a evitar después. Esta pregunta define el episodio. No reserva una hora.",
          "Si esa conversación es por videollamada, el formato en Chile está en [terapia online](/terapia-online). Cómo es una hora está en [cómo es una sesión de psicología online](/preguntas/como-es-una-sesion-de-psicologia-online). Cómo funciona el proceso está en [cómo funciona la terapia psicológica online](/preguntas/como-funciona-la-terapia-psicologica-online).",
        ],
      },
    ],
    related: [
      { href: "/guias/ataque-de-panico-que-hacer", label: "Qué hacer durante un ataque de pánico" },
      { href: "/preguntas/sintomas-fisicos-de-la-ansiedad", label: "Síntomas físicos de la ansiedad" },
      { href: "/preguntas/ansiedad-o-estres", label: "Cómo distinguir ansiedad y estrés" },
      { href: "/terapia-online", label: "Terapia online" },
      { href: "/preguntas/como-es-una-sesion-de-psicologia-online", label: "Cómo es una sesión de psicología online" },
      { href: "/preguntas/como-funciona-la-terapia-psicologica-online", label: "Cómo funciona la terapia psicológica online" },
      { href: "/psicologo-crisis-de-panico-chillan", label: "Crisis de pánico y agorafobia en Chillán" },
      { href: "/psicologo-ansiedad-chillan", label: "Ansiedad en Chillán: qué es y cómo se trabaja" },
    ],
    faqs: [
      {
        question: "¿Qué son los ataques de pánico?",
        answer:
          "Son picos de miedo intenso que suben en minutos, con el cuerpo en alarma, y después bajan. No son la ansiedad pareja de todo el día. Si se repiten, o si evitas lugares por miedo a que vuelvan, conviene una evaluación.",
      },
      {
        question: "¿Un ataque de pánico puede durar horas?",
        answer:
          "El pico suele ser de minutos. El cansancio y el miedo a que vuelva pueden quedarse varias horas. Si los síntomas físicos intensos no bajan o el dolor de pecho es nuevo, pide evaluación médica.",
      },
      {
        question: "¿Es lo mismo que ansiedad?",
        answer:
          "No. La ansiedad del día es una preocupación que se estira. El ataque de pánico es el pico de minutos. Puedes tener los dos. La pregunta de ansiedad o estrés ordena la alarma pareja.",
      },
      {
        question: "¿Evitar la micro es parte del ataque?",
        answer:
          "El ataque es el pico. Evitar lugares por miedo a que vuelva es otra pieza, la agorafobia. La ficha de crisis de pánico en Chillán la separa.",
      },
    ],
  },
  {
    slug: "cuanto-dura-un-duelo",
    path: "/preguntas/cuanto-dura-un-duelo",
    title: "¿Cuánto dura un duelo normal?",
    description:
      "El duelo no tiene una fecha de término. El dolor cambia de forma y puede volver. Cuándo conviene pedir una evaluación.",
    breadcrumbLabel: "Duración del duelo",
    h1: "¿Cuánto dura un duelo normal?",
    lead: griefLead,
    sections: [
      {
        heading: "No hay un calendario único",
        paragraphs: [
          "El duelo es la respuesta a una pérdida importante. La más nombrada es la muerte de alguien cercano. También duele un quiebre, una salud que cambió o un proyecto que se cerró. Cada vínculo tenía una forma, así que el tiempo no se copia de la experiencia de otra persona.",
          "En los primeros meses es frecuente llorar en oleadas, dormir mal, sentir rabia, culpa o alivio, y a ratos no sentir nada. Esa mezcla desconcierta. Forma parte de cómo el ánimo intenta acomodarse a un hueco. Querer estar bien para no preocupar al resto suele agregar presión encima del dolor.",
          "Las culturas y las familias ponen plazos invisibles: el primer mes, el primer año, la ropa negra. Esos ritos pueden acompañar. Cuando se vuelven una orden de ya estar listo, chocan con lo que el cuerpo todavía siente. La página de [duelo en Chillán](/psicologo-duelo-chillan) profundiza en cómo se acompaña ese proceso.",
        ],
      },
      {
        heading: "Las olas que vuelven",
        paragraphs: [
          "Aunque el día a día se vaya ordenando, una canción, un cumpleaños o el olor de una comida pueden traer el dolor de vuelta. El duelo se mueve por olas. Recordar sigue doliendo. La diferencia está en si puedes volver a una comida, a la pega o a un vínculo después de esa ola. Si quien está en duelo es otra persona, [cómo acompañar a alguien en duelo](/guias/acompanar-a-alguien-en-duelo) dice qué puedes hacer y qué conviene no decir.",
          "El tipo de muerte, si fue sorpresiva, y la red que te queda cambian el terreno. [Cuándo ir al psicólogo](/cuando-ir-al-psicologo-chillan) reúne señales generales si dudas si pedir compañía.",
        ],
      },
      {
        heading: "Cuándo una evaluación tiene sentido",
        paragraphs: [
          "Tiene sentido pedir ayuda si la pena no te deja trabajar ni cuidar lo básico durante mucho tiempo, si evitas todo lo que recuerde a la persona y tu mundo se achica, o si aparecen ideas de hacerte daño. Esas ideas se atienden como urgencia: 131, Salud Responde (600 360 7777) o Fono de la Esperanza (717 200 200).",
          "El duelo prolongado, en las clasificaciones, describe una añoranza intensa que se mantiene y traba la vida pasado un umbral: cerca de doce meses en adultos en el DSM-5-TR, y seis meses en la CIE-11. Esos números no dicen que a los seis meses debas estar bien. Dicen cuándo un clínico mira con más cuidado si el dolor se quedó atascado.",
          "El ánimo bajo puede acompañar al duelo y a veces pide su propia evaluación. Si además de la pena hay un apagón amplio del interés, conviene decirlo. La página de [depresión](/psicologo-depresion-chillan) separa ese tema. Esta guía solo responde cuánto dura: lo que dura tu vínculo con lo perdido, con una forma que va cambiando.",
        ],
      },
    ],
    related: [
      { href: "/preguntas/duelo-o-depresion", label: "¿Es duelo o depresión?" },
      { href: "/guias/duelo-etapas-y-mitos", label: "Etapas y mitos del duelo" },
      { href: "/guias/acompanar-a-alguien-en-duelo", label: "Cómo acompañar a alguien en duelo" },
      { href: "/psicologo-duelo-chillan", label: "Duelo: información y atención en Chillán" },
      { href: "/psicologo-depresion-chillan", label: "Depresión: información y atención en Chillán" },
    ],
    faqs: [
      {
        question: "¿Está mal seguir llorando después de un año?",
        answer:
          "Llorar en fechas y recuerdos después de un año es frecuente. La señal de alarma no es la lágrima. Es que la pena siga tan intensa que no puedas retomar nada de la vida diaria.",
      },
      {
        question: "¿El duelo tiene etapas obligatorias?",
        answer:
          "Las listas de etapas circulan harto y no describen a todas las personas. Rabia, pena y alivio pueden alternarse. No hay un orden que debas cumplir para hacer el duelo bien.",
      },
    ],
  },
];

export function getGuide(slug: string): Guide {
  const guide = guides.find((item) => item.slug === slug);
  if (!guide) {
    throw new Error(`Guía no encontrada: ${slug}`);
  }
  return guide;
}
