import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import HeroImage from "@/assets/Refined App Mockup.svg";

export const HeroSection = () => {
  const [address, setAddress] = useState("");

  return (
    <section className="pt-[57px] bg-[#F4F9F8] min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — text + CTA */}
          <div className="space-y-7 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-gray-900">
              Your health,{" "}
              <span className="text-primary block">Delivered at your Door</span>
            </h1>

            <p className="text-base md:text-lg text-gray-500 max-w-md leading-relaxed">
              On-demand clinical logistics. Get samples collected and results
              delivered with the speed of food delivery.
            </p>

            {/* Address input */}
            <div className="space-y-3 max-w-sm">
              <div className="relative">
                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter delivery address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary shadow-sm"
                />
              </div>
              <Button className="w-full sm:w-auto rounded-xl px-7 py-3 h-auto text-sm font-semibold bg-primary hover:bg-primary/90 text-white shadow-md flex items-center gap-2">
                Check availability
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right — phone mockup */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in [animation-delay:200ms]">
            {/* Decorative blob behind image */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[420px] h-[420px] rounded-full bg-primary/10 blur-3xl" />
            </div>

            <div className="relative z-10 w-full max-w-[400px] lg:max-w-[480px]">
              <img
                src={HeroImage}
                alt="Labtraca mobile app showing lab test tracking"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
