import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I book a lab test?",
      answer: "Simply download our app, search for the test you need, select your preferred date and time, and a licensed medical professional will come to your home to collect your sample."
    },
    {
      question: "Are the medical professionals certified?",
      answer: "Yes, all our medical professionals are licensed and certified. We ensure they meet the highest standards of professionalism and expertise."
    },
    {
      question: "How long does it take to get results?",
      answer: "Results typically arrive within 24-48 hours after your sample is collected and sent to our partner labs. You can track the progress in real-time through our app."
    },
    {
      question: "What tests are available?",
      answer: "We offer a wide range of lab tests including blood tests, wellness packages, disease screening, and more. Check our app for the complete list of available tests in your area."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use industry-standard encryption and secure data handling practices to protect your personal and medical information."
    },
    {
      question: "Can I become a medical professional on Labtraca?",
      answer: "Yes! If you're a certified phlebotomist or medical professional, you can join our network and earn money on your own schedule. Visit our 'Become a Phlebotomist' page to apply."
    },
    {
      question: "What areas do you serve?",
      answer: "We currently operate in Abuja and are expanding to more regions soon. Check our app to see if we're available in your area."
    },
    {
      question: "How much does it cost?",
      answer: "Pricing varies depending on the test you choose. All prices are transparent and displayed before you book. There are no hidden charges."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 bg-gradient-to-br from-hero-bg via-hero-bg to-primary/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
        
        <div className="container mx-auto max-w-4xl text-center relative z-10 space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground animate-fade-in leading-tight">
              Frequently Asked <br />
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in [animation-delay:200ms] leading-relaxed">
            Find answers to common questions about our services, booking process, and how Labtraca works.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 data-[state=open]:bg-primary/5"
              >
                <AccordionTrigger className="text-lg font-bold text-foreground hover:text-primary transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-primary-foreground mb-6">
            Still have questions?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact our 24/7 customer support team. We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@labtraca.com">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 h-auto rounded-full">
                Email Us
                <ArrowRight className="ml-2" />
              </Button>
            </a>
            <a href="tel:+2340813389601">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 h-auto rounded-full">
                Call Us
                <ArrowRight className="ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
