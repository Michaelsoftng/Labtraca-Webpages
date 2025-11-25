import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Building2, TrendingUp, Users, Award, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Partners = () => {
  const partners = [
    { name: "HealthCare Labs", logo: "🏥", type: "Laboratory Network" },
    { name: "MediTest Group", logo: "🔬", type: "Diagnostic Center" },
    { name: "BioAnalytics", logo: "🧬", type: "Research Laboratory" },
    { name: "QuickLab Solutions", logo: "⚡", type: "Express Testing" },
    { name: "CityHealth Labs", logo: "🏙️", type: "Urban Healthcare" },
    { name: "Regional Diagnostics", logo: "🌍", type: "Multi-location Lab" },
  ];

  const benefits = [
    { icon: TrendingUp, title: "Increased Revenue", description: "Access to thousands of potential customers through our platform" },
    { icon: Users, title: "More Patients", description: "Reach patients who prefer at-home testing services" },
    { icon: Building2, title: "Brand Visibility", description: "Get featured on our platform with millions of monthly visits" },
    { icon: Award, title: "Quality Standards", description: "Be part of a network committed to excellence in healthcare" },
  ];

  const stats = [
    { value: "150+", label: "Partner Labs" },
    { value: "50K+", label: "Tests Completed" },
    { value: "95%", label: "Partner Satisfaction" },
    { value: "30+", label: "Cities Covered" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-fade-in">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-primary">Partner Network</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Our <span className="text-primary">Trusted</span> Partners
            </h1>
            <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
              We collaborate with the best laboratories and healthcare providers to deliver exceptional service and accurate results to our customers.
            </p>
            <Link to="/partner-with-us">
              <Button size="lg" className="rounded-full px-8 font-bold">
                Become a Partner
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-foreground text-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl md:text-5xl font-black text-primary mb-2">{stat.value}</div>
                <div className="text-background/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Featured <span className="text-primary">Partners</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Meet the laboratories and healthcare providers that make Labtraca possible
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-card border-2 border-border rounded-3xl p-8 hover:border-primary transition-all hover:shadow-xl hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-6xl mb-4">{partner.logo}</div>
                <h3 className="text-2xl font-black mb-2">{partner.name}</h3>
                <p className="text-foreground/60 font-medium">{partner.type}</p>
                <div className="flex items-center gap-2 mt-4 text-primary">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-sm font-bold">Verified Partner</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Why Partner <span className="text-primary">With Us?</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Join a network of healthcare providers dedicated to making lab testing accessible to everyone
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-card border-2 border-border rounded-3xl p-8 hover:border-primary transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-black mb-3">{benefit.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-[3rem] p-12 md:p-16 text-center text-primary-foreground">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Join Our Network?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Partner with Labtraca today and expand your reach to thousands of customers seeking quality lab testing services.
            </p>
            <Link to="/partner-with-us">
              <Button size="lg" variant="secondary" className="rounded-full px-8 font-bold">
                Apply to Partner
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
