import { ExternalLink, Github, Calendar, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: "RapportTalk",
    description: "Real-time chat application with authentication, socket messaging, and data persistence. Reduced backend errors by 60% and improved user experience by 75%.",
    technologies: ["MERN Stack", "Socket.io", "Authentication", "Real-time"],
    github: "https://github.com/kavyaaa57/RapportTalk",
    type: "Internship Project",
    date: "Aug 2024 - Sep 2024",
    impact: "60% error reduction, 75% UX improvement",
    color: "primary"
  },
  {
    title: "Employee Rostering System",
    description: "Collaborative shift scheduling system with calendar view and role-based access control. Built with Ionic Angular for enhanced user management.",
    technologies: ["Ionic", "Angular", "Calendar UI", "Role Management"],
    github: "https://github.com/dipankarchettri/employee-rostering-system",
    type: "Team Project",
    date: "Apr 2025 - May 2025",
    impact: "Improved shift management efficiency",
    color: "secondary"
  },
  {
    title: "Driver Feedback App",
    description: "Mobile application monitoring sensor data with optimized real-time performance. Resolved latency issues for smooth user experience.",
    technologies: ["React Native", "Python", "Machine Learning", "Sensors"],
    github: "https://github.com/kavyaaa57/DriverFeedbackApp",
    type: "Mobile Development",
    date: "Apr 2025",
    impact: "Real-time performance optimization",
    color: "accent"
  },
  {
    title: "TradeWise",
    description: "Trading platform with real-time data handling, RESTful API integration, and robust backend error resolution for financial operations.",
    technologies: ["React", "FastAPI", "PostgreSQL", "Machine Learning"],
    github: "https://github.com/kavyaaa57/TradeWise",
    type: "Full-Stack Project",
    date: "Feb 2025 - Apr 2025",
    impact: "Real-time trading capabilities",
    color: "success"
  },
  {
    title: "Pothole Segmentation",
    description: "Computer vision system for video-based pothole detection using YOLOv8. Optimized model accuracy and handled edge case scenarios.",
    technologies: ["YOLOv8", "Python", "Roboflow", "Computer Vision"],
    github: "https://github.com/kavyaaa57/PotholeSegmentation",
    type: "AI/ML Project",
    date: "Oct 2024",
    impact: "Accurate pothole detection system",
    color: "warning"
  }
];

const Projects = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world applications showcasing technical expertise and problem-solving skills
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative overflow-hidden fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="glass-card p-8 rounded-2xl h-full hover:bg-card-hover transition-all duration-500 border hover:border-primary/30 hover:shadow-glow">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <Badge variant="outline" className={`border-${project.color}/30 text-${project.color}`}>
                        {project.type}
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      {project.date}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Impact */}
                <div className="bg-muted/30 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className={`h-4 w-4 text-${project.color}`} />
                    <span className="text-sm font-medium">Impact</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{project.impact}</p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-muted/50 hover:bg-muted transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group/btn"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Source Code
                    </a>
                  </Button>
                </div>

                {/* Decorative Element */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-${project.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12 fade-in-up" style={{ animationDelay: '1s' }}>
          <Button variant="outline" size="lg" className="group" asChild>
            <a href="https://github.com/kavyaaa57" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
              View All Projects on GitHub
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;