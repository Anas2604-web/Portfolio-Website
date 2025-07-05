
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
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-900 dark:to-blue-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full -translate-y-40 -translate-x-40 opacity-60"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="about-title text-4xl font-bold text-gray-800 dark:text-white mb-4">My Projects</h2>
          <p className="about-content text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've built during my learning journey. 
            Each project represents a step forward in my development skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="project-card overflow-hidden bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="project-image relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="project-content p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="skill-tag bg-gradient-to-r from-gray-100 to-blue-100 dark:from-gray-700 dark:to-blue-900/50 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/50 dark:hover:to-purple-900/50 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gsap-button flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </Button>
                  <Button
                    size="sm"
                    className="gsap-button flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 transition-all duration-200"
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
