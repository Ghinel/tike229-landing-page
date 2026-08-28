import { cn } from "@/lib/cn";

/** Motif QR décoratif, presque invisible — un clin d'œil au billet. */
export function QrDots({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("grid size-9 grid-cols-3 gap-[3px] opacity-4", className)}
    >
      {Array.from({ length: 9 }, (_, i) => (
        <div key={i} className="bg-bone" />
      ))}
    </div>
  );
}
