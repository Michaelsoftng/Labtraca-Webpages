import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-hero-bg backdrop-blur-sm">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <MapPin className="w-8 h-8 text-primary fill-primary" />
            <span className="text-2xl font-black text-foreground">Labtraca</span>
          </Link>

          <div className="flex items-center gap-6">
            <Link to="/services" className="text-foreground font-semibold hover:text-primary transition-colors">
              Our Services
            </Link>
            <Link to="/how-it-works" className="text-foreground font-semibold hover:text-primary transition-colors">
              How it works
            </Link>
            <Link to="/about" className="text-foreground font-semibold hover:text-primary transition-colors">
              About Us
            </Link>
            <Button className="rounded-full font-bold px-6">
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
