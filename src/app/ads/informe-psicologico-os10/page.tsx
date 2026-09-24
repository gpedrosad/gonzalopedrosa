import type { Metadata } from "next";
import { AdsEvents } from "./components/AdsEvents";
import { Audience } from "./components/Audience";
import { Disclaimer } from "./components/Disclaimer";
import { Faq } from "./components/Faq";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Includes } from "./components/Includes";
import { Pricing } from "./components/Pricing";
import { SocialProof } from "./components/SocialProof";
import { StickyBar } from "./components/StickyBar";
import { WhyUs } from "./components/WhyUs";
import {
  faqs,
  formatClp,
  h1,
  h1Activa,
  LANDING_PATH,
  LANDING_URL,
  precios,
  profesional,
  seo,
  WHATSAPP_NUMBER,
} from "./content";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  robots: { index: false, follow: false },
  alternates: { canonical: LANDING_URL },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: LANDING_URL,
    type: "website",
    locale: "es_CL",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: profesional.fotoAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/og.png"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: `${h1} — ${profesional.nombre}`,
  description: seo.description,
  url: LANDING_URL,
  image: "https://www.gonzalopedrosa.cl/yo.png",
  telephone: `+${WHATSAPP_NUMBER}`,
  email: profesional.email,
  priceRange: `${formatClp(precios.particular)} CLP`,
  address: {
    "@type": "PostalAddress",
    addressLocality: profesional.ciudad,
    addressCountry: "CL",
  },
  areaServed: { "@type": "Country", name: "Chile" },
  provider: {
    "@type": "Person",
    name: profesional.nombre,
    jobTitle: profesional.rol,
  },
  makesOffer: {
    "@type": "Offer",
    name: "Evaluación + informe OS10",
    price: String(precios.particular),
    priceCurrency: "CLP",
    url: LANDING_URL,
    availability: "https://schema.org/InStock",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function InformePsicologicoOs10Page() {
  return (
    <>
      <script
        id="os10-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        id="os10-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AdsEvents landing={LANDING_PATH} h1Variant={h1Activa} />

      <main className="min-h-screen bg-white">
        <Hero />
        <SocialProof />
        <Audience />
        <Includes />
        <HowItWorks />
        <Pricing />
        <WhyUs />
        <Faq />
        <Disclaimer />
        <FinalCta />
        <Footer />
      </main>

      <StickyBar />
    </>
  );
}
