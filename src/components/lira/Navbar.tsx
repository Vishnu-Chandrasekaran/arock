import { useState, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import liraLogo from "@/assets/act/lira-logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "ECOS-R Framework", href: "#ecos" },
  {
    label: "Research",
    href: "#research",
    subLinks: [
      { label: "All 10 Domains", href: "#research" },
      { label: "Disability Research", href: "#research" },
      { label: "Tamil Heritage & Ethno-Research", href: "#research" },
      { label: "Our Standards & Processes", href: "#governance" },
    ],
  },
  { label: "Team", href: "#team" },
  { label: "Governance", href: "#governance" },
  { label: "Support", href: "#support" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [researchOpen, setResearchOpen] = useState(false);
  const [mobileResearchOpen, setMobileResearchOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setResearchOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setResearchOpen(false), 200);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="h-1 w-full bg-accent" />
      <div className="shell flex items-center justify-between h-20">
        <a href="#" className="flex items-center gap-3">
          <img src={liraLogo.url} alt="LIRA Logo" className="h-16 w-16 rounded-full object-cover ring-1 ring-border shadow-sm" />
          <span className="text-2xl font-display font-semibold text-foreground">LIRA</span>
          <span className="hidden lg:inline text-[11px] uppercase tracking-[0.14em] text-muted-foreground font-body border-l border-border pl-3 max-w-[16rem] leading-tight">
            Linden Institute of Research &amp; Academy
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) =>
            link.subLinks ? (
              <div
                key={link.href + link.label}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={link.href}
                  className="text-[12px] font-body font-semibold uppercase tracking-[0.14em] text-foreground/80 hover:text-accent transition-colors inline-flex items-center gap-1"
                >
                  {link.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${researchOpen ? "rotate-180" : ""}`} />
                </a>
                <AnimatePresence>
                  {researchOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-3 w-72 bg-card border border-border border-t-2 border-t-accent shadow-xl overflow-hidden"
                    >
                      <div className="py-2">
                        {link.subLinks.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setResearchOpen(false)}
                            className="block px-4 py-2.5 text-sm font-body text-muted-foreground hover:text-accent hover:bg-muted transition-colors"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-[12px] font-body font-semibold uppercase tracking-[0.14em] text-foreground/80 hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            )
          )}
          <a
            href="#support"
            className="bg-accent text-accent-foreground px-5 py-2.5 text-[11px] font-body font-bold uppercase tracking-[0.16em] hover:brightness-110 transition-all"
          >
            Partner With Us
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>


      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link) =>
                link.subLinks ? (
                  <div key={link.href + link.label}>
                    <button
                      onClick={() => setMobileResearchOpen(!mobileResearchOpen)}
                      className="w-full flex items-center justify-between text-sm font-body text-foreground/80 hover:text-accent py-2 transition-colors"
                    >
                      {link.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileResearchOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {mobileResearchOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-4 border-l border-accent/20 ml-2"
                        >
                          {link.subLinks.map((sub) => (
                            <a
                              key={sub.label}
                              href={sub.href}
                              onClick={() => { setOpen(false); setMobileResearchOpen(false); }}
                              className="block text-sm font-body text-muted-foreground hover:text-accent py-2 transition-colors"
                            >
                              {sub.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-body text-foreground/80 hover:text-accent py-2 transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
