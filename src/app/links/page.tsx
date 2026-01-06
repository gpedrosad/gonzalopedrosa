"use client";

import Link from "next/link";
import { useState } from "react";
import sitemapFn from "../sitemap";

// Metadata se maneja con generateMetadata en route o con export const metadata
// Pero como es "use client", usamos un approach diferente

export default function LinksPage() {
  const pages = sitemapFn();
  const baseUrl = "https://gonzalopedrosa.cl";

  // Estado para contar clicks por path
  const [clicks, setClicks] = useState<Record<string, number>>({});
  const [copied, setCopied] = useState(false);

  const handleClick = (path: string) => {
    setClicks((prev) => ({
      ...prev,
      [path]: (prev[path] || 0) + 1,
    }));
  };

  const handleCopyKeywords = async () => {
    // Extraer solo las keywords SEO (sin /, /agendar, /terapia-online)
    const keywords = pages
      .map((page) => page.url.replace(baseUrl, "").replace("/", ""))
      .filter(
        (k) =>
          k &&
          k !== "agendar" &&
          k !== "terapia-online" &&
          (k.includes("psicologo") ||
            k.includes("terapia") ||
            k.includes("tratamiento") ||
            k.includes("hora"))
      );

    const text = keywords.join("\n");

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback para navegadores sin soporte
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Extraer path de cada URL
  const links = pages.map((page) => {
    const path = page.url.replace(baseUrl, "") || "/";
    return {
      path,
      url: page.url,
      priority: page.priority,
    };
  });

  // Agrupar por categoría
  const principal = links.filter((l) => l.path === "/" || l.path === "/agendar");
  const servicios = links.filter(
    (l) =>
      l.path.includes("psicologo") ||
      l.path.includes("terapia") ||
      l.path.includes("tratamiento") ||
      l.path.includes("hora")
  );
  const otros = links.filter(
    (l) => !principal.includes(l) && !servicios.includes(l)
  );

  const totalClicks = Object.values(clicks).reduce((a, b) => a + b, 0);

  const LinkCard = ({ path, url }: { path: string; url: string }) => {
    const count = clicks[path] || 0;

    return (
      <Link
        href={path}
        target="_blank"
        onClick={() => handleClick(path)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.75rem 1rem",
          backgroundColor: count > 0 ? "#f0fdf4" : "#fafafa",
          border: count > 0 ? "1px solid #bbf7d0" : "1px solid transparent",
          borderRadius: "8px",
          textDecoration: "none",
          color: "#000",
          fontSize: "0.875rem",
          transition: "all 150ms",
        }}
      >
        <div>
          <span style={{ fontWeight: 500 }}>
            {path === "/" ? "Inicio" : path}
          </span>
          <span
            style={{
              display: "block",
              fontSize: "0.75rem",
              color: "#999",
              marginTop: "0.25rem",
            }}
          >
            {url}
          </span>
        </div>
        {count > 0 && (
          <span
            style={{
              padding: "0.25rem 0.625rem",
              backgroundColor: "#22c55e",
              color: "#fff",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 600,
              minWidth: "1.5rem",
              textAlign: "center",
            }}
          >
            {count}
          </span>
        )}
      </Link>
    );
  };

  return (
    <>
      {/* No-index meta tag */}
      <head>
        <meta name="robots" content="noindex, nofollow" />
        <title>Links - Panel de revisión</title>
      </head>

      <main
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "2rem 1.5rem",
          fontFamily:
            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                marginBottom: "0.25rem",
              }}
            >
              Panel de Links
            </h1>
            <p style={{ color: "#666", fontSize: "0.875rem" }}>
              {links.length} páginas · Click para abrir en nueva pestaña
            </p>
          </div>
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <button
              onClick={handleCopyKeywords}
              style={{
                padding: "0.375rem 0.75rem",
                backgroundColor: copied ? "#22c55e" : "#000",
                color: "#fff",
                borderRadius: "9999px",
                fontSize: "0.75rem",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                transition: "background-color 150ms",
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
              }}
            >
              {copied ? "✓ Copiado" : "📋 Copiar keywords"}
            </button>
            {totalClicks > 0 && (
              <span
                style={{
                  padding: "0.375rem 0.75rem",
                  backgroundColor: "#171717",
                  color: "#fff",
                  borderRadius: "9999px",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                }}
              >
                {totalClicks} clicks
              </span>
            )}
            <span
              style={{
                padding: "0.375rem 0.75rem",
                backgroundColor: "#fef3c7",
                color: "#92400e",
                borderRadius: "9999px",
                fontSize: "0.75rem",
                fontWeight: 600,
              }}
            >
              NO INDEXADA
            </span>
          </div>
        </div>

        {principal.length > 0 && (
          <section style={{ marginBottom: "2rem" }}>
            <h2
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#999",
                marginBottom: "0.75rem",
              }}
            >
              Principal ({principal.length})
            </h2>
            <div style={{ display: "grid", gap: "0.5rem" }}>
              {principal.map((link) => (
                <LinkCard key={link.path} path={link.path} url={link.url} />
              ))}
            </div>
          </section>
        )}

        {servicios.length > 0 && (
          <section style={{ marginBottom: "2rem" }}>
            <h2
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#999",
                marginBottom: "0.75rem",
              }}
            >
              Servicios / Landings SEO ({servicios.length})
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "0.5rem",
              }}
            >
              {servicios.map((link) => (
                <LinkCard key={link.path} path={link.path} url={link.url} />
              ))}
            </div>
          </section>
        )}

        {otros.length > 0 && (
          <section style={{ marginBottom: "2rem" }}>
            <h2
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#999",
                marginBottom: "0.75rem",
              }}
            >
              Otros ({otros.length})
            </h2>
            <div style={{ display: "grid", gap: "0.5rem" }}>
              {otros.map((link) => (
                <LinkCard key={link.path} path={link.path} url={link.url} />
              ))}
            </div>
          </section>
        )}

        <footer
          style={{
            paddingTop: "2rem",
            borderTop: "1px solid #eaeaea",
            textAlign: "center",
          }}
        >
          <p style={{ color: "#999", fontSize: "0.75rem" }}>
            Esta página no está indexada · Los contadores se reinician al
            refrescar
          </p>
        </footer>
      </main>
    </>
  );
}
