import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
  ChevronRight,
  MapPin,
  Star,
  Phone,
  Building2,
  FlaskRound,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useQuery } from "@apollo/client/react";
import { GET_PUBLIC_USERS_BY_TYPE } from "@/lib/graphql/queries";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
  PaginationEllipsis,
} from "@/components/ui/pagination";

interface GetPublicUserByTypeData {
  getPublicUserByUserType: {
    usersCount: number;
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

const PAGE_SIZE = 12;

const Partners = () => {
  const [page, setPage] = useState(1);

  const { data, loading } = useQuery<GetPublicUserByTypeData>(
    GET_PUBLIC_USERS_BY_TYPE,
    {
      variables: {
        userType: "facility_admin",
        limit: PAGE_SIZE,
        offset: (page - 1) * PAGE_SIZE,
      },
    },
  );

  const facilities =
    data?.getPublicUserByUserType?.users
      ?.filter(
        (u) =>
          (u.facilityAdmin?.facilityType === "LABORATORY" ||
            u.facilityAdmin?.facilityType === "HOSPITAL") &&
          u.accountStatus !== "DEACTIVATED",
      )
      .map((u) => ({
        id: u.id,
        name: u.facilityAdmin?.facilityName || "—",
        type: u.facilityAdmin?.facilityType || "",
        rating: u.facilityAdmin?.rating || 4.5,
        reviews: u.facilityAdmin?.ratingCount || 0,
        phoneNumber: u.phoneNumber,
        email: u.email,
        address: `${u.streetAddress || ""} ${u.city || ""} ${u.state || ""}`.trim(),
      })) || [];

  const totalCount = data?.getPublicUserByUserType?.usersCount ?? 0;
  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));

  const getPageNumbers = () => {
    const pages: (number | "ellipsis")[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (page > 3) pages.push("ellipsis");
      for (let i = Math.max(2, page - 1); i <= Math.min(totalPages - 1, page + 1); i++) pages.push(i);
      if (page < totalPages - 2) pages.push("ellipsis");
      pages.push(totalPages);
    }
    return pages;
  };

  const PaginationBar = () => (
    <Pagination className="mt-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            aria-disabled={page === 1}
            className={page === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
          />
        </PaginationItem>
        {getPageNumbers().map((p, i) =>
          p === "ellipsis" ? (
            <PaginationItem key={`ellipsis-${i}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={p}>
              <PaginationLink
                isActive={p === page}
                onClick={() => setPage(p)}
                className="cursor-pointer"
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          )
        )}
        <PaginationItem>
          <PaginationNext
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            aria-disabled={page === totalPages}
            className={page === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );

  return (
    <div className="min-h-screen bg-canvas">
      <Navigation />

      {/* Hero */}
      <section className="pt-24 pb-12 px-4 md:pt-32 md:pb-20 md:px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="font-medium text-foreground">Partners</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black animate-fade-in">
            Our Partner Network
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in [animation-delay:200ms]">
            Accredited laboratories and trusted hospitals across the network
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 md:py-20 md:px-6">
        <div className="container mx-auto max-w-7xl">
          {loading ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-card border rounded-3xl p-6 flex flex-col gap-4 animate-pulse"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-muted flex-shrink-0" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-muted rounded w-3/4" />
                      <div className="h-3 bg-muted rounded w-1/2" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-muted rounded w-full" />
                    <div className="h-3 bg-muted rounded w-2/3" />
                  </div>
                  <div className="flex gap-3 pt-4 border-t">
                    <div className="h-9 bg-muted rounded-full flex-1" />
                    <div className="h-9 bg-muted rounded-full flex-1" />
                  </div>
                </div>
              ))}
            </div>
          ) : facilities.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12">
              <Building2 className="w-16 h-16 text-muted-foreground mb-4" />
              <h3 className="text-xl font-bold text-muted-foreground mb-2">
                No Partners Registered Yet
              </h3>
              <p className="text-muted-foreground text-center">
                We're working to bring healthcare facilities online. Please check back soon.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {facilities.map((facility) => {
                  const isLab = facility.type === "LABORATORY";
                  const detailPath = isLab
                    ? `/app/laboratories/${facility.id}`
                    : `/app/hospitals/${facility.id}`;
                  const Icon = isLab ? FlaskRound : Building2;

                  return (
                    <div
                      key={facility.id}
                      className="bg-card border rounded-3xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
                    >
                      <Link to={detailPath} className="flex-1 flex flex-col cursor-pointer">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-8 h-8 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex items-center gap-2 flex-1 min-w-0">
                                <h3 className="font-bold text-lg leading-tight mb-1 truncate">
                                  {facility.name.toUpperCase()}
                                </h3>
                                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                              </div>
                              <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-full flex-shrink-0">
                                <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                                <span className="text-xs font-bold text-amber-700">
                                  {facility.rating}
                                </span>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground font-medium">
                              {facility.type}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-3 mb-6 flex-1">
                          {facility.address && (
                            <div className="flex items-start gap-2 text-sm text-muted-foreground">
                              <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <span className="line-clamp-2">{facility.address}</span>
                            </div>
                          )}
                          <div className="space-y-1">
                            {facility.phoneNumber && (
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Phone className="w-4 h-4 text-primary" />
                                <span>{facility.phoneNumber}</span>
                              </div>
                            )}
                            {facility.email && (
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Mail className="w-4 h-4 text-primary" />
                                <span className="truncate">{facility.email}</span>
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
                  );
                })}
              </div>
              {totalPages > 1 && <PaginationBar />}
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-primary rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-black mb-3">Ready to Join Our Network?</h2>
            <p className="text-white/80 max-w-lg mx-auto mb-8 leading-relaxed">
              Partner with Labtraca and expand your reach to thousands of customers seeking quality
              lab testing services.
            </p>
            <Link to="/partner-with-us">
              <button className="bg-white text-primary px-8 py-3.5 rounded-xl font-bold hover:bg-white/90 transition-colors">
                Apply to Partner
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
