import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Headphones, Calendar, ShoppingBag, Play, RotateCcw } from "lucide-react";

type Msg = { from: "bot" | "user"; text: string };

const demos: { id: string; icon: any; title: string; subtitle: string; script: Msg[] }[] = [
  {
    id: "support",
    icon: Headphones,
    title: "Customer Support Bot",
    subtitle: "Answers FAQs instantly",
    script: [
      { from: "user", text: "Hi, my order hasn't arrived yet" },
      { from: "bot", text: "Hi! 👋 I can help. Could you share your order number?" },
      { from: "user", text: "#A2391" },
      { from: "bot", text: "Found it ✅ It's out for delivery and arrives today before 5 PM." },
    ],
  },
  {
    id: "booking",
    icon: Calendar,
    title: "Booking Bot",
    subtitle: "Schedules appointments 24/7",
    script: [
      { from: "user", text: "I'd like to book a haircut" },
      { from: "bot", text: "Sure! 💈 What day works best?" },
      { from: "user", text: "Friday afternoon" },
      { from: "bot", text: "Friday 3:00 PM is open. Confirm? ✅" },
      { from: "user", text: "Yes!" },
      { from: "bot", text: "Booked! See you Friday at 3 PM 🎉" },
    ],
  },
  {
    id: "ecom",
    icon: ShoppingBag,
    title: "E-commerce Bot",
    subtitle: "Recommends and sells products",
    script: [
      { from: "user", text: "Hi, do you have white sneakers?" },
      { from: "bot", text: "Yes! 👟 Size?" },
      { from: "user", text: "Size 9" },
      { from: "bot", text: "We have 3 styles in stock — R899, R1,250, R1,499. Want pictures?" },
      { from: "user", text: "Yes please" },
      { from: "bot", text: "📸 Sent! Tap any to checkout instantly." },
    ],
  },
];

function ChatBubble({ msg }: { msg: Msg }) {
  const isBot = msg.from === "bot";
  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"} animate-bubble-in`}>
      <div
        className={`max-w-[80%] px-3.5 py-2 rounded-2xl text-sm leading-snug shadow-sm ${
          isBot
            ? "bg-white text-slate-800 rounded-bl-sm"
            : "bg-[#dcf8c6] text-slate-800 rounded-br-sm"
        }`}
      >
        {msg.text}
      </div>
    </div>
  );
}

function DemoCard({ demo }: { demo: (typeof demos)[number] }) {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [playing, setPlaying] = useState(false);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  const play = async () => {
    setPlaying(true);
    setMessages([]);
    for (const m of demo.script) {
      await new Promise((r) => setTimeout(r, 700));
      if (m.from === "bot") {
        setTyping(true);
        await new Promise((r) => setTimeout(r, 900));
        setTyping(false);
      }
      setMessages((prev) => [...prev, m]);
    }
    setPlaying(false);
  };

  const reset = () => {
    setMessages([]);
    setTyping(false);
  };

  const Icon = demo.icon;

  return (
    <div className="glass rounded-3xl p-5 flex flex-col hover:-translate-y-1 transition-transform duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className="grid place-items-center h-11 w-11 rounded-xl gradient-primary glow-sm">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <div>
          <h3 className="font-semibold">{demo.title}</h3>
          <p className="text-xs text-muted-foreground">{demo.subtitle}</p>
        </div>
      </div>

      {/* WhatsApp chat window */}
      <div className="rounded-2xl overflow-hidden border border-white/40 dark:border-white/10 shadow-inner">
        <div className="bg-[#075e54] text-white px-4 py-2.5 flex items-center gap-2.5">
          <div className="grid place-items-center h-8 w-8 rounded-full bg-white/20 text-sm font-bold">
            B
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold leading-tight">Botify360</p>
            <p className="text-[10px] text-white/70">{typing ? "typing..." : "online"}</p>
          </div>
        </div>
        <div
          ref={scrollRef}
          className="bg-[#e5ddd5] dark:bg-slate-800 h-64 overflow-y-auto p-3 space-y-2"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, oklch(0 0 0 / 0.04) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        >
          {messages.length === 0 && !typing && (
            <p className="text-center text-xs text-slate-500 mt-20">Tap "Try Demo" to start</p>
          )}
          {messages.map((m, i) => (
            <ChatBubble key={i} msg={m} />
          ))}
          {typing && (
            <div className="flex justify-start">
              <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm flex gap-1">
                <span className="h-2 w-2 rounded-full bg-slate-400 animate-typing" />
                <span className="h-2 w-2 rounded-full bg-slate-400 animate-typing" style={{ animationDelay: "0.2s" }} />
                <span className="h-2 w-2 rounded-full bg-slate-400 animate-typing" style={{ animationDelay: "0.4s" }} />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <Button variant="hero" className="flex-1" onClick={play} disabled={playing}>
          <Play className="h-4 w-4" /> {playing ? "Running..." : "Try Demo"}
        </Button>
        <Button variant="glass" size="icon" onClick={reset} aria-label="Reset">
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export function DemoBots() {
  return (
    <section id="demo" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto reveal">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Live Demos</p>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold">
            See Our Bots <span className="gradient-text">in Action</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Click any bot to see a real conversation flow. This is exactly what your customers will experience.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demos.map((d) => (
            <DemoCard key={d.id} demo={d} />
          ))}
        </div>
      </div>
    </section>
  );
}