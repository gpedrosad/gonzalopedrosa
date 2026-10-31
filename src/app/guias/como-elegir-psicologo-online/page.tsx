import Link from "next/link";
import { GuiaArticle, guiaMetadata } from "../guia-article";

const title = "Cómo elegir psicólogo online en Chile";
const description =
  "Cómo verificar que un psicólogo online está habilitado en Chile, qué preguntar antes de la primera sesión, privacidad, plataforma y señales de alerta.";
const path = "/guias/como-elegir-psicologo-online";

export const metadata = guiaMetadata({ title, description, path });

export default function GuiaComoElegirPsicologoOnlinePage() {
  return (
    <GuiaArticle
      h1={title}
      breadcrumbLabel="Elegir psicólogo online"
      path={path}
      description={description}
      faqs={[
        {
          question:
            "¿Cómo verifico que un psicólogo online está habilitado en Chile?",
          answer:
            "Puedes buscar su nombre y apellido en el Registro Nacional de Prestadores Individuales de Salud de la Superintendencia de Salud, que es público. Ahí aparece la profesión y el registro de quien está habilitado para ejercer. Revisa que el nombre coincida con la persona que realmente te atenderá y no solo con la marca del sitio.",
        },
        {
          question:
            "¿Qué conviene preguntar antes de la primera sesión?",
          answer:
            "El enfoque de trabajo, si tiene experiencia en el motivo que te trae, cuánto dura cada sesión, con qué frecuencia se reúnen, cómo se cancela una hora, si se emite boleta y cómo se maneja la confidencialidad en el formato online. Una respuesta concreta a esas preguntas dice bastante sobre cómo trabaja.",
        },
        {
          question: "¿Sirve la terapia online o es mejor la presencial?",
          answer:
            "Hay estudios en que, para varios motivos de consulta, el formato online muestra resultados parecidos a la atención presencial, aunque no sirve para todo. Si hay riesgo inmediato o se necesita evaluación para medicación, corresponde otra vía. También importa que tengas un lugar privado y una conexión estable para sostener las sesiones.",
        },
        {
          question: "¿Puedo cambiar de psicólogo si no me acomoda?",
          answer:
            "Sí. La primera conversación también sirve para ver si hay sintonía, y si no la hay, buscar otro profesional es una decisión legítima. Puedes decirlo de forma simple y pedir un cierre ordenado del proceso. Cambiar no significa que la terapia haya fallado.",
        },
      ]}
      updatedIso="2026-10-31"
      updatedLabel="31 de octubre de 2026"
      relatedSite={[
        {
          href: "/terapia-online",
          label: "Terapia online",
          note: "Qué es la terapia online en Chile y cómo se organiza el formato.",
        },
        {
          href: "/preguntas/la-terapia-online-funciona",
          label: "¿Funciona la terapia online?",
          note: "Evidencia y límites del formato, para revisar antes de decidir.",
        },
        {
          href: "/preguntas/reembolso-isapre-terapia-online",
          label: "Reembolso y boleta",
          note: "Cómo ordenar el trámite con tu plan de salud si necesitas el documento.",
        },
      ]}
      relatedGuides={[
        {
          href: "/guias/psicologo-o-psiquiatra",
          label: "Psicólogo y psiquiatra",
          note: "Para qué sirve cada profesional cuando hay que decidir a quién consultar.",
        },
        {
          href: "/guias/si-un-cercano-habla-de-hacerse-dano",
          label: "Si un cercano habla de hacerse daño",
          note: "Qué hacer cuando el riesgo es inmediato y no corresponde una videollamada.",
        },
        {
          href: "/preguntas/cada-cuanto-ir-al-psicologo",
          label: "Cada cuánto ir al psicólogo",
          note: "Cómo se ajusta la frecuencia de las sesiones según el motivo de consulta.",
        },
      ]}
    >
      <p>
        Buscar “psicólogo online” en Chile devuelve decenas de páginas y
        perfiles, y casi todas prometen lo mismo. Elegir bien no es encontrar al
        más conocido ni al que aparece primero: es revisar unos pocos datos
        verificables, hacer un par de preguntas antes de la primera hora y
        entender en qué se diferencia una atención seria de un servicio que solo
        vende sesiones. Esta guía es informativa y no recomienda a nadie en
        particular.
      </p>

      <h2>Qué significa “online” cuando hablas de terapia</h2>
      <p>
        En la mayoría de los casos, terapia online significa una sesión por
        videollamada, en un horario acordado, con una duración y un encuadre
        parecidos a los de una consulta presencial. No es responder mensajes
        sueltos durante el día ni recibir consejos por chat cuando aparece una
        crisis. Esa diferencia importa: un espacio con hora fija, privacidad y
        continuidad permite hacer un trabajo clínico, mientras que la mensajería
        permanente mezcla la relación terapéutica con la vida cotidiana y
        desdibuja los límites.
      </p>
      <p>
        Si es la primera vez que consideras este formato, el hub de{" "}
        <Link href="/terapia-online">terapia online</Link> explica qué es y cómo
        se organiza en Chile. Para elegir, basta con que tengas claro que estás
        contratando un proceso con horario y no un servicio de respuestas
        inmediatas.
      </p>

      <h2>Cómo verificar que es psicólogo habilitado en Chile</h2>
      <p>
        En Chile, quien ejerce como psicólogo debe tener el título de psicólogo
        otorgado por una universidad, y su habilitación puede consultarse en el
        Registro Nacional de Prestadores Individuales de Salud de la
        Superintendencia de Salud. Ese registro es público y se busca por
        nombre. Si la persona aparece con su profesión y su número de registro,
        tienes una señal concreta de que estás frente a alguien habilitado.
      </p>
      <p>
        Revisa también que el nombre del registro coincida con quien realmente
        te va a atender. En páginas de clínicas o plataformas grandes es fácil
        confundirse: la marca es una cosa y el profesional que toma la sesión es
        otra. Pregunta con nombre y apellido quién te atenderá y verifica ese
        nombre, no el logo.
      </p>
      <p>
        Desconfía cuando el título se reemplaza por etiquetas vagas. “Coach”,
        “acompañante emocional” o “terapeuta” sin más no acreditan formación en
        psicología. Puede haber personas serias en esos roles, pero no son lo
        mismo que un psicólogo, y la diferencia se nota en el encuadre, en la
        responsabilidad clínica y en los límites de lo que se puede trabajar.
      </p>

      <h2>Qué preguntar antes de la primera hora</h2>
      <p>
        Antes de agendar, una consulta breve por correo o formulario es
        razonable y no debería molestarte. Pregunta por el enfoque de trabajo:
        si es cognitivo-conductual, sistémico, psicoanalítico u otro, y cómo se
        traduce eso en la práctica. Pregunta también si tiene experiencia en el
        motivo que te trae: ansiedad, duelo, problemas de pareja, consumo, lo
        que sea. No necesitas manejar términos técnicos para hacer esa pregunta;
        basta con decir qué te pasa y escuchar si la respuesta es concreta o
        genérica.
      </p>
      <p>
        Otras preguntas útiles: cómo trabaja la confidencialidad en el formato
        online, cuánto dura cada sesión, con qué frecuencia se reúnen y cómo se
        avisa si necesitas cancelar. Si te responden con evasivas o te apuran a
        pagar antes de cualquier conversación, eso también es información.
      </p>
      <p>
        La primera sesión no es un compromiso de por vida. Sirve, entre otras
        cosas, para ver si hay sintonía: si te sientes escuchado, si las
        preguntas te hacen sentido, si puedes hablar con relativa comodidad. Si
        no aparece esa sensación, cambiar de profesional es un derecho y no una
        falta de respeto. La guía sobre{" "}
        <Link href="/preguntas/como-funciona-la-terapia-psicologica-online">
          cómo funciona la terapia psicológica online
        </Link>{" "}
        te ayuda a saber qué esperar de las primeras conversaciones, más allá de
        quién sea el profesional.
      </p>

      <h2>Encuadre: duración, frecuencia, cancelación y boleta</h2>
      <p>
        Un servicio serio te dice con claridad cuánto dura cada sesión, cada
        cuánto se reúnen al inicio, cómo se paga y qué pasa si necesitas mover
        una hora. La frecuencia no es un castigo ni una prueba de compromiso: se
        ajusta al motivo de consulta y puede cambiar con el tiempo. En la guía
        sobre{" "}
        <Link href="/preguntas/cada-cuanto-ir-al-psicologo">
          cada cuánto ir al psicólogo
        </Link>{" "}
        se explica por qué algunos procesos parten semanal y otros se espacian.
      </p>
      <p>
        El tema de la boleta conviene aclararlo antes, no después. Si necesitas
        el documento para reembolso, pregunta si se emite y de qué manera. La
        guía sobre{" "}
        <Link href="/preguntas/reembolso-isapre-terapia-online">
          reembolso y boleta en terapia online
        </Link>{" "}
        ordena cómo funciona el trámite con tu plan, sin depender de lo que te
        digan en el momento. Quien no puede responder a eso con claridad
        probablemente tampoco tenga resuelto el resto del encuadre.
      </p>

      <h2>Privacidad, lugar y plataforma</h2>
      <p>
        La confidencialidad no depende solo del profesional: depende también de
        las condiciones en que tomas la sesión. Busca un lugar donde nadie te
        escuche y donde no tengas que entrar y salir de la conversación. Los
        audífonos ayudan a que lo que digas no se filtre al resto de la casa. Si
        estás en la oficina, en el auto o caminando por la calle, la sesión
        pierde justamente lo que la hace útil.
      </p>
      <p>
        Una conexión estable y un aparato cargado evitan cortes que interrumpen
        justo cuando estabas hablando de algo difícil. Cuando la conexión falla
        igual, un profesional ordenado tiene un plan: reanudar la llamada,
        cambiar de vía o retomar la sesión. Preguntar por ese plan antes es
        razonable.
      </p>
      <p>
        También puedes preguntar si la sesión se graba. Lo esperable es que no
        se grabe sin tu acuerdo explícito, y que te digan qué plataforma se usa
        y quién tiene acceso a esos datos. Si la respuesta es ambigua, tómalo
        como una señal. En{" "}
        <Link href="/preguntas/como-es-una-sesion-de-psicologia-online">
          cómo es una sesión de psicología online
        </Link>{" "}
        se describe el paso a paso de una hora habitual, con su inicio y su
        cierre, para que sepas qué se espera de ti en ese rato.
      </p>

      <h2>Señales de alerta al elegir</h2>
      <ul>
        <li>
          Promesas de resultados garantizados: nadie serio asegura curas ni
          plazos fijos antes de evaluarte.
        </li>
        <li>
          Diagnósticos o indicaciones entregados por chat, sin evaluación ni
          sesión de por medio.
        </li>
        <li>
          Presión para comprar paquetes grandes por adelantado o para pagar en
          el momento a cambio de un descuento.
        </li>
        <li>
          Falta de datos verificables: nombre completo, título, registro de
          habilitación y una vía de contacto formal.
        </li>
        <li>
          Respuestas fuera de horario que mezclan lo personal con lo clínico, o
          que esperan que estés disponible cuando a la otra persona le acomoda.
        </li>
        <li>
          Solicitudes de datos sensibles por canales abiertos, sin explicar para
          qué se usan ni cómo se guardan.
        </li>
      </ul>
      <p>
        Ninguna de estas señales, por sí sola, significa que la persona sea un
        fraude. Varias juntas, o una que se repite cuando preguntas, deberían
        hacerte detenerte y buscar otra alternativa. Un profesional puede ser
        directo, incluso incómodo, y eso no es una alerta: la alerta es la falta
        de transparencia.
      </p>

      <h2>Cuándo el formato online no es el adecuado</h2>
      <p>
        La terapia online sirve para muchos motivos de consulta, pero no
        reemplaza todo. Si hay riesgo inmediato de que alguien se haga daño, la
        prioridad no es elegir psicólogo por videollamada, sino activar las vías
        de urgencia y el acompañamiento presencial que corresponda. La guía
        sobre qué hacer{" "}
        <Link href="/guias/si-un-cercano-habla-de-hacerse-dano">
          si un cercano habla de hacerse daño
        </Link>{" "}
        resume esos pasos sin rodeos.
      </p>
      <p>
        Si lo que necesitas es evaluación para medicación, el camino pasa por un
        psiquiatra, y muchas veces por un trabajo conjunto con el psicólogo. En{" "}
        <Link href="/guias/psicologo-o-psiquiatra">psicólogo o psiquiatra</Link>{" "}
        se explica para qué sirve cada uno. También hay situaciones donde el
        espacio físico importa: cuadros que requieren contención presencial,
        dificultad seria para sostener una conversación con pantalla de por
        medio, o falta de un lugar privado donde conectarte.
      </p>
      <p>
        Cuando dudas del formato en general —y no de esta persona en
        particular—, la guía sobre si{" "}
        <Link href="/preguntas/la-terapia-online-funciona">
          la terapia online funciona
        </Link>{" "}
        separa lo que la evidencia sostiene de lo que no, y reconoce los límites
        del formato.
      </p>
      <p>
        Elegir psicólogo online, al final, se parece más a una revisión
        tranquila que a una apuesta: verificas habilitación, preguntas por el
        enfoque y el encuadre, cuidas la privacidad y desconfías de las promesas
        grandes. Nadie acierta a la primera por intuición, y cambiar de
        profesional cuando no hay sintonía es parte normal del proceso.
      </p>
    </GuiaArticle>
  );
}
