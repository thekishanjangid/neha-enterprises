"use client";

import { CRAFTSMANSHIP } from "@/lib/constants";
import { Reveal, StaggerContainer, StaggerItem, Section, fadeUp } from "@/components/ui/motion";
import Image from "next/image";

const ICONS = [
  // Ruler / precision
  <svg key="ruler" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
  </svg>,
  // Sparkle / polish
  <svg key="sparkle" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>,
  // Shield / quality
  <svg key="shield" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>,
];

export default function CraftsmanshipFocus() {
  return (
    <Section className="bg-bg-secondary py-20 lg:py-28">
      <Reveal className="text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-secondary">
          The Details
        </p>
        <h2 className="mt-2 font-serif text-[clamp(1.8rem,4vw,3rem)] font-normal text-text-primary">
          Precision in Every{" "}
          <span className="gradient-brand-text italic">Joint</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[14px] leading-[1.8] text-text-secondary">
          Machine-cut accuracy meets hand-finished perfection
        </p>
      </Reveal>

      <StaggerContainer className="mt-12 grid gap-5 md:grid-cols-3" staggerTime={0.18}>
        {CRAFTSMANSHIP.map((item, i) => (
          <StaggerItem key={item.title} variants={fadeUp}>
            <div className="group overflow-hidden rounded-2xl border border-border-light bg-white transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(43,58,232,0.08)]">
              <div className="relative h-[180px] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Icon badge */}
                <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-brand-primary shadow-sm backdrop-blur-sm">
                  {ICONS[i]}
                </div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="font-serif text-lg text-text-primary">{item.title}</h3>
                <p className="mt-2 text-[13px] leading-[1.7] text-text-secondary">
                  {item.description}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
