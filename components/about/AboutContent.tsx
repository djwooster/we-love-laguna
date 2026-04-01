"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const values = [
  {
    title: "Locally Written",
    description:
      "Every story is written by someone who lives here, eats here, and loves this place. No travel bloggers, no algorithm-generated lists.",
  },
  {
    title: "Community First",
    description:
      "We champion local businesses, independent artists, and the people who make Laguna Beach what it is — not the chains, not the generic.",
  },
  {
    title: "Editorial Honesty",
    description:
      "We only recommend what we genuinely love. No sponsored content disguised as editorial, no pay-to-play reviews.",
  },
];

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[480px] overflow-hidden">
        <Image
          src="/compressed/Founder.jpg"
          alt="Jennifer Halbert, founder of We Love Laguna Beach"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-sand-50" />
        <div className="relative z-10 flex flex-col items-center justify-end h-full pb-16 text-center px-5">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[11px] tracking-[0.4em] uppercase text-white/70 font-medium mb-4"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-white"
          >
            About Us
          </motion.h1>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-3xl mx-auto px-5 sm:px-8 py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[11px] tracking-[0.4em] uppercase text-aqua-500 font-medium mb-6">
            Why We Exist
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-warm-900 leading-tight mb-8">
            A love letter to the most beautiful seven miles of coast in
            California.
          </h2>
          <div className="space-y-5 text-warm-500 leading-relaxed text-base">
            <p>
              We Love Laguna Beach started as a simple idea: what if there was a
              publication about this town that was actually written by people who
              live in or have a love for Laguna Beach? Not a travel guide, not a tourism board brochure, but a
              real editorial voice from the community.
            </p>
            <p>
              Laguna has always attracted people with a particular kind of
              sensibility — people who notice things, who care about craft, who
              believe that where you live shapes who you become. We built this
              publication for those people. The locals who know which beach to
              hit on a Tuesday morning, which restaurant just quietly changed its
              menu, which gallery is showing the most important work of the
              season.
            </p>
            <p>
              Every writer on our team holds Laguna dear and has a deep connection to Laguna Beach.
              Every recommendation is genuinely earned. We write about this place
              because we love it — and because we believe that love should be
              articulate.
            </p>
          </div>
        </motion.div>

        {/* Pull quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="my-14 border-l-2 border-aqua-400 pl-8 font-serif text-2xl md:text-3xl italic text-warm-700 leading-relaxed"
        >
          &ldquo;The light here is unlike anywhere else. We want to make sure
          people actually stop and see it.&rdquo;
        </motion.blockquote>
      </section>

      {/* Values */}
      <section className="bg-sand-100 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[11px] tracking-[0.4em] uppercase text-aqua-500 font-medium mb-3 text-center"
          >
            What We Believe
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl font-semibold text-warm-900 text-center mb-14"
          >
            Our Editorial Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.12 }}
                className="bg-white rounded-2xl p-8 shadow-[0_2px_20px_rgba(45,40,38,0.06)]"
              >
                <div className="w-8 h-0.5 bg-aqua-400 mb-5" />
                <h3 className="font-serif text-xl font-semibold text-warm-900 mb-3">
                  {v.title}
                </h3>
                <p className="text-sm text-warm-500 leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contribute CTA */}
      <section className="max-w-2xl mx-auto px-5 py-20 lg:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[11px] tracking-[0.4em] uppercase text-aqua-500 font-medium mb-5">
            Write for Us
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-warm-900 mb-5 leading-tight">
            Have a story worth telling?
          </h2>
          <p className="text-warm-500 text-base leading-relaxed mb-8">
            We welcome pitches from local writers, business owners, artists, and
            anyone else who has something real to say about life in Laguna Beach.
          </p>
          <a
            href="mailto:jennifer@welovelagunabeach.com"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-warm-900 text-white text-xs font-medium tracking-[0.15em] uppercase rounded-full hover:bg-aqua-600 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </section>
    </>
  );
}
