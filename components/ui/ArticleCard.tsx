"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CategoryBadge } from "./CategoryBadge";
import type { Article } from "@/lib/content";

interface Props {
  article: Article;
  index?: number;
}

export function ArticleCard({ article, index = 0 }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link href={`/articles/${article.slug}`} className="group block">
        {/* Image */}
        <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4">
          <Image
            src={article.imageUrl}
            alt={article.imageAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Meta */}
        <CategoryBadge category={article.category} />

        <h3 className="mt-3 font-serif text-xl font-semibold text-warm-900 leading-snug group-hover:text-aqua-500 transition-colors duration-200">
          {article.title}
        </h3>

        <p className="mt-2 text-sm text-warm-500 leading-relaxed line-clamp-3">
          {article.excerpt}
        </p>

        <div className="mt-4 flex items-center gap-3 text-xs text-warm-300 font-medium tracking-wider uppercase">
          <span>{article.author}</span>
          <span className="text-sand-300">·</span>
          <span>{article.readTime} min read</span>
          {article.volume && (
            <>
              <span className="text-sand-300">·</span>
              <span>Vol. {article.volume}</span>
            </>
          )}
        </div>
      </Link>
    </motion.article>
  );
}
