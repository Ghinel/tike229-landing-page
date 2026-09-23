import { footer } from "@/content/landing";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/cn";

export function SiteFooter() {
  const links = [...(siteConfig.legalPublished ? footer.legalLinks : []), footer.contact];
  const year = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "relative border-t-2 border-solid border-bone/15 bg-ink px-6 pt-14 wide:pb-14",
        // Réserve la hauteur de la barre d'action mobile, qui recouvre le bas de page.
        siteConfig.showMobileCtaBar ? "pb-32" : "pb-14",
      )}
    >
      <div className="flex flex-col items-start justify-between gap-6 wide:flex-row wide:items-center wide:gap-0">
        <div>
          <p className="mb-1 font-display text-lg font-extrabold">{siteConfig.name}</p>
          <p className="text-[13px] text-muted">{footer.byline}</p>
        </div>

        <nav aria-label="Liens légaux et contact" className="flex flex-wrap gap-6 text-[13px]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-accent no-underline transition-colors duration-200 hover:text-bone"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <p className="mt-10 font-mono text-[11px] tracking-[0.05em] text-muted">
        © {year} {siteConfig.publisher}
      </p>
    </footer>
  );
}
