import { GraduationCap, Stethoscope, Sprout, Users } from "lucide-react";

const PROGRAMS = [
  {
    icon: GraduationCap,
    title: "Education",
    text: "Scholarships, public school resourcing, vocational training, and digital wellness programs that prepare young people for real opportunity.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    text: "Mobile medical camps, maternal & child health, mental health counselling, and preventive wellness for villages with no nearby clinic.",
  },
  {
    icon: Sprout,
    title: "Sustainable Livelihoods",
    text: "Skill-building, micro-enterprise support and women-led tailoring units that turn one-time aid into lasting income.",
  },
  {
    icon: Users,
    title: "Community & Culture",
    text: "Youth leadership, women's collectives and cultural preservation programs that strengthen the fabric of village life.",
  },
];

export const About = () => (
  <section id="about" className="py-20 md:py-28 border-b border-border">
    <div className="container">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
           <span className="eyebrow text-primary">Who we are</span>
           <h2 className="font-bold text-4xl md:text-5xl mt-5 mb-6">
             A grassroots charity rooted in <span className="text-primary">dignity</span>.
          </h2>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              ACT India is the public-facing name of the <strong>Arockyaa Charitable Trust</strong>,
              an independent charity registered in Chennai in 2008 and headquartered in Dindigul,
              Tamil Nadu.
            </p>
            <p>
              Our mission is simple: walk alongside underserved communities and remove the barriers
              that keep people from a full life. We don't parachute in — we partner with local
              schools, panchayats and health workers to build solutions that last after we leave.
            </p>
            <p className="text-sm text-muted-foreground pt-2 border-t border-border">
              <strong>Trust Reg. No.</strong> 872/2008 · <strong>12A</strong> & <strong>80G</strong> certified ·
              FCRA pending
            </p>
          </div>
        </div>

         <div className="lg:col-span-7 grid sm:grid-cols-2 border-t border-l border-border">
          {PROGRAMS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
               className="group p-7 bg-card border-r border-b border-border hover:border-primary transition-smooth"
            >
               <div className="h-11 w-11 bg-secondary grid place-items-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth mb-5">
                <Icon className="h-6 w-6" />
              </div>
               <h3 className="font-bold text-xl mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
