import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  FlaskConical,
  PersonStanding,
  Pipette,
  Network,
  CheckCircle2,
  Code2,
  BarChart3,
  Database,
  ShieldCheck,
  ClipboardList,
  Bike,
  ScanLine,
  PackageCheck,
  ArrowRight,
  LayoutGrid,
} from "lucide-react";
import { Link } from "react-router-dom";

import LabInterior from "@/assets/A clean, modern medical laboratory interior with advanced diagnostic equipment and robotic arms, blue and white clinical aesthetic..svg";
import DoctorImage from "@/assets/A professional black female doctor in a white lab coat, smiling confidently in a modern clinical laboratory setting.svg";
import DispatchRider from "@/assets/A black dispatch rider on a modern delivery motorbike, wearing professional logistics gear with medical delivery boxes.svg";
import PhlebotomistImage from "@/assets/A professional black female phlebotomist or nurse in a clean white lab coat and blue gloves, carefully handling a medical specimen container..svg";

const desktopSteps = [
  {
    icon: ClipboardList,
    number: "1.",
    title: "Request",
    description:
      "Schedule diagnostics collection via app or integrated enterprise dashboard.",
  },
  {
    icon: Bike,
    number: "2.",
    title: "Dispatch",
    description:
      "Vetted courier or dispatch rider arrives with specialized temperature-controlled kits.",
  },
  {
    icon: ScanLine,
    number: "3.",
    title: "Validation",
    description:
      "Secure scanning and chain-of-custody logging for all diagnostics at every touchpoint.",
  },
  {
    icon: PackageCheck,
    number: "4.",
    title: "Delivery",
    description:
      "Handover to clinical destination with instant digital proof of delivery.",
  },
];

const mobileSteps = [
  {
    num: "1",
    title: "Request Service",
    desc: "Select your required medical service through our clinical portal.",
  },
  {
    num: "2",
    title: "Integrated Diagnostics Logistics",
    desc: "Our network utilizes medical-grade infrastructure for secure health service fulfillment.",
  },
  {
    num: "3",
    title: "Ecosystem Fulfillment",
    desc: "Complete cycle verification with end-to-end documentation across the collaborative network.",
  },
];

