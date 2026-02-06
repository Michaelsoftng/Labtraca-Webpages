import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryBubble from "@/components/App/CategoryBubble";
import { TestTube2, Stethoscope, Hospital, Microscope, AlertCircle, MapPin } from "lucide-react";
import { getUserLocation, isLocationAvailable } from "@/utils/location";

const CategoriesSection = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const categories = [
    { title: "Tests", icon: TestTube2, color: "bg-primary/10 text-primary", path: "/app/tests" },
    { title: "Consultation", icon: Stethoscope, color: "bg-primary/10 text-primary", path: "/app/consultation" },
    { title: "Hospitals", icon: Hospital, color: "bg-primary/10 text-primary", path: "/app/hospitals" },
    { title: "Laboratories", icon: Microscope, color: "bg-primary/10 text-primary", path: "/app/laboratories" },
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

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-20">
      <div className="mb-8 md:mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">Our Services</h2>
        <p className="text-lg text-muted-foreground">Choose from our range of healthcare services</p>
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
