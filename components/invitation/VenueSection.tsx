// CONFIGURAR: Cambia el nombre, dirección y el link de Google Maps a continuación
const VENUE_NAME = "Salón Don Santiago";
const VENUE_ADDRESS =
  "25 de Mayo de 1810 N°2900, Florencio Varela, Provincia de Buenos Aires";
const VENUE_DATE = "Sábado, 20 de Junio de 2026";
const VENUE_TIME = "21:00 hs";
const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/hauKH1TBAxTycqSH7";

export default function VenueSection() {
  return (
    <section className="bg-[#fdf6f0] py-20 px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-10">
        {/* Title */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-[#c9a84c]" />
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#c9a84c]">
              El Lugar
            </span>
            <div className="w-12 h-px bg-[#c9a84c]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#3b2a2a] text-balance text-center">
            ¿Dónde celebramos?
          </h2>
        </div>

        {/* Card */}
        <div className="w-full border border-[#e8d0d0] rounded-2xl overflow-hidden bg-white shadow-sm">
          {/* Decorative top band */}
          <div className="h-2 bg-gradient-to-r from-[#c9607e] via-[#c9a84c] to-[#c9607e]" />

          <div className="p-8 md:p-12 flex flex-col items-center gap-6 text-center">
            {/* Icon */}
            <div className="w-14 h-14 rounded-full bg-[#fdf6f0] border border-[#e8d0d0] flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                  fill="#c9607e"
                />
              </svg>
            </div>

            {/* Venue details */}
            <div className="flex flex-col gap-2">
              <h3 className="font-serif text-3xl font-light text-[#3b2a2a]">
                {VENUE_NAME}
              </h3>
              <p className="font-sans text-[#9a7a7a] text-sm leading-relaxed">
                {VENUE_ADDRESS}
              </p>
            </div>

            {/* Divider */}
            <div className="w-16 h-px bg-[#e8d0d0]" />

            {/* Date & time */}
            <div className="flex gap-8 flex-wrap justify-center">
              <div className="flex flex-col items-center gap-1">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="18"
                    rx="2"
                    ry="2"
                    stroke="#c9a84c"
                    strokeWidth="2"
                  />
                  <line
                    x1="16"
                    y1="2"
                    x2="16"
                    y2="6"
                    stroke="#c9a84c"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="8"
                    y1="2"
                    x2="8"
                    y2="6"
                    stroke="#c9a84c"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="3"
                    y1="10"
                    x2="21"
                    y2="10"
                    stroke="#c9a84c"
                    strokeWidth="2"
                  />
                </svg>
                <span className="font-sans text-sm text-[#3b2a2a]">
                  {VENUE_DATE}
                </span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="#c9a84c"
                    strokeWidth="2"
                  />
                  <polyline
                    points="12 7 12 12 15 15"
                    stroke="#c9a84c"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-sans text-sm text-[#3b2a2a]">
                  {VENUE_TIME}
                </span>
              </div>
            </div>

            {/* Button */}
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 bg-[#c9607e] hover:bg-[#b84f6d] text-white font-sans text-sm tracking-[0.15em] uppercase px-8 py-3 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9607e]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                  fill="white"
                />
              </svg>
              Ver en Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
