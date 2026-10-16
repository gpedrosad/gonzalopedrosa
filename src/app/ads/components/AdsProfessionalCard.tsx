import { AdsProfileImage } from "./AdsProfileImage";
import { AdsProviderRegistry } from "./AdsProviderRegistry";

type AdsProfessionalCardProps = {
  /** Línea bajo el nombre, ej. "Psicólogo clínico · Enfoque cognitivo-conductual". */
  role: string;
  /** Una o dos frases sobre cómo trabajas con este motivo de consulta. */
  bio?: string;
  /** Chips cortos (máx. 3). */
  tags?: string[];
  className?: string;
};

/**
 * Ficha "Te atiende" para ubicar justo después del hero: foto, nombre, registro
 * verificable y una bajada propia de cada landing.
 */
export function AdsProfessionalCard({
  role,
  bio,
  tags,
  className = "",
}: AdsProfessionalCardProps) {
  return (
    <section className={`px-4 pb-8 ${className}`}>
      <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-gray-200 shadow-sm p-4 md:p-5">
        <div className="flex items-center gap-4">
          <AdsProfileImage
            alt="Gonzalo Pedrosa, psicólogo clínico"
            width={80}
            height={80}
            className="rounded-2xl object-cover flex-shrink-0"
          />
          <div className="min-w-0">
            <p className="text-[13px] font-medium uppercase tracking-wider text-green-700 mb-0.5">
              Te atiende
            </p>
            <p className="font-semibold text-gray-900 text-lg leading-tight">
              Gonzalo Pedrosa
            </p>
            <p className="text-sm text-gray-600">{role}</p>
            <AdsProviderRegistry className="text-[13px] text-gray-600 mt-1" withVerifyLink />
          </div>
        </div>

        {bio ? (
          <p className="text-sm text-gray-600 leading-relaxed mt-4">{bio}</p>
        ) : null}

        {tags?.length ? (
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-[13px] text-gray-700 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200"
              >
                <span className="text-green-600" aria-hidden="true">
                  ✓
                </span>
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
