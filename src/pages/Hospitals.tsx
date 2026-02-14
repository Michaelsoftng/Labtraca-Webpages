import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
  ChevronRight,
  MapPin,
  Star,
  Phone,
  Building2,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useQuery } from "@apollo/client/react";
import { GET_PUBLIC_USERS_BY_TYPE } from "@/lib/graphql/queries";

interface GetPublicUserByUserTypeData {
  getPublicUserByUserType?: {
    users?: Array<{
      id: string;
      accountStatus?: string;
      facilityAdmin?: {
        facilityName: string;
        facilityType: string;
        rating?: number;
        ratingCount?: number;
      };
      phoneNumber?: string;
      email?: string;
      streetAddress?: string;
      city?: string;
      state?: string;
      createdAt?: string;
    }>;
  };
}

const Hospitals = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { data, loading, error } = useQuery<GetPublicUserByUserTypeData>(
    GET_PUBLIC_USERS_BY_TYPE,
    {
      variables: {
        userType: "facility_admin",
        limit: 20,
        offset: 0,
      },
    },
  );
  console.log(data, loading, error);

  const categories = [
    "All",
    "General Hospital",
    "Specialist",
    "Emergency Care",
    "Maternity",
    "Pediatric",
    "Diagnostic Center",
  ];

  // Filter users to only show those with HOSPITAL facility type and ACTIVE status
  const hospitals =
    data?.getPublicUserByUserType?.users
      ?.filter(
        (user) =>
          user.facilityAdmin?.facilityType === "HOSPITAL" &&
          user.accountStatus !== "DEACTIVATED",
      )
      .map((user) => ({
        id: user.id,
        name: user.facilityAdmin?.facilityName,
        type: user.facilityAdmin?.facilityType,
        phoneNumber: user.phoneNumber,
        email: user.email,
        rating: user.facilityAdmin?.rating || 4.5,
        reviews: user.facilityAdmin?.ratingCount || 0,
        address:
          `${user.streetAddress || ""} ${user.city || ""} ${user.state || ""}`.trim(),
        createdAt: user.createdAt,
      })) || [];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:pt-32 md:pb-20 md:px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="font-medium text-foreground">Hospitals</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black animate-fade-in line-clamp-2">
            Hospitals Near You
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in [animation-delay:200ms]">
            Find trusted hospitals and healthcare facilities in Abuja
          </p>
        </div>
      </section>

      {/* Category Nav */}
      <div className="bg-background border-b">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-2 overflow-x-auto py-4 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12 px-4 md:py-20 md:px-6">
        <div className="container mx-auto max-w-7xl">
          {hospitals.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12">
              <Building2 className="w-16 h-16 text-muted-foreground mb-4" />
              <h3 className="text-xl font-bold text-muted-foreground mb-2">
                No Hospitals Registered Yet
              </h3>
              <p className="text-muted-foreground text-center">
                We're working to bring healthcare facilities online. Please
                check back soon.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {hospitals.map((hospital) => (
                <div
                  key={hospital.id}
                  className="bg-card border rounded-3xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
                >
                  <Link to={`/app/hospitals/${hospital.id}`} className="flex-1 flex flex-col cursor-pointer">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-bold text-lg leading-tight mb-1 group-hover:text-primary transition-colors">
                            {hospital.name.toUpperCase()}
                          </h3>
                          <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-full flex-shrink-0">
                            <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                            <span className="text-xs font-bold text-amber-700">
                              {hospital.rating}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground font-medium">
                          {hospital.type}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6 flex-1">
                      {hospital.address && (
                        <div className="flex items-start gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{hospital.address}</span>
                        </div>
                      )}
                      <div className="space-y-1">
                        {hospital.phoneNumber && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Phone className="w-4 h-4 text-primary" />
                            <span>{hospital.phoneNumber}</span>
                          </div>
                        )}
                        {hospital.email && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Mail className="w-4 h-4 text-primary" />
                            <span className="truncate">{hospital.email}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>

                  <div className="flex items-center gap-3 pt-4 border-t mt-auto">
                    <Button variant="outline" className="flex-1 font-bold rounded-full">
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </Button>
                    <Button className="flex-1 font-bold rounded-full">
                      <MapPin className="w-4 h-4 mr-2" />
                      Directions
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div >
  );
};

export default Hospitals;
