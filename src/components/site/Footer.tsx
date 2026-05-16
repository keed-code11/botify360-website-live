import { Bot, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-12 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <a href="#top" className="flex items-center gap-2 font-display font-bold text-xl">
              <span className="grid place-items-center h-10 w-10 rounded-xl gradient-primary glow-sm">
                <Bot className="h-5 w-5 text-white" />
              </span>
              <span className="gradient-text">Botify360</span>
            </a>
            <p className="mt-3 text-sm text-muted-foreground max-w-sm">
              Automate. Engage. Grow. We build smart WhatsApp bots that work 24/7 for your business.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid place-items-center h-10 w-10 rounded-xl glass hover:gradient-primary hover:text-white transition-all"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Navigate</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-primary">Services</a></li>
              <li><a href="#demo" className="hover:text-primary">Demo Bots</a></li>
              <li><a href="#how" className="hover:text-primary">How it Works</a></li>
              <li><a href="#pricing" className="hover:text-primary">Pricing</a></li>
              <li><a href="#contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="tel:+27747703811" className="hover:text-primary">074 770 3811</a></li>
              <li><a href="mailto:official.botify360@gmail.com" className="hover:text-primary break-all">official.botify360@gmail.com</a></li>
              
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Botify360. All rights reserved.</p>
          <p>
            Founded and led by <span className="font-semibold gradient-text">Mafole Makhetha</span> (CEO)
          </p>
        </div>
      </div>
    </footer>
  );
}