import { useEffect, useRef, useState, type ReactNode } from "react";
import { LeafDivider } from "./Leaf";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {

          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[900ms] ease-out ${
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  tone = "default",
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  tone?: "default" | "muted" | "deep";
}) {
  const bg =
    tone === "muted" ? "bg-secondary" : tone === "deep" ? "bg-primary text-primary-foreground" : "bg-background";

  return (
    <section id={id} className={`${bg} scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28`}>
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          {eyebrow ? (
            <p className="font-sans text-[0.7rem] uppercase tracking-[0.35em] opacity-60">{eyebrow}</p>
          ) : null}
          <h2 className="mt-3 font-serif text-3xl font-light tracking-tight sm:text-5xl">{title}</h2>
          {subtitle ? <p className="mt-4 font-sans text-sm opacity-70 sm:text-base">{subtitle}</p> : null}
          <LeafDivider className="mt-8 opacity-80" />
        </Reveal>
        <div className="mt-12 sm:mt-16">{children}</div>
      </div>
    </section>
  );
}
