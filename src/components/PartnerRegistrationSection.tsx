import { Button } from "@/components/ui/button";
import { Truck, Droplet, ArrowRight } from "lucide-react";

export const PartnerRegistrationSection = () => {
  return (
    <section className="py-12 px-4 md:py-20 md:px-6">
      <div className="container mx-auto max-w-7xl space-y-16">
        {/* Dispatcher Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center">
              <Truck className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              Become a Dispatcher
            </h2>
            <p className="text-lg text-muted-foreground">
              Join our logistics team and coordinate sample collections efficiently. Flexible hours, competitive pay, and the opportunity to make healthcare more accessible.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Flexible scheduling</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Competitive earnings</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Work in your area</span>
              </li>
            </ul>
            <Button
              size="lg"
              className="rounded-full font-bold text-lg px-10 py-6 h-auto"
            >
              Register as Dispatcher
              <ArrowRight className="ml-2" />
            </Button>
          </div>

          <div className="relative animate-fade-in [animation-delay:200ms]">
            <div className="w-full h-[400px] bg-gradient-to-br from-accent to-accent/60 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
              <img
                src="/assets/dispatcher.png"
                alt="Medical Dispatcher"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Phlebotomist Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1 animate-fade-in [animation-delay:200ms]">
            <div className="w-full h-[400px] bg-gradient-to-br from-primary to-secondary rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
              <img
                src="/assets/phlebotomist.png"
                alt="Professional Phlebotomist"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="space-y-6 order-1 md:order-2 animate-fade-in">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
              <Droplet className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              Become a Phlebotomist
            </h2>
            <p className="text-lg text-muted-foreground">
              Use your medical skills to provide convenient at-home and workplace lab services. Join a network of healthcare professionals making a difference.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Licensed professionals only</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Premium compensation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Modern equipment provided</span>
              </li>
            </ul>
            <Button
              size="lg"
              className="rounded-full font-bold text-lg px-10 py-6 h-auto"
            >
              Register as Phlebotomist
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
