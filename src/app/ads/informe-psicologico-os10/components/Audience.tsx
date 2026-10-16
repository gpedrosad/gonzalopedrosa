import { paraQuien } from "../content";

export function Audience() {
  return (
    <section className="px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight mb-4">
          ¿Para quién es?
        </h2>
        <ul className="bg-white rounded-2xl border border-gray-200 divide-y divide-gray-100">
          {paraQuien.map((item) => (
            <li key={item.titulo} className="px-4 py-3.5">
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
