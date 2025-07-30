import { Button } from "@/components/ui/button";
import { MapPin, Users, Clock, Award } from "lucide-react";
import cleaningImage from "@/assets/cleaning-service.jpg";

const About = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
              About Goldfields Commercial Mat Hire
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Your trusted local partner for professional floor mat solutions in Kalgoorlie, 
              helping businesses maintain clean, safe and professional environments.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-primary-blue mb-4">
                  Specialized in Commercial Floor Mat Solutions
                </h3>
                <p className="text-muted-foreground mb-6">
                  We understand that first impressions matter. Our commercial floor mat hire and 
                  logo mat cleaning services are designed specifically for Kalgoorlie businesses 
                  who value cleanliness, safety, and professional presentation.
                </p>
                <p className="text-muted-foreground">
                  From small offices to large commercial spaces, we provide tailored solutions 
                  that trap dirt and debris before it enters your premises, reducing maintenance 
                  costs and creating a safer environment for staff and visitors.
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                  <MapPin className="w-8 h-8 text-golden mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary-blue">Local</div>
                  <div className="text-sm text-muted-foreground">Kalgoorlie Based</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                  <Users className="w-8 h-8 text-golden mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary-blue">100+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                  <Clock className="w-8 h-8 text-golden mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary-blue">24/7</div>
                  <div className="text-sm text-muted-foreground">Service Support</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                  <Award className="w-8 h-8 text-golden mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary-blue">5★</div>
                  <div className="text-sm text-muted-foreground">Service Rating</div>
                </div>
              </div>

              {/* Value Propositions */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-primary-blue">Why Choose Us?</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-golden rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <strong>Local Expertise:</strong> We understand Kalgoorlie's unique environment and business needs
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-golden rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <strong>Cost-Effective:</strong> Reduce cleaning costs and floor replacement expenses
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-golden rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <strong>Professional Service:</strong> Reliable, punctual and tailored to your business schedule
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-golden rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <strong>Safety First:</strong> Reduce slip hazards and create a safer workplace environment
                    </p>
                  </div>
                </div>
              </div>

              <Button
                variant="professional"
                size="lg"
                onClick={() => scrollToSection("services")}
              >
                Explore Our Services
              </Button>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src={cleaningImage}
                alt="Professional cleaning service"
                className="w-full h-[500px] object-cover rounded-lg shadow-professional"
              />
              <div className="absolute inset-0 bg-gradient-primary/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;