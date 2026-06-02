import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import HowItWorks from "./pages/HowItWorks";
import OurServices from "./pages/OurServices";
import Partners from "./pages/Partners";
import PartnerWithUs from "./pages/PartnerWithUs";
import NotFound from "./pages/NotFound";
import TestCatalog from "./pages/TestCatalog";
import FAQ from "./pages/FAQ";
import OurApp from "./pages/OurApp";
import Consultation from "./pages/Consultation";
import Hospitals from "./pages/Hospitals";
import Laboratories from "./pages/Laboratories";
import Dispatcher from "./pages/Dispatcher";
import Phlebotomist from "./pages/Phlebotomist";
import HospitalDetails from "./pages/HospitalDetails";
import LaboratoryDetails from "./pages/LaboratoryDetails";
import DoctorDetails from "./pages/DoctorDetails";
import TermsConditions from "./pages/TermsConditions";
import HealthEcosystem from "./pages/HealthEcosystem";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/services" element={<OurServices />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/partner-with-us" element={<PartnerWithUs />} />
          <Route path="/app" element={<OurApp />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/app/tests" element={<TestCatalog />} />
          <Route path="/app/consultation" element={<Consultation />} />
          <Route path="/app/consultation/:id" element={<DoctorDetails />} />
          <Route path="/app/hospitals" element={<Hospitals />} />
          <Route path="/app/hospitals/:id" element={<HospitalDetails />} />
          <Route path="/app/laboratories" element={<Laboratories />} />
          <Route path="/app/laboratories/:id" element={<LaboratoryDetails />} />
          <Route path="/dispatcher" element={<Dispatcher />} />
          <Route path="/phlebotomist" element={<Phlebotomist />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/health-ecosystem" element={<HealthEcosystem />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
