import { Calendar, MapPin, Download } from "lucide-react";
import { Button } from "@/components/act/ui/button";
import brochureAsset from "@/assets/act/icce2026-brochure.jpeg.asset.json";
import videoAsset from "@/assets/act/icce2026-video.mp4.asset.json";
import pdfAsset from "@/assets/act/icce2026-brochure.pdf.asset.json";

export const UpcomingEvents = () => {
  return (
    <section id="events" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <span className="text-accent font-semibold tracking-widest text-xs uppercase">
            Upcoming Events
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 mb-4 text-foreground">
            Where we'll be next.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Join us at global gatherings advancing inclusive education, research, and community impact.
          </p>
        </div>

        <div className="max-w-6xl mx-auto rounded-2xl border border-border bg-card shadow-card overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <a
              href={pdfAsset.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative group bg-secondary"
              aria-label="Download ICCE 2026 brochure"
            >
              <img
                src={brochureAsset.url}
                alt="3rd International Conference on Comprehensive Education (ICCE 2026) brochure"
                loading="lazy"
                className="w-full h-full object-cover max-h-[640px] transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </a>

            <div className="relative bg-black">
              <video
                controls
                preload="metadata"
                poster={brochureAsset.url}
                className="w-full h-full object-cover max-h-[640px]"
              >
                <source src={videoAsset.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className="p-6 md:p-10 border-t border-border">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:justify-between">
              <div>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-3">
                  ICCE 2026 — Empowerment Beyond Barriers
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-accent" />
                    July 23–25, 2026
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-accent" />
                    Patrician College of Arts & Science, Chennai
                  </span>
                </div>
              </div>
              <Button asChild variant="default" size="lg">
                <a href={pdfAsset.url} target="_blank" rel="noopener noreferrer">
                  <Download /> Download Brochure
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
