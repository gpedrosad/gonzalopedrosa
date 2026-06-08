import type { CSSProperties } from "react";
import Link from "next/link";

import {
  getClusterForPath,
  getClusterNavPages,
  type ClusterPage,
  type IntentCluster,
} from "@/lib/intent-clusters";

type ExtraLink = {
  label: string;
  href: string;
};

type IntentClusterSectionProps = {
  currentPath: string;
  extraLinks?: ExtraLink[];
};

const pillStyle: CSSProperties = {
  color: "#666",
  fontSize: "0.875rem",
  textDecoration: "none",
  padding: "0.375rem 0.75rem",
  border: "1px solid #eaeaea",
  borderRadius: "9999px",
};

function ClusterCards({
  cluster,
  pages,
  isHub,
}: {
  cluster: IntentCluster;
  pages: ClusterPage[];
  isHub: boolean;
}) {
  return (
    <section
      style={{
        marginBottom: "2rem",
        padding: "1.25rem 1.5rem",
        backgroundColor: "#fafafa",
        borderRadius: "12px",
        border: "1px solid #eaeaea",
      }}
    >
      <p
        style={{
          fontSize: "0.75rem",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "#999",
          marginBottom: "0.5rem",
        }}
      >
        {isHub ? cluster.hubSectionSubtitle : cluster.satelliteSectionTitle}
      </p>
      <h2
        style={{
          fontSize: "1.25rem",
          fontWeight: 700,
          marginBottom: "1rem",
          lineHeight: 1.3,
        }}
      >
        {isHub ? cluster.hubSectionTitle : cluster.hubSectionTitle}
      </h2>
      <div
        style={{
          display: "grid",
          gap: "0.75rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        }}
      >
        {pages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            style={{
              display: "block",
              padding: "1rem",
              backgroundColor: "#fff",
              border:
                page.role === "hub"
                  ? "1px solid #d1fae5"
                  : "1px solid #eaeaea",
              borderRadius: "12px",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <p
              style={{
                fontWeight: 600,
                marginBottom: "0.35rem",
                fontSize: "0.9375rem",
              }}
            >
              {page.shortTitle}
            </p>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "#666",
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              {page.cardDescription}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function IntentClusterSection({
  currentPath,
  extraLinks = [],
}: IntentClusterSectionProps) {
  const cluster = getClusterForPath(currentPath);
  if (!cluster) {
    return null;
  }

  const isHub = currentPath === cluster.hubHref;
  const navPages = getClusterNavPages(cluster, currentPath);

  return (
    <>
      <ClusterCards cluster={cluster} pages={navPages} isHub={isHub} />

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
          {isHub ? "Cluster" : "Volver al hub del cluster"}
        </p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {!isHub ? (
            <Link href={cluster.hubHref} style={{ ...pillStyle, color: "#000", borderColor: "#d1fae5" }}>
              {cluster.hubLabel}
            </Link>
          ) : null}
          {navPages.map((page) => (
            <Link key={page.href} href={page.href} style={pillStyle}>
              {page.label}
            </Link>
          ))}
          {extraLinks.map((item) => (
            <Link key={item.href} href={item.href} style={pillStyle}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
