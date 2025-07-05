
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">
            JohnDoe<span className="text-blue-600">.</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
