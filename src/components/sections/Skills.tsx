import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { skills } from "@/lib/data";

const categories = Object.entries(skills);

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          index="03"
          eyebrow="Skills"
          title="What I work with"
          description="Grouped the way I actually use them — for analysis, for shipping, and for working across a team."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {categories.map(([category, list], colIndex) => (
            <Reveal key={category} delay={colIndex * 0.08}>
              <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                {String(colIndex + 1).padStart(2, "0")} / {category}
              </h3>
              <ul className="mt-5 divide-y divide-line-soft border-t border-line-soft">
                {list.map((skill, i) => (
                  <li
                    key={skill}
                    className="flex items-center justify-between gap-4 py-3"
                  >
                    <span className="text-[14px] text-ivory">{skill}</span>
                    <span className="font-mono text-[11px] text-ivory-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
