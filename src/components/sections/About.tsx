import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { certifications, profile } from "@/lib/data";

const facts = [
  { label: "Degree", value: profile.degree },
  { label: "University", value: profile.school },
  { label: "Years", value: profile.years },
  { label: "Focus", value: "Product · Projects · Analytics" },
];

const current = certifications.find((c) => c.date === "In progress");

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <SectionHeading
            index="01"
            label="About"
            title={
              <>
                Where product thinking meets{" "}
                <span className="relative -z-10 bg-butter box-decoration-clone px-1.5">technology</span>.
              </>
            }
          />

          <Reveal className="mt-12">
            <div className="rounded-lg border-[3px] border-ink bg-paper shadow-hard">
              <p className="border-b-2 border-ink px-5 py-3 font-mono text-[12px] font-medium uppercase tracking-[0.16em] text-cobalt">
                Education
              </p>
              <dl>
                {facts.map((f, i) => (
                  <div
                    key={f.label}
                    className={`grid grid-cols-1 gap-1 px-5 py-4 sm:grid-cols-[140px_1fr] sm:gap-6 ${
                      i > 0 ? "border-t border-ink/20" : ""
                    }`}
                  >
                    <dt className="font-mono text-[12px] uppercase tracking-[0.14em] text-charcoal sm:pt-1">
                      {f.label}
                    </dt>
                    <dd className="text-[17px] font-medium">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-5 lg:pt-16">
          {profile.about.map((para) => (
            <Reveal key={para.slice(0, 24)}>
              <p className="text-lg leading-relaxed text-charcoal">{para}</p>
            </Reveal>
          ))}

          {current && (
            <Reveal className="mt-4">
              <div className="flex items-start gap-4 rounded-lg border-2 border-ink bg-cream p-5">
                <span className="mt-0.5 shrink-0 rounded-md border-2 border-ink bg-butter px-2 py-0.5 font-mono text-[11.5px] font-medium uppercase tracking-[0.12em]">
                  Now
                </span>
                <p className="text-[16px] leading-snug">
                  Working through the <strong className="font-semibold">{current.issuer} {current.name}</strong>{" "}
                  certificate.
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
