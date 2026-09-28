"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, Minus, Plus } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

const bases = [
  {
    id: "brown-rice",
    name: "Brown Rice",
    price: 60,
    calories: 215,
    protein: 5,
  },
  {
    id: "quinoa",
    name: "Quinoa",
    price: 80,
    calories: 190,
    protein: 7,
  },
  {
    id: "greens",
    name: "Garden Greens",
    price: 50,
    calories: 80,
    protein: 3,
  },
];

const proteins = [
  {
    id: "grilled-chicken",
    name: "Grilled Chicken",
    price: 140,
    calories: 220,
    protein: 32,
  },
  {
    id: "paneer",
    name: "Charred Paneer",
    price: 120,
    calories: 260,
    protein: 18,
  },
  {
    id: "tofu",
    name: "Crispy Tofu",
    price: 110,
    calories: 180,
    protein: 20,
  },
  {
    id: "chickpeas",
    name: "Spiced Chickpeas",
    price: 90,
    calories: 160,
    protein: 9,
  },
];

const toppings = [
  {
    id: "avocado",
    name: "Avocado",
    price: 70,
    calories: 120,
    protein: 2,
  },
  {
    id: "corn",
    name: "Sweet Corn",
    price: 40,
    calories: 70,
    protein: 2,
  },
  {
    id: "cucumber",
    name: "Cucumber",
    price: 30,
    calories: 20,
    protein: 1,
  },
  {
    id: "sesame",
    name: "Sesame Crunch",
    price: 40,
    calories: 60,
    protein: 2,
  },
  {
    id: "pickled-onion",
    name: "Pickled Onion",
    price: 30,
    calories: 25,
    protein: 0,
  },
  {
    id: "greens",
    name: "Extra Greens",
    price: 35,
    calories: 25,
    protein: 2,
  },
];

const sauces = [
  {
    id: "green-herb",
    name: "Green Herb",
    price: 30,
    calories: 45,
    protein: 1,
  },
  {
    id: "sesame",
    name: "Sesame Tahini",
    price: 40,
    calories: 90,
    protein: 3,
  },
  {
    id: "spicy",
    name: "House Spicy",
    price: 30,
    calories: 35,
    protein: 0,
  },
  {
    id: "yogurt",
    name: "Herb Yogurt",
    price: 35,
    calories: 55,
    protein: 3,
  },
];

type Ingredient = {
  id: string;
  name: string;
  price: number;
  calories: number;
  protein: number;
};

