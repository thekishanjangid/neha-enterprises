import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Neha Enterprises — a family-owned furniture manufacturing and interior solutions business in Jaipur with 15+ years of craftsmanship and 2000+ completed projects.",
};

export default function AboutPage() {
  return <AboutContent />;
}
