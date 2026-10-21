import { ArrowUpRight, Mail, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import Reveal from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionHeading";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="border-t-2 border-ink bg-cobalt py-20 text-paper md:py-28">
      <Container>
        <Reveal>
          <SectionLabel index="06" label="Contact" inverse />
          <h2 className="mt-6 font-display text-[clamp(3.2rem,11vw,8.5rem)] font-bold leading-[0.86] tracking-[-0.05em]">
            Let’s work
            <br />
            together.
          </h2>
          <p className="mt-7 max-w-xl text-xl leading-relaxed">
            Open to product and project management roles. Email is the fastest way to reach me.
          </p>
        </Reveal>

        <Reveal className="mt-10" delay={0.08}>
          <a
            href={`mailto:${profile.email}`}
            className="press inline-flex max-w-full items-center gap-3 rounded-lg border-[3px] border-ink bg-paper px-5 py-4 font-display text-xl font-bold tracking-tight text-ink shadow-hard-lg sm:gap-4 sm:px-7 sm:py-5 sm:text-3xl md:text-4xl"
          >
            <Mail aria-hidden="true" className="h-6 w-6 shrink-0 sm:h-8 sm:w-8" />
            <span className="break-all">{profile.email}</span>
          </a>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink href={profile.linkedin} external variant="butter">
              <LinkedinIcon size={16} /> LinkedIn
            </ButtonLink>
            <ButtonLink href={profile.github} external variant="paper">
              <GithubIcon size={16} /> GitHub
            </ButtonLink>
            <ButtonLink href={profile.resumeHref} external variant="paper">
              Resume <ArrowUpRight size={16} aria-hidden="true" />
            </ButtonLink>
            <a
              href={`tel:${profile.phone.replace(/-/g, "")}`}
              className="inline-flex items-center gap-2 px-1 py-2 font-mono text-[13px] font-medium uppercase tracking-[0.08em] underline decoration-2 underline-offset-4 hover:decoration-butter"
            >
              <Phone size={15} aria-hidden="true" /> {profile.phone}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
