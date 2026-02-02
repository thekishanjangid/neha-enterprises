"use client";

import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem, scaleUp } from "@/components/ui/motion";
import Image from "next/image";

const STATS = [
  { value: "2000+", label: "Projects", sublabel: "Across Jaipur & Rajasthan" },
  { value: "15+", label: "Years", sublabel: "Crafting since 2009" },
  { value: "100%", label: "In-House", sublabel: "No outsourcing" },
  { value: "30-Day", label: "Average", sublabel: "Design to installation" },
];

export default function NumbersImpact() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <Image
        src="/images/work/living/hall-2.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-bg-dark/90 backdrop-blur-[2px]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 lg:px-12">
        <StaggerContainer
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
          staggerTime={0.1}
          amount={0.3}
        >
          {STATS.map((stat) => (
            <StaggerItem key={stat.label} variants={scaleUp}>
              <div className="text-center">
                <p className="font-serif text-4xl text-white sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[13px] font-semibold uppercase tracking-wider text-white/70">
                  {stat.label}
                </p>
                <p className="mt-1 text-[12px] text-white/40">{stat.sublabel}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
