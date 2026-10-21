import { marqueeItems } from "@/lib/data";

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {marqueeItems.map((item) => (
        <span key={item} className="flex items-center">
          <span className="px-6 font-display text-2xl font-bold uppercase tracking-tight whitespace-nowrap md:text-3xl">
            {item}
          </span>
          <span className="text-xl text-butter md:text-2xl">✦</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div aria-hidden="true" className="marquee overflow-hidden border-b-2 border-ink bg-cobalt py-4 text-paper md:py-5">
      <div className="marquee-track flex w-max">
        <Row />
        <Row />
      </div>
    </div>
  );
}
