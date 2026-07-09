import { Link } from "react-router-dom";
import logo from "@/assets/logo-transparent.png";

const services = [
  { label: "Lab Logistics", to: "/health-ecosystem" },
  { label: "Home Collection", to: "/app/tests" },
  { label: "Enterprise Solutions", to: "/partner-with-us" },
  { label: "Collaborative Pharmacy Ecosystem", to: "/health-ecosystem" },
];

const company = [
  { label: "About Us", to: "/about" },
  { label: "Careers", to: "/phlebotomist" },
  { label: "Partners", to: "/partners" },
  { label: "Contact", to: "/contact" },
];

const legal = [
  {
    label: "Privacy Policy",
    to: "https://sites.google.com/view/testraca-user/home",
    external: true,
  },
  { label: "Terms of Service", to: "/terms-conditions", external: false },
  { label: "Compliance", to: "#", external: false },
];

const NavLink = ({
  to,
  label,
  external,
}: {
  to: string;
  label: string;
  external?: boolean;
}) =>
  external ? (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
    >
      {label}
    </a>
  ) : (
    <Link
      to={to}
      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
    >
      {label}
    </Link>
  );

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-8 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Mobile layout */}
        <div className="sm:hidden space-y-8 mb-8">
          <div className="space-y-3">
            <img src={logo} alt="Testraca" className="h-7 w-auto" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Redefining medical logistics with precision, speed, and clinical
              integrity.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-bold text-foreground mb-4">
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((l) => (
                  <li key={l.label}>
                    <NavLink to={l.to} label={l.label} />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-foreground mb-4">
                Company
              </h4>
              <ul className="space-y-3">
                {company.map((l) => (
                  <li key={l.label}>
                    <NavLink to={l.to} label={l.label} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6 space-y-3">
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {legal.map((l) => (
                <NavLink
                  key={l.label}
                  to={l.to}
                  label={l.label}
                  external={l.external}
                />
              ))}
            </div>
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} Testraca Medical Logistics. All
              rights reserved.
            </p>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden sm:grid grid-cols-4 gap-10 mb-10">
          <div className="space-y-4">
            <img src={logo} alt="Testraca" className="h-8 w-auto" />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px]">
              Redefining medical logistics with precision, speed, and clinical
              integrity.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((l) => (
                <li key={l.label}>
                  <NavLink to={l.to} label={l.label} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((l) => (
                <li key={l.label}>
                  <NavLink to={l.to} label={l.label} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide">
              Legal
            </h4>
            <ul className="space-y-3">
              {legal.map((l) => (
                <li key={l.label}>
                  <NavLink to={l.to} label={l.label} external={l.external} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hidden sm:block border-t border-gray-100 pt-6">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Testraca Medical Logistics. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
