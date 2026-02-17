"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CategoryBadge } from "@/components/ui/CategoryBadge";
import type { Article } from "@/lib/articles";

export function FeaturedArticle({ article }: { article: Article }) {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-24">
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-[11px] tracking-[0.4em] uppercase text-aqua-500 font-medium mb-10"
      >
        Featured Story
      </motion.p>

      <Link
        href={`/articles/${article.slug}`}
        className="group grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center"
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-3 relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden rounded-2xl"
        >
          <Image
            src={article.imageUrl}
            alt={article.imageAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-2 flex flex-col justify-center"
        >
          <CategoryBadge category={article.category} />

          <h2 className="mt-5 font-serif text-3xl lg:text-4xl font-semibold text-warm-900 leading-tight group-hover:text-aqua-500 transition-colors duration-300">
            {article.title}
          </h2>

          {article.subtitle && (
            <p className="mt-2 font-serif text-lg text-warm-500 italic leading-snug">
              {article.subtitle}
            </p>
          )}

          <p className="mt-5 text-sm text-warm-500 leading-relaxed">
            {article.excerpt}
          </p>

          <div className="mt-6">
            <p className="text-sm font-medium text-warm-700">{article.author}</p>
            {article.authorTitle && (
              <p className="text-xs text-warm-300 mt-0.5">{article.authorTitle}</p>
            )}
          </div>

          <div className="mt-8">
            <span className="inline-flex items-center gap-2.5 text-xs font-medium text-aqua-500 tracking-[0.12em] uppercase transition-all duration-200 group-hover:gap-4">
              Read Story
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </div>
        </motion.div>
      </Link>
    </section>
  );
}
