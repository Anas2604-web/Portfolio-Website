
import { Code, Book, Users, Zap, Star, Trophy } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const skillsTitleRef = useRef<HTMLHeadingElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const skillCardsRef = useRef<HTMLDivElement[]>([]);
  const skillTagsRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement[]>([]);
  const strengthsRef = useRef<HTMLDivElement[]>([]);

  const skills = [
    { 
      name: "JavaScript", 
      level: 90, 
      color: "from-yellow-400 to-orange-500",
      logo: "⚡",
      description: "ES6+, Modern frameworks, Async programming"
    },
    { 
      name: "TypeScript", 
      level: 80, 
      color: "from-blue-500 to-blue-600",
      logo: "🔷",
      description: "Type safety, Advanced generics, Enterprise apps"
    },
    { 
      name: "React", 
      level: 92, 
      color: "from-cyan-400 to-blue-500",
      logo: "⚛️",
      description: "Hooks, Context, State management, Performance"
    },
    { 
      name: "Node.js", 
      level: 80, 
      color: "from-green-400 to-green-600",
      logo: "🟢",
      description: "Express, REST APIs, Microservices, Auth"
    },
    { 
      name: "Python", 
      level: 65, 
      color: "from-blue-400 to-purple-500",
      logo: "🐍",
      description: "Basic Knowledge, Syntax and Libraries"
    },
    { 
      name: "Java", 
      level: 76, 
      color: "from-red-400 to-red-600",
      logo: "☕",
      description: "Data Structures & Algorithms, OOP, Collections" 
    },
    { 
      name: "HTML/CSS", 
      level: 95, 
      color: "from-orange-400 to-red-500",
      logo: "🎨",
      description: "Semantic HTML, Flexbox, Grid, Animations"
    },
    { 
      name: "Git", 
      level: 86, 
      color: "from-gray-600 to-gray-800",
      logo: "🌿",
      description: "Version control, Branching, Collaboration"
    },
    { 
      name: "SQL", 
      level: 82, 
      color: "from-indigo-400 to-purple-500",
      logo: "🗃️",
      description: "Complex queries, Indexing, Performance"
    },
    { 
      name: "MongoDB", 
      level: 78, 
      color: "from-green-500 to-green-700",
      logo: "🍃",
      description: "NoSQL, Aggregation, Schema design"
    },
    { 
      name: "Express.js", 
      level: 88, 
      color: "from-gray-500 to-gray-700",
      logo: "🚀",
      description: "Middleware, Routing, RESTful services"
    },
    { 
      name: "REST APIs", 
      level: 70, 
      color: "from-pink-400 to-pink-600",
      logo: "🔗",
      description: "Design patterns, Documentation, Testing"
    }
  ];

  const achievements = [
    
    { 
      icon: Star, 
      title: "5+ Projects", 
      description: "Full-stack applications built and deployed",
      color: "from-blue-400 to-purple-500"
    },
    { 
      icon: Zap, 
      title: "Fast Learner", 
      description: "Quick technology adoption and implementation",
      color: "from-green-400 to-cyan-500"
    }
  ];

  const coreStrengths = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, well-documented code following best practices and design patterns",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Book,
      title: "Quick Learner",
      description: "Passionate about learning new technologies and staying updated with industry trends",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Strong communication skills and experience working in collaborative environments",
      color: "from-green-500 to-teal-600"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, subtitleRef.current, skillsTitleRef.current], {
        opacity: 0,
        y: 80
      });

      gsap.set([leftContentRef.current, rightContentRef.current], {
        opacity: 0,
        x: -100
      });

      gsap.set(rightContentRef.current, {
        x: 100
      });

      gsap.set(skillCardsRef.current, {
        opacity: 0,
        y: 100,
        scale: 0.8
      });

      gsap.set(skillTagsRef.current, {
        opacity: 0,
        y: 50
      });

      // Main title animation
      gsap.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Subtitle animation
      gsap.to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Left content animation
      gsap.to(leftContentRef.current, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftContentRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Right content animation
      gsap.to(rightContentRef.current, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: rightContentRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Achievements stagger animation
      achievementsRef.current.forEach((achievement, index) => {
        if (achievement) {
          gsap.set(achievement, { opacity: 0, y: 50, scale: 0.9 });
          gsap.to(achievement, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            delay: index * 0.15,
            scrollTrigger: {
              trigger: achievement,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          });
        }
      });

      // Strengths stagger animation
      strengthsRef.current.forEach((strength, index) => {
        if (strength) {
          gsap.set(strength, { opacity: 0, x: 50, scale: 0.9 });
          gsap.to(strength, {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            delay: index * 0.15,
            scrollTrigger: {
              trigger: strength,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          });
        }
      });

      // Skills title animation
      gsap.to(skillsTitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: skillsTitleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Skills cards stagger animation
      skillCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.to(card, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          });

          // Add hover animations
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -10,
              scale: 1.05,
              duration: 0.3,
              ease: "power2.out"
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: "power2.out"
            });
          });
        }
      });

      // Skills tags animation
      gsap.to(skillTagsRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: skillTagsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });

      // Skills tags children stagger
      const skillTags = skillTagsRef.current?.children;
      if (skillTags) {
        gsap.set(skillTags, { opacity: 0, scale: 0.8 });
        gsap.to(skillTags, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          stagger: 0.05,
          delay: 0.3,
          scrollTrigger: {
            trigger: skillTagsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      }

      // Parallax background elements
      gsap.to(".parallax-bg-1", {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

      gsap.to(".parallax-bg-2", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-slate-800 dark:via-slate-900 dark:to-blue-900 transition-colors duration-300 relative overflow-hidden min-h-screen">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="parallax-bg-1 absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="parallax-bg-2 absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-pink-100 to-orange-100 dark:from-pink-900/20 dark:to-orange-900/20 rounded-full translate-y-48 -translate-x-48"></div>
      </div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p ref={subtitleRef} className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Recent Computer Science graduate with a passion for software development 
            and a strong foundation in modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div ref={leftContentRef} className="space-y-8">
            <h3 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">My Journey</h3>
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                I'm a fresh Computer Science graduate with a deep passion for creating 
                innovative digital solutions. During my studies, I've built several projects 
                that showcase my ability to learn quickly and adapt to new technologies.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                I'm particularly interested in full-stack development and enjoy the process 
                of bringing ideas to life through code. I'm eager to join a team where I can 
                contribute, learn, and grow as a software engineer.
              </p>
            </div>
            
            {/* Achievements */}
            <div className="grid grid-cols-1 gap-4 mt-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  ref={(el) => {
                    if (el) achievementsRef.current[index] = el;
                  }}
                  className="group flex items-center space-x-4 p-6 rounded-xl bg-gradient-to-r from-white to-gray-50 dark:from-slate-800 dark:to-slate-700 hover:shadow-lg transition-all duration-500 border border-gray-200 dark:border-gray-600"
                >
                  <div className={`p-3 rounded-full bg-gradient-to-r ${achievement.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white text-lg">{achievement.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div ref={rightContentRef} className="space-y-8">
            <h3 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">What I Bring</h3>
            <div className="space-y-6">
              {coreStrengths.map((strength, index) => (
                <div 
                  key={index}
                  ref={(el) => {
                    if (el) strengthsRef.current[index] = el;
                  }}
                  className="group flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r from-white to-gray-50 dark:from-slate-800 dark:to-slate-700 hover:shadow-lg transition-all duration-500 border border-gray-200 dark:border-gray-600"
                >
                  <div className={`p-3 rounded-full bg-gradient-to-r ${strength.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <strength.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white text-lg mb-2">{strength.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{strength.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Technical Skills Section */}
        <div className="mb-12">
          <h3 ref={skillsTitleRef} className="text-4xl font-semibold text-gray-800 dark:text-white mb-16 text-center">
            Technical <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Skills</span>
          </h3>
          
          {/* Skills with enhanced cards and logos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                ref={(el) => {
                  if (el) skillCardsRef.current[index] = el;
                }}
                className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl group-hover:scale-125 transition-transform duration-300">{skill.logo}</span>
                    <div>
                      <span className="text-gray-800 dark:text-white font-bold text-lg">{skill.name}</span>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{skill.description}</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Skills tags with enhanced styling */}
          <div ref={skillTagsRef} className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="group bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-800/70 dark:hover:to-purple-800/70 cursor-default shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
              >
                <span className="group-hover:rotate-12 inline-block transition-transform duration-300">{skill.logo}</span>
                <span className="ml-2">{skill.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
