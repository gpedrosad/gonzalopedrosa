import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const baseStyles: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    padding: "0.75rem 1.5rem",
    fontSize: "0.875rem",
    fontWeight: 500,
    borderRadius: "9999px",
    textDecoration: "none",
    transition: "all 150ms ease",
    cursor: "pointer",
  };

  const variants: Record<"primary" | "secondary", React.CSSProperties> = {
    primary: {
      ...baseStyles,
      backgroundColor: "#000",
      color: "#fff",
      border: "1px solid #000",
    },
    secondary: {
      ...baseStyles,
      backgroundColor: "transparent",
      color: "#000",
      border: "1px solid #e5e5e5",
    },
  };

  return (
    <Link href={href} style={variants[variant]}>
      {children}
      {variant === "primary" && (
        <span aria-hidden="true" style={{ marginLeft: "0.25rem" }}>
          →
        </span>
      )}
    </Link>
  );
}

