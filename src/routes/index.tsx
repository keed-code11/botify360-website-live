import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { DemoBots } from "@/components/site/DemoBots";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Pricing } from "@/components/site/Pricing";
import { BusinessInfo } from "@/components/site/BusinessInfo";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Terms } from "@/components/site/Terms";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Toaster } from "@/components/ui/sonner";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Botify360 — Automate Your Business with WhatsApp Bots" },
      {
        name: "description",
        content:
          "Botify360 builds smart WhatsApp bots that save time, increase sales, and engage customers 24/7. Custom automation for support, bookings & e-commerce.",
      },
      { property: "og:title", content: "Botify360 — WhatsApp Bot Automation" },
      {
        property: "og:description",
        content: "Smart WhatsApp bots that automate support, capture leads and grow sales 24/7.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <DemoBots />
        <HowItWorks />
        <Pricing />
        <BusinessInfo />
        <Testimonials />
        <Contact />
        <Terms />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Toaster position="top-center" richColors />
    </div>
  );
}