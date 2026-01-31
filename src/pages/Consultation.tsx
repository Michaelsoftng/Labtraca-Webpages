import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
  ChevronRight,
  Calendar,
  Video,
  MessageSquare,
  Clock,
  Star,
  Phone,
  Mail,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GET_PUBLIC_USERS_BY_TYPE } from "@/lib/graphql/queries";
import { useQuery } from "@apollo/client/react";

const Consultation = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { data, loading, error } = useQuery(GET_PUBLIC_USERS_BY_TYPE, {
    variables: {
      userType: "doctor",
      limit: 20,
      offset: 0,
    },
  });
  console.log(data, loading, error);

  const categories = [
    "All",
    "General Practice",
    "Specialist",
    "Mental Health",
    "Pediatrics",
    "Dermatology",
    "Cardiology",
  ];

  const doctors = (data as any)?.getPublicUserByUserType?.users || [];

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
            <span className="font-medium text-foreground">Consultation</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black animate-fade-in line-clamp-2">
            Medical Consultation
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in [animation-delay:200ms]">
            Connect with qualified doctors from the comfort of your home
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
          {doctors.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12">
              <Clock className="w-16 h-16 text-muted-foreground mb-4" />
              <h3 className="text-xl font-bold text-muted-foreground mb-2">
                No Doctors Available Yet
              </h3>
              <p className="text-muted-foreground text-center">
                We're working to bring qualified doctors online. Please check
                back soon.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {doctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className="bg-card border rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <UserRound className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-bold text-lg leading-tight mb-1">
                            Dr. {doctor.firstName} {doctor.lastName}
                          </h3>
                          <p className="text-sm text-muted-foreground font-medium">
                            {doctor.doctor?.specialization || "General Practitioner"}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-full flex-shrink-0">
                          <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                          <span className="text-xs font-bold text-amber-700">
                            {doctor.facility?.rating || 4.8}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Video className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">
                        Video Consultation
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">
                        ~15 min wait
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-green-600" />
                      <span className="text-green-600 font-medium">
                        {doctor.doctor?.online
                          ? "Available Now"
                          : "Check availability"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">
                        {doctor.phoneNumber || "N/A"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground truncate">
                        {doctor.email || "N/A"}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="text-2xl font-black text-primary">
                        ₦12,000
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {doctor.facility?.ratingCount || 0} reviews
                      </p>
                    </div>
                    <Button className="font-bold">Book Now</Button>
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

export default Consultation;
