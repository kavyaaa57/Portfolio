import { useEffect } from 'react';
import Navigation from '@/components/portfolio/Navigation';
import Hero from '@/components/portfolio/Hero';
import Skills from '@/components/portfolio/Skills';
import Projects from '@/components/portfolio/Projects';
import Experience from '@/components/portfolio/Experience';
import Education from '@/components/portfolio/Education';
import Contact from '@/components/portfolio/Contact';

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements with fade-in classes
    const elements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="skills" className="border-t border-primary/10">
          <Skills />
        </section>
        
        <section id="projects" className="border-t border-primary/10">
          <Projects />
        </section>
        
        <section id="experience" className="border-t border-primary/10">
          <Experience />
        </section>
        
        <section id="education" className="border-t border-primary/10">
          <Education />
        </section>
        
        <section id="contact" className="border-t border-primary/10">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-primary/10 bg-card/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Kavyavarshini K. Crafted with ❤️ and modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
