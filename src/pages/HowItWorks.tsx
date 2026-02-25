import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, ArrowRight, Search, Syringe, FlaskConical, ClipboardCheck } from "lucide-react";
import { Naira } from "@/components/icons/Naira";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 md:pt-32 md:pb-20 md:px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-black animate-fade-in">
            How It Works
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in [animation-delay:200ms]">
            A platform for you to get lab tests faster
          </p>
        </div>
      </section>

      {/* Platform Description */}
      <section className="py-12 px-4 md:py-20 md:px-6">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our app has two main features: the ability to book a licensed medical professional
            to come to you and perform a lab test, and the ability for medical professionals
            to accept requests and earn money on their own schedule. Here's how it works:
          </p>
        </div>
      </section>

      {/* For Patients */}
      <section className="py-12 px-4 md:py-20 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            For Patients
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Step 1: Search */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow animate-fade-in">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Search className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-3">
                  <div className="text-sm font-bold text-primary">Step 1</div>
                  <h3 className="text-2xl font-black">Search for a test</h3>
                  <p className="text-muted-foreground">
                    Find the test you want to get your sample on from the available list of tests.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2: Collection */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow animate-fade-in [animation-delay:100ms]">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Syringe className="w-8 h-8 text-accent" />
                </div>
                <div className="space-y-3">
                  <div className="text-sm font-bold text-accent">Step 2</div>
                  <h3 className="text-2xl font-black">A phlebotomist collects your sample</h3>
                  <p className="text-muted-foreground">
                    A trained phlebotomist closest to you collects your test sample
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3: Testing */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow animate-fade-in [animation-delay:200ms]">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <FlaskConical className="w-8 h-8 text-accent" />
                </div>
                <div className="space-y-3">
                  <div className="text-sm font-bold text-primary">Step 3</div>
                  <h3 className="text-2xl font-black">Get your samples tested</h3>
                  <p className="text-muted-foreground">
                    Your test samples gets sent to your facility of choice to get tested.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4: Result */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow animate-fade-in [animation-delay:300ms]">
              <div className="space-y-4">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <ClipboardCheck className="w-8 h-8 text-accent" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <div className="text-sm font-bold text-accent">Step 4</div>
                    <h3 className="text-2xl font-black">Collect your result</h3>
                    <p className="text-muted-foreground">
                      Track your test progress and await your result from your home.
                    </p>
                  </div>
                </div>
                <Button size="lg" className="rounded-full font-bold w-full">
                  Track Results
                  <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Professionals */}
      <section className="py-12 px-4 md:py-20 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            For Medical Professionals
          </h2>

          <div className="space-y-12">
            <div className="bg-primary/5 rounded-3xl p-8 md:p-12 space-y-6">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Naira className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-black">Drive more, earn more</h3>
                  <p className="text-lg text-muted-foreground">
                    Our thousands of patients will send you plenty of ride requests.
                    Maximize your earning potential with flexible scheduling.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-3xl p-8 md:p-12 space-y-6">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-black">Set when you are available</h3>
                  <p className="text-lg text-muted-foreground">
                    Drive on your own terms and schedule. Work around your lifestyle
                    and choose when you want to accept requests.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="rounded-full font-bold text-lg px-10 py-6 h-auto">
              Join as Professional
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
