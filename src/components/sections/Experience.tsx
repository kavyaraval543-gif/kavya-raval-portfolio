import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title="Relevant experience"
        />

        <Reveal delay={0.1} className="mt-12 border-t border-line-soft pt-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h3 className="font-display text-3xl font-medium text-ivory">
                {experience.title}
              </h3>
              <p className="mt-1 text-[17px] text-ivory-dim">
                {experience.company}{" "}
                <span className="text-ivory-faint">· {experience.teamNote}</span>
              </p>
            </div>
            <p className="font-mono text-sm uppercase tracking-[0.14em] text-ivory-faint">
              {experience.period}
            </p>
          </div>

          <ul className="mt-8 max-w-3xl space-y-4">
            {experience.points.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-[17px] leading-relaxed text-ivory-dim"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line-soft bg-line-soft sm:grid-cols-4">
            {experience.metrics.map((m) => (
              <div key={m.label} className="bg-ink px-5 py-6">
                <p className="font-display text-3xl font-medium text-accent sm:text-4xl">
                  {m.value}
                </p>
                <p className="mt-2 font-mono text-[12.5px] uppercase leading-snug tracking-[0.1em] text-ivory-faint">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
