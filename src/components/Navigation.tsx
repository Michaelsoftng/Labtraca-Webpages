import { Button } from "@/components/ui/button";
import { MapPin, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-hero-bg backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 z-50">
            <MapPin className="w-8 h-8 text-primary fill-primary" />
            <span className="text-2xl font-black text-foreground">Labtraca</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link to="/services" className="text-foreground font-semibold hover:text-primary transition-colors">
              Our Services
            </Link>
            <Link to="/how-it-works" className="text-foreground font-semibold hover:text-primary transition-colors">
              How it works
            </Link>
            <Link to="/partners" className="text-foreground font-semibold hover:text-primary transition-colors">
              Partners
            </Link>
            <Link to="/about" className="text-foreground font-semibold hover:text-primary transition-colors">
              About Us
            </Link>
            <Button className="rounded-full font-bold px-6">
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden z-50 p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="fixed inset-0 top-[72px] bg-background/95 backdrop-blur-lg lg:hidden animate-fade-in">
              <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
                <Link
                  to="/services"
                  className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Services
                </Link>
                <Link
                  to="/how-it-works"
                  className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How it works
                </Link>
                <Link
                  to="/partners"
                  className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Partners
                </Link>
                <Link
                  to="/about"
                  className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Button
                  className="rounded-full font-bold px-8 py-6 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
