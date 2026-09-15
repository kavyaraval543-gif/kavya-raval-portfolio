import { ArrowUpRight, Download } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { profile } from "@/lib/data";

export default function ResumeCta() {
  return (
    <section id="resume" className="relative border-y border-line-soft py-20 sm:py-24">
      <Container>
        <Reveal className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              06 / Resume
            </p>
            <h2 className="mt-3 max-w-md font-display text-2xl font-medium text-balance text-ivory sm:text-3xl">
              The full picture, in one document.
            </h2>
            <p className="mt-2 max-w-md text-[14.5px] text-ivory-dim">
              This site is the walkthrough. The resume is the record.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={profile.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-ivory px-6 py-3 font-mono text-[13px] uppercase tracking-[0.12em] text-ink transition-transform hover:-translate-y-0.5"
            >
              View Resume
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href={profile.resumeHref}
              download="Kavya-Raval-Resume.pdf"
              className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-[13px] uppercase tracking-[0.12em] text-ivory transition-colors hover:border-accent hover:text-accent"
            >
              Download
              <Download size={14} />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
