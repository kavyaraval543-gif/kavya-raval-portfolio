import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="border-y-2 border-ink bg-paper py-20 md:py-28">
      <Container>
        <SectionHeading
          index="04"
          label="Skills"
          title="Product-first, technically fluent."
          intro="Deciding what to build and why, measuring whether it worked, and speaking the language of the people who build it."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
          {skills.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.06} className="h-full">
              <article className="lift flex h-full flex-col rounded-lg border-[3px] border-ink bg-cream p-6 shadow-hard">
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-cobalt">
                  {String(i + 1).padStart(2, "0")} / {group.label}
                </h3>
                <ul className="mt-5 border-t-2 border-ink">
                  {group.items.map((item) => (
                    <li key={item} className="border-b border-ink/20 py-2.5 text-[16px] font-medium leading-snug">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
