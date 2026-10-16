import { diferenciales } from "../content";

export function WhyUs() {
  return (
    <section className="px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight mb-4">
          Por qué elegirnos
        </h2>

        <ul className="bg-white rounded-2xl border border-gray-200 divide-y divide-gray-100">
          {diferenciales.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 px-4 py-3 text-[15px] text-gray-700"
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
