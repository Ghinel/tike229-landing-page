import { cn } from "@/lib/cn";

/**
 * Grille déterministe qui ressemble à un QR (trois repères de coin, reste
 * pseudo-aléatoire depuis une graine fixe) : identique au build et au client,
 * donc sans écart d'hydratation. Purement décoratif, ne se scanne pas.
 */
function buildModules(size: number, seed: number): boolean[] {
  let state = seed;
  const next = () => {
    state = (state * 1103515245 + 12345) % 2147483648;
    return state / 2147483648;
  };

  const modules: boolean[] = [];
  const finder = (x: number, y: number) => {
    const corners = [
      [0, 0],
      [size - 5, 0],
      [0, size - 5],
    ];
    for (const [cx, cy] of corners) {
      const dx = x - cx;
      const dy = y - cy;
      if (dx < 0 || dy < 0 || dx > 4 || dy > 4) continue;
      const ring = dx === 0 || dy === 0 || dx === 4 || dy === 4;
      const center = dx >= 1 && dx <= 3 && dy >= 1 && dy <= 3 && dx !== 1 && dy !== 1 && dx !== 3 && dy !== 3;
      return ring || center;
    }
    return null;
  };

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const fixed = finder(x, y);
      modules.push(fixed ?? next() > 0.55);
    }
  }
  return modules;
}

const SIZE = 13;
const MODULES = buildModules(SIZE, 229);

type QrPatternProps = {
  /** Largeur de la grille (carrée) ; la couleur des modules suit `currentColor`. */
  className?: string;
};

export function QrPattern({ className }: QrPatternProps) {
  return (
    <div
      aria-hidden
      className={cn("grid aspect-square gap-[6%]", className)}
      style={{ gridTemplateColumns: `repeat(${SIZE}, 1fr)` }}
    >
      {MODULES.map((dark, i) => (
        <span key={i} className={cn("block", dark && "bg-current")} />
      ))}
    </div>
  );
}
