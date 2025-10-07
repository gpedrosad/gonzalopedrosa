// src/app/components/Reviews.tsx
"use client";

import React from "react";
import { AiFillStar } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  type Variants,
} from "framer-motion";

interface Review {
  id: string;
  review_date: string; // ISO
  review_description: string;
  review_stars: number; // 1..5
  user_full_name: string;
}

/* ────────────────────────────────────────────────────────────────────────────
   Anti-scraper helpers
   ──────────────────────────────────────────────────────────────────────────── */
function isLikelyBotUA(ua: string) {
  const needles = [
    "facebookexternalhit",
    "facebot",
    "instagram",
    "meta",
    "whatsapp",
    "slackbot",
    "discordbot",
    "linkedinbot",
    "pinterest",
    "crawler",
    "spider",
    "bot",
    "preview",
  ];
  ua = ua.toLowerCase();
  return needles.some((n) => ua.includes(n));
}

// Espera interacción humana o un pequeño delay
function useHumanInteraction(delayMs = 420) {
  const [interacted, setInteracted] = React.useState(false);
  React.useEffect(() => {
    const timer = window.setTimeout(() => setInteracted(true), delayMs);
    const mark = () => {
      setInteracted(true);
      clearTimeout(timer);
    };
    window.addEventListener("mousemove", mark, { once: true, passive: true });
    window.addEventListener("touchstart", mark, { once: true, passive: true });
    window.addEventListener("keydown", mark, { once: true, passive: true });
    window.addEventListener("scroll", mark, { once: true, passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", mark);
      window.removeEventListener("touchstart", mark);
      window.removeEventListener("keydown", mark);
      window.removeEventListener("scroll", mark);
    };
  }, [delayMs]);
  return interacted;
}

/** Formatea a dd/mm/aa local (mantengo tu formato original) */
function formatDate(iso: string) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString();
  } catch {
    return "";
  }
}

