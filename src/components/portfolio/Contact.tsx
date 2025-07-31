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
    <footer className="py-16 border-t border-border/20 bg-gradient-to-t from-background/50 to-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <motion.h3 
            className="text-2xl font-heading font-semibold gradient-text mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Let's Connect
          </motion.h3>
          <motion.p 
            className="text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Feel free to reach out and start a conversation
          </motion.p>
        </div>
        <div className="flex justify-center gap-8">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full artistic-card border border-primary/20 hover:border-primary/50 transition-all duration-500 group glow-hover"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
              whileHover={{ scale: 1.15, y: -8, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon className="h-6 w-6 text-primary group-hover:text-secondary transition-colors duration-300" />
            </motion.a>
          ))}
          <motion.a
            href="mailto:kavyavarshini517@gmail.com"
            className="p-4 rounded-full artistic-card border border-accent/20 hover:border-accent/50 transition-all duration-500 group glow-hover"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.15, y: -8, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="h-6 w-6 text-accent group-hover:text-gold transition-colors duration-300" />
          </motion.a>
        </div>
        
        {/* Copyright */}
        <motion.div 
          className="text-center mt-12 pt-8 border-t border-border/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-sm text-muted-foreground">
            © 2024 Kavyavarshini K. Crafted with ♥ and creativity.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Contact;