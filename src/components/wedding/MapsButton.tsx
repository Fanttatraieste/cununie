export function MapsButton({ url, label = "Deschide în Google Maps" }: { url: string; label?: string }) {
  if (!url) {
    return (
      <span className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-full border border-border px-6 py-3 font-sans text-[0.7rem] uppercase tracking-[0.22em] opacity-50">
        <PinIcon /> Link Google Maps în curând
      </span>
    );
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-sans text-[0.7rem] uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-accent"
    >
      <PinIcon /> {label}
    </a>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
      <path
        d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function MapPlaceholder({ note }: { note: string }) {
  return (
    <div className="relative flex h-48 items-center justify-center overflow-hidden rounded-sm border border-border bg-secondary sm:h-full sm:min-h-[16rem]">
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />
      <p className="relative font-sans text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">{note}</p>
    </div>
  );
}
