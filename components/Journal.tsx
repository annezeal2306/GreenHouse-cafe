"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const stories = [
  {
    number: "01",
    category: "WELLNESS",
    title: "How to build a better morning bowl.",
    description:
      "Simple ingredients, balanced flavours and a little more energy for your day.",
  },
  {
    number: "02",
    category: "FOOD",
    title: "Why good food should feel good.",
    description:
      "Our approach to fresh ingredients, wholesome meals and eating without overthinking it.",
  },
  {
    number: "03",
    category: "NEIGHBOURHOOD",
    title: "A house for every kind of day.",
    description:
      "Coffee in the morning, conversations in the afternoon and music after dark.",
  },
];

export default function Journal() {
  return (
    <section className="bg-[#f4efdf] px-6 py-24 text-[#071b0b] md:px-10">

      <div className="mx-auto max-w-[1100px]">

        {/* HEADER */}
        <div className="flex items-end justify-between border-b border-black/10 pb-8">

          <div>
            <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.3em] text-[#319447]">
              The Garden Journal
            </p>

            <h2 className="max-w-[650px] text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] md:text-7xl">
              Good food.
              <br />
              Good thoughts.
            </h2>
          </div>

          <Link
            href="/journal"
            className="hidden items-center gap-2 rounded-full border border-black/15 px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] transition hover:bg-[#071b0b] hover:text-[#f4efdf] md:flex"
          >
            View journal
            <ArrowUpRight size={13} />
          </Link>

        </div>

        {/* STORIES */}
        <div className="divide-y divide-black/10">

          {stories.map((story) => (
            <Link
              href="/journal"
              key={story.number}
              className="group grid gap-6 py-8 transition md:grid-cols-[80px_180px_1fr_30px] md:items-center"
            >

              <span className="text-xs text-black/30">
                {story.number}
              </span>

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#319447]">
                {story.category}
              </span>

              <div>
                <h3 className="text-2xl font-black uppercase leading-none tracking-[-0.03em] transition group-hover:text-[#319447] md:text-3xl">
                  {story.title}
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-relaxed text-black/45">
                  {story.description}
                </p>
              </div>

              <ArrowUpRight
                size={18}
                className="hidden transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 md:block"
              />

            </Link>
          ))}

        </div>

        {/* MOBILE BUTTON */}
        <Link
          href="/journal"
          className="mt-8 flex w-fit items-center gap-3 rounded-full bg-[#071b0b] px-6 py-4 text-[9px] font-bold uppercase tracking-[0.2em] text-[#f4efdf] md:hidden"
        >
          View journal
          <ArrowUpRight size={13} />
        </Link>

      </div>

    </section>
  );
}