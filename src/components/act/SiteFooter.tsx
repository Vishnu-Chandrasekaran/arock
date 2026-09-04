import { useState } from "react";
import { z } from "zod";
import { Facebook, Instagram, Linkedin, Youtube, ArrowRight } from "lucide-react";
import { Button } from "@/components/act/ui/button";
import { toast } from "sonner";
import logoAsset from "@/assets/act/ACT_INDIA-2.png.asset.json";

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
        <div className="container py-16 md:py-20 text-center max-w-2xl mx-auto">
          <h3 className="font-display font-bold text-3xl md:text-4xl mb-4">
            Quarterly impact letter
          </h3>
          <p className="text-primary-foreground/80 mb-8">
            Four times a year. Real stories from the field, audited numbers, no spam.
          </p>
          <form onSubmit={subscribe} className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
              maxLength={255}
              className="w-full sm:w-80 h-14 px-6 rounded-full bg-primary-foreground/10 border border-primary-foreground/30 focus:border-primary-foreground focus:outline-none text-primary-foreground placeholder:text-primary-foreground/60"
            />
            <Button
              type="submit"
              size="xl"
              className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold"
            >
              Subscribe <ArrowRight />
            </Button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-[#16181d] text-[#e8e6e1]">
        <div className="container py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src={logoAsset.url}
                alt="ACT India Arockyaa Charitable Trust logo"
                className="h-14 w-auto object-contain rounded bg-white p-1"
              />
              <div>
                <div className="font-display font-bold text-lg">ACT India</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-[#e8e6e1]/60">
                  Arockyaa Charitable Trust
                </div>
              </div>
            </div>
            <p className="text-[#e8e6e1]/70 leading-relaxed text-sm max-w-xs">
              Action for Community Transformation. An independent charity registered in 2008,
              working across India to expand education, healthcare and livelihoods.
            </p>
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
                  className="h-11 w-11 rounded-full border border-[#e8e6e1]/25 hover:border-primary hover:bg-primary grid place-items-center transition-smooth"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Explore">
            <h4 className="font-semibold text-xs uppercase tracking-[0.22em] mb-5 text-[#e8e6e1]">Explore</h4>
            <ul className="space-y-3 text-[#e8e6e1]/70 text-sm">
              <li><a href="#about" className="hover:text-primary-glow">About</a></li>
              <li><a href="#impact" className="hover:text-primary-glow">Impact</a></li>
              <li><a href="#stories" className="hover:text-primary-glow">Stories</a></li>
              <li><a href="#transparency" className="hover:text-primary-glow">Transparency</a></li>
              <li><a href="#team" className="hover:text-primary-glow">Team</a></li>
            </ul>
          </nav>

          <nav aria-label="Get involved">
            <h4 className="font-semibold text-xs uppercase tracking-[0.22em] mb-5 text-[#e8e6e1]">Get Involved</h4>
            <ul className="space-y-3 text-[#e8e6e1]/70 text-sm">
              <li><a href="#donate" className="hover:text-primary-glow">Donate</a></li>
              <li><a href="#contact" className="hover:text-primary-glow">Volunteer</a></li>
              <li><a href="#contact" className="hover:text-primary-glow">Partner with us</a></li>
              <li><a href="#contact" className="hover:text-primary-glow">Careers</a></li>
              <li><a href="#contact" className="hover:text-primary-glow">Press inquiries</a></li>
            </ul>
          </nav>

          <nav aria-label="Trust and compliance">
            <h4 className="font-semibold text-xs uppercase tracking-[0.22em] mb-5 text-[#e8e6e1]">Trust &amp; Compliance</h4>
            <ul className="space-y-3 text-[#e8e6e1]/70 text-sm">
              <li><a href="#" className="hover:text-primary-glow">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-glow">Terms &amp; Conditions</a></li>
              <li><a href="#transparency" className="hover:text-primary-glow">Impact Report</a></li>
              <li><a href="#transparency" className="hover:text-primary-glow">Financials (80G)</a></li>
              <li><a href="#transparency" className="hover:text-primary-glow">Annual Report</a></li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-[#e8e6e1]/10">
          <div className="container py-6 flex flex-col md:flex-row gap-3 justify-between items-center text-xs text-[#e8e6e1]/50">
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
