import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import heroImage from "@/assets/act/hero-community.jpg";

export const Hero = () => (
  <section id="top" className="pt-16 md:pt-20">
    <div className="relative isolate min-h-[600px] flex items-center overflow-hidden bg-secondary">
      <img
        src={heroImage}
        alt="ACT India founder receiving the Global Achievers Council international award for charitable service, on stage with community members"
        width={1920}
        height={1280}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* transparent → dark gradient keeps the photo visible while text stays legible */}
      <div className="absolute inset-0 bg-gradient-hero" aria-hidden="true" />

      <div className="relative z-10 container py-16 md:py-20 w-full">
            <div className="max-w-xl bg-background/95 border-l-[12px] border-primary p-8 md:p-12 lg:p-14 shadow-lg backdrop-blur-sm">
              <span
                className="inline-block eyebrow text-primary animate-fade-up"
                style={{ animationDelay: "0.1s" }}
              >
                Since 2008 · Tamil Nadu, India
              </span>
              <h1
                className="mt-5 h1-display font-bold text-foreground animate-fade-up"
                style={{ animationDelay: "0.3s" }}
              >
                Live, Love, Let Live.
              </h1>
              <p
                className="mt-5 body-lg text-muted-foreground max-w-lg animate-fade-up"
                style={{ animationDelay: "0.45s" }}
              >
                We work alongside underserved communities across India to expand access to
                education, healthcare, and sustainable livelihoods.
              </p>
              <div
                className="mt-8 flex flex-wrap gap-4 animate-fade-up"
                style={{ animationDelay: "0.6s" }}
              >
                 <Button asChild size="lg" className="min-h-11 rounded-none shadow-none uppercase tracking-wider">
                  <a href="#donate"><Heart className="fill-current" /> Donate Now</a>
                </Button>
                 <Button asChild variant="outline" size="lg" className="min-h-11 rounded-none border-foreground text-foreground uppercase tracking-wider">
                  <a href="#impact">See Our Impact <ArrowRight /></a>
                </Button>
              </div>
            </div>
      </div>
    </div>

    {/* Credentials strip */}
    <div className="bg-foreground text-background">
      <div className="container grid grid-cols-2 md:grid-cols-4">
        {['Reg. No. 872/2008', '80G Tax Exempt', 'Audited Annually', 'Serving India since 2008'].map((item) => (
          <span key={item} className="eyebrow py-6 px-4 text-center border-background/15 border-r last:border-r-0">{item}</span>
        ))}
      </div>
    </div>
  </section>
);
