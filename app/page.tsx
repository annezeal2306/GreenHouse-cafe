"use client";
import MoodSection from "@/components/MoodSection";
import EventsPreview from "@/components/EventsPreview";
import MenuPreview from "@/components/MenuPreview";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Leaf,
  MapPin,
  Sparkles,
} from "lucide-react";

const featuredMenu = [
  {
    name: "Green Goddess Bowl",
    category: "Bowls",
    price: "₹349",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Grilled Chicken Bowl",
    category: "High Protein",
    price: "₹429",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Avocado Sourdough",
    category: "Breakfast",
    price: "₹299",
    image:
      "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=1000&q=85",
  },
];

const events = [
  {
    day: "THU",
    date: "08",
    title: "Open Mic Night",
    time: "7:30 PM",
    type: "MUSIC",
  },
  {
    day: "FRI",
    date: "09",
    title: "Comedy After Dark",
    time: "8:00 PM",
    type: "COMEDY",
  },
  {
    day: "SUN",
    date: "11",
    title: "Sunday Sessions",
    time: "5:00 PM",
    type: "LIVE MUSIC",
  },
];

const journal = [
  {
    title: "A Guide to Eating Well in Shahpur Jat",
    category: "LOCAL GUIDE",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "What Makes a Great High-Protein Breakfast?",
    category: "WELLNESS",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85",
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#f4efdf] text-[#071b0b]">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative min-h-screen overflow-hidden bg-[#071b0b] text-[#f4efdf]">

        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2200&q=90"
          alt="Garden café"
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071b0b] via-[#071b0b]/30 to-black/20" />

        <div className="relative mx-auto flex min-h-screen max-w-[1300px] flex-col justify-between px-6 pb-8 pt-32 md:px-10">

          <div className="flex justify-end">
            <div className="rounded-full border border-white/20 px-4 py-2 text-[8px] uppercase tracking-[0.25em] text-white/60">
              Shahpur Jat · New Delhi
            </div>
          </div>

          <div className="pb-8">

            <p className="mb-6 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.35em] text-[#72d47f]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#72d47f]" />
              Eat well · live slowly
            </p>

            <h1 className="max-w-6xl text-[18vw] font-black uppercase leading-[0.72] tracking-[-0.08em] md:text-[11rem]">
              Good
              <br />
              <span className="text-[#63c96f]">things.</span>
            </h1>

            <div className="mt-10 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">

              <p className="max-w-md text-sm leading-6 text-white/60">
                A neighbourhood café for nourishing food, excellent
                coffee, good conversations and nights worth staying out for.
              </p>

              <Link
  href="/menu"
  className="relative z-50 flex w-fit items-center justify-center gap-2 rounded-full bg-[#F5F0DF] px-8 py-4 text-sm font-semibold tracking-wide !text-[#071A0D] opacity-100 transition-all duration-300 hover:bg-[#63C96B]"
>
  <span className="!text-[#071A0D]">
    Explore the menu
  </span>
  <ArrowUpRight
    size={15}
    className="!text-[#071A0D]"
  />
</Link>

            </div>

          </div>

          <div className="flex items-center justify-between border-t border-white/15 pt-5">

            <div className="flex items-center gap-2 text-[8px] uppercase tracking-[0.2em] text-white/40">
              <MapPin size={12} />
              24 Shahpur Jat
            </div>

            <div className="flex items-center gap-2 text-[8px] uppercase tracking-[0.2em] text-white/40">
              Scroll
              <ArrowDown size={12} />
            </div>

          </div>

        </div>

      </section>
<MoodSection />
<EventsPreview />
<MenuPreview />
      {/* =========================================================
          INTRO
      ========================================================= */}

      <section className="mx-auto max-w-[1200px] px-6 py-28 md:px-10 md:py-36">

        <div className="grid gap-12 md:grid-cols-[0.7fr_1fr]">

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#319447]">
              Our philosophy
            </p>
          </div>

          <div>

            <h2 className="text-4xl font-black uppercase leading-[0.9] tracking-[-0.05em] md:text-6xl">
              Food that makes
              <br />
              <span className="text-[#319447]">you feel good.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-black/50">
              We believe healthy food shouldn&apos;t feel like a compromise.
              Our kitchen brings together seasonal ingredients, bold
              flavours and thoughtful nutrition — served in a space
              designed to make you stay a little longer.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">

              <div className="flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-[8px] font-bold uppercase tracking-[0.15em]">
                <Leaf size={13} className="text-[#319447]" />
                Fresh ingredients
              </div>

              <div className="flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-[8px] font-bold uppercase tracking-[0.15em]">
                <Sparkles size={13} className="text-[#319447]" />
                Made daily
              </div>

              <div className="flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-[8px] font-bold uppercase tracking-[0.15em]">
                <CalendarDays size={13} className="text-[#319447]" />
                Something happening
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          LIVE EVENTS
      ========================================================= */}

      <section className="bg-[#dce8c9] px-6 py-24 md:px-10">

        <div className="mx-auto max-w-[1200px]">

          <div className="mb-12 flex items-end justify-between border-b border-black/10 pb-5">

            <div>
              <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.3em] text-[#319447]">
                This week
              </p>

              <h2 className="text-4xl font-black uppercase tracking-[-0.05em] md:text-6xl">
                What&apos;s on.
              </h2>
            </div>

            <Link
              href="/events"
              className="hidden items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#319447] sm:flex"
            >
              See all events
              <ArrowUpRight size={14} />
            </Link>

          </div>

          <div className="divide-y divide-black/10">

            {events.map((event) => (
              <Link
                key={event.title}
                href="/events"
                className="group grid gap-5 py-7 md:grid-cols-[100px_1fr_auto] md:items-center"
              >

                <div className="flex items-center gap-3">

                  <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-black/40">
                    {event.day}
                  </span>

                  <span className="text-4xl font-black tracking-[-0.06em]">
                    {event.date}
                  </span>

                </div>

                <div>

                  <p className="mb-2 text-[8px] font-bold uppercase tracking-[0.2em] text-[#319447]">
                    {event.type}
                  </p>

                  <h3 className="text-2xl font-black uppercase tracking-[-0.04em]">
                    {event.title}
                  </h3>

                </div>

                <div className="flex items-center justify-between gap-6">

                  <span className="text-[9px] uppercase tracking-[0.15em] text-black/40">
                    {event.time}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition group-hover:bg-[#071b0b] group-hover:text-white">
                    <ArrowUpRight size={14} />
                  </span>

                </div>

              </Link>
            ))}

          </div>

        </div>

      </section>

      {/* =========================================================
          FEATURED MENU
      ========================================================= */}

      <section className="mx-auto max-w-[1200px] px-6 py-28 md:px-10">

        <div className="mb-12 flex items-end justify-between">

          <div>

            <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.3em] text-[#319447]">
              From the kitchen
            </p>

            <h2 className="text-4xl font-black uppercase tracking-[-0.05em] md:text-6xl">
              Good food.
            </h2>

          </div>

          <Link
            href="/menu"
            className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#319447]"
          >
            Full menu
            <ArrowUpRight size={14} />
          </Link>

        </div>

        <div className="grid gap-6 md:grid-cols-3">

          {featuredMenu.map((item) => (
            <Link
              key={item.name}
              href="/menu"
              className="group"
            >

              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <span className="absolute bottom-5 left-5 text-[9px] font-bold uppercase tracking-[0.2em] text-white/60">
                  {item.category}
                </span>

              </div>

              <div className="flex items-start justify-between gap-4 pt-5">

                <h3 className="text-2xl font-black uppercase leading-none tracking-[-0.04em]">
                  {item.name}
                </h3>

                <span className="text-sm font-bold">
                  {item.price}
                </span>

              </div>

            </Link>
          ))}

        </div>

      </section>

      {/* =========================================================
          BUILD YOUR BOWL
      ========================================================= */}

      <section className="overflow-hidden bg-[#071b0b] text-[#f4efdf]">

        <div className="mx-auto grid max-w-[1300px] md:grid-cols-2">

          <div className="relative min-h-[500px]">

            <img
              src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=90"
              alt="Fresh bowl"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/25" />

          </div>

          <div className="flex flex-col justify-center px-8 py-20 md:px-16">

            <p className="mb-5 text-[9px] font-bold uppercase tracking-[0.3em] text-[#58bd69]">
              Your lunch, your way
            </p>

            <h2 className="text-5xl font-black uppercase leading-[0.85] tracking-[-0.06em] md:text-7xl">
              Build
              <br />
              your
              <br />
              <span className="text-[#49b85c]">bowl.</span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-6 text-white/45">
              Choose your base, protein, toppings and sauce.
              Watch the calories and protein update as you build.
            </p>

            <Link
              href="/bowl"
              className="mt-9 flex w-fit items-center gap-3 rounded-full bg-[#f4efdf] px-7 py-4 text-[9px] font-bold uppercase tracking-[0.2em] text-[#071b0b] transition hover:bg-[#49b85c]"
            >
              Start building
              <ArrowUpRight size={15} />
            </Link>

          </div>

        </div>

      </section>

      {/* =========================================================
          MEMBERSHIP
      ========================================================= */}

      <section className="bg-[#eadfc9] px-6 py-28 md:px-10">

        <div className="mx-auto max-w-[1200px]">

          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-end">

            <div>

              <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.3em] text-[#319447]">
                Become a regular
              </p>

              <h2 className="text-5xl font-black uppercase leading-[0.85] tracking-[-0.06em] md:text-7xl">
                More
                <br />
                than a
                <br />
                <span className="text-[#319447]">café.</span>
              </h2>

            </div>

            <div>

              <p className="max-w-xl text-sm leading-6 text-black/50">
                Make Garden part of your routine. Memberships bring
                together food, events, community and a little more
                reason to drop by.
              </p>

              <Link
                href="/events"
                className="mt-7 flex w-fit items-center gap-3 rounded-full bg-[#071b0b] px-7 py-4 text-[9px] font-bold uppercase tracking-[0.2em] text-[#f4efdf] transition hover:bg-[#319447]"
              >
                Explore membership
                <ArrowUpRight size={15} />
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          JOURNAL
      ========================================================= */}

      <section className="mx-auto max-w-[1200px] px-6 py-28 md:px-10">

        <div className="mb-12 flex items-end justify-between">

          <div>

            <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.3em] text-[#319447]">
              Stories & ideas
            </p>

            <h2 className="text-4xl font-black uppercase tracking-[-0.05em] md:text-6xl">
              The Journal.
            </h2>

          </div>

          <Link
            href="/journal"
            className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#319447]"
          >
            Read all
            <ArrowUpRight size={14} />
          </Link>

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {journal.map((post) => (
            <Link
              key={post.title}
              href="/journal"
              className="group"
            >

              <div className="relative aspect-[16/9] overflow-hidden rounded-[24px]">

                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute left-5 top-5 rounded-full bg-[#f4efdf]/90 px-3 py-2 text-[8px] font-bold uppercase tracking-[0.15em]">
                  {post.category}
                </div>

              </div>

              <h3 className="mt-5 max-w-xl text-3xl font-black uppercase leading-[0.9] tracking-[-0.04em]">
                {post.title}
              </h3>

              <div className="mt-5 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#319447]">
                Read story
                <ArrowUpRight size={13} />
              </div>

            </Link>
          ))}

        </div>

      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="bg-[#319447] px-6 py-24 text-[#071b0b] md:px-10">

        <div className="mx-auto max-w-[1200px]">

          <p className="mb-6 text-[9px] font-bold uppercase tracking-[0.3em]">
            Come hungry. Stay awhile.
          </p>

          <h2 className="max-w-5xl text-6xl font-black uppercase leading-[0.78] tracking-[-0.07em] md:text-[9rem]">
            See you
            <br />
            at Garden.
          </h2>

          <div className="mt-12 flex flex-wrap gap-3">

            <Link
              href="/menu"
              className="flex items-center gap-3 rounded-full bg-[#071b0b] px-7 py-4 text-[9px] font-bold uppercase tracking-[0.2em] text-[#f4efdf]"
            >
              Explore menu
              <ArrowUpRight size={15} />
            </Link>

            <Link
              href="/events"
              className="flex items-center gap-3 rounded-full border border-[#071b0b]/20 px-7 py-4 text-[9px] font-bold uppercase tracking-[0.2em]"
            >
              What&apos;s happening
              <ArrowUpRight size={15} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}