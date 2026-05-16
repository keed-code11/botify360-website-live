import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const url = `https://wa.me/27747703811?text=${encodeURIComponent("Hi Botify360, I'd like to know more about your WhatsApp bots.")}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[oklch(0.65_0.17_150)] animate-ping opacity-30" />
      <span className="relative grid place-items-center h-14 w-14 rounded-full bg-[oklch(0.65_0.17_150)] text-white shadow-[0_10px_40px_oklch(0.65_0.17_150/0.6)] hover:scale-110 transition-transform">
        <MessageCircle className="h-6 w-6" />
      </span>
      <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap glass-strong text-sm font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us
      </span>
    </a>
  );
}