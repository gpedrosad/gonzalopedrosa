import {
  HEALTH_PROVIDER_REGISTRY_LABEL,
  HEALTH_PROVIDER_REGISTRY_URL,
} from "@/lib/site-config";

type AdsProviderRegistryProps = {
  className?: string;
  withVerifyLink?: boolean;
};

export function AdsProviderRegistry({
  className = "text-sm text-gray-500",
  withVerifyLink = false,
}: AdsProviderRegistryProps) {
  return (
    <p className={className}>
      {HEALTH_PROVIDER_REGISTRY_LABEL}
      {withVerifyLink ? (
        <>
          {" · "}
          <a
            href={HEALTH_PROVIDER_REGISTRY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 rounded-sm"
          >
            Verificar
          </a>
        </>
      ) : null}
    </p>
  );
}
