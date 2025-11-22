import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
              Get a Lab test in{" "}
              <span className="text-primary">minutes</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Get a lab test in minutes with our mobile app. Our licensed medical 
              professionals come to you, so you can skip the lines and get tested 
              in the comfort of your own home.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-base">
                Book a Test Now
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in [animation-delay:300ms] opacity-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Happy couple using mobile app for lab testing at home"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-accent/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
