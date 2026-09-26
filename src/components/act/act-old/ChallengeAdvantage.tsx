import { Layers, MapPin, Wrench, ShieldCheck } from "lucide-react";

const ADVANTAGES = [
  {
    icon: Layers,
    title: "Integrated Social Framework",
    text: "We don't just address one issue — we look at the person holistically, from education and health to digital well-being and employability.",
  },
  {
    icon: MapPin,
    title: "Presence & Proximity",
    text: "Our roots in Tamil Nadu let us pilot deep-impact projects in rural Dindigul and urban Chennai before scaling them across India.",
  },
  {
    icon: Wrench,
    title: "Empowerment Through Skill",
    text: "We believe in 'teaching to fish' — mobilizing Women's Self-Help Groups and youth vocational training to build self-reliant stakeholders.",
  },
  {
    icon: ShieldCheck,
    title: "Crisis Resilience",
    text: "A proven track record in disaster response, notably during COVID-19, shows our ability to pivot and deliver relief when it matters most.",
  },
];

export const ChallengeAdvantage = () => (
  <section id="challenge" className="py-20 md:py-28 bg-secondary/40">
    <div className="container space-y-20">
      {/* Our Challenge */}
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-accent font-semibold tracking-widest text-xs uppercase">Our Challenge</span>
        <div className="mx-auto mt-3 mb-6 h-1 w-12 bg-accent rounded-full" />
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
          From survival to <em className="text-primary not-italic">sustainable empowerment</em>.
        </h2>
        <p className="text-foreground/80 leading-relaxed">
          From the Dindigul hills to the urban centers of Chennai, India's marginalized communities
          face educational gaps, health insecurities and migrant displacement — compounded by new
          risks like climate-induced disasters and digital addiction. ACT India tackles these
          systemic vulnerabilities through structured, locally-led intervention.
        </p>
      </div>

      {/* Our Advantage */}
      <div>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-accent font-semibold tracking-widest text-xs uppercase">Our Advantage</span>
          <div className="mx-auto mt-3 mb-6 h-1 w-12 bg-accent rounded-full" />
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
            Traditional roots, <em className="text-primary not-italic">scalable</em> solutions.
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            We combine community wisdom with modern, scalable methods to drive change that is both
            meaningful and enduring.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {ADVANTAGES.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-accent hover:shadow-warm transition-smooth"
            >
              <div className="h-11 w-11 rounded-xl bg-secondary grid place-items-center text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-smooth mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
