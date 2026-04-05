"use client";

import Image from "next/image";
import Link from "next/link";

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

export default function ExploreCollections() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-gray-400">
            Explore by Category
          </span>
          <h2 className="font-serif text-3xl text-gray-900 md:text-4xl">
            Curated Collections
          </h2>
        </div>

        {/* Collections Stack */}
        <div className="flex flex-col gap-16 lg:gap-24">
          {COLLECTIONS.map((collection, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              
              {/* Collection Title */}
              <div className="flex items-baseline justify-between border-b border-gray-100 pb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {collection.title}
                </h3>
                <span className="text-sm text-gray-500 italic">
                  {collection.description}
                </span>
              </div>

              {/* Grid Layout */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {collection.items.map((item) => (
                  <Link 
                    key={item.id} 
                    href="/gallery" // Keeping it simple as requested, pointing to gallery or specific hash if available
                    className="group relative block aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100 md:aspect-[3/4] lg:aspect-[4/3]"
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
                    </div>

                    {/* Text Layer */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 transition-transform duration-300 group-hover:-translate-y-1">
                      <p className="font-serif text-lg font-light text-white tracking-wide">
                        {item.label}
                      </p>
                      <div className="mt-1 h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-1/3" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA */}
        <div className="mt-16 text-center">
          <Link 
            href="/gallery" 
            className="inline-flex items-center text-sm font-semibold uppercase tracking-widest text-gray-900 transition-colors hover:text-blue-600"
          >
            View Full Gallery 
            <span className="ml-2">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
