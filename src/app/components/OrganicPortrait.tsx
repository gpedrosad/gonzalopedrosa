import Image from "next/image";
import { PORTRAIT_ALT } from "@/lib/informational-content";

type OrganicPortraitProps = {
  size?: number;
  priority?: boolean;
};

/** Retrato orgánico con tamaño explícito. Fuera de la portada carga diferido. */
export function OrganicPortrait({ size = 64, priority = false }: OrganicPortraitProps) {
  return (
    <Image
      src="/yo.png"
      alt={PORTRAIT_ALT}
      width={size}
      height={size}
      sizes={`${size}px`}
      priority={priority || undefined}
      loading={priority ? undefined : "lazy"}
      style={{ borderRadius: "9999px", objectFit: "cover" }}
    />
  );
}
