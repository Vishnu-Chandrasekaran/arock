import { Heart, Briefcase, Users } from "lucide-react";

const WAYS = [
  {
    icon: Heart,
    title: "Individual & Corporate Partnerships",
    pitch:
      "Transform lives through financial support or strategic CSR initiatives that empower marginalized communities toward self-sufficiency.",
    give: "Monthly or one-time gifts, in-kind support, sponsored projects, or pro-bono expertise.",
    perks: "Impact reporting, public recognition, 80G tax benefits, and tailored employee engagement.",
  },
  {
    icon: Briefcase,
    title: "Internships",
    pitch:
      "Gain hands-on experience in the development sector. Bring fresh ideas to our projects while building your professional portfolio.",
    give: "Creativity, dedication, and research support.",
    perks: "Certificate of completion, performance-based stipends, and LinkedIn recommendations.",
  },
  {
    icon: Users,
    title: "Volunteering",
    pitch:
      "Engage directly with the communities we serve — teach, organize events, or share technical skills for measurable impact.",
    give: "Expertise, enthusiasm, and hands-on service.",
    perks: "Official certificates, letters of appreciation, and a chance to lead grassroots initiatives.",
  },
];

export const GetInvolved = () => (
  <section id="get-involved" className="py-20 md:py-28 bg-secondary/40">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <span className="text-accent font-semibold tracking-widest text-xs uppercase">Join Us</span>
        <div className="mx-auto mt-3 mb-6 h-1 w-12 bg-accent rounded-full" />
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
          Get Involved: <em className="text-primary not-italic">Make a Difference</em>
        </h2>
        <p className="text-foreground/80 leading-relaxed">
          At ACT India, everyone has a role in our mission to <strong>Live, Love, and Let Live</strong>.
          Whether you're a professional, a student, or a corporation — your partnership fuels sustainable change.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {WAYS.map(({ icon: Icon, title, pitch, give, perks }) => (
          <article
            key={title}
            className="group relative p-7 rounded-2xl bg-card border border-border hover:border-accent hover:shadow-warm transition-smooth flex flex-col"
          >
            <div className="h-12 w-12 rounded-xl bg-secondary grid place-items-center text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-smooth mb-5">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="font-display font-bold text-xl mb-3">{title}</h3>
            <p className="text-sm text-foreground/80 leading-relaxed mb-5">{pitch}</p>

            <div className="mt-auto space-y-3 pt-4 border-t border-border/60">
              <div>
                <p className="text-[11px] font-semibold tracking-wider uppercase text-accent mb-1">What You Give</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{give}</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-wider uppercase text-accent mb-1">Perks</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{perks}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="text-center text-sm text-muted-foreground mt-10 max-w-2xl mx-auto italic">
        Assess with your skills · Act with your time · Advance through your donations — the keys to a resilient India.
      </p>
    </div>
  </section>
);
