import Link from "next/link";

export function InternoNav({
  current,
  keyParam,
}: {
  current: "hub" | "gsc" | "ads";
  keyParam?: string;
}) {
  const q = keyParam ? `?key=${encodeURIComponent(keyParam)}` : "";
  const linkStyle = (active: boolean) => ({
    fontSize: "0.875rem",
    color: active ? "#111" : "#666",
    fontWeight: active ? 600 : 400,
    textDecoration: "none",
    padding: "0.35rem 0.65rem",
    borderRadius: 8,
    backgroundColor: active ? "#f0f0f0" : "transparent",
  });

  return (
    <nav
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
        marginBottom: "1.5rem",
        alignItems: "center",
      }}
    >
      <Link href={`/interno${q}`} style={linkStyle(current === "hub")}>
        Hub
      </Link>
      <Link href={`/interno/gsc${q}`} style={linkStyle(current === "gsc")}>
        Search Console
      </Link>
      <Link href={`/interno/ads${q}`} style={linkStyle(current === "ads")}>
        Google Ads
      </Link>
    </nav>
  );
}
