import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/app/components/JsonLd";
import {
  SITE_URL,
  localBusinessSchema,
  getServiceSchema,
  getFAQSchema,
  getTwitterDescription,
} from "@/lib/schemas";

const description =
  "Psicólogo en Chillán con más de 7 años de experiencia. Terapia cognitivo-conductual presencial y online. Ansiedad, depresión y estrés. Agenda tu primera sesión por web o WhatsApp.";

export const metadata: Metadata = {
  title: "Psicólogo en Chillán | Online y presencial | Gonzalo Pedrosa",
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Psicólogo en Chillán | Gonzalo Pedrosa",
    description,
    url: SITE_URL,
    type: "website",
    images: [{ url: "/yo.png", width: 1200, height: 630, alt: "Gonzalo Pedrosa - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicólogo en Chillán | Gonzalo Pedrosa",
    description: getTwitterDescription(
      "TCC presencial y online en Chillán. +7 años de experiencia. Agenda tu sesión por web o WhatsApp."
    ),
  },
};

const homeFAQs = [
  {
    question: "¿Atiendes solo en Chillán?",
    answer:
      "Tengo consulta presencial en Chillán y también sesiones por videollamada para personas de otras comunas o regiones de Chile.",
  },
  {
    question: "¿Cuánto cuesta una sesión?",
    answer:
      "Cada sesión de 50 minutos tiene un valor de $35.000. Emito boleta para reembolso Isapre según tu plan.",
  },
];

const faqSchema = getFAQSchema(homeFAQs);
const serviceSchema = getServiceSchema({
  serviceType: "Psicoterapia individual",
  description:
    "Atención psicológica con enfoque cognitivo-conductual en Chillán, presencial y online.",
  areaServed: "Chillán",
});

const testimonios = [
  {
    texto:
      "Me ayudó mucho a entender mis patrones de pensamiento. Muy profesional y cercano.",
    autor: "M.C.",
  },
  {
    texto:
      "Después de varias sesiones pude manejar mejor mi ansiedad. Recomendado.",
    autor: "P.R.",
  },
  {
    texto:
      "Un espacio seguro donde pude hablar sin sentirme juzgado. Gracias por la ayuda.",
    autor: "J.S.",
  },
  {
    texto:
      "La terapia online funcionó muy bien para mí. Flexible y efectiva.",
    autor: "A.M.",
  },
];

export default function HomePage() {
  return (
    <>
      <main
        style={{
          maxWidth: 640,
          margin: "0 auto",
          padding: "2.5rem 1.5rem 4rem",
          fontFamily:
            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        {/* Hero */}
        <section style={{ textAlign: "center", marginBottom: "2rem" }}>
          <Image
            src="/yo.png"
            alt="Gonzalo Pedrosa - Psicólogo"
            width={120}
            height={120}
            priority
            sizes="120px"
            fetchPriority="high"
            style={{
              borderRadius: "9999px",
              objectFit: "cover",
              marginBottom: "1.5rem",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />

          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              marginBottom: "0.5rem",
              lineHeight: 1.1,
            }}
          >
            Psicólogo en Chillán
          </h1>

          <p
            style={{
              fontSize: "1.125rem",
              color: "#666",
              marginBottom: "0.5rem",
            }}
          >
            Gonzalo Pedrosa · Terapia cognitivo-conductual
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <span style={{ color: "#fbbf24", fontSize: "1.125rem" }}>★</span>
            <span style={{ fontWeight: 600 }}>4.8</span>
            <span style={{ color: "#999", fontSize: "0.875rem" }}>
              · 124 reseñas
            </span>
          </div>
        </section>
        <section
          style={{
            marginBottom: "2rem",
            padding: "1rem 1.25rem",
            backgroundColor: "#fafafa",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "0.8125rem", color: "#444", lineHeight: 1.6, margin: 0 }}>
            TCC con respaldo científico · Boleta Isapre · Confidencial · Presencial y{" "}
            <Link href="/psicologo-online-chillan" style={{ color: "#000", textDecoration: "underline" }}>
              online
            </Link>
          </p>
        </section>

        <p
          style={{
            fontSize: "1.0625rem",
            color: "#444",
            lineHeight: 1.7,
            maxWidth: 480,
            margin: "0 auto 1.5rem",
            textAlign: "center",
          }}
        >
          Acompañamiento profesional para ansiedad, depresión y estrés. Espacio seguro,
          confidencial y con enfoque práctico basado en evidencia.
        </p>

        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "4rem",
          }}
        >
          <Link
            href="/agendar"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.875rem 1.75rem",
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: "9999px",
              textDecoration: "none",
              fontWeight: 500,
              fontSize: "0.9375rem",
            }}
          >
            Agendar sesión →
          </Link>
          <Link
            href="/psicologo-online-chillan"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0.875rem 1.75rem",
              backgroundColor: "transparent",
              color: "#000",
              border: "1px solid #e5e5e5",
              borderRadius: "9999px",
              textDecoration: "none",
              fontWeight: 500,
              fontSize: "0.9375rem",
            }}
          >
            Psicólogo online
          </Link>
        </div>

        {/* Servicio principal */}
        <section
          style={{
            padding: "1.5rem",
            backgroundColor: "#fafafa",
            borderRadius: "16px",
            marginBottom: "3rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "1rem",
            }}
          >
            <div>
              <h2 style={{ fontSize: "1.125rem", fontWeight: 600, marginBottom: "0.25rem" }}>
                Sesión individual
              </h2>
              <p style={{ color: "#666", fontSize: "0.875rem" }}>
                50 minutos ·{" "}
                <Link href="/terapia-online" style={{ color: "#666", textDecoration: "underline" }}>
                  Cómo funciona la terapia online
                </Link>
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={{ fontSize: "1.25rem", fontWeight: 700 }}>$35.000</p>
              <p style={{ color: "#666", fontSize: "0.75rem" }}>CLP</p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            <span
              style={{
                padding: "0.375rem 0.75rem",
                backgroundColor: "#fff",
                border: "1px solid #e5e5e5",
                borderRadius: "9999px",
                fontSize: "0.8125rem",
                color: "#666",
              }}
            >
              Presencial Chillán
            </span>
            <Link
              href="/psicologo-online-chillan"
              style={{
                padding: "0.375rem 0.75rem",
                backgroundColor: "#fff",
                border: "1px solid #e5e5e5",
                borderRadius: "9999px",
                fontSize: "0.8125rem",
                color: "#666",
                textDecoration: "none",
              }}
            >
              Online
            </Link>
          </div>
        </section>

        {/* Áreas de trabajo */}
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
            Áreas de trabajo
          </h2>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {[
              { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
              { label: "Crisis de pánico", href: "/psicologo-crisis-de-panico-chillan" },
              { label: "Depresión", href: "/psicologo-depresion-chillan" },
              { label: "Estrés" },
              { label: "Autoestima", href: "/psicologo-baja-autoestima-chillan" },
              { label: "Duelo", href: "/psicologo-duelo-chillan" },
              { label: "Relaciones", href: "/terapia-de-pareja-chillan" },
              { label: "Hábitos" },
            ].map((item, i) =>
              item.href ? (
                <Link
                  key={i}
                  href={item.href}
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#fafafa",
                    borderRadius: "9999px",
                    fontSize: "0.875rem",
                    color: "#444",
                    textDecoration: "none",
                  }}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  key={i}
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#fafafa",
                    borderRadius: "9999px",
                    fontSize: "0.875rem",
                    color: "#444",
                  }}
                >
                  {item.label}
                </span>
              ),
            )}
          </div>
        </section>

        {/* Servicios en Chillán */}
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
            Servicios en Chillán
          </h2>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {[
              { label: "Ansiedad", href: "/psicologo-ansiedad-chillan" },
              { label: "Depresión", href: "/psicologo-depresion-chillan" },
              { label: "Psicólogo online Chillán", href: "/psicologo-online-chillan" },
              { label: "Terapia de pareja", href: "/terapia-de-pareja-chillan" },
              { label: "TCC", href: "/psicologo-cognitivo-conductual-chillan" },
              { label: "Primera consulta", href: "/primera-consulta-psicologo-chillan" },
              { label: "Precio consulta", href: "/consulta-psicologica-precio-chillan" },
              { label: "Psicólogo para hombres", href: "/psicologo-hombres-chillan" },
              { label: "Agendar sesión", href: "/agendar" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                style={{
                  color: "#666",
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  padding: "0.5rem 1rem",
                  backgroundColor: "#fafafa",
                  borderRadius: "9999px",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>

        {/* Sobre mí */}
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
            Sobre mí
          </h2>
          <p style={{ color: "#444", lineHeight: 1.7, marginBottom: "1rem" }}>
            Soy psicólogo con más de 7 años de experiencia en atención clínica.
            Trabajo principalmente con terapia cognitivo-conductual, un enfoque
            práctico y basado en evidencia.
          </p>
          <p style={{ color: "#444", lineHeight: 1.7 }}>
            Creo en una terapia cercana, sin juicios, donde puedas sentirte
            cómodo para explorar lo que necesitas trabajar. Conoce más en{" "}
            <Link href="/perfil" style={{ color: "#000", textDecoration: "underline" }}>
              mi perfil profesional
            </Link>
            .
          </p>
        </section>

        {/* Testimonios */}
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
            Lo que dicen quienes han consultado
          </h2>
          <div style={{ display: "grid", gap: "0.75rem" }}>
            {testimonios.map((t, i) => (
              <div
                key={i}
                style={{
                  padding: "1.25rem",
                  backgroundColor: "#fafafa",
                  borderRadius: "12px",
                }}
              >
                <p
                  style={{
                    color: "#444",
                    lineHeight: 1.6,
                    marginBottom: "0.75rem",
                    fontSize: "0.9375rem",
                  }}
                >
                  &ldquo;{t.texto}&rdquo;
                </p>
                <p style={{ color: "#999", fontSize: "0.8125rem" }}>— {t.autor}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Final */}
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
            ¿Listo para dar el primer paso?
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              marginBottom: "1.5rem",
              fontSize: "0.9375rem",
            }}
          >
            Reserva tu primera sesión presencial u online.
          </p>
          <Link
            href="/agendar"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.875rem 1.75rem",
              backgroundColor: "#fff",
              color: "#000",
              borderRadius: "9999px",
              textDecoration: "none",
              fontWeight: 500,
              fontSize: "0.9375rem",
            }}
          >
            Ir a agendar →
          </Link>
        </section>

        <footer
          style={{
            paddingTop: "2rem",
            borderTop: "1px solid #eaeaea",
            textAlign: "center",
          }}
        >
          <p style={{ color: "#999", fontSize: "0.8125rem" }}>
            © 2025 Gonzalo Pedrosa · Psicólogo
          </p>
        </footer>
      </main>
      <JsonLd id="local-business" data={localBusinessSchema} />
      <JsonLd id="service" data={serviceSchema} />
      <JsonLd id="faq-schema" data={faqSchema} />
    </>
  );
}
