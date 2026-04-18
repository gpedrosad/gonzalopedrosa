import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import {
  localBusinessSchema,
  getBreadcrumbSchema,
  getServiceSchema,
  getFAQSchema,
  getTwitterDescription,
} from "@/lib/schemas";

const description =
  "Terapia online vs presencial en Chillán: ventajas, límites y para quién conviene cada modalidad. Psicólogo con TCC. Agenda sesión presencial u online.";

export const metadata: Metadata = {
  title: "Terapia online vs presencial en Chillán | Comparación | Gonzalo Pedrosa",
  description,
  alternates: {
    canonical: "/terapia-online-vs-presencial-chillan",
  },
  openGraph: {
    title: "Terapia online vs presencial en Chillán | Gonzalo Pedrosa",
    description,
    url: "https://www.gonzalopedrosa.cl/terapia-online-vs-presencial-chillan",
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terapia online vs presencial en Chillán",
    description: getTwitterDescription(
      "Compara modalidades con criterios claros. Misma calidad clínica; eliges según tu contexto. Chillán y videollamada."
    ),
  },
};

const breadcrumbItems = [
  { label: "Inicio", href: "/" },
  { label: "Terapia online vs presencial" },
];

const comparacionFAQs = [
  {
    question: "¿La terapia online es tan efectiva como la presencial?",
    answer:
      "Los estudios con TCC muestran resultados comparables entre ambas modalidades para muchos problemas de ansiedad y estado de anímico, siempre que haya buena conexión a internet y un espacio privado. La diferencia suele estar en la preferencia personal, no en la “fuerza” del método.",
  },
  {
    question: "¿Puedo alternar online y presencial?",
    answer:
      "Sí, muchas personas combinan según la semana: por ejemplo, online cuando hay poco tiempo de traslado y presencial cuando quieren el ritual de salir de casa. Lo coordinamos para que el trabajo terapéutico siga siendo continuo.",
  },
  {
    question: "¿Qué necesito para sesión online?",
    answer:
      "Un dispositivo con cámara, conexión estable y un lugar donde no te interrumpan durante unos 50 minutos. Uso plataformas habituales de videollamada; te envío el enlace con anticipación.",
  },
  {
    question: "¿Hay diferencia de precio entre online y presencial?",
    answer:
      "No: el valor por sesión es el mismo. Emito boleta para reembolso Isapre en ambas modalidades.",
  },
];

const faqSchema = getFAQSchema(comparacionFAQs);
const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);
const serviceSchema = getServiceSchema({
  serviceType: "Psicoterapia presencial y online",
  description:
    "Orientación sobre modalidades de atención: videollamada o consulta en Chillán, con Terapia Cognitivo-Conductual y misma tarifa en ambas.",
  areaServed: "Chillán",
});

const filasComparacion = [
  {
    criterio: "Privacidad inmediata",
    online: "Depende de tu hogar u oficina; podés usar auriculares.",
    presencial: "Consulta con espacio reservado para la sesión.",
  },
  {
    criterio: "Tiempo y desplazamiento",
    online: "Sin traslado; útil si vivís lejos del centro o tenés jornadas largas.",
    presencial: "Incluye ida y vuelta; a veces ayuda a “cortar” con la rutina.",
  },
  {
    criterio: "Contacto no verbal",
    online: "Se ve buena parte del lenguaje corporal; el encuadre importa.",
    presencial: "Mayor contexto ambiental (cómo entrás, cómo te sentís en la sala).",
  },
  {
    criterio: "Crisis o malestar muy intenso",
    online: "Exige que tengas un lugar seguro y, si aplica, red de apoyo cerca.",
    presencial: "Puede sentirse más contenido para quien prefiere salir del entorno diario.",
  },
];

