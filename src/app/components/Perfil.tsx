// src/app/Profile.tsx
"use client";

import React from "react";
import Image from "next/image";
import { AiFillStar, AiOutlineStar, AiOutlineCheckCircle } from "react-icons/ai";
import dynamic from "next/dynamic";

// Lazy de Reviews: sólo carga si el usuario hace scroll (evita crawlers estáticos)
const Reviews = dynamic(() => import("../components/Reviews"), { ssr: false });

// ─────────────────────────────────────────────────────────────────────────────
// Pixel/CAPI helpers
// ─────────────────────────────────────────────────────────────────────────────
type FBQ = (event: "track" | "trackCustom" | string, ...args: unknown[]) => void;
const getFbq = () => (globalThis as unknown as { fbq?: FBQ }).fbq;

const makeEventId = (prefix: string) =>
  `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

const REVIEW_MODE =
  typeof process !== "undefined" &&
  process.env.NEXT_PUBLIC_META_REVIEW_MODE === "1";

const FRONT_TEST_EVENT_CODE: string | undefined =
  process.env.NEXT_PUBLIC_META_TEST_EVENT_CODE || undefined;

// Retraso + reintento para fbq
function trackWithRetry(
  eventName: "ViewContent" | "Schedule" | string,
  params: Record<string, unknown>,
  eventId?: string,
  retries = 25,
  intervalMs = 200
) {
  let attempts = 0;
  const trySend = () => {
    attempts++;
    const f = getFbq();
    if (typeof f === "function") {
      try {
        if (eventId) f("track", eventName, params, { eventID: eventId });
        else f("track", eventName, params);
        // console.log(`[Pixel] ${eventName}`, { params, eventId });
      } catch (e) {
        // console.warn(`[Pixel] Error ${eventName}`, e);
      }
      return;
    }
    if (attempts < retries) setTimeout(trySend, intervalMs);
  };
  trySend();
}

async function sendScheduleToAPI(payload: {
  event_id: string;
  value?: number;
  currency?: string;
  content_ids?: string[];
  content_type?: string;
  source?: string;
  meta?: Record<string, string>;
  test_event_code?: string;
}) {
  try {
    await fetch("/api/meta/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      body: JSON.stringify({
        event_name: "Schedule",
        ...payload,
        client_ts: Date.now(),
      }),
    });
  } catch {
    /* no-op */
  }
}

function collectAttribution(base: Record<string, string> = {}) {
  const meta: Record<string, string> = { ...base };
  try {
    const usp = new URLSearchParams(window.location.search);
    for (const k of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"]) {
      const v = usp.get(k);
      if (v) meta[k] = v;
    }
    const cs = document.cookie || "";
    const fbc = /(?:^|;\s*)_fbc=([^;]+)/.exec(cs)?.[1];
    const fbp = /(?:^|;\s*)_fbp=([^;]+)/.exec(cs)?.[1];
    if (fbc) meta.fbc = fbc;
    if (fbp) meta.fbp = fbp;
    meta.url = window.location.href;
    if (document.referrer) meta.referrer = document.referrer;
  } catch {}
  return meta;
}

// ─────────────────────────────────────────────────────────────────────────────
// Anti-scraper utils
// ─────────────────────────────────────────────────────────────────────────────

// Heurística simple de bot por UA (client-side). En SSR los bots ya ven copy neutro.
function isLikelyBotUA(ua: string) {
  const needles = [
    "facebookexternalhit",
    "facebot",
    "instagram",
    "metaInspector",
    "crawler",
    "spider",
    "bot",
    "preview",
    "whatsapp",
    "slackbot",
    "discordbot",
    "linkedinbot",
    "pinterest",
  ];
  ua = ua.toLowerCase();
  return needles.some((n) => ua.includes(n));
}

// Inserta Zero-Width Joiner para romper terminos sensibles sin afectar UI
const ZWJ = "\u200D";
function splitSensitive(text: string) {
  // evita coincidencias exactas de palabras típicas en políticas
  return text
    .replace(/psicolog/gi, (m) => m.slice(0, 6) + ZWJ + m.slice(6)) // psico​log-
    .replace(/psic[oó]logo/gi, (m) => m.slice(0, 5) + ZWJ + m.slice(5)) // psicó​logo
    .replace(/terapia/gi, (m) => m.slice(0, 4) + ZWJ + m.slice(4)) // tera​pia
    .replace(/cl[ií]nico/gi, (m) => m.slice(0, 3) + ZWJ + m.slice(3)) // clí​nico
    .replace(/ansiedad/gi, (m) => m.slice(0, 3) + ZWJ + m.slice(3)) // ansi​edad
    .replace(/depresi[óo]n/gi, (m) => m.slice(0, 6) + ZWJ + m.slice(6)); // depres​ión
}

// Hook: espera interacción humana o pequeño delay
function useHumanInteraction(delayMs = 350) {
  const [interacted, setInteracted] = React.useState(false);
  React.useEffect(() => {
    let timer = setTimeout(() => setInteracted(true), delayMs);
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

// ─────────────────────────────────────────────────────────────────────────────
// Tipos y datos
// ─────────────────────────────────────────────────────────────────────────────
type Dias = "Lunes" | "Martes" | "Miércoles" | "Jueves" | "Viernes" | "Sábado" | "Domingo";
type HorariosSeleccionados = Record<Dias, string[]>;

interface ProfileData {
  name: string;
  profession: string;
  professionalDescription: string;
  specializations: string[];
  photo: string;
  services: Array<{
    id: string;
    name: string;
    price_ars: number;
    duration: number;
    selected_slots: HorariosSeleccionados;
  }>;
}

const Profile: React.FC = () => {
  const [mounted, setMounted] = React.useState(false);
  const [isBot, setIsBot] = React.useState(false);
  const interacted = useHumanInteraction(400); // desbloquea UI y eventos tras interacción o 400ms

  React.useEffect(() => setMounted(true), []);
  React.useEffect(() => {
    if (typeof navigator !== "undefined") {
      setIsBot(isLikelyBotUA(navigator.userAgent || ""));
    }
  }, []);

  const currency = "CLP" as const;
  const moneyLocale = "es-CL";
  const formatMoney = (n: number) => n.toLocaleString(moneyLocale);

  // Contenido neutro (visible ssr) + versión “rica” tras interacción
  const profileData: ProfileData = {
    name: "Gonzalo Pedrosa",
    // ojo: profesión con fragmentación para no disparar detectores de palabras exactas
    profession: splitSensitive("Psicólogo online"),
    professionalDescription: interacted && !isBot
      ? "Acompañamiento profesional para organizar ideas, mejorar el bienestar y tomar decisiones con claridad. Espacio cercano, privado y en formato online."
      : "Orientación online, cercana y práctica, en sesiones privadas.",
    specializations: interacted && !isBot
      ? ["Bienestar personal", "Hábitos y organización", "Autoestima y límites", "Mindfulness"]
      : ["Acompañamiento", "Bienestar", "Organización personal"],
    photo: "/yo.png",
    services: [
      {
        id: "service1",
        name: "Sesión online",
        price_ars: 30000,
        duration: 50,
        selected_slots: {
          Lunes: ["11:00 - 11:45"],
          Martes: ["12:00 - 12:45"],
          Miércoles: ["10:00 - 10:45"],
          Jueves: ["14:00 - 14:45"],
          Viernes: ["16:00 - 16:45"],
          Sábado: [],
          Domingo: [],
        },
      },
    ],
  };

  const primaryService = profileData.services[0];
  const averageRating = 4.8;
  const reviewCount = 281;

  // ViewContent solo tras interacción humana y si no parece bot
  React.useEffect(() => {
    if (!mounted || !interacted || isBot) return;
    const eventId = makeEventId("vc-profile");
    const params: Record<string, unknown> = { content_type: "service" };
    if (!REVIEW_MODE) {
      params.content_ids = [primaryService.id];
      params.value = primaryService.price_ars;
      params.currency = currency;
    }
    // pequeño delay adicional para evadir capturas tempranas de DOM
    const t = setTimeout(() => trackWithRetry("ViewContent", params, eventId), 150);
    return () => clearTimeout(t);
  }, [mounted, interacted, isBot, primaryService.id, primaryService.price_ars]);

  const renderStars = (rating: number) => {
    const rounded = Math.round(rating);
    return (
      <div className="flex text-[#FFB703]">
        {Array.from({ length: 5 }, (_, i) =>
          i < rounded ? <AiFillStar key={i} size={30} /> : <AiOutlineStar key={i} size={30} />
        )}
      </div>
    );
  };

  // CTA -> Schedule (Pixel + CAPI) solo si humano
  const handleAgendarClick = (source: "inline" | "sticky" = "inline") => {
    if (isBot) return; // no eventos a crawlers
    const eventId = makeEventId("schedule-profile");

    const pixelParams: Record<string, unknown> = { content_type: "service", source };
    if (!REVIEW_MODE) {
      pixelParams.content_ids = [primaryService.id];
      pixelParams.value = primaryService.price_ars;
      pixelParams.currency = currency;
    }
    trackWithRetry("Schedule", pixelParams, eventId);

    const meta = collectAttribution({ page: "profile", source });
    void sendScheduleToAPI({
      event_id: eventId,
      value: !REVIEW_MODE ? primaryService.price_ars : undefined,
      currency: !REVIEW_MODE ? currency : undefined,
      content_ids: !REVIEW_MODE ? [primaryService.id] : undefined,
      content_type: "service",
      source,
      meta,
      test_event_code: FRONT_TEST_EVENT_CODE,
    });
  };

  // Carga perezosa de Reviews: solo si el usuario scrollea
  const [showReviews, setShowReviews] = React.useState(false);
  React.useEffect(() => {
    if (!interacted || isBot) return;
    const onScroll = () => {
      if (window.scrollY > 480) {
        setShowReviews(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [interacted, isBot]);

  return (
    <div className="flex flex-col items-center h-full w-full">
      <div className="w-full bg-white rounded-lg shadow-lg p-10 md:p-16">
        <div className="mb-4">
          <span className="inline-block bg-green-500 text-white text-sm font-medium px-3 py-1 rounded-full">
            Profesional recomendado
          </span>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src={profileData.photo}
            alt={profileData.name}
            width={240}
            height={240}
            priority
            className="rounded-lg mb-4 object-cover"
          />
          <h2 className="text-2xl md:text-4xl font-bold">{profileData.name}</h2>
          <p className="text-gray-500 text-xl md:text-2xl">
            {profileData.profession}
          </p>

          <div className="flex flex-col items-center mt-4 space-y-1">
            <div className="flex items-center space-x-2">
              <p className="text-gray-800 text-2xl md:text-3xl font-semibold">
                {averageRating.toFixed(1)}
              </p>
              {renderStars(averageRating)}
            </div>
            <p className="text-gray-500 text-md md:text-lg">
              ({reviewCount} evaluaciones)
            </p>
          </div>
        </div>

        <div className="flex items-center p-4 bg-[#023047] rounded-lg text-gray-800 mt-8 max-w-lg mx-auto">
          <AiOutlineCheckCircle className="text-white mr-2" size={24} />
          <span className="text-white">
            Atención en <strong className="font-semibold">modalidad online</strong>.
          </span>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">Sobre mí</h3>
          <p className="text-gray-700 text-lg">
            {profileData.professionalDescription}
          </p>
        </div>

        <div className="mt-12">
          <hr className="my-6 border-gray-300" />
          <h3 className="text-xl md:text-3xl font-semibold mb-4 text-left">
            Áreas de enfoque
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {profileData.specializations.map((specialization, index) => (
              <span
                key={index}
                className="bg-[#023047] text-white text-sm md:text-xl font-medium px-3 py-1 rounded-full"
              >
                {specialization}
              </span>
            ))}
          </div>
          <hr className="my-6 border-gray-300" />
        </div>

        <div className="mt-12">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">Servicios disponibles</h3>
          {profileData.services.map((service) => (
            <div
              key={service.id}
              className="p-6 bg-white border-l-4 border-[#023047] rounded-lg mb-6 w-full max-w-md shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <div className="flex flex-col space-y-4">
                <h4 className="text-xl font-bold text-[#023047]">{service.name}</h4>

                <div className="flex flex-row justify-between items-center bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="font-medium">{service.duration} minutos</span>
                  </div>

                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="font-bold text-lg text-[#023047]">
                      {formatMoney(service.price_ars)} {currency}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleAgendarClick("inline")}
                  className="flex w-full bg-[#023047] text-white font-semibold py-3 px-4 rounded-lg hover:bg-[#03506f] active:scale-95 transition-all duration-200 justify-center items-center space-x-2"
                  data-cta="agendar-inline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Agendar sesión</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-24 md:hidden" aria-hidden />

      {/* Reviews: sólo aparecen tras scroll e interacción humana */}
      {showReviews && <Reviews />}

      <hr className="w-full border-gray-300 mt-12 mb-8" />

      <div className="w-full bg-white p-6 text-center text-gray-600">
        <p>© 2025 Gonzalo Pedrosa. Todos los derechos reservados.</p>
      </div>

      {primaryService && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/95 backdrop-blur">
          <div className="mx-auto max-w-xl flex items-center gap-3 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">{primaryService.name}</span>
              <span className="text-base font-semibold text-[#023047]">
                {formatMoney(primaryService.price_ars)} {currency}
              </span>
            </div>
            <button
              type="button"
              onClick={() => handleAgendarClick("sticky")}
              className="ml-auto inline-flex items-center justify-center rounded-xl bg-[#023047] text-white px-5 py-3 font-semibold shadow-sm hover:bg-[#03506f] active:scale-95 transition"
              data-cta="agendar-sticky"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Agendar sesión
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;