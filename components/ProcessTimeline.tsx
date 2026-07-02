"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";
import { Reveal, StaggerContainer, StaggerItem, Section, fadeUp } from "@/components/ui/motion";

const STEP_COLORS = ["#2B3AE8", "#7B2DB8", "#E8247C", "#2B3AE8"];
const ease = [0.22, 1, 0.36, 1] as const;

const STEP_ICONS = [
  // Clipboard — Consultation
  <svg key="consult" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
  </svg>,
  // Pencil — Design
  <svg key="design" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
  </svg>,
  // Wrench — Manufacturing
  <svg key="build" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
  </svg>,
  // Truck — Installation
  <svg key="install" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
  </svg>,
];

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
        <p className="mx-auto mt-4 max-w-lg text-[14px] text-text-secondary">
          From first call to final walkthrough — here&apos;s how we bring your vision to life
        </p>
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

      {/* Desktop: Horizontal layout with icons */}
      <StaggerContainer className="mt-16 hidden gap-6 md:grid md:grid-cols-4" staggerTime={0.15}>
        {PROCESS_STEPS.map((step, i) => (
          <StaggerItem key={i} variants={fadeUp}>
            <div className="group relative text-center">
              {/* Connector line */}
              {i < PROCESS_STEPS.length - 1 && (
                <motion.div
                  className="absolute left-[calc(50%+40px)] right-[calc(-50%+40px)] top-10 hidden h-[2px] lg:block"
                  style={{ background: `linear-gradient(90deg, ${STEP_COLORS[i]}, ${STEP_COLORS[i + 1]})` }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.2, ease }}
                />
              )}
              {/* Icon circle */}
              <div
                className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundColor: `${STEP_COLORS[i]}12`,
                  color: STEP_COLORS[i],
                }}
              >
                {STEP_ICONS[i]}
                <div
                  className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold text-white"
                  style={{ backgroundColor: STEP_COLORS[i] }}
                >
                  {step.number}
                </div>
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
