import Link from "next/link";
import { ORGANIC_SERVICE_GROUPS } from "@/lib/organic-service-directory";

export function OrganicServiceDirectory() {
  return (
    <section aria-labelledby="consulta-por-tema" style={{ marginBottom: "3rem" }}>
      <h2 id="consulta-por-tema" style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.75rem" }}>
        Encuentra orientación según tu motivo de consulta
      </h2>
      <p style={{ color: "#666", lineHeight: 1.6, marginBottom: "1rem" }}>
        Revisa cada tema para conocer la atención disponible, preparar tu primera
        sesión o consultar valores y modalidades.
      </p>
      <div style={{ display: "grid", gap: "0.5rem" }}>
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
