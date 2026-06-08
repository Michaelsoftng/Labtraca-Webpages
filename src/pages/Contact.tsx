import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Phone, Mail, MapPin, Search, MessageSquare, ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const desktopFaqs = [
  {
    question: "How do I track my medical order?",
    answer: "You can track your order in real-time through the 'Orders' tab. Each order provides live GPS tracking and estimated arrival times.",
  },
  {
    question: "What are your support hours?",
    answer: "Our clinical logistics support team is available 24/7 to ensure critical medical supplies are delivered without interruption.",
  },
  {
    question: "How to refund a wallet top-up?",
    answer: "Wallet refunds can be requested via the Support Form. Please include the transaction ID found in your 'Wallet' history.",
  },
];

const mobileFaqs = [
  {
    question: "How do I track a stat specimen?",
    answer: "Stat specimens can be tracked in real-time via the Orders tab in your Labtraca app.",
  },
  {
    question: "What are temperature protocols?",
    answer: "All samples are transported in temperature-controlled containers to maintain clinical integrity throughout the delivery chain.",
  },
  {
    question: "New provider onboarding?",
    answer: "New healthcare providers can onboard by visiting the Partner With Us page and completing the registration form.",
  },
];

const ArrowRight = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ContactForm = ({ mobile }: { mobile?: boolean }) => (
  <form className="space-y-4">
    {mobile ? (
      <>
        <div>
          <label className="text-xs font-semibold text-gray-600 block mb-1.5">Full Name</label>
          <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-border bg-canvas text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-600 block mb-1.5">Email Address</label>
          <input type="email" placeholder="john@clinic.com" className="w-full px-4 py-3 rounded-xl border border-border bg-canvas text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-600 block mb-1.5">Issue Type</label>
          <div className="relative">
            <select className="w-full px-4 py-3 rounded-xl border border-border bg-canvas text-sm text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
              <option>Logistics & Tracking</option>
              <option>Billing & Payments</option>
              <option>Sample Collection</option>
              <option>Test Results</option>
              <option>Other</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-600 block mb-1.5">Message</label>
          <textarea placeholder="How can our clinical team assist you?" rows={4} className="w-full px-4 py-3 rounded-xl border border-border bg-canvas text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none" />
        </div>
        <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 active:scale-[0.98] transition-transform shadow-md">
          Send Request <ArrowRight />
        </button>
      </>
    ) : (
      <>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-gray-600 block mb-1.5">Full Name</label>
            <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-lg border border-border bg-canvas text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-600 block mb-1.5">Email Address</label>
            <input type="email" placeholder="john@clinic.com" className="w-full px-4 py-3 rounded-lg border border-border bg-canvas text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
          </div>
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-600 block mb-1.5">Issue Subject</label>
          <div className="relative">
            <select className="w-full px-4 py-3 rounded-lg border border-border bg-canvas text-sm text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
              <option>Delivery Tracking</option>
              <option>Billing & Payments</option>
              <option>Sample Collection</option>
              <option>Test Results</option>
              <option>Other</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-600 block mb-1.5">Description</label>
          <textarea placeholder="Tell us how we can help..." rows={5} className="w-full px-4 py-3 rounded-lg border border-border bg-canvas text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none" />
        </div>
        <button type="submit" className="bg-primary text-white px-8 py-3 rounded-lg font-bold text-sm hover:bg-primary/90 transition-colors shadow-md">
          Submit Request
        </button>
      </>
    )}
  </form>
);

