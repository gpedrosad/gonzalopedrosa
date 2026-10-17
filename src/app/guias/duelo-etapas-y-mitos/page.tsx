import Link from "next/link";
import { GuiaArticle, guiaMetadata } from "../guia-article";

const title = "Duelo: etapas, mitos y qué sí ayuda";
const description =
  "Las cinco etapas no son una escalera obligatoria. Mitos del duelo, qué dice la psicología actual y cuándo el dolor pide más apoyo.";
const path = "/guias/duelo-etapas-y-mitos";

export const metadata = guiaMetadata({ title, description, path });

export default function GuiaDueloEtapasPage() {
  return (
    <GuiaArticle
      h1={title}
      breadcrumbLabel="Duelo: etapas y mitos"
      path={path}
      description={description}
      relatedSite={[
        {
          href: "/psicologo-duelo-chillan",
          label: "Duelo y pérdidas",
          note: "Página del sitio sobre acompañamiento cuando una pérdida se vuelve muy difícil de llevar.",
        },
        {
          href: "/psicologo-ruptura-amorosa-chillan",
          label: "Ruptura amorosa",
          note: "El fin de una relación también es una pérdida, aunque nadie haya muerto.",
        },
        {
          href: "/psicologo-depresion-chillan",
          label: "Depresión",
          note: "Para no confundir toda tristeza con depresión, ni descartar una depresión que se mezcla con el duelo.",
        },
      ]}
      relatedGuides={[
        {
          href: "/guias/acompanar-a-alguien-en-duelo",
          label: "Cómo acompañar a alguien en duelo",
          note: "Si tú no eres quien perdió, sino quien quiere estar cerca sin decir frases que duelen.",
        },
        {
          href: "/guias/psicologo-o-psiquiatra",
          label: "Psicólogo y psiquiatra",
          note: "Cuándo una pena sigue siendo duelo y cuándo conviene una evaluación médica.",
        },
      ]}
    >
      <p>
        No tienes que pasar por negación, rabia, negociación, depresión y
        aceptación, en ese orden, para hacer “bien” un duelo. Esa lista se
        volvió famosa y ayuda a algunas personas a ponerle nombre a lo que
        sienten. También ha servido para retar a otras: “ya deberías estar en
        aceptación”. El duelo no es un examen con etapas corregidas. Es la
        manera en que una persona se reacomoda después de una pérdida que
        importa.
      </p>

      <h2>De dónde salieron las cinco etapas</h2>
      <p>
        La psiquiatra Elisabeth Kübler-Ross describió esas reacciones en los
        años sesenta, sobre todo a partir de conversaciones con personas que
        enfrentaban su propia muerte, no como un reglamento para quien pierde a
        alguien. Con el tiempo el esquema saltó a charlas, películas y redes, y
        se aplicó a divorcios, despidos y cualquier quiebre. Kübler-Ross y
        quienes siguieron el tema advirtieron que no era una secuencia fija ni
        una meta que hubiera que completar.
      </p>
      <p>
        Negar al principio, enojarte, imaginar un “y si hubiera llegado antes”,
        hundirte en la pena o sentir un día más liviano son experiencias
        reales. El error es tratarlas como estaciones de metro: si hoy sientes
        rabia, no “retrocediste”; si un año después extrañas con fuerza en un
        cumpleaños, no “fracasaste la aceptación”. Las reacciones se mezclan,
        vuelven y a veces faltan. Hay quien no llora y está destrozado. Hay
        quien llora y, el mismo día, resuelve un trámite y se ríe con un
        recuerdo.
      </p>

      <h2>Qué se entiende mejor hoy</h2>
      <p>
        La psicología del duelo se alejó de la escalera y se acercó a dos ideas
        que puedes usar sin transformarlas en otra obligación.
      </p>
      <p>
        La primera es el proceso dual, descrito por Margaret Stroebe y Henk
        Schut. El duelo oscila. Hay momentos orientados a la pérdida: mirar
        fotos, llorar, hablar de la persona, sentir el hueco. Hay momentos
        orientados a la restauración: cocinar, volver a la pega, pagar cuentas,
        aprender un trámite que antes hacía otro. Ir y volver entre esos dos
        polos es esperable. Quedarte solo en el dolor agota. Quedarte solo en
        “seguir funcionando” sin tocar la pérdida también pasa la cuenta, a
        veces más adelante.
      </p>
      <p>
        La segunda idea son los vínculos que continúan. Durante años se dijo
        que sanar era “soltar” y cerrar el capítulo. Investigadores como Klass,
        Silverman y Nickman mostraron algo más cercano a lo que las familias ya
        saben: mucha gente sana mantiene un lazo. Hablan con quien murió en la
        cabeza, guardan un objeto, le cuentan noticias a los hijos. Eso no es
        negación automática. Se vuelve problema cuando el lazo impide por
        completo comer, trabajar, cuidar a otros o aceptar que la muerte
        ocurrió.
      </p>
      <p>
        Otro marco útil, el de William Worden, habla de tareas y no de etapas:
        aceptar que la pérdida es real, atravesar el dolor en lugar de
        esquivarlo siempre, ajustarte a una vida donde esa persona no está y
        encontrar una forma de seguir vinculado sin quedarte congelado. Son
        direcciones, no un plazo. Nadie te pone nota si una tarea te toma más
        que otra.
      </p>

      <h2>Mitos que pesan encima del dolor</h2>
      <h3>Hay una fecha en que se supera</h3>
      <p>
        El año, los tres meses o “cuando pases el primer aniversario” son marcas
        culturales, no un cierre biológico. El primer ciclo de fechas —el
        cumpleaños, las fiestas, el día de la muerte— suele ser duro porque es
        la primera vez que el calendario llega sin esa persona. Después el dolor
        puede cambiar de forma: menos constante, más en oleadas. Que una oleada
        te tome por sorpresa a los dos años no significa que volviste al día
        uno.
      </p>
      <h3>Si no lloras, no quieres</h3>
      <p>
        El llanto es una vía, no la prueba del amor. Hay quien se queda en
        silencio, se mueve, se enoja o se pone práctico. Exigirle lágrimas a
        alguien, o exigírtelas, agrega vergüenza a la pena. Lo mismo al revés:
        llorar en el supermercado no es “estar mal de la cabeza”.
      </p>
      <h3>Hay que ser fuerte y no hablar de eso</h3>
      <p>
        Aguantar solo se confunde con fortaleza. Contar el mismo recuerdo varias
        veces es una forma en que la mente asimila lo que pasó. Si la otra
        persona puede escuchar sin corregirte, ese relato ayuda. Si nadie
        alrededor tolera el nombre de quien murió, el duelo se esconde y se
        vuelve más solitario. La guía{" "}
        <Link href="/guias/acompanar-a-alguien-en-duelo">
          cómo acompañar a alguien en duelo
        </Link>{" "}
        está escrita para quien quiere estar cerca sin apurar el final.
      </p>
      <h3>Hay que guardar todo o botar todo</h3>
      <p>
        Ni el altar permanente ni la limpieza del clóset al día siguiente son
        reglas. Algunas personas necesitan ver un objeto. Otras necesitan que
        la pieza deje de estar intacta para poder dormir. Puedes guardar una
        cosa con sentido y soltar otras cuando tú elijas, no cuando alguien
        decida que “ya es hora de seguir”.
      </p>
      <h3>Los niños no se dan cuenta</h3>
      <p>
        Los niños hacen duelo con la edad que tienen. Preguntan cosas concretas,
        juegan la muerte, parecen olvidar y vuelven a preguntar al rato. Les
        sirve un lenguaje claro: la persona murió, no “se fue a dormir” ni “se
        fue de viaje”. Esas frases generan miedo a dormirse o a que otros no
        vuelvan del trabajo. Pueden participar de un rito breve si quieren, sin
        obligarlos a hablar bonito delante de los adultos.
      </p>
      <h3>Solo cuenta la muerte</h3>
      <p>
        También se duela un divorcio, un país que dejaste, un embarazo que no
        llegó a término, una salud que cambió, un trabajo que ordenaba tus días
        o un familiar que sigue vivo y ya no te reconoce. Esas pérdidas a veces
        duelen con menos permiso social: nadie lleva comida ni habla del tema.
        El dolor no necesita un certificado para ser real. Sí es distinto de un
        duelo por muerte cuando se habla de diagnósticos clínicos específicos,
        que se reservan para la muerte de alguien cercano.
      </p>

      <h2>Cuando el dolor se queda y no deja vivir</h2>
      <p>
        Extrañar, llorar y tener días malos durante mucho tiempo puede seguir
        siendo duelo, no una falla. Hay otra situación: la pena se mantiene tan
        intensa que, pasado un tiempo largo, la persona no logra retomar lo
        mínimo de su vida. Los criterios actuales de duelo prolongado, en
        adultos, miran si esa respuesta persiste al menos doce meses después de
        la muerte y si incluye un anhelo muy marcado, dificultad para aceptar la
        pérdida y un deterioro claro en el día a día. En niños y adolescentes el
        plazo que se considera es más corto, del orden de seis meses. Esos
        números no son una meta personal ni un cronómetro para tu familia. Son
        una forma en que la clínica distingue un duelo doloroso de un cuadro que
        puede necesitar un abordaje específico.
      </p>
      <p>
        También conviene pedir evaluación si aparecen ideas de hacerte daño, si
        dejas de comer o de salir por completo, si bebes o usas otra sustancia
        para no sentir, o si junto con la pena hay un bajón que ya no se parece
        solo a extrañar: vacío todo el día, culpa que no tiene que ver con la
        muerte, incapacidad de sentir interés por nada. La depresión y el duelo
        pueden parecerse y pueden coincidir. Un profesional ayuda a separarlas.
        Un artículo no puede hacerlo por ti.
      </p>

      <h2>Qué sí suele aliviar, sin apurar</h2>
      <p>
        Vuelve a cosas pequeñas y repetibles: una comida, una caminata, una
        hora de sueño protegida como puedas. Habla de la persona con quien
        tolere el relato, no solo de “cómo estás”, que se contesta con un “bien”
        automático. Marca las fechas que sabes que van a doler y decide antes
        si quieres compañía o silencio. Mover el cuerpo ayuda a algunos; a otros
        los agota. Prueba y ajusta.
      </p>
      <p>
        Si la culpa te persigue —“debí llamar”, “debí insistir en el médico”—
        escríbela y mírala con alguien de confianza. Parte de esa culpa es amor
        que no tuvo dónde ir. Otra parte es un pensamiento que se puede revisar
        sin traicionar a quien murió. Perdonarte no borra a la persona.
      </p>
      <p>
        El duelo no se gradúa. Se va haciendo más habitable. Algunos días vas a
        funcionar y, al pasar por un olor o una canción, se te va a cerrar el
        pecho. Eso cabe en una vida que sigue. Si el pecho no abre nunca y la
        vida se detuvo, no estás obligado a esperar solo a que el tiempo “haga
        lo suyo”. El tiempo solo no ordena un duelo que se complicó. La compañía
        adecuada, profesional o no, sí puede hacer una diferencia.
      </p>
    </GuiaArticle>
  );
}
