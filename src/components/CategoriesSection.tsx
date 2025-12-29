import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryBubble from "@/components/App/CategoryBubble";
import { FlaskConical, Stethoscope, Building2, FlaskRound, AlertCircle, MapPin } from "lucide-react";
import { getUserLocation, isLocationAvailable } from "@/utils/location";

const CategoriesSection = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const categories = [
    { title: "Tests", icon: FlaskConical, color: "bg-yellow-100 text-yellow-600", path: "/app/tests" },
    { title: "Consultation", icon: Stethoscope, color: "bg-purple-100 text-purple-600", path: "/app/consultation" },
    { title: "Hospitals", icon: Building2, color: "bg-blue-100 text-blue-600", path: "/app/hospitals" },
    { title: "Laboratories", icon: FlaskRound, color: "bg-green-100 text-green-600", path: "/app/laboratories" },
  ];

  useEffect(() => {
    const detectLocation = async () => {
      const detectedLocation = await getUserLocation();
      setLocation(detectedLocation);
      setLoading(false);
    };

    detectLocation();
  }, []);

  const isAvailable = isLocationAvailable(location);

  if (loading) {
    return (
      <div className="container mx-auto px-6 py-12 text-center">
        <p className="text-muted-foreground">Detecting your location...</p>
      </div>
    );
  }

  if (!isAvailable) {
    return (
      <div className="container mx-auto px-6 py-12">
        <div className="bg-secondary/30 border border-secondary/50 rounded-2xl p-12 text-center max-w-lg mx-auto">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
            <MapPin className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-3">Coming to {location || "your city"} soon!</h3>
          <p className="text-muted-foreground leading-relaxed">
            Labtraca is currently available in Abuja. We're working hard to expand our services to your region.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="mb-6 sm:mb-8 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-foreground mb-2">Our Services</h2>
        <p className="text-sm sm:text-base text-muted-foreground">Choose from our range of healthcare services</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
        {categories.map((cat, index) => (
          <CategoryBubble
            key={index}
            title={cat.title}
            icon={cat.icon}
            color={cat.color}
            onClick={() => navigate(cat.path)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
