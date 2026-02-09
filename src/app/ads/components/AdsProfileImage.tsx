import Image from "next/image";

type AdsProfileImageProps = {
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function AdsProfileImage({
  alt,
  width,
  height,
  className,
  priority = false,
  sizes,
}: AdsProfileImageProps) {
  return (
    <Image
      src="/yo.png"
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      sizes={sizes ?? `${width}px`}
    />
  );
}
