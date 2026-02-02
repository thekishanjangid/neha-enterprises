"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_ITEMS } from "@/lib/constants";
import { Reveal, Section } from "@/components/ui/motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section className="bg-bg-secondary py-20 lg:py-28">
      <Reveal className="text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-secondary">
          Common Questions
        </p>
        <h2 className="mt-2 font-serif text-[clamp(1.8rem,4vw,3rem)] font-normal text-text-primary">
          Questions?{" "}
          <span className="gradient-brand-text italic">We&apos;ve Got Answers</span>
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[14px] text-text-secondary">
          Everything you need to know before starting your project
        </p>
      </Reveal>

      <div className="mx-auto mt-10 max-w-3xl space-y-3">
        {FAQ_ITEMS.map((item, i) => {
          const isOpen = openIndex === i;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease }}
            >
              <div
                className={`overflow-hidden rounded-xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-l-2 border-l-brand-primary border-t-border-light border-r-border-light border-b-border-light shadow-[0_4px_20px_rgba(43,58,232,0.06)]"
                    : "border-border-light"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left md:px-6 md:py-5"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`pr-4 text-[14px] font-semibold transition-colors duration-200 md:text-[15px] ${
                      isOpen ? "text-brand-primary" : "text-text-primary"
                    }`}
                  >
                    {item.question}
                  </span>
                  <motion.svg
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease }}
                    className="h-5 w-5 shrink-0 text-text-tertiary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </motion.svg>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-border-light px-5 pb-5 pt-4 md:px-6">
                        <p className="text-[13px] leading-[1.8] text-text-secondary md:text-[14px]">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
