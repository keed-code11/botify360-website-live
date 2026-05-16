import { MessageSquare, Wrench, Rocket } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Contact Us", desc: "Tell us about your business and what you want to automate." },
  { icon: Wrench, title: "We Build Your Bot", desc: "Our team designs, builds and tests a custom WhatsApp bot for you." },
  { icon: Rocket, title: "Launch & Grow", desc: "Go live in days and watch conversations turn into customers." },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Process</p>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold">
            How it <span className="gradient-text">works</span>
          </h2>
        </div>

        <div className="mt-16 relative grid md:grid-cols-3 gap-8">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          {steps.map((s, i) => (
            <div key={s.title} className="reveal text-center" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="relative mx-auto h-24 w-24">
                <div className="absolute inset-0 rounded-full gradient-primary blur-xl opacity-50 animate-pulse-glow" />
                <div className="relative h-24 w-24 rounded-full glass-strong grid place-items-center">
                  <s.icon className="h-9 w-9 text-primary" />
                  <span className="absolute -top-1 -right-1 h-7 w-7 rounded-full gradient-primary text-white text-xs font-bold grid place-items-center shadow-lg">
                    {i + 1}
                  </span>
                </div>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground max-w-xs mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}