import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin } from "lucide-react";
import medicalIllustration from "@/assets/medical-illustration.png";

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 px-6 bg-hero-bg overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 animate-slide-in">
            <img
              src={medicalIllustration}
              alt="Medical testing illustration"
              className="w-80 h-80 object-contain mx-auto lg:mx-0"
            />
          </div>
          
          <div className="space-y-8 animate-fade-in [animation-delay:200ms] opacity-0">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-foreground">
              Lab testing and more
            </h1>
            <p className="text-xl md:text-2xl font-bold text-foreground/80">
              Blood tests, health screens, at-home service, anything!
            </p>
            
            <div className="bg-white rounded-2xl p-2 shadow-2xl max-w-2xl">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-muted/50 rounded-xl">
                  <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <Input
                    placeholder="What's your address?"
                    className="border-0 bg-transparent p-0 h-auto focus-visible:ring-0 text-base"
                  />
                </div>
                <Button size="lg" className="rounded-xl font-bold px-8 whitespace-nowrap">
                  Use current location
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};
