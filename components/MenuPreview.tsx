"use client";

import Link from "next/link";
import { ArrowUpRight, Flame } from "lucide-react";

const dishes = [
  {
    name: "Green Goddess Bowl",
    category: "BOWLS",
    description: "Seasonal greens, avocado, grains & house dressing.",
    price: "₹320",
    calories: "420 CAL",
    protein: "18G PROTEIN",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Grilled Chicken Bowl",
    category: "HIGH PROTEIN",
    description: "Grilled chicken, quinoa, greens & roasted vegetables.",
    price: "₹380",
    calories: "510 CAL",
    protein: "36G PROTEIN",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Avocado Toast",
    category: "BREAKFAST",
    description: "Sourdough, smashed avocado, seeds & chilli oil.",
    price: "₹260",
    calories: "340 CAL",
    protein: "10G PROTEIN",
    image:
      "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=1000&q=85",
  },
];

export default function MenuPreview() {
  return (
    <section className="bg-[#071A0D] px-6 py-28 text-[#F5F0DF] md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1280px]">

        {/* HEADER */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-[#63C96B]">
              Fresh from the kitchen
            </p>

            <h2 className="text-6xl font-black leading-[0.88] tracking-[-0.05em] md:text-8xl">
              GOOD FOOD.
              <br />
              <span className="text-[#63C96B]">
                FEELS GOOD.
              </span>
            </h2>
          </div>

          <Link
            href="/menu"
            className="flex w-fit items-center gap-2 rounded-full border border-[#F5F0DF]/30 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.18em] transition-all hover:bg-[#F5F0DF] hover:text-[#071A0D]"
          >
            View full menu
            <ArrowUpRight size={13} />
          </Link>

        </div>

        {/* FILTERS */}
        <div className="mt-14 flex flex-wrap gap-2 border-y border-[#F5F0DF]/15 py-5">

          <button className="rounded-full bg-[#63C96B] px-5 py-3 text-[9px] font-bold uppercase tracking-[0.15em] text-[#071A0D]">
            All
          </button>

          <button className="rounded-full border border-[#F5F0DF]/20 px-5 py-3 text-[9px] font-bold uppercase tracking-[0.15em] text-[#F5F0DF]/70 transition hover:border-[#63C96B] hover:text-[#63C96B]">
            Under 400 Cal
          </button>

          <button className="rounded-full border border-[#F5F0DF]/20 px-5 py-3 text-[9px] font-bold uppercase tracking-[0.15em] text-[#F5F0DF]/70 transition hover:border-[#63C96B] hover:text-[#63C96B]">
            High Protein
          </button>

          <button className="rounded-full border border-[#F5F0DF]/20 px-5 py-3 text-[9px] font-bold uppercase tracking-[0.15em] text-[#F5F0DF]/70 transition hover:border-[#63C96B] hover:text-[#63C96B]">
            Vegetarian
          </button>

          <button className="rounded-full border border-[#F5F0DF]/20 px-5 py-3 text-[9px] font-bold uppercase tracking-[0.15em] text-[#F5F0DF]/70 transition hover:border-[#63C96B] hover:text-[#63C96B]">
            Vegan
          </button>

        </div>

        {/* PRODUCTS */}
        <div className="mt-8 grid gap-5 md:grid-cols-3">

          {dishes.map((dish, index) => (
            <Link
              href="/menu"
              key={dish.name}
              className="group overflow-hidden rounded-[24px] border border-[#F5F0DF]/10 bg-[#102016]"
            >

              {/* IMAGE */}
              <div className="relative h-[320px] overflow-hidden">

                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071A0D]/80 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full bg-[#F5F0DF] px-4 py-2 text-[8px] font-bold uppercase tracking-[0.15em] text-[#071A0D]">
                  {dish.category}
                </div>

                {index === 1 && (
                  <div className="absolute right-5 top-5 flex items-center gap-1 rounded-full bg-[#63C96B] px-4 py-2 text-[8px] font-bold uppercase tracking-[0.15em] text-[#071A0D]">
                    <Flame size={11} />
                    Popular
                  </div>
                )}

              </div>

              {/* INFO */}
              <div className="p-6">

                <div className="flex items-start justify-between gap-4">

                  <h3 className="text-2xl font-black tracking-[-0.03em]">
                    {dish.name}
                  </h3>

                  <span className="text-sm font-bold text-[#63C96B]">
                    {dish.price}
                  </span>

                </div>

                <p className="mt-3 text-sm leading-6 text-[#F5F0DF]/55">
                  {dish.description}
                </p>

                <div className="mt-5 flex gap-2">

                  <span className="rounded-full bg-[#F5F0DF]/8 px-3 py-2 text-[8px] font-bold uppercase tracking-[0.12em] text-[#F5F0DF]/60">
                    {dish.calories}
                  </span>

                  <span className="rounded-full bg-[#F5F0DF]/8 px-3 py-2 text-[8px] font-bold uppercase tracking-[0.12em] text-[#F5F0DF]/60">
                    {dish.protein}
                  </span>

                </div>

              </div>

            </Link>
          ))}

        </div>

        {/* BOTTOM */}
        <div className="mt-14 flex flex-col justify-between gap-6 border-t border-[#F5F0DF]/15 pt-8 md:flex-row md:items-center">

          <p className="max-w-xl text-xl font-semibold leading-tight md:text-2xl">
            Eat according to your mood,
            <br />
            <span className="text-[#63C96B]">
              your goals and your day.
            </span>
          </p>

          <Link
            href="/menu"
            className="flex w-fit items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#63C96B]"
          >
            Explore the menu
            <ArrowUpRight size={14} />
          </Link>

        </div>

      </div>
    </section>
  );
}