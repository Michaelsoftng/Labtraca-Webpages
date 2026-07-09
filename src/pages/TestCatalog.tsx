import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Search, Scale } from "lucide-react";
import { useQuery } from "@apollo/client/react";
import { GetTests } from "@/lib/graphql/queries";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
  PaginationEllipsis,
} from "@/components/ui/pagination";

type Test = {
  id: string;
  name: string;
  code?: string | null;
  description?: string | null;
  specimen?: string | null;
  group?: string | null;
  price?: number | string | null;
};

const PAGE_SIZE = 12;

const formatPrice = (price: Test["price"]) => {
  if (price === null || price === undefined || price === "") return "—";
  const n = typeof price === "number" ? price : Number(price);
  if (Number.isFinite(n)) return `₦${n.toLocaleString()}`;
  return String(price);
};

const TestCatalog = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [search]);

  const { data, loading } = useQuery<{
    getPublicAllTest?: { testCount: number; tests: Test[] };
  }>(GetTests, {
    variables: { limit: 1000, offset: 0 },
  });

  const allTests = data?.getPublicAllTest?.tests || [];

  const filtered = allTests.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase()),
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const tests = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const getPageNumbers = () => {
    const pages: (number | "ellipsis")[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (page > 3) pages.push("ellipsis");
      for (
        let i = Math.max(2, page - 1);
        i <= Math.min(totalPages - 1, page + 1);
        i++
      )
        pages.push(i);
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
            className={
              page === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"
            }
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
          ),
        )}
        <PaginationItem>
          <PaginationNext
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            aria-disabled={page === totalPages}
            className={
              page === totalPages
                ? "pointer-events-none opacity-50"
                : "cursor-pointer"
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );

  return (
    <div className="min-h-screen bg-canvas">
      <Navigation />

      {/* ─── MOBILE ─── */}
      <main className="sm:hidden pt-16 px-4 pb-20">
        <section className="pt-8 pb-4">
          <h1 className="text-2xl font-bold text-black mb-1">
            Diagnostic Tests
          </h1>
          <p className="text-sm text-muted-foreground">
            Browse individual tests or{" "}
            <Link
              to="/app/packages"
              className="font-semibold text-primary underline"
            >
              curated packages
            </Link>
            .
          </p>
        </section>

        {/* Search */}
        <div className="sticky top-16 z-40 bg-canvas/90 backdrop-blur-md pb-4 pt-2 mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search tests..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-border rounded-xl focus:border-primary outline-none text-sm"
            />
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-border overflow-hidden animate-pulse"
              >
                <div className="p-4 flex gap-4">
                  <div className="w-20 h-20 rounded-lg bg-muted flex-shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-muted rounded w-3/4" />
                    <div className="h-3 bg-muted rounded w-full" />
                    <div className="h-3 bg-muted rounded w-2/3" />
                  </div>
                </div>
                <div className="bg-muted px-4 py-3 h-10" />
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-5">
              {tests.map((test) => (
                <article
                  key={test.id}
                  className="bg-white rounded-xl border border-border overflow-hidden shadow-sm"
                >
                  <div className="p-4 flex gap-4">
                    <div className="w-20 h-20 rounded-lg bg-teal-surface flex items-center justify-center flex-shrink-0">
                      <Search className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1 gap-2">
                        <h3 className="font-bold text-base leading-tight text-black">
                          {test.name}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 min-h-10">
                        {test.description || "No description available."}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {test.group && (
                          <span className="text-[11px] font-bold uppercase tracking-wide text-primary bg-primary/10 px-2 py-1 rounded-full">
                            {test.group}
                          </span>
                        )}
                        {test.specimen && (
                          <span className="text-[11px] font-bold uppercase tracking-wide text-gray-600 bg-muted px-2 py-1 rounded-full">
                            {test.specimen}
                          </span>
                        )}
                        {test.code && (
                          <span className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground bg-muted px-2 py-1 rounded-full">
                            {test.code}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="bg-card-surface px-4 py-3 flex justify-between items-center">
                    <span className="font-bold text-base text-primary">
                      {formatPrice(test.price)}
                    </span>
                    <Link
                      to={`/app/tests/compare/${test.id}`}
                      className="flex items-center gap-1.5 text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full"
                    >
                      <Scale className="w-3.5 h-3.5" />
                      Compare Price
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            {totalPages > 1 && <PaginationBar />}
          </>
        )}
      </main>

      {/* ─── DESKTOP ─── */}
      <main className="hidden sm:block pt-32 pb-20 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-10">
            <h1 className="text-4xl font-black text-foreground mb-2">
              Diagnostic Tests
            </h1>
            <p className="text-muted-foreground">
              Browse individual tests or{" "}
              <Link
                to="/app/packages"
                className="font-semibold text-primary underline"
              >
                curated packages
              </Link>
              .
            </p>
          </div>

          {/* Search */}
          <div className="relative mb-8 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search tests..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-border rounded-xl focus:border-primary outline-none text-sm"
            />
          </div>

          {loading ? (
            <div className="space-y-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white border border-border rounded-2xl p-6 flex justify-between items-center animate-pulse"
                >
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full bg-muted flex-shrink-0" />
                    <div className="space-y-2">
                      <div className="h-4 bg-muted rounded w-48" />
                      <div className="h-3 bg-muted rounded w-32" />
                    </div>
                  </div>
                  <div className="h-6 bg-muted rounded w-24" />
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="space-y-4">
                {tests.map((test, i) => (
                  <div
                    key={test.id || i}
                    className="bg-white border border-border rounded-2xl p-6 flex justify-between items-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="w-12 h-12 rounded-full bg-teal-surface flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold text-lg">
                          {test.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-foreground">
                          {test.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {test.group || test.code || "Testraca Network"}
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
                      <Link
                        to={`/app/tests/compare/${test.id}`}
                        className="flex items-center gap-2 text-sm font-bold text-primary border border-primary/20 bg-primary/5 px-4 py-2.5 rounded-xl hover:bg-primary/10 transition-colors"
                      >
                        <Scale className="w-4 h-4" />
                        Compare Price
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              {totalPages > 1 && <PaginationBar />}
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TestCatalog;
