"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const HIDDEN_PREFIXES = ["/ads", "/sitelink", "/interno", "/links"];

export function OrganicReadFooter() {
  const pathname = usePathname() || "/";
  const hidden = HIDDEN_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
  if (hidden) return null;

  return (
    <footer
      style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: "1.25rem 1.5rem 2.5rem",
        borderTop: "1px solid #eee",
      }}
    >
      <nav aria-label="Guías y preguntas">
        <p
          style={{
            margin: "0 0 0.5rem",
            fontSize: "0.75rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "#888",
          }}
        >
          Para leer más
        </p>
        <p style={{ margin: 0, fontSize: "0.875rem", color: "#444" }}>
          <Link href="/guias" style={{ color: "#111" }}>
            Guías
          </Link>
          {" · "}
          <Link href="/preguntas" style={{ color: "#111" }}>
            Preguntas
          </Link>
        </p>
      </nav>
    </footer>
  );
}
