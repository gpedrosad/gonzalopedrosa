import { paraQuien } from "../content";

export function Audience() {
  return (
    <section className="px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
          Para quién es
        </h2>
        <ul className="space-y-3">
          {paraQuien.map((item) => (
            <li
              key={item.titulo}
              className="p-4 bg-gray-50 rounded-xl border border-gray-200"
            >
              <h3 className="font-semibold text-gray-900 text-[15px] mb-1">
                {item.titulo}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
