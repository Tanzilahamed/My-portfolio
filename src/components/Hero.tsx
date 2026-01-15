import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import profilePhoto from "@/assets/profile-photo.png";
const Hero = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{
        animationDelay: "1.5s"
      }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      </div>


      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20 lg:pt-0">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Profile Image */}
          <div className="relative animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-50 animate-pulse-glow" />
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/30 glow-primary">
                <img src={profilePhoto} alt="MD. Tanzil Ahamed" className="w-full h-full object-cover object-top" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-card border border-border rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 shadow-elevated">
                <span className="text-primary font-semibold text-sm sm:text-base">4+ Years</span>
                <span className="text-muted-foreground text-xs sm:text-sm block">Experience</span>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-fade-in" style={{
            animationDelay: "0.3s"
          }}>
              <span className="inline-block px-4 py-2 bg-secondary rounded-full text-primary text-sm font-medium mb-6">
                👋 Hello, I'm
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 animate-fade-in" style={{
            animationDelay: "0.4s"
          }}>
              <span className="text-foreground">MD. Tanzil</span>
              <br />
              <span className="text-gradient">Ahamed</span>
            </h1>

            <p className="text-xl md:text-2xl text-primary font-medium mb-6 animate-fade-in" style={{
            animationDelay: "0.5s"
          }}>
              Web Developer
            </p>

            <p className="text-muted-foreground text-lg max-w-xl mb-8 animate-fade-in" style={{
            animationDelay: "0.6s"
          }}>
              Passionate about building immersive digital experiences, combining expertise in web development, 
              game design, and UI/UX design to create innovative solutions and interactive applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in" style={{
            animationDelay: "0.7s"
          }}>
              <Button variant="hero" size="lg" asChild>
                <a href="#portfolio">View Portfolio</a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start animate-fade-in" style={{
            animationDelay: "0.8s"
          }}>
              <a href="https://github.com/Tanzilahamed" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="mailto:tanzilahamedt11@gmail.com" className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>


      </div>
    </section>;
};
export default Hero;