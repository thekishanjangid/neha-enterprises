"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS, BUSINESS, WHATSAPP_MESSAGES, getWhatsAppUrl } from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const currentY = window.scrollY;
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
        <div className="mx-auto flex h-[64px] max-w-[1400px] items-center justify-between px-5 lg:px-12">
          <Link href="/" className="relative z-50">
            <Image
              src="/images/newlogo.png"
              alt="Neha Enterprises"
              width={200}
              height={56}
              className="h-12 w-auto"
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
            className="hidden items-center gap-2 rounded-full bg-brand-primary px-5 py-2 text-[12px] font-semibold text-white transition-all duration-300 hover:bg-brand-primary-hover hover:shadow-[0_4px_16px_rgba(43,58,232,0.3)] md:flex"
          >
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
                  className="rounded-full bg-brand-primary px-8 py-3 text-[13px] font-semibold text-white"
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
