import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Blockquote({ children }: Props) {
  return (
    <blockquote className="relative my-10 pl-8 border-l-[3px] border-aqua-400">
      {/* Decorative opening mark */}
      <span
        className="absolute -top-4 -left-1 font-serif text-6xl text-aqua-200 leading-none select-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>
      <div className="font-serif italic text-xl leading-[1.75] text-warm-700">
        {children}
      </div>
    </blockquote>
  );
}
