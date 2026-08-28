export type Stripe = {
  /** Teinte HSL, 0–360. */
  hue: number;
  /** Saturation en %, défaut 30. */
  sat?: number;
  /** Luminosité en %, défaut 15. */
  light?: number;
  /** Inclinaison des rayures en degrés, défaut 15. */
  angle?: number;
};

/**
 * Motif rayé qui tient lieu de visuel tant que la vraie photo n'est pas là.
 * Reprend la fonction `stripe()` de la maquette Claude Design.
 */
export function stripePattern({ hue, sat = 30, light = 15, angle = 15 }: Stripe): string {
  const shade = Math.max(light - 4, 4);
  const a = `hsl(${hue} ${sat}% ${light}%)`;
  const b = `hsl(${hue} ${sat}% ${shade}%)`;
  return `repeating-linear-gradient(${angle}deg, ${a}, ${a} 10px, ${b} 10px, ${b} 20px)`;
}
