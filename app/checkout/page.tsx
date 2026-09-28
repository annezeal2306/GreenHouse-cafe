"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export default function CheckoutPage() {
  const items = useCartStore((state) => state.items);
  const total = useCartStore((state) => state.total);

const router = useRouter();
const clearCart = useCartStore((state) => state.clearCart);
  const [orderType, setOrderType] = useState("Dine in");
  const [placed, setPlaced] = useState(false);

  function placeOrder(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPlaced(true);
  }

  if (placed) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#071b0b] px-6 text-[#f4efdf]">

        <div className="max-w-md text-center">

          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#49b85c] text-[#071b0b]">
            <Check size={34} />
          </div>

          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#58bd69]">
            Order confirmed
          </p>

          <h1 className="mt-5 text-6xl font-black uppercase leading-[0.85] tracking-[-0.05em]">
            See you
            <br />
            soon.
          </h1>

          <p className="mt-6 text-sm leading-6 text-white/50">
            Your {orderType.toLowerCase()} order has been received.
            We&apos;ll have everything ready for you.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-[#f4efdf] px-7 py-4 text-[9px] font-bold uppercase tracking-[0.2em] text-[#071b0b]"
          >
            Back home
          </Link>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f4efdf] px-6 pb-24 pt-32 text-[#071b0b] md:px-10">

      <div className="mx-auto max-w-[850px]">

        <Link
          href="/cart"
          className="flex w-fit items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-black/40"
        >
          <ArrowLeft size={13} />
          Back to cart
        </Link>

        <p className="mt-12 text-[9px] font-bold uppercase tracking-[0.3em] text-[#319447]">
          Almost there
        </p>

        <h1 className="mt-4 text-6xl font-black uppercase leading-[0.85] tracking-[-0.06em]">
          Checkout.
        </h1>

        <form
          onSubmit={placeOrder}
          className="mt-12 grid gap-10 md:grid-cols-[1fr_300px]"
        >

          <div className="space-y-8">

            <section>
              <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.2em]">
                Your details
              </h2>

              <div className="space-y-3">
                <input
                  required
                  placeholder="Full name"
                  className="w-full rounded-xl border border-black/10 bg-transparent px-4 py-4 text-sm outline-none focus:border-[#319447]"
                />

                <input
                  required
                  type="tel"
                  placeholder="Phone number"
                  className="w-full rounded-xl border border-black/10 bg-transparent px-4 py-4 text-sm outline-none focus:border-[#319447]"
                />
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.2em]">
                How are you ordering?
              </h2>

              <div className="grid grid-cols-3 gap-2">

                {["Dine in", "Pickup", "QR Table"].map((type) => (
                  <button
                    type="button"
                    key={type}
                    onClick={() => setOrderType(type)}
                    className={`rounded-xl border px-3 py-4 text-[9px] font-bold uppercase tracking-[0.12em] ${
                      orderType === type
                        ? "border-[#071b0b] bg-[#071b0b] text-[#f4efdf]"
                        : "border-black/10"
                    }`}
                  >
                    {type}
                  </button>
                ))}

              </div>
            </section>

          </div>

          <aside className="h-fit rounded-[24px] bg-[#071b0b] p-7 text-[#f4efdf]">

            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#58bd69]">
              Your order
            </p>

            <div className="mt-7 space-y-3 border-b border-white/10 pb-6">

              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between gap-4 text-xs"
                >
                  <span className="text-white/50">
                    {item.quantity} × {item.name}
                  </span>

                  <span>
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              ))}

            </div>

            <div className="flex justify-between pt-6 text-lg font-bold">
              <span>Total</span>
              <span>₹{total()}</span>
            </div>

            <button
              type="submit"
              disabled={items.length === 0}
              className="mt-7 w-full rounded-xl bg-[#49b85c] px-5 py-4 text-[9px] font-bold uppercase tracking-[0.2em] text-[#071b0b] transition hover:bg-[#f4efdf] disabled:cursor-not-allowed disabled:opacity-40"
              onClick={() => {clearCart();router.push("/order-success");}}
            >
              Place order
            </button>

          </aside>

        </form>

      </div>

    </main>
  );
}