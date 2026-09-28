"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search, SlidersHorizontal } from "lucide-react";
import { menuItems } from "@/data/menu";
import { useCartStore } from "@/store/cartStore";

const filters = [
  "All",
  "High Protein",
  "Low Calorie",
  "Vegetarian",
  "Vegan",
];

const categories = ["All", "Bowls", "Breakfast", "Mains", "Drinks"];

export default function MenuPage() {
  const [filter, setFilter] = useState("All");
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Macro / diet filter
      const matchesFilter =
        filter === "All"
          ? true
          : filter === "Low Calorie"
            ? item.calories <= 350
            : item.diet.includes(
                filter as "Vegetarian" | "Vegan" | "High Protein"
              );

      // Category filter
      const matchesCategory =
        category === "All" || item.category === category;

      // Search
      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        searchText === "" ||
        item.name.toLowerCase().includes(searchText) ||
        item.description.toLowerCase().includes(searchText);

      return matchesFilter && matchesCategory && matchesSearch;
    });
  }, [filter, category, search]);

  return (
    <main className="min-h-screen bg-[#f4efdf] text-[#071b0b]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="mx-auto max-w-[1200px] px-6 pb-14 pt-32 md:px-10">

        <div className="grid gap-10 md:grid-cols-[1fr_0.6fr] md:items-end">

          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.35em] text-[#319447]">
              Eat well / feel good
            </p>

            <h1 className="text-6xl font-black uppercase leading-[0.82] tracking-[-0.06em] md:text-8xl">
              The
              <br />
              <span className="text-[#319447]">Menu.</span>
            </h1>
          </div>

          <p className="max-w-sm text-sm leading-6 text-black/50">
            Everything we make starts with good ingredients.
            Browse by what you&apos;re craving — or what your body needs.
          </p>

        </div>
      </section>

      {/* =========================================================
          FILTER BAR
      ========================================================= */}
      <section className="sticky top-0 z-30 border-y border-black/10 bg-[#f4efdf]/95 backdrop-blur-md">
        <div className="mx-auto max-w-[1200px] px-6 py-4 md:px-10">

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            {/* MACRO FILTERS */}
            <div className="flex gap-2 overflow-x-auto pb-1">

              {filters.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFilter(item)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-[9px] font-bold uppercase tracking-[0.15em] transition ${
                    filter === item
                      ? "bg-[#071b0b] text-[#f4efdf]"
                      : "border border-black/10 hover:border-black/30"
                  }`}
                >
                  {item}
                </button>
              ))}

            </div>

            {/* SEARCH */}
            <div className="relative shrink-0">

              <Search
                size={15}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search the menu..."
                className="w-full rounded-full border border-black/10 bg-transparent py-3 pl-10 pr-5 text-xs outline-none placeholder:text-black/30 focus:border-[#319447] lg:w-64"
              />

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          CATEGORY NAVIGATION
      ========================================================= */}
      <section className="mx-auto max-w-[1200px] px-6 pt-10 md:px-10">

        <div className="flex items-center gap-6 overflow-x-auto border-b border-black/10 pb-4">

          <SlidersHorizontal
            size={15}
            className="shrink-0 text-black/30"
          />

          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.18em] transition ${
                category === item
                  ? "text-[#319447]"
                  : "text-black/40 hover:text-black"
              }`}
            >
              {item}
            </button>
          ))}

        </div>

      </section>

      {/* =========================================================
          RESULTS COUNT
      ========================================================= */}
      <section className="mx-auto max-w-[1200px] px-6 pt-8 md:px-10">

        <div className="flex items-center justify-between">

          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">
            {filteredItems.length}{" "}
            {filteredItems.length === 1 ? "dish" : "dishes"}
          </p>

          {(filter !== "All" ||
            category !== "All" ||
            search.trim() !== "") && (
            <button
              type="button"
              onClick={() => {
                setFilter("All");
                setCategory("All");
                setSearch("");
              }}
              className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#319447]"
            >
              Clear filters
            </button>
          )}

        </div>

      </section>

      {/* =========================================================
          MENU GRID
      ========================================================= */}
      <section className="mx-auto max-w-[1200px] px-6 py-12 md:px-10">

        {filteredItems.length === 0 ? (
          <div className="py-32 text-center">

            <p className="text-3xl font-black uppercase">
              Nothing found.
            </p>

            <p className="mt-3 text-sm text-black/40">
              Try changing your filters.
            </p>

            <button
              type="button"
              onClick={() => {
                setFilter("All");
                setCategory("All");
                setSearch("");
              }}
              className="mt-7 rounded-full bg-[#071b0b] px-6 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[#f4efdf]"
            >
              Reset menu
            </button>

          </div>
        ) : (
          <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">

            {filteredItems.map((item) => (
              <MenuCard
                key={item.id}
                item={item}
              />
            ))}

          </div>
        )}

      </section>

      {/* =========================================================
          BUILD YOUR BOWL CTA
      ========================================================= */}
      <section className="bg-[#071b0b] px-6 py-24 text-[#f4efdf] md:px-10">

        <div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-[1fr_auto] md:items-end">

          <div>

            <p className="mb-5 text-[9px] font-bold uppercase tracking-[0.3em] text-[#58bd69]">
              Can&apos;t decide?
            </p>

            <h2 className="max-w-3xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.05em] md:text-7xl">
              Build something
              <br />
              <span className="text-[#49b85c]">
                that&apos;s yours.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-6 text-white/45">
              Pick your base, protein, greens, sauce and toppings.
              See your calories and protein update as you build.
            </p>

          </div>

          <Link
            href="/bowl"
            className="flex w-fit items-center gap-3 rounded-full bg-[#f4efdf] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#071b0b] transition hover:bg-[#49b85c]"
          >
            Build your bowl
            <ArrowUpRight size={16} />
          </Link>

        </div>

      </section>

    </main>
  );
}


