import { Link } from "react-router-dom";
import { Heart, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-sanctuary py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" fill="currentColor" />
              </div>
              <div>
                <span className="font-serif text-lg font-semibold">Marcescott</span>
                <span className="block text-xs text-primary-foreground/70 -mt-1">Animal Sanctuary LLC</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              A foster-based animal rescue dedicated to providing rescued animals with safety, 
              care, and a second chance at life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</Link></li>
              <li><Link to="/what-we-do" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">What We Do</Link></li>
              <li><Link to="/foster" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Foster Program</Link></li>
              <li><Link to="/adopt" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Adopt</Link></li>
              <li><Link to="/donate" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Donate</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/transparency" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Compliance & Transparency</Link></li>
              <li><Link to="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Terms of Use</Link></li>
              <li><Link to="/disclaimer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Disclaimer</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Houston, Texas</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@marcescottsanctuary.org" className="hover:text-primary-foreground transition-colors">
                  info@marcescottsanctuary.org
                </a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>(713) 555-0123</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>© {currentYear} Marcescott Animal Sanctuary LLC. All rights reserved.</p>
            <p className="text-center">
              A foster-based rescue serving Houston, Texas and surrounding areas.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
