import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { PartnerRegistrationSection } from "@/components/PartnerRegistrationSection";
import CategoriesSection from "@/components/CategoriesSection";
import { CTASection } from "@/components/CTASection";
import { DownloadAppSection } from "@/components/DownloadAppSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <PartnerRegistrationSection />
        <CategoriesSection />
        <CTASection />
        <DownloadAppSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
