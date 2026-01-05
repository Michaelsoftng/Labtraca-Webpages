import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ChevronRight, Calendar, Video, MessageSquare, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Consultation = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "General Practice", "Specialist", "Mental Health", "Pediatrics", "Dermatology", "Cardiology"];

    const consultations = [
        {
            name: "Dr. Amina Bello",
            specialty: "General Practitioner",
            price: "₦8,000",
            rating: 4.9,
            reviews: 342,
            availability: "Available Today",
            type: "Video",
            waitTime: "15 min"
        },
        {
            name: "Dr. Chukwudi Okonkwo",
            specialty: "Cardiologist",
            price: "₦15,000",
            rating: 4.8,
            reviews: 189,
            availability: "Available Tomorrow",
            type: "Video",
            waitTime: "30 min"
        },
        {
            name: "Dr. Fatima Yusuf",
            specialty: "Dermatologist",
            price: "₦12,000",
            rating: 4.9,
            reviews: 256,
            availability: "Available Today",
            type: "Video",
            waitTime: "20 min"
        },
        {
            name: "Dr. Ibrahim Musa",
            specialty: "Pediatrician",
            price: "₦10,000",
            rating: 4.7,
            reviews: 423,
            availability: "Available Today",
            type: "Video",
            waitTime: "25 min"
        },
        {
            name: "Dr. Ngozi Eze",
            specialty: "Mental Health Specialist",
            price: "₦13,000",
            rating: 4.9,
            reviews: 178,
            availability: "Available Tomorrow",
            type: "Chat",
            waitTime: "10 min"
        },
        {
            name: "Dr. Yusuf Abdullahi",
            specialty: "General Practitioner",
            price: "₦8,000",
            rating: 4.8,
            reviews: 298,
            availability: "Available Today",
            type: "Video",
            waitTime: "15 min"
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
                        <span className="font-medium text-foreground">Consultation</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black animate-fade-in line-clamp-2">
                        Medical Consultation
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in [animation-delay:200ms]">
                        Connect with qualified doctors from the comfort of your home
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {consultations.map((doctor, index) => (
                            <div
                                key={index}
                                className="bg-card border rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <h3 className="font-bold text-lg mb-1">{doctor.name}</h3>
                                        <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                                    </div>
                                    <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-full">
                                        <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                                        <span className="text-xs font-bold text-amber-700">{doctor.rating}</span>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-4">
                                    <div className="flex items-center gap-2 text-sm">
                                        {doctor.type === "Video" ? (
                                            <Video className="w-4 h-4 text-primary" />
                                        ) : (
                                            <MessageSquare className="w-4 h-4 text-primary" />
                                        )}
                                        <span className="text-muted-foreground">{doctor.type} Consultation</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Clock className="w-4 h-4 text-primary" />
                                        <span className="text-muted-foreground">~{doctor.waitTime} wait</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Calendar className="w-4 h-4 text-green-600" />
                                        <span className="text-green-600 font-medium">{doctor.availability}</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t">
                                    <div>
                                        <p className="text-2xl font-black text-primary">{doctor.price}</p>
                                        <p className="text-xs text-muted-foreground">{doctor.reviews} reviews</p>
                                    </div>
                                    <Button className="font-bold">Book Now</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Consultation;