export default function BowlPage() {
  const [base, setBase] = useState<Ingredient | null>(null);
  const [protein, setProtein] = useState<Ingredient | null>(null);
  const [sauce, setSauce] = useState<Ingredient | null>(null);

  const [selectedToppings, setSelectedToppings] = useState<Ingredient[]>([]);

  const [quantity, setQuantity] = useState(1);

  const addItem = useCartStore((state) => state.addItem);

  const totals = useMemo(() => {
    const ingredients = [
      base,
      protein,
      sauce,
      ...selectedToppings,
    ].filter(Boolean) as Ingredient[];

    return ingredients.reduce(
      (acc, item) => ({
        price: acc.price + item.price,
        calories: acc.calories + item.calories,
        protein: acc.protein + item.protein,
      }),
      {
        price: 0,
        calories: 0,
        protein: 0,
      }
    );
  }, [base, protein, sauce, selectedToppings]);

  function toggleTopping(item: Ingredient) {
    setSelectedToppings((current) => {
      const exists = current.some((x) => x.id === item.id);

      if (exists) {
        return current.filter((x) => x.id !== item.id);
      }

      return [...current, item];
    });
  }

  function addBowlToCart() {
    if (!base || !protein) {
      alert("Please choose a base and protein first.");
      return;
    }

    const bowlName = "My Custom Bowl";

   for (let i = 0; i < quantity; i++) {
  addItem({
    id: `custom-bowl-${Date.now()}-${i}`,
    name: bowlName,
    price: totals.price,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
  });
}

    setQuantity(1);
  }

  return (
    <main className="min-h-screen bg-[#f4efdf] text-[#071b0b]">

      {/* HERO */}
      <section className="mx-auto max-w-[1200px] px-6 pb-16 pt-32 md:px-10">

        <Link
          href="/menu"
          className="mb-10 flex w-fit items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-black/40 hover:text-[#319447]"
        >
          <ArrowLeft size={13} />
          Back to menu
        </Link>

        <div className="grid gap-10 md:grid-cols-[1fr_0.6fr] md:items-end">

          <div>

            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.35em] text-[#319447]">
              Made your way
            </p>

            <h1 className="text-6xl font-black uppercase leading-[0.8] tracking-[-0.06em] md:text-8xl">
              Build
              <br />
              <span className="text-[#319447]">Your Bowl.</span>
            </h1>

          </div>

          <p className="max-w-sm text-sm leading-6 text-black/50">
            Start with a base. Add your protein, load it with
            toppings and finish it with your favourite sauce.
          </p>

        </div>

      </section>

      {/* BUILDER */}
      <section className="mx-auto grid max-w-[1200px] gap-10 px-6 pb-24 md:px-10 lg:grid-cols-[1fr_380px]">

        <div className="space-y-12">

          {/* BASE */}
          <IngredientSection
            number="01"
            title="Choose your base"
            description="Your bowl starts here."
          >

            <div className="grid gap-3 sm:grid-cols-3">

              {bases.map((item) => (
                <IngredientCard
                  key={item.id}
                  item={item}
                  selected={base?.id === item.id}
                  onClick={() => setBase(item)}
                />
              ))}

            </div>

          </IngredientSection>

          {/* PROTEIN */}
          <IngredientSection
            number="02"
            title="Pick your protein"
            description="Make it satisfying."
          >

            <div className="grid gap-3 sm:grid-cols-2">

              {proteins.map((item) => (
                <IngredientCard
                  key={item.id}
                  item={item}
                  selected={protein?.id === item.id}
                  onClick={() => setProtein(item)}
                />
              ))}

            </div>

          </IngredientSection>

          {/* TOPPINGS */}
          <IngredientSection
            number="03"
            title="Load it up"
            description="Pick as many toppings as you like."
          >

            <div className="grid gap-3 sm:grid-cols-2">

              {toppings.map((item) => (
                <IngredientCard
                  key={item.id}
                  item={item}
                  selected={selectedToppings.some(
                    (x) => x.id === item.id
                  )}
                  onClick={() => toggleTopping(item)}
                />
              ))}

            </div>

          </IngredientSection>

          {/* SAUCE */}
          <IngredientSection
            number="04"
            title="Finish with sauce"
            description="The final touch."
          >

            <div className="grid gap-3 sm:grid-cols-2">

              {sauces.map((item) => (
                <IngredientCard
                  key={item.id}
                  item={item}
                  selected={sauce?.id === item.id}
                  onClick={() => setSauce(item)}
                />
              ))}

            </div>

          </IngredientSection>

        </div>

        {/* SUMMARY */}
        <aside className="h-fit lg:sticky lg:top-28">

          <div className="overflow-hidden rounded-[28px] bg-[#071b0b] text-[#f4efdf]">

            {/* IMAGE */}
            <div className="relative aspect-[4/3]">

              <img
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85"
                alt="Custom bowl"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071b0b] to-transparent" />

              <div className="absolute bottom-5 left-6">

                <p className="text-[8px] uppercase tracking-[0.2em] text-white/50">
                  Your creation
                </p>

                <h2 className="mt-1 text-3xl font-black uppercase tracking-[-0.04em]">
                  Custom Bowl
                </h2>

              </div>

            </div>

            {/* SUMMARY */}
            <div className="p-6">

              <div className="space-y-3 border-b border-white/10 pb-6">

                <SummaryRow
                  label="Base"
                  value={base?.name ?? "Not selected"}
                />

                <SummaryRow
                  label="Protein"
                  value={protein?.name ?? "Not selected"}
                />

                <SummaryRow
                  label="Toppings"
                  value={
                    selectedToppings.length
                      ? `${selectedToppings.length} selected`
                      : "None"
                  }
                />

                <SummaryRow
                  label="Sauce"
                  value={sauce?.name ?? "Not selected"}
                />

              </div>

              {/* MACROS */}
              <div className="grid grid-cols-2 gap-3 py-6">

                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-[8px] uppercase tracking-[0.15em] text-white/40">
                    Calories
                  </p>

                  <p className="mt-1 text-xl font-black">
                    {totals.calories}
                    <span className="ml-1 text-[9px] font-normal text-white/40">
                      kcal
                    </span>
                  </p>
                </div>

                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-[8px] uppercase tracking-[0.15em] text-white/40">
                    Protein
                  </p>

                  <p className="mt-1 text-xl font-black">
                    {totals.protein}g
                  </p>
                </div>

              </div>

              {/* QUANTITY */}
              <div className="flex items-center justify-between border-t border-white/10 pt-5">

                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
                  Quantity
                </span>

                <div className="flex items-center gap-4 rounded-full border border-white/10 px-3 py-2">

                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((value) => Math.max(1, value - 1))
                    }
                  >
                    <Minus size={13} />
                  </button>

                  <span className="min-w-4 text-center text-xs font-bold">
                    {quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((value) => value + 1)
                    }
                  >
                    <Plus size={13} />
                  </button>

                </div>

              </div>

              {/* TOTAL */}
              <div className="mt-5 flex items-end justify-between">

                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
                  Total
                </span>

                <span className="text-3xl font-black">
                  ₹{totals.price * quantity}
                </span>

              </div>

              {/* ADD */}
              <button
                type="button"
                onClick={addBowlToCart}
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-[#49b85c] px-6 py-4 text-[9px] font-bold uppercase tracking-[0.2em] text-[#071b0b] transition hover:bg-[#f4efdf]"
              >
                Add bowl to order
                <ArrowUpRight size={15} />
              </button>

              <p className="mt-4 text-center text-[8px] uppercase tracking-[0.15em] text-white/30">
                Calories & protein update as you build
              </p>

            </div>

          </div>

        </aside>

      </section>

    </main>
  );
}


