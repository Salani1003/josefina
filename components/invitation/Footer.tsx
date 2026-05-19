export default function Footer() {
  return (
    <footer className="bg-[#3b2a2a] border-t border-white/10 py-10 px-6">
      <div className="max-w-xl mx-auto flex flex-col items-center gap-4 text-center">
        {/* Stars */}
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="#c9a84c"
              aria-hidden="true"
            >
              <path d="M12 2L14.09 8.26L20 9.27L15.55 13.64L16.91 20L12 16.9L7.09 20L8.45 13.64L4 9.27L9.91 8.26L12 2Z" />
            </svg>
          ))}
        </div>

        <p className="font-serif text-2xl font-light text-white/80 italic text-balance">
          &ldquo;No te pierdas esta noche mágica&rdquo;
        </p>

        <div className="flex items-center gap-3">
          <div className="w-10 h-px bg-[#c9a84c]/40" />
          <span className="font-sans text-[#c9a84c] text-xs tracking-widest uppercase">
            Josefina — 15 años
          </span>
          <div className="w-10 h-px bg-[#c9a84c]/40" />
        </div>

        <p className="font-sans text-white/30 text-xs mt-2">
          Con cariño, Josefina
        </p>
      </div>
    </footer>
  );
}
