import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, Building2, Syringe, Heart, Microscope, Clock, CheckCircle, ArrowRight } from "lucide-react";

const OurServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-hero-bg to-hero-bg-alt relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
        
        <div className="container mx-auto max-w-4xl text-center relative z-10 space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in [animation-delay:200ms]">
            Comprehensive lab testing services at your doorstep
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all animate-fade-in">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-black mb-4">Trusted Diagnostics</h3>
              <p className="text-muted-foreground">
                Work with certified laboratories and licensed professionals for accurate, 
                reliable test results you can trust.
              </p>
            </div>

            <div className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all animate-fade-in [animation-delay:200ms]">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-black mb-4">Seamless Access</h3>
              <p className="text-muted-foreground">
                Book tests through our app with just a few taps. Schedule at your 
                convenience - home, office, or anywhere you prefer.
              </p>
            </div>

            <div className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all animate-fade-in [animation-delay:400ms]">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <Syringe className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-black mb-4">Reliable Sample Transport</h3>
              <p className="text-muted-foreground">
                Professional sample collection and secure transport to certified labs, 
                ensuring sample integrity throughout the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Test Categories */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
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
