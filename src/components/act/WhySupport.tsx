import { ShieldCheck, HandCoins, Stethoscope, GraduationCap, Users2, FileCheck2 } from "lucide-react";
import { Reveal } from "@/components/act/Reveal";

const VALUES = [
  {
    Icon: ShieldCheck,
    title: "Registered & compliant",
    body: "Reg. No. 872/2008, 80G tax exemption, and annual statutory audits on public record.",
  },
  {
    Icon: HandCoins,
    title: "Every rupee accounted for",
    body: "100% of public donations fund programmes; core costs are met by trustees and partners.",
  },
  {
    Icon: Users2,
    title: "Community-led design",
    body: "Programmes are shaped with village councils and women's collectives, not for them.",
  },
  {
    Icon: GraduationCap,
    title: "Education that lasts",
    body: "Scholarships, tutoring and digital literacy that follow a student through to employment.",
  },
  {
    Icon: Stethoscope,
    title: "Health at the doorstep",
    body: "Mobile camps and follow-up care reaching households far from the nearest clinic.",
  },
  {
    Icon: FileCheck2,
    title: "Measured and published",
    body: "Impact reports with third-party verified numbers, released every financial year.",
  },
];

export const WhySupport = () => (
  <section id="why-support" className="py-16 md:py-24 bg-background">
    <div className="container">
      <Reveal className="max-w-2xl mb-12">
        <span className="eyebrow text-primary">Why give</span>
        <h2 className="h2-display font-display font-bold mt-3 mb-4">Why support ACT India?</h2>
        <p className="text-muted-foreground body-lg">
          Six reasons universities, corporate partners and individual donors choose to work with us.
        </p>
      </Reveal>

      <ul className="flex flex-wrap gap-6">
        {VALUES.map((v, i) => (
          <Reveal
            key={v.title}
            as="li"
            delay={i * 80}
            className="flex-1 min-w-[16rem] basis-[16rem] list-none"
          >
            <div className="h-full card-lift bg-card border border-border rounded-lg shadow-sm p-6">
              <span
                className="h-11 w-11 rounded-input grid place-items-center bg-secondary text-primary mb-4"
                aria-hidden="true"
              >
                <v.Icon className="h-5 w-5" />
              </span>
              <h3 className="font-display font-bold text-xl mb-2">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.body}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);
