import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

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
    color: "primary"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/kavyavarshinik",
    href: "https://linkedin.com/in/kavyavarshinik",
    color: "secondary"
  }
];

const Contact = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on exciting projects? Let's connect and build something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 fade-in-left">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, collaborating on innovative projects, 
                or simply having a conversation about technology and development. Feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 hover:bg-card-hover transition-all duration-300 group"
                >
                  <div className={`p-3 bg-${contact.color}/10 rounded-lg group-hover:bg-${contact.color}/20 transition-colors`}>
                    <contact.icon className={`h-5 w-5 text-${contact.color}`} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{contact.label}</p>
                    <p className="font-medium group-hover:text-primary transition-colors">{contact.value}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors ml-auto" />
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 hover:bg-card-hover transition-all duration-300 group"
                  >
                    <div className={`p-3 bg-${social.color}/10 rounded-lg group-hover:bg-${social.color}/20 transition-colors`}>
                      <social.icon className={`h-5 w-5 text-${social.color}`} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{social.label}</p>
                      <p className="font-medium group-hover:text-primary transition-colors">{social.value}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors ml-auto" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in-right">
            <div className="glass-card p-8 rounded-2xl border hover:border-primary/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <Input 
                      placeholder="Your first name"
                      className="bg-background/50 border-primary/20 focus:border-primary/50"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <Input 
                      placeholder="Your last name"
                      className="bg-background/50 border-primary/20 focus:border-primary/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input 
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-background/50 border-primary/20 focus:border-primary/50"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input 
                    placeholder="What's this about?"
                    className="bg-background/50 border-primary/20 focus:border-primary/50"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                    rows={5}
                    className="bg-background/50 border-primary/20 focus:border-primary/50 resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-xl transition-all duration-300 group"
                  size="lg"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>

              <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  <span className="font-medium">Quick response guaranteed!</span> I typically reply within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Ready to Start a Project?</h3>
            <p className="text-muted-foreground mb-6">
              Whether you need a full-stack developer, want to collaborate on an open-source project, 
              or just want to discuss the latest in tech, I'm here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 group">
                <a href="mailto:kavyavarshini517@gmail.com">
                  <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Start a Conversation
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="group">
                <a href="https://github.com/kavyaaa57" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  View My Work
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;