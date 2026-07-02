"use client";

import { motion, useMotionValue, useSpring, useTransform, useInView, type Variants } from "framer-motion";
import { type ReactNode, useRef, useEffect, useState, useCallback } from "react";

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

// ═══════════════════════════════════════════
// V2: NEW PREMIUM COMPONENTS
// ═══════════════════════════════════════════

// ─── CountUp — Animated number counter ───
interface CountUpProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function CountUp({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}

// ─── TextReveal — Word-by-word reveal ───
interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  highlightWords?: string[];
  highlightClass?: string;
}

export function TextReveal({
  text,
  className = "",
  delay = 0,
  highlightWords = [],
  highlightClass = "gradient-brand-text italic",
}: TextRevealProps) {
  const words = text.split(" ");

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className={`inline ${className}`}
    >
      {words.map((word, i) => {
        const isHighlight = highlightWords.includes(word);
        return (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: 0.5,
                  delay: delay + i * 0.06,
                  ease,
                },
              },
            }}
            className={`inline-block ${isHighlight ? highlightClass : ""}`}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        );
      })}
    </motion.span>
  );
}

// ─── ParallaxImage — Subtle scroll parallax ───
interface ParallaxImageProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export function ParallaxImage({
  children,
  className = "",
  speed = 0.15,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      const progress = (windowH - rect.top) / (windowH + rect.height);
      setOffset((progress - 0.5) * speed * 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y: offset }}>
        {children}
      </motion.div>
    </div>
  );
}

// ─── ScrollProgress — Page scroll progress bar ───
export function ScrollProgress() {
  const scaleX = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      scaleX.set(docHeight > 0 ? scrollTop / docHeight : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scaleX]);

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX, transformOrigin: "left" }}
    />
  );
}

// ─── MagneticWrapper — Subtle magnetic hover effect ───
interface MagneticWrapperProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticWrapper({
  children,
  className = "",
  strength = 0.3,
}: MagneticWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set((e.clientX - centerX) * strength);
      y.set((e.clientY - centerY) * strength);
    },
    [x, y, strength]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