/* ===============================================================
   INGREDIENT SECTION
================================================================ */

function IngredientSection({
  number,
  title,
  description,
  children,
}: {
  number: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section>

      <div className="mb-5 flex items-end justify-between border-b border-black/10 pb-4">

        <div className="flex items-start gap-4">

          <span className="text-[9px] font-bold tracking-[0.2em] text-[#319447]">
            {number}
          </span>

          <div>

            <h2 className="text-2xl font-black uppercase leading-none tracking-[-0.04em]">
              {title}
            </h2>

            <p className="mt-2 text-xs text-black/40">
              {description}
            </p>

          </div>

        </div>

      </div>

      {children}

    </section>
  );
}


/* ===============================================================
   INGREDIENT CARD
================================================================ */

function IngredientCard({
  item,
  selected,
  onClick,
}: {
  item: Ingredient;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative rounded-2xl border p-5 text-left transition ${
        selected
          ? "border-[#319447] bg-[#071b0b] text-[#f4efdf]"
          : "border-black/10 bg-transparent hover:border-black/30"
      }`}
    >

      {selected && (
        <span className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-[#49b85c] text-[#071b0b]">
          <Check size={13} />
        </span>
      )}

      <h3 className="pr-8 text-lg font-black uppercase leading-none tracking-[-0.03em]">
        {item.name}
      </h3>

      <div
        className={`mt-5 flex gap-4 text-[9px] uppercase tracking-[0.12em] ${
          selected ? "text-white/40" : "text-black/35"
        }`}
      >
        <span>{item.calories} kcal</span>
        <span>{item.protein}g protein</span>
      </div>

      <p
        className={`mt-3 text-sm font-bold ${
          selected ? "text-[#58bd69]" : "text-[#319447]"
        }`}
      >
        + ₹{item.price}
      </p>

    </button>
  );
}


/* ===============================================================
   SUMMARY ROW
================================================================ */

function SummaryRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 text-xs">

      <span className="text-white/40">
        {label}
      </span>

      <span className="text-right font-medium">
        {value}
      </span>

    </div>
  );
}