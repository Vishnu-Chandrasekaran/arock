import { useState } from "react";
import { z } from "zod";
import { Facebook, Instagram, Linkedin, Youtube, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import logoAsset from "@/assets/act/ACT_INDIA-2 (1).png";


const emailSchema = z.string().trim().email("Enter a valid email").max(255);

export const SiteFooter = () => {
  const [email, setEmail] = useState("");

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const r = emailSchema.safeParse(email);
    if (!r.success) {
      toast.error(r.error.issues[0]?.message ?? "Please enter a valid email");
      return;
    }
    setEmail("");
    toast.success("Subscribed", { description: "Look out for our quarterly impact letter." });
  };

  const year = new Date().getFullYear();

  return (
    <footer>
      {/* Newsletter band */}
      <div className="bg-primary text-primary-foreground">
         <div className="container py-14 md:py-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
           <h3 className="font-bold text-3xl md:text-4xl mb-3">
            Quarterly impact letter
          </h3>
           <p className="text-primary-foreground/80">
            Four times a year. Real stories from the field, audited numbers, no spam.
          </p>
          </div>
           <form onSubmit={subscribe} className="flex flex-col sm:flex-row gap-2 justify-center">
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
              maxLength={255}
               className="w-full h-14 px-5 rounded-none bg-primary-foreground/10 border border-primary-foreground/40 focus:border-primary-foreground focus:outline-none text-primary-foreground placeholder:text-primary-foreground/60"
            />
            <Button
              type="submit"
              size="xl"
               className="rounded-none bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold uppercase tracking-wider"
            >
              Subscribe <ArrowRight />
            </Button>
          </form>
        </div>
      </div>

      {/* Main footer */}
       <div className="bg-foreground text-background">
        <div className="container py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src={logoAsset}
                alt="ACT India Arockyaa Charitable Trust logo"
                className="h-14 w-auto object-contain bg-background p-1"
              />
              <div>
                <div className="font-bold text-lg">ACT India</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-background/60">
                  Arockyaa Charitable Trust
                </div>
              </div>
            </div>
            <p className="text-background/70 leading-relaxed text-sm max-w-xs">
              Action for Community Transformation. An independent charity registered in 2008,
              working across India to expand education, healthcare and livelihoods.
            </p>
             <address className="mt-5 not-italic text-sm text-background/70 space-y-1">
              <div>Arockyaa Charitable Trust, Dindigul, Tamil Nadu 624001, India</div>
              <div>
                <a href="mailto:info@actindia.org" className="link-underline hover:text-primary-glow">
                  info@actindia.org
                </a>
              </div>
              <div>
                <a href="tel:+914512400000" className="link-underline hover:text-primary-glow">
                  +91 451 240 0000
                </a>
              </div>
            </address>
            <a
              href="#transparency"
              className="mt-5 inline-flex items-center gap-2 min-h-11 text-sm font-semibold text-primary-glow link-underline"
            >
              Download Impact Report <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Youtube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={`ACT India on ${label}`}
                   className="h-11 w-11 border border-background/25 hover:border-primary hover:bg-primary hover:text-primary-foreground grid place-items-center transition-colors duration-150"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

          </div>

          <nav aria-label="Explore">
            <h4 className="font-semibold text-xs uppercase tracking-[0.22em] mb-5 text-background">Explore</h4>
            <ul className="space-y-3 text-background/70 text-sm">
              <li><a href="#about" className="hover:text-primary-glow">About</a></li>
              <li><a href="#impact" className="hover:text-primary-glow">Impact</a></li>
              <li><a href="#stories" className="hover:text-primary-glow">Stories</a></li>
              <li><a href="#transparency" className="hover:text-primary-glow">Transparency</a></li>
              <li><a href="#team" className="hover:text-primary-glow">Team</a></li>
            </ul>
          </nav>

          <nav aria-label="Get involved">
            <h4 className="font-semibold text-xs uppercase tracking-[0.22em] mb-5 text-background">Get Involved</h4>
            <ul className="space-y-3 text-background/70 text-sm">
              <li><a href="#donate" className="hover:text-primary-glow">Donate</a></li>
              <li><a href="#contact" className="hover:text-primary-glow">Volunteer</a></li>
              <li><a href="#contact" className="hover:text-primary-glow">Partner with us</a></li>
              <li><a href="#contact" className="hover:text-primary-glow">Careers</a></li>
              <li><a href="#contact" className="hover:text-primary-glow">Press inquiries</a></li>
            </ul>
          </nav>

          <nav aria-label="Trust and compliance">
            <h4 className="font-semibold text-xs uppercase tracking-[0.22em] mb-5 text-background">Trust &amp; Compliance</h4>
            <ul className="space-y-3 text-background/70 text-sm">
              <li><a href="#" className="hover:text-primary-glow">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-glow">Terms &amp; Conditions</a></li>
              <li><a href="#transparency" className="hover:text-primary-glow">Impact Report</a></li>
              <li><a href="#transparency" className="hover:text-primary-glow">Financials (80G)</a></li>
              <li><a href="#transparency" className="hover:text-primary-glow">Annual Report</a></li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-background/10">
          <div className="container py-6 flex flex-col md:flex-row gap-3 justify-between items-center text-xs text-background/50">
            <p>© {year} Arockyaa Charitable Trust. Reg. No. 872/2008. All rights reserved.</p>
            <p className="flex gap-5">
              <a href="#" className="hover:text-primary-glow">Privacy</a>
              <a href="#" className="hover:text-primary-glow">Terms</a>
              <a href="/sitemap.xml" className="hover:text-primary-glow">Sitemap</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
