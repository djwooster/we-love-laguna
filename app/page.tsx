import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedArticle } from "@/components/home/FeaturedArticle";
import { ArticleGrid } from "@/components/home/ArticleGrid";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { getFeaturedArticle, getRecentArticles } from "@/lib/content";

export default async function HomePage() {
  const featured = await getFeaturedArticle();
  const recent = await getRecentArticles(featured.slug, 100);

  return (
    <>
      <HeroSection />

      {/* Thin decorative rule */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="h-px bg-gradient-to-r from-transparent via-sand-200 to-transparent" />
      </div>

      <FeaturedArticle article={featured} />

      {/* Decorative divider */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="h-px bg-gradient-to-r from-transparent via-sand-200 to-transparent" />
      </div>

      <ArticleGrid articles={recent} />

      <NewsletterSection />
    </>
  );
}
