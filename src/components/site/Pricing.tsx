import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic Bot",
    price: "R800",
    period: "once-off",
    desc: "Perfect for getting started with automation.",
    features: ["Simple automation", "Basic auto-replies", "FAQ handling", "1 revision round", "Email support"],
    featured: false,
  },
  {
    name: "Pro Bot",
    price: "R1,500",
    period: "+ R200 / month",
    desc: "For growing businesses that want real results.",
    features: [
      "Advanced automation",
      "Lead generation",
      "Custom workflows",
      "FREE basic website",
      "Priority email support",
      "Monthly maintenance",
    ],
    featured: true,
  },
  {
    name: "Premium Bot",
    price: "R2,000",
    period: "+ R300 / month",
    desc: "Fully bespoke bots with advanced features.",
    features: [
      "Full custom bot",
      "Advanced AI features",
      "API & 3rd party integrations",
      "FREE complex website",
      "24/7 priority support",
      "Dedicated account manager",
    ],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Pricing</p>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold">
            Simple, <span className="gradient-text">transparent</span> pricing
          </h2>
          <p className="mt-4 text-muted-foreground">Choose a plan that scales with your business.</p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={`reveal relative rounded-3xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                p.featured
                  ? "glass-strong border-2 border-primary/40 shadow-[0_20px_60px_-15px_oklch(0.55_0.22_255/0.5)] md:scale-105"
                  : "glass"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 gradient-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                  <Sparkles className="h-3 w-3" /> Most Popular
                </div>
              )}
              <h3 className="font-display text-2xl font-bold">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-5 flex items-baseline gap-2 flex-wrap">
                <span className="font-display text-4xl font-bold gradient-text">{p.price}</span>
                <span className="text-sm text-muted-foreground">{p.period}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid place-items-center h-5 w-5 rounded-full bg-primary/15 text-primary shrink-0">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button variant={p.featured ? "hero" : "glass"} size="lg" className="mt-8" asChild>
                <a href="#contact">Get Started</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}