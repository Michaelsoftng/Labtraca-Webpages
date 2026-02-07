import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Hospital,
  Microscope,
} from "lucide-react";
import { useQuery } from "@apollo/client/react";
import { GET_PUBLIC_USERS_BY_TYPE } from "@/lib/graphql/queries";

interface GetPublicUsersResponse {
  getPublicUserByUserType?: {
    users?: Array<{
      facilityAdmin?: {
        facilityName: string;
        facilityType: "HOSPITAL" | "LAB";
      };
    }>;
  };
}

export const PartnersSection = () => {
  const { data, loading, error } = useQuery<GetPublicUsersResponse>(
    GET_PUBLIC_USERS_BY_TYPE,
    {
      variables: {
        userType: "facility_admin",
        limit: 4,
        offset: 0,
      },
    },
  );

  // Map facilities to partner display format
  const partners =
    data?.getPublicUserByUserType?.users?.slice(0, 4).map((user) => ({
      name: user.facilityAdmin?.facilityName || "Partner",
      color:
        user.facilityAdmin?.facilityType === "HOSPITAL"
          ? "bg-blue-500"
          : "bg-green-500",
      icon:
        user.facilityAdmin?.facilityType === "HOSPITAL" ? Hospital : Microscope,
    })) || [];
  return (
    <section
      id="partners"
      className="py-10 px-4 md:py-20 md:px-6 bg-white"
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-foreground">
          Top labs and more in Labtraca
        </h2>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-muted animate-pulse"></div>
                <div className="h-3 w-16 bg-muted rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {partners.length === 0 ? (
              <div className="col-span-full text-center py-8 text-muted-foreground">
                No partners available yet
              </div>
            ) : (
              partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 md:gap-3 animate-scale-in hover:scale-110 transition-transform cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div
                    className={`w-20 h-20 md:w-24 md:h-24 rounded-full ${partner.color} flex items-center justify-center shadow-lg`}
                  >
                    <partner.icon className="w-8 h-8 md:w-12 md:h-12 text-white" />
                  </div>
                  <span className="text-xs md:text-sm font-bold text-foreground text-center line-clamp-2">
                    {partner.name.toUpperCase()}
                  </span>
                </div>
              ))
            )}
          </div>
        )}
        <div className="flex justify-center mt-12">
          <Button asChild size="lg" className="rounded-full px-8 text-white font-bold">
            <Link to="/app/laboratories">View More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
