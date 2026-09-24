import { pasos } from "../content";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="px-4 py-8 scroll-mb-28">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
          Cómo funciona
        </h2>
        <ol className="space-y-3">
          {pasos.map((item) => (
            <li key={item.step} className="flex gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="flex-shrink-0 w-7 h-7 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                {item.step}
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-gray-900 text-[15px] mb-0.5">
                  {item.titulo}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.texto}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
