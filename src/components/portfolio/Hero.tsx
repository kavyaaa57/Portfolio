import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-60"></div>
      
      {/* Floating Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl"
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-32 right-20 w-48 h-48 bg-secondary/30 rounded-full blur-xl"
        animate={{ 
          y: [0, 20, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Name & Title */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold tracking-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="gradient-text">Kavyavarshini K</span>
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl font-medium text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Full Stack Developer
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Enthusiastic engineering student with expertise in full-stack development, 
              AI/ML, and building innovative solutions that make a difference.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-xl transition-all duration-300 group"
                asChild
              >
                <a href="mailto:kavyavarshini517@gmail.com">
                  <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Get In Touch
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://drive.google.com/file/d/1UhXIr6Ejn2JJNbpHp4n4106p0SEQAr_U/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary text-white font-semibold px-6 py-3 rounded-xl shadow-lg flex items-center gap-2 hover:shadow-xl transition-all duration-300 group"
                >
                  <Download className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  Download Resume
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center space-x-6 pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.a 
              href="https://github.com/kavyaaa57" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/kavyavarshinik" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </motion.a>
            <motion.a 
              href="mailto:kavyavarshini517@gmail.com"
              className="p-3 rounded-full glass-card border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          initial={{ opacity: 0 }}
          style={{ animationDelay: '1.5s' }}
          whileInView={{ opacity: 1 }}
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
