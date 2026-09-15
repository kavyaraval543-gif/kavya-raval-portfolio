"use client";

import { useEffect, useRef } from "react";
import { eraGenerators, ERA_COUNT, type FieldPoint } from "./fieldPatterns";
import { useScrollProgress } from "@/lib/useScrollProgress";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { useTheme } from "@/lib/useTheme";

const PALETTE = {
  dark: { fg: "243, 239, 228", accent: "232, 99, 44" },
  light: { fg: "23, 20, 15", accent: "184, 72, 26" },
} as const;

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function lerpPoint(a: FieldPoint, b: FieldPoint, t: number): FieldPoint {
  return {
    x: lerp(a.x, b.x, t),
    y: lerp(a.y, b.y, t),
    r: lerp(a.r, b.r, t),
    accent: lerp(a.accent, b.accent, t),
    alpha: lerp(a.alpha, b.alpha, t),
  };
}

// A narrow vertical rail in the page's left margin — the evolving data
// field lives here, not behind the content, so it never competes with
// text for legibility. It resizes to whatever gutter the viewport has
// beyond the content column, and vanishes to nothing on narrower screens.
export default function EvolvingField() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const progressRef = useRef(0);
  const countRef = useRef(80);
  const reducedMotion = usePrefersReducedMotion();
  const { theme } = useTheme();

  useScrollProgress((p) => {
    progressRef.current = p;
  });

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrapper || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const colors = PALETTE[theme];

    let width = 0;
    let height = 0;
    let dpr = Math.min(2, window.devicePixelRatio || 1);

    function makeSprite(colorRgb: string): HTMLCanvasElement {
      const size = 96;
      const off = document.createElement("canvas");
      off.width = size;
      off.height = size;
      const octx = off.getContext("2d")!;
      const grad = octx.createRadialGradient(
        size / 2,
        size / 2,
        0,
        size / 2,
        size / 2,
        size / 2
      );
      grad.addColorStop(0, `rgba(${colorRgb}, 1)`);
      grad.addColorStop(0.45, `rgba(${colorRgb}, 0.55)`);
      grad.addColorStop(1, `rgba(${colorRgb}, 0)`);
      octx.fillStyle = grad;
      octx.fillRect(0, 0, size, size);
      return off;
    }

    const fgSprite = makeSprite(colors.fg);
    const accentSprite = makeSprite(colors.accent);

    const resize = () => {
      const rect = wrapper.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      countRef.current = width < 60 ? 0 : width < 140 ? 55 : 90;
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(wrapper);
    window.addEventListener("resize", resize);

    function drawAxis(alpha: number) {
      if (!ctx || alpha <= 0 || width < 40) return;
      const originX = Math.min(28, width * 0.3);
      const originY = height - 48;
      const yLen = Math.min(height * 0.5, 320);
      const xLen = Math.max(0, width - originX - 14);
      ctx.save();
      ctx.globalAlpha = alpha * 0.45;
      ctx.strokeStyle = `rgba(${colors.fg}, 1)`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(originX, originY);
      ctx.lineTo(originX, originY - yLen);
      ctx.moveTo(originX, originY);
      ctx.lineTo(originX + xLen, originY);
      ctx.stroke();

      ctx.fillStyle = `rgba(${colors.fg}, 1)`;
      ctx.font = "10px var(--font-plex-mono), monospace";
      ctx.globalAlpha = alpha * 0.55;
      const steps = Math.min(4, Math.floor(yLen / 70));
      for (let t = 1; t <= steps; t++) {
        const ty = originY - (yLen / steps) * t;
        ctx.fillText(String(t), originX + 5, ty + 3);
      }
      ctx.fillText("Y", originX - 3, originY - yLen - 8);
      if (xLen > 20) ctx.fillText("X", originX + xLen - 4, originY + 14);
      ctx.restore();
    }

    function draw(time: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);
      if (width < 4) return;
      ctx.save();
      ctx.scale(dpr, dpr);

      const progress = progressRef.current;
      const eraFloat = progress * (ERA_COUNT - 1);
      const era = Math.min(ERA_COUNT - 2, Math.floor(eraFloat));
      const blend = Math.min(1, eraFloat - era);
      const genA = eraGenerators[era];
      const genB = eraGenerators[Math.min(ERA_COUNT - 1, era + 1)];
      const n = countRef.current;

      const wobble = reducedMotion ? 0 : Math.sin(time * 0.00025) * 0.008;

      for (let i = 0; i < n; i++) {
        const pa = genA(i, n);
        const pb = genB(i, n);
        const p = lerpPoint(pa, pb, blend);

        const driftX = reducedMotion ? 0 : Math.sin(time * 0.00018 + i) * 0.004;
        const driftY = reducedMotion ? 0 : Math.cos(time * 0.00021 + i * 1.3) * 0.003;

        // Patterns are authored for a landscape canvas (x = long axis,
        // y = short axis). The rail is portrait, so swap axes on mapping:
        // the pattern's wide spread fills the rail's height, its narrow
        // spread fills the rail's width.
        const px = (p.y + driftY + wobble) * width;
        const py = (p.x + driftX) * height;
        const radius = Math.max(0.65, p.r * 1.5);
        const d = radius * 3.4;

        ctx.globalAlpha = Math.min(1, p.alpha);
        ctx.drawImage(fgSprite, px - d / 2, py - d / 2, d, d);

        if (p.accent > 0.02) {
          const da = d * 0.82;
          ctx.globalAlpha = Math.min(1, p.accent * p.alpha * 1.1);
          ctx.drawImage(accentSprite, px - da / 2, py - da / 2, da, da);
        }
      }

      ctx.globalAlpha = 1;
      const axisAlpha = Math.max(0, eraFloat - (ERA_COUNT - 2)) * 1;
      drawAxis(Math.min(1, axisAlpha));

      ctx.restore();
    }

    let raf = 0;
    if (reducedMotion) {
      draw(0);
      const onScroll = () => draw(0);
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      return () => {
        ro.disconnect();
        window.removeEventListener("resize", resize);
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      };
    }

    const loop = (t: number) => {
      draw(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, [reducedMotion, theme]);

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-y-0 left-0 z-0 overflow-hidden"
      style={{ width: "clamp(0px, calc((100vw - 72rem) / 2 - 16px), 220px)" }}
    >
      <canvas ref={canvasRef} className="opacity-90" />
    </div>
  );
}
