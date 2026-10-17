import Link from "next/link";
import {
  GUIDE_HUB,
  informationalPath,
  pagesByCluster,
  QUESTION_HUB,
} from "@/lib/informational-content";
import { ORGANIC_SERVICE_GROUPS } from "@/lib/organic-service-directory";

export function OrganicServiceDirectory() {
  return (
    <section aria-labelledby="consulta-por-tema" style={{ marginBottom: "3rem" }}>
      <h2 id="consulta-por-tema" style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem" }}>
        Encuentra orientación según tu motivo de consulta
      </h2>
      <p style={{ color: "#666", lineHeight: 1.6, marginBottom: "1rem" }}>
        Empieza por una guía o una pregunta si quieres entender el tema. Más abajo
        está la información de cada motivo de consulta.
      </p>
      <div style={{ display: "grid", gap: "0.5rem" }}>
        {[
          {
            title: "Guías para entender",
            links: [
              [GUIDE_HUB.path, GUIDE_HUB.h1],
              ...pagesByCluster("guias").map((page) => [informationalPath(page), page.navLabel]),
            ],
          },
          {
            title: "Preguntas frecuentes",
            links: [
              [QUESTION_HUB.path, QUESTION_HUB.h1],
              ...pagesByCluster("preguntas").map((page) => [informationalPath(page), page.navLabel]),
            ],
          },
        ].map((group) => (
          <details key={group.title} style={{ border: "1px solid #eaeaea", borderRadius: "12px", padding: "1rem" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000", lineHeight: 1.5 }}>
              {group.title}
            </summary>
            <ul style={{ listStyle: "none", padding: 0, margin: "0.75rem 0 0" }}>
              {group.links.map(([href, label]) => (
                <li key={href}>
                  <Link href={href} prefetch={false} style={{ display: "block", padding: "0.625rem 0", color: "#444", fontSize: "0.9375rem", lineHeight: 1.5, textDecoration: "underline", textUnderlineOffset: "3px" }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        ))}
        {ORGANIC_SERVICE_GROUPS.map((group) => (
          <details key={group.title} style={{ border: "1px solid #eaeaea", borderRadius: "12px", padding: "1rem" }}>
            <summary style={{ cursor: "pointer", fontWeight: 500, color: "#000", lineHeight: 1.5 }}>
              {group.title}
            </summary>
            <ul style={{ listStyle: "none", padding: 0, margin: "0.75rem 0 0" }}>
              {group.links.map(([href, label]) => (
                <li key={href}>
                  <Link href={href} prefetch={false} style={{ display: "block", padding: "0.625rem 0", color: "#444", fontSize: "0.9375rem", lineHeight: 1.5, textDecoration: "underline", textUnderlineOffset: "3px" }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </section>
  );
}
