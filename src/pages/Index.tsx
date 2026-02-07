import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { DownloadAppSection } from "@/components/DownloadAppSection";
import { PartnerRegistrationSection } from "@/components/PartnerRegistrationSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import CategoriesSection from "@/components/CategoriesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <CategoriesSection />
        <HowItWorksSection />
        <FeaturesSection />
        <DownloadAppSection />
        <PartnerRegistrationSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
