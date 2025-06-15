
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { CalendarDays, Clock, ArrowRight, User } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Autonomous Robotics in Manufacturing",
      excerpt: "Exploring how AI-powered autonomous robots are revolutionizing manufacturing processes and what this means for the industry's future.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "Mattie Ball",
      publishDate: "2024-06-10",
      readTime: "8 min read",
      category: "Robotics",
      tags: ["AI", "Manufacturing", "Automation", "Industry 4.0"],
      image: "/placeholder.svg?height=300&width=500",
      featured: true
    },
    {
      id: 2,
      title: "Mechatronics Design Principles for Modern Applications",
      excerpt: "A deep dive into the fundamental principles of mechatronics design and how they apply to contemporary engineering challenges.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "Mattie Ball",
      publishDate: "2024-06-05",
      readTime: "6 min read",
      category: "Mechatronics",
      tags: ["Design", "Engineering", "Systems Integration"],
      image: "/placeholder.svg?height=300&width=500",
      featured: false
    },
    {
      id: 3,
      title: "Implementing Predictive Maintenance with IoT Sensors",
      excerpt: "How IoT sensors and machine learning algorithms can predict equipment failures before they happen, saving costs and downtime.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "Mattie Ball",
      publishDate: "2024-05-28",
      readTime: "10 min read",
      category: "IoT",
      tags: ["Predictive Maintenance", "IoT", "Machine Learning"],
      image: "/placeholder.svg?height=300&width=500",
      featured: false
    },
    {
      id: 4,
      title: "Collaborative Robots: The Future of Human-Robot Interaction",
      excerpt: "Examining the rise of collaborative robots (cobots) and their impact on workplace safety and productivity.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "Mattie Ball",
      publishDate: "2024-05-20",
      readTime: "7 min read",
      category: "Robotics",
      tags: ["Collaborative Robots", "Safety", "Human-Robot Interaction"],
      image: "/placeholder.svg?height=300&width=500",
      featured: false
    },
    {
      id: 5,
      title: "Optimizing Control Systems for Energy Efficiency",
      excerpt: "Strategies for designing and implementing energy-efficient control systems in industrial applications.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "Mattie Ball",
      publishDate: "2024-05-15",
      readTime: "9 min read",
      category: "Control Systems",
      tags: ["Energy Efficiency", "Control Systems", "Sustainability"],
      image: "/placeholder.svg?height=300&width=500",
      featured: false
    },
    {
      id: 6,
      title: "Machine Vision Applications in Quality Control",
      excerpt: "How computer vision and machine learning are transforming quality control processes across industries.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "Mattie Ball",
      publishDate: "2024-05-08",
      readTime: "8 min read",
      category: "Machine Vision",
      tags: ["Computer Vision", "Quality Control", "Machine Learning"],
      image: "/placeholder.svg?height=300&width=500",
      featured: false
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen pt-8">
      {/* Header */}
      <section className="py-16 gradient-bg text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Learning Log & Insights
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Exploring the latest developments in robotics, mechatronics, and engineering. 
            Sharing knowledge, insights, and lessons learned from real-world projects.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Badge className="mb-4">Featured Article</Badge>
              <h2 className="text-2xl font-bold">Latest Insights</h2>
            </div>
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4">{featuredPost.category}</Badge>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CalendarDays className="h-4 w-4" />
                        <span>{new Date(featuredPost.publishDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold">{featuredPost.title}</h3>
                    <p className="text-muted-foreground">{featuredPost.excerpt}</p>
                    <div className="flex flex-wrap gap-2">
                      {featuredPost.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                    <Button className="w-fit">
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">All Articles</h2>
            <p className="text-lg text-muted-foreground">
              Browse through our collection of engineering insights and technical articles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-0 shadow-sm hover:shadow-primary/10">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4">{post.category}</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center space-x-1">
                      <CalendarDays className="h-4 w-4" />
                      <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{post.tags.length - 2} more
                      </Badge>
                    )}
                  </div>
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 gradient-bg text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest insights on robotics, 
            mechatronics, and engineering innovations directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg text-foreground flex-1"
            />
            <Button className="bg-white text-primary hover:bg-white/90">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
