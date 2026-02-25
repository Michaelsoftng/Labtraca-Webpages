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
      <section className="relative pt-28 pb-16 px-4 md:pt-40 md:pb-32 md:px-6 bg-gradient-to-br from-hero-bg via-hero-bg to-primary/5 overflow-hidden">
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
            <Button size="lg" className="rounded-full font-bold text-lg px-8 py-6 h-auto bg-foreground text-background hover:bg-foreground/90">
              <svg className="mr-2 h-6 w-6" viewBox="0 0 814 1000" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
              </svg>
              App Store
            </Button>
            <Button size="lg" variant="outline" className="rounded-full font-bold text-lg px-8 py-6 h-auto">
              <svg className="mr-2 h-6 w-6" viewBox="0 0 28.5 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.54 15.28.12 29.34a3.64 3.64 0 0 0 5.33 2.16l15.1-8.6z" fill="#ea4335" />
                <path d="m27.11 12.89-6.53-3.74-7.35 6.45 7.38 7.28 6.48-3.7a3.55 3.55 0 0 0 0-6.29z" fill="#fbbc04" />
                <path d="M.12 2.66a3.46 3.46 0 0 0-.12.92v24.84a3.66 3.66 0 0 0 .12.92L14 15.64Z" fill="#4285f4" />
                <path d="m13.64 16 6.94-6.85L5.5.51A3.72 3.72 0 0 0 3.63 0 3.64 3.64 0 0 0 .12 2.65Z" fill="#34a853" />
              </svg>
              Google Play
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 md:py-20 md:px-6 bg-muted/30">
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
      <section className="py-12 px-4 md:py-20 md:px-6">
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
      <section className="py-12 px-4 md:py-20 md:px-6 bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Download the Labtraca app today and experience convenient healthcare like never before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full font-bold text-lg px-8 py-6 h-auto bg-background text-foreground hover:bg-background/90">
              <svg className="mr-2 h-6 w-6" viewBox="0 0 814 1000" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
              </svg>
              App Store
            </Button>
            <Button size="lg" variant="outline" className="rounded-full font-bold text-lg px-8 py-6 h-auto bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <svg className="mr-2 h-6 w-6" viewBox="0 0 28.5 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.54 15.28.12 29.34a3.64 3.64 0 0 0 5.33 2.16l15.1-8.6z" fill="#ea4335" />
                <path d="m27.11 12.89-6.53-3.74-7.35 6.45 7.38 7.28 6.48-3.7a3.55 3.55 0 0 0 0-6.29z" fill="#fbbc04" />
                <path d="M.12 2.66a3.46 3.46 0 0 0-.12.92v24.84a3.66 3.66 0 0 0 .12.92L14 15.64Z" fill="#4285f4" />
                <path d="m13.64 16 6.94-6.85L5.5.51A3.72 3.72 0 0 0 3.63 0 3.64 3.64 0 0 0 .12 2.65Z" fill="#34a853" />
              </svg>
              Google Play
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
