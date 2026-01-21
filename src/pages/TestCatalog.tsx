import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import TestCard from "@/components/App/TestCard";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client/react";
import { GetTests } from "@/lib/graphql/queries";

const TestCatalog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { data, loading, error } = useQuery<{
    getPublicAllTest?: { tests: any[] };
  }>(GetTests, {
    variables: {
      limit: 20,
      offset: 0,
    },
  });

  const categories = [
    "All",
    "Blood",
    "Sexual Health",
    "Genetics",
    "Diabetes",
    "Heart Health",
    "Thyroid",
    "Vitamins",
    "Allergy",
  ];

  const tests = data?.getPublicAllTest?.tests || [];

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
            <span className="font-medium text-foreground">Medical Tests</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black animate-fade-in line-clamp-2">
            Medical Tests
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in [animation-delay:200ms]">
            Choose from our wide range of diagnostic tests
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
          {tests.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12">
              <ChevronRight className="w-16 h-16 text-muted-foreground mb-4" />
              <h3 className="text-xl font-bold text-muted-foreground mb-2">
                No Tests Available Yet
              </h3>
              <p className="text-muted-foreground text-center">
                We're working to add more diagnostic tests. Please check back
                soon.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {tests.map((test, index) => (
                <TestCard key={index} {...test} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TestCatalog;
