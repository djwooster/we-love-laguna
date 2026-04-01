import type { Metadata } from "next";
import { directorySections } from "@/lib/directory";
import { DirectoryGrid } from "@/components/directory/DirectoryGrid";

export const metadata: Metadata = {
  title: "Directory",
  description:
    "A community directory of local Laguna Beach businesses, services, utilities, schools, and more.",
  openGraph: {
    title: "Directory | We Love Laguna Beach",
    description:
      "A community directory of local Laguna Beach businesses, services, utilities, schools, and more.",
  },
};

export default function DirectoryPage() {
  return (
    <div className="min-h-screen bg-sand-50">
      {/* Gradient to give the transparent nav legibility against the light background */}
      <div className="absolute inset-x-0 top-0 h-36 bg-linear-to-b from-black/25 to-transparent pointer-events-none" />

      {/* Page header */}
      <div className="relative pt-36 pb-14 px-5 sm:px-8 lg:px-10 max-w-7xl mx-auto">
        <p className="text-xs font-medium tracking-[0.14em] uppercase text-aqua-500 mb-4">
          Community Resource
        </p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-warm-900 leading-tight max-w-2xl">
          Local Directory
        </h1>
        <p className="mt-6 text-warm-500 text-lg leading-relaxed max-w-xl">
          Businesses, services, utilities, and community resources for Laguna
          Beach residents and visitors.
        </p>
        <div className="mt-10 h-px bg-sand-200" />
      </div>

      {/* Directory content */}
      <div className="px-5 sm:px-8 lg:px-10 max-w-7xl mx-auto">
        <DirectoryGrid sections={directorySections} />
      </div>
    </div>
  );
}