export default function TerapiaOnlineVsPresencialChillanPage() {
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
      <main
        style={{
          maxWidth: 640,
          margin: "0 auto",
          padding: "4rem 1.5rem",
          fontFamily:
            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        <Breadcrumb items={breadcrumbItems} />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          <Image
            src="/yo.png"
            alt="Gonzalo Pedrosa - Psicólogo"
            width={64}
            height={64}
            priority
            style={{
              borderRadius: "9999px",
              objectFit: "cover",
            }}
          />
          <div>
            <p style={{ fontWeight: 600, marginBottom: "0.125rem" }}>Gonzalo Pedrosa</p>
            <p style={{ fontSize: "0.875rem", color: "#666" }}>
              Psicólogo Clínico · +7 años de experiencia
            </p>
          </div>
        </div>

        <p
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#999",
            marginBottom: "0.75rem",
          }}
        >
          Chillán, Chile
        </p>

        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            marginBottom: "1rem",
            lineHeight: 1.1,
          }}
        >
          Terapia online vs presencial en Chillán
        </h1>

        <p
          style={{
            fontSize: "1.125rem",
            color: "#666",
            marginBottom: "3rem",
            lineHeight: 1.6,
          }}
        >
          No hay una respuesta única “mejor”: depende de tu estilo de vida, privacidad en casa y qué
          te ayuda a comprometerte con el proceso. Abajo comparo criterios concretos —sin marketing
          vacío— para que elijas con lógica, no con culpa.
        </p>

        <section style={{ marginBottom: "3rem", overflowX: "auto" }}>
          <h2
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#999",
              marginBottom: "1rem",
            }}
          >
            Comparación directa
          </h2>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "0.875rem",
            }}
          >
            <thead>
              <tr style={{ borderBottom: "1px solid #eaeaea" }}>
                <th style={{ textAlign: "left", padding: "0.75rem 0.5rem", color: "#666" }}>Criterio</th>
                <th style={{ textAlign: "left", padding: "0.75rem 0.5rem", color: "#000" }}>Online</th>
                <th style={{ textAlign: "left", padding: "0.75rem 0.5rem", color: "#000" }}>Presencial</th>
              </tr>
            </thead>
            <tbody>
              {filasComparacion.map((fila, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #f0f0f0" }}>
                  <td style={{ padding: "0.75rem 0.5rem", fontWeight: 600, color: "#444", verticalAlign: "top" }}>
                    {fila.criterio}
                  </td>
                  <td style={{ padding: "0.75rem 0.5rem", color: "#555", verticalAlign: "top" }}>
                    {fila.online}
                  </td>
                  <td style={{ padding: "0.75rem 0.5rem", color: "#555", verticalAlign: "top" }}>
                    {fila.presencial}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#999",
              marginBottom: "1rem",
            }}
          >
            Para quién suele encajar cada opción
          </h2>
          <div style={{ display: "grid", gap: "0.75rem" }}>
            <div style={{ padding: "1rem", backgroundColor: "#fafafa", borderRadius: "8px" }}>
              <p style={{ fontWeight: 600, marginBottom: "0.35rem", color: "#000" }}>Online</p>
              <p style={{ fontSize: "0.9375rem", color: "#555", lineHeight: 1.6 }}>
                Horarios ajustados, vida en comunas vecinas con poco transporte, preferencia por
                sesionar desde un espacio ya conocido, o necesidad de continuidad cuando viajás.
              </p>
            </div>
            <div style={{ padding: "1rem", backgroundColor: "#fafafa", borderRadius: "8px" }}>
              <p style={{ fontWeight: 600, marginBottom: "0.35rem", color: "#000" }}>Presencial en Chillán</p>
              <p style={{ fontSize: "0.9375rem", color: "#555", lineHeight: 1.6 }}>
                Quienes se concentran mejor fuera del hogar, valoran el ritual de la consulta o
                sienten que internet en casa no es confiable para hablar con libertad.
              </p>
            </div>
          </div>
          <p style={{ marginTop: "1rem", fontSize: "0.9375rem", color: "#666", lineHeight: 1.7 }}>
            En ambos casos ofrezco el mismo enfoque:{" "}
            <Link href="/psicologo-cognitivo-conductual-chillan" style={{ color: "#000", textDecoration: "underline" }}>
              TCC
            </Link>
            . Más detalle del formato digital en{" "}
            <Link href="/terapia-online" style={{ color: "#000", textDecoration: "underline" }}>
              terapia online
            </Link>
            .
          </p>
        </section>

        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#999",
              marginBottom: "1rem",
            }}
          >
            Preguntas frecuentes
          </h2>
          <div style={{ display: "grid", gap: "0.5rem" }}>
            {comparacionFAQs.map((faq, index) => (
              <details
                key={index}
                style={{
                  padding: "1rem",
                  border: "1px solid #eaeaea",
                  borderRadius: "12px",
                }}
              >
                <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000" }}>
                  {faq.question}
                </summary>
                <p
                  style={{
                    marginTop: "0.75rem",
                    color: "#666",
                    lineHeight: 1.6,
                    fontSize: "0.9375rem",
                  }}
                >
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section
          style={{
            padding: "2rem",
            backgroundColor: "#000",
            borderRadius: "16px",
            marginBottom: "3rem",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 600,
              marginBottom: "0.75rem",
              color: "#fff",
            }}
          >
            Elige modalidad al agendar
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              marginBottom: "1.5rem",
              fontSize: "0.9375rem",
            }}
          >
            Coordinamos el primer encuentro por{" "}
            <Link href="/agendar" style={{ color: "#fff", textDecoration: "underline" }}>
              la página de agendamiento
            </Link>{" "}
            o por WhatsApp.
          </p>
          <a
            href="https://wa.me/56968257817"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 1.5rem",
              backgroundColor: "#fff",
              color: "#000",
              borderRadius: "9999px",
              textDecoration: "none",
              fontWeight: 500,
              fontSize: "0.875rem",
            }}
          >
            Coordinar por WhatsApp →
          </a>
        </section>

        <nav style={{ paddingTop: "2rem", borderTop: "1px solid #eaeaea" }}>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#999",
              marginBottom: "0.75rem",
            }}
          >
            Relacionado
          </p>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {[
              { label: "Cuándo ir al psicólogo", href: "/cuando-ir-al-psicologo-chillan" },
              { label: "Primera consulta", href: "/primera-consulta-psicologo-chillan" },
              { label: "Precio y reembolso", href: "/consulta-psicologica-precio-chillan" },
              { label: "Psicólogo online Chillán", href: "/psicologo-online-chillan" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                style={{
                  color: "#666",
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  padding: "0.375rem 0.75rem",
                  border: "1px solid #eaeaea",
                  borderRadius: "9999px",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </main>
    </>
  );
}
