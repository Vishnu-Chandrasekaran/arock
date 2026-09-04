import { motion } from "framer-motion";
import { TreePine, Scale, Users, Shield } from "lucide-react";

const symbols = [
  {
    icon: Scale,
    title: "The Tree of Truth",
    desc: "Historically revered as a place where only truth could be spoken, symbolizing our commitment to rigorous data and absolute transparency.",
  },
  {
    icon: Users,
    title: "The Tree of Assembly",
    desc: "A traditional village gathering point — LIRA acts as a knowledge hub where communities gather to solve the Inclusion Nexus.",
  },
  {
    icon: Shield,
    title: "The Canopy of Inclusion",
    desc: "A sanctuary of wisdom providing broad, inclusive shade, empowering every individual to flourish in a balanced ecosystem.",
  },
];

const LindenSymbol = () => (
  <section className="py-24 bg-primary text-primary-foreground">
    <div className="shell text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <TreePine className="w-10 h-10 text-accent mx-auto mb-4" />
        <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-3">Strategic Symbolism</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          The Linden Tree
        </h2>
        <p className="font-body text-primary-foreground/70 max-w-2xl mx-auto mb-16">
          The Linden Tree is the definitive emblem for LIRA. Its majestic, full-canopied
          form represents the expansive and protective nature of our research.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {symbols.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="bg-primary-foreground/5 border border-primary-foreground/10 p-8 rounded-lg"
          >
            <s.icon className="w-8 h-8 text-accent mx-auto mb-4" />
            <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LindenSymbol;
