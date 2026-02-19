import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  author?: string;
}

export function PullQuote({ children, author }: Props) {
  return (
    <figure className="my-14 mx-auto max-w-xl text-center">
      {/* Top rule */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 h-px bg-sand-200" />
        <span className="font-serif text-aqua-300 text-2xl leading-none">❧</span>
        <div className="flex-1 h-px bg-sand-200" />
      </div>

      {/* Quote mark */}
      <div
        className="font-serif text-7xl text-aqua-200 leading-none mb-2 select-none"
        aria-hidden="true"
      >
        &ldquo;
      </div>

      {/* Quote body */}
      <blockquote className="font-serif text-2xl sm:text-3xl font-medium text-warm-900 leading-snug italic">
        {children}
      </blockquote>

      {/* Attribution */}
      {author && (
        <figcaption className="mt-6 text-xs tracking-[0.2em] uppercase text-warm-400 font-sans font-medium">
          — {author}
        </figcaption>
      )}

      {/* Bottom rule */}
      <div className="flex items-center gap-4 mt-8">
        <div className="flex-1 h-px bg-sand-200" />
        <span className="font-serif text-aqua-300 text-2xl leading-none">❧</span>
        <div className="flex-1 h-px bg-sand-200" />
      </div>
    </figure>
  );
}
