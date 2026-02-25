import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { getArticlesByCategory } from "@/lib/content";

const categories = [
  { name: "Dining", slug: "dining", description: "The finest tables in Laguna Beach, from cliffside seafood to farm-driven tasting menus." },
  { name: "Lifestyle", slug: "lifestyle", description: "Morning rituals, wellness guides, and the art of living well on the California coast." },
  { name: "Arts & Culture", slug: "arts-culture", description: "The galleries, festivals, and artists that make Laguna one of California's great cultural towns." },
  { name: "Real Estate", slug: "real-estate", description: "Clifftop homes, canyon retreats, and the architecture that defines coastal California living." },
] as const;

interface Props {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) return {};
  return {
    title: `${cat.name} — We Love Laguna Beach`,
    description: cat.description,
    openGraph: {
      title: `${cat.name} — We Love Laguna Beach`,
      description: cat.description,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) notFound();

  const articles = await getArticlesByCategory(category);

  return (
    <>
      {/* Category hero */}
      <div className="relative bg-sand-50 pt-36 pb-16 lg:pb-20">
        {/* Gradient to give the transparent nav legibility against the light background */}
        <div className="absolute inset-x-0 top-0 h-36 bg-linear-to-b from-black/25 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <p className="text-[11px] tracking-[0.4em] uppercase text-aqua-500 font-medium mb-4">
            Journal
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-warm-900 leading-none">
            {cat.name}
          </h1>
          <p className="mt-5 text-warm-500 text-base sm:text-lg max-w-xl leading-relaxed">
            {cat.description}
          </p>
          <div className="mt-8 h-px w-16 bg-aqua-400" />
        </div>
      </div>

      {/* Category nav */}
      <div className="border-b border-sand-200 bg-sand-50 sticky top-16 lg:top-20 z-40">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <nav className="flex gap-6 overflow-x-auto">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/category/${c.slug}`}
                className={`py-4 text-xs tracking-[0.12em] uppercase font-medium whitespace-nowrap border-b-2 transition-colors duration-200 ${
                  c.slug === category
                    ? "border-aqua-400 text-warm-900"
                    : "border-transparent text-warm-400 hover:text-warm-700"
                }`}
              >
                {c.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Articles grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          {articles.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-serif text-2xl italic text-warm-400">
                No stories yet in this category.
              </p>
              <p className="mt-3 text-sm text-warm-300">Check back soon.</p>
            </div>
          ) : (
            <>
              <p className="text-[11px] tracking-[0.4em] uppercase text-aqua-500 font-medium mb-10">
                {articles.length} {articles.length === 1 ? "Story" : "Stories"}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {articles.map((article, i) => (
                  <ArticleCard key={article.slug} article={article} index={i} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
