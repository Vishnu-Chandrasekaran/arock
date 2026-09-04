import { motion } from "framer-motion";
import { Briefcase, GraduationCap, HandHeart, Building } from "lucide-react";

const partnerships = [
  { icon: Briefcase, type: "Corporate CSR", focus: "Project Sponsorship", impact: "High-visibility social impact & 80G benefits." },
  { icon: GraduationCap, type: "Internships", focus: "Data & Research Volunteering", impact: "Hands-on field experience and certification." },
  { icon: HandHeart, type: "Grassroots Action", focus: "Direct Community Engagement", impact: "Skill-sharing and community strengthening." },
];

const SupportSection = () => (
  <section id="support" className="py-24 bg-background">
    <div className="shell">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-3">Get Involved</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Support & Contributions
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {partnerships.map((p, i) => (
          <motion.div
            key={p.type}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card border border-border p-8 rounded-lg"
          >
            <p.icon className="w-8 h-8 text-accent mb-4" />
            <h3 className="font-display text-lg font-semibold text-foreground mb-1">{p.type}</h3>
            <p className="font-body text-sm text-accent font-medium mb-2">{p.focus}</p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.impact}</p>
          </motion.div>
        ))}
      </div>

      {/* Bank Details */}
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border p-8 rounded-lg"
        >
          <div className="flex items-center gap-3 mb-4">
            <Building className="w-5 h-5 text-primary" />
            <h3 className="font-display text-lg font-semibold text-foreground">Local Contribution</h3>
          </div>
          <dl className="font-body text-sm space-y-2">
            <div className="flex justify-between"><dt className="text-muted-foreground">Account Name</dt><dd className="text-foreground font-medium">Arockyaa Charitable Trust</dd></div>
            <div className="flex justify-between"><dt className="text-muted-foreground">Bank</dt><dd className="text-foreground font-medium">SBI, Nilakottai</dd></div>
            <div className="flex justify-between"><dt className="text-muted-foreground">A/C No</dt><dd className="text-foreground font-medium">30403811601</dd></div>
            <div className="flex justify-between"><dt className="text-muted-foreground">IFSC</dt><dd className="text-foreground font-medium">SBIN0000791</dd></div>
          </dl>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SupportSection;
