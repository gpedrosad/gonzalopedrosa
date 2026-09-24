import { AdsWhatsAppButton } from "../../components/AdsWhatsAppButton";
import {
  formatClp,
  h1,
  hero,
  precios,
  whatsappParticular,
} from "../content";
import { ProfesionalFoto } from "./ProfesionalFoto";

const waClass =
  "w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-md justify-center";

export function Hero() {
  return (
    <section className="px-4 pt-8 pb-8 max-w-2xl mx-auto">
      <ul className="flex flex-wrap gap-2 mb-4">
        {hero.badges.map((badge) => (
          <li
            key={badge}
            className="inline-flex items-center gap-1.5 bg-green-50 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full border border-green-200"
          >
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" aria-hidden="true" />
            {badge}
          </li>
        ))}
      </ul>

      <h1 className="text-[26px] leading-tight md:text-3xl font-bold text-gray-900 tracking-tight mb-3">
        {h1}
      </h1>

      <p className="text-base text-gray-600 mb-3 leading-relaxed">{hero.subtitulo}</p>

      <p className="text-sm text-gray-700 mb-5 leading-relaxed">{hero.microcopy}</p>

      <div
        id="whatsapp"
        className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-4 mb-3"
      >
        <div className="flex items-center justify-between gap-3 mb-3">
          <div>
            <p className="text-sm text-gray-600">{hero.precioDetalle}</p>
            <p className="text-2xl font-bold text-gray-900">
              {formatClp(precios.particular)}{" "}
              <span className="text-sm font-normal text-gray-500">CLP</span>
            </p>
          </div>
          <ProfesionalFoto
            size={56}
            priority
            className="rounded-full object-cover border-2 border-white shadow-md"
          />
        </div>
        <AdsWhatsAppButton
          href={whatsappParticular}
          label="ads-os10-hero"
          adsEvent="click_whatsapp"
          className={waClass}
        >
          {hero.ctaWhatsapp}
        </AdsWhatsAppButton>
        <p className="text-xs text-gray-500 text-center mt-2">
          Respuesta por WhatsApp · Sin compromiso
        </p>
      </div>

      <div className="flex flex-col items-center gap-2">
        <a
          href="#como-funciona"
          className="text-sm font-medium text-gray-900 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 rounded-sm"
        >
          {hero.ctaComoFunciona}
        </a>
      </div>
    </section>
  );
}
