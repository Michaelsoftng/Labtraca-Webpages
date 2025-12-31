import { Button } from "@/components/ui/button";
import { MapPin, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserLocation } from "@/utils/location";
import logo from "@/assets/logo-transparent.png";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, setLocation] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const userLocation = await getUserLocation();
        console.log(userLocation);
        if (userLocation) {
          setLocation(userLocation);
        }
      } catch (err) {
        console.error("Location detection failed:", err);
      }
    };

    fetchLocation();
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-hero-bg backdrop-blur-sm border-b border-border/50">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-4 sm:py-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-8 min-w-0 flex-1 lg:flex-none">
            <Link to="/" className="flex items-center gap-2 z-50 flex-shrink-0">
              <img
                src={logo}
                alt="Labtraca Logo"
                className="h-8 w-auto"
              />
            </Link>

            {/* Location Dropdown - Desktop */}
            <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-muted/50 hover:bg-muted rounded-lg cursor-pointer transition-colors">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">
                {location || "Select location"}
              </span>
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link to="/about" className="text-foreground font-semibold hover:text-primary transition-colors">
              About us
            </Link>
            <Link to="/services" className="text-foreground font-semibold hover:text-primary transition-colors">
              Our Services
            </Link>
            <Link to="/app" className="text-foreground font-semibold hover:text-primary transition-colors">
              Our App
            </Link>
            <Link to="/how-it-works" className="text-foreground font-semibold hover:text-primary transition-colors">
              How it works
            </Link>
            <Link to="/faq" className="text-foreground font-semibold hover:text-primary transition-colors">
              FAQ
            </Link>
            <a href="https://app.labtraca.com/" target="_blank" rel="noopener noreferrer">
              <Button className="rounded-full font-bold px-6">
                Login
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden z-50 p-2 text-foreground hover:text-primary transition-colors flex-shrink-0 ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Mobile Navigation Overlay */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 top-[64px] bg-background/95 backdrop-blur-lg lg:hidden z-30"
              onClick={closeMenu}
            />
          )}

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="fixed inset-0 top-[64px] left-0 right-0 bottom-0 bg-background/95 backdrop-blur-lg lg:hidden z-30 overflow-y-auto h-screen">
              <div className="flex flex-col items-center justify-start gap-8 px-6 py-12 min-h-[calc(100vh-64px)]">
                {/* Location Dropdown - Mobile */}
                <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-lg w-full max-w-xs justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground">
                    {location || "Select location"}
                  </span>
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                </div>

                <Link
                  to="/about"
                  className="text-xl font-bold text-foreground hover:text-primary transition-colors"
                  onClick={closeMenu}
                >
                  About us
                </Link>
                <Link
                  to="/services"
                  className="text-xl font-bold text-foreground hover:text-primary transition-colors"
                  onClick={closeMenu}
                >
                  Our Services
                </Link>
                <Link
                  to="/app"
                  className="text-xl font-bold text-foreground hover:text-primary transition-colors"
                  onClick={closeMenu}
                >
                  Our App
                </Link>
                <Link
                  to="/how-it-works"
                  className="text-xl font-bold text-foreground hover:text-primary transition-colors"
                  onClick={closeMenu}
                >
                  How it works
                </Link>
                <Link
                  to="/faq"
                  className="text-xl font-bold text-foreground hover:text-primary transition-colors"
                  onClick={closeMenu}
                >
                  FAQ
                </Link>
                <a href="https://app.labtraca.com/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button
                    className="rounded-full font-bold px-8 py-3 text-base w-full"
                    onClick={closeMenu}
                  >
                    Login
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
