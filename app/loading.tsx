export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-primary">
      <div className="flex flex-col items-center gap-4">
        {/* Brand gradient spinner */}
        <div className="relative h-10 w-10">
          <div className="absolute inset-0 rounded-full border-2 border-border-light" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-brand-primary animate-spin" style={{ animationDuration: "0.8s" }} />
        </div>
        <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-text-tertiary">
          Loading
        </p>
      </div>
    </div>
  );
}
