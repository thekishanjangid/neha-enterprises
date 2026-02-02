"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Reveal, StaggerContainer, StaggerItem, Section, fadeUp } from "@/components/ui/motion";
import { ContentCard } from "@/components/ui/card";

const TESTIMONIALS = [
  {
    name: "Rajesh Sharma",
    location: "Vaishali Nagar, Jaipur",
    text: "Neha Enterprises built our entire living room furniture — sofa, TV unit, and bookshelves. The quality is outstanding and the pricing was very fair. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Agarwal",
    location: "Mansarovar, Jaipur",
    text: "We got glass partitions installed in our office. The team was professional, finished on time, and the result looks fantastic. Will definitely work with them again.",
    rating: 5,
  },
  {
    name: "Amit Jain",
    location: "C-Scheme, Jaipur",
    text: "From design to installation, everything was handled smoothly. Our modular kitchen turned out exactly how we wanted. Great team and amazing craftsmanship.",
    rating: 5,
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

export default function Testimonial() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
            <div className="mt-5 border-t border-border-light pt-4">
              <p className="text-[14px] font-semibold text-text-primary">{t.name}</p>
              <p className="text-[12px] text-text-tertiary">{t.location}</p>
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

      {/* Desktop: Grid */}
      <StaggerContainer className="mt-12 hidden gap-6 md:grid md:grid-cols-3" staggerTime={0.12}>
        {TESTIMONIALS.map((t, i) => (
          <StaggerItem key={i} variants={fadeUp}>
            <ContentCard>
              <div className="gradient-brand-text mb-3 select-none font-serif text-4xl leading-none">
                &ldquo;
              </div>
              <p className="text-[14px] leading-[1.8] text-text-secondary">{t.text}</p>
              <div className="mb-4 mt-5 flex items-center gap-1">
                <Stars count={t.rating} />
              </div>
              <div className="border-t border-border-light pt-4">
                <p className="text-[14px] font-semibold text-text-primary">{t.name}</p>
                <p className="text-[12px] text-text-tertiary">{t.location}</p>
              </div>
            </ContentCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
