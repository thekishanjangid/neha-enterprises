"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_ITEMS, GALLERY_CATEGORIES, WHATSAPP_MESSAGES, getWhatsAppUrl } from "@/lib/constants";
import { Reveal } from "@/components/ui/motion";
import { Button, WhatsAppIcon } from "@/components/ui/button";
import Image from "next/image";

const HEIGHTS = [280, 220, 320, 240, 300, 260, 280, 320, 240, 300, 220, 280];
const ease = [0.22, 1, 0.36, 1] as const;

export default function GalleryContent() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeFilter === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filteredItems.length : null
    );
  }, [filteredItems.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
    );
  }, [filteredItems.length]);

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[50vh] min-h-[360px] items-center justify-center overflow-hidden pt-[72px]">
        <Image
          src={GALLERY_ITEMS[0].src}
          alt="Our portfolio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="mb-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-primary"
          >
            Our Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal text-white"
          >
            Our <span className="italic text-brand-primary">Work</span>
          </motion.h1>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          {/* Filter tabs */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`rounded-full px-5 py-2 text-[13px] font-semibold transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-brand-primary text-white"
                    : "border border-border-light bg-transparent text-text-secondary hover:border-text-secondary hover:text-text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="masonry-grid">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, i) => {
                const originalIndex = GALLERY_ITEMS.indexOf(item);
                return (
                  <motion.div
                    key={item.src}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: i * 0.03, ease }}
                    className="group cursor-pointer overflow-hidden rounded-lg"
                    style={{ height: `${HEIGHTS[originalIndex % HEIGHTS.length]}px` }}
                    onClick={() => openLightbox(i)}
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/40" />
                      <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <p className="text-sm font-medium text-white">{item.alt}</p>
                        <p className="mt-1 text-xs text-white/60">{item.location}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Bottom CTA */}
          <Reveal className="mt-16 text-center">
            <p className="mb-4 text-base text-text-secondary">
              Like what you see? Let&apos;s create something similar for your space.
            </p>
            <Button
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.gallery)}
              variant="primary"
              size="lg"
              external
              icon={<WhatsAppIcon />}
            >
              Discuss Your Project
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute right-6 top-6 z-10 text-white/70 transition-colors hover:text-white"
              aria-label="Close"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-white/50 transition-colors hover:text-white"
              aria-label="Previous"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease }}
              className="relative mx-16 max-h-[80vh] max-w-[90vw] overflow-hidden rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[60vh] w-[80vw] max-w-[900px]">
                <Image
                  src={filteredItems[lightboxIndex].src}
                  alt={filteredItems[lightboxIndex].alt}
                  fill
                  className="object-cover"
                  sizes="90vw"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-base font-medium text-white">
                  {filteredItems[lightboxIndex].alt}
                </p>
                <p className="mt-1 text-sm text-white/60">
                  {filteredItems[lightboxIndex].location}
                </p>
              </div>
            </motion.div>

            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 text-white/50 transition-colors hover:text-white"
              aria-label="Next"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/40">
              {lightboxIndex + 1} / {filteredItems.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
