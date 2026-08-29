/** Invisible jusqu'au focus clavier : saute la barre de navigation. */
export function SkipLink() {
  return (
    <a
      href="#contenu"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-200 focus:rounded-[2px] focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink focus:no-underline"
    >
      Aller au contenu
    </a>
  );
}
