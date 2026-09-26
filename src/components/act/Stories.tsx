import { useEffect, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/act/Reveal";

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

export const Stories = () => {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % STORIES.length), 7000);
    return () => clearInterval(t);
  }, [paused]);

  const go = (n: number) => setI((v) => (v + n + STORIES.length) % STORIES.length);

  return (
    <section id="stories" className="py-16 md:py-24 bg-gradient-soft">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow text-primary">Real stories</span>
          <h2 className="h2-display font-display font-bold mt-3 mb-4">Lives, in their own words.</h2>
          <p className="text-muted-foreground body-lg">
            Three of the thousands of people walking with us today.
          </p>
        </Reveal>

        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div
            className="relative bg-card border border-border rounded-container shadow-md p-8 md:p-12 min-h-[22rem] sm:min-h-[18rem]"
            aria-live="polite"
          >
            {STORIES.map((s, idx) => (
              <article
                key={s.name}
                aria-hidden={idx !== i}
                className={cn(
                  "transition-opacity duration-500",
                  idx === i
                    ? "opacity-100 relative"
                    : "opacity-0 absolute inset-0 p-8 md:p-12 pointer-events-none",
                )}
              >
                <Quote className="h-8 w-8 text-primary mb-4" aria-hidden="true" />
                <blockquote className="font-display text-xl md:text-2xl leading-[1.5] text-foreground">
                  “{s.quote}”
                </blockquote>
                <footer className="mt-6 pt-6 border-t border-border">
                  <div className="font-semibold text-lg">
                    {s.name}, {s.age}
                  </div>
                  <div className="text-sm text-muted-foreground">{s.location}</div>
                  <div className="eyebrow text-primary mt-2">{s.program}</div>
                </footer>
              </article>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous story"
              className="min-h-11 min-w-11 grid place-items-center rounded-full border border-border bg-background hover:bg-secondary transition-colors duration-200"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Choose a story">
              {STORIES.map((s, idx) => (
                <button
                  key={s.name}
                  role="tab"
                  aria-selected={idx === i}
                  aria-label={`Story from ${s.name}`}
                  onClick={() => setI(idx)}
                  className="min-h-11 min-w-11 grid place-items-center"
                >
                  <span
                    className={cn(
                      "block h-2.5 rounded-full transition-all duration-300",
                      idx === i ? "w-8 bg-primary" : "w-2.5 bg-neutral-300",
                    )}
                  />
                </button>
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next story"
              className="min-h-11 min-w-11 grid place-items-center rounded-full border border-border bg-background hover:bg-secondary transition-colors duration-200"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
