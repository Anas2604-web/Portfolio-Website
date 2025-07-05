
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="pt-20 pb-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <div className="mb-8 animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
            Hi, I'm <span className="text-blue-600">John Doe</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in">
            Software Engineer Fresher
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto animate-fade-in">
            Passionate about creating innovative solutions and building amazing web applications. 
            Fresh graduate with strong foundation in modern web technologies and eager to contribute to impactful projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 animate-fade-in">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:john.doe@email.com"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 hover:scale-110 transform"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
