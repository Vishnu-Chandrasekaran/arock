import founderImg from "@/assets/act/founder-antony-a.jpeg";

export const Team = () => (
  <section id="team" className="py-20 md:py-28 bg-secondary/40">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-accent font-semibold tracking-widest text-xs uppercase">Leadership</span>
        <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 mb-4">
          A Message from the Founder
        </h2>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
          <div className="w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-card">
            <img
              src={founderImg}
              alt="Mr. Antony A, Founder and President of Arockyaa Charitable Trust (ACT INDIA)"
              width={600}
              height={800}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-5 text-center lg:text-left">
            <h3 className="font-display font-bold text-2xl">Mr. Antony A</h3>
            <p className="text-accent font-semibold text-sm tracking-wide uppercase mt-1">
              Founder & President
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Arockyaa Charitable Trust (ACT INDIA)
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-5 text-foreground/90 leading-[1.75]">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground">
            The Heart of ACT INDIA
          </h3>

          <p>
            At ACT INDIA (Arockyaa Charitable Trust), our journey is guided by a simple yet profound philosophy: Live, Love, and Let Live. We believe that true transformation is not a single act of charity, but a continuous process of Assessment, Action, and Advancement. Our mission is born from a deep-rooted desire to stand with those at the margins — not just to offer a helping hand, but to provide the tools, the knowledge, and the dignity required for them to build their own future.
          </p>

          <p>
            From the quiet hills of Dindigul to the bustling streets of Chennai, we see the untapped potential in every child seeking an education, every woman striving for independence, and every youth reaching for a career. We recognize that to Live with purpose, one needs health and learning; to Love one’s community, one needs safety and support; and to truly Let Live, we must all work in harmony with the Earth that sustains us.
          </p>

          <p>
            Our work in health, education, and climate resilience is more than just a set of programmes — it is our collective promise to the next generation. We aim to build a world where self-reliance is the norm, where digital literacy empowers rather than distracts, and where no one is left behind in the face of crisis.
          </p>

          <p>
            This vision is too large for any one person to achieve alone. It requires the strength of our volunteers, the vision of our partners, and the resilience of the communities we serve. Together, we are moving beyond survival toward a legacy of lasting change.
          </p>

          <p>
            Join us as we Assess the needs of today, Act with compassion, and Advance toward a brighter, more equitable tomorrow.
          </p>

          <div className="pt-4 border-t border-border">
            <p className="font-display font-bold text-foreground">In Solidarity and Hope,</p>
            <p className="mt-1 font-semibold">Mr. Antony A</p>
            <p className="text-sm text-muted-foreground">
              Founder and President, Arockyaa Charitable Trust (ACT INDIA)
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
