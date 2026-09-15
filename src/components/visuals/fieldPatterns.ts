// Deterministic generators for each "era" of the hidden data-history narrative.
// Every generator is a pure function of a particle's stable index, so the
// same particle can be smoothly interpolated (lerped) from one era's layout
// into the next as the visitor scrolls — literally the same data, reshaping.

export type FieldPoint = {
  x: number; // normalized 0..1
  y: number; // normalized 0..1
  r: number; // relative radius weight 0.4..1.6
  accent: number; // 0..1 — how "highlighted" (orange) this point is
  alpha: number; // 0..1 base opacity weight
};

// Small deterministic hash → [0,1), stable across renders/frames.
function rand(seed: number): number {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

function rand2(i: number, salt: number): number {
  return rand(i * 0.6180339887 + salt * 7.253);
}

// Era 0 — Ancient record: irregular tight clusters, like incised tally
// marks on clay or bone. Sparse, quiet, almost no highlight.
export function tabletField(i: number, n: number): FieldPoint {
  const clusters = Math.max(8, Math.round(n / 20));
  const c = i % clusters;
  const cx = 0.1 + 0.8 * rand2(c, 1);
  const cy = 0.15 + 0.7 * rand2(c, 2);
  const spread = 0.028 + 0.02 * rand2(c, 3);
  const a = rand2(i, 4) * Math.PI * 2;
  const rad = spread * Math.sqrt(rand2(i, 5));
  return {
    x: cx + Math.cos(a) * rad,
    y: cy + Math.sin(a) * rad * 1.4,
    r: 0.5 + rand2(i, 6) * 0.5,
    accent: rand2(i, 7) > 0.985 ? 1 : 0,
    alpha: 0.5 + rand2(i, 8) * 0.4,
  };
}

// Era 1 — Ledger: handwritten rows of figures, ruled lines.
export function ledgerField(i: number, n: number): FieldPoint {
  const rows = 9;
  const row = i % rows;
  const withinRow = Math.floor(i / rows);
  const perRow = Math.ceil(n / rows);
  const y = 0.14 + (row / (rows - 1)) * 0.72 + (rand2(i, 11) - 0.5) * 0.012;
  const x = 0.08 + (withinRow / Math.max(1, perRow - 1)) * 0.86 + (rand2(i, 12) - 0.5) * 0.02;
  return {
    x,
    y,
    r: 0.45 + rand2(i, 13) * 0.45,
    accent: rand2(i, 14) > 0.965 ? 1 : 0,
    alpha: 0.45 + rand2(i, 15) * 0.4,
  };
}

// Era 2 — Punch card: a strict rectangular grid of holes.
export function punchField(i: number, n: number): FieldPoint {
  const cols = 18;
  const rows = Math.ceil(n / cols);
  const col = i % cols;
  const row = Math.floor(i / cols) % rows;
  const x = 0.16 + (col / (cols - 1)) * 0.68;
  const y = 0.2 + (row / Math.max(1, rows - 1)) * 0.62;
  const punched = rand2(Math.floor(i / 3), 21) > 0.62;
  return {
    x: x + (rand2(i, 22) - 0.5) * 0.006,
    y: y + (rand2(i, 23) - 0.5) * 0.006,
    r: punched ? 1.1 : 0.5,
    accent: punched && rand2(i, 24) > 0.55 ? 1 : 0,
    alpha: punched ? 0.85 : 0.3,
  };
}

// Era 3 — Terminal / spreadsheet: a coarse coordinate grid, with a subset
// tracing a rising data series like an early digital chart on a CRT.
export function terminalField(i: number, n: number): FieldPoint {
  const onSeries = i % 3 === 0;
  if (onSeries) {
    const t = (i / n) * 1;
    const x = 0.1 + t * 0.82;
    const y = 0.75 - (Math.sin(t * 6.2 + 1) * 0.5 + 0.5) * 0.5 - t * 0.1;
    return {
      x,
      y: y + (rand2(i, 31) - 0.5) * 0.01,
      r: 0.9 + rand2(i, 32) * 0.5,
      accent: rand2(i, 33) > 0.5 ? 1 : 0,
      alpha: 0.7 + rand2(i, 34) * 0.3,
    };
  }
  const cols = 14;
  const rows = 10;
  const gi = Math.floor(i / 3);
  const col = gi % cols;
  const row = Math.floor(gi / cols) % rows;
  return {
    x: 0.06 + (col / (cols - 1)) * 0.9 + (rand2(i, 35) - 0.5) * 0.008,
    y: 0.08 + (row / (rows - 1)) * 0.86 + (rand2(i, 36) - 0.5) * 0.008,
    r: 0.4 + rand2(i, 37) * 0.35,
    accent: rand2(i, 38) > 0.94 ? 1 : 0,
    alpha: 0.28 + rand2(i, 39) * 0.3,
  };
}

// Era 4 — Modern analytics chart: several smooth curves with a baseline axis.
export function chartField(i: number, n: number): FieldPoint {
  const onAxis = i % 11 === 0;
  if (onAxis) {
    const t = (i / n) * 1;
    return {
      x: 0.07 + t * 0.88,
      y: 0.86,
      r: 0.5,
      accent: 0,
      alpha: 0.35,
    };
  }
  const curve = i % 3;
  const t = ((i + curve * 17) % (n / 2)) / (n / 2);
  const freq = 2.4 + curve * 1.1;
  const amp = 0.16 - curve * 0.03;
  const base = 0.32 + curve * 0.18;
  const x = 0.07 + t * 0.88;
  const y = base - Math.sin(t * Math.PI * freq + curve) * amp;
  const isPeak = Math.abs(Math.cos(t * Math.PI * freq + curve)) < 0.06;
  return {
    x: x + (rand2(i, 41) - 0.5) * 0.01,
    y: y + (rand2(i, 42) - 0.5) * 0.014,
    r: isPeak ? 1.2 : 0.6 + rand2(i, 43) * 0.4,
    accent: isPeak ? 1 : 0,
    alpha: 0.55 + rand2(i, 44) * 0.35,
  };
}

// Era 5 — Modern point cloud: a dense flowing ribbon in XY space, the
// visual language the whole site has been quietly evolving toward.
export function waveField(i: number, n: number): FieldPoint {
  const cols = 46;
  const rows = Math.ceil(n / cols);
  const col = i % cols;
  const row = Math.floor(i / cols) % rows;
  const u = (col / (cols - 1)) * 2 - 1; // -1..1
  const v = (row / Math.max(1, rows - 1)) * 2 - 1;

  const wave =
    Math.sin(u * 3.1 + v * 0.6) * 0.5 +
    Math.sin(u * 1.3 - v * 2.1 + 1.2) * 0.3 +
    Math.sin(v * 4.2 + 0.8) * 0.12;

  const x = 0.5 + u * 0.44 + (rand2(i, 51) - 0.5) * 0.006;
  const y = 0.5 + v * 0.34 * 0.6 + wave * 0.16 + (rand2(i, 52) - 0.5) * 0.006;

  const amp = Math.abs(wave);
  return {
    x,
    y,
    r: 0.5 + amp * 1.3 + rand2(i, 53) * 0.3,
    accent: amp > 0.62 && rand2(i, 54) > 0.5 ? 1 : 0,
    alpha: 0.35 + amp * 0.55,
  };
}

export const eraGenerators = [
  tabletField,
  ledgerField,
  punchField,
  terminalField,
  chartField,
  waveField,
] as const;

export const ERA_COUNT = eraGenerators.length;
