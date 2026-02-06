import { Card } from "@/components/ui/card";
import { Microscope, Bike, CalendarCheck, UserCheck } from "lucide-react";

const features = [
  {
    icon: Microscope,
    title: "Your city's top labs",
    description: "With a great variety of labs you can order your tests or explore new health services nearby!",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Bike,
    title: "Fast service",
    description: "Like a flash! Book a test in your city and get results in hours or days, not weeks",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: CalendarCheck,
    title: "24/7 availability",
    description: "We're here when you need us. Book appointments that fit your schedule, any time",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: UserCheck,
    title: "Verified professionals",
    description: "All our medical professionals are licensed, certified, and background-checked for your safety",
    color: "bg-primary/10 text-primary",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-12 px-4 md:py-20 md:px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-4 text-foreground">
          Anything Delivered
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          From routine blood work to specialized testing, we bring the lab to you
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-2xl transition-all duration-300 border-0 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center flex-shrink-0`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
