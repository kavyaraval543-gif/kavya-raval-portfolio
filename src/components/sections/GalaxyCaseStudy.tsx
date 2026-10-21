"use client";

import { KeyboardEvent, useRef, useState } from "react";
import Image from "next/image";
import { galaxyProject as gx } from "@/lib/data";

function Label({ children, className = "" }: { children: string; className?: string }) {
  return (
    <p className={`font-mono text-[12px] font-medium uppercase tracking-[0.16em] ${className}`}>
      {children}
    </p>
  );
}

export default function GalaxyCaseStudy() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const screen = gx.screens[active];

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const last = gx.screens.length - 1;
    const next =
      e.key === "ArrowRight"
        ? active === last ? 0 : active + 1
        : e.key === "ArrowLeft"
          ? active === 0 ? last : active - 1
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? last
              : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <article className="overflow-hidden rounded-lg border-[3px] border-ink bg-paper shadow-hard-lg">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b-[3px] border-ink bg-ink px-5 py-3 text-paper md:px-8">
        <Label>{`${gx.number} — Internship build`}</Label>
        <span className="rounded-md bg-butter px-2 py-0.5 font-mono text-[11.5px] font-medium uppercase tracking-[0.1em] text-ink">
          {gx.status}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 p-6 md:p-10 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <Label className="text-charcoal">{gx.type}</Label>
          <h3 className="mt-3 font-display text-5xl font-bold leading-[0.92] tracking-[-0.045em] md:text-7xl">
            {gx.name}
          </h3>
          <p className="mt-3 font-display text-xl font-medium text-charcoal md:text-2xl">{gx.subtitle}</p>
        </div>
        <p className="border-l-[6px] border-cobalt pl-5 text-lg leading-relaxed lg:col-span-5 lg:self-end">
          {gx.summary}
        </p>
      </div>

      <div className="border-t-[3px] border-ink bg-cobalt px-4 py-8 sm:px-6 md:px-10 md:py-10">
        <div
          role="tablist"
          aria-label="Galaxy CRM screens"
          onKeyDown={onKeyDown}
          className="flex flex-wrap gap-2.5"
        >
          {gx.screens.map((s, i) => {
            const selected = i === active;
            return (
              <button
                key={s.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`gx-tab-${s.id}`}
                aria-selected={selected}
                aria-controls="gx-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                className={`rounded-md border-2 border-ink px-3 py-1.5 font-mono text-[12px] font-medium uppercase tracking-[0.1em] text-ink transition-[transform,box-shadow] duration-150 ${
                  selected
                    ? "-translate-x-0.5 -translate-y-0.5 bg-butter shadow-hard-sm"
                    : "bg-paper hover:-translate-y-0.5"
                }`}
              >
                {s.label}
              </button>
            );
          })}
        </div>

        <figure
          id="gx-panel"
          role="tabpanel"
          aria-labelledby={`gx-tab-${screen.id}`}
          className="mt-6"
        >
          <div className="overflow-hidden rounded-lg border-[3px] border-ink bg-ink shadow-hard">
            <div className="flex items-center gap-2 border-b-2 border-ink bg-paper px-3 py-2" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full border-[1.5px] border-ink bg-coral" />
              <span className="h-2.5 w-2.5 rounded-full border-[1.5px] border-ink bg-butter" />
              <span className="h-2.5 w-2.5 rounded-full border-[1.5px] border-ink bg-mint" />
              <span className="ml-2 truncate font-mono text-[11.5px] uppercase tracking-[0.1em] text-charcoal">
                Galaxy CRM / {screen.label}
              </span>
            </div>
            <a href={screen.src} target="_blank" rel="noopener noreferrer" className="block">
              <Image
                key={screen.src}
                src={screen.src}
                alt={`Galaxy Home Automation CRM, ${screen.label} screen (opens full size)`}
                width={screen.width}
                height={screen.height}
                sizes="(min-width: 1280px) 1100px, 100vw"
                className="h-auto w-full"
              />
            </a>
          </div>
          <figcaption className="mt-5 flex flex-col gap-3 text-paper sm:flex-row sm:items-start sm:justify-between sm:gap-8">
            <p className="max-w-2xl text-[17px] leading-relaxed">
              <strong className="font-display font-bold">{screen.label}.</strong> {screen.note}
            </p>
            <p className="shrink-0 font-mono text-[11.5px] font-medium uppercase tracking-[0.12em] text-butter">
              {gx.dataNote}
            </p>
          </figcaption>
        </figure>
      </div>

      <div className="grid grid-cols-1 border-t-[3px] border-ink md:grid-cols-2">
        <div className="p-6 md:border-r-[3px] md:border-ink md:p-10">
          <Label className="text-charcoal">The problem</Label>
          <ul className="mt-4 space-y-2.5">
            {gx.problem.map((p) => (
              <li
                key={p}
                className="rounded-md border-2 border-dashed border-ink bg-cream px-4 py-2.5 text-[15.5px] font-medium"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t-[3px] border-ink p-6 md:border-t-0 md:p-10">
          <Label className="text-charcoal">What I did</Label>
          <ul className="mt-4 space-y-3">
            {gx.contributions.map((c, i) => (
              <li key={c} className="flex gap-4 text-[16px] leading-snug">
                <span className="font-mono text-[13px] font-medium text-cobalt">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t-2 border-ink px-6 py-5 md:px-10">
        <ul className="flex flex-wrap gap-2">
          {gx.tools.map((t) => (
            <li
              key={t}
              className="rounded-md border-[1.5px] border-ink bg-cream px-2.5 py-1 font-mono text-[11.5px] font-medium uppercase tracking-[0.08em]"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
