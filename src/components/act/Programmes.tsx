import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  HeartPulse,
  Home,
  Leaf,
  Users,
  ShieldAlert,
  ArrowRight,
  Monitor,
  Award,
  HeartHandshake,
} from "lucide-react";
import educationAsset from "@/assets/act/education-literacy-euc3 (1).jpg";
import healthcareAsset from "@/assets/act/medical-wellness.jpg";
import shelterAsset from "@/assets/act/Urban_Shelter_Migration_Support.png";
import climateAsset from "@/assets/act/climate-green.jpg";
import empowermentAsset from "@/assets/act/empowerment-youth-women.png";
import disasterImg from "@/assets/act/programme-disaster.jpg";
import digitalAsset from "@/assets/act/digital-media-literacy.png";
import skillsAsset from "@/assets/act/skill-development.jpg";
import deaddictionImg from "@/assets/act/programme-deaddiction.jpg";

const ACCENTS: Record<string, string> = {
  education: "hsl(var(--primary))",
  healthcare: "hsl(var(--primary))",
  shelter: "hsl(var(--primary))",
  climate: "hsl(var(--primary))",
  empowerment: "hsl(var(--primary))",
  disaster: "hsl(var(--primary))",
  digital: "hsl(var(--primary))",
  skills: "hsl(var(--primary))",
  deaddiction: "hsl(var(--primary))",
};

const ICONS: Record<string, React.ElementType> = {
  education: BookOpen,
  healthcare: HeartPulse,
  shelter: Home,
  climate: Leaf,
  empowerment: Users,
  disaster: ShieldAlert,
  digital: Monitor,
  skills: Award,
  deaddiction: HeartHandshake,
};

const PROGRAMMES = [
  {
    id: "education",
    label: "Scholarship & learning",
    title: "Education & literacy",
    image: educationAsset,
    text: "Scholarships, after-school support, adult literacy classes and school resourcing that help children and young people stay in education and build market-ready skills.",
  },
  {
    id: "healthcare",
    label: "Medical & wellness",
    title: "Holistic healthcare",
    image: healthcareAsset,
    text: "Mobile medical camps, maternal and child health support, preventive screenings and mental health counselling for villages with no nearby clinic.",
  },
  {
    id: "shelter",
    label: "Urban shelter & migration support",
    title: "Urban shelter & migration support",
    image: shelterAsset,
    text: "Temporary shelter, food, legal-aid linkage and counselling for migrants, displaced families and elderly citizens facing homelessness.",
  },
  {
    id: "climate",
    label: "Climate & green",
    title: "Sustainable development & climate resilience",
    image: climateAsset,
    text: "Solar irrigation, organic farming training, tree planting and water conservation that help rural communities adapt to climate change.",
  },
  {
    id: "empowerment",
    label: "Empowerment",
    title: "Empowerment of youth & women",
    image: empowermentAsset,
    text: "Self-help groups, leadership workshops, vocational training and safe spaces that give women and young people skills, confidence and voice.",
  },
  {
    id: "disaster",
    label: "Disaster management",
    title: "Disaster management & relief",
    image: disasterImg,
    text: "Rapid-response food, medical kits, water and temporary shelter during floods, droughts and health emergencies, followed by long-term recovery support.",
  },
  {
    id: "digital",
    label: "Digital & media",
    title: "Digital & media literacy (AI awareness)",
    image: digitalAsset,
    text: "Community-based digital literacy classes, safe internet workshops and AI-awareness sessions that help young people and women use technology confidently, critically and safely.",
  },
  {
    id: "skills",
    label: "Skill development",
    title: "Advanced skill development",
    image: skillsAsset,
    text: "Market-linked vocational training, apprenticeship bridges and certification support in trades, IT and entrepreneurship that turn raw talent into sustainable livelihoods.",
  },
  {
    id: "deaddiction",
    label: "De-addiction & detox",
    title: "De-addiction & mobile detoxing",
    image: deaddictionImg,
    text: "Counselling, peer-support circles and family healing programmes that address substance dependency and unhealthy screen use with dignity, privacy and long-term follow-up.",
  },
];

export const Programmes = () => {
  const [active, setActive] = useState(PROGRAMMES[0]!.id);
  const current = PROGRAMMES.find((p) => p.id === active) || PROGRAMMES[0]!;
  const accent = ACCENTS[current.id];

  return (
    <section
      id="programmes"
      className="py-16 md:py-24 bg-secondary border-y border-border"
    >
      <div className="container">
        {/* Section header */}
        <div className="max-w-2xl mb-10 md:mb-14">
          <span className="eyebrow text-primary">
            Programmes
          </span>
          <h2 className="font-bold text-3xl md:text-4xl mt-4 mb-4 text-foreground">
            What we do on the ground
          </h2>
          <p className="text-[15px] leading-[1.7] text-muted-foreground">
            Our work is designed with communities, not for them. Each programme
            addresses a practical barrier while building long-term resilience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Category cards */}
          <div className="flex flex-col border-t border-l border-border" role="tablist" aria-label="Programme categories">
            {PROGRAMMES.map((programme) => {
              const Icon = ICONS[programme.id];
              const isActive = active === programme.id;
              const colour = ACCENTS[programme.id];

              return (
                <button
                  key={programme.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="programme-panel"
                  id={`tab-${programme.id}`}
                  onClick={() => setActive(programme.id)}
                  className={cn(
                     "group text-left border-r border-b border-border transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                     isActive ? "bg-background" : "bg-secondary hover:bg-background"
                  )}
                  style={{
                    borderLeftWidth: "4px",
                    borderLeftColor: colour,
                    padding: "1.5rem",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <span
                       className="inline-flex items-center justify-center w-9 h-9 shrink-0 bg-secondary text-primary"
                      style={{
                        color: colour,
                      }}
                      aria-hidden="true"
                    >
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="sr-only">
                      {programme.title} programme
                    </span>
                    <div className="flex-1 min-w-0">
                       <span className="block font-mono text-[10px] font-semibold uppercase tracking-[0.12em] mb-1 text-muted-foreground">
                        {programme.label}
                      </span>
                      <span
                        className={cn(
                          "block font-bold text-base leading-tight",
                           isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                        )}
                      >
                        {programme.title}
                      </span>
                    </div>
                    <ArrowRight
                      className={cn(
                        "w-4 h-4 mt-1 shrink-0 transition-transform duration-300",
                        isActive
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-60"
                      )}
                      style={{ color: colour }}
                      aria-hidden="true"
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Featured programme */}
          <div
            id="programme-panel"
            role="tabpanel"
            aria-labelledby={`tab-${current.id}`}
             className="relative overflow-hidden min-h-[420px] md:min-h-[540px] bg-foreground"
          >
            <img
              src={current.image}
              alt={current.title}
              width={1200}
              height={800}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                 background: "linear-gradient(180deg, transparent 0%, hsl(var(--foreground) / 0.9) 100%)",
              }}
              aria-hidden="true"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <span
                 className="inline-block font-mono text-[10px] font-semibold uppercase tracking-[0.12em] mb-3 px-2 py-1 bg-primary text-primary-foreground"
              >
                {current.label}
              </span>
              <h3
                 className="font-bold text-2xl md:text-[28px] text-background mb-3 leading-tight"
              >
                {current.title}
              </h3>
              <p
                 className="text-[15px] leading-[1.7] mb-6 max-w-xl text-background/85"
              >
                {current.text}
              </p>
              <button
                 className="inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground px-5 py-2.5 transition-colors duration-300 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-foreground"
                style={{ backgroundColor: accent }}
              >
                Explore programme
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
