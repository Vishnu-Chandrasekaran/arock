import { motion } from "framer-motion";
import { BookOpen, Users, Leaf, Recycle, FlaskConical } from "lucide-react";

const pillars = [
  { icon: BookOpen, letter: "E", title: "Education", desc: "Breaking the poverty cycle through Universal Design for Learning (UDL) and vocational mastery." },
  { icon: Users, letter: "C", title: "Community", desc: "Building resilient, barrier-free urban and rural environments." },
  { icon: Leaf, letter: "O", title: "Organic Systems", desc: 'Pioneering "AgrAbility" and sustainable, accessible agriculture.' },
  { icon: Recycle, letter: "S", title: "Sustainability", desc: "Linking regenerative ecology with health equity for all." },
  { icon: FlaskConical, letter: "R", title: "Research", desc: "The core engine that validates our impact and drives policy change." },
];

const EcosSection = () => (
  <section id="ecos" className="py-24 bg-muted">
    <div className="shell">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-3">Operational Framework</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
          The ECOS-R Framework
        </h2>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto">
          Our holistic approach to research and development, ensuring every dimension of
          inclusive sustainability is addressed.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {pillars.map((p, i) => (
          <motion.div
            key={p.letter}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-background p-6 rounded-lg border border-border text-center group hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
              <p.icon className="w-6 h-6 text-accent" />
            </div>
            <span className="font-display text-3xl font-bold text-accent">{p.letter}</span>
            <h3 className="font-display text-lg font-semibold text-foreground mt-1 mb-2">{p.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EcosSection;
