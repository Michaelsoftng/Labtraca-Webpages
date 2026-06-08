import { MapPin, Truck, FileText } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: MapPin,
    title: "Request Lab Tests",
    description:
      "Pin your location and select lab tests from your preferred laboratory from our hyper-lab network.",
  },
  {
    number: "2",
    icon: Truck,
    title: "Professional Collection and Dispatch",
    description:
      "A certified medical courier arrives in minutes for secure, cold-chain sample retrieval.",
  },
  {
    number: "3",
    icon: FileText,
    title: "Digital Results",
    description:
      "Track your sample live and receive secure digital results directly to your health passport.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-10 md:py-24 px-4 md:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Badge */}
        <div className="flex justify-center mb-5">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary text-primary text-xs font-bold tracking-widest uppercase">
            Process
          </span>
        </div>

        <h2 className="text-2xl md:text-4xl font-black text-center text-foreground mb-8 md:mb-14 leading-tight">
          Clinical care in 3 steps
        </h2>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-card-surface rounded-2xl p-5 md:p-8 flex flex-col gap-4 md:gap-5 border border-border hover:shadow-md transition-shadow"
            >
              {/* Step number circle */}
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-black">
                  {step.number}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-black text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
