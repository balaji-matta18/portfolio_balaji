import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
        <div className="mb-6 inline-block">
          <span className="font-mono text-sm text-primary border border-primary/30 px-4 py-2 rounded-full bg-primary/5">
            &lt;Developer /&gt;
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          Balaji Matta
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
          Full Stack Developer
        </p>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Building robust <span className="text-primary font-mono">RESTful applications</span> with Spring Boot, 
          crafting secure authentication systems, and deploying scalable solutions on AWS.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button 
            variant="default" 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow font-medium"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-border hover:bg-secondary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/30 hover:bg-primary/5 text-primary"
            asChild
          >
            <a href="/balaji_matta_resume.pdf" download="Balaji_Matta_Resume.pdf">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </a>
          </Button>
        </div>
        
        <div className="flex gap-4 justify-center">
          <a 
            href="https://github.com/balaji-matta18" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
          >
            <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a 
            href="https://www.linkedin.com/in/matta-balaji/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
          >
            <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a 
            href="mailto:balajimatta.in@gmail.com"
            className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
          >
            <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;
