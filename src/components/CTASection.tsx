import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-12 px-4 md:py-20 md:px-6 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />

      <div className="container mx-auto max-w-4xl text-center relative z-10 space-y-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black animate-fade-in">
          Ready to get tested?
        </h2>
        <p className="text-xl md:text-2xl opacity-90 animate-fade-in [animation-delay:200ms]">
          Join thousands who trust Labtraca for their health needs
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in [animation-delay:400ms]">
          <Button
            size="lg"
            variant="secondary"
            className="rounded-full font-bold text-lg px-10 py-6 h-auto shadow-xl hover:scale-105 transition-transform"
          >
            Book Your Test Now
            <ArrowRight className="ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full font-bold text-lg px-10 py-6 h-auto border-2 border-white text-white hover:bg-white hover:text-primary shadow-xl hover:scale-105 transition-all"
          >
            Become a Partner
          </Button>
        </div>
      </div>
    </section>
  );
};
