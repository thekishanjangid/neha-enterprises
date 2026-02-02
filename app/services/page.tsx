import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom furniture manufacturing, glass & aluminium partitions, furniture hardware supply, and commercial interior projects in Jaipur. Get a free consultation.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
