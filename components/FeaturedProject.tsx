"use client";

import { motion } from "framer-motion";
import { FEATURED_PROJECT, WHATSAPP_MESSAGES, getWhatsAppUrl } from "@/lib/constants";
import { Reveal, Section } from "@/components/ui/motion";
import { Button, WhatsAppIcon } from "@/components/ui/button";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;

export default function FeaturedProject() {
  return (
    <Section className="bg-white py-20 lg:py-28">
      <Reveal className="text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-secondary">
          Project Spotlight
        </p>
        <h2 className="mt-2 font-serif text-[clamp(1.8rem,4vw,3rem)] font-normal text-text-primary">
          {FEATURED_PROJECT.title}
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-[14px] leading-relaxed text-text-secondary">
          {FEATURED_PROJECT.subtitle}
        </p>
      </Reveal>

      {/* Hero image with floating stats */}
      <div className="relative mt-10">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          className="relative aspect-[16/9] overflow-hidden rounded-2xl md:aspect-[21/9]"
        >
          <Image
            src={FEATURED_PROJECT.heroImage}
            alt={FEATURED_PROJECT.title}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </motion.div>

        {/* Floating stats card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
          className="relative -mt-8 mx-4 rounded-xl bg-white/95 p-4 shadow-[0_8px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm sm:absolute sm:-bottom-6 sm:left-1/2 sm:mx-0 sm:-translate-x-1/2 sm:p-5"
        >
          <div className="flex items-center justify-center gap-6 sm:gap-10">
            {FEATURED_PROJECT.stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-6 sm:gap-10">
                {i > 0 && <div className="h-8 w-[1px] bg-border-light" />}
                <div className="text-center">
                  <p className="font-serif text-2xl text-brand-primary">{stat.value}</p>
                  <p className="text-[10px] uppercase tracking-wider text-text-tertiary">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Story section */}
      <div className="mt-16 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Room images */}
        <div className="grid grid-cols-2 gap-3">
          {FEATURED_PROJECT.images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease }}
              className="relative aspect-[4/3] overflow-hidden rounded-xl"
            >
              <Image
                src={src}
                alt={`Project detail ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </motion.div>
          ))}
        </div>

        {/* Story text */}
        <Reveal>
          <div className="space-y-5">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-brand-primary">
                The Brief
              </p>
              <p className="mt-1.5 text-[14px] leading-[1.8] text-text-secondary">
                {FEATURED_PROJECT.brief}
              </p>
            </div>
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-brand-purple">
                Our Solution
              </p>
              <p className="mt-1.5 text-[14px] leading-[1.8] text-text-secondary">
                {FEATURED_PROJECT.solution}
              </p>
            </div>
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-brand-secondary">
                The Result
              </p>
              <p className="mt-1.5 text-[14px] leading-[1.8] text-text-secondary">
                {FEATURED_PROJECT.result}
              </p>
            </div>
          </div>
          <Button
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.gallery)}
            variant="primary"
            size="lg"
            external
            icon={<WhatsAppIcon />}
            className="mt-8"
          >
            Want Something Similar?
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}
