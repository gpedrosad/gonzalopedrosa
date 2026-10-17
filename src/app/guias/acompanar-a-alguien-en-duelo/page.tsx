import Link from "next/link";
import { GuiaArticle, guiaMetadata } from "../guia-article";

const title = "Cómo acompañar a alguien que está en duelo";
const description =
  "Qué decir, qué evitar y cómo ofrecer ayuda concreta cuando alguien cercano perdió a una persona o una vida que ya no está.";
const path = "/guias/acompanar-a-alguien-en-duelo";

export const metadata = guiaMetadata({ title, description, path });

export default function GuiaAcompanarDueloPage() {
  return (
    <GuiaArticle
      h1={title}
      breadcrumbLabel="Acompañar un duelo"
      path={path}
      description={description}
      relatedSite={[
        {
          href: "/psicologo-duelo-chillan",
          label: "Duelo y pérdidas",
          note: "Cómo describe el sitio el proceso de quien está viviendo la pérdida.",
        },
        {
          href: "/psicologo-ruptura-amorosa-chillan",
          label: "Ruptura amorosa",
          note: "Acompañar un quiebre de pareja pide cuidados parecidos y algunos distintos.",
        },
        {
          href: "/psicologo-soledad-aislamiento-chillan",
          label: "Soledad y aislamiento",
          note: "El duelo empuja a encerrarse. Esta página del sitio habla de ese retiro.",
        },
      ]}
      relatedGuides={[
        {
          href: "/guias/duelo-etapas-y-mitos",
          label: "Duelo: etapas y mitos",
          note: "Para no exigirle a la otra persona una escalera de etapas que no existe.",
        },
        {
          href: "/guias/si-un-cercano-habla-de-hacerse-dano",
          label: "Si un cercano habla de hacerse daño",
          note: "Si la pena incluye ideas de no querer seguir, cambia el tipo de ayuda.",
        },
      ]}
    >
      <p>
        Acompañar un duelo no es encontrar la frase que arregle la pérdida. Esa
        frase no existe. Lo que sí existe es una presencia que no apura, no
        compara y no desaparece cuando pasa el funeral. Esta guía es para ti,
        que quieres estar cerca de alguien que perdió a una persona, una
        relación o una vida que ya no va a volver a ser la de antes.
      </p>

      <h2>Llega, aunque no sepas qué decir</h2>
      <p>
        El silencio incómodo de quien acompaña suele doler menos que la
        ausencia. Mucha gente no escribe “para no molestar” y la persona en
        duelo lee ese silencio como olvido. Un mensaje corto alcanza: “Estoy
        pensando en ti y en el nombre de quien murió. No necesitas responder”.
        Usar el nombre importa. Los rodeos —“tu ser querido”, “lo que pasó”—
        a veces suenan a miedo de quien habla, no a cuidado.
      </p>
      <p>
        Si vas a la casa, no llegues solo a mirar cómo llora. Lleva algo
        concreto o haz una tarea visible: lavar loza, sacar basura, dejar comida
        que se pueda congelar, cuidar una guagua una hora, devolver un llamado
        de la isapre o del consultorio si te lo piden. Pregunta antes de
        reorganizar su cocina o su pieza. Ayudar no es tomar el control de su
        casa.
      </p>
      <p>
        “Cualquier cosa, me avisas” deja el trabajo en quien está agotado. Casi
        nadie avisa. Mejor ofrece dos opciones cerradas: “el jueves puedo
        llevar almuerzo o pasar a buscar a los niños al colegio. ¿Cuál te
        sirve?”. Si dice que ninguna, acepta el no y vuelve a ofrecer más
        adelante, sin reclamar.
      </p>

      <h2>Frases que suelen hacer daño</h2>
      <p>
        Se dicen con buena intención y aun así empujan a la persona a consolarte
        a ti o a callarse. Puedes retirarlas de tu repertorio:
      </p>
      <ul>
        <li>
          “Al menos ya no sufre” o “al menos tuvieron tantos años”. El “al
          menos” le discute el derecho a dolerle justo lo que perdió.
        </li>
        <li>
          “Sé exactamente cómo te sientes” y enseguida tu historia. Tu
          experiencia puede servir otro día, en pocas líneas, si te la piden. El
          primer impulso de comparar te deja a ti en el centro.
        </li>
        <li>
          “Dios lo necesitaba” o cualquier sentido cósmico que la persona no
          haya nombrado. Si ella tiene una fe, puede decirla. Si no, tu
          explicación sobra.
        </li>
        <li>
          “Tienes que ser fuerte por los niños”. Los niños necesitan adultos
          honestos, no una estatua. Se puede llorar delante de ellos y, al
          mismo tiempo, asegurarles que están cuidados.
        </li>
        <li>
          “Ya pasó un mes, ¿sigues igual?”. El calendario de quien mira desde
          afuera casi siempre va más rápido que el de quien perdió.
        </li>
      </ul>
      <p>
        En lugar de eso, sirven frases chicas: “qué heavy esto”, “lo extraño
        también” si es cierto, “no sé qué decir y quiero estar”, “cuéntame de
        él si te tinca”. Y sirve callar mientras la otra persona habla, sin
        completar la frase ni buscarle el lado bueno.
      </p>

      <h2>Escuchar el mismo relato</h2>
      <p>
        Vas a oír la misma escena más de una vez: el llamado, el hospital, la
        última conversación. No es que esté “atascada” por gusto. Repetir es
        una forma de creerse lo que pasó. Puedes preguntar detalles que ella
        quiera recordar —cómo se reía, qué comida odiaba— y también tolerar que
        un día no quiera hablar nada.
      </p>
      <p>
        No corrijas la culpa si viene en crudo, al menos no en el primer
        minuto. “Debí haber insistido con el médico” no se desarma con “no
        digas eso”. Puedes responder: “se nota cuánto te importa lo que hiciste
        y lo que no alcanzaste”. Más adelante, si la culpa se vuelve un loop que
        no la deja dormir, ahí tiene sentido invitarla a mirarla con calma o
        con alguien que sepa de duelo. La guía{" "}
        <Link href="/guias/duelo-etapas-y-mitos">
          etapas y mitos del duelo
        </Link>{" "}
        explica por qué no hay una etapa llamada “ya suéltalo”.
      </p>

      <h2>Las semanas de después, que son las más solas</h2>
      <p>
        Los primeros días hay gente, comida y mensajes. Después el grupo vuelve
        a su vida y quien perdió se queda con el feriado que no existe: un
        martes común en que la ausencia se nota más. Ahí tu mensaje vale el
        doble. Anota en el calendario el mes, el cumpleaños y la fecha de la
        muerte, y escribe ese día aunque haya pasado tiempo. No hace falta un
        discurso. “Hoy me acordé de su nombre” alcanza.
      </p>
      <p>
        Inclúyela en planes reales, con puerta de salida: “vamos a almorzar, si
        a la mitad te quieres ir, te llevo”. No la borres del grupo porque
        “está sensible”. Pregúntale si quiere que la inviten igual. Algunas
        personas necesitan la silla en la mesa. Otras necesitan que no insistas
        esa semana. Las dos respuestas pueden cambiar el mes siguiente.
      </p>
      <p>
        Si volvió a la pega y parece “normal”, no des por cerrado el duelo. Ir a
        trabajar es parte de orientarse a la vida práctica. No demuestra que ya
        no duele. Evita bromas sobre lo lento que está o sobre “ya se le pasó”.
        Si eres jefatura o compañero, una flexibilidad concreta —un plazo, una
        tarde libre— ayuda más que un “ánimo” en el pasillo.
      </p>

      <h2>Niños y adolescentes en la misma casa</h2>
      <p>
        Si acompañas a una familia con niños, no les mientas la causa. “Murió”
        se puede decir con voz calmada. “Está durmiendo para siempre” asusta a
        la hora de acostarse. Responde solo lo que preguntan, con verdad, y
        admite cuando no sabes. Los niños vuelven al juego rápido y eso no es
        olvido: es su manera de dosificar.
      </p>
      <p>
        Los adolescentes pueden verse irritables o pegados al teléfono. No lo
        leas automáticamente como frialdad. Ofrece presencia sin interrogatorio:
        llevarlo en el auto, comer algo al lado, decir que puede hablar cuando
        quiera y que también puede no hablar. Si deja de dormir, se aísla del
        todo o habla de no querer estar, no lo archives como “duelo de la edad”.
        Ahí aplica otra guía:{" "}
        <Link href="/guias/si-un-cercano-habla-de-hacerse-dano">
          si un cercano habla de hacerse daño
        </Link>
        .
      </p>

      <h2>Tu propio límite</h2>
      <p>
        Acompañar no es fundirte. Si la persona perdida también era importante
        para ti, tienes tu duelo además del rol de apoyo. Díselo con sencillez,
        sin pasarle la carga: “yo también estoy triste, y igual quiero
        acompañarte”. Busca a otro adulto para tu propio relato, para no usar a
        quien está más golpeado como único lugar donde lloras.
      </p>
      <p>
        Hay días en que no vas a poder ir. Avísalo, en lugar de desaparecer.
        Una amistad que dice “esta semana no puedo y el sábado sí” es más
        confiable que una que promete “cuenta conmigo para todo” y se esfuma.
      </p>
      <p>
        Si notas que la otra persona no come, no sale, bebe para apagarse o
        habla de querer morirse, tu rol cambia de compañía cotidiana a cuidado
        de un riesgo. No prometas guardar ese secreto. Quédate si es seguro,
        avisa a alguien de su confianza y usa las vías de urgencia si el peligro
        es inmediato. Quererla bien incluye no quedar como único responsable de
        su vida.
      </p>
      <p>
        El mejor acompañamiento, mirado en meses, es aburrido y fiel: comida,
        nombre de quien murió, una silla, permiso para estar mal y permiso para
        tener un rato bueno sin que tú lo celebras como “ya sanó”. La pérdida
        no se arregla. Se lleva con menos soledad cuando alguien se queda
        después de que los mensajes del primer día se enfrían.
      </p>
    </GuiaArticle>
  );
}
