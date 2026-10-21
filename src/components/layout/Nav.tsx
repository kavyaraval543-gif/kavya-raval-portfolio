"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import { navLinks, profile } from "@/lib/data";

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-cream">
      <Container className="flex h-16 items-center justify-between gap-4 md:h-[72px]">
        <a href="#top" className="group flex items-center gap-3" aria-label="Kavya Raval, back to top">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border-2 border-ink bg-cobalt font-display text-[15px] font-bold text-paper shadow-hard-sm transition-transform group-hover:-translate-y-0.5">
            KR
          </span>
          <span className="font-display text-lg font-bold tracking-tight">{profile.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 font-mono text-[13px] font-medium uppercase tracking-[0.1em] text-ink decoration-cobalt decoration-[3px] underline-offset-[6px] hover:underline"
            >
              {link.label}
            </a>
          ))}
          <ButtonLink href={profile.resumeHref} external size="sm" className="ml-3">
            Resume
          </ButtonLink>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border-2 border-ink bg-paper shadow-hard-sm md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {open && (
        <div id="mobile-menu" className="border-t-2 border-ink bg-cream md:hidden">
          <Container className="flex flex-col py-4">
            <nav aria-label="Mobile" className="flex flex-col">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 border-b border-ink/20 py-3.5 font-display text-3xl font-bold tracking-tight"
                >
                  <span className="font-mono text-[13px] font-medium text-cobalt">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {link.label}
                </a>
              ))}
            </nav>
            <ButtonLink href={profile.resumeHref} external className="mt-6 self-start">
              Download resume
            </ButtonLink>
          </Container>
        </div>
      )}
    </header>
  );
}
