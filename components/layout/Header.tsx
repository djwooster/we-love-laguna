"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Dining", href: "/category/dining" },
  { label: "Lifestyle", href: "/category/lifestyle" },
  { label: "Arts & Culture", href: "/category/arts-culture" },
  { label: "Real Estate", href: "/category/real-estate" },
  { label: "About", href: "/about" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-sand-50/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(200,185,165,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span
              className={`font-sans text-[10px] tracking-[0.35em] uppercase font-medium transition-colors duration-300 ${
                scrolled ? "text-aqua-500" : "text-white/80"
              }`}
            >
              We Love
            </span>
            <span
              className={`font-serif text-lg lg:text-xl font-semibold tracking-wide transition-colors duration-300 ${
                scrolled ? "text-warm-900" : "text-white"
              }`}
            >
              Laguna Beach
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-medium tracking-[0.12em] uppercase transition-colors duration-200 ${
                  scrolled
                    ? "text-warm-500 hover:text-aqua-500"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 -mr-2 flex flex-col gap-[5px] w-8"
            aria-label="Toggle navigation"
          >
            <span
              className={`block h-px w-full bg-current transition-all duration-300 origin-center ${
                scrolled ? "text-warm-900" : "text-white"
              } ${mobileOpen ? "rotate-45 translate-y-[6px]" : ""}`}
            />
            <span
              className={`block h-px w-full bg-current transition-all duration-300 ${
                scrolled ? "text-warm-900" : "text-white"
              } ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-full bg-current transition-all duration-300 origin-center ${
                scrolled ? "text-warm-900" : "text-white"
              } ${mobileOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-sand-50 border-t border-sand-200"
          >
            <nav className="flex flex-col px-5 py-5 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-xs font-medium tracking-[0.12em] uppercase text-warm-500 hover:text-aqua-500 py-3 border-b border-sand-100 last:border-0 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
