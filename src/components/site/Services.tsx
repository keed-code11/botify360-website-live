import { Bot, TrendingUp, Settings2, Rocket, ShieldCheck, Sparkles } from "lucide-react";

const services = [
  { icon: Bot, title: "Smart Automation", desc: "Automate replies, FAQs, and workflows around the clock." },
  { icon: TrendingUp, title: "Lead Generation", desc: "Capture and convert customers automatically." },
  { icon: Settings2, title: "Custom Bots", desc: "Fully tailored bots built around your business needs." },
  { icon: Rocket, title: "Increase Sales", desc: "Turn conversations into paying customers, fast." },
  { icon: ShieldCheck, title: "Secure & Reliable", desc: "Fast, safe, and always-on bots you can trust." },
  { icon: Sparkles, title: "AI Integrations", desc: "Connect GPT, CRMs, and tools your team already uses." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">What we do</p>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold">
            Everything you need to <span className="gradient-text">automate growth</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            End-to-end WhatsApp bot solutions designed to scale your business without scaling your team.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal group glass rounded-3xl p-7 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_20px_60px_-15px_oklch(0.55_0.22_255/0.4)]"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="grid place-items-center h-14 w-14 rounded-2xl gradient-primary glow-sm group-hover:scale-110 transition-transform">
                <s.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}