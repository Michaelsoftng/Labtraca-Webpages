import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  User,
  Home,
  Microscope,
  ShieldCheck,
  Diamond,
  Info,
  Mail,
  LogIn,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const logo = "/Labtraca%20Wordmark%20Logo%20PNG.png";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const { pathname } = useLocation();

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Lab Tests", path: "/app/tests", icon: Microscope },
    { name: "Health Ecosystem", path: "/health-ecosystem", icon: ShieldCheck },
    { name: "Partners", path: "/partners", icon: Diamond },
    { name: "About Us", path: "/about", icon: Info },
    { name: "Contact", path: "/contact", icon: Mail },
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
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
            <Link to="/" onClick={closeMenu}>
              <img
                src={logo}
                alt="Labtraca Logo"
                className="h-14 w-auto object-contain"
              />
            </Link>
          </div>
          <a
            href="https://app.labtraca.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-10 h-10 rounded-full bg-teal-surface border border-teal-subtle flex items-center justify-center cursor-pointer">
              <User className="w-5 h-5 text-teal-muted" />
            </div>
          </a>
        </div>

        {/* Desktop bar */}
        <div className="hidden lg:block container mx-auto px-4 py-3 md:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center flex-shrink-0">
              <img src={logo} alt="Labtraca Logo" className="h-16 w-auto" />
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
              <a
                href="https://app.labtraca.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="rounded-full px-6 py-2 h-9 text-sm font-medium border-gray-300 text-gray-700 hover:border-gray-400 hover:text-foreground"
                >
                  Login
                </Button>
              </a>
              <a
                href="https://app.labtraca.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-full px-6 py-2 h-9 text-sm font-semibold bg-primary hover:bg-primary/90 text-white">
                  Get Started
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile sidebar drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/40" onClick={closeMenu} />
        <div
          className={`absolute top-0 left-0 h-full w-[80%] max-w-xs bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 h-16 border-b border-border">
            <Link
              to="/"
              onClick={closeMenu}
              className="flex items-center gap-2"
            >
              <img
                src={logo}
                alt="Labtraca Logo"
                className="h-12 w-12 object-contain"
              />
              <span className="text-lg font-bold text-foreground">
                Labtraca
              </span>
            </Link>
            <button
              onClick={closeMenu}
              aria-label="Close menu"
              className="p-1 text-foreground"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
            {navLinks.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={closeMenu}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    active
                      ? "bg-teal-surface text-primary"
                      : "text-gray-700 hover:bg-muted"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="px-5 py-5 border-t border-border space-y-3">
            <a
              href="https://app.labtraca.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                variant="outline"
                className="w-full rounded-full h-11 font-semibold border-primary text-primary hover:bg-primary/5"
                onClick={closeMenu}
              >
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Button>
            </a>
            <a
              href="https://app.labtraca.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
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
    </>
  );
};
