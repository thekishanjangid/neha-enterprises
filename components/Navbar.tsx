"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS, BUSINESS, WHATSAPP_MESSAGES, getWhatsAppUrl } from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        // Scroll progress
        setScrollProgress(docHeight > 0 ? (currentY / docHeight) * 100 : 0);
        
        if (currentY < 80) {
          setVisible(false);
        } else if (currentY < lastScrollY.current) {
          setVisible(true);
        } else {
          setVisible(false);
        }
        lastScrollY.current = currentY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: "-100%" }}
        animate={{ y: visible || menuOpen ? 0 : "-100%" }}
        transition={{ duration: 0.4, ease }}
        className={`fixed top-0 left-0 right-0 z-50 ${
          menuOpen
            ? "bg-white shadow-none"
            : "bg-white/95 shadow-[0_1px_0_#E4E4EC] backdrop-blur-md"
        }`}
      >
        {/* Scroll progress bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden">
          <div
            className="h-full origin-left transition-none"
            style={{
              width: `${scrollProgress}%`,
              background: "linear-gradient(90deg, #2B3AE8, #7B2DB8, #E8247C)",
            }}
          />
        </div>

        <div className="mx-auto flex h-[64px] max-w-[1400px] items-center justify-between px-5 lg:px-12">
          <Link href="/" className="relative z-50">
            <Image
              src="/images/newlogo.png"
              alt="Neha Enterprises"
              width={260}
              height={72}
              className="h-16 w-auto"
              priority
            />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[13px] font-medium tracking-wide transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-brand-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full gradient-brand"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full gradient-brand px-5 py-2 text-[12px] font-semibold text-white transition-all duration-300 hover:brightness-110 hover:shadow-[0_4px_16px_rgba(123,45,184,0.35)] md:flex"
          >
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Get a Quote
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[1.5px] w-5 bg-text-primary transition-all duration-300 ${
                menuOpen ? "translate-y-[3.25px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-text-primary transition-all duration-300 ${
                menuOpen ? "-translate-y-[3.25px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-7">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.06, ease }}
                >
                  <Link
                    href={link.href}
                    className={`font-serif text-[2rem] font-normal ${
                      pathname === link.href ? "text-brand-primary" : "text-text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5, ease }}
                className="mt-6 flex flex-col items-center gap-4"
              >
                <a
                  href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full gradient-brand px-8 py-3 text-[13px] font-semibold text-white"
                >
                  Get a Quote
                </a>
                <a href={`tel:${BUSINESS.phone}`} className="text-sm text-text-tertiary">
                  {BUSINESS.phoneDisplay}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
