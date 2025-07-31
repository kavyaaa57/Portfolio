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
    <footer className="py-8 border-t border-border/20">
      <div className="container mx-auto px-6">
        <div className="flex justify-center gap-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background/50 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
          <motion.a
            href="mailto:kavyavarshini517@gmail.com"
            className="p-3 rounded-full bg-background/50 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all duration-300 group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;