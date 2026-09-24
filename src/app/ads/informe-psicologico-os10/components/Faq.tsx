import { faqs } from "../content";

export function Faq() {
  return (
    <section className="px-4 py-8 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
          Preguntas frecuentes
        </h2>
        <div className="space-y-2">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="p-4 bg-white rounded-xl border border-gray-200 group"
            >
              <summary className="cursor-pointer font-medium text-gray-900 text-[15px] flex justify-between items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 rounded-sm">
                <span>{faq.q}</span>
                <span
                  className="text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0"
                  aria-hidden="true"
                >
                  ↓
                </span>
              </summary>
              <p className="mt-3 text-gray-700 text-sm leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
