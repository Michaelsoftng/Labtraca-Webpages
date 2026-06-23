import { useParams, useLocation, Link } from "react-router-dom";
import { useQuery } from "@apollo/client/react";
import { comparePrices } from "@/lib/graphql/queries";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Star, Scale } from "lucide-react";

type FacilityPriceComparison = {
  price?: number | null;
  facilityPrice?: number | null;
  facility?: {
    id: string;
    facilityName: string;
    facilityType: string;
    rating?: number | null;
    ratingCount?: number | null;
    streetAddress?: string | null;
    city?: string | null;
    state?: string | null;
    user: { id: string };
  } | null;
};

type ComparePricesResponse = {
  comparePrices?: {
    itemId?: string | null;
    itemName?: string | null;
    resultsCount?: number | null;
    results?: FacilityPriceComparison[] | null;
  } | null;
};

const formatPrice = (price?: number | null) => {
  if (price === null || price === undefined) return "—";
  return `₦${price.toLocaleString()}`;
};

const ComparePrices = () => {
  const { id } = useParams();
  const { pathname } = useLocation();

  const isPackage = pathname.startsWith("/app/packages");
  const itemType = isPackage ? "PACKAGE" : "TEST";
  const backPath = isPackage ? "/app/packages" : "/app/tests";
  const backLabel = isPackage ? "Back to Packages" : "Back to Tests";

  const { data, loading } = useQuery<ComparePricesResponse>(comparePrices, {
    variables: { itemId: id || "", itemType, limit: 50, offset: 0 },
    skip: !id,
  });

  const comparison = data?.comparePrices;
  const results = comparison?.results || [];

  const sorted = [...results].sort((a, b) => {
    const priceA = a.facilityPrice ?? a.price ?? Infinity;
    const priceB = b.facilityPrice ?? b.price ?? Infinity;
    return priceA - priceB;
  });

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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="bg-primary/5 pt-24 pb-12 px-4 md:pt-32 md:pb-16 border-b">
        <div className="container mx-auto max-w-5xl">
          <Link
            to={backPath}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {backLabel}
          </Link>

          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary shrink-0">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-black">
                {comparison?.itemName || "Compare Prices"}
              </h1>
              <p className="text-sm text-muted-foreground">
                {sorted.length} facilities offering this {isPackage ? "package" : "test"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 py-12 md:py-16">
        {sorted.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            No facilities currently offer this {isPackage ? "package" : "test"}.
          </div>
        ) : (
          <div className="space-y-4">
            {sorted.map((result, i) => {
              const facility = result.facility;
              if (!facility) return null;

              const isLab = facility.facilityType === "LABORATORY";
              const detailPath = isLab
                ? `/app/laboratories/${facility.user.id}`
                : `/app/hospitals/${facility.user.id}`;
              const price = result.facilityPrice ?? result.price;

              return (
                <div
                  key={facility.id}
                  className="bg-card border rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    {i === 0 && (
                      <span className="text-[10px] font-bold uppercase tracking-wide text-white bg-primary px-2 py-1 rounded-full shrink-0 mt-1">
                        Best Price
                      </span>
                    )}
                    <div>
                      <h3 className="font-bold text-lg">
                        {facility.facilityName.toUpperCase()}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mt-1">
                        <span className="flex items-center gap-1 text-amber-600 font-medium">
                          <Star className="w-3 h-3 fill-current" />
                          {facility.rating || 4.5}
                          <span className="opacity-70">
                            ({facility.ratingCount || 0})
                          </span>
                        </span>
                        {facility.streetAddress && (
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-primary" />
                            {facility.streetAddress}, {facility.city}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:flex-col md:items-end gap-2">
                    <span className="text-2xl font-bold text-primary">
                      {formatPrice(price)}
                    </span>
                    <Button asChild size="sm" variant="outline">
                      <Link to={detailPath}>View Facility</Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ComparePrices;
