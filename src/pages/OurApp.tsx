import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, Smartphone, Zap, Shield, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const OurApp = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Easy Booking",
      description: "Book a lab test in just a few taps. Select your test, date, and time that works best for you.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Zap,
      title: "Fast Results",
      description: "Get your test results quickly and securely. Track your sample collection and testing progress in real-time.",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your health data is encrypted and protected. We follow all healthcare privacy standards and regulations.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Users,
      title: "Professional Care",
      description: "Our licensed medical professionals come to you. No waiting rooms, no hassle, just quality care.",
      color: "bg-accent/10 text-accent"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 bg-gradient-to-br from-hero-bg via-hero-bg to-primary/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
        
        <div className="container mx-auto max-w-4xl text-center relative z-10 space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground animate-fade-in leading-tight">
              Healthcare at Your <br />
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Fingertips
              </span>
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in [animation-delay:200ms] leading-relaxed">
            Download the Labtraca app and get lab tests done in the comfort of your home. Fast, convenient, and professional.
          </p>
          <div className="animate-fade-in [animation-delay:400ms] pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full font-bold text-lg px-8 py-6 h-auto">
              <Download className="mr-2" />
              Download on iOS
            </Button>
            <Button size="lg" variant="outline" className="rounded-full font-bold text-lg px-8 py-6 h-auto">
              <Download className="mr-2" />
              Download on Android
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-4">
              Why Choose Labtraca?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience healthcare the way it should be
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl lg:text-5xl font-black text-center text-foreground mb-16">
            How to Use the App
          </h2>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Download & Sign Up</h3>
                <p className="text-lg text-muted-foreground">
                  Download the Labtraca app from your device's app store and create your account with your basic information.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Browse & Select Tests</h3>
                <p className="text-lg text-muted-foreground">
                  Browse our comprehensive list of available lab tests and select the one you need.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Choose Date & Time</h3>
                <p className="text-lg text-muted-foreground">
                  Select a convenient date and time for a medical professional to visit you.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Sample Collection</h3>
                <p className="text-lg text-muted-foreground">
                  A certified phlebotomist will arrive at your location and collect your sample professionally.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Get Your Results</h3>
                <p className="text-lg text-muted-foreground">
                  Track your test progress and receive your results securely in the app within 24-48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Download the Labtraca app today and experience convenient healthcare like never before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 h-auto rounded-full">
              <Download className="mr-2" />
              Download Now
            </Button>
            <Link to="/how-it-works">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 h-auto rounded-full">
                Learn How It Works
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurApp;
