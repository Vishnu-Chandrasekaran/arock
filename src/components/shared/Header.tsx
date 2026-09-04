import { Link } from "@tanstack/react-router";
import { trust } from "@/data/initiatives";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="rounded-md font-serif text-lg font-bold tracking-tight text-foreground transition-colors hover:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:text-xl"
        >
          {trust.name}
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link
            to="/act-india"
            className="text-muted-foreground transition-colors hover:text-red-700"
            activeProps={{ className: "text-red-700" }}
          >
            ACT India
          </Link>
          <Link
            to="/lira"
            className="text-muted-foreground transition-colors hover:text-teal-700"
            activeProps={{ className: "text-teal-700" }}
          >
            LIRA
          </Link>
          <span className="hidden rounded-full bg-slate-100 px-4 py-1.5 text-xs font-medium text-slate-700 lg:inline-block">
            {trust.badge}
          </span>
        </nav>
      </div>
    </header>
  );
}
