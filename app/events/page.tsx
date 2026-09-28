"use client";

import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";
import { events } from "@/data/events";
import EventRSVP from "@/components/EventRSVP";
import MembershipModal from "@/components/MembershipModal";
export default function EventsPage() {
  const featuredEvent = events.find((event) => event.featured) ?? events[0];
  const otherEvents = events.filter(
    (event) => event.id !== featuredEvent.id
  );

  return (
    <main className="min-h-screen bg-[#f4efdf] text-[#071b0b]">

      {/* HERO */}
      <section className="mx-auto max-w-[1200px] px-6 pb-24 pt-32 md:px-10">

        <div className="mb-16 flex items-end justify-between gap-8">
          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.35em] text-[#319447]">
              What&apos;s happening
            </p>

            <h1 className="text-6xl font-black uppercase leading-[0.82] tracking-[-0.06em] md:text-8xl">
              Live
              <br />
              <span className="text-[#319447]">This Week.</span>
            </h1>
          </div>

          <p className="hidden max-w-[260px] pb-2 text-sm leading-6 text-black/50 md:block">
            Good food gets you here.
            <br />
            Good nights make you stay.
          </p>
        </div>

        {/* FEATURED EVENT */}
        <div className="group relative block overflow-hidden rounded-[28px] bg-black">
          <div className="relative aspect-[16/8] overflow-hidden">
            <img
              src={featuredEvent.image}
              alt={featuredEvent.title}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            <div className="absolute left-7 top-7 rounded-full border border-white/30 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white">
              Featured event
            </div>

            <div className="absolute right-7 top-7 text-[10px] font-bold tracking-[0.2em] text-white">
              {featuredEvent.date}
            </div>

            <div className="absolute bottom-8 left-8 max-w-xl text-white md:bottom-12 md:left-12">

              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#58bd69]">
                {featuredEvent.category} · {featuredEvent.time}
              </p>

              <h2 className="mb-4 text-5xl font-black uppercase leading-[0.85] tracking-[-0.05em] md:text-7xl">
                {featuredEvent.title}
              </h2>

              <p className="mb-7 max-w-md text-sm leading-6 text-white/70">
                {featuredEvent.description}
              </p>

              <EventRSVP
                eventTitle={featuredEvent.title}
                eventDate={featuredEvent.date}
                eventTime={featuredEvent.time}
                />
            </div>
          </div>
        </div>

        {/* OTHER EVENTS */}
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {otherEvents.map((event, index) => (
            <Link
              key={event.id}
              href={`/events/${event.id}`}
              className="group relative overflow-hidden rounded-[24px] bg-black"
            >
              <div className="relative aspect-[1.5/1] overflow-hidden">

                <img
                  src={event.image}
                  alt={event.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute left-6 top-6 text-3xl font-black text-white">
                  0{index + 2}
                </div>

                <div className="absolute right-6 top-6 text-[9px] font-bold uppercase tracking-[0.2em] text-[#58bd69]">
                  {event.category}
                </div>

                <div className="absolute bottom-7 left-7 right-7 text-white">

                  <p className="mb-2 text-[9px] uppercase tracking-[0.2em] text-white/60">
                    {event.day} · {event.time}
                  </p>

                  <h3 className="text-3xl font-black uppercase leading-none tracking-[-0.04em] md:text-4xl">
                    {event.title}
                  </h3>

                  <p className="mt-3 max-w-md text-xs leading-5 text-white/60">
                    {event.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                      RSVP ↗
                    </span>

                    <span className="text-[10px] text-white/50">
                      {event.seat} spots left
                    </span>
                  </div>

                </div>
              </div>
            </Link>
          ))}
        </div>

      </section>

      {/* MEMBERSHIP */}
      <section className="bg-[#071b0b] px-6 py-24 text-[#f4efdf] md:px-10">

        <div className="mx-auto max-w-[1200px]">

          <div className="grid gap-12 md:grid-cols-[1fr_0.8fr]">

            <div>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.35em] text-[#58bd69]">
                Stay a little longer
              </p>

              <h2 className="max-w-3xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.05em] md:text-7xl">
                Your table.
                <br />
                Your people.
                <br />
                <span className="text-[#49b85c]">Your nights.</span>
              </h2>
            </div>

            <div className="flex flex-col justify-end">
              <p className="mb-7 max-w-md text-sm leading-6 text-white/55">
                Get early access to events, member-only evenings and
                special offers made for the people who keep coming back.
              </p>

              <button className="flex w-fit items-center gap-3 rounded-full bg-[#f4efdf] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#071b0b] transition hover:bg-[#49b85c]">
                Explore membership
                <ArrowUpRight size={16} />
              </button>
            </div>

          </div>

          {/* MEMBERSHIP CARDS */}
          <div className="mt-20 grid gap-4 md:grid-cols-3">

            <MembershipCard
              number="01"
              title="Day Pass"
              price="₹299"
              description="A little extra for a full day at Garden House."
            />

            <MembershipCard
              number="02"
              title="House Member"
              price="₹999"
              description="Priority access, member offers and event perks."
            />

            <MembershipCard
              number="03"
              title="House Circle"
              price="₹1,999"
              description="For the regulars who practically live here."
            />

          </div>

        </div>
      </section>

      {/* FOOTER STATEMENT */}
      <section className="bg-[#f4efdf] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-[1200px] border-t border-black/10 pt-8">

          <div className="flex flex-col justify-between gap-8 md:flex-row">

            <h3 className="max-w-xl text-3xl font-bold leading-tight tracking-[-0.03em] md:text-5xl">
              Good food gets you here.
              <br />
              <span className="text-[#319447]">
                Good nights make you stay.
              </span>
            </h3>

            <div className="text-[9px] uppercase leading-5 tracking-[0.25em] text-black/40">
              Weekly music.
              <br />
              Comedy.
              <br />
              Karaoke.
              <br />
              Your neighbourhood.
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}

function MembershipCard({
  number,
  title,
  price,
  description,
}: {
  number: string;
  title: string;
  price: string;
  description: string;
}) {
  return (
    <div className="group rounded-[22px] border border-white/10 p-6 transition hover:border-[#49b85c]/60">

      <div className="mb-16 flex items-start justify-between">
        <span className="text-[10px] font-bold tracking-[0.2em] text-[#58bd69]">
          {number}
        </span>

        <CalendarDays
          size={18}
          className="text-white/30 transition group-hover:text-[#58bd69]"
        />
      </div>

      <h3 className="text-3xl font-black uppercase tracking-[-0.04em]">
        {title}
      </h3>

      <div className="mt-3 flex items-center gap-2">
        <span className="text-xl font-bold">{price}</span>
        <span className="text-xs text-white/40">/ plan</span>
      </div>

      <p className="mt-5 text-sm leading-6 text-white/45">
        {description}
      </p>

      <MembershipModal
  plan={title}
  price={price}
/>

    </div>
  );
}