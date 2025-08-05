import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, Star } from "lucide-react";
import heroImage from "@/assets/hero-office.jpg";
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Professional office entrance" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/95 to-slate-900/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-6 mb-8 animate-fade-in-up">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-golden" />
              <span className="text-sm">Kalgoorlie Local</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-golden" />
              <span className="text-sm">Professional Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-golden" />
              <span className="text-sm">Reliable Solution</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up" style={{
          animationDelay: '0.2s'
        }}>
            Professional Mat Solutions for{" "}
            <span className="text-golden">Kalgoorlie Businesses</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 animate-fade-in-up" style={{
          animationDelay: '0.4s'
        }}>
            Keep your premises clean, safe and professional with our commercial floor mat hire and cleaning services.
          </p>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-10 animate-fade-in-up" style={{
          animationDelay: '0.6s'
        }}>
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-4">
              <h3 className="font-semibold text-golden mb-2">Trap Dirt & Debris</h3>
              <p className="text-sm text-primary-foreground/80">
                Prevent dirt, water and debris from entering your premises
              </p>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-4">
              <h3 className="font-semibold text-golden mb-2">Reduce Maintenance</h3>
              <p className="text-sm text-primary-foreground/80">
                Less floor wear, fewer slipping hazards, reduced cleaning effort
              </p>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-4">
              <h3 className="font-semibold text-golden mb-2">Professional Image</h3>
              <p className="text-sm text-primary-foreground/80">
                Enhance cleanliness, safety and your business appearance
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up" style={{
          animationDelay: '0.8s'
        }}>
            <Button variant="golden" size="lg" onClick={() => scrollToSection("contact")} className="min-w-[200px]">
              Get Your Quote Today
            </Button>
            
          </div>

          {/* Pricing Highlight */}
          <div className="mt-10 text-center animate-fade-in-up" style={{
          animationDelay: '1s'
        }}>
            <p className="text-lg">
              <span className="text-golden font-semibold">Mat hire from $7.77/week</span>
              <span className="mx-4">•</span>
              <span className="text-golden font-semibold">Logo mat cleaning from $66</span>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        
      </div>
    </section>;
};
export default Hero;