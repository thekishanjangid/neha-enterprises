"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_MESSAGES, getWhatsAppUrl, BUSINESS } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { Button, WhatsAppIcon, ArrowIcon } from "@/components/ui/button";
import { CountUp } from "@/components/ui/motion";
import Image from "next/image";

const HERO_IMAGES = [
  "/images/premium/living-room.png",
  "/images/premium/bedroom.png",
  "/images/premium/kitchen.png",
  "/images/premium/glass-office.png",
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 6000;
    const interval = 50;
    let elapsed = 0;

    const timer = setInterval(() => {
      elapsed += interval;
      setProgress((elapsed / duration) * 100);

      if (elapsed >= duration) {
        setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
        elapsed = 0;
        setProgress(0);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [currentImage]);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background images with Ken Burns */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1.05 }}
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

      {/* Dark overlay with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />

      {/* Subtle grain texture */}
      <div className="grain-overlay absolute inset-0 pointer-events-none" />

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
            width={260}
            height={90}
            className="mx-auto h-[4.5rem] w-auto md:h-[5.5rem] lg:h-[6.5rem] drop-shadow-[0_0_30px_rgba(255,255,255,0.9)]"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease }}
          className="font-serif text-[clamp(2.2rem,6vw,4.5rem)] font-normal leading-[1.1] text-white"
        >
          <motion.span
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
            className="inline-block"
          >
            Built to Fit
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.7, ease }}
            className="inline-block italic text-brand-subtle"
          >
            Your Life
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease }}
          className="mt-5 max-w-md text-[15px] leading-relaxed text-white/70 md:text-[16px]"
        >
          Custom furniture, glass partitions &amp; complete interiors
          — crafted in our Jaipur workshop since {BUSINESS.yearFounded}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease }}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"
        >
          <Button
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
            variant="shimmer"
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

        {/* Stats bar with animated counters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4, ease }}
          className="mt-12 flex items-center gap-6 sm:gap-10"
        >
          {[
            { value: 2000, suffix: "+", label: "Projects" },
            { value: 15, suffix: "+", label: "Years" },
            { value: 4.8, suffix: "", label: "Rating", isDecimal: true },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-6 sm:gap-10">
              {i > 0 && <div className="h-8 w-[1px] bg-white/20" />}
              <div className="text-center">
                <p className="font-serif text-2xl text-white sm:text-3xl">
                  {stat.isDecimal ? (
                    "4.8"
                  ) : (
                    <CountUp target={stat.value} suffix={stat.suffix} duration={2.5} />
                  )}
                </p>
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
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">Scroll</span>
        <svg className="h-5 w-5 text-white/30 animate-scroll-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </motion.div>

      {/* Image indicators with progress */}
      <div className="absolute bottom-8 right-6 flex items-center gap-2 md:right-12">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrentImage(i); setProgress(0); }}
            className="relative h-1 overflow-hidden rounded-full transition-all duration-500"
            style={{ width: i === currentImage ? 32 : 8 }}
            aria-label={`Show image ${i + 1}`}
          >
            <div className={`absolute inset-0 rounded-full ${i === currentImage ? "bg-white/30" : "bg-white/20"}`} />
            {i === currentImage && (
              <div
                className="absolute inset-0 origin-left rounded-full bg-white transition-none"
                style={{ transform: `scaleX(${progress / 100})` }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
