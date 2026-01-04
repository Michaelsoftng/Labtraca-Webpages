import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ChevronRight, MapPin, Star, Clock, Phone, FlaskRound, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Laboratories = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Diagnostic Lab", "Pathology", "Radiology", "Molecular Testing", "Blood Bank"];

    const laboratories = [
        {
            name: "Synlab Nigeria",
            type: "Diagnostic Laboratory",
            address: "Wuse 2, Abuja",
            rating: 4.9,
            reviews: 678,
            distance: "1.8 km",
            turnaround: "24-48 hours",
            accredited: true,
            services: ["Blood Tests", "Urine Analysis", "Molecular Testing", "Radiology"]
        },
        {
            name: "Clina-Lancet Laboratories",
            type: "Diagnostic Laboratory",
            address: "Garki Area 11, Abuja",
            rating: 4.8,
            reviews: 523,
            distance: "2.3 km",
            turnaround: "24 hours",
            accredited: true,
            services: ["Clinical Chemistry", "Hematology", "Microbiology", "Immunology"]
        },
        {
            name: "Pathcare Nigeria",
            type: "Pathology Laboratory",
            address: "Maitama, Abuja",
            rating: 4.9,
            reviews: 892,
            distance: "3.5 km",
            turnaround: "24-72 hours",
            accredited: true,
            services: ["Histopathology", "Cytology", "Molecular Pathology", "Genetic Testing"]
        },
        {
            name: "MedLab Diagnostics",
            type: "Diagnostic Laboratory",
            address: "Gwarinpa, Abuja",
            rating: 4.7,
            reviews: 445,
            distance: "4.2 km",
            turnaround: "24 hours",
            accredited: true,
            services: ["Blood Tests", "Hormone Testing", "STD Screening", "Drug Testing"]
        },
        {
            name: "Lifebridge Diagnostic Centre",
            type: "Diagnostic Laboratory",
            address: "Asokoro, Abuja",
            rating: 4.6,
            reviews: 356,
            distance: "2.9 km",
            turnaround: "48 hours",
            accredited: false,
            services: ["General Testing", "Radiology", "Ultrasound", "ECG"]
        },
        {
            name: "Premier Diagnostics",
            type: "Diagnostic Laboratory",
            address: "Central Business District, Abuja",
            rating: 4.8,
            reviews: 612,
            distance: "1.5 km",
            turnaround: "24 hours",
            accredited: true,
            services: ["Blood Tests", "Molecular Testing", "Serology", "Toxicology"]
        },
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
                        <span className="font-medium text-foreground">Laboratories</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black animate-fade-in line-clamp-2">
                        Laboratories Near You
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in [animation-delay:200ms]">
                        Find accredited diagnostic laboratories for your medical tests
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {laboratories.map((lab, index) => (
                            <div
                                key={index}
                                className="bg-card border rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <FlaskRound className="w-5 h-5 text-primary" />
                                            <h3 className="font-bold text-lg">{lab.name}</h3>
                                            {lab.accredited && (
                                                <CheckCircle2 className="w-4 h-4 text-green-600" />
                                            )}
                                        </div>
                                        <p className="text-sm text-muted-foreground mb-1">{lab.type}</p>
                                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                            <MapPin className="w-4 h-4" />
                                            <span>{lab.address}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-full">
                                        <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                                        <span className="text-xs font-bold text-amber-700">{lab.rating}</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3 mb-4">
                                    <div className="flex items-center gap-2 text-sm">
                                        <MapPin className="w-4 h-4 text-primary" />
                                        <span className="text-muted-foreground">{lab.distance} away</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Clock className="w-4 h-4 text-primary" />
                                        <span className="text-muted-foreground">{lab.turnaround}</span>
                                    </div>
                                    {lab.accredited && (
                                        <div className="flex items-center gap-2 text-sm col-span-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                                            <span className="text-green-600 font-medium">Accredited Laboratory</span>
                                        </div>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <p className="text-xs font-bold text-muted-foreground mb-2">SERVICES</p>
                                    <div className="flex flex-wrap gap-2">
                                        {lab.services.map((service, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                                            >
                                                {service}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 pt-4 border-t">
                                    <Button variant="outline" className="flex-1 font-bold">
                                        <Phone className="w-4 h-4 mr-2" />
                                        Call
                                    </Button>
                                    <Button className="flex-1 font-bold">
                                        <MapPin className="w-4 h-4 mr-2" />
                                        Directions
                                    </Button>
                                </div>
                                <p className="text-xs text-center text-muted-foreground mt-2">{lab.reviews} reviews</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Laboratories;
