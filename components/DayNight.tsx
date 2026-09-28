"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sun, Moon } from "lucide-react";
import { useState } from "react";

export default function DayNight() {
  const [mode, setMode] = useState<"day" | "night">("day");

  const isDay = mode === "day";

  return (
    <section
      className={`relative min-h-screen overflow-hidden transition-colors duration-1000 ${
        isDay ? "bg-[#F4EEDB] text-[#081408]" : "bg-[#081408] text-[#F4EEDB]"
      }`}
    >
      {/* Background glow */}
      <motion.div
        animate={{
          opacity: isDay ? 0.18 : 0.08,
          scale: isDay ? 1 : 1.4,
        }}
        transition={{ duration: 1 }}
        className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2C8E33] blur-[140px]"
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-center px-6 py-24 md:px-10">

        {/* Header */}
        <div className="mb-12 flex items-end justify-between">

          <div>
            <p
              className={`mb-4 text-[10px] font-bold uppercase tracking-[0.3em] ${
                isDay ? "text-[#2C8E33]" : "text-[#58AC67]"
              }`}
            >
              Garden House
            </p>

            <h2 className="max-w-[800px] text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-8xl">
              ONE HOUSE.
              <br />
              <span className={isDay ? "text-[#2C8E33]" : "text-[#58AC67]"}>
                TWO MOODS.
              </span>
            </h2>
          </div>

          {/* Toggle */}
          <div
            className={`hidden rounded-full border p-1 md:flex ${
              isDay ? "border-black/10" : "border-white/15"
            }`}
          >
            <button
              onClick={() => setMode("day")}
              className={`flex items-center gap-2 rounded-full px-5 py-3 text-[9px] font-bold uppercase tracking-[0.15em] transition-all ${
                isDay
                  ? "bg-[#081408] text-[#F4EEDB]"
                  : "text-white/50"
              }`}
            >
              <Sun size={13} />
              Day
            </button>

            <button
              onClick={() => setMode("night")}
              className={`flex items-center gap-2 rounded-full px-5 py-3 text-[9px] font-bold uppercase tracking-[0.15em] transition-all ${
                !isDay
                  ? "bg-[#F4EEDB] text-[#081408]"
                  : "text-black/40"
              }`}
            >
              <Moon size={13} />
              Night
            </button>
          </div>

        </div>

        {/* Main cards */}
        <div className="grid gap-5 md:grid-cols-2">

          {/* DAY */}
          <motion.div
            animate={{
              scale: isDay ? 1 : 0.96,
              opacity: isDay ? 1 : 0.55,
            }}
            transition={{ duration: 0.6 }}
            className="group relative min-h-[500px] overflow-hidden rounded-[32px] bg-[#DCE7C9]"
          >
            {/* Replace this image later */}
            <img
              src="/images/day-cafe.jpg"
              alt="Garden House during the day"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-7 text-white md:p-10">

              <div className="mb-5 flex items-center gap-2">
                <Sun size={16} />
                <span className="text-[9px] font-bold uppercase tracking-[0.25em]">
                  Day
                </span>
              </div>

              <h3 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
                EAT CLEAN.
              </h3>

              <p className="mt-4 max-w-[400px] text-sm leading-6 text-white/75">
                Fresh bowls, wholesome breakfasts, good coffee and food
                designed to make you feel good.
              </p>

              <a
                href="#menu"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[9px] font-bold uppercase tracking-[0.15em] text-[#081408]"
              >
                Explore food
                <ArrowUpRight size={13} />
              </a>

            </div>
          </motion.div>

          {/* NIGHT */}
          <motion.div
            animate={{
              scale: !isDay ? 1 : 0.96,
              opacity: !isDay ? 1 : 0.55,
            }}
            transition={{ duration: 0.6 }}
            className="group relative min-h-[500px] overflow-hidden rounded-[32px] bg-[#17251A]"
          >
            {/* Replace this image later */}
            <img
              src="/images/night-events.jpg"
              alt="Garden House events"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-7 text-white md:p-10">

              <div className="mb-5 flex items-center gap-2 text-[#58AC67]">
                <Moon size={16} />
                <span className="text-[9px] font-bold uppercase tracking-[0.25em]">
                  Night
                </span>
              </div>

              <h3 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">
                STAY LATE.
              </h3>

              <p className="mt-4 max-w-[400px] text-sm leading-6 text-white/75">
                Karaoke, comedy, live music and evenings that turn a café
                into your neighbourhood hangout.
              </p>

              <a
                href="#events"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#2C8E33] px-5 py-3 text-[9px] font-bold uppercase tracking-[0.15em] text-white"
              >
                See events
                <ArrowUpRight size={13} />
              </a>

            </div>
          </motion.div>

        </div>

        {/* Bottom statement */}
        <div className="mt-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">

          <p
            className={`max-w-[600px] text-2xl font-semibold leading-tight tracking-[-0.03em] md:text-4xl ${
              isDay ? "text-black/70" : "text-white/70"
            }`}
          >
            From your morning bowl
            <br />
            to your Friday night.
          </p>

          <p
            className={`max-w-[280px] text-[10px] uppercase leading-5 tracking-[0.12em] ${
              isDay ? "text-black/40" : "text-white/40"
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