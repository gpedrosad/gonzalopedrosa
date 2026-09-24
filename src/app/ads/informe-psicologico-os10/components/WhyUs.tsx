import { diferenciales, profesional } from "../content";
import { ProfesionalFoto } from "./ProfesionalFoto";

export function WhyUs() {
  const anos =
    profesional.anosAtencionClinica && profesional.anosAtencionClinica > 0
      ? `Más de ${profesional.anosAtencionClinica} años de atención clínica`
      : null;

  return (
    <section className="px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
          Por qué elegirnos
        </h2>

        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200 mb-4">
          <ProfesionalFoto
            size={56}
            className="rounded-full object-cover ring-2 ring-white"
          />
          <div>
            <p className="font-semibold text-gray-900 text-[15px]">{profesional.nombre}</p>
            <p className="text-sm text-gray-600">
              {profesional.rol} · {profesional.ciudad}
            </p>
            {anos ? <p className="text-sm text-gray-600 mt-1">{anos}</p> : null}
          </div>
        </div>

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
