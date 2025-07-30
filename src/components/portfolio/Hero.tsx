import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      <div className="absolute inset-0 bg-gradient-glow"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-32 right-20 w-48 h-48 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8 fade-in-up">
          {/* Name & Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="gradient-text">Kavyavarshini K</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
              Full Stack Developer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Enthusiastic engineering student with expertise in full-stack development, 
              AI/ML, and building innovative solutions that make a difference.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-xl transition-all duration-300 group"
            >
              <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Get In Touch
            </Button>
            <a
  href="https://drive.google.com/file/d/1UhXIr6Ejn2JJNbpHp4n4106p0SEQAr_U/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    size="lg"
    className="bg-gradient-to-r from-primary to-secondary text-white font-semibold px-6 py-3 rounded-xl shadow-lg flex items-center gap-2 hover:scale-105 hover:shadow-xl transition-all duration-300 group"
  >
    <Download className="h-6 w-6 group-hover:scale-110 transition-transform" />
    Download Resume
  </Button>
</a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a 
              href="https://github.com/kavyaaa57" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
            >
              <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://linkedin.com/in/kavyavarshinik" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-secondary/20 hover:border-secondary/50 hover:bg-secondary/10 transition-all duration-300 group"
            >
              <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="mailto:kavyavarshini517@gmail.com"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-accent/20 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 group"
            >
              <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
