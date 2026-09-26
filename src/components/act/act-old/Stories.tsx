import { Quote } from "lucide-react";

const STORIES = [
  {
    name: "Priya",
    age: 21,
    location: "Madurai district",
    program: "Education · Scholarship",
    quote:
      "I'm the first in my family to go to college. The scholarship and the mentor from ACT India are the only reasons I'm in nursing school today.",
  },
  {
    name: "Murugan",
    age: 64,
    location: "Dindigul district",
    program: "Healthcare · Diabetes care",
    quote:
      "The monthly medical camp caught my diabetes early. I'm still farming, still strong. My family and I owe so much to the doctors who came to our village.",
  },
  {
    name: "Lakshmi",
    age: 42,
    location: "Theni district",
    program: "Livelihoods · Tailoring unit",
    quote:
      "Six months of training, one sewing machine — and now I run a small tailoring shop. I employ two other women from my village. We earn with our own hands.",
  },
];

export const Stories = () => (
  <section id="stories" className="py-20 md:py-28 bg-gradient-soft">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-accent font-semibold tracking-widest text-xs uppercase">Real stories</span>
        <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 mb-4">
          Lives, in their own words.
        </h2>
        <p className="text-muted-foreground text-lg">
          Three of the thousands of people walking with us today.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {STORIES.map((s) => (
          <article
            key={s.name}
            className="bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-warm transition-smooth flex flex-col"
          >
            <div className="p-6 flex flex-col flex-1">
              <Quote className="h-8 w-8 text-accent mb-3" />
              <blockquote className="text-foreground/90 leading-relaxed italic flex-1">
                "{s.quote}"
              </blockquote>
              <footer className="mt-5 pt-5 border-t border-border">
                <div className="font-display font-bold text-lg">{s.name}, {s.age}</div>
                <div className="text-sm text-muted-foreground">{s.location}</div>
                <div className="text-xs text-accent font-semibold tracking-wide uppercase mt-2">
                  {s.program}
                </div>
              </footer>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
