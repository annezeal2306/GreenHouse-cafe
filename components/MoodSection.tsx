"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Moon, Sun } from "lucide-react";

export default function MoodSection() {
  const [mode, setMode] = useState<"day" | "night">("day");

  return (
    <section className="bg-[#F5F0DF] px-6 py-28 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1280px]">

        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-[#299438]">
              Garden House
            </p>

            <h2 className="max-w-[700px] text-6xl font-black leading-[0.88] tracking-[-0.05em] text-[#071A0D] md:text-8xl">
              ONE HOUSE.
              <br />
              <span className="text-[#299438]">
                TWO MOODS.
              </span>
            </h2>
          </div>

          {/* Toggle */}
          <div className="flex w-fit items-center rounded-full border border-[#071A0D]/15 p-1">

            <button
              onClick={() => setMode("day")}
              className={`flex items-center gap-2 rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] transition-all ${
                mode === "day"
                  ? "bg-[#071A0D] text-[#F5F0DF]"
                  : "text-[#071A0D]/50"
              }`}
            >
              <Sun size={13} />
              Day
            </button>

            <button
              onClick={() => setMode("night")}
              className={`flex items-center gap-2 rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] transition-all ${
                mode === "night"
                  ? "bg-[#071A0D] text-[#F5F0DF]"
                  : "text-[#071A0D]/50"
              }`}
            >
              <Moon size={13} />
              Night
            </button>

          </div>
        </div>

        {/* Mood Cards */}
        <div className="grid gap-5 md:grid-cols-2">

          {/* DAY */}
          <div
            className={`group relative min-h-[520px] overflow-hidden rounded-[28px] transition-all duration-500 ${
              mode === "day"
                ? "scale-[1]"
                : "scale-[0.98] opacity-75"
            }`}
          >

            <img
  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=85"
  alt="Garden House during the day"
  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
/>

            <div className="absolute inset-0 bg-gradient-to-t from-[#071A0D]/90 via-[#071A0D]/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">

              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#63C96B]">
                ☼ Day
              </p>

              <h3 className="text-5xl font-black tracking-[-0.04em] text-white md:text-6xl">
                EAT CLEAN.
              </h3>

              <p className="mt-4 max-w-md text-sm leading-6 text-white/75">
                Fresh bowls, wholesome breakfasts, good coffee and food
                designed to make you feel good.
              </p>

              <Link
                href="/menu"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#F5F0DF] px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-[#071A0D] transition-all hover:bg-[#63C96B]"
              >
                Explore menu
                <ArrowUpRight size={14} />
              </Link>

            </div>
          </div>

          {/* NIGHT */}
          <div
            className={`group relative min-h-[520px] overflow-hidden rounded-[28px] transition-all duration-500 ${
              mode === "night"
                ? "scale-[1]"
                : "scale-[0.98] opacity-75"
            }`}
          >

            <img
  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85"
  alt="Garden House at night"
  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
/>

            <div className="absolute inset-0 bg-gradient-to-t from-[#071A0D]/95 via-[#071A0D]/35 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">

              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#63C96B]">
                ☾ Night
              </p>

              <h3 className="text-5xl font-black tracking-[-0.04em] text-white md:text-6xl">
                STAY LATE.
              </h3>

              <p className="mt-4 max-w-md text-sm leading-6 text-white/75">
                Karaoke, comedy, live music and evenings that turn a café
                into your neighbourhood hangout.
              </p>

              <Link
                href="/events"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#63C96B] px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-[#071A0D] transition-all hover:bg-[#F5F0DF]"
              >
                See events
                <ArrowUpRight size={14} />
              </Link>

            </div>
          </div>

        </div>

        {/* Bottom statement */}
        <div className="mt-12 flex flex-col justify-between gap-6 border-t border-[#071A0D]/15 pt-8 md:flex-row">

          <p className="max-w-xl text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#071A0D] md:text-3xl">
            From your morning bowl
            <br />
            to your Friday night.
          </p>

          <p className="max-w-[180px] text-[9px] font-medium uppercase leading-5 tracking-[0.2em] text-[#071A0D]/50">
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