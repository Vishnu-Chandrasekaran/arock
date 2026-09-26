import liraLogo from "@/assets/act/lira-logo.png";

const Footer = () => (
  <footer className="bg-lira-dark text-primary-foreground">
    <div className="h-1 w-full bg-accent" />
    <div className="shell py-16">
      <div className="grid md:grid-cols-12 gap-12 mb-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-5">
            <img src={liraLogo} alt="LIRA Logo" className="h-14 w-14 rounded-full object-cover" />
            <div>
              <h3 className="font-display text-xl font-semibold">LIRA</h3>
              <p className="font-body text-[10px] uppercase tracking-[0.18em] text-primary-foreground/50">
                Research &amp; Academy
              </p>
            </div>
          </div>
          <p className="font-body text-sm text-primary-foreground/60 leading-relaxed max-w-sm">
            Linden Institute of Research &amp; Academy — the strategic think-tank of ACT India.
            Intellectual Leadership for an Inclusive Future.
          </p>
        </div>
        <div className="md:col-span-3">
          <h4 className="font-body text-[11px] font-bold uppercase tracking-[0.18em] text-accent mb-5">Quick Links</h4>
          <div className="flex flex-col gap-3">
            {["About", "ECOS-R Framework", "Research", "Team", "Governance", "Support"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-").replace("ecos-r-framework", "ecos")}`}
                className="font-body text-sm text-primary-foreground/60 hover:text-accent transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
        <div className="md:col-span-4">
          <h4 className="font-body text-[11px] font-bold uppercase tracking-[0.18em] text-accent mb-5">Motto</h4>
          <p className="font-display text-3xl italic text-primary-foreground/85 leading-snug">
            Live • Love • Let Live
          </p>
          <a
            href="#support"
            className="inline-block mt-6 bg-accent text-accent-foreground px-5 py-3 font-body text-[11px] font-bold uppercase tracking-[0.16em] hover:brightness-110 transition-all"
          >
            Partner With Us
          </a>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-body text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Arockyaa Charitable Trust (ACT India). All rights reserved.
        </p>
        <p className="font-body text-[10px] uppercase tracking-[0.2em] text-primary-foreground/30">
          Assess • Act • Advance
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
