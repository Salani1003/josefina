"use client";

export default function HashtagSection() {
  return (
    <section className="bg-[#3b2a2a] py-20 px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-8">
        {/* Decorative title */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-[#c9a84c]" />
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#c9a84c]">
              compartamos recuerdos
            </span>
            <div className="w-12 h-px bg-[#c9a84c]" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-light text-white">
            Saquemos muchas fotos ✨
          </h2>
        </div>

        {/* Main text */}
        <p className="font-sans text-white/70 text-base md:text-lg leading-relaxed max-w-2xl">
          Quiero llenar mi galería de fotos, videos, selfies, bailes, bloopers y
          recuerdos de esta noche increíble 💖
        </p>

        {/* Hashtag box */}
        <div className="border border-[#c9a84c]/50 rounded-2xl px-8 py-6 bg-white/5 backdrop-blur-sm">
          <p className="font-sans text-[#f0d98a]/70 text-xs tracking-[0.3em] uppercase mb-2">
            Usá el hashtag
          </p>

          <span className="font-serif text-3xl md:text-5xl text-[#f0d98a] font-light tracking-wide">
            #Jose15
          </span>
        </div>

        {/* Funny footer */}
        <p className="font-sans text-white/50 text-sm italic max-w-md">
          Y si me encontrás llorando, cantando o haciendo papelones… necesito
          pruebas 📸😌
        </p>
      </div>
    </section>
  );
}
