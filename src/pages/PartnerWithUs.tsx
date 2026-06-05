import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight, MapPin, TrendingUp, Truck, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { GeneralPartnerForm } from "@/components/forms/GeneralPartnerForm";
import { LaboratoryForm } from "@/components/forms/LaboratoryForm";
import { HospitalForm } from "@/components/forms/HospitalForm";

const partnerTypes = [
  {
    icon: "🏥",
    lucide: TrendingUp,
    title: "Clinical Partnerships",
    desc: "Enhance your lab throughput with our centralized logistics. Connect with more patients through our growing network.",
    color: "bg-[#d1e7e7]",
    type: "laboratory" as const,
  },
  {
    icon: "🚚",
    lucide: Truck,
    title: "Business Logistics",
    desc: "Plug into our established diagnostic supply chain. Rapid, medical-grade transport for your facility.",
    color: "bg-[#e9edff]",
    type: "hospital" as const,
  },
  {
    icon: "💰",
    lucide: DollarSign,
    title: "Investment Opps",
    desc: "Support the expansion of the Labtraca network. Scale healthcare delivery with enterprise-grade solutions.",
    color: "bg-[#f1f3ff]",
    type: "general" as const,
  },
];

const MOBILE_PARTNERS = [
  { name: "Advanced Genomics Lab", location: "Berlin, Germany • ISO Certified" },
  { name: "Synlab Nigeria", location: "Lagos, Nigeria • CAP Accredited" },
  { name: "Me Cure Diagnostics", location: "Abuja, Nigeria • ISO 15189" },
];

const PartnerWithUs = () => {
  const [selectedType, setSelectedType] = useState<"laboratory" | "hospital" | "general" | null>(null);

  return (
    <div className="min-h-screen bg-[#F9F9FF]">
      <Navigation />

      {/* ─── MOBILE ─── */}
      <main className="sm:hidden pt-16 px-4 pb-20">
        <section className="pt-8 pb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Partner Network</h1>
          <p className="text-sm text-gray-500">Join our growing ecosystem of healthcare partners.</p>
        </section>

        {/* Map banner */}
        <div className="relative h-48 rounded-2xl overflow-hidden mb-6 bg-gray-300">
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <span className="bg-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
              Explore Nearby Labs
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4 mb-8">
          {MOBILE_PARTNERS.map((p, i) => (
            <div key={i} className="bg-white p-4 border border-gray-200 rounded-xl flex justify-between items-center shadow-sm">
              <div>
                <h3 className="font-bold text-gray-900">{p.name}</h3>
                <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3" /> {p.location}
                </p>
              </div>
              <button className="bg-primary text-white p-2 rounded-full">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="bg-primary rounded-2xl p-6 text-white mb-6">
          <h2 className="text-xl font-bold mb-2">Ready to partner?</h2>
          <p className="text-white/80 text-sm mb-4">Fill our partner form to get started with Labtraca.</p>
          <button
            onClick={() => setSelectedType("general")}
            className="bg-white text-primary px-5 py-2.5 rounded-xl font-bold text-sm"
          >
            Apply Now
          </button>
        </div>

        {selectedType && (
          <div className="mb-8">
            {selectedType === "laboratory" && <LaboratoryForm />}
            {selectedType === "hospital" && <HospitalForm />}
            {selectedType === "general" && <GeneralPartnerForm />}
          </div>
        )}
      </main>

      {/* ─── DESKTOP ─── */}
      <main className="hidden sm:block pt-32 pb-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">

          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-black text-gray-900 mb-4">Partner with Labtraca</h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Scale your health facility or logistics business with our enterprise-grade orchestration engine.
            </p>
          </div>

          {/* 3 Partnership Type Cards */}
          <div className="grid grid-cols-3 gap-6 mb-20">
            {partnerTypes.map((pt) => (
              <div
                key={pt.type}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary transition-all shadow-sm hover:shadow-md"
              >
                <div className={`w-14 h-14 ${pt.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <pt.lucide className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{pt.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{pt.desc}</p>
                <button
                  onClick={() => setSelectedType(pt.type)}
                  className="text-primary font-bold flex items-center gap-1.5 text-sm hover:gap-2.5 transition-all"
                >
                  Inquire Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Form section — revealed on selection */}
          {selectedType && (
            <div id="partner-form" className="mb-20">
              <div className="flex gap-3 mb-8 justify-center">
                {partnerTypes.map((pt) => (
                  <button
                    key={pt.type}
                    onClick={() => setSelectedType(pt.type)}
                    className={`px-5 py-2 rounded-full font-bold text-sm transition-colors ${
                      selectedType === pt.type
                        ? "bg-primary text-white"
                        : "border border-gray-300 text-gray-600 hover:border-primary hover:text-primary"
                    }`}
                  >
                    {pt.title}
                  </button>
                ))}
              </div>
              {selectedType === "laboratory" && <LaboratoryForm />}
              {selectedType === "hospital" && <HospitalForm />}
              {selectedType === "general" && <GeneralPartnerForm />}
            </div>
          )}

          {/* Stats row */}
          <div className="bg-[#F9F9FF] rounded-2xl border border-gray-200 p-10 grid grid-cols-4 gap-8 text-center">
            {[
              { value: "150+", label: "Partner Labs" },
              { value: "50K+", label: "Tests Completed" },
              { value: "95%", label: "Partner Satisfaction" },
              { value: "30+", label: "Cities Covered" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-black text-primary mb-1">{s.value}</p>
                <p className="text-xs text-gray-500 uppercase font-semibold tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PartnerWithUs;
