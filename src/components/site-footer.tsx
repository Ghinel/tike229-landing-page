import { footer, siteConfig } from "@/content/landing";

export function SiteFooter() {
  return (
    <footer className="relative border-t-2 border-dashed border-bone/15 bg-ink px-6 py-14">
      <div className="flex flex-col items-start justify-between gap-6 wide:flex-row wide:items-center wide:gap-0">
        <div>
          <p className="mb-1 font-display text-lg font-extrabold">{siteConfig.name}</p>
          <p className="text-[13px] text-muted">{footer.byline}</p>
        </div>

        <nav className="flex flex-wrap gap-6 text-[13px]">
          {footer.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-accent no-underline transition-colors duration-200 hover:text-bone"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
