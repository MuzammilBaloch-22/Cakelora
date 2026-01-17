import { Instagram, Facebook, Mail, Phone, MapPin, Heart } from 'lucide-react';
import logo from '@/assets/cakelora-logo.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl overflow-hidden">
                <img src={logo} alt="Cakelora" className="w-full h-full object-cover" />
              </div>
              <span className="font-display text-2xl font-semibold">CAKELORA</span>
            </div>
            <p className="text-primary-foreground/70 font-body text-sm leading-relaxed mb-6">
              Crafting memorable moments through artisan cakes. Every creation tells a story, every bite creates a memory.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Categories', 'Best Sellers', 'Custom Orders', 'Why Cakelora'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-primary-foreground/70 hover:text-primary transition-colors duration-300 font-body text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cake Categories */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Categories</h4>
            <ul className="space-y-3">
              {['Birthday Cakes', 'Wedding Cakes', 'Anniversary Cakes', 'Kids Cakes', 'Custom Designs'].map((link) => (
                <li key={link}>
                  <a
                    href="#categories"
                    className="text-primary-foreground/70 hover:text-primary transition-colors duration-300 font-body text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70 font-body text-sm">
                  123 Bakery Lane, Sweet District
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-primary-foreground/70 font-body text-sm">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-primary-foreground/70 font-body text-sm">
                  hello@cakelora.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/50 font-body text-sm">
              © {currentYear} Cakelora. All rights reserved.
            </p>
            <p className="text-primary-foreground/50 font-body text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-accent fill-accent" /> for cake lovers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
