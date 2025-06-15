
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Wrench, Lightbulb, Target, CheckCircle } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: Cpu,
      title: "Robotics Engineering",
      description: "Advanced robotic systems design and implementation for industrial and research applications.",
    },
    {
      icon: Wrench,
      title: "Mechatronics Design",
      description: "Integrated mechanical, electrical, and software solutions for complex engineering challenges.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Consulting",
      description: "Strategic guidance on emerging technologies and automation opportunities.",
    },
    {
      icon: Target,
      title: "Project Management",
      description: "End-to-end project delivery from concept to implementation with proven methodologies.",
    },
  ];

  const achievements = [
    "10+ Years in Robotics & Mechatronics",
    "50+ Successful Projects Delivered",
    "Award-Winning Engineering Solutions",
    "Published Research & Patents",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-bg text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Robotics & Mechatronics Engineering
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Solving Interesting 
                  <span className="block">Engineering Problems</span>
                </h1>
                <p className="text-xl text-white/90 max-w-lg">
                  MBT Consultancy delivers cutting-edge robotics and mechatronics solutions. 
                  Led by Mattie Ball, we transform complex challenges into innovative engineering successes.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                  <Link to="/projects">View Projects <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary">
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=600&width=500"
                alt="Robotics Engineering"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Engineering Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive robotics and mechatronics solutions tailored to your unique challenges
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm hover:shadow-primary/10">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Mattie Ball - Robotics Engineer"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Meet Mattie Ball
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  A passionate robotics and mechatronics engineer with over a decade of experience 
                  in solving complex engineering challenges. Mattie specializes in creating innovative 
                  solutions that bridge the gap between theoretical concepts and practical applications.
                </p>
                <p className="text-lg text-muted-foreground">
                  From autonomous systems to precision manufacturing, MBT Consultancy has delivered 
                  successful projects across various industries, always pushing the boundaries of 
                  what's possible in engineering.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">{achievement}</span>
                  </div>
                ))}
              </div>
              <Button asChild>
                <Link to="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-bg text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Solve Your Engineering Challenge?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and explore innovative solutions together. 
            From concept to implementation, MBT Consultancy is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
