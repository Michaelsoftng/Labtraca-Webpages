import { MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-8 h-8 text-primary fill-primary" />
              <span className="text-2xl font-black">Labtraca</span>
            </div>
            <p className="text-background/70 leading-relaxed">
              Professional lab testing delivered to your doorstep
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform">
                <Facebook className="w-5 h-5 text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform">
                <Twitter className="w-5 h-5 text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform">
                <Instagram className="w-5 h-5 text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform">
                <Linkedin className="w-5 h-5 text-primary-foreground" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-black text-lg mb-4">Discover</h4>
            <ul className="space-y-3 text-background/70">
              <li><Link to="/about" className="hover:text-primary transition-colors font-medium">About Us</Link></li>
              <li><Link to="/how-it-works" className="hover:text-primary transition-colors font-medium">How it Works</Link></li>
              <li><Link to="/our-services" className="hover:text-primary transition-colors font-medium">Our Services</Link></li>
              <li><a href="#partners" className="hover:text-primary transition-colors font-medium">Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-lg mb-4">Services</h4>
            <ul className="space-y-3 text-background/70">
              <li><Link to="/our-services" className="hover:text-primary transition-colors font-medium">All Services</Link></li>
              <li><a href="#features" className="hover:text-primary transition-colors font-medium">Features</a></li>
              <li><a href="#download" className="hover:text-primary transition-colors font-medium">Download App</a></li>
              <li><Link to="/how-it-works" className="hover:text-primary transition-colors font-medium">Get Started</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-lg mb-4">Join Us</h4>
            <ul className="space-y-3 text-background/70">
              <li><a href="#register" className="hover:text-primary transition-colors font-medium">Become a Dispatcher</a></li>
              <li><a href="#register" className="hover:text-primary transition-colors font-medium">Become a Phlebotomist</a></li>
              <li><Link to="/partner-with-us" className="hover:text-primary transition-colors font-medium">Partner with Us</Link></li>
              <li><a href="mailto:support@labtraca.com" className="hover:text-primary transition-colors font-medium">Contact Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>&copy; {new Date().getFullYear()} Labtraca. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
