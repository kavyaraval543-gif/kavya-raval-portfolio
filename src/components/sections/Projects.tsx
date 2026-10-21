import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { GithubIcon } from "@/components/ui/BrandIcons";
import ProjectCover from "./ProjectCover";
import GalaxyCaseStudy from "./GalaxyCaseStudy";
import { featuredProject as yf, projects, type Project } from "@/lib/data";

function Label({ children, className = "" }: { children: string; className?: string }) {
  return (
    <p className={`font-mono text-[12px] font-medium uppercase tracking-[0.16em] ${className}`}>
      {children}
    </p>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-md border-[1.5px] border-ink bg-cream px-2.5 py-1 font-mono text-[11.5px] font-medium uppercase tracking-[0.08em]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function FeaturedCaseStudy() {
  return (
    <article className="overflow-hidden rounded-lg border-[3px] border-ink bg-paper shadow-hard-lg">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b-[3px] border-ink bg-ink px-5 py-3 text-paper md:px-8">
        <Label>{`${yf.number} — Featured case study`}</Label>
        <ul className="flex flex-wrap gap-2">
          {yf.status.map((s) => (
            <li
              key={s}
              className="rounded-md bg-butter px-2 py-0.5 font-mono text-[11.5px] font-medium uppercase tracking-[0.1em] text-ink"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="p-6 md:p-10 lg:col-span-6">
          <Label className="text-charcoal">{yf.type}</Label>
          <h3 className="mt-3 font-display text-6xl font-bold leading-[0.9] tracking-[-0.05em] md:text-8xl">
            {yf.name}
          </h3>
          <p className="mt-3 font-display text-xl font-medium text-charcoal md:text-2xl">{yf.subtitle}</p>

          <p className="mt-8 border-l-[6px] border-cobalt pl-5 text-xl font-medium leading-snug md:text-2xl">
            {yf.promise}
          </p>

          <div className="mt-8 rounded-md border-2 border-dashed border-ink bg-cream p-5">
            <Label className="text-cobalt">Problem hypothesis · not yet validated</Label>
            <p className="mt-2 text-[17px] leading-relaxed">{yf.problem}</p>
          </div>

          <p className="mt-6 text-[16px] leading-relaxed text-charcoal">{yf.context}</p>
        </div>

        <figure className="relative aspect-[4/3] border-t-[3px] border-ink bg-[#eef3f7] lg:col-span-6 lg:aspect-auto lg:border-t-0 lg:border-l-[3px]">
          <Image
            src={yf.gateImage.src}
            alt={yf.gateImage.alt}
            fill
            sizes="(min-width: 1024px) 600px, 100vw"
            className="object-cover object-[50%_70%]"
          />
          <figcaption className="absolute bottom-4 left-4 hidden rounded-md sm:block border-2 border-ink bg-paper px-2.5 py-1 font-mono text-[11.5px] font-medium uppercase tracking-[0.1em]">
            Illustration · the watchman scans the driver’s pass
          </figcaption>
        </figure>
      </div>

      <div className="border-t-[3px] border-ink bg-cobalt px-6 py-10 text-paper md:px-10 md:py-12">
        <Label className="text-butter">Reconstructed concept · not original screens</Label>
        <h4 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl">
          Customer books in three steps; the watchman decides in one tap.
        </h4>

        <ol
          tabIndex={0}
          aria-label="YardFlow prototype screens"
          className="-mx-6 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:-mx-10 md:px-10 lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0 lg:pb-0"
        >
          {yf.screens.map((s, i) => (
            <li key={s.src} className="w-[62%] shrink-0 snap-start sm:w-[36%] lg:w-auto">
              <div className="overflow-hidden rounded-xl border-2 border-ink bg-paper shadow-hard">
                <Image
                  src={s.src}
                  alt={`YardFlow prototype screen: ${s.title}`}
                  width={800}
                  height={1486}
                  sizes="(min-width: 1024px) 220px, (min-width: 640px) 36vw, 62vw"
                  className="h-auto w-full"
                />
              </div>
              <p className="mt-4 font-mono text-[11.5px] font-medium uppercase tracking-[0.14em] text-butter">
                {String(i + 1).padStart(2, "0")} · {s.who}
              </p>
              <p className="mt-1 font-display text-lg font-bold leading-snug">{s.title}</p>
              <p className="mt-1 text-[15px] leading-snug">{s.note}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="grid grid-cols-1 border-t-[3px] border-ink lg:grid-cols-12">
        <div className="p-6 md:p-10 lg:col-span-7 lg:border-r-[3px] lg:border-ink">
          <Label className="text-cobalt">MVP & prioritisation</Label>
          <h4 className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight md:text-3xl">
            The MVP makes the core loop trustworthy before adding convenience.
          </h4>
          <div className="mt-6 rounded-md border-2 border-ink bg-paper p-3 md:p-5">
            <Image
              src={yf.loopImage.src}
              alt={yf.loopImage.alt}
              width={yf.loopImage.width}
              height={yf.loopImage.height}
              sizes="(min-width: 1024px) 640px, 100vw"
              className="h-auto w-full"
            />
          </div>
          <p className="mt-6 text-[16.5px] leading-relaxed">{yf.prioritization}</p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <Label className="text-charcoal">Key design decisions</Label>
              <ul className="mt-3 space-y-3">
                {yf.decisions.map((d) => (
                  <li key={d} className="flex gap-3 text-[15.5px] leading-snug">
                    <span aria-hidden="true" className="mt-1.5 h-2.5 w-2.5 shrink-0 bg-cobalt" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-md border-2 border-ink bg-cream p-5">
              <Label className="text-cobalt">North star metric</Label>
              <p className="mt-2 font-display text-xl font-bold leading-tight">{yf.northStar.name}</p>
              <p className="mt-2 text-[14.5px] leading-relaxed text-charcoal">{yf.northStar.definition}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col border-t-[3px] border-ink lg:col-span-5 lg:border-t-0">
          <div className="border-b-[3px] border-ink p-6 md:p-10">
            <Label className="text-charcoal">Evidence gaps I state openly</Label>
            <ul className="mt-4 space-y-2.5">
              {yf.gaps.map((g) => (
                <li
                  key={g}
                  className="rounded-md border-2 border-dashed border-ink bg-cream px-4 py-2.5 text-[15.5px] font-medium"
                >
                  {g}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-1 flex-col p-6 md:p-10">
            <Label className="text-charcoal">What I learned</Label>
            <ul className="mt-4 space-y-3">
              {yf.lessons.map((l, i) => (
                <li key={l} className="flex gap-4 text-[16px] leading-snug">
                  <span className="font-mono text-[13px] font-medium text-cobalt">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {l}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-md border-2 border-ink bg-butter p-5">
              <Label>Next</Label>
              <p className="mt-2 text-[16px] font-medium leading-snug">{yf.next}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-ink px-6 py-5 md:px-10">
        <Chips items={yf.tools} />
      </div>
    </article>
  );
}

function ProjectCard({ project, wide = false }: { project: Project; wide?: boolean }) {
  const fixedHeight = project.cover.kind !== "image";
  return (
    <article
      className={`lift flex h-full overflow-hidden rounded-lg border-[3px] border-ink bg-paper shadow-hard ${
        wide ? "flex-col lg:flex-row" : "flex-col"
      }`}
    >
      <ProjectCover
        project={project}
        className={
          wide
            ? `${fixedHeight ? "h-72 lg:h-auto" : ""} shrink-0 border-b-[3px] border-ink lg:w-7/12 lg:border-r-[3px] lg:border-b-0`
            : `${fixedHeight ? "h-72" : ""} shrink-0 border-b-[3px] border-ink`
        }
      />
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-md border-2 border-ink bg-ink px-1.5 font-mono text-[13px] font-medium text-paper">
            {project.number}
          </span>
          <Label className="text-charcoal">{project.type}</Label>
        </div>
        <h3 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight md:text-3xl">
          {project.name}
        </h3>
        <p className="mt-3 text-[17px] leading-relaxed">{project.summary}</p>
        <ul className="mt-4 space-y-2">
          {project.points.map((p) => (
            <li key={p} className="flex gap-3 text-[15.5px] leading-snug text-charcoal">
              <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 bg-cobalt" />
              {p}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-col gap-5 pt-6">
          <Chips items={project.tools} />
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="press inline-flex items-center gap-2 self-start rounded-md border-2 border-ink bg-butter px-3.5 py-2 font-mono text-[12px] font-medium uppercase tracking-[0.08em] shadow-hard-sm"
            >
              <GithubIcon size={14} /> View on GitHub <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

const layout = [
  { span: "lg:col-span-7" },
  { span: "lg:col-span-5" },
  { span: "lg:col-span-5" },
  { span: "lg:col-span-7" },
  { span: "md:col-span-2 lg:col-span-12", wide: true },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          index="03"
          label="Projects"
          title={
            <>
              Selected work<span className="text-cobalt">.</span>
            </>
          }
          intro="Case studies and builds. Each one starts with a problem, and says plainly what was proven and what wasn't."
        />

        <Reveal className="mt-12 md:mt-16">
          <FeaturedCaseStudy />
        </Reveal>

        <Reveal className="mt-8">
          <GalaxyCaseStudy />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12">
          {projects.map((project, i) => (
            <Reveal key={project.number} className={layout[i]?.span}>
              <ProjectCard project={project} wide={layout[i]?.wide} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
