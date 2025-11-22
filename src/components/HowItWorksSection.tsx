import { Card } from "@/components/ui/card";
import { Calendar, FileCheck, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Book tests available",
    description: "Easily book a licensed medical professional to come to your home and perform a lab test. Select your test, date, and time.",
  },
  {
    icon: FileCheck,
    title: "Get your results",
    description: "Track the progress of your test and get your results right from your mobile device.",
  },
  {
    icon: TrendingUp,
    title: "Collect test samples and earn",
    description: "Medical professionals can accept requests, set their availability, and earn money on their own schedule.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="p-8 space-y-4 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-primary-foreground mb-4">
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
