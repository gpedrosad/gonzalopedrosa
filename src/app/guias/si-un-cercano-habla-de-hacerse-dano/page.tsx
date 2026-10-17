import Link from "next/link";
import { GuiaArticle, guiaMetadata } from "../guia-article";

const title = "Si un cercano habla de hacerse daño";
const description =
  "Qué decir, cómo preguntar sin miedo y a qué líneas llamar en Chile si alguien habla de suicidio o de lastimarse. Guía de primeros pasos.";
const path = "/guias/si-un-cercano-habla-de-hacerse-dano";

export const metadata = guiaMetadata({ title, description, path });

export default function GuiaCercanoDanoPage() {
  return (
    <GuiaArticle
      h1={title}
      breadcrumbLabel="Un cercano habla de hacerse daño"
      path={path}
      description={description}
      relatedSite={[
        {
          href: "/ayuda-psicologica-urgente-chillan",
          label: "Ayuda psicológica urgente",
          note: "Aclara que una hora con un psicólogo no es un servicio de emergencia ni está disponible todo el día.",
        },
        {
          href: "/psicologo-autolesiones-chillan",
          label: "Autolesiones",
          note: "Contexto del sitio cuando el daño es hacia el propio cuerpo y se vuelve repetido.",
        },
        {
          href: "/psicologo-depresion-chillan",
          label: "Depresión",
          note: "La desesperanza intensa a veces viaja con ideas de muerte. Esta página del sitio habla de ese malestar.",
        },
      ]}
      relatedGuides={[
        {
          href: "/guias/acompanar-a-alguien-en-duelo",
          label: "Cómo acompañar a alguien en duelo",
          note: "Si el comentario aparece después de una pérdida y aún no hay un riesgo inmediato.",
        },
        {
          href: "/guias/familiar-con-ludopatia",
          label: "Familiar con adicción al juego",
          note: "Cuando la frase de hacerse daño se usa en medio de una deuda o una pelea por plata.",
        },
      ]}
    >
      <p>
        Si alguien te dice que no quiere seguir, que se quiere morir o que se
        ha hecho daño, tómalo en serio la primera vez. No hace falta que suene
        a película ni que traiga un plan escrito. Las bromas, los “es para
        llamar la atención” y los mensajes a las tres de la mañana también
        cuentan. Esta guía ordena qué puedes hacer en las próximas horas. No te
        convierte en terapeuta de esa persona y no reemplaza a una urgencia
        cuando el riesgo es inminente.
      </p>

      <h2>Si el peligro es ahora</h2>
      <p>
        Hay riesgo inmediato si la persona tiene un plan, tiene a mano un medio
        para hacerse daño, dice que lo va a hacer hoy, está muy intoxicada o
        confundida, o ya se hirió. En ese caso no te quedes solo con una
        conversación.
      </p>
      <ul>
        <li>
          En Chile, llama al <a href="tel:131">131</a> si necesita una urgencia
          de salud. Si hay violencia, un arma o no puedes mantener la escena
          segura, llama también al <a href="tel:133">133</a>.
        </li>
        <li>
          Si está contigo y es seguro quedarte, no la dejes sola mientras llega
          ayuda. Si está en otro lugar, intenta mantener la llamada o los
          mensajes y pide a alguien cercano a ella que vaya.
        </li>
        <li>
          Aleja medios evidentes solo si puedes hacerlo sin pelear ni ponerte
          en riesgo: un frasco de medicamentos a la vista, las llaves del auto
          si no está en condiciones de manejar. No forcejees por un objeto
          peligroso.
        </li>
        <li>
          No prometas que vas a guardar el secreto. La vida pesa más que esa
          promesa.
        </li>
      </ul>
      <p>
        Otras líneas que este sitio ya publica para una crisis, y que puedes
        usar tú o la otra persona si el riesgo no es una emergencia de este
        minuto pero el malestar es muy alto: Salud Responde,{" "}
        <a href="tel:6003607777">600 360 7777</a>, y Fono de la Esperanza,{" "}
        <a href="tel:717200200">717 200 200</a>. Una hora con un psicólogo
        particular no sustituye esos números. Quien atiende en consulta no está
        disponible las 24 horas.
      </p>

      <h2>Preguntar directo no planta la idea</h2>
      <p>
        Da miedo nombrar el suicidio. La evidencia de salud pública, y la
        práctica clínica, van al revés del mito: preguntar con claridad no le
        mete la idea en la cabeza a quien no la tenía. Le abre una puerta a
        quien ya la está cargando solo. Puedes decir: “te escuché decir que no
        quieres seguir. ¿Estás pensando en matarte?”. Usa palabras llanas. “¿No
        harías una locura, cierto?” empuja a negar para tranquilizarte.
      </p>
      <p>
        Si dice que sí, las siguientes preguntas son prácticas, no un
        interrogatorio: ¿lo has pensado estos días o es algo que se te cruza y
        se va? ¿Has pensado cómo? ¿Tienes eso a mano? ¿Has hecho algo hoy para
        acercarte a hacerlo? Mientras más concreto el plan y más disponible el
        medio, más urgente es pedir ayuda externa. No necesitas el detalle
        gráfico. Si empieza a describir un método, puedes decir que no necesitas
        los pasos y que sí necesitas saber si corre peligro esta noche.
      </p>
      <p>
        Escucha más de lo que discutes. “Piensa en tu mamá” o “tienes todo para
        ser feliz” cierra la conversación. Duele, y además no responde a lo que
        la persona siente en ese minuto, que es no ver salida. Sirve más: “debe
        ser agotador estar así. Me importa que sigas vivo hoy. Vamos a buscar
        ayuda juntos”.
      </p>

      <h2>Qué decir y qué no decir</h2>
      <ul>
        <li>
          No te burles, no imites el tono ni publiques su mensaje. La
          humillación aleja el próximo pedido de auxilio.
        </li>
        <li>
          No entres en una negociación del tipo “si de verdad me quisieras no
          dirías eso”. El cariño no se prueba con silencio.
        </li>
        <li>
          No ofrezcas plata, un viaje o una reconciliación a cambio de que
          “retire” lo dicho. El alivio de esa transacción dura poco y enseña que
          la amenaza es la forma de conseguir algo. Si hay una adicción de por
          medio, lee con calma la guía sobre{" "}
          <Link href="/guias/familiar-con-ludopatia">
            cómo ayudar a un familiar con adicción al juego
          </Link>
          : prestar bajo amenaza no es cuidado.
        </li>
        <li>
          Sí puedes quedarte, bajar el ruido, ofrecer agua, ayudar a escribir
          qué se le va a decir al médico y avisar a otro adulto de confianza si
          la persona es un adolescente.
        </li>
      </ul>
      <p>
        Si el comentario fue en redes o en un estado y no responde, no te
        quedes solo recargando la pantalla. Intenta otro canal, avisa a alguien
        que viva cerca y, si el mensaje dice que ya lo está haciendo, llama al
        131 y entrega la ubicación que tengas. Mejor una visita de más que una
        noche de “capaz era broma”.
      </p>

      <h2>Adolescentes y secreto</h2>
      <p>
        Un adolescente puede pedirte que no les cuentes a sus padres. Si hay
        ideas de suicidio, un plan o autolesiones que se están saliendo de
        control, no puedes sostener ese secreto tú solo. Puedes decirlo con
        respeto: “no voy a publicar esto ni usarlo en tu contra, y tampoco voy
        a dejar que te mueras en silencio. Vamos a decírselo a un adulto que
        pueda cuidarte”. Si el adulto de la casa es parte del peligro —violencia,
        abuso—, busca otra vía: un familiar seguro, el colegio, un consultorio o
        directamente la urgencia. No lo devuelvas a la misma pieza sin un plan.
      </p>
      <p>
        Las autolesiones, como cortarse o golpearse para bajar una emoción, no
        son siempre un intento de suicidio, y tampoco son “nada”. Duelen, se
        pueden infectar y a veces conviven con ideas de muerte. No pidas ver las
        heridas como prueba, no las castigues y no entres en detalles de cómo lo
        hace. Sí pide evaluación de salud. La página del sitio sobre{" "}
        <Link href="/psicologo-autolesiones-chillan">autolesiones</Link> aporta
        contexto; una urgencia sigue siendo una urgencia si hay sangrado, un
        tóxico o un desmayo.
      </p>

      <h2>Después del momento agudo</h2>
      <p>
        Cuando la noche pasó, el trabajo no terminó. Pregunta al día siguiente
        cómo durmió y si pudo hablar con alguien de salud. Ofrece compañía para
        una hora en el consultorio, en un COSAM o con el médico que ya la ve.
        No la sueltes con un “ya ves que se te pasó”. Muchas personas sienten
        vergüenza al otro día y se arrepienten de haber hablado. Tu calma —sin
        sermón— hace más probable que vuelva a avisar.
      </p>
      <p>
        Ayuda a reducir el acceso a medios en la casa de forma permanente y
        aburrida: medicamentos bajo llave o en otro domicilio, armas fuera del
        hogar si las había, acuerdos sobre alcohol. No hace falta convertir la
        casa en un control policial. Sí hace falta que el medio más peligroso no
        esté a un brazo de distancia en la próxima crisis. Este principio es de
        prevención; no es una lista de métodos y no debes pedirle que te
        explique cómo lo haría para “entender mejor”.
      </p>
      <p>
        Si tú quedaste temblando, con culpa o sin dormir, eso también es real.
        No cargues solo la idea de que si parpadeas va a pasar algo. Cuéntale a
        otro adulto, usa las mismas líneas si las necesitas para ti y suelta el
        papel de guardián único. Acompañar no es vigilar las 24 horas ni leer
        todos sus mensajes para siempre. Es estar presente, pedir refuerzos y
        aceptar que la responsabilidad de la atención clínica es de los equipos
        de salud, no de tu insomnio.
      </p>

      <h2>Si quien lo está pensando eres tú</h2>
      <p>
        Esta página también es para ti. Si estás leyendo porque las ideas son
        tuyas, no tienes que esperar a “merecer” ayuda ni a redactarlo bonito.
        Llama al 131 si crees que esta noche no estás seguro. Si puedes
        conversar antes de una urgencia, marca Salud Responde al 600 360 7777 o
        el Fono de la Esperanza al 717 200 200, o dile a una persona concreta:
        “estoy mal y no quiero estar solo”. Quitar de en medio lo que usarías y
        quedarte con alguien son dos pasos válidos mientras llega ayuda. No
        eres una carga por decirlo. Eres una persona en un momento en que el
        cerebro te está mostrando una salida falsa. Hay otras, y no las tienes
        que encontrar sin compañía.
      </p>
    </GuiaArticle>
  );
}
