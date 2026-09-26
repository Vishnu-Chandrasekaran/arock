import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoAsset from "@/assets/act/ACT_INDIA-2 (1).png";

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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-smooth bg-background border-b border-border",
        scrolled && "shadow-md",
      )}
    >
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-input"
      >
        Skip to content
      </a>

      <div className="container flex items-stretch justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center gap-2 shrink-0" aria-label="ACT India home">
          <img
            src={logoAsset}
            alt="ACT India Arockyaa Charitable Trust logo"
            className="h-12 md:h-[4.5rem] w-auto object-contain"
          />
        </a>

        <nav aria-label="Primary" className="hidden xl:flex items-center gap-1">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
               className="nav-underline px-2 py-3 text-[0.72rem] font-bold uppercase tracking-[0.08em] whitespace-nowrap text-foreground hover:text-primary transition-colors duration-200"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-stretch gap-0 bg-primary text-primary-foreground ml-4 pl-5 md:pl-7">
          <a
            href="#donate"
            className="hidden sm:inline-flex items-center gap-2 pr-5 md:pr-7 text-sm font-bold uppercase tracking-[0.1em] hover:opacity-80 transition-opacity duration-200"
          >
            <Heart className="h-4 w-4 fill-current" /> Donate
          </a>
          <button
             className="xl:hidden w-14 md:w-16 min-h-11 grid place-items-center text-primary-foreground hover:bg-foreground/10 transition-colors duration-200"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-drawer"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Slide-out drawer */}
      <div
        className={cn(
          "xl:hidden fixed inset-0 z-40 transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div
          className="absolute inset-0 bg-foreground/50"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
        <div
          id="mobile-drawer"
          className={cn(
            "absolute right-0 top-0 h-dvh w-[86%] max-w-sm bg-background shadow-lg flex flex-col",
            "transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between h-16 md:h-20 px-5 border-b border-border">
            <span className="eyebrow text-muted-foreground">Menu</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="min-h-11 min-w-11 grid place-items-center rounded-input hover:bg-secondary transition-colors duration-200"
            >
              <X />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-1" aria-label="Mobile">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 min-h-11 flex items-center rounded-input text-foreground hover:bg-secondary font-medium transition-colors duration-200"
              >
                {n.label}
              </a>
            ))}
            <Button asChild variant="donate" size="lg" className="mt-4 min-h-11">
              <a href="#donate" onClick={() => setOpen(false)}>
                <Heart className="fill-current" /> Donate Now
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
