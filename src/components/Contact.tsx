
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full -translate-y-48 -translate-x-48 opacity-40"></div>
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="about-title text-4xl font-bold text-gray-800 dark:text-white mb-4">Get In Touch</h2>
          <p className="about-content text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm actively looking for new opportunities and would love to hear from you. 
            Whether you have a question or just want to say hi, I'll get back to you!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: Mail,
              title: "Email",
              subtitle: "john.doe@email.com",
              action: () => window.open('mailto:john.doe@email.com'),
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
              className="contact-card text-center bg-white dark:bg-slate-700 border-gray-200 dark:border-gray-600 shadow-xl hover:shadow-2xl transition-all duration-300"
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
                  className="gsap-button hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-200"
                >
                  {contact.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="about-content text-center">
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 rounded-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Ready to start your next project?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm available for full-time opportunities and would love to discuss how I can contribute to your team.
            </p>
            <Button
              className="gsap-button bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 dark:hover:from-blue-600 dark:hover:via-purple-600 dark:hover:to-pink-600 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
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
