import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Award, Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    project: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('ContactMessages')
        .insert([
          {
            name: `${formData.firstName} ${formData.lastName}`.trim(),
            email: formData.email,
            message: `Company: ${formData.company}\nProject Type: ${formData.project}\n\nMessage:\n${formData.message}`
          }
        ]);

      if (error) throw error;

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        project: "",
        message: ""
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "mattie@mbtconsultancy.com",
      href: "mailto:mattie@mbtconsultancy.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+44 (0) 123 456 789",
      href: "tel:+441234567890"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "United Kingdom",
      href: null
    }
  ];

  const accreditations = [
    {
      title: "Chartered Engineer (CEng)",
      organization: "Institution of Mechanical Engineers",
      year: "2019"
    },
    {
      title: "Professional Engineer (PE)",
      organization: "Engineering Council UK",
      year: "2020"
    },
    {
      title: "Certified Robotics Engineer",
      organization: "International Federation of Robotics",
      year: "2021"
    },
    {
      title: "Project Management Professional",
      organization: "Project Management Institute",
      year: "2018"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "R&D Director",
      company: "TechCorp Industries",
      content: "Mattie's expertise in robotics engineering is exceptional. The autonomous manufacturing system delivered exceeded our expectations and significantly improved our production efficiency.",
      rating: 5
    },
    {
      name: "James Morrison",
      role: "Operations Manager",
      company: "AutoMed Solutions",
      content: "Working with MBT Consultancy was a game-changer for our medical device calibration process. The precision and reliability of the solution are outstanding.",
      rating: 5
    },
    {
      name: "Prof. Elena Rodriguez",
      role: "Research Lead",
      company: "University Research Lab",
      content: "Mattie's innovative approach to mechatronics design helped us achieve breakthrough results in our research project. Highly recommend for complex engineering challenges.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Header */}
      <section className="py-16 gradient-bg text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Ready to start your next engineering project? Let's discuss how we can 
            create innovative solutions together.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="text-sm font-medium">First Name *</label>
                      <Input 
                        id="firstName" 
                        placeholder="John" 
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="text-sm font-medium">Last Name *</label>
                      <Input 
                        id="lastName" 
                        placeholder="Doe" 
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium">Email *</label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="text-sm font-medium">Company</label>
                    <Input 
                      id="company" 
                      placeholder="Your Company" 
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="project" className="text-sm font-medium">Project Type</label>
                    <Input 
                      id="project" 
                      placeholder="e.g., Robotics, Mechatronics, Automation" 
                      value={formData.project}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium">Message *</label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project requirements..."
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium">{info.title}</p>
                        {info.href ? (
                          <a href={info.href} className="text-primary hover:underline">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Response Time</h3>
                <div className="bg-muted/30 rounded-lg p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Initial Response</span>
                      <Badge>Within 4 hours</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Project Consultation</span>
                      <Badge>Within 24 hours</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Detailed Proposal</span>
                      <Badge>2-3 business days</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Professional Accreditations</h2>
            <p className="text-lg text-muted-foreground">
              Certified expertise you can trust
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accreditations.map((cert, index) => (
              <Card key={index} className="text-center border-0 shadow-sm hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Award className="h-8 w-8 mx-auto text-primary mb-2" />
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">{cert.organization}</p>
                  <Badge variant="outline">{cert.year}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-lg text-muted-foreground">
              What our clients say about working with us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>
                    {testimonial.role} at {testimonial.company}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
