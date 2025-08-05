import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Recycle, Sparkles, Calendar, DollarSign, Shield, Truck } from "lucide-react";
import logoMatsImage from "@/assets/logo-mats.jpg";
const Services = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
              Our Professional Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive floor mat solutions designed to keep your business clean, 
              safe and professionally presented at all times.
            </p>
          </div>

          {/* Main Services */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Mat Hire Service */}
            <Card className="border-border shadow-professional hover:shadow-golden transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Recycle className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl text-primary-blue">Commercial Mat Hire from</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-golden">$7.77</div>
                  <div className="text-muted-foreground">per week</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-golden mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">High-quality commercial floor mats</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Truck className="w-5 h-5 text-golden mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Regular pickup and delivery service</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-golden mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Flexible scheduling to suit your business</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Sparkles className="w-5 h-5 text-golden mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Professional cleaning included</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Button variant="professional" className="w-full" onClick={() => scrollToSection("contact")}>
                    Get Mat Hire Quote
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Logo Mat Cleaning */}
            <Card className="border-border shadow-professional hover:shadow-golden transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-professional-black" />
                </div>
                <CardTitle className="text-2xl text-primary-blue">Logo Mat Cleaning</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-golden">$66</div>
                  <div className="text-muted-foreground">starting price</div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Sparkles className="w-5 h-5 text-golden mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Professional deep cleaning service</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-golden mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Logo preservation and color restoration</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Truck className="w-5 h-5 text-golden mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Pickup and delivery included</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-golden mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Quick turnaround time</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Button variant="golden" className="w-full" onClick={() => scrollToSection("contact")}>
                    Get Cleaning Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Service Features */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary-blue mb-6">
                Complete Mat Management Solution
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-golden rounded-full flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-4 h-4 text-professional-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-blue mb-2">Cost-Effective Solutions</h4>
                    <p className="text-muted-foreground">
                      Save money on cleaning supplies, labor costs, and floor replacement. 
                      Our affordable weekly rates provide excellent value for businesses of all sizes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-blue mb-2">Safety & Compliance</h4>
                    <p className="text-muted-foreground">
                      Reduce slip and fall hazards while meeting workplace safety requirements. 
                      Our mats provide excellent traction and debris control.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-golden rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-professional-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-blue mb-2">Professional Appearance</h4>
                    <p className="text-muted-foreground">
                      Maintain a pristine business image with clean, well-maintained entrance mats. 
                      Perfect for reception areas, lobbies, and high-traffic zones.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img src={logoMatsImage} alt="Professional logo mats" className="w-full h-[400px] object-cover rounded-lg shadow-professional" />
              <div className="absolute inset-0 bg-gradient-primary/5 rounded-lg"></div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 p-8 bg-secondary rounded-lg">
            <h3 className="text-2xl font-bold text-primary-blue mb-4">
              Ready to Upgrade Your Business Environment?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. We'll assess your needs 
              and recommend the perfect mat solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="golden" size="lg" onClick={() => scrollToSection("contact")}>
                Get Free Quote
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.open("tel:+61890214000", "_self")}>
                Call (08) 9021 4000
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;