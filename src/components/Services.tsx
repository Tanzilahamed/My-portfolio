import { Globe, Palette, Gamepad2, Bot, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Full-stack web application design and implementation using modern technologies like React, TypeScript, and Node.js.",
    features: ["Responsive Design", "Performance Optimization", "SEO Best Practices"],
    gradient: "from-primary to-cyan-400",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and user-friendly interfaces that delight users and drive engagement.",
    features: ["User Research", "Wireframing", "Prototyping"],
    gradient: "from-accent to-pink-400",
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    description: "Designing and developing interactive 2D/3D games using Unreal Engine with engaging gameplay mechanics.",
    features: ["Unreal Engine", "Level Design", "Game Mechanics"],
    gradient: "from-green-400 to-emerald-400",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description: "Building AI-driven automation tools and chatbots for business solutions to improve efficiency.",
    features: ["Chatbots", "Workflow Automation", "API Integration"],
    gradient: "from-orange-400 to-amber-400",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-2 bg-secondary rounded-full text-primary text-sm font-medium mb-4">
            What I Do
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">My</span>{" "}
            <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I offer a comprehensive range of digital services to help bring your ideas to life, 
            from web applications to immersive game experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-elevated hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="text-background" size={28} />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-secondary rounded-full text-sm text-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Learn More Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all duration-300"
              >
                Learn More
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
