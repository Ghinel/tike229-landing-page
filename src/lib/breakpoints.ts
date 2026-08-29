/**
 * Même seuil que `--breakpoint-wide` dans `globals.css` (variant `wide:`).
 * Le JS interroge la requête *min-width* et l'inverse, pour qu'une largeur
 * fractionnaire (zoom navigateur) ne tombe jamais entre les deux.
 */
export const WIDE_QUERY = "(min-width: 900px)";
