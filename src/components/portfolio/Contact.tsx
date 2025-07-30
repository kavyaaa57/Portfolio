import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "kavyavarshini517@gmail.com",
    href: "mailto:kavyavarshini517@gmail.com",
    color: "primary"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 93427 33381",
    href: "tel:+919342733381",
    color: "secondary"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Coimbatore, Tamil Nadu",
    href: "#",
    color: "accent"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/kavyaaa57",
    href: "https://github.com/kavyaaa57",
    color: "primary",
    description: "Open source projects and code repositories"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/kavyavarshinik",
    href: "https://linkedin.com/in/kavyavarshinik",
    color: "secondary",
    description: "Professional network and career updates"
  }
];

const Contact = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-mesh opacity-30"></div>
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '3s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's <span className="gradient-text text-shimmer">Connect</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on exciting projects? Let's build something amazing together!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="max-w-6xl mx-auto">
          {/* Main Contact Information */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((contact, index) => (
              <div
                key={index}
                className="group fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <a
                  href={contact.href}
                  className="block h-full"
                >
                  <div className="modern-card p-8 rounded-2xl h-full hover:border-primary/30 transition-all duration-500 group-hover:scale-hover group-hover:glow-hover">
                    <div className="text-center">
                      <div className={`inline-flex p-6 bg-${contact.color}/10 rounded-2xl mb-6 group-hover:bg-${contact.color}/20 transition-all duration-300 neon-glow`}>
                        <contact.icon className={`h-10 w-10 text-${contact.color} group-hover:scale-110 transition-transform`} />
                      </div>
                      <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                        {contact.label}
                      </h3>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors mb-4">
                        {contact.value}
                      </p>
                      <div className="flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Social Links Section */}
          <div className="fade-in-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-3xl font-bold text-center mb-12">
              Follow My <span className="gradient-text">Journey</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {socialLinks.map((social, index) => (
                <div
                  key={index}
                  className="group"
                  style={{ animationDelay: `${(index + 3) * 0.2}s` }}
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <div className="glass-card p-8 rounded-2xl h-full hover:border-primary/30 transition-all duration-500 group-hover:scale-hover group-hover:glow-hover">
                      <div className="flex items-start gap-6">
                        <div className={`p-4 bg-${social.color}/10 rounded-xl group-hover:bg-${social.color}/20 transition-all duration-300`}>
                          <social.icon className={`h-8 w-8 text-${social.color} group-hover:scale-110 transition-transform`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                            {social.label}
                          </h4>
                          <p className="text-muted-foreground mb-3 group-hover:text-foreground transition-colors">
                            {social.value}
                          </p>
                          <p className="text-sm text-muted-foreground/80 group-hover:text-muted-foreground transition-colors">
                            {social.description}
                          </p>
                        </div>
                        <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center fade-in-up" style={{ animationDelay: '1s' }}>
            <div className="max-w-4xl mx-auto">
              <div className="morphism-card p-12 rounded-3xl">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Start a <span className="gradient-text">Project</span>?
                </h3>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  Whether you need a full-stack developer, want to collaborate on an open-source project, 
                  or just want to discuss the latest in tech, I'm here to help bring your ideas to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 group px-8 py-4 text-lg">
                    <a href="mailto:kavyavarshini517@gmail.com">
                      <Mail className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                      Start a Conversation
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="group px-8 py-4 text-lg border-primary/30 hover:border-primary">
                    <a href="https://github.com/kavyaaa57" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                      Explore My Work
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Touch */}
          <div className="text-center mt-16 fade-in-up" style={{ animationDelay: '1.2s' }}>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-destructive animate-pulse-glow" />
              <span>and cutting-edge tech</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;