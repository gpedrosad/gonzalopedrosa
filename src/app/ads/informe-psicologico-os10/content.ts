import { CANONICAL_ORIGIN, CLINICAL_STATS } from "@/lib/site-config";

export const LANDING_PATH = "/ads/informe-psicologico-os10";
export const LANDING_URL = `${CANONICAL_ORIGIN}${LANDING_PATH}`;

export function formatClp(value: number): string {
  return `$${new Intl.NumberFormat("es-CL").format(value)}`;
}

/** wa.me sin +. Fallback al número del sitio si no hay env. */
export const WHATSAPP_NUMBER = (
  process.env.NEXT_PUBLIC_WHATSAPP || "56968257817"
).replace(/\D/g, "");

/** Teléfono visible aparte de WhatsApp. Vacío = no se muestra. */
export const PHONE_PUBLIC = (process.env.NEXT_PUBLIC_PHONE || "").replace(
  /\D/g,
  "",
);

export const precios = {
  particular: 40_000,
  /** Precio con cuenta. Solo se muestra si `mostrarPrecioCuenta` es true. */
  cuenta: 20_000,
  mostrarPrecioCuenta: false,
} as const;

export const metodosPago = ["Transferencia", "Webpay"] as const;

/** Primera palabra en minúscula; el resto conserva la marca (Webpay). */
export function metodosPagoTexto(): string {
  return metodosPago
    .map((item, index) => (index === 0 ? item.toLowerCase() : item))
    .join(" o ");
}

export const profesional = {
  nombre: "Gonzalo Pedrosa",
  rol: "Psicólogo clínico",
  ciudad: "Chillán",
  /**
   * Completar con el RUT real antes de mostrarlo.
   * Vacío = el footer no lo publica.
   */
  rut: "",
  /**
   * Número del Registro Nacional de Prestadores (Superintendencia de Salud).
   * No inventar. Vacío = el footer no publica un número.
   */
  registroSuperintendencia: "",
  fotoSrc: "/yo.png",
  fotoAlt: "Gonzalo Pedrosa, psicólogo clínico",
  email: "gpedrosadom@gmail.com",
  /**
   * Años de atención clínica del sitio (no es antigüedad haciendo informes OS10).
   * null = no se menciona una cifra.
   */
  anosAtencionClinica: CLINICAL_STATS.yearsExperience as number | null,
  /**
   * Evaluaciones OS10 reales. null = no se muestra “+X evaluaciones”.
   */
  evaluacionesOs10: null as number | null,
};

export const mensajes = {
  particular:
    "Hola, quiero agendar el informe psicológico OS10 / control de impulsos.",
  empresas:
    "Hola, quiero coordinar informes psicológicos OS10 para mi empresa.",
} as const;

