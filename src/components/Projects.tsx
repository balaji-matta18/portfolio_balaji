import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

type Project = {
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: "SpendBuddy",
    description:
      "RESTful API for expense tracking with budget management, category organization, and multi-user support using layered service-repository architecture.",
    tech: [
      "Spring Boot",
      "JWT",
      "MySQL",
      "Docker",
      "AWS Elastic Beanstalk",
      "GitHub Actions",
    ],
    highlights: [
      "Integrated JWT-based authentication with validation",
      "Centralized exception handling for secure operations",
      "Deployed on AWS with CI/CD pipeline",
    ],
    github: "https://github.com/balaji-matta18/spendBuddy-backend-api.git",
    live: "https://spendbuddy.vercel.app/", // update if you have a live URL
  },
  {
    title: "NASA-APOD",
    description:
      "Full-stack application for exploring NASA's daily and historical astronomy pictures with advanced filtering capabilities.",
    tech: ["NASA APOD API", "REST APIs", "HTML", "CSS", "JavaScript", "Caching"],
    highlights: [
      "Integrated NASA APOD API with layered architecture",
      "Implemented in-memory caching reducing API calls by 60%",
      "Global exception handling for optimized response time",
    ],
    github: "https://github.com/balaji-matta18/nasa_apod_backend.git", // adjust if needed
    live: "https://cosmolens.vercel.app/", // optional
  },
  {
    title: "HireLog",
    description:
      "Full-stack job application management system using Spring MVC with server-side rendering for job postings.",
    tech: ["Spring Web MVC", "JPA", "MySQL", "Server-Side Rendering"],
    highlights: [
      "Implemented MVC architecture with form handling",
      "Data validation and CRUD operations",
      "Designed relational database schema with JPA",
    ],
    github: "https://github.com/balaji-matta18/hirelog", // adjust if needed
    live: "https://your-hirelog-link.com", // optional
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-20 px-6">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="font-mono text-primary">&gt;</span> Featured Projects
        </h2>

        <div className="grid md:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="p-8 bg-card border-border shadow-card hover:shadow-glow transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    type="button"
                    onClick={() =>
                      project.github && window.open(project.github, "_blank")
                    }
                    className="p-2 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all"
                  >
                    <Github className="w-4 h-4 text-muted-foreground hover:text-primary" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      project.live && window.open(project.live, "_blank")
                    }
                    className="p-2 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all"
                  >
                    <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary" />
                  </button>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">
                  Key Highlights:
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-primary mt-1 flex-shrink-0">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="px-3 py-1 bg-primary/5 border-primary/30 text-primary font-mono text-xs"
                  >
                    {tech}
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

export default Projects;
