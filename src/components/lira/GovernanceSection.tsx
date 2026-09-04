import { motion } from "framer-motion";
import { Shield, Users, BarChart3 } from "lucide-react";

const GovernanceSection = () => (
  <section id="governance" className="py-24 bg-muted">
    <div className="shell">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-3">Accountability</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          Governance & Transparency
        </h2>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto italic">
          "Assess. Act. Advance."
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {[
          { icon: Shield, title: "Independent Oversight", desc: "Guided by 6 Trustees and 6 Advisory Group members ensuring rigorous governance." },
          { icon: BarChart3, title: "Audited Impact", desc: "We don't just report spending — we report outcomes, from tree survival rates to digital detox success stories." },
          { icon: Users, title: "Community First", desc: "Every decision prioritizes the communities we serve, with full financial disclosure and participatory governance." },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-background p-8 rounded-lg border border-border text-center"
          >
            <item.icon className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">{item.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GovernanceSection;
