import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ChevronRight, MapPin, Star, Clock, Phone, Building2, Bed } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hospitals = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "General Hospital", "Specialist", "Emergency Care", "Maternity", "Pediatric", "Diagnostic Center"];

    const hospitals = [
        {
            name: "National Hospital Abuja",
            type: "General Hospital",
            address: "Central Business District, Abuja",
            rating: 4.8,
            reviews: 542,
            distance: "2.5 km",
            beds: "500+",
            emergency: true,
            services: ["Emergency Care", "Surgery", "ICU", "Maternity"]
        },
        {
            name: "Garki Hospital",
            type: "General Hospital",
            address: "Garki Area 3, Abuja",
            rating: 4.6,
            reviews: 328,
            distance: "3.8 km",
            beds: "200+",
            emergency: true,
            services: ["General Medicine", "Pediatrics", "Laboratory"]
        },
        {
            name: "Cedarcrest Hospitals",
            type: "Specialist Hospital",
            address: "Gudu District, Abuja",
            rating: 4.9,
            reviews: 456,
            distance: "4.2 km",
            beds: "150+",
            emergency: true,
            services: ["Cardiology", "Orthopedics", "Neurology", "ICU"]
        },
        {
            name: "Maitama District Hospital",
            type: "General Hospital",
            address: "Maitama, Abuja",
            rating: 4.7,
            reviews: 289,
            distance: "5.1 km",
            beds: "180+",
            emergency: true,
            services: ["General Medicine", "Surgery", "Maternity"]
        },
        {
            name: "Asokoro General Hospital",
            type: "General Hospital",
            address: "Asokoro District, Abuja",
            rating: 4.5,
            reviews: 234,
            distance: "3.2 km",
            beds: "120+",
            emergency: false,
            services: ["General Medicine", "Pediatrics", "Laboratory"]
        },
        {
            name: "Wuse General Hospital",
            type: "General Hospital",
            address: "Wuse Zone 5, Abuja",
            rating: 4.6,
            reviews: 412,
            distance: "2.8 km",
            beds: "250+",
            emergency: true,
            services: ["Emergency Care", "General Medicine", "Radiology"]
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-24 pb-12 px-4 md:pt-32 md:pb-20 md:px-6 bg-white">
                <div className="container mx-auto max-w-4xl text-center space-y-6">
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
                        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="font-medium text-foreground">Hospitals</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black animate-fade-in line-clamp-2">
                        Hospitals Near You
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in [animation-delay:200ms]">
                        Find trusted hospitals and healthcare facilities in Abuja
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
            <section className="py-12 px-4 md:py-20 md:px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {hospitals.map((hospital, index) => (
                            <div
                                key={index}
                                className="bg-card border rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Building2 className="w-5 h-5 text-primary" />
                                            <h3 className="font-bold text-lg">{hospital.name}</h3>
                                        </div>
                                        <p className="text-sm text-muted-foreground mb-1">{hospital.type}</p>
                                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                            <MapPin className="w-4 h-4" />
                                            <span>{hospital.address}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-full">
                                        <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                                        <span className="text-xs font-bold text-amber-700">{hospital.rating}</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3 mb-4">
                                    <div className="flex items-center gap-2 text-sm">
                                        <MapPin className="w-4 h-4 text-primary" />
                                        <span className="text-muted-foreground">{hospital.distance} away</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Bed className="w-4 h-4 text-primary" />
                                        <span className="text-muted-foreground">{hospital.beds} beds</span>
                                    </div>
                                    {hospital.emergency && (
                                        <div className="flex items-center gap-2 text-sm col-span-2">
                                            <Clock className="w-4 h-4 text-green-600" />
                                            <span className="text-green-600 font-medium">24/7 Emergency Care</span>
                                        </div>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <p className="text-xs font-bold text-muted-foreground mb-2">SERVICES</p>
                                    <div className="flex flex-wrap gap-2">
                                        {hospital.services.map((service, idx) => (
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
                                <p className="text-xs text-center text-muted-foreground mt-2">{hospital.reviews} reviews</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Hospitals;
