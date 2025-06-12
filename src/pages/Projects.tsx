
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Filter } from "lucide-react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Robotics", "Mechatronics", "Automation", "Research"];

  const projects = [
    {
      id: 1,
      title: "Autonomous Manufacturing Robot",
      description: "Developed a fully autonomous robot for precision manufacturing with computer vision and AI integration.",
      category: "Robotics",
      technologies: ["ROS", "Python", "Computer Vision", "AI/ML"],
      image: "/placeholder.svg?height=300&width=400",
      status: "Completed",
      year: "2024"
    },
    {
      id: 2,
      title: "Smart Assembly Line System",
      description: "Designed and implemented an intelligent assembly line with predictive maintenance capabilities.",
      category: "Automation",
      technologies: ["PLC", "IoT", "Data Analytics", "SCADA"],
      image: "/placeholder.svg?height=300&width=400",
      status: "Completed",
      year: "2023"
    },
    {
      id: 3,
      title: "Medical Device Calibration Robot",
      description: "Created a high-precision robot for automated calibration of medical imaging equipment.",
      category: "Mechatronics",
      technologies: ["C++", "Motion Control", "Precision Engineering"],
      image: "/placeholder.svg?height=300&width=400",
      status: "Completed",
      year: "2023"
    },
    {
      id: 4,
      title: "Agricultural Drone Swarm",
      description: "Research project on coordinated drone swarms for precision agriculture and crop monitoring.",
      category: "Research",
      technologies: ["Drone Technology", "Swarm Intelligence", "Machine Learning"],
      image: "/placeholder.svg?height=300&width=400",
      status: "Ongoing",
      year: "2024"
    },
    {
      id: 5,
      title: "Robotic Welding System",
      description: "Advanced robotic welding solution with adaptive parameters and quality control.",
      category: "Robotics",
      technologies: ["Industrial Robotics", "Welding Technology", "Quality Control"],
      image: "/placeholder.svg?height=300&width=400",
      status: "Completed",
      year: "2022"
    },
    {
      id: 6,
      title: "Smart Warehouse Optimization",
      description: "Developed an intelligent warehouse management system with autonomous mobile robots.",
      category: "Automation",
      technologies: ["AMR", "Fleet Management", "Optimization Algorithms"],
      image: "/placeholder.svg?height=300&width=400",
      status: "Completed",
      year: "2024"
    }
  ];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-8">
      {/* Header */}
      <section className="py-16 gradient-bg text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Engineering Projects
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Explore our portfolio of innovative robotics and mechatronics solutions 
            that have transformed industries and solved complex engineering challenges.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            <Filter className="h-5 w-5 text-muted-foreground mr-2 self-center" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-0 shadow-sm hover:shadow-primary/10">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    {project.category}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription>
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    View Details <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your engineering vision to life with innovative 
            robotics and mechatronics solutions.
          </p>
          <Button size="lg" asChild>
            <a href="/contact">Start Your Project</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Projects;
