"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import { menuItems } from "@/data/menu";

const filters = [
  "All",
  "Bestsellers",
  "High Protein",
  "Low Cal",
  "Vegetarian",
  "Vegan",
] as const;

export default function Menu() {
  const [activeFilter, setActiveFilter] = useState<
  "All" | "Bestsellers" | "Low Cal" | "Vegetarian" | "Vegan" | "High Protein"
>("All");
const filteredItems = useMemo(() => {
  if (activeFilter === "All") {
    return menuItems;
  }

  if (activeFilter === "Bestsellers") {
    return menuItems.filter((item) => item.bestseller === true);
  }

  if (activeFilter === "Low Cal") {
    return menuItems.filter((item) => item.calories <= 400);
  }

  if (
    activeFilter === "Vegetarian" ||
    activeFilter === "Vegan" ||
    activeFilter === "High Protein"
  ) {
    return menuItems.filter((item) =>
      item.diet.includes(activeFilter)
    );
  }

  return menuItems;
}, [activeFilter]);

  return (
    <section
      id="menu"
      className="bg-[#081408] px-6 py-28 text-[#F4EEDB] md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Header */}
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">

          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#58AC67]">
              Fresh from the kitchen
            </p>

            <h2 className="text-7xl font-black leading-[0.8] tracking-[-0.07em] md:text-[9rem]">
              THE
              <br />
              <span className="text-[#58AC67]">MENU.</span>
            </h2>
          </div>

          <p className="max-w-[330px] text-sm leading-6 text-white/50">
            Food that tastes good and makes you feel good.
            Find something that fits your mood, your macros
            or simply your cravings.
          </p>

        </div>

        {/* Filters */}
        <div className="mt-16 flex flex-wrap gap-2 border-y border-white/10 py-5">

          <div className="mr-3 flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-white/40">
            <SlidersHorizontal size={13} />
            Filter
          </div>

          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.15em] transition-all ${
                activeFilter === filter
                  ? "bg-[#58AC67] text-[#081408]"
                  : "border border-white/10 text-white/50 hover:border-white/30 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}

        </div>

        {/* Menu grid */}
        <motion.div
          layout
          className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredItems.map((item, index) => (
            <motion.article
              layout
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              className="group"
            >

              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-[#142317]">

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {item.bestseller && (
                  <span className="absolute left-5 top-5 rounded-full bg-[#58AC67] px-3 py-2 text-[8px] font-bold uppercase tracking-[0.15em] text-[#081408]">
                    Bestseller
                  </span>
                )}

                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.15em] text-white/60">
                      {item.category}
                    </p>

                    <h3 className="mt-1 text-2xl font-black tracking-[-0.04em]">
                      {item.name}
                    </h3>
                  </div>

                  <span className="text-xl font-bold">
                    ₹{item.price}
                  </span>

                </div>

              </div>

              {/* Info */}
              <div className="flex items-start justify-between px-2 py-5">

                <div>
                  <p className="max-w-[280px] text-xs leading-5 text-white/40">
                    {item.description}
                  </p>

                  <div className="mt-4 flex gap-2">

                    <span className="rounded-full border border-white/10 px-3 py-1.5 text-[8px] uppercase tracking-[0.1em] text-white/50">
                      {item.calories} CAL
                    </span>

                    <span className="rounded-full border border-white/10 px-3 py-1.5 text-[8px] uppercase tracking-[0.1em] text-white/50">
                      {item.protein}G PROTEIN
                    </span>

                  </div>
                </div>

                <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 transition-all hover:bg-[#58AC67] hover:text-[#081408]">
                  <ArrowUpRight size={15} />
                </button>

              </div>

            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-20 flex flex-col items-start justify-between gap-8 border-t border-white/10 pt-8 md:flex-row md:items-end">

          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
              Can&apos;t decide?
            </p>

            <h3 className="mt-3 text-4xl font-black tracking-[-0.05em] md:text-6xl">
              BUILD YOUR
              <br />
              <span className="text-[#58AC67]">OWN BOWL.</span>
            </h3>
          </div>

          <a
            href="#build"
            className="flex items-center gap-2 rounded-full bg-[#58AC67] px-7 py-4 text-[9px] font-bold uppercase tracking-[0.2em] text-[#081408] transition-transform hover:scale-105"
          >
            Start building
            <ArrowUpRight size={15} />
          </a>

        </div>

      </div>
    </section>
  );
}