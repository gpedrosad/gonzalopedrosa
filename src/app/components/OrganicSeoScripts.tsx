import { JsonLd } from "@/app/components/JsonLd";
import {
  localBusinessSchema,
  getBreadcrumbSchema,
  getServiceSchema,
  getPageFAQSchema,
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
  const faqSchema = getPageFAQSchema(faqs);

  return (
    <>
      <JsonLd id="local-business" data={localBusinessSchema as Record<string, unknown>} />
      <JsonLd id="breadcrumb" data={breadcrumbSchema as Record<string, unknown>} />
      <JsonLd id="service" data={serviceSchema as Record<string, unknown>} />
      <JsonLd id="faq-schema" data={faqSchema as Record<string, unknown>} />
    </>
  );
}
