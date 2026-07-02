"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal, StaggerContainer, StaggerItem, Section, panelReveal, fadeUp } from "@/components/ui/motion";

// --- Static Data Configuration ---
const COLLECTIONS = [
  {
    title: "Modular Kitchens",
    description: "Heart of the Home",
    items: [
      { id: "kitchen-modern", label: "Modern Layouts", image: "/images/work/kitchen/modular-1.jpg" },
      { id: "kitchen-acrylic", label: "Premium Finish", image: "/images/work/kitchen/modular-2.jpg" },
      { id: "kitchen-glass", label: "Sleek Designs", image: "/images/work/kitchen/modular-3.jpg" },
      { id: "kitchen-classic", label: "Classic Modular", image: "/images/work/kitchen/kitchen-1.jpg" },
    ]
  },
  {
    title: "Living Spaces",
    description: "Warmth & Comfort",
    items: [
      { id: "homes", label: "Full Home Interiors", image: "/images/work/living/hall-1.jpg" },
      { id: "beds", label: "Custom Beds", image: "/images/work/furniture/bedroom-1.jpg" },
      { id: "wardrobes", label: "Wardrobes", image: "/images/work/furniture/bedroom-9.jpg" },
    ]
  },
  {
    title: "Glass & Metal",
    description: "Structure & Light",
    items: [
      { id: "glass", label: "Toughened Glass", image: "/images/work/glass/glass-railing-1.jpg" },
      { id: "aluminium", label: "Aluminium Facades", image: "/images/work/exterior/front-elevation.jpg" },
      { id: "partitions", label: "Partitions", image: "/images/work/glass/partition-divider-1.jpg" },
    ]
  },
  {
    title: "Essentials",
    description: "Functional Details",
    items: [
      { id: "hardware", label: "Premium Hardware", image: "/images/work/kitchen/kitchen-3.jpg" },
    ]
  }
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function ExploreCollections() {
  return (
    <Section className="bg-white py-20 lg:py-28">
      {/* Section Header */}
      <Reveal className="mb-14 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-secondary">
          Explore by Category
        </p>
        <h2 className="mt-2 font-serif text-[clamp(1.8rem,4vw,3rem)] font-normal text-text-primary">
          Curated <span className="gradient-brand-text italic">Collections</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[14px] leading-[1.8] text-text-secondary">
          Browse our work organized by space type — find inspiration for your project
        </p>
      </Reveal>

      {/* Collections Stack */}
      <div className="flex flex-col gap-16 lg:gap-24">
        {COLLECTIONS.map((collection, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="flex flex-col gap-6"
          >
            {/* Collection Title */}
            <div className="flex items-baseline justify-between border-b border-border-light pb-4">
              <h3 className="font-serif text-xl text-text-primary md:text-2xl">
                {collection.title}
              </h3>
              <div className="flex items-center gap-3">
                <span className="text-[12px] text-text-tertiary italic">
                  {collection.description}
                </span>
                <span className="hidden rounded-full bg-brand-primary/8 px-2.5 py-0.5 text-[11px] font-semibold text-brand-primary sm:inline">
                  {collection.items.length}
                </span>
              </div>
            </div>

            {/* Grid Layout */}
            <StaggerContainer
              className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
              staggerTime={0.08}
            >
              {collection.items.map((item) => (
                <StaggerItem key={item.id} variants={panelReveal}>
                  <Link
                    href="/gallery"
                    className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl bg-bg-secondary md:aspect-[3/4] lg:aspect-[4/3]"
                  >
                    {/* Image Layer */}
                    <div className="relative h-full w-full">
                      <Image
                        src={item.image}
                        alt={item.label}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
                    </div>

                    {/* Text Layer */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 transition-transform duration-300 group-hover:-translate-y-1">
                      <p className="font-serif text-lg font-light text-white tracking-wide">
                        {item.label}
                      </p>
                      <div className="mt-2 h-[2px] w-0 bg-gradient-to-r from-white to-white/50 transition-all duration-500 group-hover:w-1/3" />
                    </div>

                    {/* Hover arrow */}
                    <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/0 transition-all duration-300 group-hover:bg-white/90">
                      <svg className="h-3.5 w-3.5 text-text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>
        ))}
      </div>

      {/* Global CTA */}
      <Reveal className="mt-16 text-center">
        <Link
          href="/gallery"
          className="link-underline inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.15em] text-text-primary transition-colors hover:text-brand-primary"
        >
          View Full Gallery
          <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </Reveal>
    </Section>
  );
}
