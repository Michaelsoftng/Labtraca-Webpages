import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryBubble from "@/components/App/CategoryBubble";
import { FlaskConical, Stethoscope, Pill, FileHeart, Baby, Activity, Dna, Syringe, AlertCircle } from "lucide-react";
import { getUserLocation, isLocationAvailable } from "@/utils/location";

const CategoriesSection = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const categories = [
    { title: "Medical Tests", icon: FlaskConical, color: "bg-yellow-100 text-yellow-600", path: "/app/tests" },
    { title: "Consultation", icon: Stethoscope, color: "bg-purple-100 text-purple-600", path: "/app/consultation" },
    { title: "Pharmacy", icon: Pill, color: "bg-green-100 text-green-600", path: "/app/pharmacy" },
    { title: "Insurance", icon: FileHeart, color: "bg-blue-100 text-blue-600", path: "/app/insurance" },
    { title: "Pediatrics", icon: Baby, color: "bg-pink-100 text-pink-600", path: "/app/pediatrics" },
    { title: "Checkups", icon: Activity, color: "bg-orange-100 text-orange-600", path: "/app/checkups" },
    { title: "Genetics", icon: Dna, color: "bg-cyan-100 text-cyan-600", path: "/app/genetics" },
    { title: "Vaccines", icon: Syringe, color: "bg-red-100 text-red-600", path: "/app/vaccines" },
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
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-8 flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-amber-900 mb-2">Service Not Available in Your Region</h3>
            <p className="text-amber-800">
              We're currently only available in Abuja. We're expanding to more regions soon. Please check back later!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="mb-6 sm:mb-8">
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
