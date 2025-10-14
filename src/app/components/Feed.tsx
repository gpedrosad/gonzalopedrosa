// src/app/components/Feed.tsx
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

interface Entry {
  id: string;
  created_at: string; // ISO
  body: string;
  score: number; // 1..5
  author: string;
}

/** Formatea fecha local sencilla */
function formatDate(iso: string) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString();
  } catch {
    return "";
  }
}

const Feed: React.FC = () => {
  // DATA ORIGINAL (texto intacto, nombres neutralizados)
  const entries: Entry[] = [
    {
      id: "14",
      created_at: "2025-04-15T11:30:00Z",
      body:
        "Me sentí muy cómoda con las sesiones, Excelente",
      score: 5,
      author: "Sofia Hernandez",
    },
    {
      id: "13",
      created_at: "2025-04-10T10:45:00Z",
      body:
        "Excelente Gonzalo, preocupado en todo momento ",
      score: 5,
      author: "Yocelyn",
    },
    {
      id: "12",
      created_at: "2025-04-05T09:30:00Z",
      body:
        "Gonzalo atiende a mi hijo hace varios meses. Mi hijo está muy contento con sus sesiones. Es responsable, puntual y muy comprometido. A mi hijo le da mucha confianza conversar con él. Es un 7. El está mucho mejor y yo muy contenta.",
      score: 5,
      author: "Claudia",
    },
    {
      id: "11",
      created_at: "2025-03-30T11:00:00Z",
      body:
        " Conoci a Gonzalo y el con su alto grado de compromiso y capacidad de escucha, fue capaz de ayudarme a ver de manera distinta lo que estaba pasando, haciendo muy grata cada sesión .. es una persona agradable y un excelente profesional.\n",
      score: 5,
      author: "Karen",
    },
    {
      id: "10",
      created_at: "2025-03-25T10:15:00Z",
      body:
        "Gonzalo es un excelente profesional, acudí a el, me aconsejo  y estuvo para mí sin importar horarios ni dinero, abrió mi mente y me hizo ver la vida de una manera distinta y sin lugar a dudas las sesiones fueron uno de los pilares fundamentales para poder avanzar.\nAgradezco mucho encontrarlo y obviamente recomendaría su servicio. ",
      score: 5,
      author: "Valeska Bravo Montecinos",
    },
    {
      id: "9",
      created_at: "2025-03-20T13:45:00Z",
      body: "Muy buen profesional. Empático. Lo recomiendo",
      score: 5,
      author: "Emiliana Vera",
    },
    {
      id: "8",
      created_at: "2025-03-15T16:30:00Z",
      body:
        "En lo personal siento que Gonzalo fue de gran ayuda en mi búsqueda como persona, para encontrar mi paz mental y darme cuenta del valor que tengo solo por ser persona, además tenía instaurada una forma muy agresiva de mi ser y el busca a través de la contra pregunta ver las cosas desde otro punto de vista, dando a conocer tus potencial. En resumen me ayudaron a:\n*Establecer límites y reconocer personas manipuladoras\n* valorar quién soy como mujer\n* tomar control \n* y poder ver las cosas de varios puntos de vista y no uno solo.\nEn conclusión hoy puedo disfrutar más, valorándome como persona, estableciendo límites, saber donde quiero estar y estar con la persona que me quiera, además de potenciar mi fuerza. 👍",
      score: 5,
      author: "Evelyn",
    },
    {
      id: "7",
      created_at: "2025-03-10T14:00:00Z",
      body:
        "Exelente profesional me encanto compartir mi vida con el me ayudo mucho!!",
      score: 5,
      author: "Daniela Quevedo",
    },
    {
      id: "1",
      created_at: "2025-03-01T10:00:00Z",
      body:
        "Me han servido mucho las sesiones...\nLa verdad me he sentido mucho mejor... A través de estas he ido recuperando confianza y las ganas de retomar actividades que había dejado.\nCreo que hay que normalizar el sentirnos bien y para eso es necesario tomar sesiones.\nMe gusta la atención, ha sido muy profesional y también personalizada, pero sobre todo muy efectiva. El cambio desde que tomo las sesiones ha sido notorio para mí y mi entorno.",
      score: 5,
      author: "Paulina Rodriguez",
    },
    {
      id: "2",
      created_at: "2025-02-25T15:30:00Z",
      body:
        "Siempre sentí una genuina preocupación por parte de Gonzalo en cuanto a mi estado y avances. Fue un guía y un adecuado apoyo. ¡Totalmente recomendado!",
      score: 5,
      author: "Nicolás Gresve P.",
    },
    {
      id: "3",
      created_at: "2025-02-20T12:15:00Z",
      body:
        "Gonzalo es súper profesional, abierto con los pensamientos y sentimientos de uno. No juzga (como me pasó con otros profesionales). Me ayuda a descubrir mi rumbo cuando he estado desorientada y a seguir mis instintos pero marcando límites, porque eso me faltaba. Desde que inicié las sesiones me siento más tranquila.\nGonzalo da tareas, no sólo escucha, eso es más significativo, ya que me ha dado herramientas para enfrentarme a mi realidad.\n",
      score: 5,
      author: "Giovanna",
    },
    {
      id: "4",
      created_at: "2025-02-15T09:00:00Z",
      body:
        "En honor a la verdad, fue una experiencia excelente. Me sentí muy respetada y acompañada; me sentí que estaba con un amigo sin serlo. El trabajo realizado fue muy profesional y puntual. Solo puedo agradecer.",
      score: 5,
      author: "Irene Muñoz Weber",
    },
    {
      id: "5",
      created_at: "2025-02-10T14:45:00Z",
      body:
        "Estuve en sesión con Gonzalo, me sentí muy cómoda desde la primera sesión. Tenía muchos temas que necesitaba hablar y no encontraba salida a mis pensamientos. Gonzalo me ayudó mucho a aclarar mi mente, entender las cosas desde otro punto de vista, a mirar de manera distinta el pasado, el presente y el futuro. Me ayudó también con sentimientos de culpa; con su lógica y conversación logró muchos cambios en mi forma de pensar. Tuve muchas sesiones con él y cada una valió la pena; en cada una vaciaba más mi mochila emocional. Es una persona lógica y amable. Además es muy preocupado y atento.",
      score: 5,
      author: "Barbara Quijada",
    },
  ];

  const averageScore =
    entries.length > 0
      ? (entries.reduce((acc, e) => acc + e.score, 0) / entries.length).toFixed(1)
      : "0.0";

  const renderStars = (rating: number) => {
    const rounded = Math.round(rating);
    return (
      <div className="flex text-[#FFB703]">
        {Array.from({ length: 5 }, (_, i) => (
          <AiFillStar key={i} size={26} className={i < rounded ? "" : "opacity-40"} />
        ))}
      </div>
    );
  };

  // Animación suave (sin condicionar contenido a UA/interacción)
  const reduceMotion = useReducedMotion();
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.32, ease: "easeOut" as const } },
  };

  return (
    <div className="mx-auto p-4 m-8">
      {/* Encabezado / Resumen neutral */}
      <h2 className="text-xl font-bold mb-4 text-center">Comentarios</h2>
      <div className="flex flex-col items-center space-y-2 mb-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-3xl font-bold">{averageScore}</span>
            {renderStars(parseFloat(averageScore))}
          </div>
          <p className="text-gray-500 text-md mt-2">Muestra de 281 mensajes</p>
        </div>
      </div>

      <div className="flex items-center bg-blue-50 p-2 rounded-xl text-gray-600 mb-6">
        <MdVerified className="text-black mr-2 w-8 h-8" />
        <span className="text-black">
          Solo quienes asistieron dejaron un mensaje.
        </span>
      </div>

      {/* Lista (manteniendo los textos originales) */}
      <AnimatePresence initial={false}>
        <motion.div className="space-y-8" variants={listVariants} initial="hidden" animate="visible">
          {entries.map((e) => (
            <motion.div key={e.id} className="border-b border-gray-200 pb-4" variants={itemVariants}>
              <div className="flex flex-col items-start space-y-1">
                <span className="font-semibold flex-1 text-lg">{e.author}</span>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center text-[#FFB703] space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <AiFillStar key={i} size={20} className={i < e.score ? "" : "opacity-40"} />
                    ))}
                    <span className="text-gray-500 text-sm ml-2">・{formatDate(e.created_at)}</span>
                  </div>
                </div>
              </div>
              {e.body && (
                <p className="text-gray-600 mt-2 whitespace-pre-line">{e.body}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Feed;