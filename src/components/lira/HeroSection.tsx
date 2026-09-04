import { motion } from "framer-motion";
import heroImage from "@/assets/lira/hero-linden.jpg.asset.json";

const HeroSection = () => {
  return (
    <section aria-label="Introduction" className="relative flex min-h-[88vh] items-center overflow-hidden pb-32 md:min-h-screen md:pb-28">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage.url})` }}
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      <div className="relative z-10 shell pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="font-body text-[11px] font-bold tracking-[0.28em] uppercase text-highlight mb-6">
            ACT India's Strategic Think-Tank
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-primary-foreground leading-[1.05] mb-6">
            Linden Institute of{" "}
            <span className="italic">Research</span> &amp; Academy
          </h1>
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-accent" />
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary-foreground/80">
              Live • Love • Let Live
            </p>
          </div>
          <p className="font-body text-base md:text-lg text-primary-foreground/75 max-w-xl mb-10 leading-relaxed">
            Intellectual Leadership for an Inclusive Future. We translate grassroots action
            into evidence-based research, ensuring national development is sustainable and universally accessible.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#research"
              className="px-8 py-4 bg-accent text-accent-foreground font-body font-bold text-xs uppercase tracking-[0.18em] hover:brightness-110 transition-all"
            >
              Explore Research
            </a>
            <a
              href="#about"
              className="px-8 py-4 border border-primary-foreground/25 text-primary-foreground font-body font-bold text-xs uppercase tracking-[0.18em] hover:bg-primary-foreground/10 transition-colors"
            >
              Who We Are
            </a>
          </div>
        </motion.div>
      </div>

      {/* Angled crimson footer band — unique structural signature */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="h-1 w-full bg-highlight" />
        <div className="bg-primary/95 backdrop-blur-sm">
          <div className="shell grid grid-cols-2 md:grid-cols-4 divide-x divide-primary-foreground/10">
            {[
              { k: "2008", v: "Established" },
              { k: "10", v: "Research Domains" },
              { k: "ECOS-R", v: "Framework" },
              { k: "12", v: "Trustees & Advisors" },
            ].map((s) => (
              <div key={s.v} className="px-4 py-5">
                <p className="font-display text-2xl font-semibold text-primary-foreground">{s.k}</p>
                <p className="font-body text-[11px] uppercase tracking-[0.16em] text-primary-foreground/60">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default HeroSection;
