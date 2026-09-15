// Deterministic generators for each "era" of the hidden data-history narrative.
// Every generator is a pure function of a particle's stable index, so the
// same particle can be smoothly interpolated (lerped) from one era's layout
// into the next as the visitor scrolls — literally the same data, reshaping.
//
// All eras share one family of warped-grid "flow fields" so every shape
// reads as an abstract organic point cloud (like the reference image)
// rather than a literal grid/ledger/punch-card illustration. The story is
// told through density and order, not iconography: early eras are sparse,
// loosely jittered, and irregular (hand-made); later eras are dense, tight,
// and precise (computed) — resolving into the final point-cloud wave.

export type FieldPoint = {
  x: number; // normalized 0..1
  y: number; // normalized 0..1
  r: number; // relative radius weight
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

type FlowParams = {
  cols: number;
  freq1: number;
  freq2: number;
  freq3: number;
  amp1: number;
  amp2: number;
  amp3: number;
  warp1: number;
  warp2: number;
  phase2: number;
  phase3: number;
  jitter: number;
  spanX: number;
  spanY: number;
  centerY: number;
  falloff: number;
  accentBar: number;
  // Fraction of particles that are actually "present" in this era — this,
  // not span or count, is what makes early eras read as genuinely sparse
  // rather than just a smaller dense cluster.
  visibility: number;
};

function flow(i: number, n: number, p: FlowParams): FieldPoint {
  const rows = Math.max(1, Math.ceil(n / p.cols));
  const col = i % p.cols;
  const row = Math.floor(i / p.cols) % rows;
  const u = (col / Math.max(1, p.cols - 1)) * 2 - 1;
  const v = (row / Math.max(1, rows - 1)) * 2 - 1;

  const wave =
    Math.sin(u * p.freq1 + v * p.warp1) * p.amp1 +
    Math.sin(u * p.freq2 - v * p.warp2 + p.phase2) * p.amp2 +
    Math.sin(v * p.freq3 + p.phase3) * p.amp3;

  const jx = (rand2(i, 71) - 0.5) * p.jitter;
  const jy = (rand2(i, 72) - 0.5) * p.jitter;

  const x = 0.5 + u * p.spanX * 0.5 + jx;
  const y = p.centerY + v * p.spanY * 0.3 + wave * 0.16 + jy;

  const dist = Math.min(1, Math.sqrt(u * u + v * v) / Math.SQRT2);
  const edgeAlpha = 1 - p.falloff * dist;
  const amp = Math.abs(wave);
  const present = rand2(i, 91) < p.visibility;

  return {
    x,
    y,
    r: 0.65 + amp * 1.7 + rand2(i, 73) * 0.35,
    accent: present && amp > p.accentBar && rand2(i, 74) > 0.6 ? 1 : 0,
    alpha: (present ? 1 : 0.04) * Math.max(0.15, edgeAlpha) * (0.55 + amp * 0.85),
  };
}

// Era 0 — Ancient record: sparse, hand-irregular, barely-there.
export function tabletField(i: number, n: number): FieldPoint {
  return flow(i, n, {
    cols: 15,
    freq1: 1.5,
    freq2: 0.9,
    freq3: 1.1,
    amp1: 0.14,
    amp2: 0.09,
    amp3: 0.06,
    warp1: 1.6,
    warp2: 1.1,
    phase2: 0.6,
    phase3: 1.4,
    jitter: 0.075,
    spanX: 0.56,
    spanY: 0.9,
    centerY: 0.45,
    falloff: 0.55,
    accentBar: 0.22,
    visibility: 0.2,
  });
}

// Era 1 — Ledger: a little wider and denser, still loose.
export function ledgerField(i: number, n: number): FieldPoint {
  return flow(i, n, {
    cols: 20,
    freq1: 2.1,
    freq2: 1.2,
    freq3: 1.6,
    amp1: 0.13,
    amp2: 0.08,
    amp3: 0.05,
    warp1: 1.8,
    warp2: 1.4,
    phase2: 0.9,
    phase3: 0.4,
    jitter: 0.05,
    spanX: 0.82,
    spanY: 0.9,
    centerY: 0.5,
    falloff: 0.35,
    accentBar: 0.2,
    visibility: 0.3,
  });
}

// Era 2 — Mechanical processing: tighter weave, more order.
export function punchField(i: number, n: number): FieldPoint {
  return flow(i, n, {
    cols: 26,
    freq1: 3.1,
    freq2: 1.9,
    freq3: 2.4,
    amp1: 0.12,
    amp2: 0.09,
    amp3: 0.06,
    warp1: 2.2,
    warp2: 1.9,
    phase2: 1.3,
    phase3: 0.7,
    jitter: 0.03,
    spanX: 0.86,
    spanY: 0.92,
    centerY: 0.5,
    falloff: 0.2,
    accentBar: 0.18,
    visibility: 0.42,
  });
}

// Era 3 — Terminal / early computing: denser, faster flow.
export function terminalField(i: number, n: number): FieldPoint {
  return flow(i, n, {
    cols: 32,
    freq1: 3.7,
    freq2: 2.5,
    freq3: 3.1,
    amp1: 0.13,
    amp2: 0.1,
    amp3: 0.07,
    warp1: 2.6,
    warp2: 2.1,
    phase2: 0.5,
    phase3: 1.7,
    jitter: 0.018,
    spanX: 0.9,
    spanY: 0.94,
    centerY: 0.5,
    falloff: 0.1,
    accentBar: 0.16,
    visibility: 0.56,
  });
}

// Era 4 — Modern analytics: dense, layered, precise.
export function chartField(i: number, n: number): FieldPoint {
  return flow(i, n, {
    cols: 38,
    freq1: 4.3,
    freq2: 2.9,
    freq3: 3.7,
    amp1: 0.14,
    amp2: 0.1,
    amp3: 0.08,
    warp1: 3,
    warp2: 2.5,
    phase2: 1.1,
    phase3: 0.3,
    jitter: 0.012,
    spanX: 0.92,
    spanY: 0.96,
    centerY: 0.5,
    falloff: 0.04,
    accentBar: 0.15,
    visibility: 0.72,
  });
}

// Era 5 — Modern point cloud: the dense flowing ribbon in XY space, the
// visual language the whole site has been quietly evolving toward.
export function waveField(i: number, n: number): FieldPoint {
  const cols = 52;
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
    r: 0.7 + amp * 1.8 + rand2(i, 53) * 0.35,
    accent: amp > 0.58 && rand2(i, 54) > 0.5 ? 1 : 0,
    alpha: 0.5 + amp * 0.75,
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
