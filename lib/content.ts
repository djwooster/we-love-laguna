import { readFile, readdir } from "fs/promises";
import { join } from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
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
  readTime: number;
  imageUrl: string;
  imageAlt: string;
  featured?: boolean;
  tags?: string[];
}

/** Read frontmatter for all articles (fast — no MDX compilation). */
export async function getAllArticles(): Promise<Article[]> {
  const files = await readdir(articlesDir);
  const articles = await Promise.all(
    files
      .filter((f) => f.endsWith(".mdx"))
      .map(async (filename) => {
        const source = await readFile(join(articlesDir, filename), "utf-8");
        const { data } = matter(source);
        return { ...data, slug: filename.replace(".mdx", "") } as Article;
      })
  );
  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/** Read frontmatter for articles in a specific category. */
export async function getArticlesByCategory(
  categorySlug: string
): Promise<Article[]> {
  const all = await getAllArticles();
  return all.filter((a) => a.categorySlug === categorySlug);
}

/** Compile a single article's MDX and return content + frontmatter. */
export async function getArticleBySlug(slug: string) {
  const source = await readFile(
    join(articlesDir, `${slug}.mdx`),
    "utf-8"
  );
  const { content, frontmatter } = await compileMDX<Article>({
    source,
    components: mdxComponents,
    options: { parseFrontmatter: true },
  });
  return { content, frontmatter: { ...frontmatter, slug } };
}

/** Return all slugs — used in generateStaticParams. */
export async function getAllArticleSlugs(): Promise<string[]> {
  const files = await readdir(articlesDir);
  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(".mdx", ""));
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
