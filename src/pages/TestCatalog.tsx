import { useState } from "react";
import AppHeader from "@/components/App/AppHeader";
import TestCard from "@/components/App/TestCard";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const TestCatalog = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Blood", "Sexual Health", "Genetics", "Diabetes", "Heart Health", "Thyroid", "Vitamins", "Allergy"];

    const tests = [
        { title: "Complete Blood Count (CBC)", price: "₦15,000", rating: 4.8, reviews: 124, turnaroundTime: "24h" },
        { title: "Lipid Profile", price: "₦12,500", rating: 4.9, reviews: 89, turnaroundTime: "24h" },
        { title: "HbA1c (Diabetes Screening)", price: "₦18,000", rating: 4.7, reviews: 210, turnaroundTime: "48h" },
        { title: "Thyroid Function Test", price: "₦22,000", rating: 4.6, reviews: 56, turnaroundTime: "48h" },
        { title: "Vitamin D Test", price: "₦25,000", rating: 4.9, reviews: 145, turnaroundTime: "24h" },
        { title: "STD Panel (Basic)", price: "₦35,000", rating: 4.8, reviews: 312, turnaroundTime: "72h" },
        { title: "Liver Function Test", price: "₦16,000", rating: 4.7, reviews: 78, turnaroundTime: "24h" },
        { title: "Kidney Function Test", price: "₦16,000", rating: 4.7, reviews: 65, turnaroundTime: "24h" },
    ];

    return (
        <div className="min-h-screen bg-background pb-20">
            <AppHeader />

            {/* Breadcrumbs */}
            <div className="container mx-auto px-4 py-4 flex items-center gap-2 text-sm text-muted-foreground">
                <Link to="/app" className="hover:text-primary transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="font-medium text-foreground">Medical Tests</span>
            </div>

            {/* Sticky Category Nav */}
            <div className="sticky top-16 z-40 bg-background/95 backdrop-blur border-b">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-2 overflow-x-auto py-4 no-scrollbar">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${activeCategory === cat
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
            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-black mb-2">Medical Tests</h1>
                    <p className="text-muted-foreground">
                        Choose from our wide range of diagnostic tests.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {tests.map((test, index) => (
                        <TestCard
                            key={index}
                            {...test}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestCatalog;
