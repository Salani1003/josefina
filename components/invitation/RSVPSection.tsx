// CONFIGURAR: Reemplaza esta URL con tu formulario de Google Forms
const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfnb3_gk3_yO_6cKiGLFZ0jEvPjlZTBPiZ6nm5hQhV3avDOqQ/viewform?usp=publish-editor";

export default function RSVPSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-10">
        {/* Title */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-[#c9a84c]" />
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#c9a84c]">
              Confirmación
            </span>
            <div className="w-12 h-px bg-[#c9a84c]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#3b2a2a] text-balance text-center">
            ¿Venís a celebrar?
          </h2>
          <p className="font-sans text-[#9a7a7a] text-sm max-w-sm text-center leading-relaxed">
            Tu presencia es el mejor regalo. Por favor confirmá tu asistencia
            antes del
            <span className="text-[#c9607e] font-semibold"> 12 de Junio</span>.
          </p>
        </div>

        {/* Card */}
        <div className="w-full border border-[#e8d0d0] rounded-2xl overflow-hidden bg-[#fdf6f0] shadow-sm max-w-md">
          <div className="p-8 md:p-10 flex flex-col items-center gap-6 text-center">
            {/* Envelope icon */}
            <div className="w-16 h-16 rounded-full bg-white border border-[#e8d0d0] flex items-center justify-center shadow-sm">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  stroke="#c9607e"
                  strokeWidth="2"
                  fill="none"
                />
                <polyline
                  points="22,6 12,13 2,6"
                  stroke="#c9607e"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-serif text-2xl font-light text-[#3b2a2a]">
                Confirmá tu asistencia
              </h3>
            </div>

            {/* Stars decoration */}
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="#c9a84c"
                  aria-hidden="true"
                >
                  <path d="M12 2L14.09 8.26L20 9.27L15.55 13.64L16.91 20L12 16.9L7.09 20L8.45 13.64L4 9.27L9.91 8.26L12 2Z" />
                </svg>
              ))}
            </div>

            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#c9607e] hover:bg-[#b84f6d] text-white font-sans text-sm tracking-[0.15em] uppercase px-8 py-4 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9607e]"
            >
              Confirmar asistencia
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <p className="font-sans text-[#9a7a7a] text-xs">
              Serás redirigido a un formulario de Google
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
