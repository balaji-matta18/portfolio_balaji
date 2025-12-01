import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const skillsData = {
  "Programming Languages": ["Java", "C", "SQL"],
  "Backend Technologies": ["Spring Boot", "Spring Security", "Spring MVC", "REST APIs", "JPA/Hibernate", "JWT"],
  "Web Technologies": ["HTML", "CSS", "JavaScript", "Server-Side Rendering"],
  "Databases": ["MySQL", "Relational Database Design"],
  "Cloud & DevOps": ["AWS Elastic Beanstalk", "AWS EC2", "AWS RDS", "AWS IAM", "AWS S3", "Docker", "GitHub Actions"],
  "Tools & Platforms": ["Git", "GitHub", "Maven", "IntelliJ IDEA", "Postman"]
};

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="skills" className="py-20 px-6 bg-secondary/30">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="font-mono text-primary">&gt;</span> Technical Skills
        </h2>
        
        <div className="grid gap-6">
          {Object.entries(skillsData).map(([category, skills]) => (
            <Card key={category} className="p-6 bg-card border-border shadow-card hover:shadow-glow transition-all duration-300">
              <h3 className="font-mono text-lg font-semibold mb-4 text-primary">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="px-3 py-1 bg-secondary hover:bg-secondary/80 text-foreground border border-border"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
