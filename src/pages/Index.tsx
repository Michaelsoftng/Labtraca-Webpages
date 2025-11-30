import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { PartnersSection } from "@/components/PartnersSection";
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
        <PartnersSection />
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
