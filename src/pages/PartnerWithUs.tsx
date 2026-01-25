import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Handshake, TrendingUp, Users, Zap, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";
import { GeneralPartnerForm } from "@/components/forms/GeneralPartnerForm";
import { LaboratoryForm } from "@/components/forms/LaboratoryForm";
import { HospitalForm } from "@/components/forms/HospitalForm";

const PartnerWithUs = () => {
  const [partnerType, setPartnerType] = useState<"laboratory" | "hospital" | "general">("general");

  const benefits = [
    {
      icon: TrendingUp,
      title: "Grow Your Business",
      description: "Access a growing customer base actively seeking lab testing services in your area.",
    },
    {
      icon: Users,
      title: "Reliable Patient Flow",
      description: "Connect with patients who need your services through our trusted platform.",
    },
    {
      icon: Zap,
      title: "Easy Integration",
      description: "Our simple onboarding process gets you started quickly with minimal effort.",
    },
  ];

  const requirements = [
    "Valid healthcare license and certifications",
    "Minimum operational experience in the field",
    "Quality assurance protocols in place",
    "Professional liability insurance",
    "Commitment to patient privacy and data security",
  ];

  const process = [
    { step: "1", title: "Submit Application", description: "Fill out our partner application form" },
    { step: "2", title: "Review & Verification", description: "We verify your credentials and certifications" },
    { step: "3", title: "Onboarding", description: "Complete training and platform integration" },
    { step: "4", title: "Go Live", description: "Start receiving test requests from patients" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:pt-32 md:pb-20 md:px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-fade-in">
              <Handshake className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-primary">Partnership Opportunities</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-black mb-6 leading-tight">
              Partner <span className="text-primary">With Us</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join Labtraca's network of trusted laboratories and healthcare providers. Expand your reach and grow your business with our platform.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-4 md:py-20 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Why <span className="text-primary">Partner</span> With Labtraca?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-card border-2 border-border rounded-3xl p-8 text-center hover:border-primary transition-all hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
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

      {/* Process Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Partnership <span className="text-primary">Process</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Our streamlined onboarding process makes it easy to join our network
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-3xl font-black text-primary-foreground mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-black mb-3">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="registration-form" className="py-12 px-4 md:py-20 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Apply to <span className="text-primary">Partner</span>
            </h2>
            <p className="text-xl text-foreground/70 mb-8">
              Select your partner type and fill out the form below
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => setPartnerType("general")}
                className={`px-8 py-3 rounded-full font-bold transition-all ${partnerType === "general" ? "bg-primary text-primary-foreground shadow-lg scale-105" : "bg-card border-2 border-border hover:border-primary/50"
                  }`}
              >
                Strategic Partner
              </button>
              <button
                onClick={() => setPartnerType("laboratory")}
                className={`px-8 py-3 rounded-full font-bold transition-all ${partnerType === "laboratory" ? "bg-primary text-primary-foreground shadow-lg scale-105" : "bg-card border-2 border-border hover:border-primary/50"
                  }`}
              >
                Laboratory
              </button>
              <button
                onClick={() => setPartnerType("hospital")}
                className={`px-8 py-3 rounded-full font-bold transition-all ${partnerType === "hospital" ? "bg-primary text-primary-foreground shadow-lg scale-105" : "bg-card border-2 border-border hover:border-primary/50"
                  }`}
              >
                Hospital / Clinic
              </button>
            </div>
          </div>

          <div className="text-left">
            {partnerType === "general" && <GeneralPartnerForm />}
            {partnerType === "laboratory" && <LaboratoryForm />}
            {partnerType === "hospital" && <HospitalForm />}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-12 px-4 md:py-20 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Partner <span className="text-primary">Requirements</span>
            </h2>
            <p className="text-xl text-foreground/70">
              To maintain the highest standards, we require all partners to meet the following criteria
            </p>
          </div>

          <div className="bg-card border-2 border-border rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground/80 font-medium">{requirement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Have <span className="text-primary">Questions?</span>
          </h2>
          <p className="text-xl text-foreground/70 mb-12">
            Our partnership team is here to help answer any questions you may have
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <span className="font-bold">+234 813 389 6015</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <span className="font-bold">partners@labtraca.com</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <span className="font-bold">Abuja, Nigeria</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnerWithUs;
