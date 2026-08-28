"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Passe à `true` une fois le seuil dépassé. Le seuil peut être une fonction
 * (ex. `() => window.innerHeight * 0.9`) réévaluée au redimensionnement.
 *
 * L'état ne change qu'au franchissement du seuil : contrairement à la maquette
 * qui stockait `scrollY`, on ne re-rend pas à chaque pixel scrollé.
 */
export function useScrolledPast(threshold: number | (() => number)): boolean {
  const [passed, setPassed] = useState(false);
  const thresholdRef = useRef(threshold);
  thresholdRef.current = threshold;

  useEffect(() => {
    let frame = 0;

    const read = () => {
      frame = 0;
      const current = thresholdRef.current;
      const limit = typeof current === "function" ? current() : current;
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
  }, []);

  return passed;
}
