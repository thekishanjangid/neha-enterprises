"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, StaggerContainer, StaggerItem, Section, fadeUp } from "@/components/ui/motion";
import { ContentCard } from "@/components/ui/card";

const TESTIMONIALS = [
  {
    name: "Rajesh Sharma",
    location: "Vaishali Nagar, Jaipur",
    text: "Neha Enterprises built our entire living room furniture — sofa, TV unit, and bookshelves. The quality is outstanding and the pricing was very fair. Highly recommended!",
    rating: 5,
    initials: "RS",
    gradient: "from-brand-primary to-brand-purple",
  },
  {
    name: "Priya Agarwal",
    location: "Mansarovar, Jaipur",
    text: "We got glass partitions installed in our office. The team was professional, finished on time, and the result looks fantastic. Will definitely work with them again.",
    rating: 5,
    initials: "PA",
    gradient: "from-brand-purple to-brand-secondary",
  },
  {
    name: "Amit Jain",
    location: "C-Scheme, Jaipur",
    text: "From design to installation, everything was handled smoothly. Our modular kitchen turned out exactly how we wanted. Great team and amazing craftsmanship.",
    rating: 5,
    initials: "AJ",
    gradient: "from-brand-secondary to-brand-primary",
  },
  {
    name: "Sunita Meena",
    location: "Jagatpura, Jaipur",
    text: "We hired Neha Enterprises for our complete 3BHK interior — bedrooms, kitchen, wardrobes, and glass railings. Everything was delivered on time and the finish quality is exceptional.",
    rating: 5,
    initials: "SM",
    gradient: "from-brand-primary to-brand-accent-muted",
  },
  {
    name: "Vikram Rathore",
    location: "Tonk Road, Jaipur",
    text: "Best furniture hardware supplier in Jaipur. They recommended Hettich soft-close hinges for our kitchen — it's been 3 years and they still work like new. Very knowledgeable team.",
    rating: 5,
    initials: "VR",
    gradient: "from-brand-accent-muted to-brand-purple",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, j) => (
        <svg key={j} className="h-4 w-4 text-brand-secondary" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ initials, gradient }: { initials: string; gradient: string }) {
  return (
    <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${gradient} text-[13px] font-bold text-white shadow-sm`}>
      {initials}
    </div>
  );
}

export default function Testimonial() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [desktopIndex, setDesktopIndex] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      const scrollLeft = el.scrollLeft;
      const cardWidth = el.offsetWidth * 0.85 + 12;
      setActiveIndex(Math.round(scrollLeft / cardWidth));
    };
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-rotate desktop testimonials (show 3 at a time)
  const desktopVisible = TESTIMONIALS.slice(desktopIndex, desktopIndex + 3);
  // If we need to wrap around
  if (desktopVisible.length < 3) {
    desktopVisible.push(...TESTIMONIALS.slice(0, 3 - desktopVisible.length));
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setDesktopIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Section className="bg-white py-20 lg:py-28">
      <Reveal>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-secondary">
          Testimonials
        </p>
        <h2 className="mt-2 font-serif text-[clamp(1.8rem,4vw,3rem)] font-normal text-text-primary">
          What Our <span className="gradient-brand-text italic">Clients Say</span>
        </h2>
      </Reveal>

      {/* Mobile: Swipe carousel */}
      <div
        ref={scrollRef}
        className="mt-8 flex gap-3 overflow-x-auto scroll-snap-x no-scrollbar pb-4 md:hidden"
      >
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
            className="w-[85vw] flex-shrink-0 rounded-2xl border border-border-light bg-white p-6"
          >
            <Stars count={t.rating} />
            <p className="mt-3 text-[14px] leading-[1.8] text-text-secondary">{t.text}</p>
            <div className="mt-5 flex items-center gap-3 border-t border-border-light pt-4">
              <Avatar initials={t.initials} gradient={t.gradient} />
              <div>
                <p className="text-[14px] font-semibold text-text-primary">{t.name}</p>
                <p className="text-[12px] text-text-tertiary">{t.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile dots */}
      <div className="mt-4 flex justify-center gap-1.5 md:hidden">
        {TESTIMONIALS.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeIndex ? "w-5 bg-brand-primary" : "w-1.5 bg-border-medium"
            }`}
          />
        ))}
      </div>

      {/* Desktop: Auto-rotating 3-card grid */}
      <div className="mt-12 hidden md:block">
        <AnimatePresence mode="wait">
          <motion.div
            key={desktopIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-6 md:grid-cols-3"
          >
            {desktopVisible.map((t, i) => (
              <div
                key={`${t.name}-${desktopIndex}-${i}`}
                className="rounded-2xl border border-border-light bg-white p-6 transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(43,58,232,0.08)] md:p-8"
              >
                <div className="gradient-brand-text mb-3 select-none font-serif text-4xl leading-none">
                  &ldquo;
                </div>
                <p className="text-[14px] leading-[1.8] text-text-secondary">{t.text}</p>
                <div className="mb-4 mt-5 flex items-center gap-1">
                  <Stars count={t.rating} />
                </div>
                <div className="flex items-center gap-3 border-t border-border-light pt-4">
                  <Avatar initials={t.initials} gradient={t.gradient} />
                  <div>
                    <p className="text-[14px] font-semibold text-text-primary">{t.name}</p>
                    <p className="text-[12px] text-text-tertiary">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Desktop dots */}
        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setDesktopIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === desktopIndex ? "w-6 bg-brand-primary" : "w-1.5 bg-border-medium hover:bg-text-tertiary"
              }`}
              aria-label={`Show testimonial set ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
