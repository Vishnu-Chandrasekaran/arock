import { useState } from "react";
import { z } from "zod";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/act/ui/button";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(5, "Please write a short message").max(1000),
});

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setForm({ name: "", email: "", message: "" });
      toast.success("Message sent", { description: "We'll reply within 2 working days." });
    }, 700);
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-accent font-semibold tracking-widest text-xs uppercase">Contact</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 mb-6">Let's talk.</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              Partnerships, volunteering, press, or just curious — write to us. A real human reads
              every message.
            </p>

            <ul className="space-y-5">
              <li className="flex gap-4">
                <div className="h-11 w-11 rounded-xl bg-secondary grid place-items-center text-primary shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">Headquarters</div>
                  <address className="not-italic text-muted-foreground">
                    Arockyaa Charitable Trust<br />
                    Dindigul district, Tamil Nadu<br />
                    India — 624001
                  </address>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="h-11 w-11 rounded-xl bg-secondary grid place-items-center text-primary shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <a href="mailto:hello@actindia.org" className="text-muted-foreground hover:text-accent">
                    hello@actindia.org
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="h-11 w-11 rounded-xl bg-secondary grid place-items-center text-primary shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <a href="tel:+914512345678" className="text-muted-foreground hover:text-accent">
                    +91 451 234 5678
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <form onSubmit={submit} className="bg-card rounded-3xl p-6 md:p-10 shadow-card border border-border space-y-4">
            <h3 className="font-display font-bold text-2xl mb-2">Send us a message</h3>

            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">Your name</label>
              <input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                required
                className="w-full h-12 px-4 rounded-xl border-2 border-border focus:border-accent focus:outline-none bg-background"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                required
                className="w-full h-12 px-4 rounded-xl border-2 border-border focus:border-accent focus:outline-none bg-background"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                rows={5}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-accent focus:outline-none bg-background resize-none"
              />
            </div>
            <Button type="submit" variant="default" size="lg" className="w-full" disabled={sending}>
              <Send className="h-4 w-4" /> {sending ? "Sending…" : "Send message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
