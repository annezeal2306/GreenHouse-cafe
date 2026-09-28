"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Minus,
  Plus,
  Trash2,
} from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const increase = useCartStore((state) => state.increase);
  const decrease = useCartStore((state) => state.decrease);
  const removeItem = useCartStore((state) => state.removeItem);
  const total = useCartStore((state) => state.total);

  return (
    <main className="min-h-screen bg-[#f4efdf] px-6 pb-24 pt-32 text-[#071b0b] md:px-10">

      <div className="mx-auto max-w-[1100px]">

        <Link
          href="/menu"
          className="mb-10 flex w-fit items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-black/40 hover:text-[#319447]"
        >
          <ArrowLeft size={13} />
          Back to menu
        </Link>

        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">

          {/* ITEMS */}
          <section>

            <div className="mb-8 flex items-end justify-between border-b border-black/10 pb-5">
              <div>
                <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.3em] text-[#319447]">
                  Your order
                </p>

                <h1 className="text-5xl font-black uppercase leading-none tracking-[-0.05em]">
                  Cart.
                </h1>
              </div>

              <span className="text-xs text-black/40">
                {items.length} item{items.length !== 1 ? "s" : ""}
              </span>
            </div>

            {items.length === 0 ? (
             <div className="flex min-h-[420px] flex-col items-center justify-center text-center">

    <p className="text-3xl font-black uppercase text-[#071b0b]">
      Your cart is empty.
    </p>

    <p className="mt-3 text-sm text-black/40">
      Something delicious should be here.
    </p>

    <Link
      href="/menu"
      style={{
        color: "#f4efdf",
        backgroundColor: "#071b0b",
      }}
      className="mt-8 inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:opacity-80"
    >
      <span style={{ color: "#f4efdf" }}>
        Explore menu
      </span>

      <ArrowUpRight
        size={14}
        style={{ color: "#f4efdf" }}
      />
    </Link>

  </div>
            ) : (
              <div className="space-y-5">

                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-5 border-b border-black/10 pb-5"
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-28 w-28 rounded-2xl object-cover"
                    />

                    <div className="flex min-w-0 flex-1 flex-col justify-between">

                      <div className="flex justify-between gap-4">

                        <h2 className="text-xl font-black uppercase leading-none tracking-[-0.03em]">
                          {item.name}
                        </h2>

                        <span className="font-bold">
                          ₹{item.price * item.quantity}
                        </span>

                      </div>

                      <div className="flex items-center justify-between">

                        <div className="flex items-center gap-3 rounded-full border border-black/10 px-3 py-2">

                          <button onClick={() => decrease(item.id)}>
                            <Minus size={13} />
                          </button>

                          <span className="min-w-5 text-center text-xs font-bold">
                            {item.quantity}
                          </span>

                          <button onClick={() => increase(item.id)}>
                            <Plus size={13} />
                          </button>

                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-black/30 transition hover:text-red-700"
                        >
                          <Trash2 size={15} />
                        </button>

                      </div>

                    </div>

                  </div>
                ))}

              </div>
            )}

          </section>

          {/* SUMMARY */}
          {items.length > 0 && (
            <aside className="h-fit rounded-[24px] bg-[#071b0b] p-7 text-[#f4efdf] lg:sticky lg:top-28">

              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#58bd69]">
                Order summary
              </p>

              <div className="mt-8 space-y-4 border-b border-white/10 pb-6">

                <div className="flex justify-between text-sm text-white/50">
                  <span>Subtotal</span>
                  <span>₹{total()}</span>
                </div>

                <div className="flex justify-between text-sm text-white/50">
                  <span>Service</span>
                  <span>₹0</span>
                </div>

              </div>

              <div className="flex justify-between pt-6">
                <span className="text-lg font-bold">
                  Total
                </span>

                <span className="text-2xl font-black">
                  ₹{total()}
                </span>
              </div>

              <Link
                href="/checkout"
                className="mt-8 flex items-center justify-center gap-3 rounded-xl bg-[#49b85c] px-6 py-4 text-[9px] font-bold uppercase tracking-[0.2em] text-[#071b0b] transition hover:bg-[#f4efdf]"
              >
                Continue to checkout
                <ArrowUpRight size={14} />
              </Link>

              <p className="mt-5 text-center text-[8px] uppercase tracking-[0.15em] text-white/30">
                Dine in · Pickup · QR ordering
              </p>

            </aside>
          )}

        </div>

      </div>

    </main>
  );
}