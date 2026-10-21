import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { achievements, certifications, leadership } from "@/lib/data";

function CardHeader({ title, count }: { title: string; count: number }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b-2 border-ink px-5 py-3 md:px-6">
      <p className="font-mono text-[12px] font-medium uppercase tracking-[0.16em]">{title}</p>
      <span className="font-mono text-[12px] font-medium text-charcoal">
        {String(count).padStart(2, "0")}
      </span>
    </div>
  );
}

export default function Credentials() {
  return (
    <section id="credentials" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          index="05"
          label="Credentials"
          title="Certifications, wins and leadership."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 md:mt-16 lg:grid-cols-12">
          <Reveal className="h-full lg:col-span-7">
            <div className="h-full rounded-lg border-[3px] border-ink bg-paper shadow-hard">
              <CardHeader title="Certifications" count={certifications.length} />
              <ul>
                {certifications.map((c, i) => (
                  <li
                    key={c.name}
                    className={`flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 md:px-6 ${
                      i > 0 ? "border-t border-ink/20" : ""
                    }`}
                  >
                    <div>
                      <p className="text-[16.5px] font-semibold leading-snug">{c.name}</p>
                      <p className="text-[14.5px] text-charcoal">{c.issuer}</p>
                    </div>
                    <span
                      className={`self-start shrink-0 font-mono text-[12px] font-medium uppercase tracking-[0.1em] sm:self-center ${
                        c.date === "In progress"
                          ? "rounded-md border-2 border-ink bg-butter px-2 py-0.5"
                          : "text-charcoal"
                      }`}
                    >
                      {c.date}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="flex flex-col gap-8 lg:col-span-5">
            <Reveal className="flex-1" delay={0.06}>
              <div className="h-full rounded-lg border-[3px] border-ink bg-butter shadow-hard">
                <CardHeader title="Achievements" count={achievements.length} />
                <ul>
                  {achievements.map((a, i) => (
                    <li key={a.title} className={`px-5 py-4 md:px-6 ${i > 0 ? "border-t border-ink/25" : ""}`}>
                      <p className="font-display text-[17px] font-bold leading-snug">{a.title}</p>
                      <p className="mt-1 text-[14.5px] leading-snug">{a.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal className="flex-1" delay={0.12}>
              <div className="h-full rounded-lg border-[3px] border-ink bg-paper shadow-hard">
                <CardHeader title="Leadership" count={leadership.length} />
                <ul>
                  {leadership.map((l, i) => (
                    <li key={l.role} className={`px-5 py-4 md:px-6 ${i > 0 ? "border-t border-ink/20" : ""}`}>
                      <p className="font-display text-[17px] font-bold leading-snug">{l.role}</p>
                      <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-cobalt">{l.org}</p>
                      <p className="mt-1 text-[14.5px] leading-snug text-charcoal">{l.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
