import Link from "next/link";
import { readingLinksFor } from "@/lib/informational-content";

const pillStyle = {
  color: "#333",
  fontSize: "0.875rem",
  textDecoration: "underline",
  textUnderlineOffset: "3px",
  padding: "0.375rem 0.75rem",
  border: "1px solid #eaeaea",
  borderRadius: "9999px",
} as const;

export function RelatedReading({ currentPath }: { currentPath: string }) {
  const links = readingLinksFor(currentPath).filter((item) => item.href !== currentPath);
  if (links.length === 0) return null;

  return (
    <nav aria-label="Para entender el tema" style={{ margin: "2rem 0" }}>
      <p
        style={{
          fontSize: "0.75rem",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "#888",
          marginBottom: "0.75rem",
        }}
      >
        Para entender el tema
      </p>
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        {links.map((item) => (
          <Link key={item.href} href={item.href} prefetch={false} style={pillStyle}>
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
