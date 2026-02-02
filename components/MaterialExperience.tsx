"use client";

import { motion } from "framer-motion";
import { MATERIALS } from "@/lib/constants";
import { Reveal, StaggerContainer, StaggerItem, Section, panelReveal } from "@/components/ui/motion";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;

export default function MaterialExperience() {
  return (
    <Section className="bg-bg-mint py-20 lg:py-28">
      <Reveal className="text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-secondary">
          What Goes Inside
        </p>
        <h2 className="mt-2 font-serif text-[clamp(1.8rem,4vw,3rem)] font-normal text-text-primary">
          Materials That Last{" "}
          <span className="gradient-brand-text italic">Generations</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[14px] leading-[1.8] text-text-secondary">
          Premium wood, engineered board, toughened glass, anodized aluminium —
          we source the finest and build it right.
        </p>
      </Reveal>

      {/* Mobile: Horizontal scroll */}
      <div className="mt-10 flex gap-4 overflow-x-auto scroll-snap-x no-scrollbar pb-4 md:hidden">
        {MATERIALS.map((mat, i) => (
          <motion.div
            key={mat.title}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease }}
            className="w-[80vw] flex-shrink-0"
          >
            <div className="overflow-hidden rounded-2xl border border-border-light bg-white">
              <div className="relative h-[180px] w-full">
                <Image
                  src={mat.image}
                  alt={mat.title}
                  fill
                  className="object-cover"
                  sizes="80vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg text-text-primary">{mat.title}</h3>
                <p className="mt-2 text-[13px] leading-[1.7] text-text-secondary">
                  {mat.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop: 3-column grid */}
      <StaggerContainer className="mt-12 hidden gap-6 md:grid md:grid-cols-3" staggerTime={0.15}>
        {MATERIALS.map((mat) => (
          <StaggerItem key={mat.title} variants={panelReveal}>
            <div className="group overflow-hidden rounded-2xl border border-border-light bg-white transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(43,58,232,0.08)]">
              <div className="relative h-[200px] w-full overflow-hidden">
                <Image
                  src={mat.image}
                  alt={mat.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-text-primary">{mat.title}</h3>
                <p className="mt-2 text-[13px] leading-[1.8] text-text-secondary">
                  {mat.description}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
