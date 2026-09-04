import { Link } from "@tanstack/react-router";
import type { Initiative } from "@/data/initiatives";

interface InitiativeCardProps {
  initiative: Initiative;
}

const themeStyles = {
  act: {
    ring: "ring-red-500/10",
    hoverRing: "hover:ring-red-500/20",
    accentText: "text-red-700",
    accentBg: "bg-red-600",
    accentBgHover: "hover:bg-red-700",
    softBg: "bg-red-50",
    border: "border-red-100",
    hoverBorder: "hover:border-red-200",
    shadow: "shadow-red-900/5",
    hoverShadow: "hover:shadow-red-900/10",
  },
  lira: {
    ring: "ring-teal-600/10",
    hoverRing: "hover:ring-teal-600/20",
    accentText: "text-teal-700",
    accentBg: "bg-teal-600",
    accentBgHover: "hover:bg-teal-700",
    softBg: "bg-teal-50",
    border: "border-teal-100",
    hoverBorder: "hover:border-teal-200",
    shadow: "shadow-teal-900/5",
    hoverShadow: "hover:shadow-teal-900/10",
  },
};

export function InitiativeCard({ initiative }: InitiativeCardProps) {
  const t = themeStyles[initiative.theme];

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-2xl border ${t.border} bg-white ${t.hoverBorder} ring-1 ${t.ring} ${t.hoverRing} shadow-sm ${t.shadow} ${t.hoverShadow} transition-all duration-300 hover:-translate-y-1`}
    >
      <div className={`${t.softBg} flex items-center justify-center px-8 py-10`}>
        <img
          src={initiative.logo}
          alt={initiative.logoAlt}
          loading="lazy"
          className="h-28 w-auto max-w-[16rem] object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-8 text-center">
        <p className={`text-xs font-semibold uppercase tracking-widest ${t.accentText}`}>
          {initiative.tagline}
        </p>
        <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground">
          {initiative.name}
        </h2>
        <p className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground">
          {initiative.description}
        </p>

        <div className="mt-8">
          <Link
            to={initiative.url}
            className={`inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${t.accentBg} ${t.accentBgHover}`}
          >
            Explore {initiative.name}
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
