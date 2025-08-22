import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    service: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend
    toast({
      title: "Quote Request Sent!",
      description: "We'll contact you within 24 hours with your custom quote."
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      business: "",
      service: "",
      message: ""
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
              Get Your Free Quote Today
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ready to improve your business environment? Contact us for a personalized 
              quote and discover how our mat solutions can benefit your Kalgoorlie business.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-professional">
              <CardHeader>
                <CardTitle className="text-2xl text-gradient-primary flex items-center space-x-2">
                  <Send className="w-6 h-6 text-golden" />
                  <span>Request Your Quote</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="(08) 9XXX XXXX" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="business">Business Name</Label>
                      <Input id="business" name="business" value={formData.business} onChange={handleChange} placeholder="Your business name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interested In *</Label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange} required className="w-full px-3 py-2 border border-input rounded-md bg-background">
                      <option value="">Select a service</option>
                      <option value="mat-hire">Commercial Mat Hire</option>
                      <option value="logo-cleaning">Logo Mat Cleaning</option>
                      <option value="mats-for-sale">Mats for Sale</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Details</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your requirements, location size, current challenges, etc." rows={4} />
                  </div>

                  <Button type="submit" variant="golden" size="lg" className="w-full">Send</Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="shadow-professional">
                <CardHeader>
                  <CardTitle className="text-2xl text-gradient-primary">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-golden rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-professional-black" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gradient-primary mb-1">Phone</h4>
                      <p className="text-muted-foreground">0435 808 804</p>
                      <p className="text-sm text-muted-foreground">Available during business hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gradient-primary mb-1">Email</h4>
                      <p className="text-muted-foreground">info@goldfieldsmats.com.au</p>
                      <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-golden rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-professional-black" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gradient-primary mb-1">Service Area</h4>
                      <p className="text-muted-foreground">Kalgoorlie and surrounding areas</p>
                      <p className="text-sm text-muted-foreground">Local pickup & delivery</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gradient-primary mb-1">Business Hours</h4>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                        
                        
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Call-to-Action */}
              <Card className="shadow-professional border-golden/20 bg-gradient-to-br from-background to-golden/5">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gradient-primary mb-3">
                    Need Immediate Assistance?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Speak directly with our team for urgent requirements or immediate quotes.
                  </p>
                  <Button variant="professional" size="lg" className="w-full" onClick={() => window.open("tel:+61435808804", "_self")}>
                    Call Now: 0435 808 804
                  </Button>
                </CardContent>
              </Card>

              {/* Service Guarantee */}
              <Card className="shadow-professional">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gradient-primary mb-3">Our Service Promise</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-golden rounded-full"></div>
                      <span>Free consultation and quote</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-golden rounded-full"></div>
                      <span>Same-day response guaranteed</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-golden rounded-full"></div>
                      <span>Competitive pricing</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-golden rounded-full"></div>
                      <span>Professional, reliable service</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;