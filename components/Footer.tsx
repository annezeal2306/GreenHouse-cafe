import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#071b0b] px-6 pb-8 pt-20 text-[#f4efdf] md:px-10">

      <div className="mx-auto max-w-[1100px]">

        {/* TOP */}
        <div className="grid gap-12 border-b border-white/10 pb-16 md:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* BRAND */}
          <div>

            <p className="text-5xl font-black uppercase tracking-[-0.06em]">
              GARDEN<span className="text-[#58bd69]">.</span>
            </p>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/45">
              A neighbourhood house for good food, good coffee and
              better evenings.
            </p>

            <Link
              href="/menu"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#58bd69] px-6 py-4 text-[9px] font-bold uppercase tracking-[0.2em] text-[#071b0b] transition hover:bg-[#f4efdf]"
            >
              Explore menu
              <ArrowUpRight size={13} />
            </Link>

          </div>

          {/* EXPLORE */}
          <div>
            <p className="mb-6 text-[9px] font-bold uppercase tracking-[0.25em] text-[#58bd69]">
              Explore
            </p>

            <div className="flex flex-col gap-4 text-sm text-white/60">

              <Link
                href="/menu"
                className="transition hover:text-white"
              >
                Menu
              </Link>

              <Link
                href="/bowl"
                className="transition hover:text-white"
              >
                Build a Bowl
              </Link>

              <Link
                href="/events"
                className="transition hover:text-white"
              >
                Events
              </Link>

              <Link
                href="/journal"
                className="transition hover:text-white"
              >
                Journal
              </Link>

            </div>
          </div>

          {/* VISIT */}
          <div>
            <p className="mb-6 text-[9px] font-bold uppercase tracking-[0.25em] text-[#58bd69]">
              Visit
            </p>

            <div className="space-y-4 text-sm text-white/60">

              <p className="flex gap-3">
                <MapPin size={15} className="mt-0.5 shrink-0" />
                <span>
                  Shahpur Jat
                  <br />
                  New Delhi, India
                </span>
              </p>

              <p>
                Mon — Sun
                <br />
                8:00 AM — 11:00 PM
              </p>

            </div>
          </div>

          {/* CONNECT */}
          <div>
            <p className="mb-6 text-[9px] font-bold uppercase tracking-[0.25em] text-[#58bd69]">
              Connect
            </p>

            <div className="flex flex-col gap-4 text-sm text-white/60">

              <Link
                href="#"
                className="flex items-center gap-3 transition hover:text-white"
              >
                Instagram
              </Link>

              <Link
                href="#"
                className="transition hover:text-white"
              >
                hello@gardenhouse.in
              </Link>

              <Link
                href="tel:+911234567890"
                className="transition hover:text-white"
              >
                +91 12345 67890
              </Link>

            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="flex flex-col gap-4 pt-8 text-[8px] uppercase tracking-[0.2em] text-white/25 md:flex-row md:items-center md:justify-between">

          <p>
            © 2026 Garden House. All rights reserved.
          </p>

          <div className="flex gap-6">
            <span>Eat well.</span>
            <span>Stay awhile.</span>
          </div>

        </div>

      </div>

    </footer>
  );
}