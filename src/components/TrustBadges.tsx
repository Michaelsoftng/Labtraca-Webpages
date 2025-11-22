import { Shield, Building2, TestTube } from "lucide-react";
import { Card } from "@/components/ui/card";

const badges = [
  {
    icon: Shield,
    title: "Trusted Diagnostics",
    description: "Certified labs and professionals",
  },
  {
    icon: Building2,
    title: "Seamless Access",
    description: "Book appointments instantly",
  },
  {
    icon: TestTube,
    title: "Reliable Sample Transport",
    description: "Safe handling guaranteed",
  },
];

export const TrustBadges = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {badges.map((badge, index) => (
            <Card
              key={index}
              className="p-8 text-center border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <badge.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">
                {badge.title}
              </h3>
              <p className="text-muted-foreground">
                {badge.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
