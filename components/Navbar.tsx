"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { useCartStore } from "@/store/cartStore";

const links = [
  { name: "Menu", href: "/menu" },
  { name: "Build a Bowl", href: "/bowl" },
  { name: "Events", href: "/events" },
  { name: "Journal", href: "/journal" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);

  const items = useCartStore((state) => state.items);

  const itemCount = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      {/* ANNOUNCEMENT BAR */}
      <div className="fixed left-0 right-0 top-0 z-[60] flex h-8 items-center justify-center bg-[#071b0b] px-4 text-[8px] font-bold uppercase tracking-[0.2em] text-[#f4efdf]">
        Fresh food · good coffee · good people
      </div>

      {/* NAVBAR */}
      <header className="fixed left-0 right-0 top-8 z-50 px-4 py-3 md:px-8">

        <nav className="mx-auto flex max-w-[1300px] items-center justify-between rounded-full border border-black/10 bg-[#f4efdf] px-6 py-3 text-[#071b0b] shadow-md md:px-10">

          {/* LOGO */}
          <Link
            href="/"
            className="group flex items-center"
            onClick={() => setMobileOpen(false)}
          >
            <span className="text-xl font-black uppercase leading-none tracking-[-0.07em]">
              Garden
              <span className="text-[#319447]">.</span>
            </span>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden items-center gap-8 md:flex">

            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[9px] font-bold uppercase tracking-[0.18em] transition ${
                    active
                      ? "text-[#319447]"
                      : "text-black/50 hover:text-black"
                  }`}
                >
                  {link.name}

                  {active && (
                    <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#319447]" />
                  )}
                </Link>
              );
            })}

          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2">

            {/* EVENTS CTA */}
            <Link
  href="/events"
  style={{ color: "#F5F0DF" }}
  className="flex items-center justify-center gap-2 rounded-full bg-[#071A0D] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.18em] transition-all duration-300 hover:bg-[#299438]"
>
  <span style={{ color: "#F5F0DF" }}>WHAT&apos;S ON</span>
  <ArrowUpRight
    size={13}
    strokeWidth={2}
    style={{ color: "#F5F0DF" }}
  />
</Link>

            {/* CART */}
            <Link
              href="/cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition hover:bg-[#071b0b] hover:text-[#f4efdf]"
              aria-label="Shopping cart"
            >
              <ShoppingBag size={16} />

              {itemCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#49b85c] px-1 text-[8px] font-black text-[#071b0b]">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* MOBILE MENU */}
            <button
              type="button"
              onClick={() => setMobileOpen((value) => !value)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 md:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={17} /> : <Menu size={17} />}
            </button>

          </div>

        </nav>
      </header>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#f4efdf] px-6 pb-10 pt-32 md:hidden">

          <div className="flex h-full flex-col justify-between">

            <div className="space-y-2">

              {links.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between border-b border-black/10 py-5"
                >
                  <span className="text-4xl font-black uppercase tracking-[-0.05em]">
                    {link.name}
                  </span>

                  <span className="text-[9px] text-black/30">
                    0{index + 1}
                  </span>
                </Link>
              ))}

              <Link
                href="/cart"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between border-b border-black/10 py-5"
              >
                <span className="text-4xl font-black uppercase tracking-[-0.05em]">
                  Your Order
                </span>

                <ShoppingBag size={22} />
              </Link>

            </div>

            <div>

              <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.25em] text-[#319447]">
                Shahpur Jat · New Delhi
              </p>

              <p className="max-w-xs text-sm leading-6 text-black/45">
                Good food, slow mornings and a little space to breathe.
              </p>

            </div>

          </div>

        </div>
      )}
    </>
  );
}