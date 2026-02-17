const styles: Record<string, string> = {
  Dining: "bg-rose-100 text-rose-500",
  Lifestyle: "bg-aqua-100 text-aqua-600",
  "Arts & Culture": "bg-sand-200 text-warm-700",
  "Real Estate": "bg-aqua-100 text-aqua-600",
};

export function CategoryBadge({ category }: { category: string }) {
  const cls = styles[category] ?? "bg-warm-100 text-warm-700";
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase rounded-full ${cls}`}
    >
      {category}
    </span>
  );
}
