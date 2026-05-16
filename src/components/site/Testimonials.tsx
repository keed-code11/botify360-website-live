import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Naledi Tshingana",
    role: "Owner, Restaurant",
    avatar: "NT",
    text: "Botify360 built us an e-commerce bot that doubled our weekend sales. Customers love the instant replies.",
  },
  {
    name: "Tebello Tsoeu",
    role: "Founder, Barbershop",
    avatar: "TT",
    text: "I no longer miss bookings at night. The booking bot pays for itself every single week.",
  },
  {
    name: "Anam Skweyiya",
    role: "Operations, Sneakershop",
    avatar: "AS",
    text: "Setup was fast, the team is responsive, and the bot handles 80% of our support questions.",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Testimonials</p>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold">
            Loved by <span className="gradient-text">growing businesses</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal glass rounded-3xl p-7 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_20px_60px_-15px_oklch(0.55_0.22_255/0.4)]"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-foreground/90 leading-relaxed">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid place-items-center h-11 w-11 rounded-full gradient-primary text-white font-bold glow-sm">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}