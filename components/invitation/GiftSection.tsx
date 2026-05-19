"use client";

import {useState} from "react";

const CBU = "0000003100094704865290";
const ALIAS = "Jo.mp1";

export default function GiftSection() {
  const [copiedCBU, setCopiedCBU] = useState(false);
  const [copiedAlias, setCopiedAlias] = useState(false);

  function copyToClipboard(text: string, type: "cbu" | "alias") {
    navigator.clipboard.writeText(text).then(() => {
      if (type === "cbu") {
        setCopiedCBU(true);
        setTimeout(() => setCopiedCBU(false), 2000);
      } else {
        setCopiedAlias(true);
        setTimeout(() => setCopiedAlias(false), 2000);
      }
    });
  }

  return (
    <section className="py-20 px-6 bg-[#fdf6f0]">
      <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-8">
        {/* Section header */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-px bg-[#c9a84c]" />
            <span className="font-sans text-[#c9a84c] text-xs tracking-[0.3em] uppercase">
              para los que preguntan
            </span>
            <div className="w-12 h-px bg-[#c9a84c]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#3b2a2a] font-light text-balance">
            El regalo
          </h2>
        </div>

        {/* Optional message */}
        <p className="font-sans text-[#9a7a7a] text-base leading-relaxed max-w-md">
          Tu presencia es obligatoria 😌 Pero si además querés aportar para los
          próximos outfits, skincare y compras impulsivas de Josefina...
          aceptamos transferencias ✨
        </p>

        {/* Gift box icon */}
        <div className="w-16 h-16 rounded-full border border-[#c9a84c]/40 flex items-center justify-center">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#c9a84c"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 12v10H4V12" />
            <path d="M22 7H2v5h20V7z" />
            <path d="M12 22V7" />
            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
          </svg>
        </div>

        {/* Bank details card */}
        <div className="w-full border border-[#e8d0d0] rounded-2xl overflow-hidden bg-white">
          <div className="bg-[#3b2a2a] px-6 py-4">
            <p className="font-sans text-[#f0d98a] text-xs tracking-[0.25em] uppercase text-center">
              Datos bancarios
            </p>
          </div>

          <div className="p-6 flex flex-col gap-5">
            {/* Tituar */}
            <div className="flex flex-col gap-1">
              <span className="font-sans text-[#9a7a7a] text-xs tracking-widest uppercase">
                Titular
              </span>
              <span className="font-sans text-[#3b2a2a] text-base font-light">
                Josefina Stalldecker
              </span>
            </div>

            <div className="w-full h-px bg-[#e8d0d0]" />

            {/* CBU */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 bg-[#fdf6f0] rounded-xl px-4 py-3">
              <span className="font-mono text-[#3b2a2a] text-sm tracking-wider break-all text-center md:text-left">
                {CBU}
              </span>

              <button
                onClick={() => copyToClipboard(CBU, "cbu")}
                aria-label="Copiar CBU"
                className="shrink-0 w-full md:w-auto font-sans text-xs text-[#c9607e] border border-[#c9607e]/40 rounded-lg px-3 py-2 hover:bg-[#c9607e]/10 transition-colors"
              >
                {copiedCBU ? "Copiado" : "Copiar"}
              </button>
            </div>

            <div className="w-full h-px bg-[#e8d0d0]" />

            {/* Alias */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 bg-[#fdf6f0] rounded-xl px-4 py-3">
              <span className="font-mono text-[#3b2a2a] text-sm tracking-wider break-all text-center md:text-left">
                {ALIAS}
              </span>

              <button
                onClick={() => copyToClipboard(ALIAS, "alias")}
                aria-label="Copiar alias"
                className="shrink-0 w-full md:w-auto font-sans text-xs text-[#c9607e] border border-[#c9607e]/40 rounded-lg px-3 py-2 hover:bg-[#c9607e]/10 transition-colors"
              >
                {copiedAlias ? "Copiado" : "Copiar"}
              </button>
            </div>
          </div>
        </div>

        <p className="font-sans text-[#9a7a7a] text-sm italic">
          El regalo es completamente opcional. ¡Lo más importante es compartir
          esta noche juntos!
        </p>
      </div>
    </section>
  );
}
