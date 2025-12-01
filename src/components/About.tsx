import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="about" className="py-20 px-6">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="font-mono text-primary">&gt;</span> About Me
        </h2>
        
        <Card className="p-8 md:p-12 bg-card border-border shadow-card">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Entry-level software developer with hands-on experience in building RESTful applications, 
              integrating external APIs, and deploying services on AWS. I specialize in creating 
              clean, maintainable, and production-ready solutions using modern technologies.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              My expertise lies in <span className="text-primary font-semibold">Spring Boot</span>, 
              secure authentication systems, relational databases, and CI/CD workflows. I'm passionate 
              about writing efficient code and continuously learning new technologies to solve 
              real-world problems.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="border border-border rounded-lg p-6 bg-secondary/50">
                <h3 className="font-bold text-xl mb-3 text-foreground">Education</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-foreground">Master of Computer Applications</p>
                    <p className="text-sm text-muted-foreground">DVR & Dr. HS MIC College</p>
                    <p className="text-sm text-muted-foreground">2022 – 2024 | CGPA: 7.85/10</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">BSc – Computer Science</p>
                    <p className="text-sm text-muted-foreground">AVR Degree College</p>
                    <p className="text-sm text-muted-foreground">2019 – 2022 | CGPA: 7.04/10</p>
                  </div>
                </div>
              </div>
              
              <div className="border border-border rounded-lg p-6 bg-secondary/50">
                <h3 className="font-bold text-xl mb-3 text-foreground">Experience</h3>
                <div>
                  <p className="font-semibold text-foreground">Virtual Internship – AWS Cloud & AI/ML</p>
                  <p className="text-sm text-muted-foreground mb-2">EduSkills & APSCHE</p>
                  <p className="text-sm text-muted-foreground">
                    Gained practical experience with AWS services (EC2, S3, IAM) and AI/ML 
                    fundamentals, including cloud deployment workflows and security configurations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
