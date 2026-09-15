"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import EraPhoto from "@/components/visuals/EraPhoto";
import { profile } from "@/lib/data";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

export default function Hero() {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-24 pb-16"
    >
      <EraPhoto
        src="/images/era-tablet.jpg"
        caption="Cuneiform Tablet — c. 2000 BCE"
        align="right"
      />
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 font-mono text-[13px] uppercase tracking-[0.25em] text-ivory-dim"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Available for opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 font-display text-[13vw] font-medium leading-[0.92] tracking-tight text-ivory sm:text-[9vw] lg:text-[6.4vw]"
        >
          Kavya Raval
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 font-display text-2xl font-medium tracking-tight text-accent sm:text-3xl"
        >
          Data Analyst
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 max-w-xl text-xl leading-relaxed text-ivory-dim sm:text-2xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-sm uppercase tracking-[0.15em] text-ivory-faint"
        >
          {profile.heroSkills.map((skill, i) => (
            <span key={skill} className="flex items-center gap-6">
              <span className="text-ivory">{skill}</span>
              {i < profile.heroSkills.length - 1 && (
                <span className="text-ivory-faint">·</span>
              )}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-ivory px-6 py-3.5 font-mono text-sm uppercase tracking-[0.12em] text-ink transition-transform hover:-translate-y-0.5"
          >
            View Projects
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href={profile.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 font-mono text-sm uppercase tracking-[0.12em] text-ivory transition-colors hover:border-accent hover:text-accent"
          >
            View Resume
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-2 py-3.5 font-mono text-sm uppercase tracking-[0.12em] text-ivory-dim transition-colors hover:text-ivory"
          >
            Contact ↓
          </a>
        </motion.div>
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-8 z-10 hidden justify-center sm:flex">
        <motion.div
          animate={reduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-ivory-faint"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <ArrowDown size={14} />
        </motion.div>
      </div>
    </section>
  );
}
