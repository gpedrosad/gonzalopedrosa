import { GscSectionTitle } from "./GscSectionTitle";

export function GscDataTable({
  title,
  headers,
  rows,
}: {
  title: string;
  headers: string[];
  rows: string[][];
}) {
  return (
    <section style={{ marginBottom: "2.5rem" }}>
      <GscSectionTitle>{title}</GscSectionTitle>
      <div style={{ overflowX: "auto", border: "1px solid #eaeaea", borderRadius: 12 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #eaeaea", textAlign: "left" }}>
              {headers.map((header) => (
                <th
                  key={header}
                  style={{ padding: "0.5rem 0.75rem", color: "#666", fontWeight: 500 }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={headers.length} style={{ padding: "1rem", color: "#999" }}>
                  Sin datos en este período
                </td>
              </tr>
            ) : (
              rows.map((row, index) => (
                <tr key={index} style={{ borderBottom: "1px solid #f0f0f0" }}>
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      style={{
                        padding: "0.5rem 0.75rem",
                        color: cellIndex === 0 ? "#111" : "#444",
                        maxWidth: cellIndex === 0 ? 360 : undefined,
                        wordBreak: "break-word",
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
