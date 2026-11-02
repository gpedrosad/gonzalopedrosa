import Link from "next/link";
import { GuiaArticle, guiaMetadata } from "../guia-article";

const title = "Terapia online o presencial: cómo elegir el formato";
const description =
  "Criterios prácticos para decidir entre terapia online y presencial: lugar privado, tiempos, horarios, motivo de consulta y qué cambia en cada formato.";
const path = "/guias/terapia-online-o-presencial";

export const metadata = guiaMetadata({ title, description, path });

export default function GuiaTerapiaOnlineOPresencialPage() {
  return (
    <GuiaArticle
      h1={title}
      breadcrumbLabel="Online o presencial"
      path={path}
      description={description}
      faqs={[
        {
          question: "¿Es mejor el psicólogo online o presencial?",
          answer:
            "No hay un formato mejor en general: depende de tus condiciones concretas y de lo que necesites trabajar. El online resuelve el acceso —no hay traslado, hay más horarios posibles y el proceso puede seguir si te mudas o viajas—, mientras que el presencial ofrece el espacio físico compartido. Lo que importa es que el formato que elijas te permita sostener las sesiones con regularidad y hablar con privacidad. Si ninguna de esas dos cosas está resuelta, el problema no es el formato sino las condiciones.",
        },
        {
          question: "¿Qué cambia entre una sesión online y una presencial?",
          answer:
            "Cambia el canal, no el encuadre. Se mantienen la duración, la frecuencia acordada, el secreto profesional y la estructura de la hora. Lo que cambia es cómo llega la información: en la pantalla se pierde parte del lenguaje no verbal, porque la cámara recorta el cuerpo, y tú tienes que conseguir un lugar privado y una conexión estable. En presencial, en cambio, asumes el traslado y el tiempo que eso implica.",
        },
        {
          question: "¿Puedo empezar online y pasar a presencial?",
          answer:
            "Sí, y también al revés. El formato no es un contrato cerrado: se puede conversar con quien te atiende y ajustarlo si cambian tus condiciones. Lo razonable es plantearlo con anticipación, explicar qué te está costando y revisar si el cambio es posible en la práctica. Si quien te atiende no ofrece atención presencial, el paso puede implicar una derivación a otro profesional, y eso también conviene hablarlo antes de que se vuelva urgente.",
        },
        {
          question: "¿En qué casos conviene más lo presencial?",
          answer:
            "Cuando no tienes ningún lugar privado donde conectarte, cuando sostener una conversación a través de una pantalla te resulta muy difícil, cuando hay un desborde agudo que pide contención en el mismo espacio, o cuando la evaluación apunta a medicación y necesitas a un psiquiatra. También si vives con varias personas y no logras acordar una hora tranquila. No es que lo presencial sea superior: es que en esas condiciones concretas funciona mejor.",
        },
      ]}
      updatedIso="2026-11-02"
      updatedLabel="2 de noviembre de 2026"
      relatedSite={[
        {
          href: "/terapia-online",
          label: "Terapia online",
          note: "Qué es la terapia online en Chile y cómo se organiza el formato.",
        },
        {
          href: "/preguntas/la-terapia-online-funciona",
          label: "¿Funciona la terapia online?",
          note: "Evidencia y límites del formato, sin promesas de resultados.",
        },
        {
          href: "/preguntas/como-funciona-la-terapia-psicologica-online",
          label: "Cómo funciona la terapia online",
          note: "Las etapas de un proceso online, desde la primera conversación.",
        },
      ]}
      relatedGuides={[
        {
          href: "/guias/terapia-online-es-segura",
          label: "¿Es segura la terapia online?",
          note: "Confidencialidad, registros y desventajas del formato.",
        },
        {
          href: "/guias/como-elegir-psicologo-online",
          label: "Elegir psicólogo online",
          note: "Verificación, preguntas antes de empezar y señales de alerta.",
        },
        {
          href: "/guias/psicologo-o-psiquiatra",
          label: "Psicólogo y psiquiatra",
          note: "Para qué sirve cada profesional cuando hay que decidir a quién consultar.",
        },
      ]}
    >
      <p>
        Si estás buscando dónde atenderte, tarde o temprano aparece la misma
        pregunta: ¿da lo mismo que sea online o presencial? La respuesta corta es
        que no da lo mismo, pero tampoco hay un formato que gane siempre. Depende
        de tus condiciones concretas —dónde vives, con quién, cuánto tiempo
        puedes destinar a la semana, qué te está pasando— y de una conversación
        honesta con quien te atienda. Esta guía ordena los criterios para
        decidir, separa lo que se mantiene igual en ambos formatos de lo que
        cambia, y deja una lista de preguntas para hacerte antes de elegir.
      </p>

      <h2>Qué se mantiene igual en los dos formatos</h2>
      <p>
        Antes de comparar, conviene tener claro qué no está en discusión. La
        terapia es la misma: un espacio con encuadre, una hora acordada, un
        vínculo con alguien habilitado para ejercer y un trabajo sostenido en el
        tiempo. Nada de eso depende del canal.
      </p>
      <p>
        Se mantienen la duración de la sesión, la frecuencia acordada, el
        secreto profesional y las reglas básicas del espacio clínico. También se
        mantiene la exigencia de que puedas hablar con privacidad: una sesión
        interrumpida cada cinco minutos no funciona, sea en consulta o en
        pantalla. La guía sobre si{" "}
        <Link href="/guias/terapia-online-es-segura">
          la terapia online es segura
        </Link>{" "}
        desarrolla ese punto —confidencialidad, registros y plataforma— y no lo
        repetimos acá.
      </p>
      <p>
        Si es tu primera aproximación al tema, el hub de{" "}
        <Link href="/terapia-online">terapia online</Link> explica qué es este
        formato y cómo se organiza en Chile.
      </p>

      <h2>Qué cambia cuando la sesión es por videollamada</h2>
      <p>
        Lo que cambia es la logística y parte de la información no verbal. En
        online desaparece el traslado: no hay viaje, no hay sala de espera, no
        hay que calcular cuánto demora el transporte. Eso libera tiempo y amplía
        los horarios posibles, sobre todo si trabajas o estudias.
      </p>
      <p>
        A cambio, tienes que conseguir lo que antes daba el lugar: un espacio
        privado, una conexión estable y una hora en que nadie te interrumpa.
        También se pierde parte del lenguaje no verbal, porque la cámara recorta
        el cuerpo, y aparece el cansancio de pantalla, que pesa más si la sesión
        queda al final de un día lleno de computador.
      </p>
      <p>
        En presencial pasa lo inverso: ganas el espacio físico compartido, pero
        asumes el traslado y un horario más acotado. Si quieres saber cómo se ve
        una hora concreta por videollamada,{" "}
        <Link href="/preguntas/como-es-una-sesion-de-psicologia-online">
          cómo es una sesión de psicología online
        </Link>{" "}
        la describe paso a paso.
      </p>

      <h2>Criterios prácticos para decidir</h2>
      <p>
        Estos son los puntos que suelen inclinar la balanza. No los respondas en
        abstracto: piensa en tu semana real, no en la semana ideal.
      </p>
      <ul>
        <li>
          Lugar privado disponible: ¿tienes una pieza donde puedas cerrar la
          puerta y hablar sin que te escuchen, todas las semanas a la misma
          hora?
        </li>
        <li>
          Tiempos y traslados: ¿cuánto demoras en llegar a una consulta y cuánto
          te cuesta ese tiempo en trabajo, estudio o cuidado de otros?
        </li>
        <li>
          Horarios: ¿qué franjas te sirven de verdad? La agenda online suele ser
          más amplia, pero solo sirve si calza con tu vida.
        </li>
        <li>
          Comodidad con la pantalla: ¿te resulta natural hablar de temas
          difíciles mirando una cámara o te cuesta más que en persona?
        </li>
        <li>
          Continuidad: ¿es probable que te mudes, viajes o pases temporadas
          fuera? El online permite mantener el proceso cuando cambias de lugar.
        </li>
        <li>
          Accesibilidad y movilidad: si desplazarte te implica dificultad, costo
          o acompañamiento, el online elimina esa barrera.
        </li>
        <li>
          Preferencia personal: hay personas que se sienten mejor en una consulta
          y otras que se sueltan más desde su casa. Ninguna de las dos es un
          defecto.
        </li>
      </ul>
      <p>
        Si la duda de fondo es a quién consultar y no por qué canal, la guía
        sobre{" "}
        <Link href="/guias/como-elegir-psicologo-online">
          cómo elegir psicólogo online
        </Link>{" "}
        propone verificaciones y preguntas concretas antes de empezar.
      </p>

      <h2>El motivo de consulta y cuándo el espacio físico aporta algo</h2>
      <p>
        El motivo por el que consultas también pesa, aunque no de manera
        automática. Hay situaciones en que el espacio físico aporta algo que la
        pantalla no reemplaza: un desborde agudo que pide contención en el mismo
        lugar, o dificultad seria para sostener una conversación con una pantalla
        de por medio.
      </p>
      <p>
        En el otro extremo, hay motivos que muchas veces se pueden trabajar a
        distancia:
        procesos largos que requieren continuidad, trabajo sobre hábitos y
        rutinas, duelos, dificultades vinculares, acompañamiento sostenido en el
        tiempo. Lo importante es no decidir esto solo: quien te atiende puede
        decirte con franqueza si el formato se ajusta a lo que traes.
      </p>
      <p>
        Hay además un caso que no depende del formato: si la evaluación apunta a
        medicación, el camino pasa por un psiquiatra, muchas veces en trabajo
        conjunto con el psicólogo. En{" "}
        <Link href="/guias/psicologo-o-psiquiatra">psicólogo o psiquiatra</Link>{" "}
        se explica la diferencia.
      </p>

      <h2>Continuidad: viajes, mudanzas y cambios de ciudad</h2>
      <p>
        Uno de los argumentos prácticos más sólidos del formato online es la
        continuidad. Si te mudas, si viajas por trabajo o si pasas temporadas
        fuera, el proceso puede seguir sin interrupción. En presencial, cada
        cambio de lugar obliga a decidir entre pausar, retomar más tarde o buscar
        a alguien nuevo, y empezar de cero tiene un costo.
      </p>
      <p>
        Esa continuidad no es automática: conviene revisar qué pasa con los husos
        horarios si viajas lejos, si la conexión del lugar donde estarás alcanza
        y si tienes ahí un espacio privado. Si la respuesta a alguna de esas
        preguntas es no, el formato se vuelve frágil justo cuando más lo
        necesitabas.
      </p>

      <h2>Combinar formatos o cambiar en el camino</h2>
      <p>
        El formato no es una decisión de una vez para siempre. Se puede empezar
        online y pasar a presencial, hacer lo contrario, o combinar: sesiones
        presenciales cuando estás en la ciudad y online cuando no. Lo que importa
        es que sea parte del encuadre acordado y no una improvisación de última
        hora.
      </p>
      <p>
        Para que eso funcione, hay que conversarlo con quien te atiende: plantear
        qué te está costando, con cuánta anticipación puedes avisar un cambio y
        si existe disponibilidad para la otra modalidad. Si no la hay, el paso
        puede implicar una derivación a otro profesional, y eso también conviene
        hablarlo antes de que se vuelva urgente.
      </p>

      <h2>Preguntas para hacerte antes de elegir</h2>
      <ul>
        <li>
          ¿Tengo un lugar donde pueda hablar sin ser escuchado, todas las semanas
          a la misma hora?
        </li>
        <li>
          ¿Cuánto tiempo real me quita trasladarme y puedo sostener ese tiempo de
          forma constante?
        </li>
        <li>
          ¿Qué horarios me sirven, y existen en el formato que estoy
          considerando?
        </li>
        <li>
          ¿Me resulta posible hablar de temas difíciles a través de una pantalla?
        </li>
        <li>
          ¿Es probable que me mude, viaje o cambie de ciudad en los próximos
          meses?
        </li>
        <li>
          ¿Desplazarme me implica un esfuerzo, un costo o un acompañamiento que
          puedo evitar?
        </li>
        <li>
          ¿Estoy eligiendo este formato por una razón práctica o por postergar el
          inicio?
        </li>
      </ul>
      <p>
        Si después de responder esto sigues con dudas, el paso siguiente no es
        buscar más información en abstracto: es plantearle las preguntas a quien
        te va a atender. Si quieres entender antes el proceso completo,{" "}
        <Link href="/preguntas/como-funciona-la-terapia-psicologica-online">
          cómo funciona la terapia psicológica online
        </Link>{" "}
        describe las etapas; y si la duda es si el formato sirve en general,{" "}
        <Link href="/preguntas/la-terapia-online-funciona">
          la terapia online funciona
        </Link>{" "}
        separa lo que se sostiene de lo que no.
      </p>
      <p>
        Una última cosa, para tenerla clara desde el principio: el formato online
        no sirve para urgencias. Ante riesgo inmediato, en Chile se llama al 131
        (SAMU) o se acude al servicio de urgencia más cercano.
      </p>
    </GuiaArticle>
  );
}
