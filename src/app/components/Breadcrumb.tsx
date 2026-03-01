// src/app/components/Breadcrumb.tsx
"use client";

import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        marginBottom: "1.5rem",
        fontSize: "0.875rem",
      }}
    >
      <ol
        style={{
          display: "flex",
          gap: "0.5rem",
          listStyle: "none",
          padding: 0,
          margin: 0,
          color: "#666",
          flexWrap: "wrap",
        }}
      >
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            {index > 0 && (
              <span style={{ color: "#ccc" }} aria-hidden="true">
                /
              </span>
            )}
            {item.href ? (
              <Link
                href={item.href}
                style={{
                  color: "#666",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#000";
                  e.currentTarget.style.textDecoration = "underline";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#666";
                  e.currentTarget.style.textDecoration = "none";
                }}
              >
                {item.label}
              </Link>
            ) : (
              <span
                style={{
                  color: "#000",
                  fontWeight: 500,
                }}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
