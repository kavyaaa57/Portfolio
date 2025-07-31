import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

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
    <motion.section 
      className="py-20 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Connect with <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's build something amazing together. Find me on these platforms!
          </p>
        </motion.div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactInfo.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              className="modern-card p-6 rounded-xl group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <contact.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                  <p className="font-medium group-hover:text-primary transition-colors">{contact.value}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Social Links */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6">Follow My Journey</h3>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="modern-card p-6 rounded-xl group flex flex-col items-center space-y-3 min-w-[200px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <social.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">{social.label}</p>
                  <p className="font-medium group-hover:text-primary transition-colors">{social.value}</p>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 group">
                <a href="mailto:kavyavarshini517@gmail.com">
                  <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Email Me
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" size="lg" className="group">
                <a href="https://github.com/kavyaaa57" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  View Code
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;