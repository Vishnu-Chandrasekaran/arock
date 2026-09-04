import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/act/ui/button";
import { cn } from "@/lib/utils";
import logoAsset from "@/assets/act/ACT_INDIA-2.png.asset.json";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Mission & Vision", href: "#mission" },
  { label: "Programmes", href: "#programmes" },
  { label: "Impact", href: "#impact" },
  { label: "Stories", href: "#stories" },
  { label: "Past Events", href: "#past-events" },
  { label: "Transparency", href: "#transparency" },
  { label: "Founder's Message", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-smooth",
        "bg-background border-b border-border",
        scrolled && "shadow-card",
      )}
    >
      <div className="flex items-stretch justify-between h-16 md:h-20 pl-5 md:pl-8">
        <a href="#top" className="flex items-center gap-2 shrink-0" aria-label="ACT India home">
          <img
            src={logoAsset.url}
            alt="ACT India Arockyaa Charitable Trust logo"
            className="h-10 md:h-14 w-auto object-contain"
          />
        </a>

        <nav aria-label="Primary" className="hidden xl:flex items-center gap-1">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={cn(
                "px-2.5 py-2 text-[0.75rem] font-semibold uppercase tracking-[0.1em] whitespace-nowrap transition-smooth",
                "text-foreground hover:text-primary border-b-2 border-transparent hover:border-primary",
              )}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-stretch gap-0 bg-primary text-primary-foreground pl-5 md:pl-7">
          <a
            href="#donate"
            className="hidden sm:inline-flex items-center gap-2 pr-5 md:pr-7 text-sm font-bold uppercase tracking-[0.1em] hover:opacity-80 transition-smooth"
          >
            <Heart className="h-4 w-4 fill-current" /> Donate
          </a>
          <button
            className={cn(
              "xl:hidden w-14 md:w-16 grid place-items-center",
              "text-primary-foreground hover:bg-black/10",
            )}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden bg-background border-t border-border animate-fade-in">
          <nav className="container py-4 flex flex-col gap-1" aria-label="Mobile">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-foreground hover:bg-secondary font-medium"
              >
                {n.label}
              </a>
            ))}
            <Button asChild variant="donate" size="lg" className="mt-2">
              <a href="#donate" onClick={() => setOpen(false)}><Heart className="fill-current" /> Donate Now</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
