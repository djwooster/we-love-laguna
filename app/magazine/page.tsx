import type { Metadata } from "next";
import { MagazineViewer } from "@/components/magazine/MagazineViewer";

export const metadata: Metadata = {
  title: "The Magazine",
  description:
    "Read both volumes of We Love Laguna Beach magazine online — a love letter to the most beautiful seven miles of coast in California.",
  openGraph: {
    title: "The Magazine — We Love Laguna Beach",
    description:
      "Read both volumes of We Love Laguna Beach magazine online — a love letter to the most beautiful seven miles of coast in California.",
  },
};

export default function MagazinePage() {
  return <MagazineViewer />;
}
