"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { journalPosts } from "@/data/journal";

export default function JournalPage() {
  const featured = journalPosts[0];
  const remaining = journalPosts.slice(1);

  return (
    <main className="min-h-screen bg-[#f4efdf] text-[#071b0b]">

      {/* HEADER */}
      <section className="mx-auto max-w-[1200px] px-6 pb-20 pt-32 md:px-10">

        <div className="grid gap-10 md:grid-cols-[1fr_0.6fr] md:items-end">

          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.35em] text-[#319447]">
              Food / wellness / neighbourhood
            </p>

            <h1 className="text-6xl font-black uppercase leading-[0.82] tracking-[-0.06em] md:text-8xl">
              The
              <br />
              <span className="text-[#319447]">Journal.</span>
            </h1>
          </div>

          <p className="max-w-sm text-sm leading-6 text-black/50">
            Stories about eating well, living slowly and finding good
            things around our neighbourhood.
          </p>

        </div>
      </section>

      {/* FEATURED STORY */}
      <section className="mx-auto max-w-[1200px] px-6 md:px-10">

        <Link
          href={`/journal/${featured.id}`}
          className="group grid overflow-hidden rounded-[28px] bg-[#071b0b] text-[#f4efdf] md:grid-cols-2"
        >

          <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto">

            <img
              src={featured.image}
              alt={featured.title}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

          </div>

          <div className="flex flex-col justify-between p-8 md:p-12">

            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#58bd69]">
                Featured story
              </span>

              <ArrowUpRight
                size={20}
                className="text-white/40 transition group-hover:text-[#58bd69]"
              />
            </div>

            <div className="mt-16">

              <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.25em] text-white/40">
                {featured.category}
              </p>

              <h2 className="max-w-xl text-4xl font-black uppercase leading-[0.9] tracking-[-0.05em] md:text-6xl">
                {featured.title}
              </h2>

              <p className="mt-6 max-w-md text-sm leading-6 text-white/50">
                {featured.excerpt}
              </p>

              <div className="mt-8 flex gap-5 text-[9px] uppercase tracking-[0.2em] text-white/40">
                <span>{featured.date}</span>
                <span>{featured.readTime}</span>
              </div>

            </div>

          </div>

        </Link>

      </section>

      {/* STORIES */}
      <section className="mx-auto max-w-[1200px] px-6 py-24 md:px-10">

        <div className="mb-10 flex items-end justify-between border-b border-black/10 pb-5">

          <h2 className="text-2xl font-black uppercase tracking-[-0.04em]">
            Latest stories
          </h2>

          <span className="text-[9px] uppercase tracking-[0.2em] text-black/40">
            03 — 04
          </span>

        </div>

        <div className="grid gap-x-6 gap-y-14 md:grid-cols-3">

          {remaining.map((post) => (
            <Link
              key={post.id}
              href={`/journal/${post.id}`}
              className="group"
            >

              <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-black">

                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute left-4 top-4 rounded-full bg-[#f4efdf]/90 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.12em]">
                  {post.category}
                </div>

              </div>

              <div className="pt-5">

                <div className="mb-3 flex justify-between text-[8px] uppercase tracking-[0.18em] text-black/40">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-2xl font-black uppercase leading-[0.9] tracking-[-0.04em]">
                  {post.title}
                </h3>

                <p className="mt-4 text-xs leading-5 text-black/45">
                  {post.excerpt}
                </p>

                <div className="mt-5 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#319447]">
                  Read story
                  <ArrowUpRight size={13} />
                </div>

              </div>

            </Link>
          ))}

        </div>

      </section>

      {/* NEWSLETTER */}
      <section className="bg-[#071b0b] px-6 py-24 text-[#f4efdf] md:px-10">

        <div className="mx-auto max-w-[1200px]">

          <div className="grid gap-10 md:grid-cols-[1fr_0.7fr] md:items-end">

            <div>

              <p className="mb-5 text-[9px] font-bold uppercase tracking-[0.3em] text-[#58bd69]">
                Stay in the loop
              </p>

              <h2 className="max-w-2xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.05em] md:text-7xl">
                Good things,
                <br />
                <span className="text-[#49b85c]">occasionally.</span>
              </h2>

            </div>

            <form className="flex gap-2 border-b border-white/20 pb-3">

              <input
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-white/30"
              />

              <button
                type="submit"
                className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#58bd69]"
              >
                Subscribe
                <ArrowUpRight size={14} />
              </button>

            </form>

          </div>

        </div>

      </section>

    </main>
  );
}