import { useParams, Link } from "react-router-dom";
import { getUserByIdPublic } from "@/lib/graphql/queries";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  UserRound,
  MapPin,
  Phone,
  Mail,
  Star,
  ChevronRight,
  Clock,
  ArrowLeft,
  Calendar,
  Video,
  GraduationCap,
  Briefcase,
  Languages,
  MessageSquare,
} from "lucide-react";
import { useQuery } from "@apollo/client/react";

interface DoctorData {
  specialization?: string;
  yearsOfExperience?: string;
  online?: boolean;
}

interface FacilityAdminData {
  rating?: number;
  ratingCount?: number;
}

interface UserData {
  firstName: string;
  lastName: string;
  doctor?: DoctorData;
  facilityAdmin?: FacilityAdminData;
}

interface GetUserByIdPublicResponse {
  getUserByIdPublic: UserData;
}

const DoctorDetails = () => {
  const { id } = useParams();

  const { data: userData, loading } = useQuery<GetUserByIdPublicResponse>(
    getUserByIdPublic,
    {
      variables: {
        id: id || "",
      },
      skip: !id,
    });

  const doctor = userData?.getUserByIdPublic;

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="h-12 w-12 bg-muted rounded-full"></div>
          <div className="h-4 w-32 bg-muted rounded"></div>
        </div>
      </div>
    );
  }

  if (!doctor) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex flex-col items-center justify-center h-[60vh] gap-4">
          <h2 className="text-2xl font-bold">Doctor Not Found</h2>
          <Button asChild>
            <Link to="/app/consultation">Go Back</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  // Fallback data since schema is limited
  const specialization =
    doctor.doctor?.specialization || "General Practitioner";
  const experience = doctor.doctor?.yearsOfExperience || "5+";
  const rating = doctor.facilityAdmin?.rating || 4.8;
  const ratingCount = doctor.facilityAdmin?.ratingCount || 120;
  const isOnline = doctor.doctor?.online;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-primary/5 pt-24 pb-12 px-4 md:pt-32 md:pb-16 border-b">
        <div className="container mx-auto max-w-7xl">
          <Link
            to="/app/consultation"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Doctors
          </Link>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-24 h-24 md:w-40 md:h-40 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border-4 border-white shadow-sm overflow-hidden text-primary">
              {/* Ideally fetch avatar, fallback to icon */}
              <UserRound className="w-12 h-12 md:w-20 md:h-20" />
            </div>

            <div className="flex-1 space-y-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-black mb-2">
                  Dr. {doctor.firstName} {doctor.lastName}
                </h1>
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <Badge variant="secondary" className="px-3 py-1 text-sm">
                    {specialization}
                  </Badge>
                  <div className="flex items-center gap-1 bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-bold">
                    <Star className="w-3 h-3 fill-current" />
                    {rating}
                    <span className="font-normal opacity-70">
                      ({ratingCount} reviews)
                    </span>
                  </div>
                  {isOnline && (
                    <Badge
                      variant="outline"
                      className="text-green-600 border-green-200 bg-green-50"
                    >
                      Available Now
                    </Badge>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-primary" />
                  {experience} Years Experience
                </p>
                <p className="flex items-center gap-2">
                  <Languages className="w-4 h-4 text-primary" />
                  English, Hausa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content: Bio and Details */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold border-b pb-2">
                About Dr. {doctor.lastName}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Dr. {doctor.firstName} {doctor.lastName} is a dedicated{" "}
                {specialization.toLowerCase()} with over {experience} years of
                experience in providing top-quality medical care. Committed to
                patient well-being, Dr. {doctor.lastName} takes a holistic
                approach to diagnosis and treatment, ensuring that each patient
                receives personalized attention.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Specializing in {specialization}, Dr. {doctor.lastName} is
                well-versed in the latest medical advancements and treatment
                protocols.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold border-b pb-2">
                Experience & Education
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Senior {specialization}</h3>
                    <p className="text-sm text-muted-foreground">
                      General Hospital, Abuja • 2018 - Present
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Doctor of Medicine (MD)</h3>
                    <p className="text-sm text-muted-foreground">
                      University of Lagos • 2015
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar: Booking */}
          <div className="space-y-6">
            <div className="bg-card border rounded-2xl p-6 shadow-sm space-y-6 sticky top-24">
              <div className="space-y-2">
                <h3 className="font-bold text-lg">Consultation Fee</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-primary">
                    ₦12,000
                  </span>
                  <span className="text-muted-foreground text-sm">
                    / session
                  </span>
                </div>
              </div>

              <div className="grid gap-3">
                <Button className="w-full font-bold" size="lg">
                  <Video className="mr-2 w-4 h-4" />
                  Book Video Call
                </Button>
                <Button
                  variant="outline"
                  className="w-full font-bold"
                  size="lg"
                >
                  <MessageSquare className="mr-2 w-4 h-4" />
                  Chat Consultation
                </Button>
              </div>

              <div className="pt-4 border-t space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium">Quick Response</p>
                    <p className="text-muted-foreground text-xs">
                      Usually replies in ~15 mins
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DoctorDetails;
