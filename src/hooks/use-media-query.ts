"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * `true` si la media query correspond. Rend `false` côté serveur et au premier
 * rendu client, ce qui évite tout écart d'hydratation.
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const list = window.matchMedia(query);
      list.addEventListener("change", onChange);
      return () => list.removeEventListener("change", onChange);
    },
    [query],
  );

  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query]);

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
