"use client";

import { motion } from "framer-motion";
import { IMAGES } from "@/lib/images";
import { Reveal, StaggerContainer, StaggerItem, Section, panelReveal } from "@/components/ui/motion";
import { Button, ArrowIcon } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HEIGHTS = [300, 220, 260, 280, 240, 300];

export default function GalleryPreview() {
  const previewImages = IMAGES.gallery.slice(0, 6);

  return (
    <Section className="bg-bg-secondary py-20 lg:py-28">
      <Reveal className="flex items-end justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-secondary">
            Portfolio
          </p>
          <h2 className="mt-2 font-serif text-[clamp(1.8rem,4vw,3rem)] font-normal text-text-primary">
            Recent <span className="gradient-brand-text italic">Projects</span>
          </h2>
        </div>
        <Link
          href="/gallery"
          className="hidden items-center gap-2 text-[13px] font-medium text-brand-primary transition-colors hover:text-brand-primary-hover sm:flex"
        >
          View All
          <ArrowIcon />
        </Link>
      </Reveal>

      {/* Mobile: Horizontal scroll */}
      <div className="mt-8 flex gap-3 overflow-x-auto scroll-snap-x no-scrollbar pb-4 md:hidden">
        {previewImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
            className="w-[75vw] flex-shrink-0"
          >
            <Link href="/gallery" className="group relative block overflow-hidden rounded-xl">
              <div className="relative h-[240px] w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="75vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-active:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-active:translate-y-0 group-active:opacity-100">
                  <p className="text-[13px] font-medium text-white">{img.alt}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Desktop: Staggered grid */}
      <StaggerContainer className="mt-10 hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-3" staggerTime={0.1}>
        {previewImages.map((img, i) => (
          <StaggerItem key={i} variants={panelReveal}>
            <Link
              href="/gallery"
              className="group relative block overflow-hidden rounded-xl"
              style={{ height: `${HEIGHTS[i]}px` }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-[14px] font-medium text-white">{img.alt}</p>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <div className="mt-8 flex justify-center sm:hidden">
        <Button href="/gallery" variant="primary" icon={<ArrowIcon />}>
          View All Projects
        </Button>
      </div>
    </Section>
  );
}
