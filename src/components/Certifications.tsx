import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2025 Foundations Associate",
    issuer: "Oracle University",
    type: "Certification"
  },
  {
    title: "Master Java Spring Development",
    issuer: "Telusko Edutech",
    type: "Course"
  },
  {
    title: "Oracle Java Foundations",
    issuer: "Oracle University",
    date: "Oct 2025",
    type: "Badge"
  },
  {
    title: "5-Star Java & SQL Badges",
    issuer: "HackerRank",
    type: "Achievement"
  }
];

const Certifications = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="certifications" className="py-20 px-6 bg-secondary/30">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="font-mono text-primary">&gt;</span> Certifications
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.title} 
              className="p-6 bg-card border-border shadow-card hover:shadow-glow transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {cert.issuer}
                    {cert.date && ` • ${cert.date}`}
                  </p>
                  <Badge 
                    variant="outline" 
                    className="text-xs px-2 py-1 bg-primary/5 border-primary/30 text-primary"
                  >
                    {cert.type}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
