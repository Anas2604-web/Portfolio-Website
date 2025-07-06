import { Github, Link, Star, Eye, GitFork } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "EcoCommerce Platform",
      description: "A comprehensive e-commerce platform focused on sustainable products. Features include AI-powered product recommendations, carbon footprint tracking, user reviews, and integrated payment solutions with Stripe.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Stripe API", "AWS S3"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
      stats: { stars: 124, forks: 32, views: 2800 },
      status: "Completed",
      category: "Full Stack"
    },
    {
      title: "TaskFlow - Team Collaboration",
      description: "Real-time collaborative task management application with advanced features like drag-and-drop kanban boards, team chat, file sharing, time tracking, and detailed analytics dashboard.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Firebase", "Socket.io", "Material-UI", "Chart.js"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
      stats: { stars: 89, forks: 21, views: 1950 },
      status: "In Progress",
      category: "Frontend"
    },
    {
      title: "WeatherScope Pro",
      description: "Advanced weather application with beautiful animations, 7-day forecasts, weather maps, severe weather alerts, and location-based recommendations. Features offline support and PWA capabilities.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      technologies: ["JavaScript", "HTML/CSS", "Weather API", "Chart.js", "PWA", "Service Workers"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
      stats: { stars: 67, forks: 15, views: 1200 },
      status: "Completed",
      category: "Frontend"
    },
    {
      title: "CryptoTracker Dashboard",
      description: "Real-time cryptocurrency tracking dashboard with portfolio management, price alerts, market analysis, and trading insights. Includes advanced charting and technical indicators.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Vuex", "CoinGecko API", "D3.js", "WebSocket", "Tailwind"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
      stats: { stars: 156, forks: 44, views: 3200 },
      status: "Completed",
      category: "Frontend"
    },
    {
      title: "AI Content Generator",
      description: "Smart content generation platform using OpenAI API. Creates blog posts, social media content, and marketing copy with SEO optimization and plagiarism checking features.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      technologies: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL", "NextAuth", "Vercel"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
      stats: { stars: 203, forks: 67, views: 4500 },
      status: "Completed",
      category: "Full Stack"
    },
    {
      title: "DevTools Extension",
      description: "Browser extension for developers with code snippets manager, color picker, responsive design tester, and performance analyzer. Built for Chrome and Firefox browsers.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      technologies: ["JavaScript", "Chrome APIs", "HTML/CSS", "Webpack", "Jest"],
      github: "https://github.com",
      live: "https://chrome.google.com/webstore",
      featured: false,
      stats: { stars: 45, forks: 12, views: 890 },
      status: "Completed",
      category: "Extension"
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "In Progress": return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Full Stack": return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400";
      case "Frontend": return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      case "Extension": return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  const ProjectCard = ({ project, featured = false }: { project: any, featured?: boolean }) => (
    <Card className={`project-card overflow-hidden bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 ${featured ? 'md:col-span-2' : ''}`}>
      <div className="project-image relative overflow-hidden group">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${featured ? 'h-64' : 'h-48'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 via-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge className={getStatusColor(project.status)}>
            {project.status}
          </Badge>
          <Badge className={getCategoryColor(project.category)}>
            {project.category}
          </Badge>
        </div>
        {project.featured && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
              ⭐ Featured
            </Badge>
          </div>
        )}
      </div>
      <CardContent className="project-content p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
            {project.title}
          </h3>
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <Star size={14} />
              <span>{project.stats.stars}</span>
            </div>
            <div className="flex items-center gap-1">
              <GitFork size={14} />
              <span>{project.stats.forks}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye size={14} />
              <span>{project.stats.views}</span>
            </div>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech: string, techIndex: number) => (
            <span
              key={techIndex}
              className="skill-tag bg-gradient-to-r from-gray-100 to-blue-100 dark:from-gray-700 dark:to-blue-900/50 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/50 dark:hover:to-purple-900/50 transition-all duration-200 border border-gray-200 dark:border-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          <Button
            variant="outline"
            size="sm"
            className="gsap-button flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 border-gray-300 dark:border-gray-600"
            onClick={() => window.open(project.github, '_blank')}
          >
            <Github size={16} />
            <span>Code</span>
          </Button>
          <Button
            size="sm"
            className="gsap-button flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            onClick={() => window.open(project.live, '_blank')}
          >
            <Link size={16} />
            <span>Live Demo</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-900 dark:to-blue-900 transition-colors duration-300 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="about-title text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Featured <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="about-content text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
            Here's a showcase of my recent work, demonstrating proficiency in modern web technologies, 
            clean code practices, and user-centered design principles.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="about-title text-2xl font-semibold text-gray-800 dark:text-white mb-8 text-center">
            🌟 Featured Work
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} featured={true} />
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="about-title text-2xl font-semibold text-gray-800 dark:text-white mb-8 text-center">
            💼 More Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="about-content text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Want to see more of my work?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Check out my GitHub profile for more projects, contributions, and open-source work.
            </p>
            <Button
              className="gsap-button bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 dark:hover:from-blue-600 dark:hover:via-purple-600 dark:hover:to-pink-600 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={() => window.open('https://github.com', '_blank')}
            >
              <Github className="mr-2" size={20} />
              View GitHub Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
