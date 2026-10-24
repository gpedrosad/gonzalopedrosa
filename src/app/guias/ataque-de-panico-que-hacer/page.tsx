import Link from "next/link";
import { GuiaArticle, guiaMetadata } from "../guia-article";

const title = "Ataque de pánico: qué hacer en el momento";
const description =
  "Qué es un ataque de pánico, qué hacer mientras sube el miedo y cuándo necesitas una urgencia médica. Pasos claros para ese rato.";
const path = "/guias/ataque-de-panico-que-hacer";

export const metadata = guiaMetadata({ title, description, path });

export default function GuiaAtaquePanicoPage() {
  return (
    <GuiaArticle
      h1={title}
      breadcrumbLabel="Ataque de pánico"
      path={path}
      description={description}
      relatedSite={[
        {
          href: "/psicologo-crisis-de-panico-chillan",
          label: "Crisis de pánico y agorafobia",
          note: "La crisis es el episodio. En la misma página está la agorafobia: evitar lugares por miedo a que vuelva y no poder salir.",
        },
        {
          href: "/psicologo-ansiedad-chillan",
          label: "Ansiedad",
          note: "Contexto sobre la preocupación y la activación que a veces conviven con el pánico.",
        },
        {
          href: "/ayuda-psicologica-urgente-chillan",
          label: "Ayuda urgente",
          note: "Qué cubre y qué no cubre una hora pronto, distinto de una urgencia médica.",
        },
      ]}
      relatedGuides={[
        {
          href: "/preguntas/que-es-un-ataque-de-panico",
          label: "Qué es un ataque de pánico",
          note: "La definición del pico, distinta de los pasos para atravesarlo.",
        },
        {
          href: "/guias/psicologo-o-psiquiatra",
          label: "Psicólogo y psiquiatra",
          note: "Si después de la crisis quieres entender quién evalúa el cuerpo y quién el miedo.",
        },
        {
          href: "/guias/si-un-cercano-habla-de-hacerse-dano",
          label: "Si un cercano habla de hacerse daño",
          note: "El pánico asusta, pero no es lo mismo que una crisis con ideas de suicidio.",
        },
      ]}
    >
      <p>
        Un ataque de pánico es una subida brusca de miedo o de malestar muy
        intenso que alcanza un pico en minutos. El corazón se dispara, falta el
        aire, puedes sentir mareo, temblor, hormigueo, náuseas o la certeza de
        que te vas a desmayar, volver loco o morir. Aunque la sensación es de
        emergencia, en la mayoría de las personas que ya saben que se trata de
        pánico el episodio no daña el corazón ni deja una lesión. Esta guía es
        para ese rato. No reemplaza una revisión médica, sobre todo si es la
        primera vez.
      </p>

      <h2>Cómo reconocerlo mientras ocurre</h2>
      <p>
        Parte de golpe o sube en muy poco tiempo, no como una preocupación que
        se arrastra toda la tarde. Pueden aparecer palpitaciones, sudor, dolor
        o presión en el pecho, sensación de ahogo, mareo, calor o escalofríos,
        irrealidad —como si el lugar o tú mismo estuvieran lejos— y miedo a
        perder el control. A veces hay un detonante claro: un metro lleno, una
        noticia, un recuerdo. A veces no hay ninguno, y eso asusta más, porque
        la mente busca una causa grave para explicar el cuerpo.
      </p>
      <p>
        La parte más aguda suele ceder en un rato, aunque no hay un reloj igual
        para todo el mundo. Después puedes quedar cansado, tembloroso o con
        miedo de que vuelva. Ese resto no significa que el peligro siga: es el
        cuerpo bajando de una alarma que se encendió completa.
      </p>
      <p>
        No uses esta descripción para autodiagnosticarte en medio del miedo. Si
        el dolor de pecho es nuevo, muy intenso, se va al brazo o a la
        mandíbula, si te falta el aire de una forma distinta a otras veces, si
        te desmayas, si estás embarazada o tienes una enfermedad cardíaca o
        respiratoria, trátalo como urgencia médica. El pánico imita problemas
        físicos. La primera vez, o cuando el episodio no se parece a los
        anteriores, un servicio de urgencia es el lugar correcto. En Chile el
        número de urgencia de salud es el 131.
      </p>

      <h2>Qué hacer en los primeros minutos</h2>
      <p>
        Si ya te han evaluado y sabes que estos episodios son pánico, el
        objetivo no es ganarles en una pelea. Es dejar de echarle combustible y
        esperar el pico sin huir a ciegas.
      </p>
      <ol>
        <li>
          Quédate en un lugar seguro si puedes. Sentarte, apoyarte en una pared
          o bajar el ritmo de lo que estabas haciendo vale más que correr a la
          calle. Huir cada vez le enseña al miedo que el lugar era peligroso.
        </li>
        <li>
          Di, en voz baja o para ti, una frase corta y cierta: “es un ataque de
          pánico, es horrible y se pasa”. No hace falta que te lo creas al
          cien por cien. La frase compite con “me estoy muriendo”, que es el
          pensamiento que más acelera el cuerpo.
        </li>
        <li>
          Baja el ritmo de la respiración sin forzar una técnica perfecta. El
          aire entrecortado y muy rápido saca demasiado dióxido de carbono y
          puede aumentar el mareo y el hormigueo. Prueba inhalar por la nariz
          con suavidad y alargar un poco la salida, como si soplaras una vela
          sin apagarla. Si contar te ordena, un ciclo lento te sirve. Si contar
          te angustia más, suelta el número y quédate solo con la salida larga.
        </li>
        <li>
          Apoya los sentidos en algo concreto. Nombra cinco cosas que ves, cuatro
          que puedes tocar, tres sonidos, dos olores y un sabor, o repite solo
          el primer paso si el resto es demasiado. También sirve sentir los pies
          en el suelo o las manos en los muslos y describir la temperatura.
        </li>
        <li>
          No pelees cada síntoma. El temblor y el pulso rápido son
          consecuencias de la adrenalina. Observarlos con menos juicio —“el
          corazón va rápido, como en una corrida”— suele durar menos que
          revisar el pulso cada diez segundos.
        </li>
      </ol>
      <p>
        Si hay otra persona cerca, puedes pedirle que se quede, que hable
        despacio y que no te llene de preguntas. Una frase útil para decirle es:
        “quédate conmigo, no necesito que lo soluciones”. Quien acompaña no
        tiene que entender toda la psicología del pánico en ese minuto.
      </p>

      <h2>Qué conviene no hacer en ese instante</h2>
      <p>
        No respires dentro de una bolsa de papel. Es un consejo viejo y puede
        ser peligroso si el malestar no es pánico o si ya te falta oxígeno. La
        salida larga y suave busca lo mismo que la gente intentaba con la bolsa,
        sin ese riesgo.
      </p>
      <p>
        No tomes decisiones grandes mientras el miedo está en el techo: renunciar,
        terminar una relación, conducir apurado “para llegar a la casa como sea”
        si ya estás mareado. Si manejas, oríllate cuando sea seguro y espera a
        que baje. No combines el episodio con más café, alcohol o una pastilla
        que nadie te indicó para “cortarlo ya”.
      </p>
      <p>
        Evita revisarte en internet síntoma por síntoma en plena crisis. Cada
        resultado grave confirma el miedo y alarga la alarma. Esa búsqueda
        puede esperar a que estés más estable, y aun entonces conviene filtrarla
        con un profesional si el episodio fue nuevo.
      </p>

      <h2>Cuando empieza a bajar</h2>
      <p>
        Quédate un poco más en el lugar, si es seguro, hasta que puedas caminar
        o hablar con frases completas. Toma agua, afloja la ropa si te aprieta y
        no te exijas volver al rendimiento de inmediato. Anota, cuando puedas,
        hora, dónde estabas, qué habías tomado (café, alcohol, poco sueño) y qué
        pensamiento apareció primero. Ese registro no es para obsesionarte: es
        para ver si hay un patrón, no una sentencia.
      </p>
      <p>
        Avísale a alguien de confianza si te quedaste muy asustado. Estar solo
        con la idea “y si vuelve en la noche” mantiene el cuerpo en guardia.
        Dormir esa noche puede costar. Un episodio no significa que todas las
        noches serán iguales.
      </p>

      <h2>El miedo a que vuelva</h2>
      <p>
        Muchas personas quedan más limitadas por el temor a otra crisis que por
        la crisis misma. Empiezan a evitar la micro, el supermercado, el
        ejercicio o cualquier lugar donde la primera vez fue difícil. El corazón
        se acelera por subir una escalera y la mente dice “ya viene otra”. Ese
        círculo tiene nombre cuando se instala: a veces trastorno de pánico, a
        veces{" "}
        <Link href="/psicologo-crisis-de-panico-chillan">agorafobia</Link> si el
        miedo a no poder salir o pedir ayuda cierra lugares. Reconocerlo temprano
        ayuda a no organizar toda la semana alrededor del “por si acaso”.
      </p>
      <p>
        Entre crisis, lo que más suele echar leña es dormir poco, vivir a café,
        saltarse comidas y chequear el pulso todo el día. Ninguno de esos
        hábitos “causa” solo un trastorno, y ordenarlos baja el ruido del
        cuerpo. El ejercicio suave, cuando un médico no te lo ha prohibido,
        acostumbra al pulso alto en un contexto que no es peligro. No lo uses
        como prueba de valor el mismo día de una crisis fuerte.
      </p>
      <p>
        Si las crisis se repiten, si evitaste actividades importantes o si el
        miedo ya decide por ti, una evaluación psicológica tiene sentido. Hay
        abordajes con respaldo, entre ellos la terapia cognitivo-conductual,
        que explican la alarma y trabajan la evitación de forma gradual. Un
        médico puede descartar otras causas y, en algunos casos, conversar de
        medicación. Esta página no te dice cuál te toca a ti. Sí te dice que
        aguantar solo, por vergüenza, alarga el aprendizaje de “el mundo no es
        seguro”.
      </p>

      <h2>Si le pasa a alguien que está contigo</h2>
      <p>
        Quédate, habla lento y no minimices con “no es nada”. Para esa persona
        es mucho. Recuérdale que estás ahí, ayúdala a sentarse y a soltar la
        respiración sin ordenarle como si fuera una clase. Pregunta si es la
        primera vez o si un médico ya lo atribuyó a pánico. Si es la primera, si
        hay dolor de pecho distinto, confusión, desmayo o dificultad seria para
        respirar, llama al 131 en lugar de esperar a que “se le pase el susto”.
      </p>
      <p>
        No la dejes manejando ni la presiones a “hacer como si nada” delante de
        otros. Cuando baje, puedes decir que estos episodios se pueden evaluar
        y que no tiene que explicarte toda su historia en ese minuto. El
        acompañamiento de esa hora es presencia. El plan de las semanas
        siguientes es otra conversación, con más calma, y con profesionales si
        hace falta.
      </p>
    </GuiaArticle>
  );
}
