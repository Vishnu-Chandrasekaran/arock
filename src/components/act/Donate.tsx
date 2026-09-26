import { useMemo, useState } from "react";
import { Check, Lock, Repeat, Calendar, ShieldCheck, FileCheck2, ArrowRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { Reveal } from "@/components/act/Reveal";

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

const STEPS = ["Gift amount", "Frequency", "Your details"];

const emailValid = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

export const Donate = () => {
  const [step, setStep] = useState(0);
  const [amount, setAmount] = useState<number>(PRESETS[1]);
  const [custom, setCustom] = useState<string>("");
  const [recurring, setRecurring] = useState<"monthly" | "once">("monthly");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState<{ name?: boolean; email?: boolean }>({});

  const final = useMemo(() => {
    const c = parseInt(custom);
    return Number.isFinite(c) && c > 0 ? c : amount;
  }, [custom, amount]);

  const customError = custom !== "" && !(parseInt(custom) > 0);
  const nameError = touched.name && name.trim().length < 2;
  const emailError = touched.email && !emailValid(email);

  const impactText = useMemo(() => {
    const match = [...IMPACT].reverse().find((i) => final >= i.amount);
    return match?.text ?? IMPACT[0].text;
  }, [final]);

  const submit = () => {
    setTouched({ name: true, email: true });
    if (name.trim().length < 2 || !emailValid(email)) {
      toast.error("Please check your details", {
        description: "We need a name and a valid email to send your 80G receipt.",
      });
      return;
    }
    toast.success("Almost there!", {
      description: "Secure payment via Razorpay opens next. Your amount and details are captured.",
    });
  };

  return (
    <section id="donate" className="py-16 md:py-24 bg-neutral-900 text-neutral-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Value proposition */}
          <Reveal className="space-y-8">
            <div>
              <span className="eyebrow text-primary-glow">Donate</span>
              <h2 className="h2-display font-bold mt-4 mb-5 text-neutral-50">
                Your gift becomes someone's opportunity
              </h2>
              <p className="body-lg text-neutral-300">
                100% of your donation funds our programmes. Payments are securely processed through
                Razorpay — cards, UPI, netbanking and wallets supported. Donations from India are
                eligible for 80G tax deduction.
              </p>
            </div>

            <ul className="space-y-4">
              {TRUST_SIGNALS.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <span
                     className="h-6 w-6 grid place-items-center shrink-0 bg-primary/20"
                    aria-hidden="true"
                  >
                    <Check className="h-3.5 w-3.5 text-primary-glow" strokeWidth={3} />
                  </span>
                  <span className="text-neutral-300">{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Donation form */}
          <Reveal delay={120}>
            <div className="bg-card text-card-foreground p-6 md:p-10 border-t-8 border-primary">
              {/* Progress indicator */}
              <ol className="flex items-center gap-2 mb-8" aria-label="Donation steps">
                {STEPS.map((label, i) => (
                  <li key={label} className="flex-1">
                    <button
                      type="button"
                      onClick={() => setStep(i)}
                      aria-current={i === step ? "step" : undefined}
                      className="w-full text-left group"
                    >
                      <span
                        className={cn(
                           "block h-1.5 transition-colors duration-200",
                          i <= step ? "bg-primary" : "bg-neutral-200",
                        )}
                      />
                      <span
                        className={cn(
                          "mt-2 block text-[11px] font-semibold uppercase tracking-[0.08em]",
                          i <= step ? "text-primary" : "text-muted-foreground",
                        )}
                      >
                        {i + 1}. {label}
                      </span>
                    </button>
                  </li>
                ))}
              </ol>

              {step === 0 && (
                <div className="space-y-5">
                  <fieldset>
                    <legend className="text-sm font-semibold mb-1">Choose your gift amount</legend>
                    <p className="text-xs text-muted-foreground mb-3">
                      Pick a suggested amount or enter your own.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {PRESETS.map((p) => {
                        const selected = !custom && amount === p;
                        return (
                          <button
                            key={p}
                            type="button"
                            onClick={() => {
                              setAmount(p);
                              setCustom("");
                            }}
                            aria-pressed={selected}
                            className={cn(
                               "min-h-14 text-sm font-semibold border transition-all duration-200",
                              selected
                                ? "border-primary bg-primary/10 text-foreground"
                                : "border-input bg-background hover:border-primary/60",
                            )}
                          >
                            {SYMBOL}
                            {p.toLocaleString("en-IN")}
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>

                  <div>
                    <label htmlFor="custom-amount" className="text-sm font-semibold">
                      Custom amount (₹)
                    </label>
                    <input
                      id="custom-amount"
                      type="number"
                      inputMode="numeric"
                      min={1}
                      placeholder="e.g. 3500"
                      value={custom}
                      onChange={(e) => setCustom(e.target.value)}
                      aria-invalid={customError}
                      aria-describedby="custom-amount-help"
                      className={cn(
                         "mt-2 w-full min-h-11 bg-background border px-3.5 py-3 text-sm",
                        customError ? "border-destructive" : "border-input",
                      )}
                    />
                    <p
                      id="custom-amount-help"
                      className={cn("mt-1.5 text-xs", customError ? "text-destructive" : "text-muted-foreground")}
                    >
                      {customError ? "Enter an amount greater than zero." : "Minimum ₹100. Leave blank to use a suggested amount."}
                    </p>
                  </div>

                  <div className="p-4 bg-secondary border-l-4 border-primary">
                    <p className="text-sm leading-relaxed">
                      {SYMBOL}
                      {final.toLocaleString("en-IN")}
                      {recurring === "monthly" ? "/month" : ""} provides{" "}
                      <span className="font-semibold text-primary">{impactText}</span>.
                    </p>
                  </div>
                </div>
              )}

              {step === 1 && (
                <fieldset className="space-y-4">
                  <legend className="text-sm font-semibold mb-1">How often would you like to give?</legend>
                  <p className="text-xs text-muted-foreground">
                    Monthly gifts let us plan programmes a year ahead. Cancel any time.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {(["monthly", "once"] as const).map((f) => (
                      <button
                        key={f}
                        type="button"
                        onClick={() => setRecurring(f)}
                        aria-pressed={recurring === f}
                        className={cn(
                           "min-h-14 border text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200",
                          recurring === f
                            ? "border-primary bg-primary text-primary-foreground shadow-md"
                            : "border-input bg-background hover:border-primary/60",
                        )}
                      >
                        {f === "monthly" ? (
                          <>
                            <Repeat className="h-4 w-4" aria-hidden="true" /> Monthly giving
                          </>
                        ) : (
                          <>
                            <Calendar className="h-4 w-4" aria-hidden="true" /> One-time
                          </>
                        )}
                      </button>
                    ))}
                  </div>
                </fieldset>
              )}

              {step === 2 && (
                <div className="space-y-5">
                  <div>
                    <label htmlFor="donor-name" className="text-sm font-semibold">
                      Full name
                    </label>
                    <input
                      id="donor-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                      aria-invalid={!!nameError}
                      aria-describedby="donor-name-help"
                      className={cn(
                         "mt-2 w-full min-h-11 bg-background border px-3.5 py-3 text-sm",
                        nameError ? "border-destructive" : "border-input",
                      )}
                    />
                    <p
                      id="donor-name-help"
                      className={cn("mt-1.5 text-xs", nameError ? "text-destructive" : "text-muted-foreground")}
                    >
                      {nameError ? "Please enter your name as it should appear on the receipt." : "As it should appear on your 80G receipt."}
                    </p>
                  </div>

                  <div>
                    <label htmlFor="donor-email" className="text-sm font-semibold">
                      Email address
                    </label>
                    <div className="relative">
                      <input
                        id="donor-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                        aria-invalid={!!emailError}
                        aria-describedby="donor-email-help"
                        className={cn(
                           "mt-2 w-full min-h-11 bg-background border px-3.5 py-3 pr-10 text-sm",
                          emailError ? "border-destructive" : "border-input",
                        )}
                      />
                      {emailValid(email) && (
                        <Check
                          className="absolute right-3 top-1/2 h-4 w-4 text-success"
                          strokeWidth={3}
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    <p
                      id="donor-email-help"
                      className={cn("mt-1.5 text-xs", emailError ? "text-destructive" : "text-muted-foreground")}
                    >
                      {emailError ? "Enter a valid email, e.g. name@example.com." : "Your receipt is emailed instantly."}
                    </p>
                  </div>

                  <div className="p-4 bg-secondary text-sm">
                    Giving{" "}
                    <span className="font-semibold text-primary">
                      {SYMBOL}
                      {final.toLocaleString("en-IN")}
                      {recurring === "monthly" ? " / month" : " once"}
                    </span>{" "}
                    — {impactText}.
                  </div>
                </div>
              )}

              {/* Step controls */}
              <div className="mt-8 flex gap-3">
                {step > 0 && (
                  <button
                    type="button"
                    onClick={() => setStep((s) => s - 1)}
                     className="min-h-11 px-5 border border-input font-semibold text-sm inline-flex items-center gap-2 hover:bg-secondary transition-colors duration-200"
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back
                  </button>
                )}
                {step < 2 ? (
                  <button
                    type="button"
                    onClick={() => setStep((s) => s + 1)}
                    disabled={customError}
                     className="flex-1 min-h-12 bg-primary text-primary-foreground font-semibold text-sm inline-flex items-center justify-center gap-2 transition-colors duration-200 hover:bg-primary-deep disabled:opacity-50"
                  >
                    Continue <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={submit}
                    aria-label={`Donate ${SYMBOL}${final.toLocaleString("en-IN")}${recurring === "monthly" ? " per month" : ""}`}
                     className="flex-1 min-h-12 bg-primary text-primary-foreground font-semibold text-sm inline-flex items-center justify-center gap-2 transition-colors duration-200 hover:bg-primary-deep"
                  >
                    <Lock className="h-4 w-4" aria-hidden="true" />
                    Donate {SYMBOL}
                    {final.toLocaleString("en-IN")}
                    {recurring === "monthly" ? " / month" : ""}
                  </button>
                )}
              </div>

              {/* Trust badges */}
              <ul className="mt-5 pt-4 border-t border-border flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                <li className="flex items-center gap-1.5">
                  <Lock className="h-3.5 w-3.5" aria-hidden="true" /> SSL secured
                </li>
                <li className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" /> 80G certified
                </li>
                <li className="flex items-center gap-1.5">
                  <FileCheck2 className="h-3.5 w-3.5" aria-hidden="true" /> Annually audited
                </li>
                <li>Cards · UPI · Netbanking · Wallets</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
