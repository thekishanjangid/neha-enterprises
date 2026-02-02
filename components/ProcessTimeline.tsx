"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";
import { Reveal, StaggerContainer, StaggerItem, Section, fadeUp } from "@/components/ui/motion";

const STEP_COLORS = ["#2B3AE8", "#7B2DB8", "#E8247C", "#2B3AE8"];
const ease = [0.22, 1, 0.36, 1] as const;

export default function ProcessTimeline() {
  return (
    <Section className="bg-bg-secondary py-20 lg:py-28">
      <Reveal className="text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-secondary">
          How It Works
        </p>
        <h2 className="mt-2 font-serif text-[clamp(1.8rem,4vw,3rem)] font-normal text-text-primary">
          Our <span className="gradient-brand-text italic">Process</span>
        </h2>
      </Reveal>

      {/* Mobile: Vertical timeline */}
      <div className="mt-12 md:hidden">
        <div className="relative pl-8">
          <motion.div
            className="absolute left-[11px] top-0 bottom-0 w-[2px] origin-top bg-gradient-to-b from-[#2B3AE8] via-[#7B2DB8] to-[#E8247C]"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease }}
          />

          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15, ease }}
              className="relative mb-10 last:mb-0"
            >
              <div
                className="absolute -left-8 top-0.5 flex h-6 w-6 items-center justify-center rounded-full"
                style={{ backgroundColor: STEP_COLORS[i] }}
              >
                <span className="text-[10px] font-bold text-white">{step.number}</span>
              </div>
              <h3 className="font-serif text-lg" style={{ color: STEP_COLORS[i] }}>
                {step.title}
              </h3>
              <p className="mt-1 text-[13px] leading-relaxed text-text-secondary">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop: Horizontal layout */}
      <StaggerContainer className="mt-16 hidden gap-8 md:grid md:grid-cols-4" staggerTime={0.15}>
        {PROCESS_STEPS.map((step, i) => (
          <StaggerItem key={i} variants={fadeUp}>
            <div className="relative text-center">
              {i < PROCESS_STEPS.length - 1 && (
                <div className="absolute left-[calc(50%+32px)] right-[calc(-50%+32px)] top-8 hidden h-[1px] bg-border-light lg:block" />
              )}
              <div
                className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full"
                style={{
                  backgroundColor: STEP_COLORS[i],
                  boxShadow: `0 0 0 6px ${STEP_COLORS[i]}20`,
                }}
              >
                <span className="text-lg font-bold text-white">{step.number}</span>
              </div>
              <h3 className="font-serif text-xl" style={{ color: STEP_COLORS[i] }}>
                {step.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-text-secondary">
                {step.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
