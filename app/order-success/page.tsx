"use client";

import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

export default function OrderSuccessPage() {
  return (
    <main className="min-h-screen bg-[#f4efdf] px-6 py-32 text-[#071b0b] md:px-10">
      <div className="mx-auto flex min-h-[70vh] max-w-[900px] flex-col items-center justify-center text-center">

        {/* CHECK */}
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#49b85c]">
          <Check
            size={32}
            strokeWidth={2.5}
            className="text-[#071b0b]"
          />
        </div>

        {/* LABEL */}
        <p className="mt-8 text-[9px] font-bold uppercase tracking-[0.35em] text-[#319447]">
          Order confirmed
        </p>

        {/* TITLE */}
        <h1 className="mt-4 text-6xl font-black uppercase leading-[0.85] tracking-[-0.06em] md:text-8xl">
          THANK
          <br />
          YOU.
        </h1>

        <p className="mt-7 max-w-md text-sm leading-6 text-black/50">
          Your order has been received. We&apos;re getting everything ready
          for you.
        </p>

        {/* ORDER NUMBER */}
        <div className="mt-10 rounded-[20px] border border-black/10 px-8 py-6">
          <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-black/35">
            Order number
          </p>

          <p className="mt-2 text-xl font-black tracking-[0.05em]">
            GH-4827
          </p>
        </div>

        {/* ACTIONS */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">

          <Link
  href="/menu"
  style={{
    backgroundColor: "#071b0b",
  }}
  className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:opacity-80"
>
  <span style={{ color: "#f4efdf" }}>
    Explore menu
  </span>

  <ArrowUpRight
    size={14}
    style={{ color: "#f4efdf" }}
  />
</Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-black/15 px-7 py-4 text-[9px] font-bold uppercase tracking-[0.2em] transition hover:bg-[#071b0b] hover:text-[#f4efdf]"
          >
            Back home
          </Link>

        </div>

        {/* FOOTNOTE */}
        <p className="mt-12 text-[8px] uppercase tracking-[0.18em] text-black/30">
          Garden House · Eat well · Stay awhile
        </p>

      </div>
    </main>
  );
}