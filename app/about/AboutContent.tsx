"use client";

import { motion } from "framer-motion";
import { BUSINESS } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { Reveal, StaggerContainer, StaggerItem, Section, fadeUp } from "@/components/ui/motion";
import Image from "next/image";
import CTABand from "@/components/CTABand";

const ease = [0.22, 1, 0.36, 1] as const;

const STATS = [
  { value: "15+", label: "Years Active" },
  { value: "2,000+", label: "Projects Completed" },
  { value: "25+", label: "Team Members" },
  { value: "5,000", label: "Sq. Ft. Workshop" },
];

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[50vh] min-h-[360px] items-center justify-center overflow-hidden pt-[72px]">
        <Image
          src={IMAGES.about.team}
          alt="About Neha Enterprises"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="mb-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-primary"
          >
            Since {BUSINESS.yearFounded}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal text-white"
          >
            About <span className="italic text-brand-primary">Us</span>
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <Section className="bg-white py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src={IMAGES.about.team}
              alt="Neha Enterprises team"
              fill
              className="rounded-xl object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>

          <div>
            <Reveal>
              <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-secondary">
                Our Story
              </p>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal text-text-primary">
                Built on <span className="italic text-brand-primary">Trust</span>,
                <br />Driven by <span className="italic text-brand-secondary">Craft</span>
              </h2>
              <span className="accent-line mt-4" />
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-text-secondary">
                <p>
                  Neha Enterprises began in {BUSINESS.yearFounded} with a simple belief: that
                  furniture should be built to fit your space, not the other way around. What
                  started as a small workshop has grown into a full-service furniture manufacturing
                  and interior solutions company trusted by homeowners, offices, and commercial
                  clients across {BUSINESS.city}.
                </p>
                <p>
                  As a family-owned business, we take personal pride in every project. There
                  are no layers of middlemen — when you work with us, you work directly with
                  the people who design, build, and install your furniture.
                </p>
                <p>
                  Over the years, we&apos;ve expanded from custom furniture into glass &amp;
                  aluminium partitions, premium hardware supply, and end-to-end commercial
                  projects. But our core hasn&apos;t changed: attention to detail, honest
                  materials, and work that speaks for itself.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Stats */}
      <section className="bg-bg-dark py-24 lg:py-32">
        <StaggerContainer className="mx-auto grid max-w-[1400px] grid-cols-2 gap-8 px-6 lg:grid-cols-4 lg:px-12">
          {STATS.map((stat) => (
            <StaggerItem key={stat.label} variants={fadeUp}>
              <div className="text-center">
                <p className="font-serif text-4xl font-semibold text-brand-primary sm:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm text-text-muted-dark">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Workshop */}
      <Section className="bg-bg-secondary py-24 lg:py-32">
        <Reveal className="mb-12 text-center">
          <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-secondary">
            Where It All Happens
          </p>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal text-text-primary">
            Our <span className="italic text-brand-secondary">Workshop</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-text-secondary">
            Every piece of furniture is manufactured in our own 5,000 sq. ft. workshop.
            From raw material selection to final finishing — we control quality at every
            stage without outsourcing.
          </p>
        </Reveal>

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" staggerTime={0.1}>
          {IMAGES.about.workshop.map((src, i) => (
            <StaggerItem key={i} variants={fadeUp}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={src}
                  alt={`Workshop photo ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <CTABand
        headline="Want to See Our Work in Person?"
        subtext="Visit our workshop or invite us to your site for a free consultation."
      />
    </>
  );
}
