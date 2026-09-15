import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import EraPhoto from "@/components/visuals/EraPhoto";
import { education, profile } from "@/lib/data";

const facts = [
  { label: "Focus", value: "Data & Product Analytics" },
  { label: "Degree", value: education.degree },
  { label: "Institution", value: education.school },
  { label: "Class of", value: "2027" },
  { label: "Core tools", value: "SQL · Python · Power BI · Tableau" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <EraPhoto
        src="/images/era-map.jpg"
        caption="Cholera Outbreak Map — London, 1854"
        align="right"
      />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              index="01"
              eyebrow="About"
              title="An analytical builder, not just a dashboard-maker."
            />
            <Reveal delay={0.1} className="mt-8 max-w-xl space-y-5">
              <p className="text-[15px] leading-relaxed text-ivory-dim">
                {profile.summary}
              </p>
              <p className="text-[15px] leading-relaxed text-ivory-dim">
                I&apos;m a B.Tech Electronics &amp; Telecommunication Engineering
                student at MPSTME, NMIMS University, working at the intersection of
                data analysis and product thinking — pulling signal out of messy
                datasets, prioritizing what matters, and shipping the fix.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:pt-2">
            <Reveal delay={0.15}>
              <dl className="divide-y divide-line-soft border-y border-line-soft font-mono text-[13px]">
                {facts.map((f) => (
                  <div
                    key={f.label}
                    className="flex items-start justify-between gap-6 py-4"
                  >
                    <dt className="uppercase tracking-[0.12em] text-ivory-faint">
                      {f.label}
                    </dt>
                    <dd className="text-right text-ivory">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
