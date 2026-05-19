export function GscCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: "1.25rem",
        backgroundColor: "#fafafa",
        borderRadius: 12,
        border: "1px solid #eaeaea",
      }}
    >
      {children}
    </div>
  );
}
