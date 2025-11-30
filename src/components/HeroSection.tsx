import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, CheckCircle, Zap, Truck } from "lucide-react";

export const HeroSection = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Trusted Diagnostics",
      description: "Certified labs and professionals"
    },
    {
      icon: Zap,
      title: "Seamless Access",
      description: "Book in minutes, results in hours"
    },
    {
      icon: Truck,
      title: "Reliable Sample Transport",
      description: "Safe and secure delivery"
    }
  ];

  return (
    <section className="relative pt-24 sm:pt-32 pb-20 sm:pb-24 px-4 sm:px-6 bg-hero-bg overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-10 sm:space-y-12">
          <div className="space-y-6 sm:space-y-8 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-foreground">
              Get a Lab test in minutes
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-foreground/80 max-w-3xl">
              Get a lab test in minutes with our mobile app. Our licensed medical professionals come to you, so you can skip the lines and get tested in the comfort of your own home.
            </p>

            <div className="bg-white rounded-xl sm:rounded-2xl p-2 shadow-2xl w-full max-w-2xl">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 flex items-center gap-3 px-3 sm:px-4 py-2 sm:py-3 bg-muted/50 rounded-lg sm:rounded-xl">
                  <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-muted-foreground flex-shrink-0" />
                  <Input
                    placeholder="What's your address?"
                    className="border-0 bg-transparent p-0 h-auto focus-visible:ring-0 text-sm sm:text-base"
                  />
                </div>
                <Button size="lg" className="rounded-lg sm:rounded-xl font-bold px-4 sm:px-8 py-2 sm:py-3 h-auto text-sm sm:text-base whitespace-nowrap">
                  Use current location
                </Button>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 animate-fade-in [animation-delay:200ms]">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <feature.icon className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};
