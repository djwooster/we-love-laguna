export function EditorialDivider() {
  return (
    <div
      role="separator"
      aria-hidden="true"
      className="my-12 flex items-center justify-center gap-5"
    >
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-sand-200" />

      {/* Wave ornament */}
      <svg
        width="40"
        height="16"
        viewBox="0 0 40 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-aqua-300 flex-shrink-0"
        aria-hidden="true"
      >
        <path
          d="M0 8 C5 2, 10 14, 15 8 C20 2, 25 14, 30 8 C35 2, 40 14, 40 8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-sand-200" />
    </div>
  );
}
