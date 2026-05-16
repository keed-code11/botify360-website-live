import { ArrowRight, Play, Sparkles, MessageCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBot from "@/assets/hero-bot.png";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-20 overflow-hidden">
      {/* Glowing orbs */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-pulse-glow" />
      <div className="absolute top-40 -right-20 h-80 w-80 rounded-full bg-primary-glow/30 blur-3xl animate-float-slow" />

      <div className="relative mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal in">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-semibold mb-6">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>AI-Powered WhatsApp Automation</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            Automate Your Business with{" "}
            <span className="gradient-text">WhatsApp Bots</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            We build smart WhatsApp bots that save time, increase sales, and engage customers 24/7 — so you can focus on growth.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Get Started <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#demo">
                <Play className="h-4 w-4" /> View Demo Bots
              </a>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[oklch(0.65_0.17_150)] animate-pulse" />
              <span>24/7 Available</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              <span>Setup in 48h</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-primary" />
              <span>10k+ chats/mo</span>
            </div>
          </div>
        </div>

        <div className="relative h-[460px] lg:h-[560px]">
          {/* Floating decorative bubbles */}
          <div className="absolute top-6 left-4 glass rounded-2xl rounded-bl-sm px-4 py-2.5 text-sm font-medium animate-float">
            👋 Hi! How can I help?
          </div>
          <div className="absolute bottom-16 right-4 glass rounded-2xl rounded-br-sm px-4 py-2.5 text-sm font-medium animate-float-slow">
            ✅ Order confirmed!
          </div>
          <div className="absolute top-1/2 -left-2 glass rounded-2xl px-3 py-2 text-xs font-medium animate-float" style={{ animationDelay: "1s" }}>
            💬 New lead
          </div>

          {/* Hero image */}
          <div className="absolute inset-0 grid place-items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/40 blur-3xl rounded-full scale-75" />
              <img
                src={heroBot}
                alt="WhatsApp chatbot automation illustration"
                width={520}
                height={520}
                className="relative w-[320px] sm:w-[420px] lg:w-[520px] drop-shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}