import { Link } from "@tanstack/react-router";
import { trust } from "@/data/initiatives";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container mx-auto px-4 py-10 text-center sm:px-6 lg:px-8">
        <p className="font-serif text-lg font-bold text-foreground">
          {trust.name}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          <Link to="/act-india" className="hover:text-red-700">
            ACT India
          </Link>{" "}
          ·{" "}
          <Link to="/lira" className="hover:text-teal-700">
            LIRA
          </Link>{" "}
          — serving communities across Tamil Nadu
        </p>
        <p className="mt-4 text-xs text-muted-foreground">
          © {year} {trust.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
