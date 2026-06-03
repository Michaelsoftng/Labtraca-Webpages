import { MapPin, Thermometer } from "lucide-react";
import MedicalIllustration from "@/assets/Overlay+Border+Shadow.svg";
import AppMockup from "@/assets/Refined App Mockup.svg";

const features = [
  {
    icon: MapPin,
    title: "GPS Pinpointing",
    description: "Military-grade location tracking for precise pickup.",
  },
  {
    icon: Thermometer,
    title: "Cold-Chain Monitoring",
    description: "IoT sensors ensure samples stay at optimal temperatures.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-10 md:py-24 md:px-8 bg-[#0F172A]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Left — text + features */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                Watch your health
                <br />
                come to you
              </h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md">
                Real-time precision for every medical sample. No more waiting in
                long clinic queues.
              </p>
            </div>

            {/* App mockup — mobile only, sits between heading and feature cards */}
            <div className="flex justify-center lg:hidden">
              <img
                src={AppMockup}
                alt="Labtraca app mockup"
                className="w-[85vw] sm:w-full max-w-[380px] h-auto object-contain mx-auto"
              />
            </div>

            <div className="space-y-4">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/8 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/30 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — illustration, desktop only */}
          <div className="hidden lg:flex justify-end animate-fade-in [animation-delay:200ms]">
            <img
              src={MedicalIllustration}
              alt="Medical logistics illustration"
              className="w-full max-w-[260px] sm:max-w-[360px] lg:max-w-[480px] h-auto object-contain mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
