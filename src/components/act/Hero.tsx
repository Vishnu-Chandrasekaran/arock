import { Button } from "@/components/act/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import heroImage from "@/assets/act/hero-community.jpg.asset.json";

export const Hero = () => (
  <section id="top" className="pt-16 md:pt-20">
    {/* Institutional breadcrumb strip */}
    <div className="bg-secondary border-b border-border">
      <div className="container py-3 eyebrow text-muted-foreground">
        Arockyaa Charitable Trust <span className="mx-2 text-border">/</span> ACT India
      </div>
    </div>

    {/* Full-bleed hero with centered overlay content */}
    <div className="relative isolate min-h-[62vh] md:min-h-[74vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroImage.url}
        alt="ACT India founder receiving Global Achievers Council international award for charitable service"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" aria-hidden="true" />

      <div className="relative z-10 container text-center px-4 py-16">
        <p className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.28em] uppercase text-primary mb-6">
          <span className="w-2 h-2 rounded-full bg-primary" />
          Since 2008 · Tamil Nadu, India
        </p>
        <h1 className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-background max-w-4xl mx-auto mb-6">
          Live, Love, Let Live.
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-background/85 max-w-2xl mx-auto mb-8">
          We work alongside underserved communities across India to expand access to
          education, healthcare, and sustainable livelihoods.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild variant="hero" size="lg">
            <a href="#donate"><Heart className="fill-current" /> Donate Now</a>
          </Button>
          <Button asChild variant="heroOutline" size="lg">
            <a href="#impact">See Our Impact <ArrowRight /></a>
          </Button>
        </div>
      </div>
    </div>

    {/* Credentials strip */}
    <div className="bg-foreground text-background">
      <div className="container py-5 flex flex-wrap justify-center gap-x-10 gap-y-3 eyebrow">
        <span>Reg. No. 872/2008</span>
        <span>80G Tax Exempt</span>
        <span>Audited Annually</span>
        <span>Serving India since 2008</span>
      </div>
    </div>
  </section>
);
