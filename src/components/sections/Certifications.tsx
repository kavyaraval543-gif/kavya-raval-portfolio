import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { certifications, education, leadership, achievements } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          index="05"
          eyebrow="Certifications & Education"
          title="Credentials"
        />

        <div className="mt-14 grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-ivory-faint">
                Certifications
              </h3>
              <ul className="mt-5 divide-y divide-line-soft border-t border-line-soft">
                {certifications.map((cert) => (
                  <li
                    key={cert.name}
                    className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-4"
                  >
                    <span className="text-[14.5px] text-ivory">{cert.name}</span>
                    <span className="font-mono text-[12px] text-ivory-faint">
                      {cert.org}
                      <span className="mx-2 text-ivory-faint/50">·</span>
                      {cert.period}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-ivory-faint">
                Education
              </h3>
              <div className="mt-5 border-t border-line-soft pt-5">
                <p className="font-display text-xl font-medium text-ivory">
                  {education.degree}
                </p>
                <p className="mt-2 text-[14.5px] text-ivory-dim">{education.school}</p>
                <dl className="mt-4 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[12px] text-ivory-faint">
                  <div className="flex gap-2">
                    <dt className="uppercase tracking-[0.1em]">Period</dt>
                    <dd className="text-ivory">{education.period}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="uppercase tracking-[0.1em]">GPA</dt>
                    <dd className="text-ivory">{education.gpa}</dd>
                  </div>
                </dl>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <h3 className="mt-12 font-mono text-xs uppercase tracking-[0.16em] text-ivory-faint">
                Leadership &amp; Achievements
              </h3>
              <ul className="mt-5 space-y-3 border-t border-line-soft pt-5">
                {leadership.map((item) => (
                  <li key={item.role} className="text-[13.5px] leading-relaxed text-ivory-dim">
                    <span className="text-ivory">{item.role}</span> — {item.org}
                    {item.note ? <span className="text-ivory-faint"> · {item.note}</span> : null}
                  </li>
                ))}
                {achievements.map((item) => (
                  <li key={item} className="text-[13.5px] leading-relaxed text-ivory-dim">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
