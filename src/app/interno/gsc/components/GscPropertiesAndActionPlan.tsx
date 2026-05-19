import type { CSSProperties } from "react";

import type { ActionPlanItem } from "@/lib/gsc-analysis";
import type { GscDashboardData } from "@/lib/gsc";
import { GscCard } from "./GscCard";
import { GscSectionTitle } from "./GscSectionTitle";

function priorityStyle(priority: ActionPlanItem["priority"]): CSSProperties {
  if (priority === "alta") return { backgroundColor: "#ffe8e8", color: "#a40000" };
  if (priority === "media") return { backgroundColor: "#fff4e5", color: "#6a3b00" };
  return { backgroundColor: "#f0f0f0", color: "#555" };
}

export function GscPropertiesAndActionPlan({ data }: { data: GscDashboardData }) {
  return (
    <section style={{ marginBottom: "2rem" }}>
      <GscSectionTitle>Propiedades enlazadas a la cuenta Google</GscSectionTitle>
      <GscCard>
        <ul style={{ fontSize: "0.875rem", color: "#444", lineHeight: 1.8, paddingLeft: "1.25rem", margin: 0 }}>
          {data.sites.map((site) => (
            <li key={site.siteUrl}>
              <code style={{ fontSize: "0.8rem" }}>{site.siteUrl}</code>{" "}
              — <span style={{ color: "#666" }}>{site.permissionLevel ?? "—"}</span>
            </li>
          ))}
        </ul>
      </GscCard>

      <div style={{ marginTop: "1.35rem" }}>
        <GscSectionTitle>Plan de acción priorizado (generado automáticamente)</GscSectionTitle>
        <GscCard>
          <p style={{ fontSize: "0.875rem", color: "#555", lineHeight: 1.65, marginBottom: "0.85rem" }}>
            Arma prioridades mezclando indexación técnica, CTR, consistencia de host (www), sitemaps,
            tendencias de caída y balance marca/no marca. Es orientativo: valida siempre con contexto de negocio.
          </p>
          <ol style={{ paddingLeft: "1.25rem", margin: 0, lineHeight: 1.65, fontSize: "0.875rem" }}>
            {data.actionPlan.map((item, i) => (
              <li key={`${item.title}-${i}`} style={{ marginBottom: "1rem" }}>
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    padding: "0.15rem 0.45rem",
                    borderRadius: 6,
                    marginRight: "0.5rem",
                    verticalAlign: "middle",
                    ...priorityStyle(item.priority),
                  }}
                >
                  {item.priority}
                </span>
                <strong style={{ color: "#111" }}>{item.title}</strong>
                <p style={{ color: "#666", margin: "0.35rem 0 0", paddingLeft: "0.1rem" }}>{item.detail}</p>
              </li>
            ))}
          </ol>
        </GscCard>
      </div>
    </section>
  );
}
