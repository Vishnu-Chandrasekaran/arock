import { useMemo, useState } from "react";
import { Check, Lock, Repeat, Calendar, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const SYMBOL = "₹";

const PRESETS = [500, 2000, 5000, 10000];

const IMPACT = [
  { amount: 500, text: "1 month of school supplies for a child" },
  { amount: 2000, text: "a full medical camp visit for a family" },
  { amount: 5000, text: "vocational training for one woman" },
  { amount: 10000, text: "a scholarship for a semester of college" },
];

const TRUST_SIGNALS = [
  "Secure payments via Razorpay",
  "Monthly giving option",
  "80G tax-deductible (India)",
  "Receipt emailed instantly",
];

export const Donate = () => {
  const [amount, setAmount] = useState<number>(PRESETS[1]!);
  const [custom, setCustom] = useState<string>("");
  const [recurring, setRecurring] = useState<"monthly" | "once">("monthly");

  const final = useMemo(() => {
    const c = parseInt(custom);
    return Number.isFinite(c) && c > 0 ? c : amount;
  }, [custom, amount]);

  const impactText = useMemo(() => {
    const match = [...IMPACT].reverse().find((i) => final >= i.amount);
    return match?.text ?? IMPACT[0]!.text;
  }, [final]);

  const handleDonate = () => {
    toast.success("Almost there!", {
      description:
        "Secure payments powered by Razorpay will open next. Your details and amount have been captured.",
    });
  };

  return (
    <section
      id="donate"
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1F2937 0%, #2D2926 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left column: value proposition */}
          <div className="space-y-10">
            <div>
              <span
                className="text-[11px] font-semibold uppercase tracking-[0.1em]"
                style={{ color: "#E8A0AC" }}
              >
                Donate
              </span>
              <h2
                className="font-display font-bold mt-3 mb-5"
                style={{
                  fontSize: "42px",
                  lineHeight: "1.2",
                  color: "#F5F3F0",
                  letterSpacing: "-0.5px",
                }}
              >
                Your gift becomes someone's opportunity
              </h2>
              <p
                className="text-[15px] leading-[1.8]"
                style={{ color: "#D4C5B5" }}
              >
                100% of your donation funds our programmes. All payments are
                securely processed through Razorpay — cards, UPI, netbanking
                and wallets supported. Donations from India are eligible for 80G
                tax deduction.
              </p>
            </div>

            <ul className="space-y-4">
              {TRUST_SIGNALS.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <span
                    className="h-5 w-5 rounded-full grid place-items-center shrink-0"
                    style={{ backgroundColor: "rgba(212, 165, 116, 0.15)" }}
                    aria-hidden="true"
                  >
                    <Check
                      className="h-3 w-3"
                      style={{ color: "#E8A0AC" }}
                      strokeWidth={3}
                    />
                  </span>
                  <span style={{ color: "#D4C5B5" }}>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column: donation form card */}
          <div
            className="rounded-[16px] p-8 md:p-10"
            style={{
              backgroundColor: "#F8F7F5",
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            }}
          >
            {/* Frequency tabs */}
            <div
              className="flex gap-2 p-1 rounded-full mb-6"
              style={{ backgroundColor: "#EFEFEF" }}
              role="tablist"
              aria-label="Donation frequency"
            >
              {(["monthly", "once"] as const).map((f) => (
                <button
                  key={f}
                  role="tab"
                  aria-selected={recurring === f}
                  onClick={() => setRecurring(f)}
                  className={cn(
                    "flex-1 h-11 rounded-full text-sm font-semibold transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                    recurring === f
                      ? "text-white"
                      : "text-[#6B8A92] hover:text-[#1F2937]"
                  )}
                  style={{
                    backgroundColor: recurring === f ? "#A6192E" : "transparent",
                  }}
                >
                  <span className="flex items-center justify-center gap-2">
                    {f === "monthly" ? (
                      <>
                        <Repeat className="h-4 w-4" aria-hidden="true" />
                        Monthly giving
                      </>
                    ) : (
                      <>
                        <Calendar className="h-4 w-4" aria-hidden="true" />
                        One-time
                      </>
                    )}
                  </span>
                </button>
              ))}
            </div>

            {/* Amount grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
              {PRESETS.map((p) => {
                const selected = !custom && amount === p;
                return (
                  <button
                    key={p}
                    onClick={() => {
                      setAmount(p);
                      setCustom("");
                    }}
                    className={cn(
                      "h-14 rounded-lg text-sm font-semibold transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                      selected
                        ? "text-[#2D2926]"
                        : "bg-white text-[#2D2926] hover:text-[#2D2926]"
                    )}
                    style={{
                      backgroundColor: selected ? "#FDF3F4" : "#FFFFFF",
                      border: selected
                        ? "1.5px solid #A6192E"
                        : "1.5px solid #E0E0E0",
                    }}
                    aria-pressed={selected}
                  >
                    {SYMBOL}
                    {p.toLocaleString("en-IN")}
                  </button>
                );
              })}
            </div>

            {/* Custom amount */}
            <div className="relative mb-5">
              <input
                type="number"
                inputMode="numeric"
                min={1}
                placeholder="₹ Custom amount"
                value={custom}
                onChange={(e) => setCustom(e.target.value)}
                className="w-full rounded-lg bg-white outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{
                  border: "1.5px solid #E0E0E0",
                  padding: "12px 14px",
                  fontSize: "14px",
                  color: "#2D2926",
                }}
              />
            </div>

            {/* Impact message */}
            <div
              className="p-3 rounded-r-lg mb-6"
              style={{
                backgroundColor: "#FDF3F4",
                borderLeft: "4px solid #A6192E",
              }}
            >
              <p className="text-[13px] leading-[1.6]" style={{ color: "#2D2926" }}>
                {SYMBOL}
                {final.toLocaleString("en-IN")}
                {recurring === "monthly" ? "/month" : ""} provides{" "}
                <span className="font-semibold" style={{ color: "#A6192E" }}>
                  {impactText}
                </span>
                .
              </p>
            </div>

            {/* CTA */}
            <button
              onClick={handleDonate}
              className="w-full rounded-[12px] text-white text-[15px] font-semibold transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 hover:shadow-lg"
              style={{
                backgroundColor: "#A6192E",
                padding: "14px 20px",
                boxShadow: "0 4px 12px rgba(139, 74, 38, 0.3)",
              }}
              aria-label={`Donate ${SYMBOL}${final.toLocaleString("en-IN")}${
                recurring === "monthly" ? " per month" : ""
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <span aria-hidden="true">❤️</span>
                Donate {SYMBOL}
                {final.toLocaleString("en-IN")}
                {recurring === "monthly" ? " / month" : ""}
              </span>
            </button>

            {/* Security footer */}
            <div
              className="mt-5 pt-4 flex flex-wrap items-center justify-between gap-3 text-[12px]"
              style={{ borderTop: "1px solid #E0E0E0", color: "#6B8A92" }}
            >
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Lock className="h-3 w-3" aria-hidden="true" />
                  Secure
                </span>
                <span>Cards · UPI · Netbanking · Wallets</span>
              </div>
              <a
                href="#contact"
                className="flex items-center gap-1 font-semibold hover:underline outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded"
                style={{ color: "#A6192E" }}
              >
                Other ways to give
                <ExternalLink className="h-3 w-3" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
