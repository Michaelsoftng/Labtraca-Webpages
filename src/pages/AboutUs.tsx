import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Users, Target, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Your health and comfort are our top priorities. We bring quality lab testing directly to your doorstep.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Users,
      title: "Professional Excellence",
      description: "Our network of certified medical professionals ensures accurate results and exceptional service every time.",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We leverage technology to make healthcare more accessible, convenient, and affordable for everyone.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Award,
      title: "Trust & Reliability",
      description: "Certified labs, secure data handling, and transparent processes you can count on.",
      color: "bg-accent/10 text-accent"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-black animate-fade-in leading-tight">
              Making Healthcare <br />
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Accessible for All
              </span>
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in [animation-delay:200ms] leading-relaxed">
            We're on a mission to revolutionize how people access lab testing services through technology and convenience.
          </p>
          <div className="animate-fade-in [animation-delay:400ms] pt-4">
            <Link to="/">
              <Button size="lg" className="rounded-full font-bold text-lg px-8 py-6 h-auto">
                Learn More
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Labtraca was born from a simple observation: getting lab tests shouldn't require taking time off work, sitting in waiting rooms, or navigating complex healthcare systems.
                </p>
                <p>
                  Founded in 2023, we set out to create a platform that connects people with certified medical professionals who can perform lab tests in the comfort of their homes or offices.
                </p>
                <p>
                  Today, we're proud to serve thousands of customers across the region, making healthcare more accessible one test at a time.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-primary/10 rounded-3xl p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 rounded-full -ml-16 -mb-16"></div>
                <div className="relative space-y-6">
                  <div className="bg-card p-6 rounded-2xl shadow-lg">
                    <p className="text-4xl font-black text-primary mb-2">10,000+</p>
                    <p className="text-muted-foreground">Tests Completed</p>
                  </div>
                  <div className="bg-card p-6 rounded-2xl shadow-lg">
                    <p className="text-4xl font-black text-primary mb-2">500+</p>
                    <p className="text-muted-foreground">Medical Professionals</p>
                  </div>
                  <div className="bg-card p-6 rounded-2xl shadow-lg">
                    <p className="text-4xl font-black text-primary mb-2">50+</p>
                    <p className="text-muted-foreground">Partner Labs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl ${value.color} flex items-center justify-center mb-6`}>
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-primary-foreground mb-6">
            Ready to Experience <br />Better Healthcare?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who've made the switch to convenient, professional lab testing.
          </p>
          <Link to="/">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 h-auto rounded-full">
              Get Started Now
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
