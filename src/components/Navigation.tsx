import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
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
    { name: "Health Ecosystem", path: "/health-ecosystem" },
    { name: "Partners", path: "/partners" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-canvas border-b border-border">
        {/* Mobile bar */}
        <div className="flex lg:hidden items-center justify-between px-4 h-16">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="p-1 text-primary"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <Link to="/" onClick={closeMenu}>
              <img src={logo} alt="Labtraca Logo" className="h-8 w-auto object-contain" />
            </Link>
          </div>
          <a href="https://app.labtraca.com/" target="_blank" rel="noopener noreferrer">
            <div className="w-10 h-10 rounded-full bg-teal-surface border border-teal-subtle flex items-center justify-center cursor-pointer">
              <User className="w-5 h-5 text-teal-muted" />
            </div>
          </a>
        </div>

        {/* Desktop bar */}
        <div className="hidden lg:block container mx-auto px-4 py-3 md:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center flex-shrink-0">
              <img src={logo} alt="Labtraca Logo" className="h-9 w-auto" />
            </Link>

            <div className="flex items-center gap-6">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors relative pb-0.5 whitespace-nowrap ${
                    isActive(item.path)
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full"
                      : "text-gray-600 hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a href="https://app.labtraca.com/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="rounded-full px-6 py-2 h-9 text-sm font-medium border-gray-300 text-gray-700 hover:border-gray-400 hover:text-foreground"
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
          </div>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-canvas z-40 lg:hidden">
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
