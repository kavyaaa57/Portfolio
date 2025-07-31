import { Code, Database, Server, Smartphone, Cloud, Brain } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: ["ReactJS", "React Native", "JavaScript", "HTML5", "CSS3", "Ionic"],
    color: "primary"
  },
  {
    title: "Backend Development", 
    icon: Server,
    skills: ["FastAPI", "Django", "FAST APIs", "RESTful APIs", "API Integration"],
    color: "secondary"
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "Database Design", "Data Modeling"],
    color: "accent"
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: ["React Native", "Ionic", "Cross-platform", "Mobile UI/UX"],
    color: "success"
  },
  {
    title: "DevOps & Tools",
    icon: Cloud,
    skills: ["Git", "Jenkins", "Docker", "Kubernetes", "Maven", "VS Code"],
    color: "warning"
  },
  {
    title: "AI/ML & Data Science",
    icon: Brain,
    skills: ["Python", "Machine Learning", "YOLOv8", "Roboflow", "Model Building"],
    color: "primary"
  }
];

const programmingLanguages = ["Python", "Java", "C", "JavaScript"];

const Skills = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        {/* Programming Languages */}
        <div className="mb-16 fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl font-heading font-semibold mb-6 text-center">Programming Languages</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {programmingLanguages.map((lang, index) => (
              <div
                key={lang}
                className="px-8 py-4 artistic-card backdrop-blur-sm border border-primary/20 rounded-full hover:border-primary/50 hover:bg-primary/10 transition-all duration-500 hover:scale-110 glow-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="font-medium text-lg">{lang}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="artistic-card p-8 rounded-2xl h-full transition-all duration-500 border fade-in-up">
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading font-semibold mb-4 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>

                {/* Skills */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="flex items-center space-x-3 group/skill"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary/60 group-hover/skill:bg-primary transition-colors"></div>
                      <span className="text-muted-foreground group-hover/skill:text-foreground transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mt-16 text-center fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-2xl font-heading font-semibold mb-6">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "Analytical Thinking", "Problem-Solving", "Team Collaboration", 
              "Effective Communication", "Quick Learner", "Self-Motivation",
              "Time Management", "Adaptability", "Initiative", "Accountability"
            ].map((skill, index) => (
              <span
                key={skill}
                className="px-6 py-3 artistic-card text-sm hover:scale-105 glow-hover transition-all duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;