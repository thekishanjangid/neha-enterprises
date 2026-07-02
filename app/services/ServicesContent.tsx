"use client";

import { motion } from "framer-motion";
import { SERVICES, getWhatsAppUrl } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { Reveal, Section } from "@/components/ui/motion";
import { Button, WhatsAppIcon } from "@/components/ui/button";
import Image from "next/image";
import CTABand from "@/components/CTABand";

const SERVICE_COLORS = ["#2B3AE8", "#7B2DB8", "#E8247C", "#2B3AE8"];
const SERVICE_IMAGES = [
  IMAGES.services.furniture,
  IMAGES.services.glass,
  IMAGES.services.hardware,
  IMAGES.services.commercial,
];

const SERVICE_ICONS = [
  // Furniture — sofa/chair
  <svg key="furniture" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
  </svg>,
  // Glass — cube
  <svg key="glass" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
  </svg>,
  // Hardware — cog
  <svg key="hardware" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  // Commercial — building
  <svg key="commercial" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
  </svg>,
];

const ease = [0.22, 1, 0.36, 1] as const;

function ServiceSection({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const isReversed = index % 2 !== 0;

  return (
    <section
      id={service.id}
      className={`scroll-mt-20 py-24 lg:py-32 ${index % 2 === 0 ? "bg-white" : "bg-bg-secondary"}`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className={`group relative aspect-[4/3] overflow-hidden rounded-xl ${isReversed ? "lg:order-2" : ""}`}
          >
            <Image
              src={SERVICE_IMAGES[index]}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10" />
            {/* Service number badge */}
            <div
              className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl text-[13px] font-bold text-white"
              style={{ backgroundColor: SERVICE_COLORS[index] }}
            >
              {`0${index + 1}`}
            </div>
          </motion.div>

          <div className={isReversed ? "lg:order-1" : ""}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="mb-4 flex items-center gap-3"
            >
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${SERVICE_COLORS[index]}12`, color: SERVICE_COLORS[index] }}
              >
                {SERVICE_ICONS[index]}
              </div>
              <p
                className="text-[12px] font-semibold uppercase tracking-[0.2em]"
                style={{ color: SERVICE_COLORS[index] }}
              >
                {`0${index + 1}`}
              </p>
            </motion.div>
            <Reveal>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal text-text-primary">
                {service.title}
              </h2>
              <span className="accent-line mt-4" />
              <p className="mt-6 text-base leading-relaxed text-text-secondary">
                {service.fullDesc}
              </p>
            </Reveal>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2.5"
            >
              {service.items.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-text-secondary">
                  <svg
                    className="h-4 w-4 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke={SERVICE_COLORS[index]}
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
            >
              <Button
                href={getWhatsAppUrl(service.whatsappMsg)}
                variant="primary"
                external
                icon={<WhatsAppIcon />}
                className="mt-8"
              >
                Get a Quote for {service.title}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[50vh] min-h-[360px] items-center justify-center overflow-hidden pt-[72px]">
        <Image
          src={IMAGES.services.commercial}
          alt="Our services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="grain-overlay absolute inset-0 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 text-center lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="mb-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-primary"
          >
            What We Build
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal text-white"
          >
            Our <span className="italic text-brand-primary">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease }}
            className="mt-3 text-[14px] text-white/50"
          >
            {SERVICES.length} specialized services under one roof
          </motion.p>
        </div>
      </section>

      {/* Sticky service nav */}
      <div className="hidden border-b border-border-light bg-white/95 backdrop-blur-sm md:block sticky top-[64px] z-30">
        <div className="mx-auto flex max-w-[1400px] items-center gap-1 overflow-x-auto px-6 lg:px-12">
          {SERVICES.map((service, i) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className="flex items-center gap-2 whitespace-nowrap border-b-2 border-transparent px-4 py-3 text-[13px] font-medium text-text-secondary transition-colors hover:border-brand-primary/30 hover:text-text-primary"
              style={{ borderColor: "transparent" }}
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-md text-[10px] font-bold text-white" style={{ backgroundColor: SERVICE_COLORS[i] }}>
                {`0${i + 1}`}
              </span>
              {service.title}
            </a>
          ))}
        </div>
      </div>

      {SERVICES.map((service, i) => (
        <ServiceSection key={service.id} service={service} index={i} />
      ))}

      <section className="bg-bg-mint py-24 lg:py-32 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal>
            <h3 className="font-serif text-2xl text-text-primary mb-4">
              Need <span className="gradient-brand-text italic">Multiple</span> Services?
            </h3>
            <p className="text-base leading-relaxed text-text-secondary">
              We handle complete projects — from furniture
              to partitions — under one roof. One team, one timeline, one
              point of contact.
            </p>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
