import Link from "next/link";
import { GuiaArticle, guiaMetadata } from "../guia-article";

const title = "Ayudar a un familiar con adicción al juego";
const description =
  "Señales de ludopatía en un cercano, cómo conversar sin pelear y cómo cuidar la plata y tu propio desgaste. Información general.";
const path = "/guias/familiar-con-ludopatia";

export const metadata = guiaMetadata({ title, description, path });

export default function GuiaFamiliarLudopatiaPage() {
  return (
    <GuiaArticle
      h1={title}
      breadcrumbLabel="Familiar con ludopatía"
      path={path}
      description={description}
      relatedSite={[
        {
          href: "/tratamiento-ludopatia-chillan",
          label: "Ludopatía y adicción al juego",
          note: "Contexto sobre el problema y el tipo de trabajo terapéutico que se describe en el sitio.",
        },
        {
          href: "/psicologo-adicciones-chillan",
          label: "Adicciones",
          note: "Página del sitio sobre consumo y conductas que se vuelven difíciles de parar.",
        },
        {
          href: "/orientacion-padres-chillan",
          label: "Orientación a padres",
          note: "Si en la casa hay niños o adolescentes y necesitas ordenar cómo hablar del tema con ellos.",
        },
      ]}
      relatedGuides={[
        {
          href: "/guias/si-un-cercano-habla-de-hacerse-dano",
          label: "Si un cercano habla de hacerse daño",
          note: "Qué hacer cuando el malestar incluye ideas de suicidio o de lastimarse.",
        },
        {
          href: "/guias/psicologo-o-psiquiatra",
          label: "Psicólogo y psiquiatra",
          note: "Para qué sirve cada profesional si la familia está decidiendo a quién consultar.",
        },
        {
          href: "/guias/familiar-con-problema-de-alcohol",
          label: "Familiar con problema de alcohol",
          note: "Si el patrón que ves en casa es la bebida y no la apuesta.",
        },
      ]}
    >
      <p>
        Si alguien de tu familia juega plata y ya no puede parar, lo que ves
        desde afuera suele ser mentira, deudas y un humor que cambia según ganó
        o perdió. Ayudar no es vigilar el celular las 24 horas ni pagar la
        próxima apuesta “por última vez”. Esta guía ordena qué es la ludopatía,
        qué señales importan y qué puedes hacer sin cargarte un problema que no
        controlas tú.
      </p>

      <h2>Qué es la adicción al juego</h2>
      <p>
        La ludopatía, o trastorno por juego de apuestas, es una adicción
        conductual. No hay una sustancia que entre al cuerpo, pero el juego
        empieza a ocupar el mismo lugar: la persona piensa en apostar, necesita
        montos más altos para sentir lo mismo, se irrita si intenta parar y
        sigue aunque ya haya perdido pega, pareja o ahorros. Los manuales
        clínicos la describen junto a otros trastornos adictivos, no como un
        “vicio de flojo” ni como falta de voluntad simple.
      </p>
      <p>
        El formato cambia y el mecanismo se parece. Puede ser un casino, un
        local de tragamonedas, póker, raspes o, cada vez más, apuestas
        deportivas y casinos en el teléfono. El crédito de la app, el bono de
        bienvenida y la sensación de que la próxima va a recuperar lo perdido
        hacen que el daño avance rápido, a veces en semanas.
      </p>
      <p>
        Una racha de apuestas en un partido o una noche en el casino no es, por
        sí sola, un diagnóstico. El problema aparece cuando el juego se
        sostiene en el tiempo, la persona pierde el control de cuánto y cuándo
        juega, y eso le cuesta relaciones, trabajo, estudio o estabilidad
        económica. Tú puedes describir lo que ves. Ponerle el nombre clínico le
        corresponde a un profesional que evalúe a la persona, no a una
        discusión de sobremesa.
      </p>

      <h2>Señales que la familia suele notar primero</h2>
      <p>
        Casi nadie llega contando el monto real. Lo habitual es enterarte por
        un hueco: una cuenta que no cierra, un préstamo a un amigo, un sueldo
        que “se fue en un gasto” que no puedes ubicar. Estas señales no
        confirman solas un trastorno, y algunas pueden deberse a otra cosa.
        Juntas, y repetidas, merecen una conversación seria.
      </p>
      <ul>
        <li>
          Pide plata prestada y la explicación cambia cada vez, o pide que no
          le cuentes al resto de la familia.
        </li>
        <li>
          Esconde cartolas, boletas o el historial del banco. Se enoja si
          preguntas por un cargo.
        </li>
        <li>
          Después de perder, vuelve a jugar enseguida para “recuperar”. Esa
          persecución de la pérdida es una de las marcas más claras.
        </li>
        <li>
          El ánimo depende del resultado: euforia breve si gana, irritabilidad,
          silencio o promesas enormes si pierde.
        </li>
        <li>
          Deja de dormir, come mal o se aísla cuando hay un partido, una carrera
          o una racha en una app.
        </li>
        <li>
          Ha intentado parar o ponerse un límite y el límite dura poco. A veces
          borra la aplicación y la vuelve a instalar al día siguiente.
        </li>
        <li>
          Aparecen deudas con casas comerciales, familiares o prestamistas, o
          vende cosas sin una razón que cuadre.
        </li>
      </ul>
      <p>
        También mira el efecto en la casa, no solo en la persona. Si tú estás
        revisando el correo a escondidas, si los niños escuchan peleas por
        plata todas las semanas o si dejaste de pagar algo básico para cubrir
        un hoyo del juego, el problema ya no es “un hobby”. Es un asunto de la
        familia, aunque la conducta sea de una sola persona. Si lo que ves en
        casa es el alcohol y no el juego, la guía de{" "}
        <Link href="/guias/familiar-con-problema-de-alcohol">
          un familiar con problema de alcohol
        </Link>{" "}
        recorre otra conducta con la misma pregunta: qué puedes hacer tú y qué
        no te toca cargar.
      </p>

      <h2>Por qué pelear, controlar o prestar plata suele salir mal</h2>
      <p>
        El impulso, cuando tienes miedo, es cerrar el grifo: quitarle el
        teléfono, gritar el saldo de la deuda en frente de todos o pasar la
        tarjeta “para que no lo molesten”. Esas tres salidas se entienden y,
        sostenidas en el tiempo, suelen empeorar el cuadro.
      </p>
      <p>
        Prestar plata para tapar una deuda de juego se llama, en la práctica,
        facilitar que el ciclo siga. La deuda desaparece un rato, el alivio es
        real, y el cerebro aprende que alguien va a llegar a salvar la
        emergencia. Lo mismo pasa si pagas el arriendo “solo este mes” mientras
        el sueldo se va en apuestas. Proteger un techo o la comida de los niños
        es distinto: eso es cuidar a quienes no eligieron el juego. Pagar la
        apuesta, o la deuda que la apuesta creó, es otra cosa.
      </p>
      <p>
        Controlar el celular sin acuerdo puede bajar el juego unos días y subir
        la pelea. La persona abre otra cuenta, usa el equipo de un amigo o
        juega en el trabajo. El secreto crece. Una conversación sobre límites
        de plata compartida —tarjetas, claves, transferencias— es más útil que
        una vigilancia que no vas a poder mantener.
      </p>
      <p>
        Los sermones en caliente tampoco entran. Cuando acaba de perder, está
        avergonzada o a la defensiva. Escucha poco. Si puedes, espera a un
        momento sobrio, sin público, y habla de hechos: fechas, montos, lo que
        dejó de pagarse. Los insultos (“eres un irresponsable”) se contestan
        con más mentira. Los hechos son más difíciles de discutir.
      </p>

      <h2>Cómo puede ser una conversación útil</h2>
      <p>
        Elige un rato en que ninguno esté apurado ni en medio de una pérdida.
        Parte por lo que te importa de la persona, no por el rótulo. Puedes
        decir algo concreto: “estos tres meses pediste plata el día 5, el 18 y
        la semana pasada, y las tres veces había una apuesta de por medio. Me
        asusta lo que está pasando con la casa”. Un ejemplo vale más que “siempre
        mientes”.
      </p>
      <p>
        Pregunta cómo lo está viviendo ella o él, y aguanta el silencio. Muchas
        personas con este problema ya se odian por dentro. Si solo reciben
        acusación, se defienden. Si escuchan que viste el daño y que no vas a
        cubrir la próxima pérdida, a veces aparece un pedazo de verdad.
      </p>
      <p>
        Deja claro qué sí vas a hacer y qué no. Por ejemplo: no vas a prestar
        más plata para juego ni para deudas de juego; sí puedes acompañarla a
        pedir hora con un profesional que trabaje adicciones; sí vas a separar
        las cuentas del hogar. No prometas “si dejas de jugar, olvido todo”.
        Esa promesa te deja sin margen cuando hay una recaída, y las recaídas
        forman parte de muchas recuperaciones.
      </p>
      <p>
        Si se cierra, no conviertas cada comida en un juicio. Puedes repetir el
        límite con calma y dejar la puerta abierta: “cuando quieras hablar de
        ayuda, yo estoy”. Insistir todos los días con el mismo discurso deja de
        oírse. Un límite que se cumple se escucha más fuerte que diez discursos.
      </p>

      <h2>Cuidar la economía de la casa</h2>
      <p>
        Mientras el juego sigue, protege lo que es de todos. Si hay cuenta
        conjunta, evalúa separarla. Cambia claves que la otra persona no
        necesite. No dejes tarjetas a la vista ni guardadas en un cajón que
        ambos usan. Si das una mensualidad para gastos, que sea un monto que
        puedas perder sin quedar sin comida, y no la aumentes porque “se acabó
        el martes”.
      </p>
      <p>
        Anota deudas, fechas y a quién se le debe. Ese registro te sirve si
        más adelante hay que ordenar pagos, hablar con un banco o, en casos
        graves, consultar a alguien que sepa de deudas. Un psicólogo no
        reemplaza esa orientación económica o legal. Son problemas distintos
        que a veces viajan juntos.
      </p>
      <p>
        En Chile las reglas de casinos y de plataformas de apuesta en línea
        cambian. Hay vías para limitar el acceso a algunos juegos, y conviene
        leer la información oficial vigente antes de dar un paso, en lugar de
        confiar en un tutorial viejo o en lo que dice la misma aplicación. Si
        la persona quiere autoexcluirse, acompañarla en ese trámite puede ser
        más útil que prohibirle el teléfono.
      </p>

      <h2>Tu desgaste también cuenta</h2>
      <p>
        Quien vive al lado de una adicción al juego suele cargar vergüenza,
        rabia y la idea de que “si yo hubiera controlado mejor, esto no
        pasaba”. Esa idea es injusta. Tú no moviste la mano que apostó. Sí
        puedes haber tapado consecuencias sin darte cuenta, y puedes dejar de
        hacerlo desde ahora.
      </p>
      <p>
        Busca a alguien con quien hablar fuera de la casa: un amigo que sepa
        guardar un secreto, un grupo de familiares de personas con problemas de
        juego, o un espacio profesional para ti. No tienes que esperar a que
        la otra persona “toque fondo” para cuidar tu sueño, tu pega y tu
        salud. El secreto familiar aísla. Contarlo con cuidado, a alguien de
        confianza, baja la carga.
      </p>
      <p>
        Si hay niños o adolescentes, no los uses de mensajeros ni de espías.
        Explícales, con palabras simples y sin detalles de montos, que hay un
        problema de plata y de juego, que los adultos lo están viendo y que
        ellos no tienen que arreglarlo. Un niño que escucha “no le digas a
        nadie” queda sosteniendo un miedo que no le corresponde.
      </p>

      <h2>Qué no depende de ti</h2>
      <p>
        Puedes ofrecer ayuda, poner límites y dejar de financiar el juego. No
        puedes obligar a otra persona adulta a querer parar. El cambio sostiene
        cuando ella reconoce el daño y acepta un plan: a veces terapia, a veces
        un grupo de pares, a veces ambas cosas, y a veces también una
        evaluación médica si hay depresión, ansiedad intensa u otro problema al
        lado. Si solo cambia porque tú amenazaste, el cambio suele durar lo que
        dura la amenaza.
      </p>
      <p>
        Si aparecen amenazas, violencia, o la persona dice que se va a hacer
        daño si no le pasas plata, eso ya no es una negociación de deudas. Tu
        seguridad y la de quien viva en la casa van primero. No entregues plata
        bajo amenaza. Aléjate del lugar si hace falta y usa las vías de
        urgencia. La guía{" "}
        <Link href="/guias/si-un-cercano-habla-de-hacerse-dano">
          si un cercano habla de hacerse daño
        </Link>{" "}
        resume qué hacer cuando el riesgo es ese, sin convertir el miedo en un
        motivo para seguir prestando.
      </p>
      <p>
        Ayudar, en este tema, se parece más a sostener un límite claro que a
        rescatar. La persona puede enojarse. Puede decir que no confías. Puede
        mejorar y volver a caer. Tu tarea no es ganar esa pelea en una noche.
        Es dejar de ser el colchón de la apuesta y, si ella lo pide de verdad,
        caminar al lado mientras busca ayuda.
      </p>
    </GuiaArticle>
  );
}
