import Link from "next/link";
import { GuiaArticle, guiaMetadata } from "../guia-article";

const title = "¿Es segura la terapia online? Confidencialidad y límites";
const description =
  "Qué significa que la terapia online sea segura: confidencialidad, registros, plataforma, desventajas del formato y qué hacer ante una crisis en sesión.";
const path = "/guias/terapia-online-es-segura";

export const metadata = guiaMetadata({ title, description, path });

export default function GuiaTerapiaOnlineEsSeguraPage() {
  return (
    <GuiaArticle
      h1={title}
      breadcrumbLabel="¿Es segura la terapia online?"
      path={path}
      description={description}
      faqs={[
        {
          question: "¿La terapia online es confidencial?",
          answer:
            "Debe serlo. Quien te atiende está sujeto al secreto profesional igual que en una consulta presencial, y eso cubre lo que dices, lo que se escribe en la ficha y cualquier material que derive de la sesión. Hay límites acotados: cuando existe riesgo para tu vida o para la de terceros, la prioridad es proteger y la confidencialidad cede. Puedes preguntar en la primera conversación en qué casos se aplicaría y cómo se te avisaría.",
        },
        {
          question: "¿Se graban las sesiones?",
          answer:
            "No es lo esperable. La sesión no debería grabarse sin tu acuerdo explícito, y si se graba con fines de supervisión o docentes, corresponde que te lo digan antes, que sepas quién la escucha y que puedas negarte. También puedes preguntar dónde quedan los registros y quién tiene acceso. Si la respuesta es ambigua, tómalo como una señal para preguntar de nuevo o buscar otra alternativa.",
        },
        {
          question: "¿Qué desventajas tiene la terapia online?",
          answer:
            "Se pierde parte del lenguaje no verbal, porque la cámara recorta el cuerpo y no se ve igual el movimiento ni el silencio compartido. A eso se suman las interrupciones: cortes de conexión, ruido ambiente, gente que golpea la puerta. Si vives con más personas, encontrar una hora y un lugar privado puede costar. Estas desventajas no invalidan el formato, pero conviene conversarlas y acordar condiciones antes de partir.",
        },
        {
          question: "¿Qué pasa si tengo una crisis durante una sesión online?",
          answer:
            "El formato online no sirve para urgencias: puede acompañar un momento difícil, pero no puede trasladarte ni activar ayuda física. Por eso al inicio se acostumbra acordar dónde estás, con quién vives, un contacto de emergencia y qué hacer si la situación se desborda. Ante riesgo inmediato, en Chile se llama al 131 (SAMU) o se acude al servicio de urgencia más cercano, y existe la línea de prevención del suicidio *4141, gratuita desde celulares.",
        },
      ]}
      updatedIso="2026-11-01"
      updatedLabel="1 de noviembre de 2026"
      relatedSite={[
        {
          href: "/terapia-online",
          label: "Terapia online",
          note: "Qué es la terapia online en Chile y cómo se organiza el formato.",
        },
        {
          href: "/preguntas/como-es-una-sesion-de-psicologia-online",
          label: "Cómo es una sesión online",
          note: "La hora paso a paso, para saber qué se espera de ti en ese rato.",
        },
        {
          href: "/preguntas/la-terapia-online-funciona",
          label: "¿Funciona la terapia online?",
          note: "Evidencia y límites del formato, sin promesas de resultados.",
        },
      ]}
      relatedGuides={[
        {
          href: "/guias/como-elegir-psicologo-online",
          label: "Elegir psicólogo online",
          note: "Verificación, preguntas antes de empezar y señales de alerta.",
        },
        {
          href: "/guias/si-un-cercano-habla-de-hacerse-dano",
          label: "Si un cercano habla de hacerse daño",
          note: "Qué hacer cuando el riesgo es inmediato y no corresponde una videollamada.",
        },
        {
          href: "/guias/psicologo-o-psiquiatra",
          label: "Psicólogo y psiquiatra",
          note: "Para qué sirve cada profesional cuando hay que decidir a quién consultar.",
        },
      ]}
    >
      <p>
        Cuando alguien pregunta si la terapia online es segura, suelen venir dos
        preocupaciones mezcladas: si lo que digo queda protegido y si el formato
        aguanta lo que necesito trabajar. Las dos tienen respuesta, y ninguna se
        resuelve con una frase publicitaria. Esta guía revisa qué significa
        seguridad en este contexto —confidencialidad, registros, plataforma y
        condiciones del lugar donde te conectas—, qué desventajas reales tiene el
        formato y qué se hace si aparece una crisis en medio de una videollamada.
        Es información para decidir, no una recomendación de nadie en particular.
      </p>

      <h2>Qué significa que la terapia online sea segura</h2>
      <p>
        Seguridad, acá, no es una característica de una aplicación ni un sello
        que se pueda exhibir. Es un conjunto de condiciones que se sostienen
        entre el profesional y tú: que lo que digas quede entre ambos, que el
        encuadre sea claro, que la sesión ocurra en un lugar donde puedas hablar
        sin ser escuchado y que exista un plan si algo se interrumpe.
      </p>
      <p>
        Conviene separar dos conversaciones. Una es la técnica: qué programa se
        usa, cómo se envía el enlace, qué pasa si se cae la conexión. La otra es
        la clínica: quién tiene acceso a lo que cuentas, qué se registra, con
        qué límites y por cuánto tiempo. Las dos importan, y ninguna se resuelve
        con una promesa general de “todo es confidencial”. Tampoco existe un
        formato sin riesgos: la diferencia está en que los riesgos se conozcan,
        se conversen y se manejen.
      </p>
      <p>
        Si es tu primera aproximación al formato, el hub de{" "}
        <Link href="/terapia-online">terapia online</Link> resume qué es y cómo
        se organiza en Chile, para que sepas qué estás evaluando antes de
        entrar en los detalles de privacidad.
      </p>

      <h2>Confidencialidad y secreto profesional</h2>
      <p>
        El secreto profesional no cambia porque la sesión sea por videollamada.
        Quien te atiende está obligado a resguardar lo que compartes en el
        espacio clínico, igual que en una consulta presencial. Eso cubre lo que
        dices, lo que se anota en la ficha y cualquier material que derive de la
        sesión.
      </p>
      <p>
        Hay límites que conviene conocer de antemano. Cuando existe riesgo para
        tu vida o para la de terceros, la confidencialidad cede porque lo
        prioritario es proteger. No es una excepción que se active por temas
        incómodos ni por incomodidad de quien escucha: es un límite acotado, y
        un profesional serio puede explicarte en qué casos lo aplicaría y cómo
        te lo comunicaría.
      </p>
      <p>
        Preguntar esto en la primera conversación no es desconfianza, es parte
        de evaluar el formato. La guía sobre{" "}
        <Link href="/guias/como-elegir-psicologo-online">
          cómo elegir psicólogo online
        </Link>{" "}
        propone justamente eso: verificar la habilitación y hacer un par de
        preguntas concretas antes de empezar.
      </p>

      <h2>Qué pasa con lo que dices y con los registros</h2>
      <p>
        Todo proceso clínico deja algún registro. La ficha existe para dar
        continuidad al trabajo: recordar lo conversado, ordenar hipótesis y no
        depender de la memoria de nadie. La pregunta razonable no es si hay
        registro, sino quién lo ve, dónde está y qué se hace con él.
      </p>
      <p>Cosas concretas que puedes preguntar al inicio:</p>
      <ul>
        <li>Quién accede a la ficha: solo el profesional o también alguien administrativo.</li>
        <li>Dónde se almacena y qué resguardos tiene, tanto en papel como en digital.</li>
        <li>Por cuánto tiempo se conserva y qué ocurre cuando el proceso termina.</li>
        <li>Qué pasa si pides una copia o si quieres saber qué se ha escrito sobre ti.</li>
      </ul>
      <p>
        Ninguna de esas preguntas es agresiva y ninguna debería incomodar a
        quien trabaja ordenadamente. Lo que sí conviene evitar es enviar datos
        sensibles por canales abiertos: coordinar una hora es una cosa, contar
        ahí lo que te está pasando es otra. Ese relato pertenece a la sesión.
      </p>

      <h2>Plataforma, enlaces y grabaciones</h2>
      <p>
        En la práctica, el formato online se apoya casi siempre en una
        videollamada. Lo esperable es que recibas un enlace de uso personal, que
        la sala tenga algún control de acceso y que la sesión no se grabe sin tu
        acuerdo explícito. Si se graba con fines de supervisión o docentes,
        corresponde que te lo digan antes, que sepas quién la escucha y que
        puedas negarte sin que eso complique tu atención.
      </p>
      <p>
        Lo que sí decides tú es por dónde hablas. No uses redes sociales ni
        chats abiertos para contar temas clínicos. No porque sean
        intrínsecamente inseguros, sino porque no están pensados para eso: los
        mensajes quedan, se reenvían con facilidad y no tienen el resguardo de
        un espacio clínico. La regla simple es que los temas de fondo se
        conversan en la sesión, no en un hilo de mensajes.
      </p>
      <p>
        También conviene saber de antemano qué se hace si la conexión se cae a
        mitad de camino. Un plan sencillo —reintentar, cambiarse de vía, retomar
        en la misma semana— evita que una interrupción técnica se transforme en
        una sesión perdida.
      </p>

      <h2>Riesgos reales y desventajas del formato online</h2>
      <p>
        La mayoría de los problemas del formato online no tienen que ver con la
        seguridad informática, sino con las condiciones en que se hace. Vale la
        pena mirarlos de frente:
      </p>
      <ul>
        <li>
          Se pierde parte del lenguaje no verbal: la cámara recorta el cuerpo y
          no se ve igual el movimiento ni el silencio compartido.
        </li>
        <li>
          Falta de un lugar privado en casa. Hablar de temas íntimos con una
          puerta que se abre a cada rato simplemente no funciona.
        </li>
        <li>
          Convivencia: si vives con más personas, encontrar una hora y un
          espacio libre puede ser complicado cada semana.
        </li>
        <li>
          Interrupciones: cortes de conexión, ruido ambiente, alguien que golpea
          la puerta justo en el momento más difícil.
        </li>
        <li>
          Cansancio de pantalla, sobre todo si la sesión queda al final de un
          día lleno de trabajo frente al computador.
        </li>
        <li>
          Postergación: como no hay que trasladarse, es fácil mover la hora
          cuando aparece cualquier otra cosa.
        </li>
        <li>
          Momentos que piden presencia física, como contener un desborde agudo
          en el mismo espacio.
        </li>
      </ul>
      <p>
        Estas desventajas no invalidan el formato. Varias se compensan con
        acuerdos simples: avisar el contexto en que estás, elegir un horario
        donde la casa esté más tranquila, usar audífonos, pedir que no te
        interrumpan durante esa hora. Otras son límites que se asumen y que
        corresponde conversar con quien te atiende, no descubrir sobre la
        marcha.
      </p>

      <h2>Crisis o riesgo durante una videollamada</h2>
      <p>
        El formato online no sirve para urgencias. Esa frase conviene tenerla
        clara antes de empezar, y no descubrirla en medio de una crisis. Una
        videollamada puede acompañar un momento difícil, pero no puede
        trasladar a nadie ni activar ayuda física si la situación se complica.
      </p>
      <p>
        Por eso, al inicio del proceso, se suele acordar: dónde estás mientras
        tomas la sesión (una dirección o una referencia clara), con quién vives,
        un contacto de emergencia y qué hacer si en algún minuto la cosa se
        desborda. No es desconfianza: es una medida práctica que existe también
        en la atención presencial.
      </p>
      <p>
        Si durante una sesión, o fuera de ella, aparece riesgo inmediato de que
        alguien se haga daño, la vía no es esperar la próxima hora. En Chile se
        llama al 131 (SAMU) o se acude al servicio de urgencia más cercano.
        También existe la línea de prevención del suicidio *4141, gratuita desde
        celulares. La guía sobre qué hacer{" "}
        <Link href="/guias/si-un-cercano-habla-de-hacerse-dano">
          si un cercano habla de hacerse daño
        </Link>{" "}
        ordena esos pasos para quien está al lado de alguien en riesgo.
      </p>

      <h2>Cuándo conviene lo presencial</h2>
      <p>
        Hay situaciones donde el espacio físico aporta algo que la pantalla no
        reemplaza: contención presencial en cuadros agudos, dificultad seria
        para sostener una conversación con pantalla de por medio, o ausencia de
        cualquier lugar privado donde conectarse. Si lo que necesitas es
        evaluación para medicación, el camino pasa por un psiquiatra, y muchas
        veces por un trabajo conjunto con el psicólogo; en{" "}
        <Link href="/guias/psicologo-o-psiquiatra">psicólogo o psiquiatra</Link>{" "}
        se explica la diferencia.
      </p>
      <p>
        Si la duda es sobre el formato en general y no sobre una persona
        concreta, la guía sobre si{" "}
        <Link href="/preguntas/la-terapia-online-funciona">
          la terapia online funciona
        </Link>{" "}
        separa lo que se sostiene de lo que no. Y si quieres entender el proceso
        completo antes de decidir,{" "}
        <Link href="/preguntas/como-funciona-la-terapia-psicologica-online">
          cómo funciona la terapia psicológica online
        </Link>{" "}
        describe las etapas, mientras que{" "}
        <Link href="/preguntas/como-es-una-sesion-de-psicologia-online">
          cómo es una sesión de psicología online
        </Link>{" "}
        detalla qué esperar de una hora concreta.
      </p>
      <p>
        Decidir si la terapia online es segura, entonces, no depende de una
        aplicación ni de una promesa. Depende de que haya confidencialidad
        explicada, registros con acceso claro, una plataforma sin grabaciones
        inesperadas, un lugar donde puedas hablar y un plan acordado para las
        crisis. Con esas piezas a la vista, el formato deja de ser una incógnita
        y se vuelve una decisión informada.
      </p>
    </GuiaArticle>
  );
}
