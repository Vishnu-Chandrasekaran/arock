import { motion } from "framer-motion";
import communityImage from "@/assets/act/team-collaboration.png";
import { TreePine, Eye, Target, Heart } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6 }
  }),
};

const values = [
  { icon: Target, title: "Integrity", desc: "Absolute transparency in governance and financial disclosures." },
  { icon: Heart, title: "Empathy", desc: "Prioritizing human dignity in every program." },
  { icon: Eye, title: "Innovation", desc: "Embracing AI, Eco-Tech, and modern data analytics." },
  { icon: TreePine, title: "Inclusion", desc: "Universal Design as the standard, not the exception." },
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-background">
    <div className="shell">
      {/* Who We Are */}
      <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          custom={0}
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-3">Who We Are</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Grassroots Action Meets <span className="italic text-primary">Evidence-Based Strategy</span>
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            ACT India (Arockyaa Charitable Trust, est. 2008) is an independent frontline
            development organization dedicated to transforming lives through grassroots action
            and systemic advocacy.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">ACT India acts on the ground.</strong>{" "}
            <strong className="text-primary">LIRA assesses the data and advances the strategy.</strong>
          </p>
          <p className="font-body text-muted-foreground leading-relaxed">
            Together, we ensure every intervention—from urban shelters in Chennai to organic
            farms in Dindigul—is backed by evidence and designed for universal inclusion,
            with a primary focus on persons with disabilities.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          custom={1}
          className="relative"
        >
          <img
            src={communityImage}
            alt="Research team collaborating around a laptop during a strategy meeting"
            className="rounded-lg shadow-xl w-full object-cover aspect-square"
          />
          <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg max-w-[200px]">
            <p className="font-display text-2xl font-bold">Since 2008</p>
            <p className="font-body text-sm opacity-80">Transforming lives</p>
          </div>
        </motion.div>
      </div>

      {/* Vision & Mission */}
      <div className="grid md:grid-cols-2 gap-8 mb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="bg-card p-8 md:p-10 rounded-lg border border-border"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-3">Our Vision</p>
          <p className="font-display text-xl md:text-2xl text-foreground leading-relaxed">
            To be India's leading knowledge-driven ecosystem for inclusive sustainability,
            where research-driven solutions ensure the transition to a greener, more organic
            world leaves no one behind—especially those with disabilities.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="bg-primary text-primary-foreground p-8 md:p-10 rounded-lg"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-3">Our Mission</p>
          <p className="font-display text-xl md:text-2xl leading-relaxed opacity-90">
            To generate high-quality, evidence-based research and execute high-impact community
            programs at the intersection of Education, Community, Organic Systems, and
            Sustainability (ECOS).
          </p>
        </motion.div>
      </div>

      {/* Values */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={i}
            className="bg-card p-6 rounded-lg border border-border text-center"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <v.icon className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{v.title}</h3>
            <p className="font-body text-sm text-muted-foreground">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
