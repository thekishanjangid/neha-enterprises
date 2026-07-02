"use client";

import { PARTNER_BRANDS } from "@/lib/constants";
import { Reveal, Section } from "@/components/ui/motion";

export default function PartnerBrands() {
  // Double the brands for seamless infinite scroll
  const marqueeItems = [...PARTNER_BRANDS, ...PARTNER_BRANDS];

  return (
    <Section className="bg-white py-16 lg:py-24 overflow-hidden">
      <Reveal className="text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-secondary">
          Trusted Hardware
        </p>
        <h2 className="mt-2 font-serif text-[clamp(1.8rem,4vw,2.5rem)] font-normal text-text-primary">
          Built with the{" "}
          <span className="gradient-brand-text italic">Best</span>
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[14px] text-text-secondary">
          We only install hardware we&apos;d use in our own homes
        </p>
      </Reveal>

      {/* Infinite Marquee */}
      <div className="mt-10 relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee w-max">
          {marqueeItems.map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              className="mx-4 flex h-20 w-40 shrink-0 items-center justify-center rounded-xl border border-border-light bg-bg-secondary transition-all duration-300 hover:border-brand-primary/30 hover:shadow-[0_4px_20px_rgba(43,58,232,0.06)] hover:bg-white"
            >
              <span className="text-[15px] font-semibold tracking-wide text-text-tertiary transition-colors duration-300 hover:text-brand-primary">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
