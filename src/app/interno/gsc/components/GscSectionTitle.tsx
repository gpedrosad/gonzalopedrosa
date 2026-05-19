export function GscSectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontSize: "0.75rem",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        color: "#999",
        marginBottom: "0.75rem",
      }}
    >
      {children}
    </h2>
  );
}
