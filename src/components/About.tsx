
import { Code, Book, Users } from "lucide-react";

const About = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", "Java",
    "HTML/CSS", "Git", "SQL", "MongoDB", "Express.js", "REST APIs"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Recent Computer Science graduate with a passion for software development 
            and a strong foundation in modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">My Journey</h3>
            <p className="text-gray-600 leading-relaxed">
              I'm a fresh Computer Science graduate with a deep passion for creating 
              innovative digital solutions. During my studies, I've built several projects 
              that showcase my ability to learn quickly and adapt to new technologies.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I'm particularly interested in full-stack development and enjoy the process 
              of bringing ideas to life through code. I'm eager to join a team where I can 
              contribute, learn, and grow as a software engineer.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">What I Bring</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Code className="text-blue-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-800">Clean Code</h4>
                  <p className="text-gray-600 text-sm">Writing maintainable, well-documented code following best practices</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Book className="text-blue-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-800">Quick Learner</h4>
                  <p className="text-gray-600 text-sm">Passionate about learning new technologies and staying updated with industry trends</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="text-blue-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-gray-800">Team Player</h4>
                  <p className="text-gray-600 text-sm">Strong communication skills and experience working in collaborative environments</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
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
