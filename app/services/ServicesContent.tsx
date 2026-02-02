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
            className={`relative aspect-[4/3] overflow-hidden rounded-xl ${isReversed ? "lg:order-2" : ""}`}
          >
            <Image
              src={SERVICE_IMAGES[index]}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <div className={isReversed ? "lg:order-1" : ""}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="mb-3 text-[12px] font-semibold uppercase tracking-[0.2em]"
              style={{ color: SERVICE_COLORS[index] }}
            >
              {`0${index + 1}`}
            </motion.p>
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
              className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2"
            >
              {service.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-text-secondary">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: SERVICE_COLORS[index] }} />
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
        </div>
      </section>

      {SERVICES.map((service, i) => (
        <ServiceSection key={service.id} service={service} index={i} />
      ))}

      <section className="bg-bg-mint py-24 lg:py-32 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal>
            <p className="text-base leading-relaxed text-text-secondary">
              Need multiple services? We handle complete projects — from furniture
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
