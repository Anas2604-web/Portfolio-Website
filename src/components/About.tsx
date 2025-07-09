import { Code, Database, Globe, Palette, Zap, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, Suspense } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import SkillsOrb from "@/components/3d/SkillsOrb";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, descriptionRef.current], {
        opacity: 0,
        y: 80
      });

      gsap.set(skillsRef.current, {
        opacity: 0,
        y: 100,
        scale: 0.8
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

      // Description animation
      gsap.to(descriptionRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Skills cards stagger animation
      cardsRef.current.forEach((card, index) => {
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

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skills = [
    { icon: Code, name: "Frontend Development", description: "React, Vue, Angular" },
    { icon: Database, name: "Backend Development", description: "Node.js, Python, Java" },
    { icon: Globe, name: "Web Technologies", description: "HTML5, CSS3, JavaScript" },
    { icon: Palette, name: "UI/UX Design", description: "Figma, Adobe XD" },
    { icon: Zap, name: "Performance", description: "Optimization & Speed" },
    { icon: Lightbulb, name: "Problem Solving", description: "Creative Solutions" }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 transition-colors duration-300 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl font-bold text-gray-800 dark:text-white mb-6">About Me</h2>
          <p ref={descriptionRef} className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate software developer with a love for creating innovative solutions. 
            My journey in tech has equipped me with diverse skills and a problem-solving mindset.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={skillsRef} className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8">Skills & Expertise</h3>
            <div className="grid gap-4">
              {skills.map((skill, index) => (
                <Card
                  key={index}
                  ref={(el) => {
                    if (el) cardsRef.current[index] = el;
                  }}
                  className="bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm border-gray-200 dark:border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-4 flex items-center space-x-4">
                    <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 p-3 rounded-lg">
                      <skill.icon className="text-blue-600 dark:text-blue-400" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">{skill.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{skill.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="h-96 bg-gradient-to-br from-blue-100/50 to-purple-100/50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl shadow-2xl overflow-hidden">
              <Canvas
                camera={{ position: [0, 0, 4], fov: 50 }}
                style={{ background: 'transparent' }}
                gl={{ antialias: true, alpha: true }}
                onCreated={({ gl }) => {
                  gl.setClearColor('#000000', 0);
                }}
              >
                <Suspense fallback={null}>
                  <SkillsOrb />
                </Suspense>
              </Canvas>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-pink-200 to-purple-200 dark:from-pink-800/30 dark:to-purple-800/30 rounded-full opacity-60"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-200 to-cyan-200 dark:from-blue-800/30 dark:to-cyan-800/30 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
