import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo-transparent.png";

const columns = [
  {
    heading: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Careers", to: "#" },
      { label: "News Room", to: "#" },
      { label: "Contact", to: "mailto:info@labtraca.com" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Lab Logistics", to: "/app/tests" },
      { label: "Home Collection", to: "/app/tests" },
      { label: "Enterprise Solutions", to: "/partner-with-us" },
      { label: "Digital Health", to: "/app" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", to: "https://sites.google.com/view/labtraca-user/home" },
      { label: "Terms of Service", to: "/terms-conditions" },
      { label: "Compliance", to: "#" },
      { label: "Cookie Settings", to: "#" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white pt-14 pb-8 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="space-y-5">
            <img src={logo} alt="Labtraca" className="h-8 w-auto brightness-0 invert" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
              Revolutionizing medical sample logistics with speed, safety, and clinical precision.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary/80 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-3.5 h-3.5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wide">{col.heading}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.to.startsWith("http") || link.to.startsWith("mailto") ? (
                      <a
                        href={link.to}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                        target={link.to.startsWith("http") ? "_blank" : undefined}
                        rel={link.to.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Labtraca Remos Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
