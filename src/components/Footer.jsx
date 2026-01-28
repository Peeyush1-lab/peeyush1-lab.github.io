import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`border-t transition-colors duration-300 ${
      isDarkMode
        ? 'bg-gray-800 border-gray-700'
        : 'bg-gray-50 border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className={`text-xl font-bold mb-4 transition-colors ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Peeyush Tiwari</h3>
            <p className={`text-sm leading-relaxed transition-colors ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Data Analyst & AI-ML Enthusiast passionate about transforming data into actionable insights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-semibold mb-4 transition-colors ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`${link.toLowerCase()}`} className={`text-sm transition-colors ${
                    isDarkMode
                      ? 'text-gray-400 hover:text-blue-400'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className={`font-semibold mb-4 transition-colors ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Connect With Me</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/Peeyush1-lab"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 border rounded-lg flex items-center justify-center transition-all ${
                  isDarkMode
                    ? 'bg-gray-700 border-gray-600 text-gray-400 hover:text-blue-400 hover:border-blue-500'
                    : 'bg-white border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-600'
                }`}
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/peeyush-tiwari-105b22323/"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 border rounded-lg flex items-center justify-center transition-all ${
                  isDarkMode
                    ? 'bg-gray-700 border-gray-600 text-gray-400 hover:text-blue-400 hover:border-blue-500'
                    : 'bg-white border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-600'
                }`}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:tiwari.peeyush2006@gmail.com"
                className={`w-10 h-10 border rounded-lg flex items-center justify-center transition-all ${
                  isDarkMode
                    ? 'bg-gray-700 border-gray-600 text-gray-400 hover:text-blue-400 hover:border-blue-500'
                    : 'bg-white border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-600'
                }`}
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 border-t transition-colors ${
          isDarkMode ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`text-sm transition-colors ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              © {currentYear} Peeyush Tiwari. All rights reserved.
            </p>
            <p className={`text-sm flex items-center gap-1 transition-colors ${
              isDarkMode ? 'text-gray-500' : 'text-gray-500'
            }`}>
              Built with <Heart className="w-4 h-4 text-red-500 fill-current" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;