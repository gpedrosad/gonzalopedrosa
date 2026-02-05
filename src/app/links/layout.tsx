import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panel interno de enlaces | Gonzalo Pedrosa",
  description:
    "Herramienta interna para revisar enlaces y contenidos del sitio.",
  alternates: {
    canonical: "/links",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function LinksLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
