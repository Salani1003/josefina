"use client";

import Image from "next/image";
import {useState} from "react";

const photos = [
  {src: "/Josefina1.jpg"},
  {src: "/Josefina2.jpg"},
  {src: "/Josefina3.jpg"},
];

export default function PhotosSection() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-12">
        {/* Title */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-[#c9a84c]" />
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#c9a84c]">
              Galería
            </span>
            <div className="w-12 h-px bg-[#c9a84c]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#3b2a2a] text-balance text-center">
            Momentos especiales
          </h2>
          <p className="font-sans text-[#9a7a7a] text-sm max-w-md text-center leading-relaxed">
            Una colección de recuerdos que guardaremos para siempre en nuestros
            corazones
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl place-items-center">
          {photos.map((photo, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className="group relative w-full max-w-[320px] aspect-square overflow-hidden rounded-lg border border-[#e8d0d0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c9607e]"
            >
              <Image
                src={photo.src}
                alt={""}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Gold overlay on hover */}
              <div className="absolute inset-0 bg-[#c9a84c]/0 group-hover:bg-[#c9a84c]/20 transition-colors duration-300" />
              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-[#c9a84c]/60 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Foto ampliada"
        >
          <div
            className="relative max-w-2xl w-full aspect-square"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[selected].src}
              alt={""}
              fill
              className="object-cover rounded-xl border-2 border-[#c9a84c]"
            />
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center text-lg hover:bg-black/80 transition-colors"
              aria-label="Cerrar foto"
            >
              ×
            </button>
            {/* Nav prev/next */}
            {selected > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(selected - 1);
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                aria-label="Foto anterior"
              >
                ‹
              </button>
            )}
            {selected < photos.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(selected + 1);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                aria-label="Siguiente foto"
              >
                ›
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
