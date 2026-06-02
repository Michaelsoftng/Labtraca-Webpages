import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/logo-transparent.png";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const { pathname } = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Lab Tests", path: "/app/tests" },
    { name: "Collaborative Pharmacy Ecosystem", path: "/partner-with-us" },
    { name: "Our App", path: "/app" },
    { name: "About Us", path: "/about" },
  ];

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-3 md:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center z-50 flex-shrink-0" onClick={closeMenu}>
              <img src={logo} alt="Labtraca Logo" className="h-9 w-auto" />
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors relative pb-0.5 whitespace-nowrap ${
                    isActive(item.path)
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="https://app.labtraca.com/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="rounded-full px-6 py-2 h-9 text-sm font-medium border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900"
                >
                  Login
                </Button>
              </a>
              <a href="https://app.labtraca.com/" target="_blank" rel="noopener noreferrer">
                <Button className="rounded-full px-6 py-2 h-9 text-sm font-semibold bg-primary hover:bg-primary/90 text-white">
                  Get Started
                </Button>
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden z-50 p-2 text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[57px] bg-white z-40 lg:hidden">
          <div className="flex flex-col items-center pt-10 px-6 gap-6">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-base font-semibold ${
                  isActive(item.path) ? "text-primary" : "text-gray-800 hover:text-primary"
                }`}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
            <div className="w-full max-w-xs space-y-3 mt-4">
              <a href="https://app.labtraca.com/" target="_blank" rel="noopener noreferrer" className="block">
                <Button
                  variant="outline"
                  className="w-full rounded-full h-11 font-semibold border-gray-300"
                  onClick={closeMenu}
                >
                  Login
                </Button>
              </a>
              <a href="https://app.labtraca.com/" target="_blank" rel="noopener noreferrer" className="block">
                <Button
                  className="w-full rounded-full h-11 font-semibold bg-primary hover:bg-primary/90 text-white"
                  onClick={closeMenu}
                >
                  Get Started
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
