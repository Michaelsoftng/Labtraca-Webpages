import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, CheckCircle, Zap, Truck, FileText, ArrowRight } from "lucide-react";
import HeroImage from "@/assets/hero-collage-african.png";

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
    },
    {
      icon: FileText,
      title: "Consultation & Result Review",
      description: "Expert guidance and detailed analysis"
    }
  ];

  return (
    <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-hero-bg via-hero-bg to-primary/5 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Main content */}
          <div className="space-y-8 text-center lg:text-left animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight text-foreground">
                Get a Lab Test{" "}
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  in Minutes
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Our licensed medical professionals come to you, so you can skip the lines and get tested in the comfort of your own home.
              </p>
            </div>

            {/* Search box */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-3 shadow-2xl border w-full max-w-xl mx-auto lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-background rounded-xl">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <Input
                    placeholder="Enter your address or location"
                    className="border-0 bg-transparent p-0 h-auto focus-visible:ring-0 text-base placeholder:text-muted-foreground"
                  />
                </div>
                <Button size="lg" className="rounded-xl font-bold px-8 py-6 h-auto text-base whitespace-nowrap shadow-lg hover:shadow-xl transition-all">
                  Find Services
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in [animation-delay:200ms] mt-12 lg:mt-0">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500">
              <img
                src={HeroImage}
                alt="Healthcare professionals and family"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in [animation-delay:400ms]">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card/80 backdrop-blur-sm border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
};
