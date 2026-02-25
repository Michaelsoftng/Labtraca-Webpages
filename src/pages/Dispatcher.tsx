import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Truck, CheckCircle2, Smartphone, UserCheck, Clock, ArrowRight } from "lucide-react";
import { DispatcherForm } from "@/components/forms/DispatcherForm";
import DispatcherImage from "@/assets/dispatcher-bike.png";

const Dispatcher = () => {
    const steps = [
        {
            icon: Smartphone,
            title: "1. Download App",
            description: "Download the Labtraca Service App from the App Store or Google Play Store."
        },
        {
            icon: UserCheck,
            title: "2. Register Account",
            description: "Sign up as a Dispatcher and submit your identification documents."
        },
        {
            icon: Clock,
            title: "3. Await Approval",
            description: "Wait for admin approval. Once verified, you can start accepting requests!"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-24 pb-12 px-4 md:pt-32 md:pb-20 md:px-6 bg-gradient-to-br from-accent/10 to-background">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 animate-fade-in">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-2">
                                <Truck className="w-4 h-4 text-accent" />
                                <span className="text-sm font-bold text-accent">Join Logistics Team</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-foreground leading-tight">
                                Become a <span className="text-accent">Dispatcher</span>
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Join our network of delivery professionals. Coordinate sample collections efficiently, work flexible hours, and earn competitively.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button size="lg" className="rounded-full font-bold h-12 px-8 bg-foreground text-background hover:bg-foreground/90">
                                    <svg className="mr-2 h-5 w-5" viewBox="0 0 814 1000" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
                                    </svg>
                                    App Store
                                </Button>
                                <Button size="lg" variant="outline" className="rounded-full font-bold h-12 px-8 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                                    <svg className="mr-2 h-5 w-5" viewBox="0 0 28.5 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.54 15.28.12 29.34a3.64 3.64 0 0 0 5.33 2.16l15.1-8.6z" fill="#ea4335" />
                                        <path d="m27.11 12.89-6.53-3.74-7.35 6.45 7.38 7.28 6.48-3.7a3.55 3.55 0 0 0 0-6.29z" fill="#fbbc04" />
                                        <path d="M.12 2.66a3.46 3.46 0 0 0-.12.92v24.84a3.66 3.66 0 0 0 .12.92L14 15.64Z" fill="#4285f4" />
                                        <path d="m13.64 16 6.94-6.85L5.5.51A3.72 3.72 0 0 0 3.63 0 3.64 3.64 0 0 0 .12 2.65Z" fill="#34a853" />
                                    </svg>
                                    Google Play
                                </Button>
                            </div>
                        </div>
                        <div className="relative animate-fade-in [animation-delay:200ms]">
                            <div className="w-full h-[400px] bg-gradient-to-br from-accent to-accent/60 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden transform md:rotate-3">
                                <img
                                    src={DispatcherImage}
                                    alt="Dispatcher"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it works steps */}
            <section className="py-20 px-4 md:px-6 bg-background">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black mb-6">How to Get Started</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Follow these simple steps to join our dispatcher fleet
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="bg-card border border-border p-8 rounded-3xl relative hover:shadow-lg transition-all animate-fade-in"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                                    <step.icon className="w-7 h-7 text-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-muted-foreground">{step.description}</p>

                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-12 right-0 translate-x-1/2 text-accent/30">
                                        <ArrowRight className="w-6 h-6" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Registration Form Section */}
            <section id="registration-form" className="py-20 px-4 md:px-6 bg-muted/30">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-black mb-4">Registration <span className="text-accent">Form</span></h2>
                        <p className="text-lg text-muted-foreground">Complete the form below to join our fleet</p>
                    </div>
                    <DispatcherForm />
                </div>
            </section>

            {/* Requirements Section */}
            <section className="py-20 px-4 md:px-6 bg-background">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center bg-muted/50 rounded-3xl p-8 md:p-12">
                        <h3 className="text-2xl font-bold mb-4">Requirements</h3>
                        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-left">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="text-green-500 w-5 h-5" /> <span>Valid Driver's License</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="text-green-500 w-5 h-5" /> <span>Reliable Bike / Motorcycle</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="text-green-500 w-5 h-5" /> <span>Smartphone (iOS/Android)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="text-green-500 w-5 h-5" /> <span>Background Check</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Dispatcher;
