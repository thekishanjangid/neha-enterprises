"use client";

import { motion } from "framer-motion";
import { MATERIALS } from "@/lib/constants";
import { Reveal, StaggerContainer, StaggerItem, Section, panelReveal } from "@/components/ui/motion";
import { TiltCard } from "@/components/ui/card";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;

const MATERIAL_ICONS = [
  // Wood grain
  <svg key="wood" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
  </svg>,
  // Diamond — glass
  <svg key="glass" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
  </svg>,
  // Cog — hardware
  <svg key="hardware" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
];

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
                <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-brand-primary shadow-sm backdrop-blur-sm">
                  {MATERIAL_ICONS[i]}
                </div>
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

      {/* Desktop: 3-column grid with tilt */}
      <StaggerContainer className="mt-12 hidden gap-6 md:grid md:grid-cols-3" staggerTime={0.15}>
        {MATERIALS.map((mat, i) => (
          <StaggerItem key={mat.title} variants={panelReveal}>
            <TiltCard tiltAmount={4}>
              <div className="group overflow-hidden rounded-2xl border border-border-light bg-white transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(43,58,232,0.08)]">
                <div className="relative h-[200px] w-full overflow-hidden">
                  <Image
                    src={mat.image}
                    alt={mat.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="33vw"
                  />
                  <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-brand-primary shadow-sm backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    {MATERIAL_ICONS[i]}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-text-primary">{mat.title}</h3>
                  <p className="mt-2 text-[13px] leading-[1.8] text-text-secondary">
                    {mat.description}
                  </p>
                </div>
              </div>
            </TiltCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
