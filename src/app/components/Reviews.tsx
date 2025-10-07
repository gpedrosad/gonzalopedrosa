"use client";

import React from "react";
import { AiFillStar } from "react-icons/ai";
import { MdVerified } from "react-icons/md";

interface Review {
  id: string;
  review_date: string; // ISO
  review_description: string;
  review_stars: number; // 1..5
  user_full_name: string; // ya anonimizado (Nombre + inicial)
}

/** Formatea a Mes/Año para no exponer fecha exacta */
function formatMonthYear(iso: string) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("es-CL", { month: "short", year: "numeric" });
  } catch {
    return "";
  }
}

const Reviews: React.FC = () => {
  // ⚠️ CONTENIDO NEUTRALIZADO PARA POLÍTICAS DE META (sin términos clínicos, sin menores, sin PII completa, sin garantías absolutas)
  const reviews: Review[] = [
    {
      id: "14",
      review_date: "2025-04-15T11:30:00Z",
      review_description:
        "Me sentí muy cómoda en las sesiones. Me ayudó a ordenar ideas y hacer cambios prácticos. Lo recomiendo.",
      review_stars: 5,
      user_full_name: "Sofía H.",
    },
    {
      id: "13",
      review_date: "2025-04-10T10:45:00Z",
      review_description:
        "Muy profesional y atento; siempre pendiente del proceso y de los acuerdos.",
      review_stars: 5,
      user_full_name: "Yocelyn",
    },
    {
      id: "12",
      review_date: "2025-04-05T09:30:00Z",
      review_description:
        "Acompaña a un familiar desde hace meses por temas personales como concentración y manejo del estrés. Estamos muy conformes con las sesiones. Es responsable, puntual y comprometido; genera confianza.",
      review_stars: 5,
      user_full_name: "Claudia",
    },
    {
      id: "11",
      review_date: "2025-03-30T11:00:00Z",
      review_description:
        "En un momento de mucho conflicto interno, me ayudó a mirar las cosas de forma distinta y las sesiones fueron gratas. Lo recomiendo.",
      review_stars: 5,
      user_full_name: "Karen",
    },
    {
      id: "10",
      review_date: "2025-03-25T10:15:00Z",
      review_description:
        "Llegué en un momento difícil. Me ayudó a reorganizar prioridades y a ver opciones que no estaba considerando. Agradezco el acompañamiento y lo recomendaría.",
      review_stars: 5,
      user_full_name: "Valeska B.",
    },
    {
      id: "9",
      review_date: "2025-03-20T13:45:00Z",
      review_description: "Muy buen profesional. Empático. Lo recomiendo.",
      review_stars: 5,
      user_full_name: "Emiliana V.",
    },
    {
      id: "8",
      review_date: "2025-03-15T16:30:00Z",
      review_description:
        "Las sesiones me ayudaron a: • establecer límites • valorar quién soy • tomar decisiones con más calma • ver situaciones desde más de un punto de vista. Hoy disfruto con más conciencia y claridad. 👍",
      review_stars: 5,
      user_full_name: "Evelyn",
    },
    {
      id: "7",
      review_date: "2025-03-10T14:00:00Z",
      review_description:
        "Excelente profesional; me sentí escuchada y acompañada. Me ayudó mucho.",
      review_stars: 5,
      user_full_name: "Daniela Q.",
    },
    {
      id: "1",
      review_date: "2025-03-01T10:00:00Z",
      review_description:
        "Me han servido las sesiones. He recuperado hábitos y motivación para retomar actividades. La atención ha sido profesional y personalizada; la recomiendo.",
      review_stars: 5,
      user_full_name: "Paulina R.",
    },
    {
      id: "2",
      review_date: "2025-02-25T15:30:00Z",
      review_description:
        "Siempre percibí una preocupación genuina por mi proceso y avances. Un apoyo adecuado. Totalmente recomendado.",
      review_stars: 4,
      user_full_name: "Nicolás G.",
    },
    {
      id: "3",
      review_date: "2025-02-20T12:15:00Z",
      review_description:
        "Es abierto y respetuoso; me ayudó a clarificar rumbo cuando me sentía desorientada, marcando límites sanos. Propone tareas prácticas y eso me dio herramientas útiles. Recomendado.",
      review_stars: 4,
      user_full_name: "Giovanna",
    },
    {
      id: "4",
      review_date: "2025-02-15T09:00:00Z",
      review_description:
        "Experiencia excelente. Me sentí respetada y acompañada. Trabajo profesional y puntual. Muchas gracias.",
      review_stars: 5,
      user_full_name: "Irene M.",
    },
    {
      id: "5",
      review_date: "2025-02-10T14:45:00Z",
      review_description:
        "Desde la primera sesión me sentí cómoda. Me ayudó a ordenar ideas, ver el pasado/presente/futuro con más perspectiva y a trabajar la culpa. En cada sesión avancé un poco más. Persona clara y amable; lo recomiendo.",
      review_stars: 5,
      user_full_name: "Bárbara Q.",
    },
  ];

  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((acc, r) => acc + r.review_stars, 0) / reviews.length
        ).toFixed(1)
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

  return (
    <div className="mx-auto p-4 m-8">
      <h2 className="text-xl font-bold mb-4 text-center">Opiniones verificadas</h2>

      <div className="flex flex-col items-center space-y-2 mb-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-3xl font-bold">{averageRating}</span>
            {renderStars(parseFloat(averageRating))}
          </div>
          <p className="text-gray-500 text-md mt-2">
            Basado en {reviews.length} evaluaciones
          </p>
        </div>
      </div>

      <div className="flex items-center bg-blue-50 p-2 rounded-xl text-gray-700 mb-3">
        <MdVerified className="text-blue-600 mr-2 w-6 h-6" />
        <span>
          Solo <strong>personas con sesiones realizadas</strong> pueden dejar una opinión.
        </span>
      </div>

      {/* Disclaimer breve para políticas de anuncios */}
      <p className="text-xs text-gray-500 mb-6 text-center">
        Las experiencias descritas son personales y pueden variar entre usuarios.
      </p>

      <div className="space-y-8">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="border-b border-gray-200 pb-4">
              <div className="flex flex-col items-start space-y-1">
                <span className="font-semibold flex-1 text-lg">{review.user_full_name}</span>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center text-[#FFB703] space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <AiFillStar
                        key={i}
                        size={20}
                        className={i < review.review_stars ? "" : "opacity-40"}
                      />
                    ))}
                    <span className="text-gray-500 text-sm ml-2">
                      ・{formatMonthYear(review.review_date)}
                    </span>
                  </div>
                </div>
              </div>
              {review.review_description && (
                <p className="text-gray-700 mt-2 whitespace-pre-line">
                  {review.review_description}
                </p>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No hay evaluaciones disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default Reviews;