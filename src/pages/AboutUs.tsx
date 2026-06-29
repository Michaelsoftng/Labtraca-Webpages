import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShieldCheck, HeartHandshake, Zap, Crosshair } from "lucide-react";
import { Link } from "react-router-dom";
import PhoneMockup from "@/assets/about.svg";
import LabImage from "@/assets/about bg.svg";

/* ─── Shared sub-components ─────────────────────────── */

const HeroBadge = () => (
  <span className="inline-block border border-primary text-primary text-xs font-semibold px-3 py-1 rounded-full tracking-wide">
    Clinical Precision
  </span>
);

const PhoneCard = () => (
  <div className="space-y-4">
    <div className="relative overflow-hidden rounded-2xl bg-navy min-h-[240px] flex items-center justify-center">
      <img
        src={PhoneMockup}
        alt="App mockup"
        className="w-full h-auto object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-navy via-navy/60 to-transparent">
        <p className="text-primary text-xs font-semibold tracking-wide uppercase mb-1">
          Our Vision
        </p>
        <p className="text-white font-bold text-lg">Democratizing Healthcare</p>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-muted border border-gray-100 rounded-2xl p-5 space-y-2">
        <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
          <Crosshair className="w-4 h-4 text-primary" />
        </div>
        <h4 className="font-bold text-foreground text-sm">Precision</h4>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Surgical precision in temperature control.
        </p>
      </div>
      <div className="bg-muted border border-gray-100 rounded-2xl p-5 space-y-2">
        <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
          <Zap className="w-4 h-4 text-primary" />
        </div>
        <h4 className="font-bold text-foreground text-sm">Speed</h4>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Fastest possible laboratory turnover times.
        </p>
      </div>
    </div>
  </div>
);

