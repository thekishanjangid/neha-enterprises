"use client";

import { PARTNER_BRANDS } from "@/lib/constants";
import { Reveal, StaggerContainer, StaggerItem, Section, scaleUp } from "@/components/ui/motion";

export default function PartnerBrands() {
  return (
    <Section className="bg-white py-16 lg:py-24">
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

      <StaggerContainer
        className="mt-10 grid grid-cols-3 gap-4 md:grid-cols-6 md:gap-6"
        staggerTime={0.08}
      >
        {PARTNER_BRANDS.map((brand) => (
          <StaggerItem key={brand} variants={scaleUp}>
            <div className="flex h-20 items-center justify-center rounded-xl border border-border-light bg-bg-secondary transition-all duration-300 hover:border-brand-primary/30 hover:shadow-[0_4px_20px_rgba(43,58,232,0.06)]">
              <span className="text-[14px] font-semibold tracking-wide text-text-tertiary transition-colors duration-300 hover:text-brand-primary md:text-[15px]">
                {brand}
              </span>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
