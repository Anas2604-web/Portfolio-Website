
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm actively looking for new opportunities and would love to hear from you. 
            Whether you have a question or just want to say hi, I'll get back to you!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600 text-sm mb-4">john.doe@email.com</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('mailto:john.doe@email.com')}
                className="hover:bg-blue-50 hover:border-blue-300"
              >
                Send Email
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Linkedin className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">LinkedIn</h3>
              <p className="text-gray-600 text-sm mb-4">Connect with me</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('https://linkedin.com', '_blank')}
                className="hover:bg-blue-50 hover:border-blue-300"
              >
                Connect
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Github className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">GitHub</h3>
              <p className="text-gray-600 text-sm mb-4">Check out my code</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open('https://github.com', '_blank')}
                className="hover:bg-blue-50 hover:border-blue-300"
              >
                Follow
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Ready to start your next project?
            </h3>
            <p className="text-gray-600 mb-6">
              I'm available for full-time opportunities and would love to discuss how I can contribute to your team.
            </p>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105"
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