/* ─── Page ───────────────────────────────────────────── */

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* ── MOBILE Hero — white bg, dark text ── */}
      <section className="pt-24 pb-0 lg:hidden">
        <div className="container mx-auto max-w-6xl py-10 space-y-5">
          <HeroBadge />
          <h1 className="text-3xl font-black text-foreground leading-tight">
            Revolutionizing Medical Logistics through{" "}
            <span className="text-primary">Clinical Precision.</span>
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed">
            At Labtraca, we don't just move samples; we move lives. Our mission
            is to bridge the gap between diagnostics and patient care with
            unmatched speed and absolute safety.
          </p>
          <Link to="/app">
            <Button className="rounded-full px-7 py-3 h-auto text-sm font-semibold bg-primary hover:bg-primary/90 text-white">
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* ── MOBILE Phone card — between hero text and origin story ── */}
      <section className="py-6 lg:hidden">
        <div className="container mx-auto max-w-6xl">
          <PhoneCard />
        </div>
      </section>

      {/* ── DESKTOP Hero — dark image, white text ── */}
      <section className="pt-24 pb-0 px-4 md:px-8 hidden lg:block">
        <div className="container mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl min-h-[420px]">
            <img
              src={LabImage}
              alt="Medical laboratory"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy/75" />
            <div className="relative z-10 p-10 md:p-14 flex flex-col justify-end min-h-[420px]">
              <div className="max-w-2xl space-y-5">
                <HeroBadge />
                <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                  Revolutionizing Medical Logistics
                  <br />
                  through{" "}
                  <span className="text-primary">Clinical Precision.</span>
                </h1>
                <p className="text-gray-300 text-base leading-relaxed max-w-lg">
                  At Labtraca, we don't just move samples; we move lives. Our
                  mission is to bridge the gap between diagnostics and patient
                  care with unmatched speed and absolute safety.
                </p>
                <Link to="/app">
                  <Button className="rounded-full px-7 py-3 h-auto text-sm font-semibold bg-primary hover:bg-primary/90 text-white mt-1">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Origin Story — desktop: two-col (text | phone card), mobile: text only ── */}
      <section className="py-16 md:py-24 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left — text */}
            <div className="space-y-7">
              <span className="inline-block border border-primary text-primary text-xs font-semibold px-3 py-1 rounded-full tracking-wide">
                Our Origin Story
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-foreground leading-tight">
                Born from a need for{" "}
                <span className="text-primary">Reliability.</span>
              </h2>
              <div className="w-8 h-1 bg-primary rounded-full" />
              <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                <p>
                  Labtraca was founded by a team of clinical pathologists and
                  logistics experts who realized that the weakest link in modern
                  healthcare wasn't the diagnostic technology itself, but the
                  journey of the sample from patient to lab.
                </p>
                <p>
                  We saw delays that cost critical time and temperature
                  excursions that compromised vital data. We decided to fix it
                  by building a logistics ecosystem specifically designed for
                  the clinical environment.
                </p>
              </div>
              <div className="flex gap-10 pt-2 border-t border-gray-100">
                {[
                  { value: "500k+", label: "Samples" },
                  { value: "99.9%", label: "Integrity" },
                  { value: "15min", label: "Avg Pickup" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-black text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — phone card, desktop only */}
            <div className="hidden lg:block">
              <PhoneCard />
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-16 md:py-20 md:px-8 lg:bg-white bg-card-surface">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl md:text-3xl font-black text-foreground mb-3">
            Values that Drive us Every Day
          </h2>
          <p className="text-muted-foreground text-base max-w-lg mx-auto mb-5">
            Our culture is built on the foundation of clinical ethics and
            high-performance logistics engineering.
          </p>
          <div className="w-8 h-1 bg-primary rounded-full mx-auto mb-12" />
          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {[
              {
                icon: ShieldCheck,
                title: "Trust",
                description:
                  "Transparency is at our core. Labs and patients see exactly where their samples are, every step of the way.",
              },
              {
                icon: HeartHandshake,
                title: "Integrity",
                description:
                  "We handle every specimen with the reverence it deserves, adhering to strict HIPAA and clinical compliance protocols.",
              },
            ].map((val) => (
              <div
                key={val.title}
                className="bg-white border border-gray-100 rounded-2xl p-7 flex items-start gap-4 text-left hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <val.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-bold text-foreground">{val.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why We Do This ── */}
      <section className="py-16 md:py-20 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-black text-foreground">
                Why We Do This
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Behind every test tube is a person waiting for answers. We do
                this because we believe logistics should never be the reason a
                patient waits for a diagnosis or misses a treatment window.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: HeartHandshake,
                    title: "Patient-First Culture",
                    description:
                      "Every courier is trained in medical handling and patient privacy.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Clinical Leadership",
                    description:
                      "Our advisory board includes leading pathologists and diagnostic researchers.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl md:rounded-3xl hidden lg:block">
              <img
                src={LabImage}
                alt="Laboratory"
                className="w-full h-full object-cover max-h-[340px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA — desktop only ── */}
      <section className="hidden md:block py-16 md:py-20 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-navy rounded-2xl md:rounded-3xl py-16 md:py-20 px-8 md:px-14 text-center space-y-6">
            <h2 className="text-2xl md:text-4xl font-black text-white leading-tight max-w-2xl mx-auto">
              Ready to Experience True Clinical Logistics?
            </h2>
            <p className="text-gray-400 text-base max-w-lg mx-auto leading-relaxed">
              Join over 200 labs and thousands of patients who trust Labtraca
              for their diagnostic transport needs within our collaborative
              pharmacy ecosystem enhancing health service delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link to="/app">
                <Button className="rounded-full px-8 py-3 h-auto text-sm font-semibold bg-primary hover:bg-primary/90 text-white min-w-[180px]">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  variant="outline"
                  className="rounded-full px-8 py-3 h-auto text-sm font-semibold border-white/30 text-white hover:bg-white/10 min-w-[180px] bg-transparent"
                >
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
