import {
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 sm:py-16 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-8 h-8 text-primary fill-primary" />
              <span className="text-2xl font-black">Labtraca</span>
            </div>
            <p className="text-background/70 leading-relaxed">
              Professional lab testing delivered to your doorstep
            </p>

            <div className="space-y-3 text-background/70">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-background mb-1">
                    Head Office
                  </p>
                  <p className="text-sm">
                    No. 27 Tai Solarin, off 5th Avenue, Gwarinpa, Abuja Nigeria
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-background mb-1">
                    24h Support
                  </p>
                  <a
                    href="tel:+2340813389601"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    +234 813 389 6015
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-background mb-1">Email</p>
                  <a
                    href="mailto:info@labtraca.com"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    info@labtraca.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Facebook className="w-5 h-5 text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Twitter className="w-5 h-5 text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Instagram className="w-5 h-5 text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Linkedin className="w-5 h-5 text-primary-foreground" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-lg mb-4">Discover</h4>
            <ul className="space-y-3 text-background/70">
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors font-medium"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="hover:text-primary transition-colors font-medium"
                >
                  How it Works
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-primary transition-colors font-medium"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <a
                  href="#partners"
                  className="hover:text-primary transition-colors font-medium"
                >
                  Partners
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg mb-4">Services</h4>
            <ul className="space-y-3 text-background/70">
              <li>
                <Link
                  to="/services"
                  className="hover:text-primary transition-colors font-medium"
                >
                  All Services
                </Link>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-primary transition-colors font-medium"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#download"
                  className="hover:text-primary transition-colors font-medium"
                >
                  Download App
                </a>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="hover:text-primary transition-colors font-medium"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg mb-4">Join Us</h4>
            <ul className="space-y-3 text-background/70">
              <li>
                <Link
                  to="/dispatcher"
                  className="hover:text-primary transition-colors font-medium"
                >
                  Become a Dispatcher
                </Link>
              </li>
              <li>
                <Link
                  to="/phlebotomist"
                  className="hover:text-primary transition-colors font-medium"
                >
                  Become a Phlebotomist
                </Link>
              </li>
              <li>
                <Link
                  to="/partner-with-us"
                  className="hover:text-primary transition-colors font-medium"
                >
                  Partner with Us
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@labtraca.com"
                  className="hover:text-primary transition-colors font-medium"
                >
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-background/60">
            <p>
              &copy; {new Date().getFullYear()} Labtraca. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-6 justify-center">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
