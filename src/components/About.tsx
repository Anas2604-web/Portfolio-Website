
import { Code, Book, Users } from "lucide-react";

const About = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", "Java",
    "HTML/CSS", "Git", "SQL", "MongoDB", "Express.js", "REST APIs"
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full -translate-y-48 translate-x-48 opacity-50"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="about-title text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
          <p className="about-content text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Recent Computer Science graduate with a passion for software development 
            and a strong foundation in modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="about-content space-y-6">
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
          </div>

          <div className="about-content space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">What I Bring</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-200">
                <Code className="text-blue-600 dark:text-blue-400 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Clean Code</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Writing maintainable, well-documented code following best practices</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-200">
                <Book className="text-blue-600 dark:text-blue-400 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Quick Learner</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Passionate about learning new technologies and staying updated with industry trends</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-200">
                <Users className="text-blue-600 dark:text-blue-400 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Team Player</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Strong communication skills and experience working in collaborative environments</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="about-title text-2xl font-semibold text-gray-800 dark:text-white mb-8 text-center">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="skill-tag bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-800/70 dark:hover:to-purple-800/70 cursor-default shadow-md hover:shadow-lg transition-all duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
