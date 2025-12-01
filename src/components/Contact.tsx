import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="contact" className="py-20 px-6">
      <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="font-mono text-primary">&gt;</span> Get In Touch
        </h2>
        
        <Card className="p-8 md:p-12 bg-card border-border shadow-card">
          <div className="text-center mb-8">
            <p className="text-lg text-muted-foreground mb-6">
              I'm currently looking for new opportunities. Whether you have a question or just want 
              to say hi, I'll try my best to get back to you!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-secondary/50">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a 
                  href="mailto:balajimatta.in@gmail.com" 
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  balajimatta.in@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-secondary/50">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <a 
                  href="tel:+919701820238" 
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  +91 9701820238
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-4">
              <Button 
                variant="default"
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
                onClick={() => window.open('https://github.com/balaji-matta18', '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-border hover:bg-secondary"
                onClick={() => window.open('https://www.linkedin.com/in/matta-balaji/', '_blank')}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </div>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-primary/30 hover:bg-primary/5 text-primary"
              onClick={() => window.open('mailto:balajimatta.in@gmail.com')}
            >
              <Mail className="w-4 h-4 mr-2" />
              Send Email
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
        </Card>
      </div>
    </section>
  );
};

export default Contact;
