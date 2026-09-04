import { Link } from "@tanstack/react-router";

interface TrustBarProps {
  /** Which initiative the current page belongs to. */
  current: "act-india" | "lira";
}

/**
 * Thin cross-site bar shown above each initiative's own header so visitors can
 * always get back to the parent Arockyaa Charitable Trust site, or hop to the
 * sibling initiative. Uses neutral inline styling so it never fights with the
 * scoped ACT India / LIRA design systems.
 */
export function TrustBar({ current }: TrustBarProps) {
  const sibling =
    current === "act-india"
      ? { to: "/lira" as const, label: "LIRA" }
      : { to: "/act-india" as const, label: "ACT India" };

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-9 border-b border-white/15 bg-neutral-900 text-neutral-200">
      <div className="shell flex h-full items-center justify-between gap-2 text-[10px] uppercase tracking-[0.14em] sm:text-[11px]">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-semibold text-white hover:opacity-80"
        >
          <span aria-hidden="true">←</span>
          Arockyaa Charitable Trust
        </Link>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-neutral-400">
            An initiative of Arockyaa Charitable Trust
          </span>
          <Link to={sibling.to} className="font-semibold hover:opacity-80">
            {sibling.label}
          </Link>
        </div>
      </div>
    </div>
  );
}
