import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "NeuraAI",
    subtitle: "AI-Powered Web Development Agent",
    description: "Final Year Project - An AI tool that generates full-stack web applications from natural-language input, revolutionizing the development workflow.",
    technologies: ["React", "TypeScript", "OpenAI", "Node.js", "PostgreSQL"],
    year: "2025",
    featured: true,
    image: "https://i.postimg.cc/tg7CGQVr/Sample.gif",
  },
  {
    title: "AI Customer Support Chatbot",
    subtitle: "Conversational AI Solution",
    description: "Intelligent chatbot system that improved user engagement by 30% through natural language processing and smart response generation.",
    technologies: ["Python", "NLP", "FastAPI", "React"],
    year: "2024",
    featured: false,
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Amazon Clone",
    subtitle: "E-commerce Platform",
    description: "Fully functional e-commerce platform with user authentication, payment integration, and real-time inventory management.",
    technologies: ["React", "Firebase", "Stripe", "Redux"],
    year: "2024",
    featured: false,
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "n8n Automation Workflows",
    subtitle: "Business Process Automation",
    description: "Custom automation workflows connecting multiple APIs and services to streamline business operations and reduce manual tasks.",
    technologies: ["n8n", "APIs", "Webhooks", "JavaScript"],
    year: "2024",
    featured: false,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Unreal Engine Mini Games",
    subtitle: "3D Game Development",
    description: "Collection of small-scale 3D games built in Unreal Engine, focusing on innovative gameplay mechanics and immersive level design.",
    technologies: ["Unreal Engine", "C++", "Blueprints", "3D Art"],
    year: "2023",
    featured: false,
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Bolt.new Clone",
    subtitle: "Web Prototyping Tool",
    description: "Interactive web prototyping tool that allows rapid creation and iteration of web interfaces with real-time preview.",
    technologies: ["React", "TypeScript", "Monaco Editor", "WebContainers"],
    year: "2024",
    featured: false,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
  },
];

const Portfolio = () => {
  return (

    <section id="portfolio" className="py-16 md:py-20 lg:py-32 bg-card relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-2 bg-secondary rounded-full text-primary text-sm font-medium mb-4">
            My Work
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Featured</span>{" "}
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work spanning web development, AI solutions, game development, and automation.
          </p>
        </div>

        {/* Featured Project */}
        {projects.filter(p => p.featured).map((project, index) => (
          <div key={index} className="mb-12">
            <div className="group bg-gradient-card rounded-3xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-elevated">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative overflow-hidden h-56 sm:h-64 lg:h-auto">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent lg:bg-gradient-to-l" />
                  
                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-primary rounded-full">
                    <Sparkles size={14} className="text-primary-foreground sm:w-4 sm:h-4" />
                    <span className="text-primary-foreground text-xs sm:text-sm font-semibold">Featured Project</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                  <span className="text-primary text-sm font-medium mb-2">{project.year}</span>
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-base sm:text-lg mb-4">{project.subtitle}</p>
                  <p className="text-muted-foreground text-sm sm:text-base mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-secondary rounded-full text-xs sm:text-sm text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="hero" size="lg" className="w-full sm:w-auto">
                      <ExternalLink size={18} />
                      View Project
                    </Button>
                    <Button variant="heroOutline" size="lg" className="w-full sm:w-auto">
                      <Github size={18} />
                      Source Code
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-elevated hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 px-3 py-1 bg-primary/90 rounded-full text-primary-foreground text-xs font-medium">
                  {project.year}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-primary text-sm mb-3">{project.subtitle}</p>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-secondary/70 rounded text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-0.5 bg-secondary/70 rounded text-xs text-muted-foreground">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={14} />
                    Demo
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={14} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
