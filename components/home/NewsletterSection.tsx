"use client";

import { useState } from "react";

export function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-aqua-400 py-20">
      <div className="max-w-xl mx-auto px-5 text-center">
        <p className="text-[11px] tracking-[0.4em] uppercase text-white/70 font-medium mb-4">
          Stay in the Loop
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white leading-tight mb-4">
          Stories from the shore,
          <br />
          <span className="italic font-light">delivered weekly.</span>
        </h2>
        <p className="text-white/70 text-sm leading-relaxed mb-8">
          The best of Laguna Beach — dining, arts, wellness, and local
          life — in your inbox every Thursday morning.
        </p>

        {submitted ? (
          <p className="font-serif text-xl italic text-white">
            Thank you — you&rsquo;re on the list.
          </p>
        ) : (
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/50 text-sm border border-white/30 focus:outline-none focus:border-white/70 transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-aqua-600 text-xs font-semibold tracking-wider uppercase rounded-lg hover:bg-sand-50 transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
