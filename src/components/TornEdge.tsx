import { useMemo } from "react";

type TornEdgeProps = {
  /** CSS color of the section this edge belongs to (the paper that tears) */
  color: string;
  /** subtle shadow/underside tint shown along the rip */
  className?: string;
  height?: number;
  flip?: boolean;
};

// Deterministic organic torn path so SSR and client match.
function buildPath(seed: number, height: number) {
  const W = 1440;
  const steps = 46;
  let rnd = seed;
  const rand = () => {
    rnd = (rnd * 9301 + 49297) % 233280;
    return rnd / 233280;
  };
  const pts: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const x = (W / steps) * i;
    // base ragged line with occasional deep notches for a hand-ripped feel
    const base = height * 0.45;
    const jitter = rand() * height * 0.4;
    const notch = rand() > 0.86 ? rand() * height * 0.35 : 0;
    const y = base + jitter + notch;
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return `M0,0 L${W},0 L${W},${height} L${pts.join(" L")} L0,${height} Z`;
}

export function TornEdge({ color, className = "", height = 80, flip = false }: TornEdgeProps) {
  const d = useMemo(() => buildPath(7, height), [height]);
  const dUnder = useMemo(() => buildPath(31, height), [height]);

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 bottom-0 z-20 w-full translate-y-[99%] ${className}`}
      style={{ transform: flip ? "scaleX(-1) translateY(99%)" : undefined }}
    >
      <svg
        viewBox={`0 0 1440 ${height}`}
        preserveAspectRatio="none"
        className="block h-[clamp(36px,6vw,80px)] w-full"
        style={{ filter: "drop-shadow(0 8px 6px rgb(40 30 15 / 0.10))" }}
      >
        {/* faint underside layer for stacked-paper depth */}
        <path d={dUnder} fill={color} opacity={0.55} transform="translate(0,3)" />
        <path d={d} fill={color} />
      </svg>
    </div>
  );
}
