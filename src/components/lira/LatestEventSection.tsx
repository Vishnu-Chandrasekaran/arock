import { motion } from "framer-motion";
import { Calendar, MapPin, FileText, Download, Play, Users } from "lucide-react";
import eventFlyer from "@/assets/act/icce-event-flyer.jpeg";
import eventVideo from "@/assets/act/icce-event-video.mp4";
import brochure from "@/assets/act/ICCE-2026-Brochure.pdf";

const keyDates = [
  { label: "Pre-Conference Workshop", date: "July 23, 2026" },
  { label: "Conference", date: "July 24 – 25, 2026" },
  { label: "Abstract Deadline", date: "June 15, 2026" },
  { label: "Final Registration", date: "July 15, 2026" },
];

const organizers = [
  "Patrician College of Arts & Science, Chennai",
  "Ruth S. Ammon College, Adelphi University, New York",
  "in collaboration with LIRA & ISROBO TEC",
];

const LatestEventSection = () => (
  <section id="latest-event" className="section-pad bg-background mt-10">
    <div className="shell">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-3">Upcoming</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Latest Event
        </h2>
        <div className="h-px w-16 bg-accent mx-auto mb-6" />
        <p className="font-body text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          LIRA co-organises the 3rd International Conference on Comprehensive Education —
          a global platform advancing inclusion, innovation, and rights-based empowerment.
        </p>
      </motion.div>

      {/* Event title banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-primary text-primary-foreground rounded-lg p-8 md:p-10 mb-10 text-center"
      >
        <p className="font-body text-[11px] tracking-[0.28em] uppercase text-accent mb-3">
          ICCE 2026 · 3rd Edition
        </p>
        <h3 className="font-display text-2xl md:text-3xl font-semibold leading-snug max-w-3xl mx-auto">
          Empowerment Beyond Barriers: Global Perspectives on Education,
          Development and Innovation for Individuals with Disabilities
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-6 font-body text-sm text-primary-foreground/80">
          <span className="inline-flex items-center gap-2">
            <Calendar className="w-4 h-4 text-accent" /> July 23 – 25, 2026
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="w-4 h-4 text-accent" /> Patrician College, Adyar, Chennai
          </span>
        </div>
      </motion.div>

      {/* Three pieces: flyer image, video, brochure */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* 1 — Event Flyer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="bg-card border border-border rounded-lg card-elevated overflow-hidden flex flex-col"
        >
          <div className="px-6 pt-6 flex items-center gap-2">
            <FileText className="w-5 h-5 text-accent" />
            <h4 className="font-display text-lg font-semibold text-foreground">Event Flyer</h4>
          </div>
          <div className="p-6 flex-1 flex items-center justify-center">
            <img
              src={eventFlyer}
              alt="ICCE 2026 conference flyer"
              className="w-full max-h-[520px] object-contain rounded-md"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* 2 — Event Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="bg-card border border-border rounded-lg card-elevated overflow-hidden flex flex-col"
        >
          <div className="px-6 pt-6 flex items-center gap-2">
            <Play className="w-5 h-5 text-accent" />
            <h4 className="font-display text-lg font-semibold text-foreground">Event Video</h4>
          </div>
          <div className="p-6 flex-1 flex items-center justify-center bg-foreground/5">
            <video
              src={eventVideo}
              controls
              playsInline
              preload="metadata"
              className="w-full rounded-md"
            />
          </div>
        </motion.div>

        {/* 3 — Brochure + details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="bg-card border border-border rounded-lg card-elevated p-6 flex flex-col"
        >
          <div className="flex items-center gap-2 mb-5">
            <Download className="w-5 h-5 text-accent" />
            <h4 className="font-display text-lg font-semibold text-foreground">Brochure & Details</h4>
          </div>

          {/* Key dates */}
          <dl className="space-y-2.5 mb-6">
            {keyDates.map((d) => (
              <div key={d.label} className="flex justify-between items-baseline border-b border-border pb-2">
                <dt className="font-body text-sm text-muted-foreground">{d.label}</dt>
                <dd className="font-body text-sm font-medium text-foreground">{d.date}</dd>
              </div>
            ))}
          </dl>

          {/* Organisers */}
          <div className="mb-6">
            <p className="font-body text-[11px] uppercase tracking-[0.16em] text-accent mb-2 inline-flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" /> Organised by
            </p>
            <ul className="font-body text-sm text-muted-foreground space-y-1.5">
              {organizers.map((o) => (
                <li key={o} className="leading-snug">{o}</li>
              ))}
            </ul>
          </div>

          {/* Download brochure */}
          <a
            href={brochure}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3.5 rounded-sm font-body font-bold text-xs uppercase tracking-[0.18em] hover:brightness-110 transition-all"
          >
            <Download className="w-4 h-4" />
            Download Brochure (PDF)
          </a>
        </motion.div>
      </div>

      {/* Note */}
      <p className="font-body text-xs text-muted-foreground text-center mt-8">
        Full paper submissions and registration via the official ICCE 2026 conference webpage.
      </p>
    </div>
  </section>
);

export default LatestEventSection;
