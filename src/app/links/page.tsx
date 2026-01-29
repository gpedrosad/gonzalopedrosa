"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import sitemapFn from "../sitemap";

interface Evaluation {
  estructura: number;
  estructura_comentario: string;
  eeat: number;
  eeat_comentario: string;
  intencion: number;
  intencion_comentario: string;
}

export default function LinksPage() {
  const pages = sitemapFn();
  const baseUrl = "https://gonzalopedrosa.cl";

  const [clicks, setClicks] = useState<Record<string, number>>({});
  const [copied, setCopied] = useState(false);
  const [copiedPath, setCopiedPath] = useState<string | null>(null);
  const [loadingPath, setLoadingPath] = useState<string | null>(null);
  const [evaluatingPath, setEvaluatingPath] = useState<string | null>(null);
  const [evaluations, setEvaluations] = useState<Record<string, Evaluation>>({});
  const [isLocalhost, setIsLocalhost] = useState(false);

  // Detectar si estamos en localhost
  useEffect(() => {
    setIsLocalhost(
      typeof window !== "undefined" && 
      (window.location.hostname === "localhost" || 
       window.location.hostname === "127.0.0.1" ||
       window.location.hostname.includes("local"))
    );
  }, []);

  const handleClick = (path: string) => {
    setClicks((prev) => ({
      ...prev,
      [path]: (prev[path] || 0) + 1,
    }));
  };

  const handleCopyKeywords = async () => {
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
            k.includes("hora") ||
            k.includes("consulta"))
      );

    const text = keywords.join("\n");

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
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

  const extractContent = (element: Element): string => {
    const lines: string[] = [];

    const walk = (node: Element) => {
      const tag = node.tagName.toLowerCase();
      const text = node.textContent?.replace(/\s+/g, " ").trim() || "";

      if (!text) return;

      if (tag === "h1") {
        lines.push(`[H1] ${text}`);
      } else if (tag === "h2") {
        lines.push(`[H2] ${text}`);
      } else if (tag === "h3") {
        lines.push(`[H3] ${text}`);
      } else if (tag === "p") {
        lines.push(`[P] ${text}`);
      } else if (tag === "li") {
        lines.push(`[LI] ${text}`);
      } else if (tag === "summary") {
        lines.push(`[FAQ-Q] ${text}`);
      } else if (tag === "details") {
        const summary = node.querySelector("summary");
        const pInDetails = node.querySelector("p");
        if (summary) {
          lines.push(`[FAQ-Q] ${summary.textContent?.replace(/\s+/g, " ").trim()}`);
        }
        if (pInDetails) {
          lines.push(`[FAQ-A] ${pInDetails.textContent?.replace(/\s+/g, " ").trim()}`);
        }
        return;
      } else if (tag === "a" && node.getAttribute("href")?.startsWith("http")) {
        lines.push(`[CTA] ${text}`);
      } else if (tag === "strong" || tag === "b") {
        lines.push(`[BOLD] ${text}`);
      } else if (["div", "section", "main", "ul", "ol", "nav", "footer", "article"].includes(tag)) {
        Array.from(node.children).forEach(walk);
        return;
      }
    };

    Array.from(element.children).forEach(walk);

    const unique: string[] = [];
    lines.forEach((line) => {
      if (unique[unique.length - 1] !== line) {
        unique.push(line);
      }
    });

    return unique.join("\n");
  };

  const getPageContent = async (path: string): Promise<string> => {
    const response = await fetch(path);
    const html = await response.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    doc.querySelectorAll("script, style, head").forEach((el) => el.remove());

    const main = doc.querySelector("main") || doc.body;
    return main ? extractContent(main) : "";
  };

  const handleCopyPageContent = async (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setLoadingPath(path);

    try {
      const structuredContent = await getPageContent(path);
      const keyword = path === "/" ? "inicio" : path.replace("/", "");
      const fullContent = `keyword: ${keyword}\n\n${structuredContent}`;

      await navigator.clipboard.writeText(fullContent);
      setCopiedPath(path);
      setTimeout(() => setCopiedPath(null), 2000);
    } catch {
      alert("Error al copiar el contenido");
    } finally {
      setLoadingPath(null);
    }
  };

  const handleEvaluate = async (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Verificar si estamos en localhost
    if (!isLocalhost) {
      alert("⚠️ La evaluación con GPT solo está disponible en desarrollo local");
      return;
    }

    setEvaluatingPath(path);

    try {
      const structuredContent = await getPageContent(path);
      const keyword = path === "/" ? "inicio" : path.replace("/", "");

      const response = await fetch("/api/evaluate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          keyword,
          content: structuredContent,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Error en la evaluación");
      }

      const evaluation = await response.json();
      setEvaluations((prev) => ({
        ...prev,
        [path]: evaluation,
      }));
    } catch (error) {
      alert(error instanceof Error ? error.message : "Error al evaluar");
    } finally {
      setEvaluatingPath(null);
    }
  };

  const links = pages.map((page) => {
    const path = page.url.replace(baseUrl, "") || "/";
    return {
      path,
      url: page.url,
      priority: page.priority,
    };
  });

  const principal = links.filter((l) => l.path === "/" || l.path === "/agendar");
  const servicios = links.filter(
    (l) =>
      l.path.includes("psicologo") ||
      l.path.includes("terapia") ||
      l.path.includes("tratamiento") ||
      l.path.includes("hora") ||
      l.path.includes("consulta")
  );
  const otros = links.filter((l) => !principal.includes(l) && !servicios.includes(l));

  const totalClicks = Object.values(clicks).reduce((a, b) => a + b, 0);

  const getScoreColor = (score: number) => {
    if (score >= 80) return "#22c55e";
    if (score >= 60) return "#eab308";
    return "#ef4444";
  };

  const LinkCard = ({ path, url }: { path: string; url: string }) => {
    const count = clicks[path] || 0;
    const isCopied = copiedPath === path;
    const isLoading = loadingPath === path;
    const isEvaluating = evaluatingPath === path;
    const evaluation = evaluations[path];

    return (
      <div
        style={{
          padding: "0.75rem 1rem",
          backgroundColor: count > 0 ? "#f0fdf4" : "#fafafa",
          border: count > 0 ? "1px solid #bbf7d0" : "1px solid transparent",
          borderRadius: "8px",
          transition: "all 150ms",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <Link
            href={path}
            target="_blank"
            onClick={() => handleClick(path)}
            style={{
              flex: 1,
              textDecoration: "none",
              color: "#000",
              fontSize: "0.875rem",
            }}
          >
            <span style={{ fontWeight: 500 }}>{path === "/" ? "Inicio" : path}</span>
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
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
            <button
              onClick={(e) => handleCopyPageContent(path, e)}
              disabled={isLoading}
              title="Copiar contenido"
              style={{
                padding: "0.375rem 0.5rem",
                backgroundColor: isCopied ? "#22c55e" : isLoading ? "#999" : "#e5e5e5",
                color: isCopied ? "#fff" : "#333",
                borderRadius: "6px",
                fontSize: "0.75rem",
                fontWeight: 500,
                border: "none",
                cursor: isLoading ? "wait" : "pointer",
                transition: "all 150ms",
              }}
            >
              {isCopied ? "✓" : isLoading ? "..." : "📄"}
            </button>

            <button
              onClick={(e) => handleEvaluate(path, e)}
              disabled={isEvaluating || !isLocalhost}
              title={isLocalhost ? "Evaluar con GPT" : "Solo disponible en local"}
              style={{
                padding: "0.375rem 0.5rem",
                backgroundColor: isEvaluating ? "#8b5cf6" : !isLocalhost ? "#d1d5db" : "#7c3aed",
                color: !isLocalhost ? "#6b7280" : "#fff",
                borderRadius: "6px",
                fontSize: "0.75rem",
                fontWeight: 500,
                border: "none",
                cursor: isEvaluating ? "wait" : !isLocalhost ? "not-allowed" : "pointer",
                transition: "all 150ms",
                opacity: isEvaluating ? 0.7 : !isLocalhost ? 0.5 : 1,
              }}
            >
              {isEvaluating ? "..." : "🤖"}
            </button>

            {count > 0 && (
              <span
                style={{
                  padding: "0.25rem 0.5rem",
                  backgroundColor: "#22c55e",
                  color: "#fff",
                  borderRadius: "9999px",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  minWidth: "1.25rem",
                  textAlign: "center",
                }}
              >
                {count}
              </span>
            )}
          </div>
        </div>

        {evaluation && (
          <div
            style={{
              marginTop: "0.75rem",
              padding: "0.75rem",
              backgroundColor: "#fff",
              borderRadius: "6px",
              border: "1px solid #e5e5e5",
            }}
          >
            <div style={{ display: "flex", gap: "1rem", marginBottom: "0.75rem" }}>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: getScoreColor(evaluation.estructura),
                  }}
                >
                  {evaluation.estructura}
                </div>
                <div style={{ fontSize: "0.625rem", color: "#666", textTransform: "uppercase" }}>
                  Estructura
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: getScoreColor(evaluation.eeat),
                  }}
                >
                  {evaluation.eeat}
                </div>
                <div style={{ fontSize: "0.625rem", color: "#666", textTransform: "uppercase" }}>
                  EEAT
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: getScoreColor(evaluation.intencion),
                  }}
                >
                  {evaluation.intencion}
                </div>
                <div style={{ fontSize: "0.625rem", color: "#666", textTransform: "uppercase" }}>
                  Intención
                </div>
              </div>
            </div>
            <div style={{ fontSize: "0.6875rem", color: "#666", lineHeight: 1.5 }}>
              <p style={{ marginBottom: "0.25rem" }}>
                <strong>Estructura:</strong> {evaluation.estructura_comentario}
              </p>
              <p style={{ marginBottom: "0.25rem" }}>
                <strong>EEAT:</strong> {evaluation.eeat_comentario}
              </p>
              <p>
                <strong>Intención:</strong> {evaluation.intencion_comentario}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <head>
        <meta name="robots" content="noindex, nofollow" />
        <title>Links - Panel de revisión</title>
      </head>

      <main
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "2rem 1.5rem",
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
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
            <h1 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.25rem" }}>
              Panel de Links
            </h1>
            <p style={{ color: "#666", fontSize: "0.875rem" }}>
              {links.length} páginas · 📄 copiar · 🤖 evaluar SEO con GPT{!isLocalhost && " (solo local)"}
            </p>
          </div>
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", flexWrap: "wrap" }}>
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
              }}
            >
              {copied ? "✓ Copiado" : "📋 Keywords"}
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
            Esta página no está indexada · Evaluación con GPT-4o-mini
          </p>
        </footer>
      </main>
    </>
  );
}
