import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, Heart, Microscope, Clock, CheckCircle, ArrowRight, Syringe, MessageSquarePlus, Hospital } from "lucide-react";

const OurServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:pt-32 md:pb-20 md:px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-black animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in [animation-delay:200ms]">
            Comprehensive lab testing services at your doorstep
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-12 px-4 md:py-20 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all animate-fade-in">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Syringe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-black mb-4">Medical Test</h3>
              <p className="text-muted-foreground">
                Book a test and have our licensed professionals collect your sample from the comfort of your home or office.
              </p>
            </div>

            <div className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all animate-fade-in [animation-delay:200ms]">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Microscope className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-black mb-4">Partner Labs</h3>
              <p className="text-muted-foreground">
                Explore and order tests from our wide variety of accredited laboratories nearby.
              </p>
            </div>

            <div className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all animate-fade-in [animation-delay:400ms]">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <MessageSquarePlus className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-black mb-4">Medical Consultation</h3>
              <p className="text-muted-foreground">
                Connect with qualified doctors and get expert medical advice from the comfort of your home.
              </p>
            </div>

            <div className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all animate-fade-in [animation-delay:600ms]">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Hospital className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-black mb-4">Partner Hospitals</h3>
              <p className="text-muted-foreground">
                Access premium healthcare services from our network of verified hospitals and clinics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Test Categories */}
      <section className="py-12 px-4 md:py-20 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Test Categories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive range of laboratory tests for all your health needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-3xl p-8 space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-black">Routine Blood Work</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Complete Blood Count (CBC)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Lipid Profile</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Metabolic Panel</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Thyroid Function Tests</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-3xl p-8 space-y-4">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center">
                <Microscope className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-black">Specialized Testing</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">COVID-19 Testing (PCR & Rapid)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">DNA Testing & Genetic Screening</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Allergy Testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Wellness Panels</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-3xl p-8 space-y-4">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-black">Preventive Care</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Annual Health Checkups</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Diabetes Screening</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Vitamin Deficiency Tests</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Hormone Testing</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-3xl p-8 space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-black">Corporate Services</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Employee Health Screening</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">On-site Testing at Workplace</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Pre-employment Physicals</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Drug Testing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-black">Ready to get started?</h2>
          <p className="text-xl text-muted-foreground">
            Book your test today and experience the convenience of at-home lab services
          </p>
          <Button size="lg" className="rounded-full font-bold text-lg px-10 py-6 h-auto">
            Book a Test Now
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurServices;