export function whatsappHref(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const whatsappParticular = whatsappHref(mensajes.particular);
export const whatsappEmpresas = whatsappHref(mensajes.empresas);

/**
 * Variantes de H1 para test de Ads.
 * A es la activa. Para probar B, cambia `h1Activa` a "b".
 */
export const h1Variantes = {
  a: "Informe psicológico OS10: control de impulsos para tu credencial",
  b: `Certificado de control de impulsos para guardias — online, ${formatClp(precios.particular)}`,
} as const;

export const h1Activa: keyof typeof h1Variantes = "a";
export const h1 = h1Variantes[h1Activa];

export const seo = {
  title: "Informe psicológico OS10 | Control de impulsos para guardias Chile",
  description: `Evaluación psicológica OS10 online por ${formatClp(precios.particular)}, informe PDF incluido, el mismo día y con boleta. Agenda por WhatsApp.`,
};

export const hero = {
  subtitulo: `Evaluación online con psicólogo registrado · PDF el mismo día · ${formatClp(precios.particular)}, informe incluido`,
  badges: [
    "Registro Superintendencia de Salud",
    "Online en todo Chile",
    "Boleta electrónica",
    "Entrega rápida",
  ],
  microcopy:
    "Documento para presentar en tu trámite de seguridad privada. No incluye el curso OS10.",
  ctaWhatsapp: "Agendar evaluación por WhatsApp",
  ctaComoFunciona: "Ver cómo funciona",
  precioDetalle: "Informe incluido + boleta",
};

export const paraQuien = [
  {
    titulo: "Guardia de seguridad / vigilante privado",
    texto:
      "Te pidieron el informe de control de impulsos para tu cargo, tu curso o tu credencial.",
  },
  {
    titulo: "Operador o supervisor CCTV",
    texto:
      "Sirve cuando el puesto exige el certificado psicológico de aptitud psíquica para seguridad privada.",
  },
  {
    titulo: "Postulante a curso OS10",
    texto:
      "El curso lo hace el instituto. Aquí obtienes la evaluación y el informe para presentarlo.",
  },
  {
    titulo: "Renovación de credencial",
    texto:
      "Si tu empleador te exige el certificado de nuevo, puedes hacerlo online, sin traslado.",
  },
  {
    titulo: "Jefe o asesor de seguridad privada",
    texto:
      "Cuando el cargo pide el mismo tipo de certificado de control de impulsos y aptitud psíquica.",
  },
] as const;

export const incluye = [
  "Entrevista psicológica online (20–45 min)",
  "Evaluación de control de impulsos y aptitud psíquica para seguridad",
  "Informe o certificado en PDF, firmado",
  "Datos del profesional: nombre, RUT y registro",
  "Boleta electrónica",
  "Envío por correo el mismo día, en casos simples",
] as const;

export const noIncluye = [
  "El curso OS10",
  "La credencial que emite la autoridad",
  "El certificado médico de aptitud física (próximamente)",
  "Terapia psicológica continua",
] as const;

export const pasos = [
  {
    step: "1",
    titulo: "Agendas",
    texto:
      "Escríbeme por WhatsApp. Te respondo para cuadrar horario.",
  },
  {
    step: "2",
    titulo: "Pagas",
    texto: `Puedes pagar por ${metodosPagoTexto()}. El valor incluye la evaluación, el informe y la boleta.`,
  },
  {
    step: "3",
    titulo: "Videollamada",
    texto:
      "Entrevista y cuestionario de control de impulsos y aptitud psíquica, compatible con labores de seguridad. Dura entre 20 y 45 minutos.",
  },
  {
    step: "4",
    titulo: "Recibes PDF y boleta",
    texto:
      "En casos simples, el informe firmado y la boleta electrónica salen el mismo día, por correo.",
  },
] as const;

export const diferenciales = [
  "El informe lo emite un psicólogo inscrito en el Registro Nacional de Prestadores de la Superintendencia de Salud.",
  "El proceso es 100% online, por videollamada, desde cualquier región de Chile.",
  "Entrega rápida: el mismo día o en pocas horas cuando el caso es simple.",
  "Horarios que consideran turnos, también de noche.",
  "Coordinas directo por WhatsApp.",
] as const;

export const faqs = [
  {
    q: "¿Sirve para OS10, Carabineros o seguridad privada?",
    a: "El informe documenta la evaluación de control de impulsos y de condiciones psíquicas compatibles con labores de seguridad privada, en el marco del DS 867 y la normativa asociada. Sirve para presentarlo en tu trámite. No reemplaza la decisión de Carabineros ni de la autoridad que otorga o renueva la credencial.",
  },
  {
    q: "¿Es online o presencial?",
    a: "Es online. La entrevista es por videollamada, en todo Chile. Necesitas conexión y un lugar tranquilo. Esta evaluación no tiene modalidad presencial.",
  },
  {
    q: "¿Cuánto demora la entrega?",
    a: "En casos simples, el PDF firmado se envía el mismo día de la videollamada, a veces en pocas horas. Si la evaluación necesita más revisión, te digo el plazo antes de cerrar.",
  },
  {
    q: "¿Qué pasa si no estoy apto?",
    a: "El resultado depende de la evaluación clínica. El informe describe lo que se observa: no se redacta un apto si la evaluación no lo sostiene. Igual recibes el documento de la prestación realizada. No es un trámite de aprobación automática.",
  },
  {
    q: "¿Necesito también el certificado médico?",
    a: "Son documentos distintos. Aquí está la evaluación psicológica y el informe de control de impulsos. El certificado médico de aptitud física no está incluido. Si tu trámite lo pide, tienes que gestionarlo aparte.",
  },
  {
    q: "¿Puedo reembolsar con isapre o con mi empresa?",
    a: "La boleta electrónica sirve para rendir el gasto cuando tu empleador o tu isapre lo aceptan. No puedo asegurar el reembolso: el criterio lo define tu empresa o tu isapre. Esto no es asesoría legal ni previsional.",
  },
  {
    q: "¿El precio incluye boleta?",
    a: `Sí. ${formatClp(precios.particular)} incluye la evaluación, el informe en PDF y la boleta electrónica.`,
  },
  {
    q: "¿Sirve para CCTV, supervisor o jefe de seguridad?",
    a: "Sí, cuando el cargo pide este tipo de certificado de control de impulsos y aptitud psíquica. Si tu empleador exige otro formato, cuéntamelo al agendar y lo revisamos.",
  },
  {
    q: "¿Es lo mismo que el curso OS10?",
    a: "No. El curso OS10 lo imparte un instituto. La credencial la tramita la autoridad competente. Esta página solo vende la evaluación psicológica y el informe o certificado.",
  },
] as const;

export const disclaimer =
  "Este servicio corresponde a una evaluación psicológica profesional y a la emisión de un informe/certificado. No garantiza la aprobación del curso OS10 ni la obtención o renovación de la credencial de seguridad privada por parte de la autoridad competente. El resultado depende de la evaluación clínica. Tus datos de salud se tratan de forma confidencial.";

export const empleador =
  "Por la normativa de seguridad privada, este gasto suele ser de cargo del empleador. En la práctica, muchas personas lo pagan y lo rinden con la boleta. Confirma el criterio con tu empresa. Esto no es asesoría legal.";

/**
 * EJEMPLOS DE COPY. No son reseñas reales y no se publican.
 * `publicar: false` las oculta. Pasa una a true solo con texto de una persona real que autorizó usarlo.
 */
export const testimonios = [
  {
    publicar: false,
    nombre: "[TESTIMONIO]",
    cargo: "Guardia de seguridad",
    texto:
      "Agendé por WhatsApp en mi día libre y recibí el PDF ese mismo día para llevarlo al curso.",
  },
  {
    publicar: false,
    nombre: "[TESTIMONIO]",
    cargo: "Operador CCTV",
    texto:
      "Trabajo de noche. Encontré un horario después del turno y el informe llegó por correo.",
  },
  {
    publicar: false,
    nombre: "[TESTIMONIO]",
    cargo: "Renovación de credencial",
    texto:
      "Mi empresa me pidió el certificado de nuevo. Pagué, hice la videollamada y rendí la boleta.",
  },
] as const;
