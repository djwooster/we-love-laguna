"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const volumes = [
  {
    label: "Volume 1",
    url: "https://online.fliphtml5.com/zzqn/zmta/",
  },
  {
    label: "Volume 2",
    url: "https://online.fliphtml5.com/zzqn/frtm/",
  },
];

export function MagazineViewer() {
  const [active, setActive] = useState(1);

  return (
    <>
      {/* Nav gradient overlay for legibility on light background */}
      <div className="fixed top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/30 to-transparent pointer-events-none z-40" />

      {/* Hero */}
      <section className="bg-sand-50 pt-28 pb-10 lg:pt-36 lg:pb-14 text-center px-5">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[11px] tracking-[0.4em] uppercase text-aqua-500 font-medium mb-4"
        >
          Read Online
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-warm-900 mb-8"
        >
          The Magazine
        </motion.h1>

        {/* Volume tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-1 bg-sand-100 rounded-full p-1"
        >
          {volumes.map((vol, i) => (
            <button
              key={vol.label}
              onClick={() => setActive(i)}
              className={`relative px-6 py-2 text-xs font-medium tracking-[0.12em] uppercase rounded-full transition-colors duration-200 ${
                active === i
                  ? "text-warm-900"
                  : "text-warm-400 hover:text-warm-600"
              }`}
            >
              {active === i && (
                <motion.span
                  layoutId="vol-pill"
                  className="absolute inset-0 bg-white rounded-full shadow-sm"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{vol.label}</span>
            </button>
          ))}
        </motion.div>
      </section>

      {/* Flipbook embed */}
      <section className="px-4 sm:px-6 lg:px-10 pb-16 lg:pb-24 max-w-7xl mx-auto">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl overflow-hidden shadow-[0_8px_60px_rgba(45,40,38,0.12)] bg-warm-900"
          style={{ aspectRatio: "16/10" }}
        >
          <iframe
            src={volumes[active].url}
            title={`We Love Laguna Beach — ${volumes[active].label}`}
            className="w-full h-full"
            scrolling="no"
            seamless
            allowFullScreen
            loading="lazy"
          />
        </motion.div>
      </section>
    </>
  );
}
