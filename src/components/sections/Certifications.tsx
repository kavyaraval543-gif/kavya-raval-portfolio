import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { certifications, education, leadership, achievements } from "@/lib/data";

const educationFacts = [
  { label: "Degree", value: education.degree },
  { label: "Institution", value: education.school },
  { label: "Period", value: education.period },
  { label: "GPA", value: education.gpa },
];

const highlights = [
  ...leadership.map((item) => ({
    title: item.role,
    detail: `${item.org}${item.note ? ` · ${item.note}` : ""}`,
  })),
  ...achievements.map((item) => ({ title: item, detail: "" })),
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          index="05"
          eyebrow="Certifications & Education"
          title="Credentials"
        />

        <Reveal delay={0.06} className="scrim mt-10 max-w-4xl border-y border-line-soft py-5">
          <dl className="flex flex-wrap gap-x-10 gap-y-3 font-mono text-[12px]">
            {educationFacts.map((f) => (
              <div key={f.label} className="flex items-baseline gap-2">
                <dt className="uppercase tracking-[0.1em] text-ivory-faint">{f.label}</dt>
                <dd className="text-ivory">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-ivory-faint">
              Certifications
            </h3>
            <ul className="scrim mt-5 divide-y divide-line-soft border-t border-line-soft">
              {certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3.5"
                >
                  <span className="text-[14px] text-ivory">{cert.name}</span>
                  <span className="font-mono text-[11.5px] text-ivory-faint">
                    {cert.org}
                    <span className="mx-2 text-ivory-faint/50">·</span>
                    {cert.period}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-ivory-faint">
              Leadership &amp; Achievements
            </h3>
            <ul className="scrim mt-5 grid grid-cols-1 gap-x-8 gap-y-3.5 border-t border-line-soft pt-3.5 sm:grid-cols-2">
              {highlights.map((item) => (
                <li key={item.title} className="text-[13px] leading-relaxed text-ivory-dim">
                  <span className="text-ivory">{item.title}</span>
                  {item.detail && <span className="text-ivory-faint"> — {item.detail}</span>}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
