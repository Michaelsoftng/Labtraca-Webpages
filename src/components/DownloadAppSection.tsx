import { Button } from "@/components/ui/button";
import { Smartphone, Apple, Play } from "lucide-react";

export const DownloadAppSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
              <Smartphone className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              Get the Labtraca app
            </h2>
            <p className="text-lg text-muted-foreground">
              Book lab tests, track your samples, and get results faster with our mobile app. Available on iOS and Android.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="rounded-full font-bold text-lg px-8 h-14 bg-foreground text-background hover:bg-foreground/90"
              >
                <Apple className="mr-2 h-6 w-6" />
                App Store
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="rounded-full font-bold text-lg px-8 h-14"
              >
                <Play className="mr-2 h-6 w-6" />
                Google Play
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in [animation-delay:200ms]">
            <div className="w-full h-[500px] bg-gradient-to-br from-primary to-secondary rounded-3xl shadow-2xl flex items-center justify-center">
              <Smartphone className="w-32 h-32 text-primary-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
