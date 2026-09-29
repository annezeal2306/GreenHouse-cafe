"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Moon, Sun } from "lucide-react";

export default function DayNight() {
  const [isNight, setIsNight] = useState(false);

  // Change the actual body background
    useEffect(() => {
  const root = document.documentElement;

  root.style.setProperty(
    "--page-bg",
    isNight ? "#071b0b" : "#f4efdf"
  );

  root.style.setProperty(
    "--page-text",
    isNight ? "#f4efdf" : "#071b0b"
  );

  root.style.setProperty(
    "--nav-bg",
    isNight ? "#071b0b" : "#f4efdf"
  );

  root.style.setProperty(
    "--nav-border",
    isNight ? "rgba(244,239,223,0.15)" : "rgba(7,27,11,0.12)"
  );

  document.body.style.backgroundColor = isNight
    ? "#071b0b"
    : "#f4efdf";

  document.body.style.color = isNight
    ? "#f4efdf"
    : "#071b0b";

  return () => {
    root.style.removeProperty("--page-bg");
    root.style.removeProperty("--page-text");
    root.style.removeProperty("--nav-bg");
    root.style.removeProperty("--nav-border");
  };
}, [isNight]);

  return (
    <section
      className={`min-h-screen px-6 py-16 transition-colors duration-700 md:px-10 ${
        isNight
          ? "bg-[#071b0b] text-[#f4efdf]"
          : "bg-[#f4efdf] text-[#071b0b]"
      }`}
    >
      <div className="mx-auto max-w-[1100px]">

        {/* HEADER */}
        <div className="flex items-end justify-between gap-8">

          <div>
            <p
              className={`mb-5 text-[9px] font-bold uppercase tracking-[0.35em] transition-colors duration-500 ${
                isNight ? "text-[#58bd69]" : "text-[#319447]"
              }`}
            >
              Garden House
            </p>

            <h2 className="text-6xl font-black uppercase leading-[0.82] tracking-[-0.06em] md:text-8xl">
              One House.
              <br />

              <span
                className={`transition-colors duration-700 ${
                  isNight ? "text-[#58bd69]" : "text-[#319447]"
                }`}
              >
                Two Moods.
              </span>
            </h2>
          </div>

          {/* DAY / NIGHT TOGGLE */}
          <div
            className={`mb-2 flex shrink-0 rounded-full border p-1 transition-colors duration-500 ${
              isNight
                ? "border-white/20 bg-white/5"
                : "border-black/10 bg-black/[0.02]"
            }`}
          >
            <button
              onClick={() => setIsNight(false)}
              className={`flex items-center gap-2 rounded-full px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ${
                !isNight
                  ? "bg-[#071b0b] text-[#f4efdf]"
                  : "text-black/40 hover:text-black"
              }`}
            >
              <Sun size={12} />
              Day
            </button>

            <button
              onClick={() => setIsNight(true)}
              className={`flex items-center gap-2 rounded-full px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ${
                isNight
                  ? "bg-[#f4efdf] text-[#071b0b]"
                  : "text-black/40 hover:text-black"
              }`}
            >
              <Moon size={12} />
              Night
            </button>
          </div>

        </div>

        {/* MOOD CARDS */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">

          {/* DAY CARD */}
          <div
            className={`group relative h-[430px] overflow-hidden rounded-[24px] transition-all duration-700 ${
              isNight ? "opacity-50" : "opacity-100"
            }`}
          >
            <img
              src="/images/day-cafe.jpg"
              alt="Garden House during the day"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* overlay */}
            <div
              className={`absolute inset-0 transition-colors duration-700 ${
                isNight
                  ? "bg-[#071b0b]/65"
                  : "bg-gradient-to-t from-[#071b0b]/75 via-[#071b0b]/10 to-transparent"
              }`}
            />

            <div className="absolute bottom-8 left-8 right-8 text-white">

              <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.3em] text-[#58bd69]">
                ☀ Day
              </p>

              <h3 className="text-4xl font-black uppercase leading-none tracking-[-0.04em]">
                Eat Clean.
              </h3>

              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75">
                Fresh bowls, wholesome breakfasts, good coffee and food
                designed to make you feel good.
              </p>

              <Link
                href="/menu"
                className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#f4efdf] px-6 py-4 text-[9px] font-bold uppercase tracking-[0.2em] text-[#071b0b]"
              >
                Explore menu
                <ArrowUpRight size={14} />
              </Link>

            </div>
          </div>

          {/* NIGHT CARD */}
          <div
            className={`group relative h-[430px] overflow-hidden rounded-[24px] transition-all duration-700 ${
              isNight ? "opacity-100" : "opacity-70"
            }`}
          >
            <img
              src="/images/night-cafe.jpg"
              alt="Garden House at night"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* stronger night overlay */}
            <div
              className={`absolute inset-0 transition-colors duration-700 ${
                isNight
                  ? "bg-[#000]/35"
                  : "bg-[#071b0b]/50"
              }`}
            />

            <div className="absolute bottom-8 left-8 right-8 text-white">

              <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.3em] text-[#58bd69]">
                ☾ Night
              </p>

              <h3 className="text-4xl font-black uppercase leading-none tracking-[-0.04em]">
                Stay Late.
              </h3>

              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75">
                Karaoke, comedy, live music and evenings that turn a café
                into your neighbourhood hangout.
              </p>

              <Link
                href="/events"
                className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#58bd69] px-6 py-4 text-[9px] font-bold uppercase tracking-[0.2em] text-[#071b0b]"
              >
                See events
                <ArrowUpRight size={14} />
              </Link>

            </div>
          </div>

        </div>

        {/* BOTTOM TEXT */}
        <div
          className={`mt-10 flex justify-between border-t pt-8 transition-colors duration-700 ${
            isNight ? "border-white/10" : "border-black/10"
          }`}
        >
          <h3 className="max-w-md text-2xl font-bold leading-tight">
            From your morning bowl
            <br />
            to your Friday night.
          </h3>

          <p
            className={`max-w-[150px] text-[8px] uppercase leading-[1.8] tracking-[0.18em] transition-colors ${
              isNight ? "text-white/40" : "text-black/40"
            }`}
          >
            One neighbourhood.
            <br />
            One house.
            <br />
            Plenty of reasons to stay.
          </p>
        </div>

      </div>
    </section>
  );
}