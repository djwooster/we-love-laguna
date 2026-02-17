import Link from "next/link";

const links = [
  {
    heading: "Explore",
    items: [
      { label: "Dining", href: "/category/dining" },
      { label: "Lifestyle", href: "/category/lifestyle" },
      { label: "Arts & Culture", href: "/category/arts-culture" },
      { label: "Real Estate", href: "/category/real-estate" },
    ],
  },
  {
    heading: "Journal",
    items: [
      { label: "All Stories", href: "/" },
      { label: "Featured", href: "/" },
      { label: "About Us", href: "/about" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-warm-900 text-sand-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <p className="text-[10px] tracking-[0.35em] uppercase text-aqua-400 font-medium mb-1">
                We Love
              </p>
              <p className="font-serif text-2xl font-semibold text-white">
                Laguna Beach
              </p>
            </div>
            <p className="text-sm text-warm-300 leading-relaxed max-w-xs">
              Stories, recommendations, and a deep love for one of the most
              beautiful places on the California coast.
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-8">
            {links.map((col) => (
              <div key={col.heading}>
                <p className="text-[10px] tracking-[0.3em] uppercase text-aqua-400 font-medium mb-4">
                  {col.heading}
                </p>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-sm text-warm-300 hover:text-white transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-warm-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-xs text-warm-500 tracking-wide">
            © {new Date().getFullYear()} We Love Laguna Beach. All rights
            reserved.
          </p>
          <p className="text-xs text-warm-500">
            A community publication celebrating coastal life.
          </p>
        </div>
      </div>
    </footer>
  );
}
