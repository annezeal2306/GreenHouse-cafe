"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const images = [
  "/images/hero-food-1.jpg",
  "/images/hero-food-2.jpg",
  "/images/hero-food-3.jpg",
  "/images/hero-food-4.jpg",
  "/images/hero-food-5.jpg",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#081408] text-[#F4EEDB]">

      {/* subtle background glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2C8E33]/10 blur-[120px]" />

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-24">

        {/* small label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#58AC67]"
        >
          Shahpur Jat · New Delhi
        </motion.p>

        {/* heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative z-20 text-center text-[clamp(4rem,10vw,9rem)] font-black leading-[0.8] tracking-[-0.07em]"
        >
          YOUR HEALTHY
          <br />
          <span className="text-[#58AC67]">HAPPY PLACE.</span>
        </motion.h1>

        {/* image carousel */}
        <div className="relative mt-[-10px] h-[390px] w-full max-w-[900px] md:h-[470px]">

          {/* left image */}
          <motion.div
            initial={{ opacity: 0, x: -120, rotate: -18 }}
            animate={{ opacity: 1, x: 0, rotate: -12 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute left-[5%] top-[18%] hidden h-[260px] w-[170px] overflow-hidden rounded-[24px] border border-white/10 md:block"
          >
            <img
              src={images[0]}
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* second left image */}
          <motion.div
            initial={{ opacity: 0, x: -80, rotate: -10 }}
            animate={{ opacity: 1, x: 0, rotate: -6 }}
            transition={{ duration: 1, delay: 0.55 }}
            className="absolute left-[18%] top-[8%] hidden h-[300px] w-[190px] overflow-hidden rounded-[24px] border border-white/10 md:block"
          >
            <img
              src={images[1]}
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* center image */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.1,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              scale: 1.03,
              rotateY: 4,
            }}
            className="absolute left-1/2 top-0 z-20 h-[350px] w-[240px] -translate-x-1/2 overflow-hidden rounded-[30px] border border-white/20 shadow-2xl md:h-[430px] md:w-[290px]"
          >
            <img
              src={images[2]}
              alt="Garden House food"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-[9px] uppercase tracking-[0.25em] text-white/70">
                Garden House
              </p>

              <p className="mt-2 text-lg font-semibold">
                Fresh. Simple. Good.
              </p>
            </div>
          </motion.div>

          {/* second right image */}
          <motion.div
            initial={{ opacity: 0, x: 80, rotate: 10 }}
            animate={{ opacity: 1, x: 0, rotate: 6 }}
            transition={{ duration: 1, delay: 0.55 }}
            className="absolute right-[18%] top-[8%] hidden h-[300px] w-[190px] overflow-hidden rounded-[24px] border border-white/10 md:block"
          >
            <img
              src={images[3]}
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* right image */}
          <motion.div
            initial={{ opacity: 0, x: 120, rotate: 18 }}
            animate={{ opacity: 1, x: 0, rotate: 12 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute right-[5%] top-[18%] hidden h-[260px] w-[170px] overflow-hidden rounded-[24px] border border-white/10 md:block"
          >
            <img
              src={images[4]}
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.div>

        </div>

        {/* bottom area */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-0 right-0 flex items-center justify-between px-6 md:px-10"
        >
          <a
            href="#menu"
            className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] transition-colors hover:bg-white hover:text-[#081408]"
          >
            Explore menu
            <ArrowUpRight size={13} />
          </a>

          <div className="hidden items-center gap-2 md:flex">
            <ArrowDown size={14} />
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/50">
              Scroll to explore
            </span>
          </div>

          <div className="text-right">
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
              Est.
            </p>
            <p className="text-sm font-bold">2018</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}