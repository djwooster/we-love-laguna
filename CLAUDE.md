# We Love Laguna Beach — CLAUDE.md

Project conventions, architecture decisions, and development protocols.

## Stack

| Tool | Version | Notes |
|---|---|---|
| Next.js | 16 | App Router, RSC |
| React | 19 | |
| TypeScript | 5 | strict mode |
| Tailwind CSS | 4 | `@theme` in globals.css — **no config file** |
| Framer Motion | 12 | client components only |
| next-mdx-remote | latest | RSC variant (`next-mdx-remote/rsc`) |
| gray-matter | latest | frontmatter-only reads for listing articles |

---

## Architecture

### Server vs Client Components

Default to **Server Components**. Add `'use client'` only when you need:
- `useState`, `useEffect`, or other hooks
- Event handlers / user interaction
- Browser APIs (`window`, `document`)
- Framer Motion animations

Keep all data fetching (file reads, API calls) in Server Components and pass data down as props to Client Components for rendering/animation.

### Folder Structure

```
app/                    Next.js App Router
  (route)/
    page.tsx            Page (server component by default)
    layout.tsx          Shared layout

components/
  layout/               Header, Footer, MotionProvider — site-wide chrome
  about/                Client components for the About page
  home/                 Sections used only on the homepage
  mdx/                  Custom MDX components (Blockquote, PullQuote, etc.)
  ui/                   Reusable primitives: ArticleCard, CategoryBadge

content/
  articles/             One .mdx file per article — filename = slug

lib/
  content.ts            MDX file reading and article utilities (primary)
  articles.ts           Legacy static data — do not add new articles here

public/                 Static assets served at root URL
```

---

## Content System (MDX)

Articles live in `/content/articles/[slug].mdx`. Filename is the URL slug.

### Required frontmatter

```yaml
---
title: string
date: "YYYY-MM-DD"
category: "Dining" | "Lifestyle" | "Arts & Culture" | "Real Estate"
categorySlug: "dining" | "lifestyle" | "arts-culture" | "real-estate"
author: string
excerpt: string       # 1–2 sentence teaser; used in cards and meta description
imageUrl: string      # Unsplash URL or /public path (e.g. /images/hero.jpg)
imageAlt: string
readTime: number      # minutes, integer
---
```

### Optional frontmatter

```yaml
subtitle: string
authorTitle: string
featured: true        # Only one article should be featured at a time
tags: [string, ...]
```

### Adding a new article

1. Create `/content/articles/your-slug.mdx`
2. Add all required frontmatter
3. Write body in MDX (standard Markdown + custom components below)
4. Done — the article auto-appears on the homepage and its category page

### Available custom MDX components

```mdx
<!-- Blockquote — triggered automatically by standard > syntax -->
> "The ocean doesn't care about your agenda."

<!-- PullQuote — large centered editorial callout -->
<PullQuote author="Local artist, Laguna Beach">
  The light here does something to you that you cannot explain.
</PullQuote>

<!-- PhotoCaption — image with styled caption -->
<PhotoCaption
  src="https://images.unsplash.com/..."
  alt="Description of the image"
  caption="Festival of Arts, Laguna Beach. Photo by Jane Doe."
/>

<!-- EditorialDivider — decorative section break -->
<EditorialDivider />
```

---

## Styling

### Tailwind CSS 4

Custom tokens are defined with `@theme` in `app/globals.css`. Use them as standard Tailwind classes — **no config file exists**.

**Color palette:**

| Token | Use |
|---|---|
| `sand-50` → `sand-400` | Warm neutral backgrounds |
| `aqua-100` → `aqua-600` | Coastal accent, primary brand color |
| `warm-100` → `warm-900` | Text and dark elements |
| `rose-100` → `rose-500` | Secondary accent |

**Typography classes:**
- `font-serif` → Playfair Display (headings, editorial text, pull quotes)
- `font-sans` → DM Sans (body text, navigation, UI)

**Article body:** Wrap long-form content in `.article-prose` (defined in globals.css).

### Design voice

Luxurious, coastal, editorial. Think Architectural Digest + local magazine.
- Generous whitespace — let content breathe
- Serif headlines, elegant italic accents
- Subtle animations only — never jarring or showy
- Aqua is the primary accent; use it for interactive elements, borders, labels

---

## Images

- Always use `<Image>` from `next/image` — never a raw `<img>` tag
- Remote images from Unsplash are pre-approved in `next.config.ts`
- Local images: place in `/public/images/`, reference as `/images/filename.jpg`
- Provide meaningful `alt` text on every image
- Use `fill` + `sizes` for responsive images in containers; use explicit `width`/`height` for fixed-size images

---

## Animations

- All Framer Motion usage **requires** `'use client'`
- Prefer `whileInView` with `viewport={{ once: true }}` for scroll animations
- Standard entrance: `initial={{ opacity: 0, y: 24 }}` → `animate={{ opacity: 1, y: 0 }}`
- Stagger list items with `delay: index * 0.08`
- Hover: `scale-105` or color transitions — keep it subtle
- **`prefers-reduced-motion` is handled globally** via `<MotionProvider>` in `app/layout.tsx` — it wraps the entire app in `<MotionConfig reducedMotion="user">`, so all Framer Motion components automatically respect the user's OS motion setting. No per-component handling needed.

---

## SEO

- Every page must export `generateMetadata()` with `title`, `description`, `openGraph`
- All dynamic routes must export `generateStaticParams()` for static generation
- `description` should be 120–160 characters (article `excerpt` field works well)

---

## TypeScript

- Strict mode is on — no implicit `any`
- Shared interfaces live in `lib/content.ts` (`Article` type exported)
- Prefer `interface` over `type` for object shapes
- Use `Promise<>` return types on all async server functions

---

## Categories

| Display Name | URL Slug | Route |
|---|---|---|
| Dining | `dining` | `/category/dining` |
| Lifestyle | `lifestyle` | `/category/lifestyle` |
| Arts & Culture | `arts-culture` | `/category/arts-culture` |
| Real Estate | `real-estate` | `/category/real-estate` |

`categorySlug` in frontmatter must exactly match the URL slug column above.

---

## Development Commands

```bash
npm run dev      # Dev server at localhost:3000
npm run build    # Production build + TypeScript check
npm run start    # Serve production build
```

---

## Common Gotchas

- **Tailwind CSS 4 has no `tailwind.config.js`** — add custom tokens to the `@theme` block in `globals.css`
- **`next-mdx-remote/rsc`** returns compiled JSX for server components — do not use the client-side `MDXRemote` component
- **gray-matter** is used for listing articles (fast frontmatter-only reads); `compileMDX` handles full article rendering
- **Framer Motion breaks in Server Components** — always `'use client'` for animated components
- **Category slugs must be consistent** — frontmatter `categorySlug` must match the URL slug exactly (see table above)
- **Only one `featured: true`** article at a time — it appears in the homepage hero spot
- **Images in `/public`** are served at root: `/public/images/foo.jpg` → `src="/images/foo.jpg"`
- **`getArticleBySlug` is memoized with `React.cache()`** — `generateMetadata` and the page component both call it, but it only compiles the MDX once per request
- **Frontmatter is validated at read time** — `parseFrontmatter()` in `lib/content.ts` throws a descriptive error if any required field is missing, so broken articles fail loudly at build time rather than silently at runtime
- **Slugs are sanitized before file reads** — `sanitizeSlug()` strips non-alphanumeric/hyphen characters to prevent path traversal
