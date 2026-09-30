import {
  FiArrowRight,
  FiCheck,
  FiClock,
  FiLock,
  FiMessageCircle,
  FiMonitor,
  FiStar,
  FiTarget,
  FiUserCheck,
  FiVideo,
} from "react-icons/fi";
import { CLINICAL_STATS } from "@/lib/site-config";
import { AdsProfileImage } from "./AdsProfileImage";
import { AdsProviderRegistry } from "./AdsProviderRegistry";
import { AdsWhatsAppButton } from "./AdsWhatsAppButton";

type IconName =
  | "clock"
  | "lock"
  | "message"
  | "monitor"
  | "target"
  | "user"
  | "video";

type Feature = {
  icon: IconName;
  title: string;
  text: string;
};

type Step = {
  title: string;
  text: string;
};

export type ClinicalFaq = {
  question: string;
  answer: string;
};

type ClinicalAdsLandingProps = {
  eyebrow: string;
  title: string;
  intro: string;
  heroBullets: readonly string[];
  position: {
    eyebrow: string;
    title: string;
    text: string;
    callout: string;
  };
  features: readonly Feature[];
  situationsTitle: string;
  situationsIntro: string;
  situations: readonly string[];
  processEyebrow: string;
  processTitle: string;
  processIntro: string;
  steps: readonly Step[];
  profileIntro: string;
  profileBullets: readonly string[];
  faqs: readonly ClinicalFaq[];
  closingTitle: string;
  closingText: string;
  whatsappHref: string;
  whatsappLabel: string;
  ctaText: string;
};

const PRICE_TEXT = new Intl.NumberFormat("es-CL").format(
  CLINICAL_STATS.sessionPriceClp,
);

function FeatureIcon({ name }: { name: IconName }) {
  const className = "h-5 w-5";

  switch (name) {
    case "clock":
      return <FiClock className={className} aria-hidden="true" />;
    case "lock":
      return <FiLock className={className} aria-hidden="true" />;
    case "message":
      return <FiMessageCircle className={className} aria-hidden="true" />;
    case "monitor":
      return <FiMonitor className={className} aria-hidden="true" />;
    case "target":
      return <FiTarget className={className} aria-hidden="true" />;
    case "user":
      return <FiUserCheck className={className} aria-hidden="true" />;
    case "video":
      return <FiVideo className={className} aria-hidden="true" />;
  }
}

const whatsappButtonClass =
  "group w-full bg-[#1f9d55] px-7 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(31,157,85,0.22)] hover:bg-[#188447] sm:w-auto";

