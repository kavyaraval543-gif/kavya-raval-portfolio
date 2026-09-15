import { ReactNode } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import EraPhoto from "@/components/visuals/EraPhoto";
import { projects, type Project } from "@/lib/data";

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-1.5 py-4 sm:grid-cols-[130px_1fr] sm:gap-6 sm:py-5">
      <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-ivory-faint">
        {label}
      </dt>
      <dd className="text-[14.5px] leading-relaxed text-ivory-dim">{children}</dd>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="relative overflow-hidden border-t border-line-soft py-10 first:border-t-0 sm:py-12">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 right-0 select-none font-display text-[7rem] font-medium leading-none text-ivory/[0.03] sm:text-[9rem]"
      >
        {project.number}
      </span>

      <div className="relative">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-accent">
          <span>{project.number}</span>
          <span className="text-ivory-faint">/</span>
          <span className="text-ivory-dim">{project.tag}</span>
        </div>

        <h3 className="mt-3 max-w-2xl font-display text-2xl font-medium text-balance text-ivory sm:text-3xl">
          {project.name}
        </h3>

        <dl className="mt-6 max-w-3xl divide-y divide-line-soft border-y border-line-soft">
          <Row label="Question">{project.question}</Row>
          <Row label="Data">{project.data}</Row>
          <Row label="Tools">
            <span className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-[0.06em] text-ivory-dim"
                >
                  {tool}
                </span>
              ))}
            </span>
          </Row>
          <Row label="Analysis">{project.analysis}</Row>
        </dl>

        <div className="mt-6 max-w-3xl rounded-lg border border-accent/25 bg-accent/[0.06] px-5 py-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
            Insight
          </p>
          <p className="mt-2 text-[14.5px] leading-relaxed text-ivory">
            {project.insight}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <Container>
        <div className="relative overflow-hidden py-2">
          <EraPhoto
            src="/images/era-mainframe.jpg"
            caption="IBM 7090 Computation Center — c. 1960"
            align="right"
          />
          <div className="relative z-10">
            <SectionHeading
              index="04"
              eyebrow="Projects"
              title="Data investigations"
              description="Each project starts as a question, not a chart. The dashboard is what's left after the analysis."
            />
          </div>
        </div>

        <div className="mt-8">
          {projects.map((project, i) => (
            <Reveal key={project.number} delay={Math.min(i, 3) * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
