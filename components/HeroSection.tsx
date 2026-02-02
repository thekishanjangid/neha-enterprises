"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_MESSAGES, getWhatsAppUrl, BUSINESS } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { Button, WhatsAppIcon, ArrowIcon } from "@/components/ui/button";
import Image from "next/image";

const HERO_IMAGES = [
  IMAGES.hero.main,
  "/images/work/furniture/bedroom-1.jpg",
  "/images/work/kitchen/kitchen-1.jpg",
  "/images/work/living/living-1.jpg",
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background images with Ken Burns */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease }}
          className="absolute inset-0"
        >
          <Image
            src={typeof HERO_IMAGES[currentImage] === "string" ? HERO_IMAGES[currentImage] : HERO_IMAGES[currentImage]}
            alt="Neha Enterprises project"
            fill
            className="object-cover animate-ken-burns"
            priority={currentImage === 0}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mb-8"
        >
          <Image
            src="/images/newlogo.png"
            alt="Neha Enterprises"
            width={220}
            height={60}
            className="mx-auto h-20 w-auto md:h-24"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease }}
          className="font-serif text-[clamp(2.2rem,6vw,4.5rem)] font-normal leading-[1.1] text-white"
        >
          Built to Fit
          <br />
          <span className="italic text-brand-subtle">Your Life</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
          className="mt-5 max-w-md text-[15px] leading-relaxed text-white/70 md:text-[16px]"
        >
          Custom furniture, glass partitions &amp; complete interiors
          — crafted in our Jaipur workshop since {BUSINESS.yearFounded}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease }}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"
        >
          <Button
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
            variant="white"
            size="lg"
            external
            icon={<WhatsAppIcon />}
          >
            Start Your Project
          </Button>
          <Button
            href="/gallery"
            variant="outline-white"
            size="lg"
            icon={<ArrowIcon />}
          >
            View Our Work
          </Button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease }}
          className="mt-12 flex items-center gap-6 sm:gap-10"
        >
          {[
            { value: BUSINESS.projectsCompleted, label: "Projects" },
            { value: BUSINESS.yearsExperience, label: "Years" },
            { value: "4.8", label: "Rating" },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-6 sm:gap-10">
              {i > 0 && <div className="h-8 w-[1px] bg-white/20" />}
              <div className="text-center">
                <p className="font-serif text-2xl text-white sm:text-3xl">{stat.value}</p>
                <p className="mt-0.5 text-[11px] uppercase tracking-wider text-white/50">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-bounce"
      >
        <svg className="h-6 w-6 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </motion.div>

      {/* Image indicators */}
      <div className="absolute bottom-8 right-6 flex gap-1.5 md:right-12">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImage(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === currentImage ? "w-6 bg-white" : "w-1.5 bg-white/30"
            }`}
            aria-label={`Show image ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
