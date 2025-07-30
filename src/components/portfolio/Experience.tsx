import { Briefcase, Award, Users, Code, Calendar, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const experience = [
  {
    title: "MERN Full Stack Developer",
    company: "NoviTech R&D Pvt Ltd",
    location: "Coimbatore",
    duration: "Aug 2024 – Sep 2024",
    type: "Internship",
    description: "Efficiently built RapportTalk, a real-time chat app with authentication, socket messaging, and data persistence, cutting backend errors by 60%. Enhanced UI responsiveness and integration, boosting user experience and performance efficiency by 75%.",
    technologies: ["MERN Stack", "Socket.io", "Authentication", "Real-time Systems"],
    achievements: [
      "60% reduction in backend errors",
      "75% improvement in user experience",
      "Real-time chat system implementation",
      "Enhanced UI responsiveness"
    ]
  }
];

const achievements = [
  {
    title: "Top 10 Winner - AITM CodeFest 2025",
    organization: "Anjuman Institute of Technology, Karnataka",
    type: "Competition",
    reward: "Cash Prize",
    icon: Award,
    color: "primary"
  },
  {
    title: "Finalist - TNWISE Hackathon 2025",
    organization: "Kumaraguru College of Technology, Tamil Nadu",
    type: "Hackathon", 
    project: "Smart EV Energy Tracker",
    icon: Code,
    color: "secondary"
  },
  {
    title: "Finalist - GDSC DDU Hackathon 2024",
    organization: "GDSC DDU",
    type: "Hackathon",
    project: "AI Freelancing Platform",
    icon: Code,
    color: "accent"
  },
  {
    title: "Contributor - GirlScript Summer of Code 2024",
    organization: "GirlScript Foundation",
    type: "Open Source",
    description: "Contributed to open-source projects",
    icon: Users,
    color: "success"
  },
  {
    title: "Participant - Smart India Hackathon 2023",
    organization: "KGiSL Institute of Technology",
    type: "Internal Competition",
    icon: Code,
    color: "warning"
  }
];

const volunteering = [
  {
    title: "Mentor - PyExpo'24 Hackathon",
    organization: "KGiSL Institute of Technology, Coimbatore",
    duration: "Feb 2025 - March 2024",
    description: "Mentored participating teams throughout the hackathon, guiding them in ideation, debugging, and refining their Python-based projects.",
    responsibilities: [
      "Technical and strategic project support",
      "Project design and implementation guidance",
      "Final presentation coaching",
      "Fostered collaborative learning environment"
    ]
  },
  {
    title: "Open Source Contributor - GSSoC 2024",
    organization: "GirlScript Foundation",
    duration: "May 2024 – July 2024",
    description: "Contributed to open-source projects under the GSSoC program, focusing on frontend enhancements and bug fixes.",
    responsibilities: [
      "Frontend enhancements and bug fixes",
      "Collaborative work with maintainers",
      "Enhanced accessibility and UI responsiveness",
      "Pull request reviews and issue tracking"
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional experience, competitive achievements, and community contributions
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 fade-in-left">Professional Experience</h3>
          {experience.map((exp, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl border hover:border-primary/30 transition-all duration-300 fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Experience Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      {exp.type}
                    </Badge>
                  </div>
                  
                  <h4 className="text-xl font-semibold mb-2">{exp.title}</h4>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h5 className="font-medium mb-3">Key Achievements</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achieveIndex) => (
                        <li key={achieveIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-medium mb-3">Technologies</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-muted/50">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Awards & Achievements */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 fade-in-left">Awards & Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl border hover:border-primary/30 transition-all duration-300 group fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 bg-${achievement.color}/10 rounded-lg group-hover:bg-${achievement.color}/20 transition-colors`}>
                    <achievement.icon className={`h-6 w-6 text-${achievement.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {achievement.organization}
                    </p>
                    <div className="flex gap-2 mb-2">
                      <Badge variant="outline" className={`border-${achievement.color}/30 text-${achievement.color}`}>
                        {achievement.type}
                      </Badge>
                    </div>
                    {achievement.project && (
                      <p className="text-sm text-muted-foreground">
                        Project: {achievement.project}
                      </p>
                    )}
                    {achievement.reward && (
                      <p className="text-sm font-medium text-success">
                        {achievement.reward}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Volunteering Experience */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 fade-in-left">Volunteering Experience</h3>
          <div className="space-y-6">
            {volunteering.map((vol, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl border hover:border-secondary/30 transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <Users className="h-5 w-5 text-secondary" />
                  </div>
                  <Badge variant="outline" className="border-secondary/30 text-secondary">
                    Volunteer
                  </Badge>
                </div>

                <h4 className="text-xl font-semibold mb-2">{vol.title}</h4>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 text-muted-foreground">
                  <span className="font-medium">{vol.organization}</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{vol.duration}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {vol.description}
                </p>

                <div>
                  <h5 className="font-medium mb-3">Key Responsibilities</h5>
                  <ul className="space-y-2">
                    {vol.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-secondary"></div>
                        <span className="text-muted-foreground">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;