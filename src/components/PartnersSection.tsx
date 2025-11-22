import { Card } from "@/components/ui/card";
import { Building2, TestTube2, Hospital, Stethoscope, HeartPulse, ActivitySquare, Syringe, Microscope } from "lucide-react";

const partners = [
  { icon: Building2, name: "LabCorp", color: "bg-blue-500" },
  { icon: TestTube2, name: "Quest", color: "bg-green-500" },
  { icon: Hospital, name: "BioReference", color: "bg-purple-500" },
  { icon: Stethoscope, name: "Sonic", color: "bg-orange-500" },
  { icon: HeartPulse, name: "Eurofins", color: "bg-red-500" },
  { icon: ActivitySquare, name: "Labcorp", color: "bg-teal-500" },
  { icon: Syringe, name: "Genova", color: "bg-indigo-500" },
  { icon: Microscope, name: "Mayo", color: "bg-pink-500" },
];

export const PartnersSection = () => {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-foreground">
          Top labs and more in Labtraca
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 animate-scale-in hover:scale-110 transition-transform cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`w-24 h-24 rounded-full ${partner.color} flex items-center justify-center shadow-lg`}>
                <partner.icon className="w-12 h-12 text-white" />
              </div>
              <span className="text-sm font-bold text-foreground">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
