import { motion } from "framer-motion";
import { useState } from "react";
import {
  BookOpen, HeartPulse, Building2, Tractor, MonitorSmartphone,
  Coins, Wrench, Sun, Brain, ShieldAlert, Accessibility, Landmark,
} from "lucide-react";

const domains = [
  { icon: BookOpen, title: "Education: Universal Pedagogy & Cognitive Literacy", focus: "Evaluating the impact of 'Books over Bricks' on first-generation learners.", desc: "LIRA researches Universal Design for Learning (UDL) — moving neurodivergent students from margins to the center of the classroom, ensuring education is a permanent escape from poverty." },
  { icon: HeartPulse, title: "Health Equity & Rural Clinical Data", focus: "Analyzing longitudinal health outcomes in rural Ayush and maternal care camps.", desc: "We investigate the 'last-mile' barrier to healthcare, tracking how preventive traditional medicine and neonatal care (KMC) reduce infant mortality in underserved Dindigul corridors." },
  { icon: Building2, title: "The Inclusion Nexus in Urban Migration", focus: "Studying psychosocial reintegration of displaced urban populations.", desc: "Based on Chennai GCC shelters, we research vulnerabilities of migrant workers, providing data-driven strategies for urban restoration, legal aid, and dignifying the displaced." },
  { icon: Tractor, title: "Adaptive Organic Systems (AgrAbility)", focus: "Disability Research in climate-resilient agriculture.", desc: "We pioneer 'AgrAbility' research in India — developing adaptive technologies and silvi-pasture models that allow farmers with physical disabilities to lead the organic farming movement." },
  { icon: MonitorSmartphone, title: "Media, Information Integrity & AI Ethics", focus: "Measuring efficacy of 'Mobile Detoxing' and AI awareness workshops.", desc: "We research the psychological impact of screen dependency and develop frameworks for media literacy to help rural youth identify misinformation and navigate the AI-driven economy safely." },
  { icon: Coins, title: "Micro-Capital & Gender Economics", focus: "Socio-economic impact of Self-Help Groups (SHGs) on rural entrepreneurship.", desc: "We analyze how collective saving models empower women, transforming beneficiaries into active market leaders and creating a sustainable blueprint for rural financial independence." },
  { icon: Wrench, title: "Technical Vocation & Industry 4.0", focus: "Bridging the gap between ITI/Polytechnic training and global market demands.", desc: "We study the 'Skill Gap' in the Indian youth population, ensuring vocational training delivers high-value technical expertise and soft-skill mastery." },
  { icon: Sun, title: "Eco-Tech Adoption & Climate Literacy", focus: "Assessing community-level adoption rates of solar and rainwater harvesting.", desc: "We research how practical eco-technologies integrate into rural life, ensuring 'Greening the Hills' is a measurable, scientific success." },
  { icon: Brain, title: "Behavioral Change in Digital De-addiction", focus: "Disability & Mental Health Research in substance and screen addiction.", desc: "We study addiction as a barrier to productivity, providing evidence-based counseling models to reclaim lives from traditional and digital dependencies." },
  { icon: ShieldAlert, title: "Frontline Crisis Resilience (CIP)", focus: "Optimizing Disaster Management frameworks for vulnerable populations.", desc: "Analyzing our Community Intervention Program (CIP) outcomes from COVID-19, we research how to deliver swift, transparent relief that prioritizes those at highest risk." },
];

const dedicatedPillars = [
  { icon: Accessibility, title: "Disability Research", desc: "Integrating disability research across all ten programs. Moving from 'medical charity' to 'rights-based inclusion,' mapping physical, digital, and attitudinal barriers, and using field data to influence national disability legislation." },
  { icon: Landmark, title: "Tamil Heritage & Ethno-Research", desc: "Bridging ancient wisdom with modern sustainability — documenting Ethnobotanical and Siddha traditions, studying Sangam literature for historical models of social inclusion, and adapting the Ainthinai system to modern climate resilience." },
];

const ResearchDomains = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="research" className="py-24 bg-background">
      <div className="shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-accent mb-3">Our Work</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            10 Research & Programmatic Domains
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Derived from our field programs, with a primary focus on the intersection
            of sustainability and human rights.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {domains.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.08 }}
              className="bg-card border border-border rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div className="p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <d.icon className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-base font-semibold text-foreground leading-snug">
                      <span className="text-accent mr-1">{String(i + 1).padStart(2, "0")}.</span>
                      {d.title}
                    </h3>
                    <span className="text-muted-foreground text-xs ml-2 flex-shrink-0">
                      {expanded === i ? "−" : "+"}
                    </span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground mt-1 italic">{d.focus}</p>
                  {expanded === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="font-body text-sm text-foreground/80 mt-3 leading-relaxed"
                    >
                      {d.desc}
                    </motion.p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dedicated Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="font-display text-2xl font-bold text-foreground">Dedicated Pillars</h3>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {dedicatedPillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-primary text-primary-foreground p-8 rounded-lg"
            >
              <p.icon className="w-8 h-8 text-accent mb-4" />
              <h4 className="font-display text-xl font-semibold mb-3">{p.title}</h4>
              <p className="font-body text-sm text-primary-foreground/80 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchDomains;
