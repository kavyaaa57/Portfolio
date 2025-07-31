import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 20,
        y: (e.clientY - window.innerHeight / 2) / 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Artistic Background Elements */}
      <motion.div 
        className="absolute inset-0 opacity-60"
        style={{ y: y1 }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-mesh"></div>
      </motion.div>
      
      {/* Floating Artistic Elements */}
      <motion.div 
        className="absolute top-20 left-[10%] w-40 h-40 rounded-full blur-2xl floating-animation"
        style={{
          background: 'linear-gradient(135deg, hsl(14 85% 65% / 0.3), hsl(270 60% 70% / 0.3))',
          x: mousePosition.x * 0.5,
          y: mousePosition.y * 0.5,
        }}
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-32 right-[15%] w-64 h-64 rounded-full blur-2xl floating-animation"
        style={{
          background: 'linear-gradient(135deg, hsl(170 50% 65% / 0.25), hsl(45 95% 65% / 0.25))',
          x: mousePosition.x * -0.3,
          y: mousePosition.y * -0.3,
        }}
        animate={{ 
          scale: [1, 0.8, 1],
          rotate: [360, 180, 0],
        }}
        transition={{ 
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
      
      {/* Sparkle Elements */}
      <motion.div
        className="absolute top-[30%] right-[25%] text-gold"
        animate={{ 
          scale: [1, 1.5, 1],
          rotate: [0, 360],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Sparkles className="w-6 h-6" />
      </motion.div>
      <motion.div
        className="absolute bottom-[40%] left-[20%] text-primary"
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [360, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <Sparkles className="w-4 h-4" />
      </motion.div>
      
      <motion.div 
        className="container mx-auto px-6 relative z-10"
        style={{ y: y2 }}
      >
        <motion.div 
          className="text-center space-y-12"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Name & Title */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-heading font-bold tracking-tight leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              style={{
                x: mousePosition.x * 0.1,
                y: mousePosition.y * 0.1,
              }}
            >
              <span className="gradient-text block">Kavyavarshini</span>
              <span className="text-primary block mt-2">K</span>
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-4xl font-medium text-muted-foreground font-heading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
            >
              Creative Developer & AI Enthusiast
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.0 }}
            >
              Crafting beautiful digital experiences with modern technologies, 
              passionate about innovation and creating solutions that matter.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.3 }}
          >
            <motion.div 
              whileHover={{ scale: 1.08 }} 
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary text-white font-semibold px-8 py-4 rounded-full shadow-glow hover:shadow-xl transition-all duration-500 group border-none text-lg"
                asChild
              >
                <a href="mailto:kavyavarshini517@gmail.com">
                  <Mail className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  Get In Touch
                </a>
              </Button>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.08 }} 
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <a
                href="https://drive.google.com/file/d/1UhXIr6Ejn2JJNbpHp4n4106p0SEQAr_U/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/20 backdrop-blur-sm border-white/30 text-foreground font-semibold px-8 py-4 rounded-full hover:bg-white/30 hover:border-primary/50 transition-all duration-500 group text-lg"
                >
                  <Download className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  View Resume
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center space-x-8 pt-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.6 }}
          >
            <motion.a 
              href="https://github.com/kavyaaa57" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full artistic-card border border-primary/30 hover:border-primary/60 transition-all duration-500 group"
              whileHover={{ scale: 1.15, rotate: 8, y: -8 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="h-6 w-6 group-hover:scale-110 transition-transform duration-300 text-primary group-hover:text-secondary" />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/kavyavarshinik" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full artistic-card border border-secondary/30 hover:border-secondary/60 transition-all duration-500 group"
              whileHover={{ scale: 1.15, rotate: -8, y: -8 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform duration-300 text-secondary group-hover:text-primary" />
            </motion.a>
            <motion.a 
              href="mailto:kavyavarshini517@gmail.com"
              className="p-4 rounded-full artistic-card border border-accent/30 hover:border-accent/60 transition-all duration-500 group"
              whileHover={{ scale: 1.15, rotate: 8, y: -8 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-6 w-6 group-hover:scale-110 transition-transform duration-300 text-accent group-hover:text-gold" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 15, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 2 } }}
        >
          <div className="flex flex-col items-center space-y-2">
            <ArrowDown className="h-6 w-6 text-primary animate-pulse" />
            <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">Scroll</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
