import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const education = [
  {
    degree: "B. Tech (Hons.) in Artificial Intelligence & Data Science",
    institution: "KGiSL Institute of Technology",
    location: "Tamil Nadu",
    duration: "2022 – 2026 Expected",
    grade: "CGPA: 9.1",
    status: "Current",
    color: "primary"
  },
  {
    degree: "Higher Secondary - Class XII",
    institution: "Equitas Gurukul MHSS",
    location: "Tamil Nadu", 
    duration: "2022",
    grade: "Score: 91.2%",
    status: "Completed",
    color: "secondary"
  },
  {
    degree: "SSLC - Class X",
    institution: "Equitas Gurukul MHSS",
    location: "Tamil Nadu",
    duration: "2020",
    grade: "Score: 89.5%", 
    status: "Completed",
    color: "accent"
  }
];

const certifications = [
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    date: "November 2023",
    type: "Cloud Computing",
    color: "warning"
  },
  {
    title: "Red Hat System Administration I (RH124)",
    issuer: "Red Hat",
    date: "December 20, 2023",
    type: "System Administration",
    color: "destructive"
  },
  {
    title: "Cambridge Linguaskill Business English (B1)",
    issuer: "Cambridge Assessment English",
    date: "May 2024",
    type: "Language Proficiency",
    color: "success"
  },
  {
    title: "Advanced Django and Python Training",
    issuer: "Pinesphere, Coimbatore",
    date: "April 2023 – May 2023",
    type: "Web Development",
    color: "primary"
  }
];

const languages = [
  { name: "Tamil", level: "Native / Fluent", proficiency: 100 },
  { name: "English", level: "Professional Proficiency", proficiency: 90 },
  { name: "Telugu", level: "Conversational Proficiency", proficiency: 70 }
];

const Education = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic background and continuous learning through professional certifications
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 fade-in-left">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl border hover:border-primary/30 transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Education Icon & Status */}
                  <div className="flex items-center gap-4">
                    <div className={`p-3 bg-${edu.color}/10 rounded-xl`}>
                      <GraduationCap className={`h-8 w-8 text-${edu.color}`} />
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`border-${edu.color}/30 text-${edu.color} ${edu.status === 'Current' ? 'animate-pulse-glow' : ''}`}
                    >
                      {edu.status}
                    </Badge>
                  </div>

                  {/* Education Details */}
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">{edu.degree}</h4>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <GraduationCap className="h-4 w-4" />
                        <span className="font-medium">{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>

                    <div className={`inline-flex items-center gap-2 px-4 py-2 bg-${edu.color}/10 rounded-full`}>
                      <Award className={`h-4 w-4 text-${edu.color}`} />
                      <span className="font-semibold">{edu.grade}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 fade-in-left">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl border hover:border-primary/30 transition-all duration-300 group fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 bg-${cert.color}/10 rounded-lg group-hover:bg-${cert.color}/20 transition-colors`}>
                    <Award className={`h-6 w-6 text-${cert.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Issued by: {cert.issuer}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <Badge variant="outline" className={`border-${cert.color}/30 text-${cert.color}`}>
                        {cert.type}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {cert.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 fade-in-left">Languages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl border hover:border-primary/30 transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="font-semibold mb-2">{lang.name}</h4>
                <p className="text-sm text-muted-foreground mb-4">{lang.level}</p>
                
                {/* Proficiency Bar */}
                <div className="w-full bg-muted/30 rounded-full h-2">
                  <div 
                    className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${lang.proficiency}%` }}
                  ></div>
                </div>
                <div className="text-right mt-1">
                  <span className="text-xs text-muted-foreground">{lang.proficiency}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;