import Link from "next/link";
import {
  HEALTH_PROVIDER_REGISTRY_LABEL,
  HEALTH_PROVIDER_REGISTRY_URL,
} from "@/lib/site-config";

/** Datos profesionales verificables para las páginas orgánicas principales. */
export function ProfessionalCredentials() {
  return (
    <aside aria-label="Profesional a cargo" style={{ padding: "1.25rem", border: "1px solid #eaeaea", borderRadius: "12px", marginBottom: "3rem" }}>
      <p style={{ fontWeight: 600, marginBottom: "0.5rem" }}>
        Atención con Gonzalo Pedrosa, psicólogo
      </p>
      <p style={{ color: "#444", fontSize: "0.9375rem", lineHeight: 1.6, marginBottom: "0.75rem" }}>
        {HEALTH_PROVIDER_REGISTRY_LABEL}. Puedes consultar el registro de la
        Superintendencia de Salud con este número o mi nombre.
      </p>
      <div style={{ display: "flex", gap: "0.75rem 1.25rem", flexWrap: "wrap", fontSize: "0.875rem" }}>
        <Link href="/perfil" style={{ color: "#000", textDecoration: "underline" }}>
          Conoce mi perfil profesional
        </Link>
        <a href={HEALTH_PROVIDER_REGISTRY_URL} target="_blank" rel="noopener noreferrer" style={{ color: "#000", textDecoration: "underline" }}>
          Consulta el registro profesional
        </a>
        <Link href="/primera-consulta-psicologo-chillan" style={{ color: "#000", textDecoration: "underline" }}>
          Qué esperar de la primera consulta
        </Link>
      </div>
    </aside>
  );
}
