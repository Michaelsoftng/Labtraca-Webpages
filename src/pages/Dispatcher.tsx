import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { DispatcherForm } from "@/components/forms/DispatcherForm";
import DispatcherImage from "@/assets/dispatcher-bike.png";

const Dispatcher = () => {
  return (
    <div className="min-h-screen bg-[#F9F9FF]">
      <Navigation />

      {/* ─── MOBILE ─── */}
      <div className="sm:hidden pt-16">
        <section className="relative min-h-[75vh] flex flex-col justify-end overflow-hidden">
          <img
            src={DispatcherImage}
            alt="Dispatch Fleet"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="relative z-10 p-8 text-white">
            <h1 className="text-3xl font-bold mb-3 leading-tight">
              Deliver the Future of Healthcare.
            </h1>
            <p className="text-white/80 mb-8 text-sm leading-relaxed">
              Become a Labtraca Logistics Officer. High-speed, medical-grade transport.
            </p>
            <a href="#apply-form">
              <button className="bg-primary w-full py-4 rounded-xl font-bold text-white text-base">
                Apply Now
              </button>
            </a>
          </div>
        </section>

        <div id="apply-form" className="px-4 py-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Join the Fleet</h2>
          <p className="text-sm text-gray-500 mb-8">
            Complete your registration to start dispatching with Labtraca.
          </p>
          <DispatcherForm />
        </div>
      </div>

      {/* ─── DESKTOP ─── */}
      <div className="hidden sm:block">
        {/* Full-bleed dark hero */}
        <section className="relative min-h-[75vh] flex items-center overflow-hidden pt-16">
          <img
            src={DispatcherImage}
            alt="Dispatch Fleet"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a1a] via-[#0a1a1a]/70 to-transparent" />
          <div className="relative z-10 container mx-auto max-w-6xl px-8">
            <div className="max-w-xl">
              <h1 className="text-6xl font-black text-white leading-tight mb-6">
                Deliver the Future.
              </h1>
              <p className="text-white/80 text-xl mb-10 leading-relaxed">
                Join the elite fleet of Labtraca Logistics Officers. High-yield compensation and medical-grade training included.
              </p>
              <a href="#apply-form">
                <button className="bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-lg">
                  Start Application <ArrowRight className="w-5 h-5" />
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Perks row */}
        <section className="bg-white py-14 px-8">
          <div className="container mx-auto max-w-6xl grid grid-cols-3 gap-8">
            {[
              { title: "Competitive Pay", desc: "Industry-leading compensation with weekly payouts and performance bonuses." },
              { title: "Medical-Grade Training", desc: "Full onboarding on cold-chain protocols and clinical transport standards." },
              { title: "Flexible Hours", desc: "Work on your schedule. Accept requests when you want, where you want." },
            ].map((p) => (
              <div key={p.title} className="bg-[#F9F9FF] rounded-2xl border border-gray-200 p-7">
                <div className="w-10 h-10 rounded-xl bg-[#d1e7e7] flex items-center justify-center mb-4">
                  <span className="w-4 h-4 rounded-full bg-primary" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Application form */}
        <section id="apply-form" className="py-20 px-8 bg-[#F9F9FF]">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-gray-900 mb-3">
                Join the Fleet
              </h2>
              <p className="text-gray-500 text-lg">
                Complete your registration to start dispatching with Labtraca.
              </p>
            </div>
            <DispatcherForm />
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Dispatcher;
