import { useState } from "react";
import { Phone, Mail, Globe, Send } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  business: z.string().trim().min(1, "Business is required").max(80),
  message: z.string().trim().min(10, "Tell us a bit more").max(1000),
});

export function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      business: fd.get("business"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setLoading(true);
    const text = `Hi Botify360! I'm ${parsed.data.name} from ${parsed.data.business}. ${parsed.data.message}`;
    const url = `https://wa.me/27747703811?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    toast.success("Opening WhatsApp to send your message…");
    setLoading(false);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10">
        <div className="reveal">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Contact</p>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold">
            Let's build your <span className="gradient-text">bot</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            Tell us about your business and we'll reply within 24 hours with a custom plan.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="glass rounded-2xl p-4 flex items-center gap-4">
              <span className="grid place-items-center h-11 w-11 rounded-xl gradient-primary glow-sm">
                <Phone className="h-5 w-5 text-white" />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <a href="tel:+27747703811" className="font-medium hover:text-primary">074 770 3811</a>
              </div>
            </li>
            <li className="glass rounded-2xl p-4 flex items-center gap-4">
              <span className="grid place-items-center h-11 w-11 rounded-xl gradient-primary glow-sm">
                <Mail className="h-5 w-5 text-white" />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <a href="mailto:official.botify360@gmail.com" className="font-medium hover:text-primary block">
                  official.botify360@gmail.com
                </a>
              </div>
            </li>
            <li className="glass rounded-2xl p-4 flex items-center gap-4">
              <span className="grid place-items-center h-11 w-11 rounded-xl gradient-primary glow-sm">
                <Globe className="h-5 w-5 text-white" />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">Website</p>
                <a href="https://botify360.vercel.app" target="_blank" rel="noreferrer" className="font-medium hover:text-primary">
                  botify360.vercel.app
                </a>
              </div>
            </li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="reveal glass-strong rounded-3xl p-8 space-y-5">
          <div>
            <label className="text-sm font-medium" htmlFor="name">Your Name</label>
            <input
              id="name" name="name" required maxLength={80}
              className="mt-1.5 w-full rounded-xl border border-border bg-background/60 px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition"
              placeholder="Mafole Makhetha"
            />
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="business">Business</label>
            <input
              id="business" name="business" required maxLength={80}
              className="mt-1.5 w-full rounded-xl border border-border bg-background/60 px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition"
              placeholder="Your business name"
            />
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="message">Message</label>
            <textarea
              id="message" name="message" required rows={5} maxLength={1000}
              className="mt-1.5 w-full rounded-xl border border-border bg-background/60 px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
              placeholder="Tell us what you'd like to automate…"
            />
          </div>
          <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
            <Send className="h-4 w-4" /> Send Message
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            We'll open WhatsApp to deliver your message instantly.
          </p>
        </form>
      </div>
    </section>
  );
}