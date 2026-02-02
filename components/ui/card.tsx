"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease } },
};

// ─── Image Card (for Gallery / Service previews) ───
interface ImageCardProps {
  src: string;
  alt: string;
  href: string;
  height?: string;
  label?: string;
  sublabel?: string;
  accentColor?: string;
  sizes?: string;
  className?: string;
}

export function ImageCard({
  src,
  alt,
  href,
  height = "360px",
  label,
  sublabel,
  accentColor,
  sizes = "(max-width: 1024px) 50vw, 33vw",
  className = "",
}: ImageCardProps) {
  return (
    <motion.div variants={cardReveal}>
      <Link
        href={href}
        className={`group relative block overflow-hidden rounded-2xl ${className}`}
        style={{ height }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes={sizes}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-all duration-300 group-hover:from-black/80" />
        {label && (
          <div className="absolute bottom-0 left-0 right-0 p-5">
            {accentColor && (
              <div
                className="mb-3 h-[2px] w-8 transition-all duration-300 group-hover:w-12"
                style={{ background: accentColor }}
              />
            )}
            <p className="font-serif text-lg text-white">{label}</p>
            {sublabel && (
              <p className="mt-1 text-[13px] leading-relaxed text-white/60">
                {sublabel}
              </p>
            )}
          </div>
        )}
      </Link>
    </motion.div>
  );
}

// ─── Content Card (for Testimonials, Info blocks) ───
interface ContentCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function ContentCard({
  children,
  className = "",
  hover = true,
}: ContentCardProps) {
  return (
    <motion.div
      variants={cardReveal}
      className={`rounded-2xl border border-border-light bg-white p-6 md:p-8 ${
        hover
          ? "transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(43,58,232,0.08)]"
          : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
