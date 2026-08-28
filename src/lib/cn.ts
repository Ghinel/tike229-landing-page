export type ClassValue = string | false | null | undefined;

/** Concatène des classes en ignorant les valeurs vides. */
export function cn(...parts: ClassValue[]): string {
  return parts.filter(Boolean).join(" ");
}
