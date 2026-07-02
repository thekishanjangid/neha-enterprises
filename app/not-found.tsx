import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-bg-primary px-6 text-center">
      {/* Decorative gradient number */}
      <div className="relative">
        <span className="gradient-brand-text select-none font-serif text-[clamp(8rem,20vw,14rem)] font-bold leading-none">
          404
        </span>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-24 w-24 rounded-full bg-brand-primary/5 animate-pulse" />
        </div>
      </div>

      <h1 className="mt-4 font-serif text-[clamp(1.5rem,3vw,2.5rem)] font-normal text-text-primary">
        Page Not Found
      </h1>

      <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-text-secondary">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-full gradient-brand px-7 py-3.5 text-[13px] font-semibold text-white transition-all duration-300 hover:brightness-110 hover:shadow-[0_8px_24px_rgba(123,45,184,0.35)]"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          Go Home
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border-light px-7 py-3.5 text-[13px] font-semibold text-text-primary transition-all duration-300 hover:border-brand-primary hover:text-brand-primary"
        >
          View Services
        </Link>
      </div>

      {/* Bottom accent */}
      <div className="mt-16 accent-line-center" />
    </section>
  );
}
