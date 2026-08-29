"use client";

import { useEffect, useState } from "react";

/**
 * Passe à `true` une fois le seuil dépassé. Le seuil peut être une fonction
 * (ex. `() => window.innerHeight * 0.9`) réévaluée au redimensionnement ;
 * la définir hors du composant pour ne pas réabonner à chaque rendu.
 *
 * L'état ne change qu'au franchissement du seuil : contrairement à la maquette
 * qui stockait `scrollY`, on ne re-rend pas à chaque pixel scrollé.
 */
export function useScrolledPast(threshold: number | (() => number)): boolean {
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    let frame = 0;

    const read = () => {
      frame = 0;
      const limit = typeof threshold === "function" ? threshold() : threshold;
      setPassed(window.scrollY > limit);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(read);
    };

    read();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [threshold]);

  return passed;
}
