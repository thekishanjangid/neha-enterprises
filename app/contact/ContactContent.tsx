"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BUSINESS, WHATSAPP_MESSAGES, getWhatsAppUrl, SERVICES } from "@/lib/constants";
import { Reveal } from "@/components/ui/motion";
import { WhatsAppIcon, PhoneIcon, MapPinIcon } from "@/components/ui/button";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^[+]?[\d\s-]{10,}$/.test(formData.phone.trim())) newErrors.phone = "Enter a valid phone number";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const msg = `Hi Neha Enterprises,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service || "Not specified"}\nMessage: ${formData.message || "N/A"}\n\nSent from website contact form.`;
    window.open(getWhatsAppUrl(msg), "_blank");
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero with background image */}
      <section className="relative flex h-[50vh] min-h-[360px] items-center justify-center overflow-hidden pt-[72px]">
        <Image
          src="/images/work/exterior/front-elevation.jpg"
          alt="Contact Neha Enterprises"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70" />
        <div className="grain-overlay absolute inset-0 pointer-events-none" />
        <div className="relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="mb-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-brand-primary"
          >
            Get In Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal text-white"
          >
            Contact <span className="italic text-brand-primary">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease }}
            className="mt-3 text-[14px] text-white/50"
          >
            We respond within 2 hours during business hours
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left — Form */}
            <Reveal>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal text-text-primary">
                Let&apos;s Discuss Your <span className="italic text-brand-primary">Project</span>
              </h2>
              <span className="accent-line mt-4" />

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease }}
                    className="mt-8 rounded-xl border border-brand-primary/20 bg-gradient-to-br from-brand-primary/5 to-brand-purple/5 p-8 text-center"
                  >
                    {/* Success checkmark */}
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-primary/10">
                      <motion.svg
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="h-8 w-8 text-brand-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <motion.path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                        />
                      </motion.svg>
                    </div>
                    <p className="font-serif text-xl text-text-primary">Thank You!</p>
                    <p className="mt-2 text-sm text-text-secondary">
                      Your enquiry has been sent via WhatsApp. We&apos;ll get back to you shortly.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ name: "", phone: "", service: "", message: "" }); }}
                      className="mt-4 text-[13px] font-semibold text-brand-primary hover:underline"
                    >
                      Send another enquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-5"
                  >
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.1em] text-text-tertiary">
                        Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => { setFormData({ ...formData, name: e.target.value }); setErrors({ ...errors, name: "" }); }}
                        className={`w-full rounded-lg border ${errors.name ? "border-brand-secondary" : "border-border-light"} bg-transparent px-4 py-3 text-sm text-text-primary transition-colors placeholder:text-text-tertiary focus:border-brand-primary focus:outline-none`}
                        placeholder="Your full name"
                      />
                      {errors.name && <p className="mt-1 text-[12px] text-brand-secondary">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.1em] text-text-tertiary">
                        Phone *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        inputMode="tel"
                        value={formData.phone}
                        onChange={(e) => { setFormData({ ...formData, phone: e.target.value }); setErrors({ ...errors, phone: "" }); }}
                        className={`w-full rounded-lg border ${errors.phone ? "border-brand-secondary" : "border-border-light"} bg-transparent px-4 py-3 text-sm text-text-primary transition-colors placeholder:text-text-tertiary focus:border-brand-primary focus:outline-none`}
                        placeholder="+91 98765 43210"
                      />
                      {errors.phone && <p className="mt-1 text-[12px] text-brand-secondary">{errors.phone}</p>}
                    </div>

                    <div>
                      <label htmlFor="service" className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.1em] text-text-tertiary">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-lg border border-border-light bg-transparent px-4 py-3 text-sm text-text-primary transition-colors focus:border-brand-primary focus:outline-none"
                      >
                        <option value="">Select a service</option>
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.1em] text-text-tertiary">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full resize-none rounded-lg border border-border-light bg-transparent px-4 py-3 text-sm text-text-primary transition-colors placeholder:text-text-tertiary focus:border-brand-primary focus:outline-none"
                        placeholder="Tell us about your project (optional)"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-full gradient-brand py-3.5 text-[14px] font-semibold text-white transition-all duration-200 hover:brightness-110 hover:shadow-[0_4px_16px_rgba(123,45,184,0.35)] sm:w-auto sm:px-10"
                    >
                      Send Enquiry
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

              <div className="mt-8 flex flex-col gap-3 border-t border-border-light pt-8">
                <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-text-tertiary">
                  Or reach us directly
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={getWhatsAppUrl(WHATSAPP_MESSAGES.contact)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border-light px-5 py-2.5 text-[13px] font-semibold text-text-primary transition-colors hover:border-brand-primary hover:text-brand-primary"
                  >
                    <WhatsAppIcon />
                    WhatsApp
                  </a>
                  <a
                    href={`tel:${BUSINESS.phone}`}
                    className="inline-flex items-center gap-2 rounded-full border border-border-light px-5 py-2.5 text-[13px] font-semibold text-text-primary transition-colors hover:border-brand-primary hover:text-brand-primary"
                  >
                    <PhoneIcon />
                    Call
                  </a>
                  <a
                    href={BUSINESS.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border-light px-5 py-2.5 text-[13px] font-semibold text-text-primary transition-colors hover:border-brand-primary hover:text-brand-primary"
                  >
                    <MapPinIcon />
                    Directions
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Right — Map + Info */}
            <Reveal delay={0.2}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-bg-secondary">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.5!2d75.7185421!3d26.8932885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db50bc2f4e23d%3A0x6e206ae4887e956e!2sNeha%20Enterprises%20Aluminium%20And%20Glass%20Work%20Dhawas!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Neha Enterprises Location"
                  className="absolute inset-0"
                />
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-border-light p-5 transition-shadow duration-300 hover:shadow-[0_4px_20px_rgba(43,58,232,0.06)]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-text-tertiary">Address</p>
                  <p className="mt-2 text-sm leading-relaxed text-text-primary">{BUSINESS.address}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-border-light p-5 transition-shadow duration-300 hover:shadow-[0_4px_20px_rgba(43,58,232,0.06)]">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-text-tertiary">Phone</p>
                    <a href={`tel:${BUSINESS.phone}`} className="mt-2 block text-sm text-text-primary transition-colors hover:text-brand-primary">
                      {BUSINESS.phoneDisplay}
                    </a>
                  </div>
                  <div className="rounded-xl border border-border-light p-5 transition-shadow duration-300 hover:shadow-[0_4px_20px_rgba(43,58,232,0.06)]">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-text-tertiary">Email</p>
                    <a href={`mailto:${BUSINESS.email}`} className="mt-2 block truncate text-sm text-text-primary transition-colors hover:text-brand-primary">
                      {BUSINESS.email}
                    </a>
                  </div>
                </div>
                <div className="rounded-xl border border-border-light p-5 transition-shadow duration-300 hover:shadow-[0_4px_20px_rgba(43,58,232,0.06)]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-text-tertiary">Working Hours</p>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <p className="text-sm text-text-primary">{BUSINESS.hours}</p>
                  </div>
                  <p className="mt-1 text-xs text-text-tertiary">Sunday: Closed</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
