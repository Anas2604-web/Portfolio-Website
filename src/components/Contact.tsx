
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const contactCardsRef = useRef<HTMLDivElement[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, subtitleRef.current], {
        opacity: 0,
        y: 80
      });

      gsap.set(contactCardsRef.current, {
        opacity: 0,
        y: 100,
        scale: 0.8,
        rotation: 5
      });

      gsap.set(ctaRef.current, {
        opacity: 0,
        y: 60,
        scale: 0.95
      });

      // Title animation
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

      // Contact cards stagger animation
      contactCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.to(card, {
            opacity: 1,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          });

          // Add hover animations
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -15,
              scale: 1.05,
              rotation: 2,
              duration: 0.4,
              ease: "power2.out"
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              rotation: 0,
              duration: 0.4,
              ease: "power2.out"
            });
          });
        }
      });

      // CTA animation
      gsap.to(ctaRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });

      // Parallax background
      gsap.to(".contact-bg", {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="contact-bg absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full -translate-y-48 -translate-x-48 opacity-40"></div>
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Get In Touch</h2>
          <p ref={subtitleRef} className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm actively looking for new opportunities and would love to hear from you. 
            Whether you have a question or just want to say hi, I'll get back to you!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: Mail,
              title: "Email",
              subtitle: "annaasskhan6@gmail.com",
              action: () => window.open('mailto:annaasskhan6@gmail.com'),
              buttonText: "Send Email"
            },
            {
              icon: Linkedin,
              title: "LinkedIn",
              subtitle: "Connect with me",
              action: () => window.open('https://linkedin.com', '_blank'),
              buttonText: "Connect"
            },
            {
              icon: Github,
              title: "GitHub",
              subtitle: "Check out my code",
              action: () => window.open('https://github.com', '_blank'),
              buttonText: "Follow"
            }
          ].map((contact, index) => (
            <Card 
              key={index}
              ref={(el) => {
                if (el) contactCardsRef.current[index] = el;
              }}
              className="text-center bg-white dark:bg-slate-700 border-gray-200 dark:border-gray-600 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <contact.icon className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{contact.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{contact.subtitle}</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={contact.action}
                  className="hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-200"
                >
                  {contact.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div ref={ctaRef}>
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Ready to start your next project?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm available for full-time opportunities and would love to discuss how I can contribute to your team.
            </p>
            <Button
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 dark:hover:from-blue-600 dark:hover:via-purple-600 dark:hover:to-pink-600 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={() => window.open('mailto:john.doe@email.com')}
            >
              Let's Work Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
