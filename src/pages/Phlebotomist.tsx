import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ShieldCheck, Calendar, TrendingUp, GraduationCap, Wrench, CheckCircle2, ArrowRight } from "lucide-react";
import { PhlebotomistForm } from "@/components/forms/PhlebotomistForm";
import { submitToGoogleSheet } from "@/lib/googleSheets";
import { toast } from "sonner";
// @ts-ignore
import phlebotomistImg from "@/assets/A professional black female phlebotomist or nurse in a clean white lab coat and blue gloves, carefully handling a medical specimen container..svg";

const Phlebotomist = () => {
  const [desktopStep, setDesktopStep] = useState(1);
  const [mobileSubmitting, setMobileSubmitting] = useState(false);
  const [mobileForm, setMobileForm] = useState({
    fullName: "",
    email: "",
    certNumber: "",
    availability: { day: false, night: false, weekend: false, onCall: false },
  });

  const handleMobileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMobileSubmitting(true);
    try {
      await submitToGoogleSheet("Phlebotomist", {
        fullName: mobileForm.fullName,
        email: mobileForm.email,
        licenseNumber: mobileForm.certNumber,
        availability: Object.entries(mobileForm.availability)
          .filter(([, v]) => v)
          .map(([k]) => k)
          .join(", ") || "None selected",
      });
      toast.success("Application submitted successfully!");
      setMobileForm({ fullName: "", email: "", certNumber: "", availability: { day: false, night: false, weekend: false, onCall: false } });
    } catch {
      toast.error("Failed to submit. Please try again.");
    } finally {
      setMobileSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-canvas">
      <Navigation />

      {/* ─── MOBILE ─── */}
      <div className="sm:hidden pt-16">
        {/* Hero image */}
        <div className="relative w-full h-64 overflow-hidden">
          <img src={phlebotomistImg} alt="Phlebotomist" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-5">
            <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
              Careers
            </span>
            <h1 className="text-white text-[22px] font-bold leading-tight">
              Join our Team of Certified Phlebotomists.
            </h1>
          </div>
        </div>

        {/* Feature cards */}
        <div className="px-4 py-6 space-y-3">
          {[
            {
              Icon: ShieldCheck,
              title: "Clinical Excellence",
              desc: "We uphold the highest medical standards in diagnostic specimen collection and handling.",
            },
            {
              Icon: Calendar,
              title: "Flexible Scheduling",
              desc: "Choose shifts that fit your lifestyle. We offer part-time, full-time, and per-diem opportunities.",
            },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="bg-white border border-border rounded-2xl p-5 flex gap-4 items-start shadow-sm">
              <div className="w-10 h-10 rounded-full bg-teal-surface flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Apply Now form */}
        <div className="mx-4 mb-8 bg-white rounded-2xl border border-border p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-foreground mb-1">Apply Now</h2>
          <p className="text-sm text-muted-foreground mb-6">Complete the form below to start your journey with Labtraca.</p>
          <form onSubmit={handleMobileSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-gray-600 block mb-1.5">Full Name</label>
              <input
                type="text"
                placeholder="Jane Doe"
                value={mobileForm.fullName}
                onChange={(e) => setMobileForm({ ...mobileForm, fullName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-canvas text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-600 block mb-1.5">Email Address</label>
              <input
                type="email"
                placeholder="jane.doe@example.com"
                value={mobileForm.email}
                onChange={(e) => setMobileForm({ ...mobileForm, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-canvas text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-600 block mb-1.5">Certification Number</label>
              <input
                type="text"
                placeholder="CPT-123456"
                value={mobileForm.certNumber}
                onChange={(e) => setMobileForm({ ...mobileForm, certNumber: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-border bg-canvas text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-600 block mb-2">Availability</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { key: "day", label: "Day" },
                  { key: "night", label: "Night" },
                  { key: "weekend", label: "Weekend" },
                  { key: "onCall", label: "On-Call" },
                ].map((opt) => (
                  <label
                    key={opt.key}
                    className="flex items-center gap-2.5 border border-border rounded-xl px-4 py-3 cursor-pointer bg-canvas"
                  >
                    <input
                      type="checkbox"
                      className="accent-primary w-4 h-4 rounded"
                      checked={mobileForm.availability[opt.key as keyof typeof mobileForm.availability]}
                      onChange={(e) =>
                        setMobileForm({
                          ...mobileForm,
                          availability: { ...mobileForm.availability, [opt.key]: e.target.checked },
                        })
                      }
                    />
                    <span className="text-sm text-gray-700">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>
            <button
              type="submit"
              disabled={mobileSubmitting}
              className="w-full bg-primary text-white py-4 rounded-xl font-bold text-base active:scale-[0.98] transition-transform shadow-md mt-2 disabled:opacity-70"
            >
              {mobileSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>

        {/* Why Work With Us */}
        <div className="px-4 pb-10">
          <h2 className="text-2xl font-bold text-foreground mb-5">Why Work With Us?</h2>
          <div className="space-y-3">
            {[
              {
                Icon: TrendingUp,
                title: "Competitive Pay",
                desc: "Industry-leading compensation packages and benefit options.",
                bg: "bg-primary",
                iconBg: "bg-white/20",
                iconColor: "text-white",
                titleColor: "text-white",
                descColor: "text-white/80",
              },
              {
                Icon: GraduationCap,
                title: "CME Support",
                desc: "Stipends for continuing medical education and license renewals.",
                bg: "bg-teal-surface",
                iconBg: "bg-primary/10",
                iconColor: "text-primary",
                titleColor: "text-foreground",
                descColor: "text-gray-600",
              },
              {
                Icon: Wrench,
                title: "Modern Equipment",
                desc: "Access to the latest precision collection tools and logistics software.",
                bg: "bg-white",
                iconBg: "bg-teal-surface",
                iconColor: "text-primary",
                titleColor: "text-foreground",
                descColor: "text-muted-foreground",
              },
            ].map(({ Icon, title, desc, bg, iconBg, iconColor, titleColor, descColor }) => (
              <div key={title} className={`${bg} border border-border rounded-2xl p-5 flex gap-4 items-start`}>
                <div className={`w-10 h-10 rounded-full ${iconBg} flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-5 h-5 ${iconColor}`} />
                </div>
                <div>
                  <h3 className={`font-bold mb-1 ${titleColor}`}>{title}</h3>
                  <p className={`text-sm leading-relaxed ${descColor}`}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── DESKTOP ─── */}
      <div className="hidden sm:block">
        {/* Hero */}
        <section className="pt-32 pb-20 px-4 md:px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <span className="text-xs font-bold text-primary uppercase tracking-widest">
                  Careers in Labtraca
                </span>
                <h1 className="text-5xl font-black text-foreground leading-tight">
                  Join our Team of{" "}
                  <span className="text-primary">
                    Certified <br />Phlebotomists
                  </span>
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                  Advance your career with a leader in medical logistics. We offer professional growth, clinical excellence, and the flexibility you need to balance life and work.
                </p>
                <div className="flex gap-3 pt-1">
                  <a href="#apply">
                    <button className="bg-primary text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-md">
                      Apply Now <ArrowRight className="w-4 h-4" />
                    </button>
                  </a>
                  <a href="#benefits">
                    <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-bold hover:border-primary hover:text-primary transition-colors">
                      View Benefits
                    </button>
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden h-[420px]">
                  <img
                    src={phlebotomistImg}
                    alt="Certified Phlebotomist"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-16 bg-white/95 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 shadow-lg border border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-teal-surface flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">Clinical Precision</p>
                    <p className="text-xs text-muted-foreground">Accredited Laboratory standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Labtraca — bento grid */}
        <section id="benefits" className="py-20 px-4 md:px-8 bg-canvas">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-black text-foreground mb-3">Why Labtraca?</h2>
              <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
                We provide the environment and resources you need to deliver high-quality patient care while maintaining professional autonomy.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Clinical Excellence */}
              <div className="bg-white border border-border rounded-2xl p-7 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-teal-surface flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Clinical Excellence</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Work with state-of-the-art diagnostic equipment and standardized protocols that ensure patient safety and specimen integrity at every step.
                </p>
                <div className="space-y-2">
                  {["ISO Certified Lab", "Strict 6A Protocols", "Digital Tracking"].map((item) => (
                    <div key={item} className="flex items-center gap-2 border border-border rounded-lg px-4 py-2.5 bg-canvas">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Flexible Scheduling */}
              <div className="bg-white border border-border rounded-2xl p-7 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-teal-surface flex items-center justify-center mb-4">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Flexible Scheduling</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Pick shifts that fit your life. Our smart scheduling app allows you to manage your availability in real-time.
                </p>
              </div>

              {/* Professional Growth */}
              <div className="bg-white border border-border rounded-2xl p-7 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-teal-surface flex items-center justify-center mb-4">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Professional Growth</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Access continuing education credits and clear pathways to lead phlebotomist and supervisory roles.
                </p>
              </div>

              {/* CTA card */}
              <div className="bg-primary rounded-2xl p-7 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Ready to make an impact?</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Our recruitment process is streamlined for clinical professionals.
                  </p>
                </div>
                <a href="#apply">
                  <button className="mt-8 border-2 border-white text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-white hover:text-primary transition-colors">
                    Start Application
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply" className="py-20 px-4 md:px-8 bg-white">
          <div className="container mx-auto max-w-2xl">
            {desktopStep === 1 ? (
              <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
                <div className="h-1.5 bg-muted">
                  <div className="h-full bg-primary w-1/3 rounded-r-full" />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-1">Personal Information</h2>
                  <p className="text-sm text-muted-foreground mb-7">Tell us about yourself so we can get in touch.</p>
                  <form
                    className="space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setDesktopStep(2);
                    }}
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-gray-600 block mb-1.5">First Name</label>
                        <input type="text" placeholder="Jane" required className="w-full px-4 py-3 rounded-lg border border-border bg-canvas text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-gray-600 block mb-1.5">Last Name</label>
                        <input type="text" placeholder="Doe" required className="w-full px-4 py-3 rounded-lg border border-border bg-canvas text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-600 block mb-1.5">Email Address</label>
                      <input type="email" placeholder="jane.doe@example.com" required className="w-full px-4 py-3 rounded-lg border border-border bg-canvas text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-600 block mb-1.5">Phone Number</label>
                      <input type="tel" placeholder="(555) 000-0000" required className="w-full px-4 py-3 rounded-lg border border-border bg-canvas text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                    </div>
                    <div className="flex justify-end pt-2">
                      <button type="submit" className="bg-primary text-white px-6 py-3 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-md">
                        Next Step <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              <div>
                <button
                  onClick={() => setDesktopStep(1)}
                  className="mb-6 text-sm text-primary font-semibold flex items-center gap-1 hover:underline"
                >
                  ← Back
                </button>
                <PhlebotomistForm />
              </div>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Phlebotomist;
