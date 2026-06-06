import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import HeroImage from "@/assets/Refined App Mockup.svg";

export const HeroSection = () => {
  const [address, setAddress] = useState("");

  return (
    <section className="pt-16 sm:pt-[57px] bg-[#F9F9FF] overflow-hidden">
      {/* Mobile layout */}
      <div className="sm:hidden px-4 pt-10 pb-16 bg-gradient-to-b from-[#F9F9FF] to-[#e9edff]">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-[40px] font-bold leading-tight text-gray-900 mb-6">
            Your health,{" "}
            <span className="text-primary block">Delivered at your Door</span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed mb-10">
            On-demand clinical diadnosis and logistics. Get samples collected
            and results delivered with the speed of food delivery.
          </p>
          <div className="flex flex-col gap-3">
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Enter sample collection address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
            <Button className="w-full rounded-xl py-4 h-auto text-lg font-bold bg-primary hover:bg-primary/90 text-white shadow-lg flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
              Explore partner labs
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden sm:block container mx-auto max-w-7xl px-4 md:px-8 py-10 md:py-24">
        <div className="flex items-center gap-3 md:gap-16">
          <div className="flex-1 min-w-0 space-y-4 md:space-y-7 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-tight">
              Your health,{" "}
              <span className="text-primary block">Delivered at your Door</span>
            </h1>
            <p className="text-base lg:text-lg text-gray-500 leading-relaxed max-w-md">
              On-demand clinical diadnosis and logistics. Get samples collected
              and results delivered with the speed of food delivery.
            </p>
            <div className="space-y-3">
              <div className="relative max-w-sm">
                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter sample collection address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary shadow-sm"
                />
              </div>
              <Button className="rounded-xl px-7 py-3 h-auto text-sm font-semibold bg-primary hover:bg-primary/90 text-white shadow-md flex items-center gap-2">
                Explore partner labs
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="relative flex-shrink-0 w-[260px] md:w-[340px] lg:w-[460px] animate-fade-in [animation-delay:200ms]">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[220px] h-[220px] md:w-[300px] md:h-[300px] lg:w-[420px] lg:h-[420px] rounded-full bg-primary/10 blur-3xl" />
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
