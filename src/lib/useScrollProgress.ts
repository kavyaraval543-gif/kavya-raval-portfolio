"use client";

import { useEffect, useRef } from "react";

/**
 * Tracks document scroll progress (0 → 1) and reports it via rAF-throttled
 * callback rather than state, so subscribers (e.g. a canvas render loop)
 * can read it every frame without triggering React re-renders.
 */
export function useScrollProgress(onChange: (progress: number) => void) {
  const callback = useRef(onChange);

  useEffect(() => {
    callback.current = onChange;
  }, [onChange]);

  useEffect(() => {
    let ticking = false;

    const measure = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      callback.current(Math.min(1, Math.max(0, progress)));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(measure);
      }
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
}
