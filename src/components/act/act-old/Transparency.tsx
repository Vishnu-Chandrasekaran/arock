import { FileText, Shield, Download } from "lucide-react";

const FUNDS = [
  { label: "Programs", value: 78, color: "bg-primary" },
  { label: "Administration", value: 12, color: "bg-primary-glow" },
  { label: "Fundraising", value: 6, color: "bg-accent" },
  { label: "Reserves", value: 4, color: "bg-muted-foreground" },
];

const REGS = [
  { label: "Trust Registration", value: "872 / 2008" },
  { label: "12A Certificate", value: "AAATA1234C / 12A" },
  { label: "80G Tax Exemption", value: "AAATA1234C / 80G / 2021" },
  { label: "FCRA", value: "Application in progress" },
];

const REPORTS = [
  { year: "FY 2024–25", size: "2.4 MB" },
  { year: "FY 2023–24", size: "2.1 MB" },
  { year: "FY 2022–23", size: "1.8 MB" },
];

export const Transparency = () => (
  <section id="transparency" className="py-20 md:py-28">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-accent font-semibold tracking-widest text-xs uppercase">Transparency</span>
        <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 mb-4">
          Where every rupee goes.
        </h2>
        <p className="text-muted-foreground text-lg">
          Independently audited. Publicly reported. Always accountable to the communities we serve.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Fund allocation */}
        <div className="lg:col-span-2 bg-card rounded-3xl p-6 md:p-10 shadow-card border border-border">
          <h3 className="font-display font-bold text-2xl mb-1">How we use funds</h3>
          <p className="text-sm text-muted-foreground mb-8">FY 2024–25 audited allocation</p>

          {/* Stacked bar */}
          <div className="h-4 w-full rounded-full overflow-hidden flex bg-muted mb-8">
            {FUNDS.map((f) => (
              <div
                key={f.label}
                className={`${f.color} h-full`}
                style={{ width: `${f.value}%` }}
                title={`${f.label}: ${f.value}%`}
              />
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {FUNDS.map((f) => (
              <div key={f.label} className="flex items-center gap-3">
                <span className={`${f.color} h-3 w-3 rounded-full shrink-0`} />
                <span className="font-medium flex-1">{f.label}</span>
                <span className="font-display font-bold text-lg tabular-nums">{f.value}%</span>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-border">
            <h4 className="flex items-center gap-2 font-semibold mb-4">
              <FileText className="h-5 w-5 text-accent" /> Annual reports
            </h4>
            <ul className="space-y-2">
              {REPORTS.map((r) => (
                <li key={r.year}>
                  <a
                    href="#"
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-secondary transition-smooth group"
                  >
                    <span className="font-medium">Annual Report — {r.year}</span>
                    <span className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-accent">
                      PDF · {r.size} <Download className="h-4 w-4" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Registrations */}
        <div className="bg-primary text-primary-foreground rounded-3xl p-6 md:p-10 shadow-warm">
          <Shield className="h-10 w-10 text-accent mb-5" />
          <h3 className="font-display font-bold text-2xl mb-2">Registered & certified</h3>
          <p className="text-primary-foreground/70 text-sm mb-8">
            Donations to ACT India are eligible for tax deduction under Section 80G of the Income
            Tax Act, India.
          </p>
          <dl className="space-y-5">
            {REGS.map((r) => (
              <div key={r.label}>
                <dt className="text-xs uppercase tracking-widest text-accent font-semibold">
                  {r.label}
                </dt>
                <dd className="font-mono text-sm mt-1 text-primary-foreground/95">{r.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  </section>
);
