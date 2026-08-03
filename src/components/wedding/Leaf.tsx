export function LeafDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden="true">
      <span className="h-px w-16 bg-border sm:w-24" />
      <LeafMark className="h-5 w-5 text-primary/70" />
      <span className="h-px w-16 bg-border sm:w-24" />
    </div>
  );
}

export function LeafMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 22V9M12 9c0-3.5 2.5-6.5 8-7 .5 5.5-2.5 9-8 9Zm0 4c0-3-2-5.5-6.5-6C5 12 7.5 15 12 15Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
