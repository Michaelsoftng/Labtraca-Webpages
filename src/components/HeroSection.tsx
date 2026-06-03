import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import HeroImage from "@/assets/Refined App Mockup.svg";

export const HeroSection = () => {
  const [address, setAddress] = useState("");

  return (
    <section className="pt-[57px] bg-[#F9F9FF] overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 md:px-8 py-10 md:py-24">
        <div className="flex items-center gap-3 md:gap-16">
          {/* Left — text + CTA */}
          <div className="flex-1 min-w-0 space-y-4 md:space-y-7 animate-fade-in">
            <h1 className="text-[26px] leading-tight sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900">
              Your health,{" "}
              <span className="text-primary block">Delivered at your Door</span>
            </h1>

            <p className="text-sm md:text-base lg:text-lg text-gray-500 leading-relaxed hidden sm:block max-w-md">
              On-demand clinical logistics. Get samples collected and results
              delivered with the speed of food delivery.
            </p>
            <p className="text-xs text-gray-500 leading-relaxed sm:hidden">
              On-demand clinical logistics. Get samples collected and results
              delivered with the speed of food delivery.
            </p>

            {/* Address input */}
            <div className="space-y-3">
              <div className="relative max-w-sm">
                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter delivery address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 md:py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary shadow-sm"
                />
              </div>
              <Button className="w-full sm:w-auto rounded-xl px-5 md:px-7 py-2.5 md:py-3 h-auto text-sm font-semibold bg-primary hover:bg-primary/90 text-white shadow-md flex items-center justify-center gap-2">
                Check availability
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right — phone mockup, hidden on mobile */}
          <div className="relative flex-shrink-0 hidden sm:block w-[260px] md:w-[340px] lg:w-[460px] animate-fade-in [animation-delay:200ms]">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[110px] h-[110px] sm:w-[220px] sm:h-[220px] md:w-[300px] md:h-[300px] lg:w-[420px] lg:h-[420px] rounded-full bg-primary/10 blur-3xl" />
            </div>
            <img
              src={HeroImage}
              alt="Labtraca mobile app showing lab test tracking"
              className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
