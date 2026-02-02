"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

// ─── Shared easing ───
const ease = [0.22, 1, 0.36, 1] as const;

// ─── Reusable variants ───
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease } },
};

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease } },
};

// Furniture-inspired: panel sliding open
export const panelReveal: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease } },
};

// Stagger container
export const stagger = (staggerTime = 0.1): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: staggerTime } },
});

// ─── Reveal Component ───
interface RevealProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  once?: boolean;
  amount?: number;
}

export function Reveal({
  children,
  variants = fadeUp,
  className,
  delay = 0,
  once = true,
  amount = 0.2,
}: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Stagger Container ───
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerTime?: number;
  once?: boolean;
  amount?: number;
}

export function StaggerContainer({
  children,
  className,
  staggerTime = 0.1,
  once = true,
  amount = 0.15,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={stagger(staggerTime)}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Stagger Item ───
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
}

export function StaggerItem({
  children,
  className,
  variants = fadeUp,
}: StaggerItemProps) {
  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}

// ─── Section Container ───
interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`px-5 lg:px-12 ${className}`}>
      <div className="mx-auto max-w-[1400px]">{children}</div>
    </section>
  );
}
