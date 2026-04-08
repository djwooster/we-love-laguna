import { readFile, readdir } from "fs/promises";
import { join } from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import { cache } from "react";
import type { ReactElement } from "react";
import { mdxComponents } from "@/components/mdx";

const articlesDir = join(process.cwd(), "content/articles");

export interface Article {
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  author: string;
  authorTitle?: string;
  date: string;
  imageUrl: string;
  imageAlt: string;
  featured?: boolean;
  tags?: string[];
  volume?: number;
  draft?: boolean;
}

export interface CompiledArticle {
  content: ReactElement;
  frontmatter: Article;
}

/** Strip anything that isn't a slug-safe character to prevent path traversal. */
function sanitizeSlug(slug: string): string {
  return slug.replace(/[^a-z0-9-]/gi, "");
}

/** Validate and extract frontmatter fields — avoids unsafe `as Article` cast. */
function parseFrontmatter(data: Record<string, unknown>, slug: string): Article {
  const required = [
    "title",
    "excerpt",
    "category",
    "categorySlug",
    "author",
    "date",
    "imageUrl",
    "imageAlt",
  ] as const;

  for (const field of required) {
    if (!data[field]) {
      throw new Error(
        `Article "${slug}" is missing required frontmatter field: "${field}"`
      );
    }
  }

  return {
    slug,
    title: String(data.title),
    subtitle: data.subtitle ? String(data.subtitle) : undefined,
    excerpt: String(data.excerpt),
    category: String(data.category),
    categorySlug: String(data.categorySlug),
    author: String(data.author),
    authorTitle: data.authorTitle ? String(data.authorTitle) : undefined,
    date: String(data.date),
    imageUrl: String(data.imageUrl),
    imageAlt: String(data.imageAlt),
    featured: data.featured === true,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
    volume: data.volume ? Number(data.volume) : undefined,
    draft: data.draft === true,
  };
}

/** Read frontmatter for all articles (fast — no MDX compilation). */
export async function getAllArticles(): Promise<Article[]> {
  const files = await readdir(articlesDir);
  const articles = await Promise.all(
    files
      .filter((f) => f.endsWith(".mdx"))
      .map(async (filename) => {
        const slug = filename.replace(".mdx", "");
        const source = await readFile(join(articlesDir, filename), "utf-8");
        const { data } = matter(source);
        return parseFrontmatter(data as Record<string, unknown>, slug);
      })
  );
  return articles
    .filter((a) => !a.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/** Read frontmatter for articles in a specific category. */
export async function getArticlesByCategory(
  categorySlug: string
): Promise<Article[]> {
  const all = await getAllArticles();
  return all.filter((a) => a.categorySlug === categorySlug);
}

/**
 * Compile a single article's MDX and return content + frontmatter.
 * Memoized with React.cache() so generateMetadata and the page component
 * share one compilation per build request rather than running it twice.
 */
export const getArticleBySlug = cache(
  async (slug: string): Promise<CompiledArticle> => {
    const safe = sanitizeSlug(slug);
    const source = await readFile(
      join(articlesDir, `${safe}.mdx`),
      "utf-8"
    );
    const { content, frontmatter } = await compileMDX<Article>({
      source,
      components: mdxComponents,
      options: { parseFrontmatter: true },
    });
    return { content, frontmatter: { ...frontmatter, slug: safe } };
  }
);

/** Return all slugs — used in generateStaticParams. */
export async function getAllArticleSlugs(): Promise<string[]> {
  const files = await readdir(articlesDir);
  const slugs = await Promise.all(
    files
      .filter((f) => f.endsWith(".mdx"))
      .map(async (filename) => {
        const slug = filename.replace(".mdx", "");
        const source = await readFile(join(articlesDir, filename), "utf-8");
        const { data } = matter(source);
        return data.draft === true ? null : slug;
      })
  );
  return slugs.filter((s): s is string => s !== null);
}

/** Return the featured article, or the most recent if none is marked. */
export async function getFeaturedArticle(): Promise<Article> {
  const all = await getAllArticles();
  return all.find((a) => a.featured) ?? all[0];
}

/** Return recent articles, optionally excluding one slug. */
export async function getRecentArticles(
  exclude?: string,
  limit = 6
): Promise<Article[]> {
  const all = await getAllArticles();
  return all.filter((a) => a.slug !== exclude).slice(0, limit);
}
