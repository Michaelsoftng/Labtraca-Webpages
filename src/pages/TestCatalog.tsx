import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Search } from "lucide-react";
import { useQuery } from "@apollo/client/react";
import { GetTests } from "@/lib/graphql/queries";

type Test = {
  id: string;
  name: string;
  code?: string | null;
  description?: string | null;
  specimen?: string | null;
  group?: string | null;
  price?: number | string | null;
};

const formatPrice = (price: Test["price"]) => {
  if (price === null || price === undefined || price === "") {
    return "Price unavailable";
  }

  const numericPrice = typeof price === "number" ? price : Number(price);

  if (Number.isFinite(numericPrice)) {
    return `₦${numericPrice.toLocaleString()}`;
  }

  return price;
};

const TestCatalog = () => {
  const [search, setSearch] = useState("");

  const { data } = useQuery<{ getPublicAllTest?: { tests: Test[] } }>(
    GetTests,
    {
      variables: { limit: 20, offset: 0 },
    },
  );

  const apiTests = data?.getPublicAllTest?.tests || [];
  const tests = apiTests.filter((test) =>
    test.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-[#F9F9FF]">
      <Navigation />

      {/* ─── MOBILE ─── */}
      <main className="sm:hidden pt-16 px-4 pb-20">
        <section className="pt-8 pb-4">
          <h1 className="text-2xl font-bold text-black mb-1">
            Diagnostic Tests
          </h1>
          <p className="text-sm text-gray-500">
            Browse individual tests or curated packages.
          </p>
        </section>

        {/* Search */}
        <div className="sticky top-16 z-40 bg-[#F9F9FF]/90 backdrop-blur-md pb-4 pt-2 mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search tests..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-primary outline-none text-sm"
            />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {tests.map((test) => (
            <article
              key={test.id}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
            >
              <div className="p-4 flex gap-4">
                <div className="w-20 h-20 rounded-lg bg-[#d1e7e7] flex items-center justify-center flex-shrink-0">
                  <Search className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1 gap-2">
                    <h3 className="font-bold text-base leading-tight text-black">
                      {test.name}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 line-clamp-2 min-h-10">
                    {test.description || "No description available."}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {test.group && (
                      <span className="text-[11px] font-bold uppercase tracking-wide text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {test.group}
                      </span>
                    )}
                    {test.specimen && (
                      <span className="text-[11px] font-bold uppercase tracking-wide text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                        {test.specimen}
                      </span>
                    )}
                    {test.code && (
                      <span className="text-[11px] font-bold uppercase tracking-wide text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {test.code}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="bg-[#f1f3ff] px-4 py-3 flex justify-between items-center">
                <span className="font-bold text-base text-primary">
                  {formatPrice(test.price)}
                </span>
              </div>
            </article>
          ))}
          {tests.length === 0 && (
            <div className="bg-white rounded-xl border border-gray-200 px-4 py-8 text-center text-sm text-gray-500">
              No tests found.
            </div>
          )}
        </div>
      </main>

      {/* ─── DESKTOP ─── */}
      <main className="hidden sm:block pt-32 pb-20 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-10">
            <h1 className="text-4xl font-black text-gray-900 mb-2">
              Diagnostic Tests
            </h1>
            <p className="text-gray-500">
              Browse individual tests or curated packages.
            </p>
          </div>

          <div className="space-y-4">
            {tests.map((test, i) => (
              <div
                key={test.id || i}
                className="bg-white border border-gray-200 rounded-2xl p-6 flex justify-between items-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-full bg-[#d1e7e7] flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-lg">
                      {test.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">
                      {test.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {test.group || test.code || "Labtraca Network"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">
                      {formatPrice(test.price)}
                    </p>
                    <p className="text-[10px] uppercase font-bold text-gray-400">
                      Total Cost
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {tests.length === 0 && (
              <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center text-gray-500">
                No tests found.
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TestCatalog;
