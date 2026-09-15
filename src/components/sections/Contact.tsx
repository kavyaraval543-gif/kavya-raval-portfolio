import { ArrowUpRight, Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { profile } from "@/lib/data";

const links = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "kavya-raval1306",
    href: profile.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: "kavyaraval543-gif",
    href: profile.github,
    icon: GithubIcon,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 sm:py-44">
      <Container>
        <Reveal>
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
            07 / Contact
          </p>
          <h2 className="mt-5 max-w-3xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-balance text-ivory sm:text-6xl">
            Let&apos;s work with data.
          </h2>
          <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-ivory-dim">
            Open to Data Analyst and Product Analytics roles. The fastest way
            to reach me is email — I usually reply within a day.
          </p>
        </Reveal>

        <Reveal
          delay={0.12}
          className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line-soft bg-line-soft sm:grid-cols-3"
        >
          {links.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between gap-4 bg-ink px-6 py-6 transition-colors hover:bg-ink-2"
            >
              <span className="flex items-center gap-3">
                <Icon size={18} className="text-accent" />
                <span>
                  <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-ivory-faint">
                    {label}
                  </span>
                  <span className="mt-0.5 block text-[16px] text-ivory">{value}</span>
                </span>
              </span>
              <ArrowUpRight
                size={15}
                className="text-ivory-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
              />
            </a>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
