# Kavya Raval — Portfolio

Personal resume and data-analytics portfolio site for Kavya Raval, built with Next.js, TypeScript, and Tailwind CSS.

The visual system quietly traces the history of data — from ancient records to modern point-cloud visualization — through a single generative canvas field that reshapes itself as you scroll, without ever naming the concept out loud. Content (experience, projects, skills, certifications) is transcribed directly from the resume in `public/kavya-raval-resume.pdf`.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion for scroll reveals
- A hand-rolled Canvas 2D particle engine (`src/components/visuals`) — no charting/3D libraries

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

## Structure

```
src/
  app/                  # layout, global styles, page
  components/
    layout/              # Nav, Footer
    sections/            # Hero, About, Experience, Skills, Projects, Certifications, ResumeCta, Contact
    ui/                  # Container, Reveal, SectionHeading, brand icons
    visuals/              # EvolvingField canvas engine + era pattern generators
  lib/
    data.ts               # single source of truth for resume content
    useScrollProgress.ts, usePrefersReducedMotion.ts
```

Update `src/lib/data.ts` to change any resume content — nothing is hardcoded in the components.
