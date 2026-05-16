import { Clock, CalendarClock } from "lucide-react";

const hours = [
  { day: "Mon – Fri", time: "12:00 PM – 7:00 PM" },
  { day: "Sat – Sun", time: "10:00 AM – 7:00 PM" },
  { day: "Public Holidays", time: "Always Open" },
];

const waiting = [
  { label: "Demo Bot", time: "7 working days" },
  { label: "Complete Bot", time: "30 days" },
];

export function BusinessInfo() {
  return (
    <section id="info" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Business Info</p>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold">
            When we're <span className="gradient-text">available</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our bots run 24/7 — and our team is here when you need us most.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="reveal glass rounded-3xl p-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="grid place-items-center h-12 w-12 rounded-2xl gradient-primary glow-sm">
                <Clock className="h-6 w-6 text-white" />
              </span>
              <h3 className="font-display text-xl font-semibold">Operational Hours</h3>
            </div>
            <ul className="space-y-3">
              {hours.map((h) => (
                <li
                  key={h.day}
                  className="flex justify-between items-center py-2 border-b border-border/40 last:border-0"
                >
                  <span className="text-sm font-medium">{h.day}</span>
                  <span className="text-sm text-muted-foreground">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal glass rounded-3xl p-7" style={{ transitionDelay: "80ms" }}>
            <div className="flex items-center gap-3 mb-5">
              <span className="grid place-items-center h-12 w-12 rounded-2xl gradient-primary glow-sm">
                <CalendarClock className="h-6 w-6 text-white" />
              </span>
              <h3 className="font-display text-xl font-semibold">Waiting Period</h3>
            </div>
            <ul className="space-y-3">
              {waiting.map((w) => (
                <li
                  key={w.label}
                  className="flex justify-between items-center py-2 border-b border-border/40 last:border-0"
                >
                  <span className="text-sm font-medium">{w.label}</span>
                  <span className="text-sm gradient-text font-semibold">{w.time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-muted-foreground">
              Timelines start from receipt of business details and approved brief.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}