import { useEffect, useRef, useState } from "react";
import { CalendarClock, Users, MapPin, Layers } from "lucide-react";
import { Reveal } from "@/components/act/Reveal";

const STATS = [
  { value: 17, suffix: "+", label: "Years of impact", sub: "Since 2008", Icon: CalendarClock },
  { value: 12500, suffix: "+", label: "Lives touched", sub: "Across India", Icon: Users },
  { value: 48, suffix: "", label: "Villages reached", sub: "And growing", Icon: MapPin },
  { value: 26, suffix: "", label: "Active programmes", sub: "Education, health & livelihoods", Icon: Layers },
];

const useCountUp = (target: number, start: boolean, duration = 1600) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVal(target);
      return;
    }
    const t0 = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return val;
};

const Stat = ({ value, suffix, label, sub, Icon, start }: typeof STATS[0] & { start: boolean }) => {
  const n = useCountUp(value, start);
  return (
    <div className="bg-card border-r border-b border-border p-6 md:p-8 text-left h-full">
      <span
        className="mb-6 h-11 w-11 grid place-items-center bg-primary text-primary-foreground"
        aria-hidden="true"
      >
        <Icon className="h-5 w-5" />
      </span>
      <div className="font-bold text-4xl md:text-5xl text-foreground tabular-nums leading-none">
        {n.toLocaleString("en-IN")}
        <span className="text-primary">{suffix}</span>
      </div>
      <div className="mt-3 font-semibold text-foreground">{label}</div>
      <div className="text-sm text-muted-foreground mt-1">{sub}</div>
    </div>
  );
};

export const ImpactStats = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setStart(true)),
      { threshold: 0.3 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <section id="impact" ref={ref} className="py-16 md:py-24 bg-background border-b border-border">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow text-primary">Our impact</span>
          <h2 className="h2-display font-bold mt-4 mb-4">Real change, measured.</h2>
          <p className="text-muted-foreground body-lg">
            Numbers from independently audited reports, FY 2024–25.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-border">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <Stat {...s} start={start} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
