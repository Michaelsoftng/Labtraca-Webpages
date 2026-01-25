import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Droplet, CheckCircle2, Smartphone, UserCheck, Clock, ArrowRight } from "lucide-react";
import { PhlebotomistForm } from "@/components/forms/PhlebotomistForm";

const Phlebotomist = () => {
    const steps = [
        {
            icon: Smartphone,
            title: "1. Download App",
            description: "Download the Labtraca Service App from your app store."
        },
        {
            icon: UserCheck,
            title: "2. Register Profile",
            description: "Sign up as a Phlebotomist. Upload your medical licenses and certifications."
        },
        {
            icon: Clock,
            title: "3. Verification",
            description: "We verify your credentials. Once approved, you can accept home-collection requests."
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-24 pb-12 px-4 md:pt-32 md:pb-20 md:px-6 bg-gradient-to-br from-primary/10 to-background">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 animate-fade-in">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-2">
                                <Droplet className="w-4 h-4 text-primary" />
                                <span className="text-sm font-bold text-primary">Medical Professional</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-foreground leading-tight">
                                Become a <span className="text-primary">Phlebotomist</span>
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Empower your medical career. Provide specialized at-home lab services, help patients, and earn on your own schedule.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button size="lg" className="rounded-full font-bold h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90">
                                    Download Service App
                                    <Smartphone className="ml-2 w-5 h-5" />
                                </Button>
                            </div>
                        </div>
                        <div className="relative animate-fade-in [animation-delay:200ms]">
                            <div className="w-full h-[400px] bg-gradient-to-br from-primary to-secondary rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden transform md:-rotate-3">
                                <img
                                    src="/assets/phlebotomist_black.png"
                                    alt="Phlebotomist"
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
                        <h2 className="text-3xl md:text-5xl font-black mb-6">Join the Network</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Three steps to start your journey with Labtraca
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="bg-card border border-border p-8 rounded-3xl relative hover:shadow-lg transition-all animate-fade-in"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                    <step.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-muted-foreground">{step.description}</p>

                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-12 right-0 translate-x-1/2 text-primary/30">
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
                        <h2 className="text-3xl md:text-5xl font-black mb-4">Registration <span className="text-primary">Form</span></h2>
                        <p className="text-lg text-muted-foreground">Complete the form below to begin your application</p>
                    </div>
                    <PhlebotomistForm />
                </div>
            </section>

            {/* Requirements Section */}
            <section className="py-20 px-4 md:px-6 bg-background">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center bg-muted/50 rounded-3xl p-8 md:p-12">
                        <h3 className="text-2xl font-bold mb-4">Requirements</h3>
                        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-left">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="text-green-500 w-5 h-5" /> <span>Valid Certifications</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="text-green-500 w-5 h-5" /> <span>Medical License</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="text-green-500 w-5 h-5" /> <span>Minimum 1 Year Exp.</span>
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

export default Phlebotomist;
