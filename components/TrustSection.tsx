"use client";

import { motion } from "framer-motion";
import { BUSINESS, WHATSAPP_MESSAGES, getWhatsAppUrl } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { Reveal, Section, fadeUp, CountUp } from "@/components/ui/motion";
import { Button, ArrowIcon } from "@/components/ui/button";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;

const TRUST_POINTS = [
  {
    title: "Own Manufacturing",
    desc: "Complete quality control from our 5,000 sq ft workshop",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
      </svg>
    ),
  },
  {
    title: "Factory Pricing",
    desc: "Save 20–30% with no middlemen or dealer markups",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: "End-to-End Service",
    desc: "Design → Manufacturing → Installation, all in-house",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
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
          {/* Glassmorphism floating stats card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="absolute -bottom-4 left-4 right-4 rounded-xl glass-card p-4 shadow-[0_8px_30px_rgba(0,0,0,0.08)] sm:-bottom-6 sm:left-auto sm:right-6 sm:max-w-xs sm:p-5"
          >
            <div className="flex items-center justify-around gap-4 sm:justify-start">
              <div className="text-center sm:text-left">
                <p className="font-serif text-2xl text-brand-primary">
                  <CountUp target={2000} suffix="+" duration={2} />
                </p>
                <p className="text-[10px] uppercase tracking-wider text-text-tertiary">Projects</p>
              </div>
              <div className="h-8 w-[1px] bg-border-light" />
              <div className="text-center sm:text-left">
                <p className="font-serif text-2xl text-brand-purple">
                  <CountUp target={15} suffix="+" duration={2} />
                </p>
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
                className="flex gap-4 rounded-xl p-3 transition-all duration-300 hover:bg-bg-secondary"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary/10 to-brand-purple/10 text-brand-primary">
                  {item.icon}
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