/* ===============================================================
   MENU CARD
================================================================ */

function MenuCard({
  item,
}: {
  item: (typeof menuItems)[number];
}) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <article className="group">

      {/* IMAGE */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-black">

        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

        {/* DIET TAGS */}
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">

          {item.diet.slice(0, 2).map((diet) => (
            <span
              key={diet}
              className="rounded-full bg-[#f4efdf]/90 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.12em] text-[#071b0b]"
            >
              {diet}
            </span>
          ))}

        </div>

        {/* MACROS */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between text-white">

          <div>
            <p className="text-[8px] uppercase tracking-[0.15em] text-white/60">
              Calories
            </p>

            <p className="text-sm font-bold">
              {item.calories} kcal
            </p>
          </div>

          <div className="text-right">
            <p className="text-[8px] uppercase tracking-[0.15em] text-white/60">
              Protein
            </p>

            <p className="text-sm font-bold">
              {item.protein}g
            </p>
          </div>

        </div>

      </div>

      {/* INFO */}
      <div className="pt-5">

        <div className="flex items-start justify-between gap-5">

          <div className="min-w-0">

            <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#319447]">
              {item.category}
            </p>

            <h3 className="text-2xl font-black uppercase leading-none tracking-[-0.04em]">
              {item.name}
            </h3>

            <p className="mt-3 max-w-xs text-xs leading-5 text-black/45">
              {item.description}
            </p>

          </div>

          <span className="shrink-0 text-lg font-bold">
            ₹{item.price}
          </span>

        </div>

        {/* ADD TO ORDER */}
        <button
          type="button"
          onClick={() =>
            addItem({
              id: item.id,
              name: item.name,
              price: item.price,
              image: item.image,
            })
          }
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#071b0b] px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-[#f4efdf] transition hover:bg-[#319447]"
        >
          Add to order
          <ArrowUpRight size={13} />
        </button>

      </div>

    </article>
  );
}