"use client";

import { useState } from "react";
import { GscCard } from "./GscCard";
import { GscSectionTitle } from "./GscSectionTitle";

const ITEMS: string[] = [
  "Rendimiento: tendencias de clics, impresiones, CTR y posición",
  "Insights: contenido y consultas top / en alza o baja (si aplica)",
  "Indexación de páginas: vistas aisladas Indexadas vs No indexadas",
  "Motivos de exclusión: revisar tendencias de causas clave",
  "Sitemaps: todos en Success; conteos de URLs indexadas estables",
  "Core Web Vitals: móvil en buen estado / a mejorar / pobre",
  "Mejoras (rich results): sin ítems inválidos nuevos (críticos)",
  "Enlaces: sin acciones manuales; desautorizar solo si aplica",
  "Exportar datos a hoja de cálculo (instantánea de fin de mes)",
  "Capturar capturas de pantalla de gráficos para historial",
  "Releer notas de release para correlacionar con cambios en GSC",
];

export function MonthlyAuditChecklist() {
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  const toggle = (i: number) => {
    setChecked((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  return (
    <section style={{ marginBottom: "2.5rem" }}>
      <GscSectionTitle>Checklist mensual (skill GSC)</GscSectionTitle>
      <GscCard>
        <p style={{ fontSize: "0.875rem", color: "#666", lineHeight: 1.6, marginBottom: "1rem" }}>
          Lista estática basada en la skill; marca lo revisado en esta sesión (no se guarda en
          servidor).
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {ITEMS.map((label, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.65rem",
                marginBottom: "0.6rem",
                fontSize: "0.875rem",
                color: "#333",
                lineHeight: 1.5,
              }}
            >
              <input
                type="checkbox"
                checked={Boolean(checked[i])}
                onChange={() => toggle(i)}
                style={{ marginTop: "0.2rem", flexShrink: 0 }}
                aria-label={`Checklist: ${label}`}
              />
              <button
                type="button"
                onClick={() => toggle(i)}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  textAlign: "left",
                  cursor: "pointer",
                  color: checked[i] ? "#999" : "#111",
                  textDecoration: checked[i] ? "line-through" : "none",
                  font: "inherit",
                }}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </GscCard>
    </section>
  );
}
