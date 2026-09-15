import Reveal from "./Reveal";

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      <div className="flex items-baseline gap-3 font-mono text-xs tracking-[0.2em] text-accent uppercase">
        <span>{index}</span>
        <span className="text-ivory-dim">/</span>
        <span className="text-ivory-dim">{eyebrow}</span>
      </div>
      <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-ivory text-balance sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ivory-dim">
          {description}
        </p>
      )}
    </Reveal>
  );
}
