import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight, TrendingUp, Truck, DollarSign } from "lucide-react";
import { GeneralPartnerForm } from "@/components/forms/GeneralPartnerForm";
import { LaboratoryForm } from "@/components/forms/LaboratoryForm";
import { HospitalForm } from "@/components/forms/HospitalForm";

const partnerTypes = [
  {
    icon: "🏥",
    lucide: TrendingUp,
    title: "Clinical Partnerships",
    desc: "Enhance your lab throughput with our centralized logistics. Connect with more patients through our growing network.",
    color: "bg-teal-surface",
    type: "laboratory" as const,
  },
  {
    icon: "🚚",
    lucide: Truck,
    title: "Business Logistics",
    desc: "Plug into our established diagnostic supply chain. Rapid, medical-grade transport for your facility.",
    color: "bg-card-surface",
    type: "hospital" as const,
  },
  {
    icon: "💰",
    lucide: DollarSign,
    title: "Investment Opps",
    desc: "Support the expansion of the Labtraca network. Scale healthcare delivery with enterprise-grade solutions.",
    color: "bg-card-surface",
    type: "general" as const,
  },
];

const PartnerWithUs = () => {
  const [selectedType, setSelectedType] = useState<"laboratory" | "hospital" | "general" | null>(null);

  return (
    <div className="min-h-screen bg-canvas">
      <Navigation />

      {/* ─── MOBILE ─── */}
      <main className="sm:hidden pt-16 pb-20">
        <section className="px-4 pt-8 pb-6">
          <span className="text-xs font-black uppercase tracking-wide text-primary">
            Partner Network
          </span>
          <h1 className="text-3xl font-black text-foreground leading-tight mt-2 mb-3">
            Partner with Labtraca
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Scale your health facility or logistics business with our diagnostic network.
          </p>
        </section>

        <section className="px-4 space-y-3 mb-6">
          {partnerTypes.map((pt) => (
            <button
              key={pt.type}
              onClick={() => setSelectedType(pt.type)}
              className={`w-full text-left bg-white border rounded-2xl p-4 shadow-sm transition-all ${
                selectedType === pt.type
                  ? "border-primary ring-2 ring-primary/10"
                  : "border-border"
              }`}
            >
              <div className="flex gap-4">
                <div className={`w-12 h-12 ${pt.color} rounded-xl flex items-center justify-center shrink-0`}>
                  <pt.lucide className="w-6 h-6 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <h3 className="font-bold text-foreground leading-tight">
                      {pt.title}
                    </h3>
                    <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </section>

        <section className="px-4 grid grid-cols-2 gap-3 mb-8">
          {[
            { value: "150+", label: "Partner Labs" },
            { value: "50K+", label: "Tests Completed" },
            { value: "95%", label: "Satisfaction" },
            { value: "30+", label: "Cities Covered" },
          ].map((s) => (
            <div key={s.label} className="bg-white border border-border rounded-2xl p-4">
              <p className="text-2xl font-black text-primary">{s.value}</p>
              <p className="text-[11px] text-muted-foreground uppercase font-bold tracking-wide">
                {s.label}
              </p>
            </div>
          ))}
        </section>

        {selectedType && (
          <section className="px-3 mb-8">
            <div className="px-1 mb-4 flex gap-2 overflow-x-auto pb-1">
              {partnerTypes.map((pt) => (
                <button
                  key={pt.type}
                  onClick={() => setSelectedType(pt.type)}
                  className={`px-4 py-2 rounded-full font-bold text-xs whitespace-nowrap transition-colors ${
                    selectedType === pt.type
                      ? "bg-primary text-white"
                      : "bg-white border border-border text-gray-600"
                  }`}
                >
                  {pt.title}
                </button>
              ))}
            </div>
            {selectedType === "laboratory" && <LaboratoryForm />}
            {selectedType === "hospital" && <HospitalForm />}
            {selectedType === "general" && <GeneralPartnerForm />}
          </section>
        )}
      </main>

      {/* ─── DESKTOP ─── */}
      <main className="hidden sm:block pt-32 pb-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">

          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-black text-foreground mb-4">Partner with Labtraca</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Scale your health facility or logistics business with our enterprise-grade orchestration engine.
            </p>
          </div>

          {/* 3 Partnership Type Cards */}
          <div className="grid grid-cols-3 gap-6 mb-20">
            {partnerTypes.map((pt) => (
              <div
                key={pt.type}
                className="bg-white p-8 rounded-2xl border border-border hover:border-primary transition-all shadow-sm hover:shadow-md"
              >
                <div className={`w-14 h-14 ${pt.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <pt.lucide className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{pt.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{pt.desc}</p>
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
          <div className="bg-canvas rounded-2xl border border-border p-10 grid grid-cols-4 gap-8 text-center">
            {[
              { value: "150+", label: "Partner Labs" },
              { value: "50K+", label: "Tests Completed" },
              { value: "95%", label: "Partner Satisfaction" },
              { value: "30+", label: "Cities Covered" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-black text-primary mb-1">{s.value}</p>
                <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wide">{s.label}</p>
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
