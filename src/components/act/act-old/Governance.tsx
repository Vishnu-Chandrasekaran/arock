import { ShieldCheck, Heart, Lightbulb, Leaf, Users, FileCheck, Megaphone, Target } from "lucide-react";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    text: "We act with honesty and consistency. Our financial records, program outcomes and administrative decisions are open to scrutiny — from villagers in Dindigul to international partners.",
  },
  {
    icon: Heart,
    title: "Empathy — the 'Love' Principle",
    text: "We prioritize the dignity of the people we serve. Transparency for us isn't just about numbers; it's about being accountable to the families in our shelters and the children in our schools.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "We embrace data-driven solutions and eco-friendly technologies. Transparency in our results — successes or lessons — lets us refine our approach and scale what works.",
  },
  {
    icon: Leaf,
    title: "Sustainability — the 'Let Live' Principle",
    text: "We manage resources to ensure ACT India remains a permanent pillar of support. Financial discipline is the key to our longevity and our ability to protect the environment for years to come.",
  },
];

const STANDARDS = [
  {
    icon: Users,
    title: "Independent Oversight",
    text: "Our board of 6 Trustees and 6 Advisory Group members provides diverse expertise and objective oversight of all strategic decisions.",
  },
  {
    icon: FileCheck,
    title: "Regulatory Compliance",
    text: "Full compliance with Indian charitable laws — up-to-date 12A, 80G, FCRA disclosures and audited financial statements meeting national and international standards.",
  },
  {
    icon: Megaphone,
    title: "Public Accountability",
    text: "We publish Annual Reports and Quarterly Financial Disclosures openly on our digital platforms — inviting partnership and fostering a community of supporters.",
  },
  {
    icon: Target,
    title: "Impact Tracking",
    text: 'We don\'t just report spending; we report outcomes. Our "Assess. Act. Advance." methodology keeps us transparent about the real-world difference our programmes make.',
  },
];

export const Governance = () => (
  <section id="governance" className="py-20 md:py-28 bg-secondary/40">
    <div className="container">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-accent font-semibold tracking-widest text-xs uppercase">Governance</span>
        <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 mb-5">
          Governance & <em className="text-primary not-italic">Transparency</em>
        </h2>
        <div className="h-1 w-16 bg-accent mx-auto mb-6 rounded-full" />
        <p className="text-muted-foreground text-lg leading-relaxed">
          ACT India is built on a foundation of trust. To truly serve the community, we hold ourselves
          beyond reproach in our operations — ensuring every rupee donated and every hour volunteered
          is directed toward maximum social impact.
        </p>
      </div>

      {/* Mission Values */}
      <div className="mb-20">
        <h3 className="font-display font-bold text-2xl md:text-3xl text-center text-accent mb-10">
          Mission Values
        </h3>
        <div className="grid md:grid-cols-2 gap-5">
          {VALUES.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group p-7 rounded-2xl bg-card border border-border hover:border-accent hover:shadow-warm transition-smooth"
            >
              <div className="h-11 w-11 rounded-xl bg-secondary grid place-items-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-smooth mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h4 className="font-display font-bold text-xl text-accent mb-2">{title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Governance Standards */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-accent mb-3">
            Governance Standards
          </h3>
          <p className="text-muted-foreground">
            To uphold these values, ACT India adheres to a strict governance structure:
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {STANDARDS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group p-7 rounded-2xl bg-card border border-border hover:border-accent hover:shadow-warm transition-smooth flex gap-4"
            >
              <div className="h-11 w-11 shrink-0 rounded-xl bg-secondary grid place-items-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-xl text-accent mb-2">{title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
