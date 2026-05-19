export default function DressCodeSection() {
  return (
    <section className="bg-[#3b2a2a] py-20 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">
        {/* Title */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-[#c9a84c]" />
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#c9a84c]">
              Vestimenta
            </span>
            <div className="w-12 h-px bg-[#c9a84c]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white text-balance text-center">
            Dress Code
          </h2>

          {/* Main badge */}
          <div className="mt-2 border border-[#c9a84c] px-10 py-3 rounded-full">
            <span className="font-serif text-2xl md:text-3xl text-[#f0d98a] tracking-widest font-light">
              ELEGANTE
            </span>
          </div>
        </div>

        {/* Cards grid */}
        <div className="w-full max-w-md">
          <div className="flex flex-col items-center gap-5 p-10 rounded-2xl border border-white/10 bg-white/5 text-center">
            <div className="w-16 h-16 rounded-full border border-[#c9a84c]/40 flex items-center justify-center bg-white/5">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 2L8 7H2l4 4-1.5 6.5L12 14l7.5 3.5L18 11l4-4h-6L12 2z"
                  stroke="#c9a84c"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="font-serif text-3xl font-light text-[#f0d98a] tracking-wide">
              Elegante
            </h3>

            <p className="font-sans text-white/60 text-sm leading-relaxed max-w-sm">
              Queremos que esa noche todos brillen ✨ Te esperamos con un look
              elegante y acorde a esta gran celebración.
            </p>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center gap-4 w-full max-w-xs">
          <div className="flex-1 h-px bg-[#c9a84c]/30" />
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="#c9a84c"
            aria-hidden="true"
          >
            <path d="M12 2L14.09 8.26L20 9.27L15.55 13.64L16.91 20L12 16.9L7.09 20L8.45 13.64L4 9.27L9.91 8.26L12 2Z" />
          </svg>
          <div className="flex-1 h-px bg-[#c9a84c]/30" />
        </div>
      </div>
    </section>
  );
}
