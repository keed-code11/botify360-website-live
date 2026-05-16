import { useEffect, useState } from "react";
import { Bot, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#services", label: "Services" },
  { href: "#demo", label: "Demos" },
  { href: "#how", label: "How it Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all ${
            scrolled ? "glass-strong" : "glass"
          }`}
        >
          <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="grid place-items-center h-9 w-9 rounded-xl gradient-primary glow-sm">
              <Bot className="h-5 w-5 text-white" />
            </span>
            <span className="gradient-text">Botify360</span>
          </a>

          <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-foreground transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="hero" size="default" asChild>
              <a href="#contact">Get Started</a>
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">

            <button
              className="p-2 rounded-lg glass"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-4 animate-fade-in">
            <ul className="flex flex-col gap-3 text-sm font-medium">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <Button variant="hero" asChild className="mt-2">
                <a href="#contact" onClick={() => setOpen(false)}>Get Started</a>
              </Button>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}