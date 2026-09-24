import { LANDING_PATH, PHONE_PUBLIC, profesional, whatsappParticular } from "../content";

export function Footer() {
  const year = new Date().getFullYear();
  const registro = [
    profesional.nombre,
    profesional.rol.toLowerCase(),
    profesional.rut ? `RUT ${profesional.rut}` : null,
    profesional.registroSuperintendencia
      ? `Registro Superintendencia ${profesional.registroSuperintendencia}`
      : "Registro Superintendencia de Salud",
    `${profesional.ciudad}, Chile`,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <footer className="px-4 pt-8 pb-28 bg-white border-t border-gray-200">
      <div className="max-w-2xl mx-auto text-sm text-gray-600">
        <p className="leading-relaxed mb-4">{registro}</p>
        <ul className="flex flex-wrap gap-x-4 gap-y-2 mb-4">
          <li>
            <a
              href={`${LANDING_PATH}/privacidad`}
              className="underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 rounded-sm"
            >
              Privacidad
            </a>
          </li>
          <li>
            <a
              href={`${LANDING_PATH}/terminos`}
              className="underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 rounded-sm"
            >
              Términos
            </a>
          </li>
          <li>
            <a
              href={whatsappParticular}
              target="_blank"
              rel="noopener noreferrer"
              data-wa-track="1"
              data-wa-label="ads-os10-footer"
              data-ads-event="click_whatsapp"
              className="underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 rounded-sm"
            >
              WhatsApp
            </a>
          </li>
          <li>
            <a
              href={`mailto:${profesional.email}`}
              className="underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 rounded-sm"
            >
              {profesional.email}
            </a>
          </li>
          {PHONE_PUBLIC ? (
            <li>
              <a href={`tel:+${PHONE_PUBLIC}`} className="underline underline-offset-4">
                +{PHONE_PUBLIC}
              </a>
            </li>
          ) : null}
        </ul>
        <p className="text-gray-500">© {year} {profesional.nombre}</p>
      </div>
    </footer>
  );
}
