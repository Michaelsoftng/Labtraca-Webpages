import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Labtraca</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About us
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Our Services
            </a>
            <a href="#app" className="text-foreground hover:text-primary transition-colors">
              Our App
            </a>
            <a href="#how" className="text-foreground hover:text-primary transition-colors">
              How it works
            </a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors">
              FAQ
            </a>
          </div>

          <Button className="gap-2">
            Login
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};
