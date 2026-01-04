import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
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
        <div className="min-h-screen bg-background">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-white">
                <div className="container mx-auto max-w-4xl text-center space-y-6">
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
                        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
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
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {tests.map((test, index) => (
                            <TestCard
                                key={index}
                                {...test}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default TestCatalog;
