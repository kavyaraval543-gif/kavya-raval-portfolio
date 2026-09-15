"use client";

import { useEffect, useRef } from "react";
import { eraGenerators, ERA_COUNT, type FieldPoint } from "./fieldPatterns";
import { useScrollProgress } from "@/lib/useScrollProgress";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

const IVORY = "243, 239, 228";
const ACCENT = "232, 99, 44";

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

export default function EvolvingField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const progressRef = useRef(0);
  const countRef = useRef(260);
  const reducedMotion = usePrefersReducedMotion();

  useScrollProgress((p) => {
    progressRef.current = p;
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

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

    const ivorySprite = makeSprite(IVORY);
    const accentSprite = makeSprite(ACCENT);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      countRef.current = width < 640 ? 190 : width < 1024 ? 280 : 400;
    };
    resize();
    window.addEventListener("resize", resize);

    function drawAxes(alpha: number) {
      if (!ctx || alpha <= 0) return;
      const originX = width * 0.08;
      const originY = height * 0.86;
      const axisLen = Math.min(width * 0.42, 520);
      ctx.save();
      ctx.globalAlpha = alpha * 0.4;
      ctx.strokeStyle = `rgba(${IVORY}, 1)`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(originX, originY);
      ctx.lineTo(originX + axisLen, originY);
      ctx.moveTo(originX, originY);
      ctx.lineTo(originX, originY - axisLen * 0.6);
      ctx.stroke();

      ctx.fillStyle = `rgba(${IVORY}, 1)`;
      ctx.font = "11px var(--font-plex-mono), monospace";
      ctx.globalAlpha = alpha * 0.5;
      for (let t = 1; t <= 4; t++) {
        const tx = originX + (axisLen / 4) * t;
        ctx.fillText(String(t), tx - 3, originY + 16);
        const ty = originY - (axisLen * 0.6 / 4) * t;
        if (t <= 3) ctx.fillText(String(t), originX - 14, ty + 3);
      }
      ctx.fillText("X", originX + axisLen + 8, originY + 4);
      ctx.fillText("Y", originX - 4, originY - axisLen * 0.6 - 10);
      ctx.restore();
    }

    function draw(time: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);
      ctx.save();
      ctx.scale(dpr, dpr);

      const progress = progressRef.current;
      const eraFloat = progress * (ERA_COUNT - 1);
      const era = Math.min(ERA_COUNT - 2, Math.floor(eraFloat));
      const blend = Math.min(1, eraFloat - era);
      const genA = eraGenerators[era];
      const genB = eraGenerators[Math.min(ERA_COUNT - 1, era + 1)];
      const n = countRef.current;

      const wobble = reducedMotion ? 0 : Math.sin(time * 0.00025) * 0.006;

      for (let i = 0; i < n; i++) {
        const pa = genA(i, n);
        const pb = genB(i, n);
        const p = lerpPoint(pa, pb, blend);

        const driftX = reducedMotion ? 0 : Math.sin(time * 0.00018 + i) * 0.0025;
        const driftY = reducedMotion ? 0 : Math.cos(time * 0.00021 + i * 1.3) * 0.0025;

        const px = (p.x + driftX + wobble) * width;
        const py = (p.y + driftY) * height;
        const radius = Math.max(0.6, p.r * (width < 640 ? 1.5 : 1.9));
        const d = radius * 3.4;

        ctx.globalAlpha = Math.min(1, p.alpha);
        ctx.drawImage(ivorySprite, px - d / 2, py - d / 2, d, d);

        if (p.accent > 0.02) {
          const da = d * 0.82;
          ctx.globalAlpha = Math.min(1, p.accent * p.alpha * 1.1);
          ctx.drawImage(accentSprite, px - da / 2, py - da / 2, da, da);
        }
      }

      ctx.globalAlpha = 1;
      const axisAlpha = Math.max(0, eraFloat - (ERA_COUNT - 2)) * 1;
      drawAxes(Math.min(1, axisAlpha));

      ctx.restore();
    }

    let raf = 0;
    if (reducedMotion) {
      draw(0);
      const onScroll = () => draw(0);
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      return () => {
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
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, [reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-95"
    />
  );
}
