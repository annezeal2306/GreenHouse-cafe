"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Check, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";
import { bowlCategories, BowlIngredient } from "@/data/bowl";

export default function BuildYourBowl() {
  const [selected, setSelected] = useState<
    Record<string, BowlIngredient | BowlIngredient[] | undefined>
  >({});

  const handleSelect = (
    categoryId: string,
    ingredient: BowlIngredient,
    multiple: boolean
  ) => {
    setSelected((current) => {
      if (!multiple) {
        return {
          ...current,
          [categoryId]: ingredient,
        };
      }

      const existing = current[categoryId];

      const items = Array.isArray(existing) ? existing : [];

      const alreadySelected = items.some(
        (item) => item.id === ingredient.id
      );

      return {
        ...current,
        [categoryId]: alreadySelected
          ? items.filter((item) => item.id !== ingredient.id)
          : [...items, ingredient],
      };
    });
  };

  const selectedIngredients = useMemo(() => {
    return Object.values(selected).flatMap((value) => {
      if (!value) return [];
      return Array.isArray(value) ? value : [value];
    });
  }, [selected]);

  const totalPrice = selectedIngredients.reduce(
    (total, item) => total + item.price,
    0
  );

  const totalCalories = selectedIngredients.reduce(
    (total, item) => total + item.calories,
    0
  );

  const totalProtein = selectedIngredients.reduce(
    (total, item) => total + item.protein,
    0
  );

  const requiredCategories = bowlCategories.filter(
    (category) => category.required
  );

  const completedRequired = requiredCategories.filter((category) => {
    const value = selected[category.id];

    if (Array.isArray(value)) return value.length > 0;

    return Boolean(value);
  }).length;

  const isComplete =
    completedRequired === requiredCategories.length;

  const resetBowl = () => {
    setSelected({});
  };

  return (
    <section
      id="build"
      className="bg-[#F4EEDB] px-6 py-28 text-[#081408] md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Heading */}
        <div className="max-w-[900px]">

          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#2C8E33]">
            Your food. Your rules.
          </p>

          <h2 className="text-6xl font-black leading-[0.82] tracking-[-0.07em] md:text-[9rem]">
            BUILD YOUR
            <br />
            <span className="text-[#2C8E33]">
              BOWL.
            </span>
          </h2>

          <p className="mt-8 max-w-[550px] text-sm leading-6 text-black/50">
            Start with a base, choose your protein, load it up with
            fresh ingredients and finish it exactly how you like.
          </p>

        </div>

        {/* Main builder */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_380px]">

          {/* Ingredients */}
          <div className="space-y-12">

            {bowlCategories.map((category, categoryIndex) => {

              const current = selected[category.id];

              return (
                <div key={category.id}>

                  {/* Category header */}
                  <div className="mb-5 flex items-end justify-between border-b border-black/10 pb-4">

                    <div>
                      <div className="flex items-center gap-3">

                        <span className="text-[10px] font-bold text-[#2C8E33]">
                          0{categoryIndex + 1}
                        </span>

                        <h3 className="text-2xl font-black tracking-[-0.04em]">
                          {category.title}
                        </h3>

                      </div>

                      <p className="mt-1 text-xs text-black/40">
                        {category.subtitle}
                      </p>
                    </div>

                    {category.required && (
                      <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-black/30">
                        Required
                      </span>
                    )}

                  </div>

                  {/* Ingredient cards */}
                  <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">

                    {category.ingredients.map((ingredient) => {

                      const isSelected = Array.isArray(current)
                        ? current.some(
                            (item) => item.id === ingredient.id
                          )
                        : current?.id === ingredient.id;

                      return (
                        <motion.button
                          key={ingredient.id}
                          whileTap={{ scale: 0.98 }}
                          onClick={() =>
                            handleSelect(
                              category.id,
                              ingredient,
                              !category.required
                            )
                          }
                          className={`group relative overflow-hidden rounded-[20px] border text-left transition-all ${
                            isSelected
                              ? "border-[#2C8E33] ring-2 ring-[#2C8E33]/20"
                              : "border-black/10 hover:border-black/30"
                          }`}
                        >

                          {/* Image */}
                          <div className="relative h-[170px] overflow-hidden bg-[#DCE7C9]">

                            <img
                              src={ingredient.image}
                              alt={ingredient.name}
                              className={`h-full w-full object-cover transition-transform duration-500 ${
                                isSelected
                                  ? "scale-105"
                                  : "group-hover:scale-105"
                              }`}
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                            {/* Selected indicator */}
                            <div
                              className={`absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full transition-all ${
                                isSelected
                                  ? "bg-[#58AC67] text-[#081408]"
                                  : "bg-white/80 text-transparent"
                              }`}
                            >
                              <Check size={14} />
                            </div>

                          </div>

                          {/* Content */}
                          <div className="p-4">

                            <div className="flex items-start justify-between gap-3">

                              <div>
                                <h4 className="font-bold tracking-[-0.02em]">
                                  {ingredient.name}
                                </h4>

                                <p className="mt-1 text-[10px] leading-4 text-black/40">
                                  {ingredient.description}
                                </p>
                              </div>

                              <span className="shrink-0 text-sm font-bold">
                                +₹{ingredient.price}
                              </span>

                            </div>

                            <div className="mt-3 flex gap-2">

                              <span className="rounded-full bg-black/5 px-2 py-1 text-[8px] uppercase tracking-[0.08em] text-black/50">
                                {ingredient.calories} cal
                              </span>

                              <span className="rounded-full bg-black/5 px-2 py-1 text-[8px] uppercase tracking-[0.08em] text-black/50">
                                {ingredient.protein}g protein
                              </span>

                            </div>

                          </div>

                        </motion.button>
                      );
                    })}

                  </div>
                </div>
              );
            })}

          </div>

          {/* Summary */}
          <div className="lg:sticky lg:top-8 lg:h-fit">

            <div className="overflow-hidden rounded-[30px] bg-[#081408] text-[#F4EEDB]">

              {/* Top */}
              <div className="p-7 md:p-8">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.25em] text-[#58AC67]">
                      Your creation
                    </p>

                    <h3 className="mt-2 text-3xl font-black tracking-[-0.05em]">
                      MY BOWL
                    </h3>
                  </div>

                  <button
                    onClick={resetBowl}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition hover:border-white/30 hover:text-white"
                    title="Reset bowl"
                  >
                    <RotateCcw size={14} />
                  </button>

                </div>

                {/* Selected ingredients */}
                <div className="mt-8 min-h-[180px] border-y border-white/10 py-5">

                  {selectedIngredients.length === 0 ? (
                    <p className="py-12 text-center text-xs text-white/30">
                      Your bowl is waiting.
                      <br />
                      Start choosing ingredients.
                    </p>
                  ) : (
                    <div className="space-y-3">

                      {selectedIngredients.map((ingredient) => (
                        <div
                          key={ingredient.id}
                          className="flex items-center justify-between text-sm"
                        >
                          <span className="text-white/70">
                            {ingredient.name}
                          </span>

                          <span className="text-white/40">
                            ₹{ingredient.price}
                          </span>
                        </div>
                      ))}

                    </div>
                  )}

                </div>

                {/* Nutrition */}
                <div className="grid grid-cols-2 gap-2 pt-5">

                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-[8px] uppercase tracking-[0.15em] text-white/30">
                      Calories
                    </p>

                    <p className="mt-2 text-2xl font-black">
                      {totalCalories}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-[8px] uppercase tracking-[0.15em] text-white/30">
                      Protein
                    </p>

                    <p className="mt-2 text-2xl font-black">
                      {totalProtein}g
                    </p>
                  </div>

                </div>

              </div>

              {/* Bottom */}
              <div className="border-t border-white/10 bg-[#102013] p-7 md:p-8">

                <div className="flex items-end justify-between">

                  <div>
                    <p className="text-[8px] uppercase tracking-[0.2em] text-white/30">
                      Total
                    </p>

                    <p className="mt-1 text-4xl font-black tracking-[-0.05em]">
                      ₹{totalPrice}
                    </p>
                  </div>

                  <span className="text-[9px] text-white/30">
                    {completedRequired}/{requiredCategories.length} required
                  </span>

                </div>

                <button
                  disabled={!isComplete}
                  className={`mt-6 flex w-full items-center justify-center gap-2 rounded-full py-4 text-[9px] font-bold uppercase tracking-[0.2em] transition-all ${
                    isComplete
                      ? "bg-[#58AC67] text-[#081408] hover:scale-[1.02]"
                      : "cursor-not-allowed bg-white/10 text-white/20"
                  }`}
                >
                  Add to order
                  <ArrowRight size={14} />
                </button>

                {!isComplete && (
                  <p className="mt-3 text-center text-[9px] text-white/25">
                    Choose all required ingredients to continue.
                  </p>
                )}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}