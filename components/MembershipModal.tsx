"use client";

import { useState } from "react";
import { ArrowUpRight, Check, X } from "lucide-react";

type MembershipModalProps = {
  plan: string;
  price: string;
};

export default function MembershipModal({
  plan,
  price,
}: MembershipModalProps) {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDone(true);
  }

  function close() {
    setOpen(false);
    setTimeout(() => setDone(false), 250);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#58bd69]"
      >
        Join {plan}
        <ArrowUpRight size={13} />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-5 backdrop-blur-sm"
          onClick={close}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-[28px] bg-[#f4efdf] p-8 text-[#071b0b] shadow-2xl md:p-10"
          >
            <button
              onClick={close}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition hover:bg-black hover:text-white"
            >
              <X size={17} />
            </button>

            {!done ? (
              <>
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#319447]">
                  Garden House Membership
                </p>

                <h2 className="mt-4 text-5xl font-black uppercase leading-[0.85] tracking-[-0.05em]">
                  {plan}
                </h2>

                <p className="mt-5 text-2xl font-bold">
                  {price}
                  <span className="ml-2 text-xs font-normal text-black/40">
                    / plan
                  </span>
                </p>

                <form onSubmit={submit} className="mt-8 space-y-4">
                  <input
                    required
                    type="text"
                    placeholder="Full name"
                    className="w-full rounded-xl border border-black/10 bg-transparent px-4 py-4 text-sm outline-none placeholder:text-black/30 focus:border-[#319447]"
                  />

                  <input
                    required
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-xl border border-black/10 bg-transparent px-4 py-4 text-sm outline-none placeholder:text-black/30 focus:border-[#319447]"
                  />

                  <input
                    required
                    type="tel"
                    placeholder="Phone number"
                    className="w-full rounded-xl border border-black/10 bg-transparent px-4 py-4 text-sm outline-none placeholder:text-black/30 focus:border-[#319447]"
                  />

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#071b0b] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f4efdf] transition hover:bg-[#319447]"
                  >
                    Continue
                    <ArrowUpRight size={15} />
                  </button>
                </form>
              </>
            ) : (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-[#49b85c]">
                  <Check size={34} />
                </div>

                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#319447]">
                  Welcome to the house
                </p>

                <h2 className="mt-4 text-5xl font-black uppercase leading-[0.85] tracking-[-0.05em]">
                  You&apos;re
                  <br />
                  in.
                </h2>

                <p className="mt-6 max-w-sm text-sm leading-6 text-black/50">
                  We&apos;ve received your membership request. We&apos;ll
                  send the next steps to your email.
                </p>

                <button
                  onClick={close}
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