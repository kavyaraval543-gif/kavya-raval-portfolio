# Kavya Raval — Portfolio

Personal portfolio for Kavya Raval, positioned around product & project management, with analytics and technology in support. Built with Next.js, TypeScript and Tailwind CSS.

The visual language is light neo-brutalism with an editorial grid: a cream base, cobalt as the signature color, butter/coral/mint as occasional highlights, thick black outlines and hard offset shadows.

## Content

All copy lives in `src/lib/data.ts`; components hold no hardcoded resume content.

- Resume content is drawn from Kavya's resumes; the downloadable PDF is `public/kavya-raval-resume.pdf`.
- The YardFlow case study, including its images in `public/images/yardflow/`, comes from the YardFlow case-study deck and keeps the deck's framing: a retrospective prototype, never deployed, with an unvalidated problem hypothesis.
- The Galaxy Home Automation CRM screenshots in `public/images/galaxy/` come from the CRM case-study PDF and show anonymized sample data.
- The Olist cover in `public/images/olist/` is a screenshot of the real Power BI dashboard.
- The remaining project covers are drawn from the real numbers or architecture of each project (no mock screenshots).

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
  app/                 # layout, global styles (design tokens), page
  components/
    layout/            # Nav, Footer
    sections/          # Hero, Marquee, About, Experience, Projects, ProjectCover, Skills, Credentials, Contact
    ui/                # Container, SectionHeading, ButtonLink, Reveal, brand icons
  lib/
    data.ts            # single source of truth for site content
    usePrefersReducedMotion.ts
```
