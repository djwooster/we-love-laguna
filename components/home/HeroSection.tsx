"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden">
      {/* Ken Burns image */}
      <div className="absolute inset-0 animate-ken-burns">
        <Image
          src="/laguna-hero.jpg"
          alt="Laguna Beach coastline — turquoise water and white sand"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/40 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/15 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-white/75 text-[11px] tracking-[0.45em] uppercase font-medium mb-5"
        >
          Your Guide to the Good Life
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-white leading-[1.05] tracking-tight"
        >
          We Love
          <br />
          <span className="italic font-light">Laguna Beach</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="mt-6 text-white/70 text-base sm:text-lg max-w-sm sm:max-w-md leading-relaxed"
        >
          Stories from the people who call this stretch of coast home.
        </motion.p>

        {/* Scroll indicator */}
        <motion.a
          href="#stories"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.2 }}
          className="mt-14 flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors duration-300"
        >
          <span className="text-[10px] tracking-[0.35em] uppercase">
            Explore
          </span>
          <motion.svg
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 9l-7 7-7-7"
            />
          </motion.svg>
        </motion.a>
      </div>
    </section>
  );
}
