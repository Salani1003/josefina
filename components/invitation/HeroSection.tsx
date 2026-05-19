"use client";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#3b2a2a]">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent z-10" />

      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #c9a84c 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-16 flex flex-col items-center gap-6">
        {/* Ornamental top */}
        <div className="flex items-center gap-3">
          <div className="w-16 h-px bg-[#f0d98a]" />
          <span className="text-[#f0d98a] text-sm font-sans tracking-[0.3em] uppercase">
            te invitamos a celebrar
          </span>
          <div className="w-16 h-px bg-[#f0d98a]" />
        </div>

        {/* Main name */}
        <div className="flex flex-col items-center gap-2">
          <h1 className="font-serif text-7xl md:text-9xl text-white font-light leading-none tracking-wide text-balance">
            Josefina
          </h1>
          <div className="flex items-center gap-4 mt-2">
            <div className="w-10 h-px bg-[#c9a84c]" />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M12 2L13.5 8.5L20 7L15.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L8.5 12L4 7L10.5 8.5L12 2Z"
                fill="#c9a84c"
              />
            </svg>
            <div className="w-10 h-px bg-[#c9a84c]" />
          </div>
        </div>

        {/* Number 15 */}
        <div className="relative">
          <span
            className="font-serif text-[10rem] md:text-[14rem] leading-none font-light text-transparent"
            style={{WebkitTextStroke: "2px #c9a84c"}}
          >
            15
          </span>
          <span className="absolute inset-0 flex items-center justify-center font-serif text-[10rem] md:text-[14rem] leading-none font-light text-white/10">
            15
          </span>
        </div>

        {/* Subtitle */}
        <p className="font-sans text-[#f0d98a] text-base md:text-lg tracking-[0.25em] uppercase font-light">
          Mis quince años
        </p>

        {/* Date badge */}
        <div className="mt-4 border border-[#c9a84c]/60 px-8 py-3 rounded-full">
          <p className="font-sans text-white tracking-[0.2em] uppercase text-sm">
            Una noche mágica e inolvidable
          </p>

          <p className="font-serif text-white text-lg md:text-xl font-light mt-5">
            Sábado 20 de Junio de 2026
          </p>
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent z-10" />

      {/* Scroll indicator */}
      <div className="absolute bottom-2 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-8 bg-[#f0d98a]/60" />
        <div className="w-2 h-2 rounded-full bg-[#f0d98a]/60" />
      </div>
    </section>
  );
}
