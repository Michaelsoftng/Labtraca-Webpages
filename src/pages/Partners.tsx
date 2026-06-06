import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
  MapPin,
  ArrowRight,
  Star,
  Phone,
  Mail,
  FlaskRound,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client/react";
import { GET_PUBLIC_USERS_BY_TYPE } from "@/lib/graphql/queries";
import { Button } from "@/components/ui/button";

interface GetPublicUserByTypeData {
  getPublicUserByUserType: {
    users: Array<{
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
      createdAt: string;
    }>;
  };
}

const FALLBACK_PARTNERS = [
  {
    id: "1",
    name: "Central Clinical Labs",
    location: "Chicago, IL",
    category: "Hematology",
  },
  {
    id: "2",
    name: "St. Margaret Health",
    location: "San Francisco, CA",
    category: "Oncology",
  },
  {
    id: "3",
    name: "OmniPath Laboratories",
    location: "Houston, TX",
    category: "Microbiology",
  },
  {
    id: "4",
    name: "Synlab Nigeria",
    location: "Lagos, Nigeria",
    category: "General Diagnostics",
  },
  {
    id: "5",
    name: "Me Cure Diagnostics",
    location: "Abuja, Nigeria",
    category: "Metabolic",
  },
  {
    id: "6",
    name: "Advanced Genomics Lab",
    location: "Berlin, Germany",
    category: "Genomics",
  },
];

const Partners = () => {
  const { data, loading } = useQuery<GetPublicUserByTypeData>(
    GET_PUBLIC_USERS_BY_TYPE,
    {
      variables: { userType: "facility_admin", limit: 20, offset: 0 },
    },
  );

  const laboratories =
    data?.getPublicUserByUserType?.users
      ?.filter(
        (u) =>
          u.facilityAdmin?.facilityType === "LABORATORY" &&
          u.accountStatus !== "DEACTIVATED",
      )
      .map((u) => ({
        id: u.id,
        name: u.facilityAdmin?.facilityName || "—",
        location: `${u.city || ""} ${u.state || ""}`.trim() || "Nigeria",
        category: u.facilityAdmin?.facilityType || "Laboratory",
        rating: u.facilityAdmin?.rating || 4.5,
        phone: u.phoneNumber,
        email: u.email,
        address:
          `${u.streetAddress || ""} ${u.city || ""} ${u.state || ""}`.trim(),
      })) || [];

  const partners = laboratories.length > 0 ? laboratories : FALLBACK_PARTNERS;

  return (
    <div className="min-h-screen bg-[#F9F9FF]">
      <Navigation />

      {/* ─── MOBILE ─── */}
      <main className="sm:hidden pt-16 px-4 pb-20">
        <section className="pt-8 pb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            Our Global Partner Network
          </h1>
          <p className="text-sm text-gray-500">
            Connecting you to the nost trusted clinical laboratories and
            hospital centers for seamless diagnostic logistics.
          </p>
        </section>

        {/* Map banner */}
        <div className="relative h-48 rounded-2xl overflow-hidden mb-6 bg-gray-200">
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <span className="bg-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
              Explore Nearby Labs
            </span>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-10 text-gray-400">
            Loading partners…
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {partners.map((p) => (
              <div
                key={p.id}
                className="bg-white p-4 border border-gray-200 rounded-xl flex justify-between items-center shadow-sm"
              >
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">{p.name}</h3>
                  <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 flex-shrink-0" /> {p.location}
                  </p>
                </div>
                <Link to={`/app/laboratories/${p.id}`}>
                  <button className="bg-primary text-white p-2 rounded-full">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}

        <Link to="/partner-with-us" className="mt-8 block">
          <button className="w-full bg-primary text-white py-4 rounded-xl font-bold">
            Become a Partner
          </button>
        </Link>
      </main>

      {/* ─── DESKTOP ─── */}
      <main className="hidden sm:block pt-32 pb-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h1 className="text-5xl font-black text-gray-900 mb-3">
              Global Partner Network
            </h1>
            <p className="text-gray-500 text-lg max-w-xl leading-relaxed">
              Meet the laboratories and healthcare providers powering the
              Labtraca ecosystem.
            </p>
          </div>

          {loading ? (
            <div className="text-center py-20 text-gray-400">
              Loading partners…
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-6 mb-16">
              {partners.map((partner) => (
                <Link
                  key={partner.id}
                  to={`/app/laboratories/${partner.id}`}
                  className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary hover:-translate-y-1 transition-all shadow-sm hover:shadow-md block"
                >
                  <div className="w-14 h-14 bg-[#d1e7e7] rounded-xl flex items-center justify-center mb-5">
                    <FlaskRound className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">
                      {partner.name}
                    </h3>
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  </div>
                  <p className="text-gray-500 text-sm flex items-center gap-1 mb-3">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />{" "}
                    {partner.location}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="inline-block px-3 py-1 bg-[#f1f3ff] rounded-full text-xs font-semibold text-gray-600">
                      {partner.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-amber-600 font-bold">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                      {(partner as any).rating || 4.5}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="bg-primary rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-black mb-3">
              Ready to Join Our Network?
            </h2>
            <p className="text-white/80 max-w-lg mx-auto mb-8 leading-relaxed">
              Partner with Labtraca and expand your reach to thousands of
              customers seeking quality lab testing services.
            </p>
            <Link to="/partner-with-us">
              <button className="bg-white text-primary px-8 py-3.5 rounded-xl font-bold hover:bg-white/90 transition-colors">
                Apply to Partner
              </button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Partners;
