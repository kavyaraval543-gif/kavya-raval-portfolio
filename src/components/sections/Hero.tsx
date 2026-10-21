import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import { heroStats, profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="relative border-b-2 border-ink">
      <Container className="grid grid-cols-1 gap-12 pt-10 pb-14 sm:pt-14 md:pb-20 lg:grid-cols-12 lg:gap-10 lg:pt-20">
        <div className="lg:col-span-8">
          <p className="flex flex-wrap items-center gap-3 font-mono text-[13px] font-medium uppercase tracking-[0.14em]">
            <span className="inline-flex items-start gap-2 rounded-md border-2 border-ink bg-butter px-2.5 py-1">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-ink" aria-hidden="true" />
              {profile.availability.short}
            </span>
            <span className="text-charcoal">B.Tech EXTC · Class of {profile.classOf}</span>
          </p>

          <h1 className="mt-7 font-display text-[clamp(4rem,14vw,10.5rem)] font-bold leading-[0.84] tracking-[-0.055em]">
            Kavya
            <br />
            Raval<span className="text-cobalt">.</span>
          </h1>

          <p className="mt-8 inline-block rounded-md border-2 border-ink bg-cobalt px-4 py-2.5 font-display text-[1.45rem] font-bold leading-tight tracking-tight text-paper shadow-hard sm:text-3xl md:text-4xl">
            {profile.role}
          </p>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed sm:text-2xl">
            <strong className="font-semibold">A product-minded builder who understands technology.</strong>{" "}
            <span className="text-charcoal">{profile.intro}</span>
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ButtonLink href="#projects" size="lg">
              See my work <ArrowDown size={17} aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={profile.resumeHref} external variant="paper" size="lg">
              Resume <ArrowUpRight size={17} aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>

        <div className="flex items-end justify-start lg:col-span-4 lg:justify-end">
          <figure className="relative w-full max-w-[260px] sm:max-w-[320px]">
            <div aria-hidden="true" className="dot-grid absolute -top-5 -right-5 h-full w-full opacity-40" />
            <div className="relative overflow-hidden rounded-lg border-[3px] border-ink bg-paper shadow-hard-lg">
              <Image
                src={profile.photo}
                alt="Portrait of Kavya Raval"
                width={640}
                height={669}
                sizes="(min-width: 640px) 320px, 260px"
                preload
                className="aspect-[640/669] w-full object-cover"
              />
              <figcaption className="flex items-center justify-between gap-3 border-t-[3px] border-ink bg-paper px-4 py-3 font-mono text-[12px] font-medium uppercase tracking-[0.12em]">
                <span>{profile.school.split(",")[0]}, NMIMS</span>
                <span className="text-cobalt">’{profile.classOf.slice(2)}</span>
              </figcaption>
            </div>
          </figure>
        </div>
      </Container>

      <div className="border-t-2 border-ink bg-paper">
        <Container>
          <dl className="grid grid-cols-1 sm:grid-cols-3">
            {heroStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col gap-2 py-6 md:py-8 ${
                  i > 0 ? "border-t-2 border-ink sm:border-t-0 sm:border-l-2 sm:pl-6 md:pl-8" : ""
                } ${i < heroStats.length - 1 ? "sm:pr-6 md:pr-8" : ""}`}
              >
                <dt className="order-2 text-[15px] leading-snug text-charcoal">{stat.label}</dt>
                <dd className="order-1 font-display text-4xl font-bold tracking-tight text-cobalt md:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>
    </section>
  );
}
