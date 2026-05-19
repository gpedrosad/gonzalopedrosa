import Script from "next/script";
import {
  localBusinessSchema,
  getBreadcrumbSchema,
  getServiceSchema,
  getFAQSchema,
  type BreadcrumbItem,
} from "@/lib/schemas";

interface OrganicSeoScriptsProps {
  breadcrumbItems: BreadcrumbItem[];
  faqs: Array<{ question: string; answer: string }>;
  serviceType: string;
  serviceDescription: string;
  areaServed?: string;
}

/** Schemas SEO para landings orgánicas (no usar en Ads). */
export function OrganicSeoScripts({
  breadcrumbItems,
  faqs,
  serviceType,
  serviceDescription,
  areaServed = "Chillán",
}: OrganicSeoScriptsProps) {
  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);
  const serviceSchema = getServiceSchema({
    serviceType,
    description: serviceDescription,
    areaServed,
  });
  const faqSchema = getFAQSchema(faqs);

  return (
    <>
      <Script
        id="local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
