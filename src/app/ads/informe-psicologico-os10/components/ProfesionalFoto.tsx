import Image from "next/image";
import { AdsProfileImage } from "../../components/AdsProfileImage";
import { profesional } from "../content";

export function ProfesionalFoto({
  size,
  priority = false,
  className,
}: {
  size: number;
  priority?: boolean;
  className?: string;
}) {
  if (profesional.fotoSrc === "/yo.png") {
    return (
      <AdsProfileImage
        alt={profesional.fotoAlt}
        width={size}
        height={size}
        priority={priority}
        className={className}
      />
    );
  }

  return (
    <Image
      src={profesional.fotoSrc}
      alt={profesional.fotoAlt}
      width={size}
      height={size}
      priority={priority}
      className={className}
    />
  );
}
