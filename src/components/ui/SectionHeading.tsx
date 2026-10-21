import { ReactNode } from "react";
import Reveal from "./Reveal";

export function SectionLabel({
  index,
  label,
  inverse = false,
}: {
  index: string;
  label: string;
  inverse?: boolean;
}) {
  return (
    <p className="flex items-center gap-3 font-mono text-[13px] font-medium uppercase tracking-[0.16em]">
      <span
        className={`inline-flex h-8 min-w-8 items-center justify-center border-2 border-ink px-1.5 ${
          inverse ? "bg-butter text-ink" : "bg-cobalt text-paper"
        }`}
      >
        {index}
      </span>
      <span className={inverse ? "text-paper" : "text-ink"}>{label}</span>
      <span
        aria-hidden="true"
        className={`h-0.5 w-16 sm:w-24 ${inverse ? "bg-paper" : "bg-ink"}`}
      />
    </p>
  );
}

export default function SectionHeading({
  index,
  label,
  title,
  intro,
  inverse = false,
  className = "",
}: {
  index: string;
  label: string;
  title: ReactNode;
  intro?: string;
  inverse?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <SectionLabel index={index} label={label} inverse={inverse} />
      <h2
        className={`isolate mt-6 text-balance font-display text-[2.6rem] font-bold leading-[0.95] tracking-[-0.035em] sm:text-6xl lg:text-7xl ${
          inverse ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 max-w-2xl text-lg leading-relaxed sm:text-xl ${
            inverse ? "text-paper" : "text-charcoal"
          }`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
