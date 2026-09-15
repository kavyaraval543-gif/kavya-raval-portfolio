"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { nav, profile } from "@/lib/data";
import Container from "@/components/ui/Container";

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line-soft bg-ink/80 backdrop-blur-md">
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Primary">
          <a
            href="#top"
            className="font-mono text-sm font-medium tracking-[0.15em] text-ivory"
            onClick={() => setOpen(false)}
          >
            KAVYA<span className="text-accent">.</span>RAVAL
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-mono text-[13px] uppercase tracking-[0.12em] text-ivory-dim transition-colors hover:text-ivory"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={profile.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 rounded-full border border-accent/60 px-4 py-2 font-mono text-[12px] uppercase tracking-[0.12em] text-accent transition-colors hover:bg-accent hover:text-ink"
            >
              Resume
              <ArrowUpRight
                size={13}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-line p-2 text-ivory lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </Container>

      {open && (
        <div
          id="mobile-nav"
          className="h-[calc(100svh-4rem)] overflow-y-auto border-t border-line-soft bg-ink px-6 py-6 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-xl text-ivory"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-accent/60 px-4 py-2 font-mono text-[12px] uppercase tracking-[0.12em] text-accent"
          >
            Resume
            <ArrowUpRight size={13} />
          </a>
        </div>
      )}
    </header>
  );
}
