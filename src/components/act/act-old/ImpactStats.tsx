import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 17, suffix: "+", label: "Years of impact", sub: "Since 2008" },
  { value: 12500, suffix: "+", label: "Lives touched", sub: "Across India" },
  { value: 48, suffix: "", label: "Villages reached", sub: "And growing" },
  { value: 26, suffix: "", label: "Active programs", sub: "Education, health & livelihoods" },
];

const useCountUp = (target: number, start: boolean, duration = 1600) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
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

const Stat = ({ value, suffix, label, sub, start }: typeof STATS[0] & { start: boolean }) => {
  const n = useCountUp(value, start);
  return (
    <div className="text-center px-4 py-6">
      <div className="font-display font-bold text-5xl md:text-6xl text-primary tabular-nums">
        {n.toLocaleString("en-IN")}<span className="text-accent">{suffix}</span>
      </div>
      <div className="mt-3 font-semibold text-foreground">{label}</div>
      <div className="text-sm text-muted-foreground">{sub}</div>
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
    <section id="impact" ref={ref} className="py-20 md:py-28 bg-secondary/40">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-semibold tracking-widest text-xs uppercase">Our impact</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 mb-4">Real change, measured.</h2>
          <p className="text-muted-foreground text-lg">Numbers from independently audited reports, FY 2024–25.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 bg-background rounded-3xl p-4 md:p-8 shadow-card">
          {STATS.map((s) => <Stat key={s.label} {...s} start={start} />)}
        </div>
      </div>
    </section>
  );
};
