
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { initGSAPAnimations, initScrollAnimations, addHoverAnimations } from "@/utils/gsapAnimations";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    initGSAPAnimations();
    initScrollAnimations();
    addHoverAnimations();
  }, []);

  return (
    <section id="home" className="relative pt-20 pb-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900 transition-colors duration-300 overflow-hidden">
      {/* Animated background elements */}
      <div className="parallax-bg absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center">
          <div className="mb-8">
            <img
              src="public/profile2.png" 
              alt="Profile"
              className="hero-image w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white dark:border-gray-700 shadow-2xl"
            />
          </div>
          
          <h1 className="hero-title text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">Anas Khan</span>
          </h1>
          
          <p className="hero-subtitle text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Software Engineer Fresher
          </p>
          
          <p className="hero-description text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about creating innovative solutions and building amazing web applications. 
            Fresh graduate with strong foundation in modern web technologies and eager to contribute to impactful projects.
          </p>
          
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection("projects")}
              className="gsap-button bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="gsap-button border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="hero-social flex justify-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 p-3 rounded-full hover:bg-white dark:hover:bg-gray-800 shadow-lg transition-all duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 p-3 rounded-full hover:bg-white dark:hover:bg-gray-800 shadow-lg transition-all duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:john.doe@email.com"
              className="social-icon text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 p-3 rounded-full hover:bg-white dark:hover:bg-gray-800 shadow-lg transition-all duration-200"
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
