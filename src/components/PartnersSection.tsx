import { Card } from "@/components/ui/card";
import {
  Building2,
  TestTube2,
  Hospital,
  Stethoscope,
  HeartPulse,
  ActivitySquare,
  Syringe,
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
        limit: 8,
        offset: 0,
      },
    },
  );

  // Map facilities to partner display format
  const partners =
    data?.getPublicUserByUserType?.users?.slice(0, 8).map((user) => ({
      name: user.facilityAdmin?.facilityName || "Partner",
      color:
        user.facilityAdmin?.facilityType === "HOSPITAL"
          ? "bg-blue-500"
          : "bg-green-500",
      icon:
        user.facilityAdmin?.facilityType === "HOSPITAL" ? Hospital : TestTube2,
    })) || [];
  return (
    <section
      id="partners"
      className="py-10 px-4 md:py-20 md:px-6 bg-background"
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-foreground">
          Top labs and more in Labtraca
        </h2>

        {loading ? (
          <div className="flex flex-row flex-wrap justify-center gap-6">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <div className="w-24 h-24 rounded-full bg-muted animate-pulse"></div>
                <div className="h-4 w-20 bg-muted rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-row flex-wrap justify-center gap-6">
            {partners.length === 0 ? (
              <div className="col-span-full text-center py-8 text-muted-foreground">
                No partners available yet
              </div>
            ) : (
              partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 animate-scale-in hover:scale-110 transition-transform cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div
                    className={`w-24 h-24 rounded-full ${partner.color} flex items-center justify-center shadow-lg`}
                  >
                    <partner.icon className="w-12 h-12 text-white" />
                  </div>
                  <span className="text-sm font-bold text-foreground">
                    {partner.name.toUpperCase()}
                  </span>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
};
