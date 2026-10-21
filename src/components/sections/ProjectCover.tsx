import Image from "next/image";
import type { Project, ProjectCover as Cover } from "@/lib/data";

const toneBg: Record<Project["tone"], string> = {
  mint: "bg-mint",
  coral: "bg-coral",
  butter: "bg-butter",
  paper: "bg-cream",
  cobalt: "bg-cobalt",
};

function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-md border-2 border-ink bg-paper px-2 py-1 font-mono text-[11.5px] font-medium uppercase tracking-[0.12em] text-ink">
      {children}
    </span>
  );
}

function CoverBody({ cover, tone }: { cover: Cover; tone: Project["tone"] }) {
  switch (cover.kind) {
    case "bars": {
      const max = Math.max(...cover.bars.map((b) => b.value));
      const fill = tone === "coral" ? "bg-ink" : "bg-cobalt";
      return (
        <div className="flex h-full flex-col justify-center p-6">
          <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.14em] text-ink">
            {cover.title}
          </p>
          <div className="mt-5 grid grid-cols-[max-content_1fr] items-center gap-x-4 gap-y-3.5">
            {cover.bars.map((bar) => (
              <div key={bar.label} className="contents">
                <span className="text-[14px] font-medium text-ink">{bar.label}</span>
                <span className="flex items-center gap-3 border-l-2 border-ink">
                  <span
                    className={`h-8 rounded-r-[4px] border-2 border-l-0 border-ink ${fill}`}
                    style={{ width: `${Math.max(4, (bar.value / max) * 78)}%` }}
                  />
                  <span className="font-display text-xl font-bold text-ink">{bar.display}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    }
    case "screens":
      return (
        <div className="flex h-full flex-col items-center justify-center gap-4 p-6">
          <div className="grid grid-cols-5 gap-2">
            {Array.from({ length: cover.count }, (_, i) => (
              <span
                key={i}
                className="relative block h-[52px] w-[30px] rounded-[6px] border-2 border-ink bg-paper"
              >
                <span className="absolute inset-x-1 top-1 h-1.5 rounded-sm bg-ink" />
                <span className="absolute inset-x-1 top-3.5 h-3 rounded-sm bg-ink/15" />
                <span className="absolute inset-x-1 bottom-1 h-1.5 rounded-sm bg-cobalt" />
              </span>
            ))}
          </div>
          <Tag>{cover.label}</Tag>
        </div>
      );
    case "pipeline":
      return (
        <div className="flex h-full flex-col justify-center gap-5 p-6">
          <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-2.5">
            {cover.steps.map((step, i) => (
              <li key={step} className="flex items-center gap-1.5">
                <span
                  className={`rounded-md border-2 border-ink px-2.5 py-1.5 text-[13px] font-semibold leading-none text-ink ${
                    step === cover.highlight ? "bg-butter shadow-hard-sm" : "bg-paper"
                  }`}
                >
                  {step}
                </span>
                {i < cover.steps.length - 1 && (
                  <span className="font-display text-lg font-bold text-paper">→</span>
                )}
              </li>
            ))}
          </ol>
          <p className="max-w-xs text-[14px] font-medium leading-snug text-paper">
            Every trade has to pass the risk engine. Nothing bypasses it.
          </p>
          <div className="self-start">
            <Tag>{cover.label}</Tag>
          </div>
        </div>
      );
    case "image":
      return (
        <div className="flex h-full items-center justify-center p-5 md:p-6">
          <Image
            src={cover.src}
            alt=""
            width={cover.width}
            height={cover.height}
            sizes="(min-width: 1024px) 640px, 100vw"
            className="h-auto w-full rounded-md border-2 border-ink bg-paper shadow-hard-sm"
          />
        </div>
      );
  }
}

export default function ProjectCover({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  return (
    <div role="img" aria-label={project.coverAlt} className={`${toneBg[project.tone]} ${className}`}>
      <div aria-hidden="true" className="h-full">
        <CoverBody cover={project.cover} tone={project.tone} />
      </div>
    </div>
  );
}
