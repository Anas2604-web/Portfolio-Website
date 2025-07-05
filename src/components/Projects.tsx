
import { Github, Link } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Stripe API"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates. Users can create projects, assign tasks, set deadlines, and track progress with an intuitive dashboard.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that displays current weather conditions and forecasts. Features location-based weather, search functionality, and beautiful weather animations.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop",
      technologies: ["JavaScript", "HTML/CSS", "Weather API", "Chart.js"],
      github: "https://github.com",
      live: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've built during my learning journey. 
            Each project represents a step forward in my development skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center space-x-2 hover:bg-gray-100"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </Button>
                  <Button
                    size="sm"
                    className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700"
                    onClick={() => window.open(project.live, '_blank')}
                  >
                    <Link size={16} />
                    <span>Live</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
