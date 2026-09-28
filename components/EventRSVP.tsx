"use client";

import { useState } from "react";
import { ArrowUpRight, Check, X } from "lucide-react";

type EventRSVPProps = {
  eventTitle: string;
  eventDate: string;
  eventTime: string;
};

export default function EventRSVP({
  eventTitle,
  eventDate,
  eventTime,
}: EventRSVPProps) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  function closeModal() {
    setOpen(false);

    setTimeout(() => {
      setSubmitted(false);
    }, 300);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-3 rounded-full bg-[#49b85c] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#071b0b] transition hover:bg-white"
      >
        Reserve your spot
        <ArrowUpRight size={15} />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-5 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg overflow-hidden rounded-[28px] bg-[#f4efdf] text-[#071b0b] shadow-2xl"
          >
            <button
              onClick={closeModal}
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition hover:bg-black hover:text-white"
            >
              <X size={17} />
            </button>

            {!submitted ? (
              <div className="p-8 md:p-10">
                <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.3em] text-[#319447]">
                  Reserve your spot
                </p>

                <h2 className="max-w-sm text-4xl font-black uppercase leading-[0.9] tracking-[-0.05em]">
                  {eventTitle}
                </h2>

                <div className="mt-6 flex gap-5 border-y border-black/10 py-5 text-xs">
                  <div>
                    <p className="mb-1 text-[8px] uppercase tracking-[0.2em] text-black/40">
                      Date
                    </p>
                    <p className="font-bold">{eventDate}</p>
                  </div>

                  <div>
                    <p className="mb-1 text-[8px] uppercase tracking-[0.2em] text-black/40">
                      Time
                    </p>
                    <p className="font-bold">{eventTime}</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-black/10 bg-transparent px-4 py-4 text-sm outline-none transition placeholder:text-black/30 focus:border-[#319447]"
                  />

                  <input
                    required
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-xl border border-black/10 bg-transparent px-4 py-4 text-sm outline-none transition placeholder:text-black/30 focus:border-[#319447]"
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      required
                      type="tel"
                      placeholder="Phone"
                      className="w-full rounded-xl border border-black/10 bg-transparent px-4 py-4 text-sm outline-none transition placeholder:text-black/30 focus:border-[#319447]"
                    />

                    <select
                      defaultValue="2"
                      className="w-full rounded-xl border border-black/10 bg-transparent px-4 py-4 text-sm outline-none focus:border-[#319447]"
                    >
                      <option value="1">1 person</option>
                      <option value="2">2 people</option>
                      <option value="3">3 people</option>
                      <option value="4">4 people</option>
                      <option value="5">5 people</option>
                      <option value="6">6 people</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="mt-3 flex w-full items-center justify-center gap-3 rounded-xl bg-[#071b0b] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f4efdf] transition hover:bg-[#319447]"
                  >
                    Confirm RSVP
                    <ArrowUpRight size={15} />
                  </button>
                </form>
              </div>
            ) : (
              <div className="flex min-h-[500px] flex-col items-center justify-center px-8 text-center">
                <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-[#49b85c]">
                  <Check size={34} />
                </div>

                <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.3em] text-[#319447]">
                  You&apos;re on the list
                </p>

                <h2 className="text-4xl font-black uppercase leading-[0.9] tracking-[-0.05em]">
                  See you
                  <br />
                  there.
                </h2>

                <p className="mt-6 max-w-sm text-sm leading-6 text-black/50">
                  Your RSVP for {eventTitle} has been received.
                  We&apos;ll send the details to your email.
                </p>

                <button
                  onClick={closeModal}
                  className="mt-8 rounded-full border border-black/15 px-7 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition hover:bg-black hover:text-white"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}