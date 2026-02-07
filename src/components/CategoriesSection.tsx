import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Syringe, Wallet, MessageSquarePlus, ClipboardList } from "lucide-react";
import { getUserLocation } from "@/utils/location";
import { Button } from "@/components/ui/button";

const CategoriesSection = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const categories = [
    {
      title: "Medical Test",
      description: "Get your samples collected and tested by our facilities.",
      icon: Syringe,
      bgColor: "bg-white",
      borderColor: "border-gray-100",
      iconColor: "text-blue-500",
      path: "/app/tests"
    },
    {
      title: "Health Insurance",
      description: "Get your samples collected and tested by our facilities.",
      icon: Wallet,
      bgColor: "bg-[#EAF7E2]",
      borderColor: "border-transparent",
      iconColor: "text-green-600",
      path: "/app/insurance"
    },
    {
      title: "Medical Consultation",
      description: "Get your samples collected and tested by our facilities.",
      icon: MessageSquarePlus,
      bgColor: "bg-[#FFF9E5]",
      borderColor: "border-transparent",
      iconColor: "text-amber-500",
      path: "/app/consultation"
    },
    {
      title: "Pathologist Review",
      description: "Get your samples collected and tested by our facilities.",
      icon: ClipboardList,
      bgColor: "bg-[#E8F0FE]",
      borderColor: "border-transparent",
      iconColor: "text-blue-600",
      path: "/app/pathologist"
    },
  ];

  useEffect(() => {
    const detectLocation = async () => {
      await getUserLocation();
      setLoading(false);
    };

    detectLocation();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-6 py-12 text-center">
        <p className="text-muted-foreground">Detecting your location...</p>
      </div>
    );
  }

  return (
    <section className="bg-[#F7FCF8] py-16 md:py-28">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 md:mb-20 text-center">
          <div className="inline-block px-4 py-1 rounded-lg border border-[#22C55E] text-[#22C55E] text-xs font-bold uppercase tracking-wider mb-6">
            Services
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 max-w-4xl mx-auto leading-tight">
            Do more for your health with our App
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For our users we have tailored your experience so that you can easily find our closest agents to come and take your test samples as quickly as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((cat, index) => (
            <div
              key={index}
              onClick={() => navigate(cat.path)}
              className={`${cat.bgColor} ${cat.borderColor} border p-8 rounded-[2rem] flex flex-col h-full min-h-[240px] cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1 relative overflow-hidden group shadow-sm`}
            >
              <div className="flex-1 z-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{cat.title}</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-[85%]">
                  {cat.description}
                </p>
              </div>
              <div className={`absolute bottom-6 right-6 ${cat.iconColor} transform group-hover:scale-110 transition-transform duration-300 opacity-80 z-0`}>
                <cat.icon size={64} strokeWidth={1.2} />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            className="bg-[#22C55E] hover:bg-[#16a34a] text-white px-8 py-7 text-lg rounded-xl font-bold h-auto w-full sm:w-auto transition-all shadow-lg shadow-green-200"
            onClick={() => navigate("/app/download")}
          >
            Download App Now
          </Button>
          <Button
            variant="outline"
            className="border-[#22C55E] text-[#22C55E] hover:bg-green-50 px-8 py-7 text-lg rounded-xl font-bold h-auto w-full sm:w-auto transition-all"
            onClick={() => navigate("/app/partner")}
          >
            Partner with us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;

