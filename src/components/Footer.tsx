import { MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

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
              <li><a href="#" className="hover:text-primary transition-colors font-medium">Investors</a></li>
              <li><a href="#" className="hover:text-primary transition-colors font-medium">About us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors font-medium">Products</a></li>
              <li><a href="#" className="hover:text-primary transition-colors font-medium">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-lg mb-4">Services</h4>
            <ul className="space-y-3 text-background/70">
              <li><a href="#" className="hover:text-primary transition-colors font-medium">Blood Tests</a></li>
              <li><a href="#" className="hover:text-primary transition-colors font-medium">Health Screens</a></li>
              <li><a href="#" className="hover:text-primary transition-colors font-medium">DNA Testing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors font-medium">COVID-19</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-lg mb-4">Partners</h4>
            <ul className="space-y-3 text-background/70">
              <li><a href="#" className="hover:text-primary transition-colors font-medium">Become a Partner</a></li>
              <li><a href="#" className="hover:text-primary transition-colors font-medium">Partner Portal</a></li>
              <li><a href="#" className="hover:text-primary transition-colors font-medium">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors font-medium">Contact</a></li>
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
