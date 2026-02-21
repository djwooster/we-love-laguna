import type { Metadata } from "next";
import { AboutContent } from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "We Love Laguna Beach is a community publication written by locals, for locals — covering dining, arts, lifestyle, and the good life on the California coast.",
  openGraph: {
    title: "About — We Love Laguna Beach",
    description:
      "We Love Laguna Beach is a community publication written by locals, for locals — covering dining, arts, lifestyle, and the good life on the California coast.",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
