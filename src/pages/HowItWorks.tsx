import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, DollarSign, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-hero-bg to-hero-bg-alt relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
        
        <div className="container mx-auto max-w-4xl text-center relative z-10 space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground animate-fade-in">
            How It Works
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in [animation-delay:200ms]">
            A platform for you to get lab tests faster
          </p>
        </div>
      </section>

      {/* Platform Description */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our app has two main features: the ability to book a licensed medical professional 
            to come to you and perform a lab test, and the ability for medical professionals 
            to accept requests and earn money on their own schedule. Here's how it works:
          </p>
        </div>
      </section>

      {/* For Patients */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            For Patients
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                <Calendar className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-3xl font-black">Book tests available</h3>
              <p className="text-lg text-muted-foreground">
                Easily book a licensed medical professional to come to your home and 
                perform a lab test. Select your test, date, and time.
              </p>
              <Button size="lg" className="rounded-full font-bold">
                Book Now
                <ArrowRight className="ml-2" />
              </Button>
            </div>
            
            <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl h-[400px] flex items-center justify-center shadow-2xl animate-fade-in [animation-delay:200ms]">
              <Calendar className="w-32 h-32 text-primary-foreground" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mt-24">
            <div className="bg-gradient-to-br from-accent to-accent/60 rounded-3xl h-[400px] flex items-center justify-center shadow-2xl order-2 md:order-1 animate-fade-in [animation-delay:200ms]">
              <FileText className="w-32 h-32 text-white" />
            </div>

            <div className="space-y-6 order-1 md:order-2 animate-fade-in">
              <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center">
                <FileText className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-3xl font-black">Get your results</h3>
              <p className="text-lg text-muted-foreground">
                Track the progress of your test and get your results right from your 
                mobile device. Fast, secure, and convenient.
              </p>
              <Button size="lg" className="rounded-full font-bold">
                Track Results
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* For Professionals */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            For Medical Professionals
          </h2>
          
          <div className="space-y-12">
            <div className="bg-primary/5 rounded-3xl p-8 md:p-12 space-y-6">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-8 h-8 text-primary" />
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

            <div className="bg-secondary/5 rounded-3xl p-8 md:p-12 space-y-6">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-8 h-8 text-secondary" />
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
