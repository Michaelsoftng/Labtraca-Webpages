import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo-transparent.png";

const links = [
  { label: "Lab Logistics", to: "/app/tests" },
  { label: "Home Collection", to: "/app/tests" },
  { label: "Enterprise Solutions", to: "/partner-with-us" },
  { label: "Digital Health", to: "/app" },
  { label: "About Us", to: "/about" },
  { label: "Collaborative Pharmacy Ecosystem", to: "/partner-with-us" },
  { label: "Privacy Policy", to: "https://sites.google.com/view/labtraca-user/home" },
  { label: "Terms of Service", to: "/terms-conditions" },
];

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-8 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Top: logo + description + social */}
        <div className="flex flex-col items-center text-center mb-10 space-y-4">
          <img src={logo} alt="Labtraca" className="h-8 w-auto" />
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            Revolutionizing healthcare logistics with speed, safety, and clinical precision for everyone.
          </p>
          <div className="flex gap-3">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-primary/10 flex items-center justify-center transition-colors"
              >
                <Icon className="w-3.5 h-3.5 text-gray-500 hover:text-primary" />
              </a>
            ))}
          </div>
        </div>

        {/* Link grid — 2 cols on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {links.map((link) => (
            <div key={link.label}>
              {link.to.startsWith("http") ? (
                <a
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  to={link.to}
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="border-t border-gray-100 pt-6 space-y-2 text-center">
          <p className="text-xs text-gray-400 leading-relaxed max-w-sm mx-auto">
            Our pharmacy partners form a collaborative ecosystem enhancing health service delivery.
          </p>
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Labtraca Medical Logistics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
