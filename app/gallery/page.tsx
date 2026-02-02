import type { Metadata } from "next";
import GalleryContent from "./GalleryContent";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse our portfolio of custom furniture, glass partitions, and commercial interior projects in Jaipur. See real completed work from Neha Enterprises.",
};

export default function GalleryPage() {
  return <GalleryContent />;
}
