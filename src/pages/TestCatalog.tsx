import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Search, MapPin, ArrowRight } from "lucide-react";
import { useQuery } from "@apollo/client/react";
import { GetTests } from "@/lib/graphql/queries";
import { Link } from "react-router-dom";

const CATEGORIES = ["General Health", "Hematology", "Metabolic", "Cardiac", "Vitamin", "Diabetes", "Thyroid", "Allergy"];

const FALLBACK_TESTS = [
  { id: "1", name: "Full Lipid Profile", labName: "Synlab Diagnostics", price: 15000, icon: "heart_check", category: "Cardiac" },
  { id: "2", name: "Complete Blood Count", labName: "Union Diagnostic", price: 8500, icon: "biotech", category: "Hematology" },
  { id: "3", name: "HbA1c Diabetes Test", labName: "Me Cure Diagnostics", price: 12000, icon: "opacity", category: "Diabetes" },
  { id: "4", name: "Thyroid Panel (TSH)", labName: "Synlab Diagnostics", price: 9800, icon: "monitor_heart", category: "Thyroid" },
  { id: "5", name: "Vitamin D & B12", labName: "PathCare Labs", price: 11500, icon: "science", category: "Vitamin" },
  { id: "6", name: "Metabolic Panel", labName: "Clina-Lancet", price: 13000, icon: "colorize", category: "Metabolic" },
];

const MOBILE_TESTS = [
  { id: "1", title: "Full Lipid Profile", desc: "Detailed measurement of cholesterol levels including HDL, LDL, and Triglycerides.", price: "₦12,500", popular: false },
  { id: "2", title: "Diabetes Screening (HbA1c)", desc: "Average blood sugar levels over the past 3 months for diabetic monitoring.", price: "₦8,200", popular: false },
  { id: "3", title: "Executive Wellness Package", desc: "A comprehensive 45-parameter screening covering cardiac, renal, liver, and metabolic health.", price: "₦45,000", popular: true },
];

const TestCatalog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [checkedCats, setCheckedCats] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  const { data } = useQuery<{ getPublicAllTest?: { tests: any[] } }>(GetTests, {
    variables: { limit: 20, offset: 0 },
  });

  const apiTests = data?.getPublicAllTest?.tests || [];
  const desktopTests = apiTests.length > 0 ? apiTests : FALLBACK_TESTS;

  const toggleCat = (cat: string) =>
    setCheckedCats((prev) => prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]);

  return (
    <div className="min-h-screen bg-[#F9F9FF]">
      <Navigation />

      {/* ─── MOBILE ─── */}
      <main className="sm:hidden pt-16 px-4 pb-20">
        <section className="pt-8 pb-4">
          <h1 className="text-2xl font-bold text-primary mb-1">Comprehensive Testing.</h1>
          <p className="text-sm text-gray-500">Browse individual tests or curated packages.</p>
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
          {MOBILE_TESTS.filter((t) => t.title.toLowerCase().includes(search.toLowerCase())).map((test) => (
            <article key={test.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="p-4 flex gap-4">
                <div className="w-20 h-20 rounded-lg bg-[#d1e7e7] flex items-center justify-center flex-shrink-0">
                  <Search className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1 gap-2">
                    <h3 className="font-bold text-base leading-tight text-primary">{test.title}</h3>
                    {test.popular && (
                      <span className="text-[10px] font-bold bg-primary text-white px-2 py-0.5 rounded-full flex-shrink-0">POPULAR</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 line-clamp-2">{test.desc}</p>
                </div>
              </div>
              <div className="bg-[#f1f3ff] px-4 py-3 flex justify-between items-center">
                <span className="font-bold text-base text-primary">{test.price}</span>
                <button className="bg-primary text-white px-4 py-2 rounded-lg font-bold text-sm">
                  Compare Prices
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* ─── DESKTOP ─── */}
      <main className="hidden sm:block pt-32 pb-20 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-10">
            <h1 className="text-4xl font-black text-gray-900 mb-2">Diagnostic Tests</h1>
            <p className="text-gray-500">Compare prices from top-rated labs across the city.</p>
          </div>

          <div className="grid grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside>
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="font-bold text-xs uppercase tracking-wider text-gray-600 mb-4">Categories</h3>
                <div className="space-y-3">
                  {CATEGORIES.map((cat) => (
                    <label key={cat} className="flex items-center gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-primary accent-primary w-4 h-4"
                        checked={checkedCats.includes(cat)}
                        onChange={() => toggleCat(cat)}
                      />
                      <span className="text-sm text-gray-700">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            {/* Test cards */}
            <div className="col-span-3 space-y-4">
              {desktopTests
                .filter((t: any) => checkedCats.length === 0 || checkedCats.includes(t.category))
                .map((test: any, i: number) => (
                  <div key={test.id || i} className="bg-white border border-gray-200 rounded-2xl p-6 flex justify-between items-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex gap-4 items-center">
                      <div className="w-12 h-12 rounded-full bg-[#d1e7e7] flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold text-lg">
                          {(test.name || test.title || "").charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">{test.name || test.title}</h4>
                        <p className="text-sm text-gray-500">{test.labName || test.lab || "Labtraca Network"}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary">
                          ₦{(test.price || 0).toLocaleString()}
                        </p>
                        <p className="text-[10px] uppercase font-bold text-gray-400">Total Cost</p>
                      </div>
                      <button className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-primary/90 transition-colors">
                        Book Test
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TestCatalog;
