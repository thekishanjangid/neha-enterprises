"use client";

import { motion } from "framer-motion";
import { BUSINESS, WHATSAPP_MESSAGES, getWhatsAppUrl } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { Reveal, Section, fadeUp, slideFromRight } from "@/components/ui/motion";
import { Button, ArrowIcon } from "@/components/ui/button";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;

const TRUST_POINTS = [
  { title: "Own Manufacturing", desc: "Complete quality control from our workshop" },
  { title: "Factory Pricing", desc: "Save 20-30% with no middlemen" },
  { title: "End-to-End", desc: "Design to installation, all in-house" },
];

export default function TrustSection() {
  return (
    <Section className="bg-white py-20 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal variants={fadeUp} className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={IMAGES.trust.workshop}
              alt="Neha Enterprises workshop"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="absolute -bottom-4 left-4 right-4 rounded-xl bg-white/95 p-4 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-sm sm:-bottom-6 sm:left-auto sm:right-6 sm:max-w-xs sm:p-5"
          >
            <div className="flex items-center justify-around gap-4 sm:justify-start">
              <div className="text-center sm:text-left">
                <p className="font-serif text-2xl text-brand-primary">{BUSINESS.projectsCompleted}</p>
                <p className="text-[10px] uppercase tracking-wider text-text-tertiary">Projects</p>
              </div>
              <div className="h-8 w-[1px] bg-border-light" />
              <div className="text-center sm:text-left">
                <p className="font-serif text-2xl text-brand-purple">{BUSINESS.yearsExperience}</p>
                <p className="text-[10px] uppercase tracking-wider text-text-tertiary">Years</p>
              </div>
              <div className="h-8 w-[1px] bg-border-light" />
              <div className="text-center sm:text-left">
                <p className="font-serif text-2xl text-brand-secondary">100%</p>
                <p className="text-[10px] uppercase tracking-wider text-text-tertiary">In-House</p>
              </div>
            </div>
          </motion.div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-secondary">
              Why Choose Us
            </p>
            <h2 className="mt-2 font-serif text-[clamp(1.8rem,4vw,3rem)] font-normal text-text-primary">
              Built in <span className="gradient-brand-text italic">Our Workshop</span>,
              <br className="hidden sm:block" />
              Installed in Yours
            </h2>
            <p className="mt-4 text-[14px] leading-[1.8] text-text-secondary lg:text-[15px]">
              Unlike dealers who outsource everything, we manufacture in our own
              facility. Better quality, faster delivery, and prices without
              middleman markups.
            </p>
          </Reveal>

          <div className="mt-8 space-y-5">
            {TRUST_POINTS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease }}
                className="flex gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-text-primary">{item.title}</p>
                  <p className="mt-0.5 text-[13px] text-text-secondary">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <Reveal delay={0.4}>
            <Button
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
              variant="primary"
              size="lg"
              external
              icon={<ArrowIcon />}
              className="mt-8"
            >
              Visit Our Workshop
            </Button>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
