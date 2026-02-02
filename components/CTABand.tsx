"use client";

import { motion } from "framer-motion";
import { BUSINESS, WHATSAPP_MESSAGES, getWhatsAppUrl } from "@/lib/constants";
import { Button, WhatsAppIcon, PhoneIcon } from "@/components/ui/button";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;

interface CTABandProps {
  headline?: string;
  subtext?: string;
  whatsappMessage?: string;
}

export default function CTABand({
  headline = "Ready to Build Something Exceptional?",
  subtext = "Tell us about your project. We\u2019ll get back to you within 2 hours.",
  whatsappMessage = WHATSAPP_MESSAGES.general,
}: CTABandProps) {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <Image
        src="/images/work/living/hall-1.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-bg-dark/85 backdrop-blur-[2px]" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-12">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="accent-line-center mb-6"
        />
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="font-serif text-[clamp(1.8rem,4vw,3rem)] font-normal text-white"
        >
          {headline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="mt-4 text-[14px] text-white/60 lg:text-[15px]"
        >
          {subtext}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button
            href={getWhatsAppUrl(whatsappMessage)}
            variant="white"
            size="lg"
            external
            icon={<WhatsAppIcon />}
            className="w-full sm:w-auto"
          >
            WhatsApp Us
          </Button>
          <Button
            href={`tel:${BUSINESS.phone}`}
            variant="outline-white"
            size="lg"
            external
            icon={<PhoneIcon />}
            className="w-full sm:w-auto"
          >
            Call Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