const Contact = () => {
  return (
    <div className="min-h-screen bg-canvas">
      <Navigation />

      {/* ─── MOBILE ─── */}
      <main className="sm:hidden pt-16 px-4 pb-20">
        {/* Hero */}
        <section className="pt-8 pb-6">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Support Center</span>
          <h1 className="text-[36px] font-bold leading-tight text-foreground mt-2 mb-3">
            How can we <br />help you today?
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Our dedicated logistics and medical support team is available 24/7 to ensure your clinical operations remain seamless.
          </p>
        </section>

        {/* Search */}
        <div className="relative mb-5">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search help articles..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-white border border-border shadow-sm">
            <div className="w-12 h-12 rounded-full bg-teal-surface flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm font-semibold text-primary">Call Support</span>
          </button>
          <button className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-white border border-border shadow-sm">
            <div className="w-12 h-12 rounded-full bg-teal-surface flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm font-semibold text-primary">Live Chat</span>
          </button>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-2xl border border-border p-5 mb-8 shadow-sm">
          <h2 className="text-lg font-bold text-foreground mb-5 flex items-center gap-2">
            <Mail className="w-5 h-5 text-primary" />
            Send us a message
          </h2>
          <ContactForm mobile />
        </div>

        {/* Common Questions */}
        <section className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-foreground">Common Questions</h2>
              <p className="text-xs text-muted-foreground">Quick answers for our healthcare partners.</p>
            </div>
            <Link to="/faq" className="text-sm font-semibold text-primary whitespace-nowrap flex items-center gap-1">
              View All <ArrowRight />
            </Link>
          </div>
          <Accordion type="single" collapsible className="space-y-2">
            {mobileFaqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`m-${i}`}
                className="bg-white border border-border rounded-xl px-4 data-[state=open]:bg-primary/5"
              >
                <AccordionTrigger className="text-sm font-semibold text-gray-800 hover:text-primary py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground pb-3 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Dark banner */}
        <div className="relative rounded-2xl overflow-hidden h-44 mb-2 bg-[#062020]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,103,103,0.6),_transparent_70%)]" />
          <div className="relative z-10 p-6 flex flex-col justify-end h-full">
            <h3 className="text-white font-bold text-xl">Clinical Grade Logistics</h3>
            <p className="text-white/70 text-xs mt-1">Learn more about our cold-chain integrity protocols.</p>
          </div>
        </div>
      </main>

      {/* ─── DESKTOP ─── */}
      <main className="hidden sm:block pt-32 pb-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          {/* Page header */}
          <div className="mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Support Center</span>
            <h1 className="text-5xl font-black text-foreground mt-2 mb-3 leading-tight">
              How can we help you today?
            </h1>
            <p className="text-base text-muted-foreground max-w-lg leading-relaxed">
              Our dedicated logistics and medical support team is available 24/7 to ensure your clinical operations remain seamless.
            </p>
          </div>

          {/* Two-column grid */}
          <div className="grid grid-cols-5 gap-8 mb-20">
            {/* Left — form + image */}
            <div className="col-span-3 flex flex-col gap-6">
              <div className="bg-white border border-border rounded-2xl p-8 shadow-sm">
                <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Send a Message
                </h2>
                <ContactForm />
              </div>

              {/* Dark logistics banner */}
              <div className="relative rounded-2xl overflow-hidden h-56 bg-[#062020]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,103,103,0.55),_transparent_70%)]" />
                <div className="absolute inset-0 opacity-20"
                  style={{ backgroundImage: "radial-gradient(circle, #00b3b3 1px, transparent 1px)", backgroundSize: "28px 28px" }}
                />
                <div className="relative z-10 p-8 flex flex-col justify-end h-full">
                  <p className="text-white/90 text-base font-medium leading-relaxed max-w-md">
                    Our medical logistics team is always monitoring your shipments for clinical precision.
                  </p>
                </div>
              </div>
            </div>

            {/* Right — direct contact + map */}
            <div className="col-span-2 flex flex-col gap-6">
              <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-foreground mb-6">Direct Contact</h2>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-teal-surface flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">24/7 Support Line</p>
                      <p className="text-primary font-bold text-base">+1 (800) LAB-TRAC</p>
                      <p className="text-xs text-gray-400 mt-0.5">Priority for urgent sample status</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-teal-surface flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">Email Support</p>
                      <a href="mailto:care@labtraca.com" className="text-primary font-bold text-base">care@labtraca.com</a>
                      <p className="text-xs text-gray-400 mt-0.5">Typical response within 2 hours</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-teal-surface flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">Global HQ</p>
                      <p className="text-foreground font-semibold text-sm">1200 Bio-Innovation Way, Ste 400</p>
                      <p className="text-xs text-gray-400 mt-0.5">Cambridge, MA 02139</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="relative rounded-2xl overflow-hidden flex-1 min-h-[180px] bg-gray-300">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white text-foreground text-sm font-bold px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2 hover:bg-muted transition-colors">
                    <MapPin className="w-4 h-4 text-primary" />
                    View on Map
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Common Questions */}
          <section>
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-3xl font-black text-foreground">Common Questions</h2>
                <p className="text-muted-foreground mt-1">Quick answers for our healthcare partners.</p>
              </div>
              <Link to="/faq" className="text-sm font-semibold text-primary flex items-center gap-1 hover:underline">
                View Help Center <ArrowRight />
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {desktopFaqs.map((faq, i) => (
                <Accordion key={i} type="single" defaultValue="item-0" collapsible>
                  <AccordionItem
                    value="item-0"
                    className="bg-white border border-border rounded-xl px-5 data-[state=open]:bg-primary/5"
                  >
                    <AccordionTrigger className="text-sm font-bold text-gray-800 hover:text-primary py-4 text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-xs text-muted-foreground pb-4 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
