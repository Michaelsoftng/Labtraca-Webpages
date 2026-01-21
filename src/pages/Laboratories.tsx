import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
  ChevronRight,
  MapPin,
  Star,
  Clock,
  Phone,
  FlaskRound,
  CheckCircle2,
  Mail,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useQuery } from "@apollo/client/react";
import { GET_PUBLIC_USERS_BY_TYPE } from "@/lib/graphql/queries";

interface GetPublicUserByTypeData {
  getPublicUserByUserType: {
    users: Array<{
      id: string;
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
      createdAt: string;
    }>;
  };
}

const Laboratories = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { data, loading, error } = useQuery<GetPublicUserByTypeData>(
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
    "Diagnostic Lab",
    "Pathology",
    "Radiology",
    "Molecular Testing",
    "Blood Bank",
  ];

  // Filter users to only show those with LABORATORY facility type
  const laboratories =
    data?.getPublicUserByUserType?.users
      ?.filter((user) => user.facilityAdmin?.facilityType === "LABORATORY")
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
            <span className="font-medium text-foreground">Laboratories</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black animate-fade-in line-clamp-2">
            Laboratories Near You
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in [animation-delay:200ms]">
            Find accredited diagnostic laboratories for your medical tests
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
                className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat
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
          {laboratories.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12">
              <FlaskRound className="w-16 h-16 text-muted-foreground mb-4" />
              <h3 className="text-xl font-bold text-muted-foreground mb-2">
                No Laboratories Registered Yet
              </h3>
              <p className="text-muted-foreground text-center">
                We're working to bring diagnostic laboratories online. Please
                check back soon.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {laboratories.map((lab) => (
                <div
                  key={lab.id}
                  className="bg-card border rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <FlaskRound className="w-5 h-5 text-primary" />
                        <h3 className="font-bold text-lg">
                          {lab.name.toUpperCase()}
                        </h3>
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {lab.type}
                      </p>

                      {/* Address */}
                      {lab.address && (
                        <div className="flex items-start gap-2 text-sm text-muted-foreground mb-3">
                          <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{lab.address}</span>
                        </div>
                      )}

                      {/* Contact Details */}
                      <div className="space-y-2 mb-4">
                        {lab.phoneNumber && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Phone className="w-4 h-4 text-primary" />
                            <span>{lab.phoneNumber}</span>
                          </div>
                        )}
                        {lab.email && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Mail className="w-4 h-4 text-primary" />
                            <span className="truncate">{lab.email}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex items-center gap-1 bg-amber-50 px-3 py-2 rounded-full">
                        <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                        <span className="text-sm font-bold text-amber-700">
                          {lab.rating}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {lab.reviews} reviews
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t">
                    <Button variant="outline" className="flex-1 font-bold">
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </Button>
                    <Button className="flex-1 font-bold">
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
    </div>
  );
};

export default Laboratories;
