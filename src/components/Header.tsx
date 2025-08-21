import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-sm border-b border-border shadow-professional' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">GM</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-none ${isScrolled ? 'text-gradient-primary' : 'text-white'}`}>Goldfields</span>
              <span className={`text-xs leading-none ${isScrolled ? 'text-muted-foreground' : 'text-white/80'}`}>Commercial Mat Hire</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`${isScrolled ? 'text-foreground hover:text-primary-blue' : 'text-white hover:text-golden'} transition-colors`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`${isScrolled ? 'text-foreground hover:text-primary-blue' : 'text-white hover:text-golden'} transition-colors`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`${isScrolled ? 'text-foreground hover:text-primary-blue' : 'text-white hover:text-golden'} transition-colors`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`${isScrolled ? 'text-foreground hover:text-primary-blue' : 'text-white hover:text-golden'} transition-colors`}
            >
              Contact
            </button>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className={`flex items-center space-x-2 text-sm ${isScrolled ? 'text-muted-foreground' : 'text-white/80'}`}>
              <Phone className="w-4 h-4" />
              <span>(08) 9021 4000</span>
            </div>
            <Button
              variant="golden"
              size="sm"
              onClick={() => scrollToSection("contact")}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${isScrolled ? 'text-foreground' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20 bg-black/80 backdrop-blur-sm">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-white hover:text-golden transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-white hover:text-golden transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-white hover:text-golden transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-white hover:text-golden transition-colors"
              >
                Contact
              </button>
              <div className="pt-4 border-t border-white/20">
                <div className="flex items-center space-x-2 text-sm text-white/80 mb-3">
                  <Phone className="w-4 h-4" />
                  <span>(08) 9021 4000</span>
                </div>
                <Button
                  variant="golden"
                  size="sm"
                  onClick={() => scrollToSection("contact")}
                  className="w-full"
                >
                  Get Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;