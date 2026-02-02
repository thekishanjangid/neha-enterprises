"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import { Reveal, StaggerContainer, StaggerItem, Section, panelReveal } from "@/components/ui/motion";
import Image from "next/image";
import Link from "next/link";

const SERVICE_COLORS = ["#2B3AE8", "#7B2DB8", "#E8247C", "#2B3AE8"];

export default function ServiceCards() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <Section className="bg-white py-20 lg:py-28">
      <Reveal>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-secondary">
          What We Do
        </p>
        <h2 className="mt-2 font-serif text-[clamp(1.8rem,4vw,3rem)] font-normal text-text-primary">
          Our <span className="gradient-brand-text italic">Services</span>
        </h2>
      </Reveal>

      {/* Mobile: Horizontal scroll carousel */}
      <div
        ref={scrollRef}
        className="mt-10 flex gap-4 overflow-x-auto scroll-snap-x no-scrollbar pb-4 md:hidden"
      >
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
            className="w-[85vw] flex-shrink-0"
          >
            <Link
              href={`/services#${service.id}`}
              className="group relative block overflow-hidden rounded-2xl"
            >
              <div className="relative h-[280px] w-full overflow-hidden rounded-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="85vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div
                    className="mb-2 h-[2px] w-8"
                    style={{ background: SERVICE_COLORS[i] }}
                  />
                  <h3 className="font-serif text-xl text-white">{service.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-white/70">
                    {service.shortDesc}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Desktop: Grid layout */}
      <StaggerContainer className="mt-12 hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-4" staggerTime={0.12}>
        {SERVICES.map((service, i) => (
          <StaggerItem key={service.id} variants={panelReveal}>
            <Link
              href={`/services#${service.id}`}
              className="group relative block overflow-hidden rounded-2xl"
            >
              <div className="relative h-[360px] w-full overflow-hidden rounded-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-300 group-hover:from-black/90" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div
                    className="mb-3 h-[2px] w-8 transition-all duration-300 group-hover:w-12"
                    style={{ background: SERVICE_COLORS[i] }}
                  />
                  <h3 className="font-serif text-xl text-white">{service.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                    {service.shortDesc}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-[12px] font-medium text-white/0 transition-all duration-300 group-hover:text-white/80">
                    Explore
                    <svg
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
