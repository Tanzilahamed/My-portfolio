import { GraduationCap, Award, Code, Palette, Gamepad2, Bot } from "lucide-react";

const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Daffodil International University",
    year: "2021 – 2025",
    gpa: "GPA 3.71/4.00",
  },
  {
    degree: "H.S.C in Science",
    institution: "Jashore Govt. College",
    year: "2020",
    gpa: "GPA 4.33/5.00",
  },
  {
    degree: "S.S.C in Science",
    institution: "Victoria Jubilee Govt. High School",
    year: "2018",
    gpa: "GPA 4.33/5.00",
  },
];

const skills = [
  { icon: Code, name: "Web Development", skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript"] },
  { icon: Gamepad2, name: "Game Development", skills: ["Unreal Engine", "C++", "3D Design"] },
  { icon: Palette, name: "UI/UX Design", skills: ["Figma", "Prototyping", "User Research"] },
  { icon: Bot, name: "AI & Automation", skills: ["n8n", "Chatbots", "APIs"] },
];

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-32 bg-card relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-2 bg-secondary rounded-full text-primary text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Know More</span>{" "}
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Proficient in HTML, CSS, JavaScript, React, Unreal Engine, UI/UX Design, and AI Automation, 
            with experience in building web applications, 3D games, and AI-driven solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">Education</h3>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

              {education.map((edu, index) => (
                <div key={index} className="relative pl-16 pb-8 last:pb-0 group">
                  {/* Timeline Dot */}
                  <div className="absolute left-4 top-1 w-4 h-4 rounded-full bg-secondary border-2 border-primary group-hover:scale-125 transition-transform duration-300" />
                  
                  <div className="bg-secondary/50 rounded-xl p-6 hover:bg-secondary transition-colors duration-300">
                    <div className="flex items-center gap-2 text-primary text-sm font-medium mb-2">
                      <Award size={16} />
                      {edu.year}
                    </div>
                    <h4 className="font-display text-lg font-semibold text-foreground mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-2">{edu.institution}</p>
                    <span className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium">
                      {edu.gpa}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Code className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">Skills & Expertise</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-secondary/50 rounded-xl p-6 hover:bg-secondary transition-all duration-300 hover:glow-primary group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <skill.icon className="text-primary" size={24} />
                  </div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-3">
                    {skill.name}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.skills.map((s, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-background/50 rounded-md text-muted-foreground text-xs"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
