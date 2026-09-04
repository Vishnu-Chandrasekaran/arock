const STEPS = [
  {
    num: "01",
    title: "Assess",
    tag: "Empower: The Foundation to Live",
    text: "We listen first. We map the unique barriers — quality education, vocational training and physical wellness — that keep individuals from owning their lives.",
    className: "bg-primary text-primary-foreground",
    numClass: "text-primary-foreground/30",
    tagClass: "text-primary-foreground/90",
    bodyClass: "text-primary-foreground/85",
  },
  {
    num: "02",
    title: "Act",
    tag: "Transform: The Compassion to Love",
    text: "Compassion meets collective action — safe housing for migrant workers, families through de-addiction, and unemployed youth into skilled entrepreneurs.",
    className: "bg-accent text-accent-foreground",
    numClass: "text-accent-foreground/30",
    tagClass: "text-accent-foreground/90",
    bodyClass: "text-accent-foreground/85",
  },
  {
    num: "03",
    title: "Advance",
    tag: "Sustain: The Wisdom to Let Live",
    text: "We sustain progress through climate resilience, reforestation and rural entrepreneurship — building self-sustaining models that outlast external aid.",
    className: "bg-foreground text-background",
    numClass: "text-background/30",
    tagClass: "text-background/90",
    bodyClass: "text-background/85",
  },
];

export const Methodology = () => (
  <section id="methodology" className="py-20 md:py-28">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <span className="text-accent font-semibold tracking-widest text-xs uppercase">Our Methodology</span>
        <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 mb-6">
          Assess. Act. <em className="text-primary not-italic">Advance.</em>
        </h2>
        <div className="mx-auto mb-6 h-1 w-12 bg-accent rounded-full" />
        <p className="text-foreground/80 leading-relaxed">
          We turn the philosophy of <strong>'Live, Love, and Let Live'</strong> into a structured methodology — moving
          from deep assessment to heart-led action and long-term advancement, so every intervention creates a
          permanent ripple across society.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {STEPS.map((s) => (
          <article
            key={s.num}
            className={`${s.className} rounded-2xl p-8 shadow-warm hover:-translate-y-1 transition-smooth`}
          >
            <div className={`font-display font-bold text-6xl leading-none mb-6 ${s.numClass}`}>{s.num}</div>
            <h3 className="font-display font-bold text-3xl mb-2">{s.title}</h3>
            <p className={`text-sm font-semibold mb-4 ${s.tagClass}`}>{s.tag}</p>
            <p className={`text-sm leading-relaxed ${s.bodyClass}`}>{s.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
