"use client";

import { motion } from "framer-motion";
import { ArticleCard } from "@/components/ui/ArticleCard";
import type { Article } from "@/lib/articles";

export function ArticleGrid({ articles }: { articles: Article[] }) {
  return (
    <section
      id="stories"
      className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 lg:py-20"
    >
      {/* Section header */}
      <div className="mb-12 lg:mb-14">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[11px] tracking-[0.4em] uppercase text-aqua-500 font-medium mb-3"
        >
          Latest Stories
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-4xl lg:text-5xl font-semibold text-warm-900"
        >
          From the Community
        </motion.h2>
      </div>

      {/* Category pills */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="flex flex-wrap gap-2 mb-12"
      >
        {["All", "Dining", "Lifestyle", "Arts & Culture", "Real Estate"].map(
          (cat) => (
            <button
              key={cat}
              className={`px-4 py-1.5 text-xs font-medium tracking-wider uppercase rounded-full transition-all duration-200 ${
                cat === "All"
                  ? "bg-warm-900 text-white"
                  : "bg-sand-100 text-warm-500 hover:bg-aqua-100 hover:text-aqua-600"
              }`}
            >
              {cat}
            </button>
          )
        )}
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {articles.map((article, i) => (
          <ArticleCard key={article.id} article={article} index={i} />
        ))}
      </div>
    </section>
  );
}
