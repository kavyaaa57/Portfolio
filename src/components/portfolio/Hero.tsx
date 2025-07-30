import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 gradient-hero opacity-90"></div>
      <div className="absolute inset-0 gradient-mesh"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-32 right-20 w-32 h-32 bg-secondary/15 rounded-full blur-2xl floating-animation" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 right-20 w-56 h-56 bg-accent/20 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-32 w-36 h-36 bg-primary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-10 fade-in-up">
          {/* Enhanced Name & Title */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-tight">
              <span className="gradient-text text-shimmer block">Kavyavarshini</span>
              <span className="gradient-text text-shimmer block" style={{ animationDelay: '0.5s' }}>K</span>
            </h1>
            <div className="relative">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-muted-foreground mb-2">
                MERN Full Stack Developer
              </h2>
              <div className="w-32 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            </div>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Crafting innovative solutions with expertise in full-stack development, 
              AI/ML, and building exceptional digital experiences that make a difference.
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-xl transition-all duration-500 group px-8 py-4 text-lg neon-glow"
              asChild
            >
              <a href="mailto:kavyavarshini517@gmail.com">
                <Mail className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                Get In Touch
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 hover:border-primary text-foreground hover:bg-primary/10 group px-8 py-4 text-lg glass-card"
              asChild
            >
              <a 
                href="https://drive.google.com/file/d/1UhXIr6Ejn2JJNbpHp4n4106p0SEQAr_U/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Download className="mr-3 h-6 w-6 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-8 pt-12">
            <a 
              href="https://github.com/kavyaaa57" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="modern-card p-4 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-500 group-hover:scale-hover group-hover:neon-glow">
                <Github className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-muted-foreground whitespace-nowrap">
                GitHub
              </div>
            </a>
            <a 
              href="https://linkedin.com/in/kavyavarshinik" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="modern-card p-4 rounded-2xl border border-secondary/20 hover:border-secondary/50 transition-all duration-500 group-hover:scale-hover group-hover:neon-glow">
                <Linkedin className="h-8 w-8 text-secondary group-hover:scale-110 transition-transform" />
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-muted-foreground whitespace-nowrap">
                LinkedIn
              </div>
            </a>
            <a 
              href="mailto:kavyavarshini517@gmail.com"
              className="group relative"
            >
              <div className="modern-card p-4 rounded-2xl border border-accent/20 hover:border-accent/50 transition-all duration-500 group-hover:scale-hover group-hover:neon-glow">
                <Mail className="h-8 w-8 text-accent group-hover:scale-110 transition-transform" />
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-muted-foreground whitespace-nowrap">
                Email
              </div>
            </a>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 group cursor-pointer" onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}>
            <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center group-hover:border-primary transition-colors">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;