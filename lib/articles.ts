export interface Article {
  id: string;
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
  content: string;
}

export const categories = [
  { name: "Dining", slug: "dining" },
  { name: "Lifestyle", slug: "lifestyle" },
  { name: "Arts & Culture", slug: "arts-culture" },
  { name: "Real Estate", slug: "real-estate" },
] as const;

export const articles: Article[] = [
  {
    id: "1",
    slug: "best-oceanview-dining-laguna-beach",
    title: "Where the Ocean Meets Your Table",
    subtitle: "The Best Oceanview Dining in Laguna Beach",
    excerpt:
      "From cliffside cocktail lounges to intimate spots tucked above the break, these restaurants define what it means to dine by the sea.",
    category: "Dining",
    categorySlug: "dining",
    author: "Serena Whitmore",
    authorTitle: "Food & Travel Writer",
    date: "January 20, 2025",
    readTime: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=800&fit=crop&auto=format&q=80",
    imageAlt: "Elegantly plated seafood dish at a coastal restaurant",
    featured: true,
    content: `<p>There are few places on earth where the Pacific announces itself so boldly as it does along the bluffs of Laguna Beach. The ocean isn't a backdrop here — it's a co-host. It sets the mood, the pace, and more often than not, the menu.</p>

<p>We've spent the better part of two seasons visiting every restaurant worth visiting in Laguna, from early morning tables with coffee and the first surfers paddling out, to long dinners that stretch well past the last color leaving the sky. What follows is our very honest, very personal shortlist of the places that moved us.</p>

<h2>Splashes at Surf & Sand Resort</h2>
<p>Perched at the edge of the property, nearly over the water, Splashes earns its reputation with a menu that changes with the tides. The grilled local halibut in a citrus beurre blanc is the kind of dish that makes you close your eyes on the first bite. Book the corner table if you can — it has the longest view of the coastline of any table we've sat at in Southern California.</p>

<h2>The Rooftop at Hotel Laguna</h2>
<p>Hotel Laguna has been a beloved institution since 1888, and its rooftop bar is the city's living room. Arrive for the golden hour. Order the spicy tuna crispy rice, a Mezcal Paloma, and settle in. The view from here — Catalina Island floating in the haze, the beach below filling with the last light — is one of the great free shows in California.</p>

<blockquote>"The food was secondary, honestly. We sat there for two hours just watching the light change over the water."</blockquote>

<h2> 230 Forest Avenue</h2>
<p>A short walk from the beach but entirely its own world, 230 Forest is where locals go when they want to feel like themselves in a beautiful room. Chef David Lalos changes the menu seasonally, guided by what's coming out of the local farms and what's being pulled from nearby waters. The cheese program alone deserves a separate visit.</p>

<h2>What to Know Before You Go</h2>
<ul>
<li>Reservations at most places book up 2–3 weeks out in summer</li>
<li>Valet parking is worth it on weekend evenings — street spots disappear by 6pm</li>
<li>Ask about off-menu specials; chefs in Laguna love showing off</li>
<li>The cocktail programs here are taken very seriously — give them a chance</li>
</ul>`,
  },
  {
    id: "2",
    slug: "morning-rituals-laguna-wellness-guide",
    title: "The Art of the Laguna Morning",
    subtitle: "A Wellness Guide for Locals and Visitors",
    excerpt:
      "Salt air, sunrise yoga, cold plunges, and the best matcha in the county. Here's how the people who live here start their days.",
    category: "Lifestyle",
    categorySlug: "lifestyle",
    author: "Maya Chen",
    authorTitle: "Wellness Editor",
    date: "January 12, 2025",
    readTime: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&h=800&fit=crop&auto=format&q=80",
    imageAlt: "Spa stones arranged on a smooth surface with water",
    content: `<p>Ask anyone who's moved to Laguna Beach what surprised them most about living here, and almost universally they'll say the same thing: the mornings. There's a particular quality to the light before 8am — warm, diffused, and already warm before it's properly warm — that makes you want to be outside in it.</p>

<p>Over the years, a small culture of intentional morning living has taken root here, part beach town ease, part SoCal wellness energy. These are the rituals that locals swear by.</p>

<h2>The Dawn Patrol Walk</h2>
<p>Victoria Beach at first light. The Heisler Park bluffs as the marine layer is just beginning to lift. The walk from Crescent Bay down to Main Beach as the shop owners are setting out their boards. These are free, and they are better than most things you can pay for.</p>

<h2>Surf Lessons at Laguna Beach Surf Club</h2>
<p>You don't have to be a surfer to take a surf lesson, and after one session with the patient instructors at Laguna Beach Surf Club, you'll understand why the sport produces such deeply contented people. Even if you spend the first hour mostly underwater, the effort — the salt, the cold, the physical earnestness of it — sets a tone for the day that's hard to replicate.</p>

<blockquote>"I moved here for the gallery scene and ended up becoming a morning swimmer. The ocean does that to you."</blockquote>

<h2>Yoga at Laguna Yoga & Pilates</h2>
<p>The studio on Forest Avenue has been a quiet anchor of the wellness community here for over a decade. The 7am Vinyasa class fills quickly — the regulars know each other by name. Bring your own mat, arrive five minutes early, and don't be surprised if you leave with someone's restaurant recommendation written on your hand.</p>`,
  },
  {
    id: "3",
    slug: "laguna-art-museum-new-exhibit-california-light",
    title: "Light, Color, and the California Coast",
    subtitle: "Inside the New Exhibition at Laguna Art Museum",
    excerpt:
      "The museum's landmark new show explores the painters who made Laguna famous — and the living artists who carry their legacy into the present.",
    category: "Arts & Culture",
    categorySlug: "arts-culture",
    author: "James Hartley",
    authorTitle: "Arts Contributor",
    date: "January 8, 2025",
    readTime: 7,
    imageUrl:
      "https://images.unsplash.com/photo-1578926288207-a90a103a3e20?w=1200&h=800&fit=crop&auto=format&q=80",
    imageAlt: "Art gallery with large paintings on white walls",
    content: `<p>Laguna Beach has always been a painter's town. The light here — coastal, shifting, impossible to fully capture — has been pulling artists to this stretch of cliffside for well over a century. The Laguna Art Museum is the keeper of that legacy, and its new exhibition, <em>California Light: Then & Now</em>, is the most ambitious show it has mounted in years.</p>

<p>Curated by Dr. Elena Vasquez, the exhibition brings together over sixty works — spanning from the early California Impressionists of the 1910s to a cohort of eight emerging artists currently based in Laguna. The result is a conversation across time about what light means to those who are devoted to seeing it clearly.</p>

<h2>The Historical Foundation</h2>
<p>The show opens with six paintings by members of the Laguna Beach Art Association, founded in 1918 — the oldest art association on the West Coast. Edgar Payne's sweeping coastal landscapes are here, as is a rarely exhibited series of beach studies by Anna Hills. These works establish the grammar of what we might call the Laguna visual language: generous skies, warm stone, the relentless blue of the Pacific.</p>

<h2>The Living Artists</h2>
<p>The exhibition doesn't treat the historical work as a shrine so much as a launching pad. Each of the eight contemporary artists was asked to respond — not illustrate, but genuinely respond — to specific works in the historical collection. The dialogue that results is sometimes surprising, sometimes moving, and occasionally funny.</p>

<blockquote>"The Impressionists were obsessed with light because they were trying to capture something that kept moving. We're still doing that. We'll always be doing that."</blockquote>

<p>Local painter Caroline Mead's contribution — a series of large oil paintings depicting the Laguna coastline at various states of the fog — is the emotional centerpiece of the contemporary half of the show. Her technique borrows from the Tonalist tradition while feeling entirely contemporary.</p>`,
  },
  {
    id: "4",
    slug: "clifftop-homes-laguna-beach-architecture",
    title: "Life on the Edge",
    subtitle: "The Clifftop Homes That Define Laguna Architecture",
    excerpt:
      "These remarkable residences — cantilevered over the Pacific, tucked into canyon walls — represent the highest expression of California coastal living.",
    category: "Real Estate",
    categorySlug: "real-estate",
    author: "Diana Foster",
    authorTitle: "Architecture & Design Writer",
    date: "December 28, 2024",
    readTime: 8,
    imageUrl:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop&auto=format&q=80",
    imageAlt: "Modern luxury home with ocean views and clean lines",
    content: `<p>In most places, architecture and landscape exist in a kind of polite negotiation. In Laguna Beach, the conversation is more urgent. The cliffs here are not content to be a backdrop — they demand a response, and the homes that answer them best are the ones that have decided to meet the terrain on its own terms.</p>

<p>We spent a month visiting some of the most remarkable residential properties in Laguna, from the mid-century masterworks of the North Coast to newly completed contemporaries in the hills above the canyon. What we found was a surprisingly cohesive design philosophy built around one shared value: the view is the room.</p>

<h2>The Mid-Century Legacy</h2>
<p>Many of Laguna's most beloved homes were built between 1950 and 1975 by architects who understood the site better than they understood the fashions of the era. Low horizontal lines, floor-to-ceiling glass, and a resistance to ornamentation — these homes were designed to disappear into the landscape rather than impose upon it.</p>

<h2>Contemporary Approaches</h2>
<p>The best new construction in Laguna borrows from this legacy while incorporating the technologies that simply weren't available before: retractable glass walls that eliminate the boundary between indoor and outdoor entirely, rooftop pools that appear to merge with the ocean horizon, living roofs planted with native coastal grasses.</p>

<blockquote>"You don't design a Laguna home so much as you choreograph a relationship between a person and a view. Everything else is furniture."</blockquote>

<p>One of the most impressive recent completions is a 4,200 square foot residence above Thousand Steps Beach, designed by the local firm Strand Architecture. The home sits on a lot with a forty-foot drop to the ocean, and the architects responded by essentially building the house as a series of terraces that step down toward the water, each level offering its own experience of the view.</p>`,
  },
  {
    id: "5",
    slug: "farm-to-table-laguna-restaurants-local-sourcing",
    title: "From the Earth, to the Table",
    subtitle: "Laguna's Farm-to-Table Revolution",
    excerpt:
      "A new generation of chefs is building direct relationships with local farms, fishing boats, and foragers — and it's changing what dinner in Laguna tastes like.",
    category: "Dining",
    categorySlug: "dining",
    author: "Serena Whitmore",
    authorTitle: "Food & Travel Writer",
    date: "December 15, 2024",
    readTime: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop&auto=format&q=80",
    imageAlt: "Warm interior of a farm-to-table restaurant with wood accents",
    content: `<p>Every Wednesday morning, the chef at Harvest Table drives forty minutes inland to visit the same two farms she's been working with for six years. She knows the names of the farmers' children. She tasted the tomatoes before they were planted. The menu she writes that evening reflects not what's fashionable, but what came in that afternoon.</p>

<p>This is the new Laguna dining ethos: slower, more personal, and rooted in a genuine belief that the best version of any ingredient is the one that traveled the fewest miles to reach the plate.</p>`,
  },
  {
    id: "6",
    slug: "festival-of-arts-laguna-beach-summer-preview",
    title: "The World Comes to Laguna",
    subtitle: "A Preview of This Summer's Festival of Arts",
    excerpt:
      "Since 1932, Laguna's legendary outdoor art festival has brought together the finest California artists in a setting unlike anything else in the country.",
    category: "Arts & Culture",
    categorySlug: "arts-culture",
    author: "James Hartley",
    authorTitle: "Arts Contributor",
    date: "December 5, 2024",
    readTime: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&h=800&fit=crop&auto=format&q=80",
    imageAlt: "Outdoor arts festival with colorful paintings displayed",
    content: `<p>For eight weeks every summer, a canyon in Laguna Beach transforms into one of the most distinctive cultural events in California. The Festival of Arts — running since 1932 and home to the world-famous Pageant of the Masters — is part open-air gallery, part community celebration, and entirely unlike anything else happening in the country.</p>

<p>This summer's lineup promises to be the most ambitious in years, with over 140 juried artists exhibiting in the hillside grounds of the Laguna Beach Sawdust Art Festival and the Laguna Art-A-Fair running concurrently. We spoke with several participating artists to find out what they're bringing this year.</p>`,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getFeaturedArticle(): Article {
  return articles.find((a) => a.featured) ?? articles[0];
}

export function getRecentArticles(exclude?: string, limit = 6): Article[] {
  return articles.filter((a) => a.slug !== exclude).slice(0, limit);
}
