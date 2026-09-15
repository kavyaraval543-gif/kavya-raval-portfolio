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

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      countRef.current = width < 640 ? 130 : width < 1024 ? 190 : 260;
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
        const radius = Math.max(0.4, p.r * (width < 640 ? 1.1 : 1.4));

        ctx.beginPath();
        ctx.fillStyle = `rgba(${IVORY}, ${p.alpha * 0.85})`;
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fill();

        if (p.accent > 0.02) {
          ctx.beginPath();
          ctx.fillStyle = `rgba(${ACCENT}, ${p.accent * p.alpha})`;
          ctx.arc(px, py, radius * 0.85, 0, Math.PI * 2);
          ctx.fill();
        }
      }

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
      className="pointer-events-none fixed inset-0 z-0 opacity-70"
    />
  );
}
