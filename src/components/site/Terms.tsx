import { FileText } from "lucide-react";

const sections = [
  {
    title: "1. About Botify360",
    body: (
      <>
        <p>
          Botify360 is a digital automation business that provides WhatsApp bot development,
          website creation, automation systems, and related digital solutions for businesses.
        </p>
        <p className="mt-3"><span className="font-semibold text-foreground">Founder & CEO:</span> Mafole Makhetha</p>
        <p>
          <span className="font-semibold text-foreground">Website:</span>{" "}
          <a href="https://botify360.vercel.app" className="text-primary hover:underline">botify360.vercel.app</a>
        </p>
        <p className="mt-3 font-semibold text-foreground">Contact Information:</p>
        <ul className="list-disc pl-5 mt-1 space-y-1">
          <li>0747703811</li>
          <li><a href="mailto:official.botify360@gmail.com" className="text-primary hover:underline">official.botify360@gmail.com</a></li>
        </ul>
      </>
    ),
  },
  {
    title: "2. Services Provided",
    body: (
      <>
        <p>Botify360 offers services including but not limited to:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>WhatsApp bot development</li>
          <li>Business automation</li>
          <li>Website design and development</li>
          <li>Lead generation systems</li>
          <li>Bot maintenance and management</li>
          <li>Demo bots and automation consultations</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Project Waiting Periods",
    body: (
      <>
        <p>Estimated delivery periods are as follows:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><span className="font-semibold text-foreground">Demo Bots:</span> Up to 7 working days</li>
          <li><span className="font-semibold text-foreground">Complete Bots & Custom Projects:</span> Up to 30 working days</li>
        </ul>
        <p className="mt-3">
          Delivery times may vary depending on project complexity, client communication,
          revisions, and technical requirements.
        </p>
      </>
    ),
  },
  {
    title: "4. Pricing & Payments",
    body: (
      <>
        <p>Pricing displayed on the website is subject to change at any time without prior notice.</p>
        <p className="mt-3 font-semibold text-foreground">Current pricing includes:</p>
        <ul className="list-disc pl-5 mt-2 space-y-2">
          <li><span className="font-semibold text-foreground">Basic Bot:</span> R800 once-off payment</li>
          <li><span className="font-semibold text-foreground">Pro Bot:</span> R1500 setup fee + R200 monthly management fee</li>
          <li><span className="font-semibold text-foreground">Premium Bot:</span> R2000 setup fee + R300 monthly management fee</li>
        </ul>
        <p className="mt-3">
          Payments must be completed before final project delivery unless otherwise agreed upon.
        </p>
      </>
    ),
  },
  {
    title: "5. Refund Policy",
    body: (
      <>
        <p>Botify360 does not guarantee refunds once development work has started.</p>
        <p className="mt-3">
          Refunds may only be considered under exceptional circumstances at the discretion of
          Botify360 management.
        </p>
        <p className="mt-3">
          Digital services, custom automation systems, and development work are non-refundable
          once completed or partially delivered.
        </p>
      </>
    ),
  },
  {
    title: "6. Client Responsibilities",
    body: (
      <>
        <p>Clients are responsible for:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Providing accurate information</li>
          <li>Responding to communication promptly</li>
          <li>Providing required business details and assets</li>
          <li>Reviewing and approving work during development</li>
        </ul>
        <p className="mt-3">
          Delays caused by lack of communication from the client may affect project timelines.
        </p>
      </>
    ),
  },
  {
    title: "7. Revisions & Modifications",
    body: (
      <>
        <p>Reasonable revisions may be provided depending on the selected package.</p>
        <p className="mt-3">
          Major redesigns, additional features, or changes outside the original agreement may
          result in additional charges.
        </p>
      </>
    ),
  },
  {
    title: "8. Website & Bot Usage",
    body: (
      <>
        <p>Clients may not use Botify360 services for:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Illegal activities</li>
          <li>Spam or phishing</li>
          <li>Fraudulent activity</li>
          <li>Harassment or abuse</li>
          <li>Violations of WhatsApp or Meta policies</li>
        </ul>
        <p className="mt-3">
          Botify360 reserves the right to refuse service to any client engaging in prohibited
          activities.
        </p>
      </>
    ),
  },
  {
    title: "9. Third-Party Services",
    body: (
      <>
        <p>Some services may rely on third-party platforms such as:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>WhatsApp</li>
          <li>Meta</li>
          <li>Botpress</li>
          <li>Hosting providers</li>
        </ul>
        <p className="mt-3">
          Botify360 is not responsible for outages, restrictions, policy changes, or technical
          issues caused by third-party platforms.
        </p>
      </>
    ),
  },
  {
    title: "10. Intellectual Property",
    body: (
      <>
        <p>
          All custom designs, automation systems, and content created by Botify360 remain the
          property of Botify360 until full payment has been received.
        </p>
        <p className="mt-3">
          Botify360 may showcase completed projects in its portfolio unless otherwise agreed.
        </p>
      </>
    ),
  },
  {
    title: "11. Support & Operational Hours",
    body: (
      <>
        <p className="font-semibold text-foreground">Operational Hours:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Mon–Fri: 12PM – 7PM</li>
          <li>Sat–Sun: 10AM – 7PM</li>
          <li>Holidays: Always Open</li>
        </ul>
        <p className="mt-3">
          24/7 support availability may vary depending on workload and response times.
        </p>
      </>
    ),
  },
  {
    title: "12. Limitation of Liability",
    body: (
      <>
        <p>Botify360 shall not be held liable for:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Business losses</li>
          <li>Missed sales</li>
          <li>Technical downtime</li>
          <li>Third-party platform issues</li>
          <li>Data loss or interruptions</li>
        </ul>
        <p className="mt-3">Clients use services at their own discretion and responsibility.</p>
      </>
    ),
  },
  {
    title: "13. Changes to Terms",
    body: (
      <>
        <p>
          Botify360 reserves the right to modify these Terms & Conditions at any time without
          prior notice.
        </p>
        <p className="mt-3">Updated terms will be published on the official website.</p>
      </>
    ),
  },
  {
    title: "14. Contact Information",
    body: (
      <>
        <p>For questions regarding these Terms & Conditions, contact:</p>
        <ul className="mt-2 space-y-1">
          <li>📞 <a href="tel:+27747703811" className="text-primary hover:underline">0747703811</a></li>
          <li>📧 <a href="mailto:official.botify360@gmail.com" className="text-primary hover:underline">official.botify360@gmail.com</a></li>
        </ul>
        <p className="mt-4">Thank you for choosing Botify360.</p>
        <p className="mt-1 font-semibold gradient-text">Automate. Engage. Grow.</p>
      </>
    ),
  },
];

export function Terms() {
  return (
    <section id="terms" className="relative py-24">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center reveal">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Legal</p>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold">
            Terms & <span className="gradient-text">Conditions</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">Last Updated: May 2026</p>
        </div>

        <div className="mt-10 reveal glass-strong rounded-3xl p-8 md:p-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="grid place-items-center h-11 w-11 rounded-xl gradient-primary glow-sm">
              <FileText className="h-5 w-5 text-white" />
            </span>
            <h3 className="font-display text-xl font-semibold">Botify360 Terms of Service</h3>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            Welcome to Botify360. By accessing our website or using our services, you agree to
            comply with and be bound by the following Terms & Conditions.
          </p>

          <div className="mt-8 space-y-8">
            {sections.map((s) => (
              <div key={s.title}>
                <h4 className="font-display text-lg font-semibold text-foreground">{s.title}</h4>
                <div className="mt-2 text-muted-foreground leading-relaxed text-sm">{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}