export function ClinicalAdsLanding({
  eyebrow,
  title,
  intro,
  heroBullets,
  position,
  features,
  situationsTitle,
  situationsIntro,
  situations,
  processEyebrow,
  processTitle,
  processIntro,
  steps,
  profileIntro,
  profileBullets,
  faqs,
  closingTitle,
  closingText,
  whatsappHref,
  whatsappLabel,
  ctaText,
}: ClinicalAdsLandingProps) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fbfaf7] text-slate-950">
      <section className="relative isolate border-b border-slate-200/80 bg-[radial-gradient(circle_at_top_left,_#e6f4ed_0,_transparent_38%),linear-gradient(180deg,#fff_0%,#fbfaf7_100%)] px-4 pb-14 pt-7 md:pb-20 md:pt-10">
        <div
          className="pointer-events-none absolute -right-24 top-8 -z-10 h-72 w-72 rounded-full bg-emerald-100/50 blur-3xl"
          aria-hidden="true"
        />
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.7fr)] lg:gap-16">
          <div>
            <div className="mb-7 flex items-center gap-3">
              <AdsProfileImage
                alt="Gonzalo Pedrosa, psicólogo clínico"
                width={48}
                height={48}
                priority
                className="h-12 w-12 rounded-full border-2 border-white object-cover shadow-sm"
              />
              <div>
                <p className="text-sm font-semibold text-slate-950">
                  Gonzalo Pedrosa
                </p>
                <p className="text-xs text-slate-600">
                  Psicólogo clínico · atención online en Chile
                </p>
              </div>
            </div>

            <p className="mb-4 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-800">
              {eyebrow}
            </p>
            <h1 className="max-w-3xl text-[2.35rem] font-bold leading-[1.06] tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-[3.55rem]">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              {intro}
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {heroBullets.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[15px] leading-6 text-slate-700"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <FiCheck className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <AdsWhatsAppButton
                href={whatsappHref}
                label={`${whatsappLabel}-hero`}
                className={whatsappButtonClass}
              >
                {ctaText}
                <FiArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </AdsWhatsAppButton>
              <p className="mt-3 text-sm text-slate-500">
                Coordinas directamente conmigo · sin formularios ni intermediarios
              </p>
            </div>
          </div>

          <aside className="relative rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_24px_70px_rgba(15,23,42,0.10)] sm:p-7">
            <div className="mb-6 flex items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Sesión individual online
                </p>
                <p className="mt-1 text-3xl font-bold tracking-tight text-slate-950">
                  ${PRICE_TEXT}
                  <span className="ml-1 text-sm font-medium text-slate-500">
                    CLP
                  </span>
                </p>
              </div>
              <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                <FiVideo className="h-7 w-7" aria-hidden="true" />
              </div>
            </div>

            <dl className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <dt className="flex items-center gap-2 text-sm text-slate-600">
                  <FiClock className="h-4 w-4 text-emerald-700" /> Duración
                </dt>
                <dd className="text-sm font-semibold text-slate-950">
                  {CLINICAL_STATS.sessionMinutes} minutos
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="flex items-center gap-2 text-sm text-slate-600">
                  <FiMonitor className="h-4 w-4 text-emerald-700" /> Modalidad
                </dt>
                <dd className="text-sm font-semibold text-slate-950">
                  Videollamada
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="flex items-center gap-2 text-sm text-slate-600">
                  <FiMessageCircle className="h-4 w-4 text-emerald-700" /> Agenda
                </dt>
                <dd className="text-sm font-semibold text-slate-950">
                  Por WhatsApp
                </dd>
              </div>
            </dl>

            <div className="mt-6 rounded-2xl bg-slate-950 p-4 text-white">
              <div className="flex items-center gap-1.5 text-amber-300">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FiStar
                    key={index}
                    className="h-4 w-4 fill-current"
                    aria-hidden="true"
                  />
                ))}
                <span className="ml-1 text-sm font-semibold text-white">
                  {CLINICAL_STATS.ratingValue}
                </span>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {CLINICAL_STATS.reviewCount} reseñas y más de{" "}
                {CLINICAL_STATS.yearsExperience} años de experiencia clínica.
              </p>
            </div>

            <AdsProviderRegistry
              withVerifyLink
              className="mt-5 text-xs leading-5 text-slate-500"
            />
          </aside>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white px-4 py-6">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-slate-200 md:grid-cols-4">
          {[
            [CLINICAL_STATS.ratingValue, `${CLINICAL_STATS.reviewCount} reseñas`],
            [`${CLINICAL_STATS.yearsExperience}+`, "años de experiencia"],
            [`${CLINICAL_STATS.sessionMinutes} min`, "por videollamada"],
            ["Directo", "hablas con tu psicólogo"],
          ].map(([value, label]) => (
            <div key={label} className="px-3 py-3 text-center md:px-6">
              <p className="text-xl font-bold tracking-tight text-slate-950">
                {value}
              </p>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
              {position.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-950 md:text-4xl">
              {position.title}
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-slate-600">{position.text}</p>
            <div className="mt-6 border-l-4 border-emerald-500 bg-emerald-50 px-5 py-4 text-base font-medium leading-7 text-emerald-950">
              {position.callout}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.04)]"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
                <FeatureIcon name={feature.icon} />
              </div>
              <h3 className="text-lg font-semibold text-slate-950">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {feature.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-16 text-white md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
              Motivos de consulta
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.03em] md:text-4xl">
              {situationsTitle}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              {situationsIntro}
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {situations.map((situation) => (
              <div
                key={situation}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-4 text-sm leading-6 text-slate-100"
              >
                <FiCheck
                  className="mt-1 h-4 w-4 shrink-0 text-emerald-300"
                  aria-hidden="true"
                />
                {situation}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
              {processEyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-950 md:text-4xl">
              {processTitle}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {processIntro}
            </p>
          </div>

          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="relative rounded-2xl border border-slate-200 bg-[#fbfaf7] p-6"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-10 text-center">
            <AdsWhatsAppButton
              href={whatsappHref}
              label={`${whatsappLabel}-process`}
              className={whatsappButtonClass}
            >
              {ctaText}
              <FiArrowRight className="h-4 w-4" aria-hidden="true" />
            </AdsWhatsAppButton>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-8 overflow-hidden rounded-[2rem] bg-[#e9f4ee] p-6 sm:p-10 lg:grid-cols-[0.6fr_1.4fr] lg:p-14">
          <div className="mx-auto">
            <AdsProfileImage
              alt="Gonzalo Pedrosa, psicólogo clínico"
              width={320}
              height={320}
              sizes="(max-width: 1024px) 240px, 320px"
              className="aspect-square w-56 rounded-[1.75rem] object-cover shadow-[0_18px_45px_rgba(15,23,42,0.15)] lg:w-full"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">
              Tu psicólogo
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-slate-950 md:text-4xl">
              Gonzalo Pedrosa
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              {profileIntro}
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {profileBullets.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-6 text-slate-700"
                >
                  <FiCheck
                    className="mt-1 h-4 w-4 shrink-0 text-emerald-700"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <AdsProviderRegistry
              withVerifyLink
              className="mt-6 text-sm text-slate-600"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
              Antes de agendar
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-slate-950 md:text-4xl">
              Preguntas frecuentes
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Información concreta para que sepas qué esperar antes de escribir.
            </p>
          </div>
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-1">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-lg font-normal text-slate-700 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-6 pr-10 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#0f172a_0%,#123d32_100%)] px-6 py-12 text-center text-white shadow-[0_24px_70px_rgba(15,23,42,0.16)] sm:px-10 md:py-16">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-emerald-100">
            <FiLock className="h-3.5 w-3.5" aria-hidden="true" /> Atención
            confidencial
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold leading-tight tracking-[-0.03em] md:text-4xl">
            {closingTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-300">
            {closingText}
          </p>
          <div className="mt-8">
            <AdsWhatsAppButton
              href={whatsappHref}
              label={`${whatsappLabel}-final`}
              className="w-full bg-white px-7 py-4 text-base font-semibold text-slate-950 shadow-lg hover:bg-emerald-50 sm:w-auto"
            >
              {ctaText}
              <FiArrowRight className="h-4 w-4" aria-hidden="true" />
            </AdsWhatsAppButton>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            {CLINICAL_STATS.sessionMinutes} min · ${PRICE_TEXT} CLP · por videollamada
          </p>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-4 pb-28 pt-8 md:pb-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Gonzalo Pedrosa · psicólogo clínico · atención online en Chile</p>
          <p>Coordinación por WhatsApp · atención confidencial</p>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-10px_30px_rgba(15,23,42,0.08)] backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-md items-center gap-3">
          <div className="shrink-0">
            <p className="text-xs text-slate-500">
              {CLINICAL_STATS.sessionMinutes} min
            </p>
            <p className="font-bold text-slate-950">${PRICE_TEXT}</p>
          </div>
          <AdsWhatsAppButton
            href={whatsappHref}
            label={`${whatsappLabel}-sticky`}
            className="w-full bg-[#1f9d55] py-3.5 font-semibold text-white shadow-md hover:bg-[#188447]"
          >
            {ctaText}
          </AdsWhatsAppButton>
        </div>
      </div>
    </main>
  );
}