const Reviews: React.FC = () => {
  // === DATA ORIGINAL (no modificada) ===
  const reviews: Review[] = [
    {
      id: "14",
      review_date: "2025-04-15T11:30:00Z",
      review_description:
        "Me sentí muy cómoda con las sesiones me ayudó a superar y cambiar muchas cosas, recomiendo mucho este servicio ",
      review_stars: 5,
      user_full_name: "Sofia Hernandez",
    },
    {
      id: "13",
      review_date: "2025-04-10T10:45:00Z",
      review_description:
        "Un Excelente profesional Gonzalo preocupado de sus paciente en todo momento ",
      review_stars: 5,
      user_full_name: "Yocelyn",
    },
    {
      id: "12",
      review_date: "2025-04-05T09:30:00Z",
      review_description:
        "Gonzalo atiende a mi hijo adolescente hace varios meses. Mi hijo está muy contento con sus sesiones. Lo recomiendo 100%. Es responsable, puntual y muy comprometido con su paciente. A mi hijo le da mucha confianza conversar con él. Es un 7. El está mucho mejor y yo muy contenta.",
      review_stars: 5,
      user_full_name: "Claudia",
    },
    {
      id: "11",
      review_date: "2025-03-30T11:00:00Z",
      review_description:
        " Conoci a Gonzalo en un momento de mucho conflicto interno, y el con su alto grado de compromiso y capacidad de escucha, fue capaz de ayudarme a ver de manera distinta lo que estaba viviendo, haciendo muy grata cada sesión .. es una persona agradable y un excelente profesional.\nLo recomiendo al 100%",
      review_stars: 5,
      user_full_name: "Karen",
    },
    {
      id: "10",
      review_date: "2025-03-25T10:15:00Z",
      review_description:
        "Gonzalo es un excelente profesional, acudí a el cuando mi vida era un caos, había tocado fondo y creí que de ahí no saldría, me aconsejo, me ayudó y estuvo para mí sin importar horarios ni dinero, abrió mi mente y me hizo ver la vida de una manera distinta y sin lugar a dudas su terapia fue uno de los pilares fundamentales para poder salir de ahí.\nAgradezco mucho encontrarlo y obviamente recomendaría su servicio. ",
      review_stars: 5,
      user_full_name: "Valeska Bravo Montecinos",
    },
    {
      id: "9",
      review_date: "2025-03-20T13:45:00Z",
      review_description:
        "Muy buen profesional. Empático. Lo recomiendo",
      review_stars: 5,
      user_full_name: "Emiliana Vera",
    },
    {
      id: "8",
      review_date: "2025-03-15T16:30:00Z",
      review_description:
        "En lo personal siento que Gonzalo fue de gran ayuda en mi búsqueda como persona, para encontrar mi paz mental y darme cuenta del valor que tengo solo por ser persona, además tenía instaurada una forma muy agresiva de mi ser y el busca a través de la contra pregunta ver las cosas desde otro punto de vista, dando a conocer tus potencial y no victimizándote. En resumen las terapias con el me ayudaron a:\n*Establecer límites y reconocer personas manipuladoras\n* valorar quién soy como mujer\n* tomar control de mi vida y de aquellos que están a mi cargo\n* poder ver las cosas de varios puntos de vista y no uno solo.\nEn conclusión hoy puedo disfrutar más consciente de la vida, valorándome como persona, estableciendo límites, saber donde quiero estar y estar con la persona que me quiera, además de potenciar mi fuerza para salir de relaciones tóxicas. 👍",
      review_stars: 5,
      user_full_name: "Evelyn",
    },
    {
      id: "7",
      review_date: "2025-03-10T14:00:00Z",
      review_description:
        "Exelente profesional me encanto compartir mi vida con el me ayudo mucho!!",
      review_stars: 5,
      user_full_name: "Daniela Quevedo",
    },
    {
      id: "1",
      review_date: "2025-03-01T10:00:00Z",
      review_description:
        "Me han servido mucho las sesiones...\nLa verdad me he sentido mucho mejor... A través de estas entendí que no es normal sentirse mal y de a poco he ido recuperando confianza y las ganas de retomar actividades que había dejado.\nCreo que hay que normalizar el sentirnos bien y para eso es necesario tomar sesiones.\nMe gusta la atención, ha sido muy profesional y también personalizada, pero sobre todo muy efectiva. El cambio desde que tomo las sesiones ha sido notorio para mí y mi entorno... ¡Así que las recomiendo!",
      review_stars: 5,
      user_full_name: "Paulina Rodriguez",
    },
    {
      id: "2",
      review_date: "2025-02-25T15:30:00Z",
      review_description:
        "Siempre sentí una genuina preocupación por parte de Gonzalo en cuanto a mi estado y avances. Fue un guía y un adecuado apoyo. ¡Totalmente recomendado!",
      review_stars: 4,
      user_full_name: "Nicolás Gresve P.",
    },
    {
      id: "3",
      review_date: "2025-02-20T12:15:00Z",
      review_description:
        "Gonzalo es súper profesional, abierto con los pensamientos y sentimientos de uno. No juzga (como me pasó con otros profesionales). Me ayuda a descubrir mi rumbo cuando he estado desorientada y a seguir mis instintos pero marcando límites, porque eso me faltaba. Desde que inicié las sesiones me siento más tranquila y he vuelto a sentirme feliz, como no me había sentido hace mucho tiempo.\nGonzalo da tareas, no sólo escucha, ayuda a construir la propia sanación y eso es más significativo, ya que me ha dado herramientas para enfrentarme a mi realidad.\nRecomendado al 1000% 😊",
      review_stars: 4,
      user_full_name: "Giovanna",
    },
    {
      id: "4",
      review_date: "2025-02-15T09:00:00Z",
      review_description:
        "En honor a la verdad, fue una experiencia excelente. Me sentí muy respetada y acompañada; me sentí que estaba con un amigo sin serlo. El trabajo realizado fue muy profesional y puntual. Solo puedo agradecer.",
      review_stars: 5,
      user_full_name: "Irene Muñoz Weber",
    },
    {
      id: "5",
      review_date: "2025-02-10T14:45:00Z",
      review_description:
        "Estuve en terapia con Gonzalo, me sentí muy cómoda desde la primera sesión. Tenía muchos temas que necesitaba sanar y no encontraba salida a mis pensamientos. Gonzalo me ayudó mucho a aclarar mi mente, entender las cosas desde otro punto de vista, a mirar de manera distinta el pasado, el presente y el futuro. Me ayudó también con sentimientos de culpa; con su lógica y conversación logró muchos cambios en mi forma de pensar. Tuve muchas sesiones con él y cada una valió la pena; en cada una vaciaba más mi mochila emocional. Es una persona lógica y amable, ¡lo recomiendo al 100%! Además es muy preocupado y atento.",
      review_stars: 5,
      user_full_name: "Barbara Quijada",
    },
  ];

  // === Cálculo promedio (mantengo tu lógica) ===
  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((acc, review) => acc + review.review_stars, 0) /
          reviews.length
        ).toFixed(1)
      : "0.0";

  // === Render de estrellas del summary (mantengo tu estilo) ===
  const renderStars = (rating: number) => {
    const roundedRating = Math.round(rating);
    return (
      <div className="flex text-[#FFB703]">
        {Array.from({ length: 5 }, (_, i) =>
          i < roundedRating ? (
            <AiFillStar key={i} size={26} />
          ) : (
            <AiFillStar key={i} size={26} className="opacity-50" />
          )
        )}
      </div>
    );
  };

  // ── Anti-scraper states
  const [isBot, setIsBot] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const interacted = useHumanInteraction(420);
  const reduceMotion = useReducedMotion();

  React.useEffect(() => {
    if (typeof navigator !== "undefined") {
      setIsBot(isLikelyBotUA(navigator.userAgent || ""));
    }
  }, []);

  React.useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 360) setScrolled(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // por si ya está abajo
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showReal = interacted && scrolled && !isBot;
  const showSkeleton = !showReal;

  // ── Variants SOLO para la lista (no para el texto superior)
  const listVariants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.12, delayChildren: 0.12 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.32, ease: "easeOut" as const },
    },
  };

  return (
    <div className="mx-auto p-4 m-8">
      {/* ───────── Header / Summary (SIN animación) ───────── */}
      <h2 className="text-xl font-bold mb-4 text-center">Evaluaciones</h2>
      <div className="flex flex-col items-center space-y-2 mb-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-3xl font-bold">{averageRating}</span>
            {renderStars(parseFloat(averageRating))}
          </div>
          <p className="text-gray-500 text-md mt-2">Basado en 281 evaluaciones</p>
        </div>
      </div>
      <div className="flex items-center bg-blue-50 p-2 rounded-xl text-gray-600 mb-6">
        <MdVerified className="text-black mr-2 w-8 h-8" />
        <span className="text-black">
          Solo pacientes con citas concretadas pueden evaluar al profesional.
        </span>
      </div>

      {/* ───────── Lista de reviews (CON animación y protecciones) ───────── */}
      <AnimatePresence initial={false}>
        <motion.div
          className="space-y-8"
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          {showSkeleton
            ? Array.from({ length: 6 }).map((_, idx) => (
                <motion.div
                  key={`s-${idx}`}
                  className="border-b border-gray-200 pb-4"
                  variants={itemVariants}
                >
                  <div className="animate-pulse">
                    <div className="h-4 w-40 bg-gray-200 rounded mb-2" />
                    <div className="h-3 w-24 bg-gray-200 rounded mb-3" />
                    <div className="h-3 w-full bg-gray-200 rounded mb-2" />
                    <div className="h-3 w-5/6 bg-gray-200 rounded" />
                  </div>
                </motion.div>
              ))
            : reviews.map((review) => (
                <motion.div
                  key={review.id}
                  className="border-b border-gray-200 pb-4"
                  variants={itemVariants}
                >
                  <div className="flex flex-col items-start space-y-1">
                    <span className="font-semibold flex-1 text-lg">
                      {review.user_full_name}
                    </span>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center text-[#FFB703] space-x-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <AiFillStar key={i} size={20} />
                        ))}
                        <span className="text-gray-500 text-sm ml-2">
                          ・{formatDate(review.review_date)}
                        </span>
                      </div>
                    </div>
                  </div>
                  {review.review_description && (
                    <p className="text-gray-600 mt-2 whitespace-pre-line">
                      {review.review_description}
                    </p>
                  )}
                </motion.div>
              ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Reviews;