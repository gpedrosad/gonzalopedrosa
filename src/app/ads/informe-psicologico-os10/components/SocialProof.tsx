import { profesional, testimonios } from "../content";

export function SocialProof() {
  const publicados = testimonios.filter((item) => item.publicar);
  const bullets = [
    profesional.evaluacionesOs10
      ? `+${profesional.evaluacionesOs10} evaluaciones`
      : null,
    "Entrega el mismo día en casos simples",
    "Horarios compatibles con turnos",
  ].filter((item): item is string => Boolean(item));

  return (
    <section className="px-4 py-8 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
          En la práctica
        </h2>
        <ul className="space-y-2">
          {bullets.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 p-3 bg-white rounded-lg text-[15px] text-gray-700"
            >
              <span className="text-green-600 flex-shrink-0" aria-hidden="true">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>

        {publicados.length > 0 ? (
          <ul className="space-y-3 mt-4">
            {publicados.map((item) => (
              <li
                key={`${item.cargo}-${item.texto}`}
                className="p-4 bg-white rounded-xl border border-gray-200"
              >
                <p className="text-[15px] text-gray-800 leading-relaxed">“{item.texto}”</p>
                <p className="text-sm text-gray-500 mt-2">
                  {item.nombre} · {item.cargo}
                </p>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
