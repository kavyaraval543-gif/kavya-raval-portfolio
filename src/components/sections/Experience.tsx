import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="border-y-2 border-ink bg-paper py-20 md:py-28">
      <Container>
        <SectionHeading
          index="02"
          label="Experience"
          title="Shipping a single source of truth."
          intro="One internship, one clear problem: project updates were scattered across teams. Here's what I did about it."
        />

        <Reveal className="mt-12 md:mt-16">
          <article className="overflow-hidden rounded-lg border-[3px] border-ink bg-cream shadow-hard-lg">
            <div className="grid grid-cols-1 md:grid-cols-12">
              <header className="flex flex-col justify-between gap-8 border-b-[3px] border-ink bg-cobalt p-6 text-paper md:col-span-5 md:border-r-[3px] md:border-b-0 md:p-8 lg:col-span-4">
                <div>
                  <p className="font-mono text-[12px] font-medium uppercase tracking-[0.16em] text-butter">
                    {experience.period}
                  </p>
                  <h3 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                    {experience.role}
                  </h3>
                  <p className="mt-3 text-lg">{experience.company}</p>
                </div>
                <p className="self-start rounded-md border-2 border-ink bg-paper px-2.5 py-1 font-mono text-[12px] font-medium uppercase tracking-[0.12em] text-ink">
                  {experience.team}
                </p>
              </header>

              <ol className="md:col-span-7 lg:col-span-8">
                {experience.points.map((point, i) => (
                  <li
                    key={point.slice(0, 24)}
                    className={`flex gap-5 p-6 md:p-8 ${i > 0 ? "border-t-2 border-ink" : ""}`}
                  >
                    <span className="font-mono text-[13px] font-medium text-cobalt">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[17px] leading-relaxed">{point}</p>
                  </li>
                ))}
              </ol>
            </div>

            <dl className="grid grid-cols-2 border-t-[3px] border-ink bg-butter lg:grid-cols-4">
              {experience.metrics.map((m, i) => (
                <div
                  key={m.label}
                  className={`flex flex-col gap-1 p-5 md:p-6 ${i % 2 === 1 ? "border-l-2 border-ink" : ""} ${
                    i >= 2 ? "border-t-2 border-ink lg:border-t-0" : ""
                  } ${i === 2 ? "lg:border-l-2" : ""}`}
                >
                  <dt className="order-2 text-[14px] leading-snug">{m.label}</dt>
                  <dd className="order-1 font-display text-3xl font-bold tracking-tight md:text-4xl">
                    {m.value}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
