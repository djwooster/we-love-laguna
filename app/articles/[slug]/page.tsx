import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { CategoryBadge } from "@/components/ui/CategoryBadge";
import {
  getArticleBySlug,
  getRecentArticles,
  getAllArticleSlugs,
} from "@/lib/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { frontmatter } = await getArticleBySlug(slug);
    return {
      title: frontmatter.title,
      description: frontmatter.excerpt,
      openGraph: {
        title: frontmatter.title,
        description: frontmatter.excerpt,
        images: [{ url: frontmatter.imageUrl }],
      },
    };
  } catch {
    return {};
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;

  let article: Awaited<ReturnType<typeof getArticleBySlug>>;
  try {
    article = await getArticleBySlug(slug);
  } catch {
    notFound();
  }

  const { content, frontmatter } = article!;
  const related = await getRecentArticles(slug, 3);

  return (
    <>
      {/* Hero */}
      <div className="relative h-[70vh] min-h-[520px] overflow-hidden">
        <Image
          src={frontmatter.imageUrl}
          alt={frontmatter.imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-sand-50" />

        {/* Back link */}
        <Link
          href="/"
          className="absolute top-24 left-5 sm:left-8 lg:left-10 z-10 inline-flex items-center gap-2 text-white/70 hover:text-white text-xs tracking-[0.12em] uppercase font-medium transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          All Stories
        </Link>

        {/* Hero text */}
        <div className="absolute bottom-0 left-0 right-0 px-5 sm:px-8 lg:px-10 pb-16 max-w-4xl mx-auto">
          <CategoryBadge category={frontmatter.category} />
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight">
            {frontmatter.title}
          </h1>
          {frontmatter.subtitle && (
            <p className="mt-3 font-serif text-xl md:text-2xl text-white/75 italic">
              {frontmatter.subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Article body */}
      <article className="max-w-2xl mx-auto px-5 sm:px-8 py-14">
        {/* Byline */}
        <div className="flex items-center gap-4 mb-12 pb-8 border-b border-sand-200">
          <div className="w-10 h-10 rounded-full bg-aqua-100 flex items-center justify-center flex-shrink-0">
            <span className="font-serif text-base font-semibold text-aqua-600">
              {frontmatter.author.charAt(0)}
            </span>
          </div>
          <div>
            <p className="text-sm font-medium text-warm-900">
              {frontmatter.author}
            </p>
            <p className="text-xs text-warm-300 mt-0.5">
              {frontmatter.authorTitle && `${frontmatter.authorTitle} · `}
              {frontmatter.date}
            </p>
          </div>
        </div>

        {/* Excerpt / intro */}
        <p className="font-serif text-xl md:text-2xl text-warm-700 leading-relaxed mb-10 italic">
          {frontmatter.excerpt}
        </p>

        {/* MDX content */}
        <div className="article-prose">{content}</div>

        {/* Tags */}
        <div className="mt-14 pt-8 border-t border-sand-200 flex flex-wrap items-center gap-3">
          <span className="text-xs text-warm-300 uppercase tracking-wider">
            Filed under
          </span>
          <CategoryBadge category={frontmatter.category} />
          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-warm-400 bg-sand-100 px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="bg-sand-50 border-t border-sand-100 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <p className="text-[11px] tracking-[0.4em] uppercase text-aqua-500 font-medium mb-3">
              Continue Reading
            </p>
            <h2 className="font-serif text-3xl font-semibold text-warm-900 mb-12">
              More Stories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((a, i) => (
                <ArticleCard key={a.slug} article={a} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