const HealthEcosystem = () => {
  return (
    <div className="min-h-screen bg-canvas">
      <Navigation />

      {/* ══════════════════════════════════════════
          MOBILE LAYOUT  (hidden at lg+)
      ══════════════════════════════════════════ */}

      {/* Mobile — Hero */}
      <section className="lg:hidden pt-[72px] pb-4 px-4 bg-canvas">
        <div className="py-5 space-y-1.5">
          <h1 className="text-2xl font-black text-foreground leading-tight">
            Our Specialized Services
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Comprehensive Diagnostics &amp; Logistics for Modern Healthcare.
          </p>
        </div>
      </section>

      {/* Mobile — Service Cards */}
      <section className="lg:hidden px-4 pb-6 bg-canvas space-y-4">
        {/* Lab Test Collection */}
        <div className="bg-white border border-border rounded-2xl p-5">
          <div className="flex items-start justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
              <FlaskConical className="w-5 h-5 text-muted-foreground" />
            </div>
            <span className="text-xs font-semibold text-white bg-primary px-3 py-1 rounded-full">
              High Demand
            </span>
          </div>
          <h3 className="font-black text-foreground text-xl mb-2">
            Lab Test Collection
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Secure diagnostics transport of biological samples from patient to
            laboratory with real-time temperature tracking.
          </p>
          <Link to="/app" className="block">
            <Button className="w-full rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold h-11">
              Learn More
            </Button>
          </Link>
        </div>

        {/* Dispatch Riders */}
        <div className="bg-white border border-border rounded-2xl overflow-hidden">
          <img
            src={DispatchRider}
            alt="Dispatch rider"
            className="w-full h-44 object-cover"
          />
          <div className="p-5">
            <h3 className="font-black text-foreground text-xl mb-2">
              Dispatch Riders
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Rapid response diagnostics logistics team equipped for
              time-critical medical deliveries and urban navigation.
            </p>
            <Button
              variant="outline"
              className="w-full rounded-xl border-primary text-primary hover:bg-primary/5 font-semibold h-11"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Pharmacy Collaboration */}
        <div className="bg-white border border-border rounded-2xl p-5">
          <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center mb-3">
            <Network className="w-5 h-5 text-muted-foreground" />
          </div>
          <h3 className="font-black text-foreground text-xl mb-2">
            Pharmacy Collaboration
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            A collaborative diagnostics ecosystem enhancing health service
            delivery through integrated pharmacy network solutions.
          </p>
          <Button
            variant="outline"
            className="w-full rounded-xl border-primary text-primary hover:bg-primary/5 font-semibold h-11"
          >
            Learn More
          </Button>
        </div>

        {/* Mobile Phlebotomy */}
        <div className="bg-white border border-border rounded-2xl p-5">
          <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center mb-3">
            <Pipette className="w-5 h-5 text-muted-foreground" />
          </div>
          <h3 className="font-black text-foreground text-xl mb-2">
            Mobile Phlebotomy
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Certified professionals dispatched for professional blood draws and
            diagnostics sample preparation at your location.
          </p>
          <Button
            variant="outline"
            className="w-full rounded-xl border-primary text-primary hover:bg-primary/5 font-semibold h-11"
          >
            Learn More
          </Button>
        </div>

        {/* Enterprise Solutions */}
        <div className="bg-navy rounded-2xl p-5">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-3">
            <LayoutGrid className="w-5 h-5 text-white" />
          </div>
          <h3 className="font-black text-white text-xl mb-2">
            Enterprise Solutions
          </h3>
          <p className="text-sm text-white/70 leading-relaxed mb-4">
            Bulk diagnostics logistics infrastructure for hospitals and clinics
            requiring high-volume daily sample rotation.
          </p>
          <Button className="w-full rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold h-11">
            Inquire Now
          </Button>
        </div>
      </section>

      {/* Mobile — How it works */}
      <section className="lg:hidden px-4 py-8 bg-white">
        <h2 className="text-xl font-black text-foreground mb-6">How it works</h2>
        <div className="space-y-5">
          {mobileSteps.map((step) => (
            <div key={step.num} className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-bold">{step.num}</span>
              </div>
              <div>
                <h4 className="font-bold text-foreground text-sm leading-snug">
                  {step.title}
                </h4>
                <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile — Simple Footer */}
      <footer className="lg:hidden border-t border-gray-100 px-4 pt-8 pb-24 bg-white">
        <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center mb-4">
          <Link
            to="/about"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            About Us
          </Link>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Support
          </a>
          <a
            href="https://sites.google.com/view/labtraca-user/home"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Privacy Policy
          </a>
          <Link
            to="/terms-conditions"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Terms of Service
          </Link>
        </div>
        <p className="text-xs text-gray-400 text-center">
          © 2024 Labtraca Medical Logistics
        </p>
      </footer>

      {/* ══════════════════════════════════════════
          DESKTOP LAYOUT  (hidden below lg)
      ══════════════════════════════════════════ */}

      {/* Desktop — Hero */}
      <section className="hidden lg:block pt-24 pb-0 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl py-12 md:py-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="space-y-6">
              <span className="inline-block border border-primary text-primary text-[11px] font-semibold px-3 py-1 rounded-full tracking-widest uppercase">
                Clinical Services
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight">
                Comprehensive Diagnostics &amp; Logistics for Modern Healthcare.
              </h1>
              <p className="text-muted-foreground text-base leading-relaxed max-w-md">
                Labtraca bridges the gap between clinical excellence and
                logistical precision. We provide secure, rapid transport for
                diagnostics and medical assets across the entire healthcare
                ecosystem.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link to="/app">
                  <Button className="rounded-full px-6 py-3 h-auto text-sm font-semibold bg-primary hover:bg-primary/90 text-white">
                    Book Collection
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="rounded-full px-6 py-3 h-auto text-sm font-semibold border-gray-300 text-gray-700 hover:border-gray-400"
                >
                  Enterprise Inquiry
                </Button>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl">
              <img
                src={LabInterior}
                alt="Modern medical laboratory"
                className="w-full h-auto object-cover max-h-[380px]"
              />
              <div className="absolute bottom-4 left-4 bg-white rounded-xl px-4 py-2.5 flex items-center gap-2.5 shadow-md">
                <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground leading-tight">
                    ISO Certified
                  </p>
                  <p className="text-[10px] text-muted-foreground leading-tight">
                    Clinical-Grade Logistics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop — Services Bento Grid */}
      <section className="hidden lg:block py-16 md:py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-5 gap-4 auto-rows-fr">
            {/* Lab Test Collection */}
            <div className="col-span-2 bg-white border border-gray-100 rounded-2xl p-6 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <FlaskConical className="w-5 h-5 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="font-black text-foreground text-lg">
                  Lab Test Collection
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  On-demand diagnostics logistics for patients. We collect from
                  your doorstep and deliver to certified partner laboratories
                  within hours.
                </p>
              </div>
              <ul className="space-y-1.5">
                {[
                  "Temperature Controlled",
                  "Real-time Tracking",
                  "Digital Chain of Custody",
                ].map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/app"
                className="text-sm text-primary font-semibold hover:underline mt-auto flex items-center gap-1"
              >
                Schedule a pick-up <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Centre doctor image */}
            <div className="col-span-1 overflow-hidden rounded-2xl">
              <img
                src={DoctorImage}
                alt="Healthcare professional"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Rapid Dispatch */}
            <div className="col-span-2 bg-primary rounded-2xl p-6 flex flex-col gap-4 text-white overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <PersonStanding className="w-5 h-5 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="font-black text-lg">Rapid Dispatch</h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  Medical-grade dispatch riders for fast, secure delivery of
                  diagnostics and clinical samples across the city.
                </p>
              </div>
              <div className="mt-auto overflow-hidden rounded-xl -mx-2 -mb-2">
                <img
                  src={DispatchRider}
                  alt="Dispatch rider"
                  className="w-full h-[160px] object-cover"
                />
              </div>
            </div>

            {/* Phlebotomy Care */}
            <div
              className="col-span-2 rounded-2xl p-6 flex flex-col gap-4 overflow-hidden border border-primary/10"
              style={{ backgroundColor: "hsl(180 60% 96%)" }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                <Pipette className="w-5 h-5 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="font-black text-foreground text-lg">
                  Phlebotomy Care
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Licensed phlebotomists delivered to your location.
                  High-quality diagnostics collection in the comfort of your
                  home or office.
                </p>
              </div>
              <div className="mt-auto overflow-hidden rounded-xl -mx-2 -mb-2">
                <img
                  src={PhlebotomistImage}
                  alt="Phlebotomist at work"
                  className="w-full h-[160px] object-cover"
                />
              </div>
            </div>

            {/* Enterprise Diagnostics */}
            <div className="col-span-3 bg-navy rounded-2xl p-6 flex gap-6 text-white overflow-hidden">
              <div className="flex-1 flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Network className="w-5 h-5 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-black text-lg">Enterprise Diagnostics</h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Integrated B2B logistics and diagnostics support for
                    hospitals, diagnostic centers, and pharmaceutical
                    manufacturers. Scalable infrastructure for multi-site
                    operations.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-auto">
                  {[
                    { icon: Code2, label: "API Integration" },
                    { icon: BarChart3, label: "Custom Reporting" },
                    { icon: Database, label: "Storage Hubs" },
                    { icon: ShieldCheck, label: "HIPAA Compliant" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2">
                      <Icon className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                      <span className="text-xs text-white/80">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-[160px] flex-shrink-0 overflow-hidden rounded-xl">
                <img
                  src={LabInterior}
                  alt="Enterprise diagnostics"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop — Process */}
      <section className="hidden lg:block py-16 md:py-20 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14 space-y-3">
            <h2 className="text-2xl md:text-3xl font-black text-foreground">
              Precision Diagnostics &amp; Logistics. Simplified.
            </h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
              Our systematic approach ensures that every sample and clinical
              asset reaches its destination with medical-grade integrity.
            </p>
          </div>
          <div className="relative">
            <div className="absolute top-8 left-[12%] right-[12%] h-px bg-gray-200" />
            <div className="grid grid-cols-4 gap-8">
              {desktopSteps.map((step, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center space-y-3"
                >
                  <div className="w-16 h-16 rounded-full border-2 border-primary/30 bg-white flex items-center justify-center relative z-10">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-black text-sm text-foreground">
                    {step.number} {step.title}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed max-w-[160px]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Desktop — CTA */}
      <section className="hidden lg:block py-16 md:py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div
            className="rounded-2xl md:rounded-3xl py-16 px-8 md:px-16 text-center space-y-6"
            style={{ backgroundColor: "#E1E8FD" }}
          >
            <h2 className="text-2xl md:text-3xl font-black text-foreground max-w-xl mx-auto leading-tight">
              Ready to optimize your diagnostics logistics?
            </h2>
            <p className="text-gray-600 text-base max-w-lg mx-auto leading-relaxed">
              Join 500+ clinics and health providers trusting Labtraca for
              secure healthcare and diagnostics delivery support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link to="/app">
                <Button className="rounded-full px-8 py-3 h-auto text-sm font-semibold bg-primary hover:bg-primary/90 text-white min-w-[180px]">
                  Register as Patient
                </Button>
              </Link>
              <Link to="/partner-with-us">
                <Button
                  variant="outline"
                  className="rounded-full px-8 py-3 h-auto text-sm font-semibold border-gray-300 text-gray-700 hover:border-gray-400 min-w-[180px]"
                >
                  Partner with Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop — Footer */}
      <div className="hidden lg:block">
        <Footer />
      </div>
    </div>
  );
};

export default HealthEcosystem;
