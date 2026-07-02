"use client";

import { motion } from "framer-motion";
import { BUSINESS } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { Reveal, StaggerContainer, StaggerItem, Section, fadeUp, CountUp } from "@/components/ui/motion";
import Image from "next/image";
import CTABand from "@/components/CTABand";

const ease = [0.22, 1, 0.36, 1] as const;

const STATS = [
  { value: 15, suffix: "+", label: "Years Active" },
  { value: 2000, suffix: "+", label: "Projects Completed" },
  { value: 25, suffix: "+", label: "Team Members" },
  { value: 5000, suffix: "", label: "Sq. Ft. Workshop" },
];

const TIMELINE = [
  { year: "2009", title: "The Beginning", desc: "Started as a small furniture workshop in Jaipur with just 3 craftsmen" },
  { year: "2013", title: "Glass & Aluminium", desc: "Expanded into glass partitions and aluminium facade work" },
  { year: "2017", title: "Full-Service Interior", desc: "Grew to handle end-to-end residential and commercial interior projects" },
  { year: "2021", title: "5,000 Sq. Ft. Workshop", desc: "Moved to a larger manufacturing facility with modern machinery" },
  { year: "2024", title: "2,000+ Projects", desc: "Crossed the 2,000 project milestone across Jaipur and Rajasthan" },
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
        <div className="grain-overlay absolute inset-0 pointer-events-none" />
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
        <div className="absolute left-0 right-0 h-[1px] accent-line-animated" />
        <StaggerContainer className="mx-auto grid max-w-[1400px] grid-cols-2 gap-8 px-6 lg:grid-cols-4 lg:px-12">
          {STATS.map((stat) => (
            <StaggerItem key={stat.label} variants={fadeUp}>
              <div className="text-center">
                <p className="font-serif text-4xl font-semibold text-brand-primary sm:text-5xl">
                  <CountUp target={stat.value} suffix={stat.suffix} duration={2.5} />
                </p>
                <div className="mx-auto mt-3 h-[1px] w-8 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <p className="mt-3 text-sm text-text-muted-dark">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Timeline */}
      <Section className="bg-white py-24 lg:py-32">
        <Reveal className="mb-14 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-secondary">
            Our Journey
          </p>
          <h2 className="mt-2 font-serif text-[clamp(1.8rem,4vw,3rem)] font-normal text-text-primary">
            Key <span className="gradient-brand-text italic">Milestones</span>
          </h2>
        </Reveal>

        <div className="mx-auto max-w-3xl">
          <div className="relative pl-8 md:pl-0">
            {/* Vertical line (mobile) */}
            <motion.div
              className="absolute left-[11px] top-0 bottom-0 w-[2px] origin-top bg-gradient-to-b from-brand-primary via-brand-purple to-brand-secondary md:left-1/2 md:-translate-x-1/2"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease }}
            />

            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease }}
                className={`relative mb-12 last:mb-0 md:flex md:items-center md:gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute -left-8 top-1 h-6 w-6 rounded-full border-2 border-brand-primary bg-white md:static md:shrink-0 md:h-4 md:w-4" />

                {/* Content */}
                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}>
                  <span className="text-[12px] font-bold uppercase tracking-wider text-brand-primary">{item.year}</span>
                  <h3 className="mt-1 font-serif text-lg text-text-primary">{item.title}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-text-secondary">{item.desc}</p>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

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
              <div className="group relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={src}
                  alt={`Workshop photo ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
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
