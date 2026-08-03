import { useEffect, useState } from "react";

function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  return {
    zile: Math.floor(ms / 86400000),
    ore: Math.floor(ms / 3600000) % 24,
    minute: Math.floor(ms / 60000) % 60,
    secunde: Math.floor(ms / 1000) % 60,
  };
}

export function Countdown({ targetISO }: { targetISO: string }) {
  const target = new Date(targetISO).getTime();
  const [left, setLeft] = useState<ReturnType<typeof diff> | null>(null);

  useEffect(() => {
    setLeft(diff(target));
    const t = setInterval(() => setLeft(diff(target)), 1000);
    return () => clearInterval(t);
  }, [target]);

  const entries = Object.entries(left ?? { zile: 0, ore: 0, minute: 0, secunde: 0 });

  return (
    <div className="flex items-start justify-center gap-3 sm:gap-8" aria-live="off">
      {entries.map(([label, value]) => (
        <div key={label} className="min-w-[3.75rem] text-center sm:min-w-[5rem]">
          <div className="font-serif text-3xl font-light tabular-nums sm:text-5xl">
            {left === null ? "—" : String(value).padStart(2, "0")}
          </div>
          <div className="mt-2 font-sans text-[0.6rem] uppercase tracking-[0.28em] opacity-70 sm:text-[0.65rem]">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
