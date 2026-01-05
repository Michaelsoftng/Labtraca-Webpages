import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "@/assets/logo-transparent.png";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: "About us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Our App", path: "/app" },
    { name: "How it works", path: "/how-it-works" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md transition-all duration-300">
        <div className="container mx-auto px-4 py-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 z-50 flex-shrink-0" onClick={closeMenu}>
              <img
                src={logo}
                alt="Labtraca Logo"
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-black font-medium hover:text-green-600 hover:underline hover:underline-offset-4 transition-all"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop Right Side (Login) */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="https://app.labtraca.com/" target="_blank" rel="noopener noreferrer">
                <Button className="bg-green-600 hover:bg-green-700 text-white rounded-md px-6 py-2.5 font-semibold text-sm flex items-center gap-1">
                  Login <ChevronRight className="w-4 h-4" />
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden z-50 p-2 text-black hover:text-green-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

      </nav>

      {/* Mobile Navigation Overlay */}
      {
        isMenuOpen && (
          <div className="fixed inset-0 top-[72px] bg-white z-40 overflow-y-auto lg:hidden">
            <div className="flex flex-col items-center pt-8 px-4 gap-6">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-lg font-bold text-black hover:text-green-600"
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}
              <a href="https://app.labtraca.com/" target="_blank" rel="noopener noreferrer" className="w-full max-w-xs mt-4">
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white rounded-md py-6 text-lg font-bold flex items-center justify-center gap-2"
                  onClick={closeMenu}
                >
                  Login <ChevronRight className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        )
      }
    </>
  );
};
