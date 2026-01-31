import { useParams, Link } from "react-router-dom";
import {
  getUserByIdPublic,
  GET_TESTS_BY_FACILITY,
} from "@/lib/graphql/queries";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  FlaskRound,
  MapPin,
  Phone,
  Mail,
  Star,
  ChevronRight,
  Clock,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { useQuery } from "@apollo/client/react";

const LaboratoryDetails = () => {
  const { id } = useParams();

  const { data: userData, loading: userLoading } = useQuery(getUserByIdPublic, {
    variables: {
      id: id || "",
    },
    skip: !id,
  });

  const { data: testData, loading: testLoading } = useQuery(
    GET_TESTS_BY_FACILITY,
    {
      variables: { facilityId: id || "", limit: 50, offset: 0 },
      skip: !id,
    },
  );

  const lab = (userData as any)?.getUserByIdPublic;

  const tests =
    (testData as any)?.getAllTestsByFacilityPublic?.facilityTests || [];

  if (userLoading || testLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="h-12 w-12 bg-muted rounded-full"></div>
          <div className="h-4 w-32 bg-muted rounded"></div>
        </div>
      </div>
    );
  }

  if (!lab) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex flex-col items-center justify-center h-[60vh] gap-4">
          <h2 className="text-2xl font-bold">Laboratory Not Found</h2>
          <Button asChild>
            <Link to="/app/laboratories">Go Back</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-primary/5 pt-24 pb-12 px-4 md:pt-32 md:pb-16 border-b">
        <div className="container mx-auto max-w-7xl">
          <Link
            to="/app/laboratories"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Laboratories
          </Link>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-white shadow-sm flex items-center justify-center shrink-0 text-primary">
              <FlaskRound className="w-12 h-12 md:w-16 md:h-16" />
            </div>

            <div className="flex-1 space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="text-3xl md:text-4xl font-black">
                    {lab.facilityAdmin?.facilityName.toUpperCase()}
                  </h1>
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="bg-white px-3 py-1 rounded-full font-medium border shadow-sm">
                    {lab.facilityAdmin?.facilityType}
                  </span>
                  <div className="flex items-center gap-1 bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-bold">
                    <Star className="w-3 h-3 fill-current" />
                    {lab.facilityAdmin?.rating || 4.5}
                    <span className="font-normal opacity-70">
                      ({lab.facilityAdmin?.ratingCount || 0} reviews)
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div className="space-y-2">
                  {lab.streetAddress && (
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-1 text-primary shrink-0" />
                      <span>
                        {lab.streetAddress}, {lab.city}, {lab.state}
                      </span>
                    </div>
                  )}
                  {lab.facilityAdmin?.openingHours && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary shrink-0" />
                      <span>{lab.facilityAdmin.openingHours}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  {lab.phoneNumber && (
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary shrink-0" />
                      <span>{lab.phoneNumber}</span>
                    </div>
                  )}
                  {lab.email && (
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary shrink-0" />
                      <span>{lab.email}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content: Tests Table */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Diagnostic Tests</h2>
              <span className="text-muted-foreground text-sm">
                {tests.length} tests listed
              </span>
            </div>

            <div className="bg-card border rounded-2xl overflow-hidden shadow-sm">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead>Test Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tests.length === 0 ? (
                    <TableRow>
                      <TableCell
                        colSpan={3}
                        className="text-center py-8 text-muted-foreground"
                      >
                        No diagnostic tests available at the moment.
                      </TableCell>
                    </TableRow>
                  ) : (
                    tests.map((facilityTest: any) => (
                      <TableRow
                        key={facilityTest.id}
                        className="hover:bg-muted/30"
                      >
                        <TableCell className="font-medium">
                          {facilityTest.test?.name}
                          <div className="text-xs text-muted-foreground font-normal mt-0.5">
                            {facilityTest.test?.code}
                          </div>
                        </TableCell>
                        <TableCell className="max-w-xs truncate text-muted-foreground">
                          {facilityTest.test?.group || "N/A"}
                        </TableCell>
                        <TableCell className="text-right font-bold text-primary">
                          {typeof facilityTest.facilityPrice === "number"
                            ? `₦${facilityTest.facilityPrice.toLocaleString()}`
                            : facilityTest.facilityPrice}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Sidebar: Call to Action / Info */}
          <div className="space-y-6">
            <div className="bg-card border rounded-2xl p-6 shadow-sm space-y-4 sticky top-24">
              <h3 className="font-bold text-lg">Contact Laboratory</h3>
              <p className="text-sm text-muted-foreground">
                Get more information about required preparations or book a
                visit.
              </p>
              <div className="grid gap-3">
                <Button className="w-full font-bold" size="lg">
                  <Phone className="mr-2 w-4 h-4" />
                  Call Now
                </Button>
                <Button
                  variant="outline"
                  className="w-full font-bold"
                  size="lg"
                >
                  <MapPin className="mr-2 w-4 h-4" />
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LaboratoryDetails;
