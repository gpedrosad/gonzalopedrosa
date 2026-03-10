import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { WhatsAppButton } from "@/app/components/WhatsAppButton";
import {
  alcoholismPages,
  alcoholClusterOrder,
  type AlcoholismPageKey,
} from "@/lib/alcoholism-pages";
import { getTwitterDescription } from "@/lib/schemas";
import { CANONICAL_ORIGIN } from "@/lib/site-config";

const BUSINESS_NAME = "Gonzalo Pedrosa - Psicólogo";
const BUSINESS_PHONE = "+56968257817";
const BUSINESS_IMAGE = `${CANONICAL_ORIGIN}/yo.png`;

const buildWhatsAppHref = (message: string) =>
  `https://wa.me/56968257817?text=${encodeURIComponent(message)}`;

const buildFaqSchema = (
  faqs: Array<{ question: string; answer: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

const buildBreadcrumbSchema = (pageKey: AlcoholismPageKey) => {
  const page = alcoholismPages[pageKey];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: CANONICAL_ORIGIN,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.shortTitle,
        item: `${CANONICAL_ORIGIN}${page.slug}`,
      },
    ],
  };
};

const buildMedicalBusinessSchema = (pageKey: AlcoholismPageKey) => {
  const page = alcoholismPages[pageKey];
  const pageUrl = `${CANONICAL_ORIGIN}${page.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${pageUrl}#medical-business`,
    name: BUSINESS_NAME,
    url: pageUrl,
    image: BUSINESS_IMAGE,
    description: page.description,
    telephone: BUSINESS_PHONE,
    priceRange: "$35.000 CLP",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chillán",
      addressRegion: "Región de Ñuble",
      addressCountry: "CL",
    },
    areaServed: {
      "@type": "City",
      name: "Chillán",
    },
    availableService: {
      "@type": "Service",
      name: page.serviceType,
      description: page.description,
      areaServed: {
        "@type": "City",
        name: "Chillán",
      },
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    sameAs: ["https://wa.me/56968257817"],
  };
};

const buildServiceSchema = (pageKey: AlcoholismPageKey) => {
  const page = alcoholismPages[pageKey];

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.serviceType,
    serviceType: page.serviceType,
    description: page.description,
    areaServed: {
      "@type": "City",
      name: "Chillán",
    },
    provider: {
      "@type": "Person",
      name: "Gonzalo Pedrosa",
      jobTitle: "Psicólogo Clínico",
      url: CANONICAL_ORIGIN,
    },
    offers: {
      "@type": "Offer",
      price: "35000",
      priceCurrency: "CLP",
      availability: "https://schema.org/InStock",
      url: `${CANONICAL_ORIGIN}${page.slug}`,
    },
  };
};

