import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Pankaj Kumar Gond</h3>
            <p className="text-gray-400 mb-4">
              Senior Full Stack Developer passionate about creating impactful web applications 
              and driving technological innovation.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/pankaj-creator"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/pankaj-kumar-gond"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:pankajvk211@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-white transition-colors">Experience</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#resume" className="text-gray-400 hover:text-white transition-colors">Resume</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Let's Connect</h4>
             <a
                href="mailto:pankajvk211@gmail.com"
                className="text-gray-400 mb-2"
                aria-label="Email"
              >
              📧 pankajvk211@gmail.com
            </a>
            <p className="text-gray-400 mb-2">📍 New Delhi, India</p>
            <a 
              href="/Pankaj_Kumar_Gond_Resume.pdf" 
              download="Pankaj_Kumar_Gond_Resume.pdf"
              className="inline-block text-blue-400 hover:text-blue-300 transition-colors mb-4 text-sm"
            >
              📄 Download Resume (ATS-Friendly)
            </a>
            <p className="text-sm text-gray-500">
              Open for new opportunities and exciting collaborations
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Pankaj Kumar Gond. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 flex items-center">
              Built with <Heart size={16} className="mx-1 text-red-500" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;