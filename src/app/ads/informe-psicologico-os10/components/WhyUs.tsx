import { diferenciales } from "../content";

export function WhyUs() {
  return (
    <section className="px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
          Por qué elegirnos
        </h2>

        <ul className="space-y-2">
          {diferenciales.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 p-3 bg-gray-50 rounded-lg text-[15px] text-gray-700"
            >
              <span className="text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
