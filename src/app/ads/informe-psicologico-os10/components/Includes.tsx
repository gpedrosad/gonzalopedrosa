import { incluye, noIncluye } from "../content";

export function Includes() {
  return (
    <section id="que-incluye" className="px-4 py-8 bg-gray-50 scroll-mb-28">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
          Qué incluye
        </h2>
        <div className="bg-white rounded-2xl border border-gray-200 p-5 mb-4">
          <ul className="space-y-2">
            {incluye.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-[15px] text-gray-700"
              >
                <span className="text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-5">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
            Qué no incluye
          </h3>
          <ul className="space-y-2">
            {noIncluye.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-[15px] text-gray-700"
              >
                <span className="text-gray-400 mt-0.5 flex-shrink-0" aria-hidden="true">
                  —
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-600 leading-relaxed mt-4">
            El curso OS10 y la credencial son trámites aparte, en el instituto y
            ante la autoridad. Aquí solo está la evaluación y el informe psicológico.
          </p>
        </div>
      </div>
    </section>
  );
}
