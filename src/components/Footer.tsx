import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary-blue text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-golden rounded-md flex items-center justify-center">
                <span className="text-professional-black font-bold text-sm">GM</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none">Goldfields</span>
                <span className="text-sm text-primary-foreground/80 leading-none">Commercial Mat Hire</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Your trusted local partner for professional floor mat solutions in Kalgoorlie. 
              Keeping businesses clean, safe and professionally presented since day one.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-golden" />
                <span className="text-primary-foreground/90">0435 808 804</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-golden" />
                <span className="text-primary-foreground/90">info@goldfieldsmats.com.au</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-golden" />
                <span className="text-primary-foreground/90">Kalgoorlie, Western Australia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <nav className="space-y-3">
              <button
                onClick={() => scrollToSection("home")}
                className="block text-primary-foreground/80 hover:text-golden transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-primary-foreground/80 hover:text-golden transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block text-primary-foreground/80 hover:text-golden transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-primary-foreground/80 hover:text-golden transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <div className="space-y-3">
              <div className="text-primary-foreground/80">
                <div className="font-medium">Commercial Mat Hire</div>
                <div className="text-sm text-golden">From $7.77/week</div>
              </div>
              <div className="text-primary-foreground/80">
                <div className="font-medium">Logo Mat Cleaning</div>
                <div className="text-sm text-golden">From $66</div>
              </div>
              <div className="text-primary-foreground/80">
                <div className="font-medium">Mats for Sale</div>
                <div className="text-sm text-golden">Contact for pricing</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/80 text-sm">
              © {currentYear} Goldfields Commercial Floor Mats. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-primary-foreground/80">
              <span>Proudly serving Kalgoorlie businesses</span>
              <span className="hidden md:inline">•</span>
              <span>Professional • Reliable • Local</span>
              <span className="hidden md:inline">•</span>
              <a 
                href="https://rughubkal.com.au" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-golden transition-colors"
              >
                Partnered with Rughub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;