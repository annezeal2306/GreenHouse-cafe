"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const events = [
  {
    number: "02",
    type: "KARAOKE · 8:00 PM",
    title: "KARAOKE\nNIGHT",
    description: "Grab the mic, bring your people and make some noise.",
    date: "02 / OCT",
    image:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1600&q=85",
    featured: true,
  },
  {
    number: "03",
    type: "COMEDY",
    title: "STAND-UP\nEVENING",
    description: "A night of new jokes, familiar faces and good food.",
    date: "SAT · 8:30 PM",
    image:
      "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&w=1200&q=85",
    featured: false,
  },
  {
    number: "04",
    type: "LIVE MUSIC",
    title: "SUNDAY SOLO",
    description: "Slow Sunday evenings with live acoustic music.",
    date: "SUN · 7:00 PM",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=85",
    featured: false,
  },
];

export default function EventsPreview() {
  const featured = events[0];
  const secondary = events.slice(1);

  return (
    <section className="bg-[#F5F0DF] px-6 py-28 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1280px]">

        {/* HEADER */}
        <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-[#299438]">
              ✦ What&apos;s happening
            </p>

            <h2 className="text-6xl font-black leading-[0.88] tracking-[-0.05em] text-[#071A0D] md:text-8xl">
              LIVE
              <br />
              <span className="text-[#299438]">
                THIS WEEK.
              </span>
            </h2>
          </div>

          <Link
            href="/events"
            className="flex w-fit items-center gap-2 rounded-full border border-[#071A0D]/20 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#071A0D] transition-all hover:bg-[#071A0D] hover:text-[#F5F0DF]"
          >
            See all events
            <ArrowUpRight size={13} />
          </Link>

        </div>

        {/* FEATURED EVENT */}
        <Link
          href="/events"
          className="group relative mb-5 block h-[420px] overflow-hidden rounded-[26px]"
        >

          <img
            src={featured.image}
            alt={featured.title.replace("\n", " ")}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#071A0D]/90 via-[#071A0D]/45 to-transparent" />

          <div className="absolute left-7 top-7 rounded-full border border-white/30 px-4 py-2 text-[8px] font-bold uppercase tracking-[0.2em] text-white md:left-8 md:top-8">
            Featured event
          </div>

          <div className="absolute right-8 top-8 text-[9px] font-medium uppercase tracking-[0.2em] text-white/70">
            {featured.date}
          </div>

          <div className="absolute bottom-8 left-7 max-w-xl md:left-8">

            <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.3em] text-[#63C96B]">
              {featured.type}
            </p>

            <h3 className="whitespace-pre-line text-5xl font-black leading-[0.85] tracking-[-0.04em] text-white md:text-7xl">
              {featured.title}
            </h3>

            <p className="mt-5 max-w-md text-sm text-white/75">
              {featured.description}
            </p>

            <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#63C96B] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#071A0D] transition-all group-hover:bg-[#F5F0DF]">
              Reserve your spot
              <ArrowUpRight size={13} />
            </span>

          </div>
        </Link>

        {/* SECONDARY EVENTS */}
        <div className="grid gap-5 md:grid-cols-2">

          {secondary.map((event) => (
            <Link
              key={event.number}
              href="/events"
              className="group relative h-[300px] overflow-hidden rounded-[26px]"
            >

              <img
                src={event.image}
                alt={event.title.replace("\n", " ")}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071A0D]/95 via-[#071A0D]/30 to-transparent" />

              <span className="absolute left-6 top-6 text-xl font-black text-white">
                {event.number}
              </span>

              <span className="absolute right-6 top-6 text-[8px] font-bold uppercase tracking-[0.2em] text-[#63C96B]">
                {event.type}
              </span>

              <div className="absolute bottom-6 left-6 right-6">

                <p className="mb-2 text-[8px] font-medium uppercase tracking-[0.2em] text-white/70">
                  {event.date}
                </p>

                <h3 className="whitespace-pre-line text-3xl font-black leading-[0.9] tracking-[-0.03em] text-white">
                  {event.title}
                </h3>

                <p className="mt-3 max-w-sm text-xs text-white/70">
                  {event.description}
                </p>

                <div className="mt-4 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white">
                  RSVP
                  <ArrowUpRight size={12} />
                </div>

              </div>

            </Link>
          ))}

        </div>

        {/* BOTTOM STATEMENT */}
        <div className="mt-12 flex flex-col justify-between gap-6 border-t border-[#071A0D]/15 pt-8 md:flex-row">

          <p className="text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#071A0D] md:text-3xl">
            Good food gets you here.
            <br />
            <span className="text-[#299438]">
              Good nights make you stay.
            </span>
          </p>

          <p className="max-w-[180px] text-[9px] font-medium uppercase leading-5 tracking-[0.2em] text-[#071A0D]/50">
            Weekly music.
            <br />
            Comedy.
            <br />
            Karaoke.
            <br />
            Your neighbourhood.
          </p>

        </div>

      </div>
    </section>
  );
}