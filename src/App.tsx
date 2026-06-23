import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
// Marketing / public pages
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import HowItWorks from "./pages/HowItWorks";
import Partners from "./pages/Partners";
import PartnerWithUs from "./pages/PartnerWithUs";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import HealthEcosystem from "./pages/HealthEcosystem";
import TermsConditions from "./pages/TermsConditions";

// App / catalog pages
import OurApp from "./pages/OurApp";
import TestCatalog from "./pages/TestCatalog";
import PackageCatalog from "./pages/PackageCatalog";
import ComparePrices from "./pages/ComparePrices";
import Consultation from "./pages/Consultation";
import DoctorDetails from "./pages/DoctorDetails";

// Facility detail pages
import HospitalDetails from "./pages/HospitalDetails";
import LaboratoryDetails from "./pages/LaboratoryDetails";

// Role / portal pages
import Dispatcher from "./pages/Dispatcher";
import Phlebotomist from "./pages/Phlebotomist";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Marketing / public pages */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/partner-with-us" element={<PartnerWithUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/health-ecosystem" element={<HealthEcosystem />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />

          {/* App / catalog pages */}
          <Route path="/app" element={<OurApp />} />
          <Route path="/app/tests" element={<TestCatalog />} />
          <Route path="/app/tests/compare/:id" element={<ComparePrices />} />
          <Route path="/app/packages" element={<PackageCatalog />} />
          <Route path="/app/packages/compare/:id" element={<ComparePrices />} />
          <Route path="/app/consultation" element={<Consultation />} />
          <Route path="/app/consultation/:id" element={<DoctorDetails />} />

          {/* Facility detail pages */}
          <Route path="/app/hospitals/:id" element={<HospitalDetails />} />
          <Route path="/app/laboratories/:id" element={<LaboratoryDetails />} />

          {/* Role / portal pages */}
          <Route path="/dispatcher" element={<Dispatcher />} />
          <Route path="/phlebotomist" element={<Phlebotomist />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
