"use client";

import Link from "next/link";
import { type ReactNode, useCallback, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "subtle" | "white" | "outline-white" | "shimmer";
  size?: "default" | "lg";
  external?: boolean;
  className?: string;
  icon?: ReactNode;
}

const variants = {
  primary:
    "gradient-brand text-white hover:shadow-[0_8px_28px_rgba(123,45,184,0.35)] hover:brightness-110",
  subtle:
    "bg-brand-primary/8 text-brand-primary hover:bg-brand-primary/15",
  white:
    "bg-white text-text-primary hover:text-white hover:shadow-[0_8px_24px_rgba(123,45,184,0.3)] group/btn",
  "outline-white":
    "border border-white/30 text-white hover:border-white/60 hover:bg-white/10",
  shimmer:
    "gradient-brand text-white relative overflow-hidden hover:shadow-[0_8px_28px_rgba(123,45,184,0.4)] hover:brightness-110",
} as const;

const sizes = {
  default: "px-6 py-3 text-[13px]",
  lg: "px-7 py-3.5 text-[13px]",
} as const;

export function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  external = false,
  className = "",
  icon,
}: ButtonProps) {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const btnRef = useRef<HTMLAnchorElement>(null);

  const handleClick = useCallback((e: React.MouseEvent) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 600);
  }, []);

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 relative overflow-hidden";
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {/* Ripple effect */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.4 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute rounded-full bg-white/30 pointer-events-none"
            style={{
              left: ripple.x - 5,
              top: ripple.y - 5,
              width: 10,
              height: 10,
            }}
          />
        ))}
      </AnimatePresence>
      {/* Shimmer overlay */}
      {variant === "shimmer" && (
        <span className="absolute inset-0 animate-shimmer pointer-events-none" />
      )}
      {/* White variant gets gradient on hover */}
      {variant === "white" && (
        <span className="absolute inset-0 gradient-brand opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100 pointer-events-none" />
      )}
      <span className="relative z-10 inline-flex items-center gap-2">
        {icon}
        {children}
      </span>
    </>
  );

  if (external) {
    return (
      <a
        ref={btnRef}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        onClick={handleClick}
      >
        {content}
      </a>
    );
  }

  return (
    <Link ref={btnRef} href={href} className={cls} onClick={handleClick}>
      {content}
    </Link>
  );
}

// Common icons
export function ArrowIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

export function WhatsAppIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

export function MapPinIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

export function ScrollTopIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
    </svg>
  );
}
