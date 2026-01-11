import { CheckCircle, Zap, Truck } from "lucide-react";
import HeroImage from "@/assets/hero-header-image.png";

export const HeroSection = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Trusted Diagnostics",
    },
    {
      icon: Zap,
      title: "Seamless Access",
    },
    {
      icon: Truck,
      title: "Reliable Sample Transport",
    }
  ];

  return (
    <section className="relative pt-24 pb-12 px-[0.5px] md:pt-32 md:pb-20 md:px-6 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-20 lg:items-center mb-16">
          {/* Main content */}
          <div className="space-y-6 text-center lg:text-left animate-fade-in">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight text-black">
              Get a Lab test in minutes
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Get a lab test in minutes with our mobile app. Our licensed medical professionals come to you, so you can skip the lines and get tested in the comfort of your own home.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in [animation-delay:200ms]">
            <div className="relative z-10">
              <img
                src={HeroImage}
                alt="Healthcare professionals and family"
                className="w-full h-auto object-contain"
              />
            </div>


          </div>
        </div>

        {/* Feature Badges */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-12 animate-fade-in [animation-delay:400ms] justify-center lg:justify-start lg:items-start">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="font-semibold text-black">{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
