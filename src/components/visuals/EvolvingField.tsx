"use client";

import { useRef } from "react";
import { useScrollProgress } from "@/lib/useScrollProgress";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

// A narrow rail in the page's left margin carrying the site's data-wave
// artwork, tiled seamlessly down the full scroll length (its black
// margins make repeats invisible) and panned in sync with scroll — the
// same "moves with you" feel the generative field had. It resizes to
// whatever gutter the viewport has beyond the content column, and
// vanishes to nothing on narrower screens.
const DRIFT_PX = 2600;

export default function EvolvingField() {
  const railRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  useScrollProgress((progress) => {
    const el = railRef.current;
    if (!el || reducedMotion) return;
    el.style.backgroundPositionY = `${-(progress * DRIFT_PX)}px`;
  });

  return (
    <div
      ref={railRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-y-0 left-0 z-0 opacity-85 [[data-theme=light]_&]:invert"
      style={{
        width: "clamp(0px, calc((100vw - 72rem) / 2 - 16px), 220px)",
        backgroundImage: "url(/images/data-wave.png)",
        backgroundRepeat: "repeat-y",
        backgroundSize: "100% auto",
      }}
    />
  );
}
