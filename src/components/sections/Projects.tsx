import { ReactNode } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { projects, type Project } from "@/lib/data";

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-1.5 py-4 sm:grid-cols-[130px_1fr] sm:gap-6 sm:py-5">
      <dt className="font-mono text-[12px] uppercase tracking-[0.14em] text-ivory-faint">
        {label}
      </dt>
      <dd className="text-[15.5px] leading-relaxed text-ivory-dim">{children}</dd>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-2xl border border-line bg-ink-2/60 p-6 sm:p-9">
      <div className="flex items-start gap-5 sm:gap-6">
        <span className="shrink-0 font-display text-4xl font-medium leading-none text-accent sm:text-5xl">
          {project.number}
        </span>
        <div className="min-w-0 flex-1 pt-1">
          <div className="flex flex-wrap items-center gap-3 font-mono text-[12px] uppercase tracking-[0.14em] text-ivory-faint">
            <span>{project.tag}</span>
          </div>
          <h3 className="mt-2 text-balance font-display text-2xl font-medium text-ivory sm:text-3xl">
            {project.name}
          </h3>
        </div>
      </div>

      <dl className="mt-7 divide-y divide-line-soft border-y border-line-soft">
        <Row label="Question">{project.question}</Row>
        <Row label="Data">{project.data}</Row>
        <Row label="Tools">
          <span className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-line px-3 py-1 font-mono text-[12px] uppercase tracking-[0.06em] text-ivory-dim"
              >
                {tool}
              </span>
            ))}
          </span>
        </Row>
        <Row label="Analysis">{project.analysis}</Row>
      </dl>

      <div className="mt-6 rounded-lg border border-accent/25 bg-accent/[0.08] px-5 py-4">
        <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-accent">
          Insight
        </p>
        <p className="mt-2 text-[15.5px] leading-relaxed text-ivory">
          {project.insight}
        </p>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          index="04"
          eyebrow="Projects"
          title="Data investigations"
          description="Each project starts as a question, not a chart. The dashboard is what's left after the analysis."
        />

        <div className="mt-10 space-y-6 sm:space-y-8">
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