export function getAlcoholismPageMetadata(
  pageKey: AlcoholismPageKey
): Metadata {
  const page = alcoholismPages[pageKey];
  const pageUrl = `${CANONICAL_ORIGIN}${page.slug}`;

  return {
    title: page.metaTitle,
    description: page.description,
    alternates: {
      canonical: page.slug,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.description,
      url: pageUrl,
      type: "website",
      locale: "es_CL",
      images: [
        {
          url: "/yo.png",
          width: 1200,
          height: 630,
          alt: "Gonzalo Pedrosa - Psicólogo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: getTwitterDescription(page.description),
      images: ["/yo.png"],
    },
  };
}

export function AlcoholismLandingPage({
  pageKey,
}: {
  pageKey: AlcoholismPageKey;
}) {
  const page = alcoholismPages[pageKey];
  const relatedPages = alcoholClusterOrder
    .filter((candidateKey) => candidateKey !== pageKey)
    .map((candidateKey) => alcoholismPages[candidateKey]);
  const faqSchema = buildFaqSchema(page.faqs);
  const breadcrumbSchema = buildBreadcrumbSchema(pageKey);
  const medicalBusinessSchema = buildMedicalBusinessSchema(pageKey);
  const serviceSchema = buildServiceSchema(pageKey);
  const whatsappHref = buildWhatsAppHref(page.whatsappMessage);

  return (
    <>
      <Script
        id={`${pageKey}-medical-business`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalBusinessSchema),
        }}
      />
      <Script
        id={`${pageKey}-service`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id={`${pageKey}-breadcrumb`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id={`${pageKey}-faq`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-white">
        <section className="border-b border-stone-200 bg-[radial-gradient(circle_at_top,_rgba(245,245,244,0.95),_white_60%)]">
          <div className="mx-auto max-w-4xl px-4 pb-10 pt-8 md:pb-14 md:pt-14">
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex flex-wrap items-center gap-2 text-sm text-stone-500"
            >
              <Link href="/" className="transition hover:text-stone-900">
                Inicio
              </Link>
              <span aria-hidden="true">/</span>
              <span className="font-medium text-stone-900">{page.shortTitle}</span>
            </nav>

            <div className="mb-8 flex items-center gap-4 rounded-2xl border border-stone-200 bg-white/90 p-4 shadow-sm">
              <Image
                src="/yo.png"
                alt="Gonzalo Pedrosa - Psicólogo"
                width={64}
                height={64}
                priority
                className="rounded-full border border-stone-200 object-cover"
              />
              <div>
                <p className="text-base font-semibold text-stone-900">
                  Gonzalo Pedrosa
                </p>
                <p className="text-sm text-stone-600">
                  Psicólogo clínico · Terapia online para adultos en Chillán
                </p>
              </div>
            </div>

            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                {page.intentLabel}
              </p>
              <h1 className="text-3xl font-bold tracking-tight text-stone-900 md:text-5xl md:leading-[1.05]">
                {page.h1}
              </h1>
              <p className="mt-5 text-base leading-8 text-stone-600 md:text-lg">
                {page.lead}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {page.heroHighlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-700"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-8 md:py-10">
          <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
            {page.quickFacts.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-stone-200 bg-stone-50 p-5"
              >
                <h2 className="mb-2 text-lg font-semibold text-stone-900">
                  {item.title}
                </h2>
                <p className="text-sm leading-6 text-stone-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {page.sections.map((section, index) => (
          <section
            key={section.title}
            className={
              index % 2 === 0 ? "bg-white px-4 py-8 md:py-12" : "bg-stone-50 px-4 py-8 md:py-12"
            }
          >
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-5 text-2xl font-bold tracking-tight text-stone-900 md:text-3xl">
                {section.title}
              </h2>

              <div className="space-y-4 text-base leading-8 text-stone-700">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {section.bullets ? (
                <ul className="mt-6 grid gap-3">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-4 text-sm leading-6 text-stone-700"
                    >
                      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-600" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </section>
        ))}

        <section className="bg-stone-900 px-4 py-10 md:py-14">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-white md:text-3xl">
              {page.processTitle}
            </h2>

            <div className="grid gap-4 md:grid-cols-3">
              {page.processSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
                    Paso {index + 1}
                  </p>
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-6 text-stone-300">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-8 md:py-12">
          <div className="mx-auto max-w-4xl rounded-3xl border border-stone-200 bg-stone-50 p-6 md:p-8">
            <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                  Enlaces internos
                </p>
                <h2 className="text-2xl font-bold tracking-tight text-stone-900">
                  Otras páginas sobre alcoholismo en Chillán
                </h2>
              </div>
              <Link
                href="/terapia-online"
                className="text-sm font-medium text-stone-700 underline decoration-stone-300 underline-offset-4 transition hover:text-stone-900"
              >
                Ver terapia online
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {relatedPages.map((relatedPage) => (
                <Link
                  key={relatedPage.slug}
                  href={relatedPage.slug}
                  className="rounded-2xl border border-stone-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-stone-300 hover:shadow-sm"
                >
                  <h3 className="mb-2 text-lg font-semibold text-stone-900">
                    {relatedPage.shortTitle}
                  </h3>
                  <p className="text-sm leading-6 text-stone-600">
                    {relatedPage.cardDescription}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-stone-50 px-4 py-8 md:py-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-stone-900 md:text-3xl">
              {page.faqTitle}
            </h2>

            <div className="space-y-4">
              {page.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-2xl border border-stone-200 bg-white p-5"
                >
                  <summary className="cursor-pointer list-none text-lg font-semibold text-stone-900">
                    {faq.question}
                  </summary>
                  <p className="mt-4 text-base leading-8 text-stone-700">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-stone-950 px-4 py-12 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
              Llamado a la acción
            </p>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-white md:text-3xl">
              {page.ctaTitle}
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-base leading-8 text-stone-300">
              {page.ctaDescription}
            </p>

            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <WhatsAppButton
                href={whatsappHref}
                className="bg-[#25D366] font-semibold text-white shadow-lg hover:bg-[#20bd5a]"
              >
                Agendar terapia online
              </WhatsAppButton>
              <Link
                href="/agendar"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/5"
              >
                Ir a agenda online
              </Link>
            </div>

            <p className="mt-4 text-sm text-stone-500">
              Atención online para adultos desde Chillán y otras ciudades.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
