"use client";

import {useEffect, useState} from "react";

// CONFIGURAR FECHA
const EVENT_DATE = new Date("2026-06-20T21:30:00");

type TimeLeft = {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
};

function calculateTimeLeft(): TimeLeft {
  const difference = EVENT_DATE.getTime() - new Date().getTime();

  if (difference <= 0) {
    return {
      dias: 0,
      horas: 0,
      minutos: 0,
      segundos: 0,
    };
  }

  return {
    dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
    horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((difference / 1000 / 60) % 60),
    segundos: Math.floor((difference / 1000) % 60),
  };
}

function TimeUnit({value, label}: {value: number; label: string}) {
  return (
    <div className="flex flex-col items-center gap-2 min-w-[70px]">
      {/* Circle */}
      <div className="relative flex items-center justify-center w-16 h-16 md:w-24 md:h-24">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-2 border-[#c9a84c]" />

        {/* Inner background */}
        <div className="absolute inset-1 rounded-full bg-white/60 backdrop-blur-sm" />

        {/* Number */}
        <span className="relative font-serif text-2xl md:text-4xl font-light text-[#3b2a2a]">
          {String(value).padStart(2, "0")}
        </span>
      </div>

      {/* Label */}
      <span className="font-sans text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#9a7a7a] text-center">
        {label}
      </span>
    </div>
  );
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const isOver = Object.values(timeLeft).every((v) => v === 0);

  return (
    <section className="bg-[#fdf6f0] py-20 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-12 text-center">
        {/* Header */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3 md:gap-5">
            <div className="w-10 md:w-16 h-px bg-[#c9a84c]" />

            <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#c9a84c] whitespace-nowrap">
              La cuenta regresiva
            </span>

            <div className="w-10 md:w-16 h-px bg-[#c9a84c]" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#3b2a2a]">
            Faltan...
          </h2>
        </div>

        {/* Countdown */}
        {isOver ? (
          <p className="font-serif text-3xl md:text-4xl text-[#c9607e] italic">
            ¡Ya es la gran noche!
          </p>
        ) : (
          <div className="flex items-start justify-center gap-1 md:gap-4 flex-nowrap">
            <TimeUnit value={timeLeft.dias} label="Días" />

            <span className="font-serif text-xl md:text-4xl text-[#c9a84c] mt-5 md:mt-8">
              :
            </span>

            <TimeUnit value={timeLeft.horas} label="Horas" />

            <span className="font-serif text-xl md:text-4xl text-[#c9a84c] mt-5 md:mt-8">
              :
            </span>

            <TimeUnit value={timeLeft.minutos} label="Minutos" />

            <span className="font-serif text-xl md:text-4xl text-[#c9a84c] mt-5 md:mt-8">
              :
            </span>

            <TimeUnit value={timeLeft.segundos} label="Segundos" />
          </div>
        )}

        {/* Footer text */}
        <p className="font-sans text-[#9a7a7a] text-sm tracking-wide">
          para la gran celebración ✨
        </p>
      </div>
    </section>
  );
}
