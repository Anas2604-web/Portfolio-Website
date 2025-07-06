
import { Code, Book, Users, Zap, Star, Trophy } from "lucide-react";

const About = () => {
  const skills = [
    { name: "JavaScript", level: 90, color: "from-yellow-400 to-orange-500" },
    { name: "TypeScript", level: 85, color: "from-blue-500 to-blue-600" },
    { name: "React", level: 92, color: "from-cyan-400 to-blue-500" },
    { name: "Node.js", level: 80, color: "from-green-400 to-green-600" },
    { name: "Python", level: 75, color: "from-blue-400 to-purple-500" },
    { name: "Java", level: 70, color: "from-red-400 to-red-600" },
    { name: "HTML/CSS", level: 95, color: "from-orange-400 to-red-500" },
    { name: "Git", level: 88, color: "from-gray-600 to-gray-800" },
    { name: "SQL", level: 82, color: "from-indigo-400 to-purple-500" },
    { name: "MongoDB", level: 78, color: "from-green-500 to-green-700" },
    { name: "Express.js", level: 85, color: "from-gray-500 to-gray-700" },
    { name: "REST APIs", level: 90, color: "from-pink-400 to-pink-600" }
  ];

  const achievements = [
    { icon: Trophy, title: "Dean's List", description: "Consistent academic excellence" },
    { icon: Star, title: "5+ Projects", description: "Full-stack applications built" },
    { icon: Zap, title: "Fast Learner", description: "Quick technology adoption" }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300 relative overflow-hidden min-h-screen">
      {/* Enhanced background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full -translate-y-48 translate-x-48 opacity-50 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-pink-100 to-orange-100 dark:from-pink-900/20 dark:to-orange-900/20 rounded-full translate-y-48 -translate-x-48 opacity-50 animate-float delay-1000"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="about-title text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 animate-fade-in">
            About <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="about-content text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg animate-fade-in animate-delay-200">
            Recent Computer Science graduate with a passion for software development 
            and a strong foundation in modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="about-content space-y-6 animate-slide-in-left">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a fresh Computer Science graduate with a deep passion for creating 
              innovative digital solutions. During my studies, I've built several projects 
              that showcase my ability to learn quickly and adapt to new technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm particularly interested in full-stack development and enjoy the process 
              of bringing ideas to life through code. I'm eager to join a team where I can 
              contribute, learn, and grow as a software engineer.
            </p>
            
            {/* Achievements */}
            <div className="grid grid-cols-1 gap-4 mt-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-800/30 dark:hover:to-purple-800/30 transition-all duration-300 hover:scale-105 animate-bounce-in"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <achievement.icon className="text-blue-600 dark:text-blue-400" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">{achievement.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-content space-y-6 animate-slide-in-right">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">What I Bring</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-200 hover:scale-105 animate-fade-in animate-delay-300">
                <Code className="text-blue-600 dark:text-blue-400 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Clean Code</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Writing maintainable, well-documented code following best practices</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-200 hover:scale-105 animate-fade-in animate-delay-400">
                <Book className="text-blue-600 dark:text-blue-400 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Quick Learner</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Passionate about learning new technologies and staying updated with industry trends</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-200 hover:scale-105 animate-fade-in animate-delay-500">
                <Users className="text-blue-600 dark:text-blue-400 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Team Player</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Strong communication skills and experience working in collaborative environments</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Technical Skills Section */}
        <div className="mb-12">
          <h3 className="about-title text-3xl font-semibold text-gray-800 dark:text-white mb-12 text-center animate-fade-in animate-delay-600">
            Technical <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Skills</span>
          </h3>
          
          {/* Skills with progress bars */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="skill-item animate-fade-in hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${0.7 + index * 0.05}s` }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out animate-pulse`}
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${0.8 + index * 0.1}s`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Skills tags */}
          <div className="flex flex-wrap justify-center gap-3 animate-fade-in animate-delay-1000">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="skill-tag bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-800/70 dark:hover:to-purple-800/70 cursor-default shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110 animate-bounce-in"
                style={{ animationDelay: `${1.1 + index * 0.05}s` }}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
