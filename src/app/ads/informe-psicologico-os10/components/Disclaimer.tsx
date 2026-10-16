import { disclaimer } from "../content";

export function Disclaimer() {
  return (
    <section className="px-4 py-8" aria-labelledby="aviso-os10">
      <div className="max-w-2xl mx-auto">
        <h2
          id="aviso-os10"
          className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight mb-4"
        >
          Importante
        </h2>
        <div className="p-4 bg-amber-50 border border-amber-300 rounded-xl">
          <p className="text-gray-900 text-[15px] leading-relaxed">{disclaimer}</p>
        </div>
      </div>
    </section>
  );
}
