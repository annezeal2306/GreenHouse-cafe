"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { events } from "@/data/events";

export default function Events() {
  return (
    <section
      id="events"
      className="relative overflow-hidden bg-[#F4EEDB] px-6 py-28 text-[#081408] md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>
            <p className="mb-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#2C8E33]">
              <CalendarDays size={14} />
              What&apos;s happening
            </p>

            <h2 className="max-w-[800px] text-6xl font-black leading-[0.85] tracking-[-0.07em] md:text-8xl">
              LIVE
              <br />
              <span className="text-[#2C8E33]">THIS WEEK.</span>
            </h2>
          </div>

          <a
            href="#"
            className="flex w-fit items-center gap-2 rounded-full border border-[#081408]/20 px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] transition-all hover:bg-[#081408] hover:text-[#F4EEDB]"
          >
            See all events
            <ArrowUpRight size={14} />
          </a>

        </div>

        {/* Featured event */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="group relative mb-8 min-h-[500px] overflow-hidden rounded-[32px] bg-[#081408] text-white"
        >
          <img
            src={events[0].image}
            alt={events[0].title}
            className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />

          <div className="relative flex min-h-[500px] flex-col justify-between p-7 md:p-12">

            <div className="flex justify-between">
              <span className="rounded-full border border-white/30 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em]">
                Featured event
              </span>

              <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">
                {events[0].date} / {events[0].month}
              </span>
            </div>

            <div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#58AC67]">
                {events[0].type} · {events[0].time}
              </p>

              <h3 className="max-w-[700px] text-5xl font-black uppercase leading-[0.85] tracking-[-0.06em] md:text-8xl">
                {events[0].title}
              </h3>

              <p className="mt-6 max-w-[420px] text-sm leading-6 text-white/70">
                {events[0].description}
              </p>

              <button className="mt-8 flex items-center gap-2 rounded-full bg-[#58AC67] px-6 py-4 text-[9px] font-bold uppercase tracking-[0.2em] text-[#081408] transition-transform hover:scale-105">
                Reserve your spot
                <ArrowUpRight size={14} />
              </button>
            </div>

          </div>
        </motion.div>

        {/* Other events */}
        <div className="grid gap-5 md:grid-cols-2">

          {events.slice(1).map((event, index) => (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative min-h-[430px] overflow-hidden rounded-[28px] bg-[#18351D] text-white"
            >

              <img
                src={event.image}
                alt={event.title}
                className="absolute inset-0 h-full w-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              <div className="relative flex min-h-[430px] flex-col justify-between p-7">

                <div className="flex justify-between">
                  <span className="text-3xl font-black tracking-[-0.05em]">
                    {event.date}
                  </span>

                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#58AC67]">
                    {event.type}
                  </span>
                </div>

                <div>
                  <p className="mb-3 text-[9px] uppercase tracking-[0.2em] text-white/50">
                    {event.day} · {event.time}
                  </p>

                  <h3 className="text-4xl font-black uppercase leading-[0.9] tracking-[-0.05em]">
                    {event.title}
                  </h3>

                  <p className="mt-4 max-w-[350px] text-sm leading-6 text-white/60">
                    {event.description}
                  </p>

                  <button className="mt-6 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em]">
                    RSVP
                    <ArrowUpRight size={14} />
                  </button>
                </div>

              </div>

            </motion.article>
          ))}

        </div>

        {/* Bottom statement */}
        <div className="mt-20 flex flex-col justify-between gap-8 border-t border-[#081408]/10 pt-8 md:flex-row">

          <p className="max-w-[700px] text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
            Good food gets you here.
            <br />
            <span className="text-[#2C8E33]">
              Good nights make you stay.
            </span>
          </p>

          <p className="max-w-[280px] text-[10px] uppercase leading-5 tracking-[0.15em] text-black/40">
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