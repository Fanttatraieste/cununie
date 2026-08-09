import { createFileRoute } from "@tanstack/react-router";

import heroUs from "@/assets/hero-us.jpeg";
import casaLorelin from "@/assets/casa-lorelin.jpg";
import { Countdown } from "@/components/wedding/Countdown";
import { LeafDivider, LeafMark } from "@/components/wedding/Leaf";
import { MapsButton } from "@/components/wedding/MapsButton";
import { Reveal, Section } from "@/components/wedding/Section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  ceremony,
  ceremonyDateISO,
  couple,
  drinksMenu,
  foodMenu,
  navLinks,
  restaurantRecommendations,
  schedule,
  usefulInfo,
  weekend,
} from "@/content/wedding";

type DrinkItem = string | { label: string; subItems?: string[] };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vlad & Iulia — Cununia civilă, 21 august" },
      {
        name: "description",
        content:
          "Vlad & Iulia — Officially stuck together. Cununia civilă pe 21 august, ora 11:30, la Primăria Florești, urmată de un weekend la Casa Lorelin.",
      },
      {
        property: "og:title",
        content: "Vlad & Iulia — Officially stuck together",
      },
      {
        property: "og:description",
        content:
          "Cununia civilă, 21 august, 11:30, Primăria Florești. Weekend la Casa Lorelin, 21–23 august.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Nav() {
  return (
    <nav className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center gap-4 overflow-x-auto px-5 py-3 sm:justify-center sm:px-8">
        {navLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="shrink-0 font-sans text-sm uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-primary"
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

function Index() {
  return (
    <main>
      {/* HERO */}
      <header className="hero-header relative flex flex-col items-center justify-center overflow-hidden px-4 py-8 text-center sm:min-h-[100svh] sm:px-5 sm:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroUs}
            alt="Vlad și Iulia"
            width={1920}
            height={1280}
            className="hero-image absolute inset-x-0 w-full object-cover object-center contrast-[1.05] saturate-[0.85] sm:inset-0 sm:h-full sm:w-full"
          />
        </div>
        <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.18),rgba(0,0,0,0.62))]"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center justify-center text-white sm:justify-center">
          <p className="font-sans text-[0.7rem] uppercase tracking-[0.3em] text-white/80 sm:text-sm sm:tracking-[0.35em]">
            21 august
          </p>
          <h1 className="mt-4 font-serif text-4xl font-light leading-[1.05] tracking-tight text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.7)] sm:mt-6 sm:text-7xl md:text-8xl">
            {couple.names}
          </h1>
          <p className="mt-3 font-serif text-base italic text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)] sm:mt-5 sm:text-2xl">
            {couple.motto}
          </p>

          <div className="mt-6 sm:mt-10">
            <Countdown targetISO={ceremonyDateISO} />
          </div>

          <div className="mt-6 sm:hidden">
            <a
              href="#cununie"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-4 py-2.5 font-sans text-[0.7rem] uppercase tracking-[0.24em] text-white/90 backdrop-blur-sm transition hover:bg-white/20"
            >
              Vezi detalii
            </a>
          </div>

          <dl className="mt-8 hidden grid-cols-1 gap-6 border-y border-border/70 py-8 sm:mt-12 sm:grid sm:grid-cols-3">
            {[
              { k: "Data", v: ceremony.date },
              { k: "Ora", v: ceremony.time },
              { k: "Locația", v: ceremony.location },
            ].map((i) => (
              <div key={i.k}>
                <dt className="font-sans text-sm uppercase tracking-[0.3em] text-white/70">
                  {i.k}
                </dt>
                <dd className="mt-2 font-serif text-2xl font-light text-white">
                  {i.v}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 hidden sm:block">
            <MapsButton url={ceremony.mapsUrl} />
          </div>
        </div>
      </header>

      <Nav />

      {/* CUNUNIA CIVILĂ */}
      <Section id="cununie" title={ceremony.title}>
        <div className="grid gap-8 sm:grid-cols-2">
          <Reveal>
            <article className="flex h-full flex-col justify-between border border-border bg-card p-8 sm:p-10">
              <div>
                <div className="flex items-center gap-2">
                  <LeafMark className="h-6 w-6 text-primary/70" />
                  <span className="font-sans text-sm uppercase tracking-[0.28em] text-muted-foreground">
                    Locație:
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-3xl font-light">
                  {ceremony.location}
                </h3>
                <p className="mt-2 font-sans text-base text-muted-foreground">
                  {ceremony.address}
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    { k: "Data", v: ceremony.date },
                    { k: "Ora", v: ceremony.time },
                  ].map((i) => (
                    <div
                      key={i.k}
                      className="flex items-baseline justify-between border-b border-border pb-3"
                    >
                      <span className="font-sans text-sm uppercase tracking-[0.28em] text-muted-foreground">
                        {i.k}
                      </span>
                      <span className="font-serif text-xl">{i.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <MapsButton url={ceremony.mapsUrl} />
            {ceremony.wazeUrl ? (
              <MapsButton url={ceremony.wazeUrl} label="Deschide în Waze" />
            ) : null}
          </div>
        </div>
      </Section>

      {/* CASA LORELIN */}
      <Section id="weekend" title={weekend.title} tone="muted">
        <div className="grid gap-8 sm:grid-cols-2">
          <Reveal>
            <img
              src={casaLorelin}
              alt="Casa Lorelin, cabană din lemn înconjurată de pădure"
              width={1280}
              height={960}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <article className="flex h-full flex-col justify-between border border-border bg-card p-8 sm:p-10">
              <div>
                <div className="flex items-center gap-2">
                  <LeafMark className="h-6 w-6 text-primary/70" />
                  <span className="font-sans text-sm uppercase tracking-[0.28em] text-muted-foreground">
                    Locație:
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-3xl font-light">
                  {weekend.location}
                </h3>
                <p className="mt-2 font-sans text-base text-muted-foreground">
                  Calațele, județul Cluj
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    { k: "Data", v: weekend.period },
                    {
                      k: "Ora",
                      v: "14:00 (vineri) — 11:00 (duminică)",
                    },
                  ].map((i) => (
                    <div
                      key={i.k}
                      className="flex items-baseline justify-between border-b border-border pb-3"
                    >
                      <span className="font-sans text-sm uppercase tracking-[0.28em] text-muted-foreground">
                        {i.k}
                      </span>
                      <span className="font-serif text-xl">{i.v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <MapsButton url={weekend.mapsUrl} />
                {weekend.wazeUrl ? (
                  <MapsButton url={weekend.wazeUrl} label="Deschide în Waze" />
                ) : null}
                {weekend.touristUrl ? (
                  <a
                    href={weekend.touristUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-border px-5 py-3 font-sans text-sm uppercase tracking-[0.18em] text-muted-foreground transition hover:bg-secondary/70"
                  >
                    Vezi fotografii Casa Lorelin
                  </a>
                ) : null}
              </div>
            </article>
          </Reveal>
        </div>
      </Section>

      {/* PROGRAM */}
      <Section id="program" title="Program">
        <div className="space-y-14">
          {schedule.map((day, di) => (
            <Reveal key={day.label} delay={di * 80}>
              <div>
                <div className="flex items-baseline gap-4">
                  <h3 className="font-serif text-2xl font-light sm:text-3xl">
                    {day.label}
                  </h3>
                  <span className="h-px flex-1 bg-border" />
                  <span className="font-sans text-sm uppercase tracking-[0.28em] text-muted-foreground">
                    {day.date}
                  </span>
                </div>
                <ol className="mt-8 border-l border-border pl-6 sm:pl-10">
                  {day.items.map((item) => (
                    <li
                      key={item.time + item.title}
                      className="relative pb-8 last:pb-0"
                    >
                      <span className="absolute -left-[1.9rem] top-2 h-2 w-2 rounded-full bg-accent sm:-left-[2.65rem]" />
                      <p className="font-sans text-sm uppercase tracking-[0.28em] text-muted-foreground">
                        {item.time}
                      </p>
                      <p className="mt-1 font-serif text-2xl font-light">
                        {item.title}
                      </p>
                    </li>
                  ))}
                </ol>
                {day.extra ? (
                  <p className="mt-2 inline-flex items-center gap-2 border border-border bg-secondary px-5 py-3 font-serif text-lg italic">
                    <LeafMark className="h-4 w-4 text-accent" />
                    {day.extra}
                  </p>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* MENIU */}
      <Section id="meniu" title="Meniu" tone="muted">
        <div className="grid gap-6 sm:grid-cols-2">
          {foodMenu.map((meal, i) => (
            <Reveal key={meal.name} delay={i * 80}>
              <article className="h-full border border-border bg-card p-8">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-2xl font-light">
                    {meal.name}
                  </h3>
                </div>
                <LeafDivider className="mt-5" />
                <div className="mt-6 space-y-4">
                  {meal.servedByCasaLorelin ? (
                    <div className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 font-sans text-[0.7rem] uppercase tracking-[0.24em] text-accent">
                      Servit de Casa Lorelin
                    </div>
                  ) : (
                    <div className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 font-sans text-[0.7rem] uppercase tracking-[0.24em] text-accent">
                      Servit de noi
                    </div>
                  )}
                  {meal.items && meal.items.length > 0 ? (
                    <ul className="flex flex-wrap gap-3">
                      {meal.items.map((it, index) => (
                        <li
                          key={`${meal.name}-${index}`}
                          className="rounded-full border border-border bg-background/70 px-4 py-2 font-serif text-base font-light"
                        >
                          {typeof it === "string" ? it : it.label}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="font-sans text-sm italic text-muted-foreground">
                      Preparatele vor fi adăugate în curând.
                    </p>
                  )}
                  {meal.notes && meal.notes.length > 0 ? (
                    <div className="rounded-2xl border border-dashed border-border/70 bg-background/70 px-4 py-3">
                      <ul className="space-y-2">
                        {meal.notes.map((note) => (
                          <li
                            key={note}
                            className="font-serif text-base italic leading-relaxed text-muted-foreground"
                          >
                            {note}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* BĂUTURI */}
      <Section id="bauturi" title="Meniu băuturi">
        <div className="mx-auto max-w-3xl border border-border bg-card px-6 py-10 sm:px-14 sm:py-14">
          {drinksMenu.map((cat, i) => (
            <Reveal key={cat.name} delay={i * 60}>
              <div className="mb-10 last:mb-0">
                <h3 className="text-center font-sans text-sm uppercase tracking-[0.35em] text-accent">
                  {cat.name}
                </h3>
                {cat.subSections && cat.subSections.length > 0 ? (
                  <div className="mt-6 space-y-6">
                    {cat.subSections.map((section) => {
                      const sectionItems = (section.items ?? []) as DrinkItem[];

                      return (
                        <div key={section.name}>
                          <h4 className="font-sans text-xs uppercase tracking-[0.3em] text-muted-foreground">
                            {section.name}
                          </h4>
                          <ul className="mt-3 space-y-3">
                            {sectionItems.map((it: DrinkItem, k: number) => {
                              if (typeof it === "string") {
                                return (
                                  <li
                                    key={`${section.name}-${k}`}
                                    className="flex items-center gap-3"
                                  >
                                    <span className="shrink-0 font-serif text-lg font-light">
                                      {it}
                                    </span>
                                    <span className="min-w-0 flex-1 overflow-hidden whitespace-nowrap text-ellipsis">
                                      <span className="inline-block w-full border-b border-dotted border-border" />
                                    </span>
                                  </li>
                                );
                              }

                              return (
                                <li
                                  key={`${section.name}-${k}`}
                                  className="flex flex-wrap items-center gap-x-3 gap-y-2"
                                >
                                  <span className="shrink-0 font-serif text-lg font-light">
                                    {it.label}
                                  </span>
                                  <span className="min-w-[3rem] flex-1 self-end sm:min-w-[6rem]">
                                    <span className="block w-full border-b border-dotted border-border" />
                                  </span>
                                  <span className="w-full font-serif text-lg font-light leading-snug sm:ml-auto sm:w-auto sm:text-right">
                                    {it.subItems?.join(" / ")}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <ul className="mt-5 space-y-3">
                    {(cat.items ?? []).map((it: DrinkItem, k: number) => {
                      if (typeof it === "string") {
                        return (
                          <li
                            key={`${cat.name}-${k}`}
                            className="flex items-center gap-3"
                          >
                            <span className="shrink-0 font-serif text-lg font-light">
                              {it}
                            </span>
                            <span className="min-w-0 flex-1 overflow-hidden whitespace-nowrap text-ellipsis">
                              <span className="inline-block w-full border-b border-dotted border-border" />
                            </span>
                          </li>
                        );
                      }

                      return (
                        <li
                          key={`${cat.name}-${k}`}
                          className="flex flex-wrap items-center gap-x-3 gap-y-2"
                        >
                          <span className="shrink-0 font-serif text-lg font-light">
                            {it.label}
                          </span>
                          <span className="min-w-[3rem] flex-1 self-end sm:min-w-[6rem]">
                            <span className="block w-full border-b border-dotted border-border" />
                          </span>
                          <span className="w-full font-serif text-lg font-light leading-snug sm:ml-auto sm:w-auto sm:text-right">
                            {it.subItems?.join(" / ")}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* INFORMAȚII UTILE */}
      <Section
        id="info"
        eyebrow="Bine de știut"
        title="Informații și recomandări"
        tone="muted"
      >
        <div className="grid gap-6 lg:grid-cols-[1.2fr,_0.8fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            {usefulInfo.map((info, i) => (
              <Reveal key={info.title} delay={i * 80}>
                <article className="h-full border border-border bg-card p-8">
                  <LeafMark className="h-5 w-5 text-accent" />
                  <h3 className="mt-5 font-serif text-2xl font-light">
                    {info.title}
                  </h3>
                  {Array.isArray(info.body) ? (
                    <ul className="mt-3 space-y-2">
                      {info.body.map((item, itemIndex) => (
                        <li
                          key={`${info.title}-${itemIndex}`}
                          className="flex gap-2 font-sans text-base leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-3 font-sans text-base leading-relaxed text-muted-foreground">
                      {info.body}
                    </p>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="h-full rounded-3xl border border-border bg-card p-8">
              <div className="flex items-center gap-2">
                <LeafMark className="h-5 w-5 text-accent" />
                <h3 className="font-serif text-2xl font-light">
                  Recomandări restaurante
                </h3>
              </div>
              <div className="mt-6 space-y-4">
                {restaurantRecommendations.map((rest) => (
                  <article
                    key={rest.name}
                    className="rounded-3xl border border-border bg-background p-5 shadow-sm"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h4 className="font-serif text-xl font-light">
                          {rest.name}
                        </h4>
                        <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">
                          {rest.description}
                        </p>
                      </div>
                      <a
                        href={rest.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-border bg-primary/5 px-4 py-2 text-sm font-medium tracking-[0.18em] text-primary transition hover:bg-primary/10"
                      >
                        Harta
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <footer className="bg-primary px-5 py-20 text-center text-primary-foreground">
        <LeafMark className="mx-auto h-6 w-6 opacity-70" />
        <p className="mt-6 font-serif text-4xl font-light">{couple.names}</p>
        <p className="mt-3 font-serif text-lg italic opacity-80">
          {couple.motto}
        </p>
        <p className="mt-8 font-sans text-sm uppercase tracking-[0.3em] opacity-60">
          21 august · Primăria Florești
        </p>
      </footer>
    </main>
  );
}
