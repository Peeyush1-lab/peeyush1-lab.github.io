import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ArrowRight, TrendingUp } from 'lucide-react';
import { SiLeetcode } from "react-icons/si";
import { FaFolderOpen } from "react-icons/fa";
import { IbmCloud } from "@carbon/icons-react";

const HomePage = ({ setCurrentPage, isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className={`relative min-h-screen flex items-center overflow-hidden transition-colors duration-300 ${
        isDarkMode
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
          : 'bg-gradient-to-br from-gray-50 to-blue-50/30'
      }`}>
        {/* Subtle animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl animate-blob ${
            isDarkMode ? 'bg-blue-500/20' : 'bg-blue-400/10'
          }`}></div>
          <div className={`absolute top-40 -left-40 w-80 h-80 rounded-full blur-3xl animate-blob animation-delay-2000 ${
            isDarkMode ? 'bg-purple-500/20' : 'bg-purple-400/10'
          }`}></div>
          <div className={`absolute -bottom-40 left-1/2 w-80 h-80 rounded-full blur-3xl animate-blob animation-delay-4000 ${
            isDarkMode ? 'bg-pink-500/20' : 'bg-pink-400/10'
          }`}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left: Text Content */}
            <div className={`space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              <div className="inline-block">
                <span className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  isDarkMode
                    ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                    : 'bg-blue-50 text-blue-600 border-blue-100'
                }`}>
                  👋 Welcome to my portfolio
                </span>
              </div>

              <div>
                <h1 className={`text-5xl lg:text-6xl font-bold mb-4 leading-tight transition-colors ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Hi, I'm <span className={isDarkMode ? 'text-blue-400' : 'text-blue-600'}>Peeyush Tiwari</span>
                </h1>
                <h2 className={`text-2xl lg:text-3xl font-medium mb-6 transition-colors ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Data Analyst & AI-ML Enthusiast
                </h2>
                <p className={`text-lg leading-relaxed max-w-xl transition-colors ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Transforming complex data into actionable insights through advanced analytics and machine learning.
                  Passionate about solving real-world problems with technology.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                    isDarkMode ? 'bg-blue-500/20' : 'bg-blue-50'
                  }`}>
                    <SiLeetcode className={`w-6 h-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  </div>
                  <div>
                    <div className={`text-2xl font-bold transition-colors ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>300+</div>
                    <div className={`text-sm transition-colors ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>Problems Solved</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                    isDarkMode ? 'bg-purple-500/20' : 'bg-purple-50'
                  }`}>
                    <FaFolderOpen className={`w-6 h-6 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                  </div>
                  <div>
                    <div className={`text-2xl font-bold transition-colors ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>7</div>
                    <div className={`text-sm transition-colors ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>Major Projects</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                    isDarkMode ? 'bg-green-500/20' : 'bg-green-50'
                  }`}>
                    <TrendingUp className={`w-6 h-6 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                  </div>
                  <div>
                    <div className={`text-2xl font-bold transition-colors ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>10+</div>
                    <div className={`text-sm transition-colors ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>Technologies</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setCurrentPage('projects')}
                  className={`group px-8 py-4 rounded-lg font-medium transition-all hover:shadow-lg flex items-center gap-2 ${
                    isDarkMode
                      ? 'bg-blue-500 text-white hover:bg-blue-600 hover:shadow-blue-500/30'
                      : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-600/30'
                  }`}
                >
                  View My Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className={`px-8 py-4 rounded-lg font-medium transition-all border ${
                    isDarkMode
                      ? 'bg-gray-800 text-white hover:bg-gray-700 border-gray-700'
                      : 'bg-white text-gray-900 hover:bg-gray-50 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  Get In Touch
                </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                {[
                  { icon: <Github className="w-5 h-5" />, link: "https://github.com/Peeyush1-lab", label: "GitHub" },
                  { icon: <Linkedin className="w-5 h-5" />, link: "https://www.linkedin.com/in/peeyush-tiwari-105b22323/", label: "LinkedIn" },
                  { icon: <Mail className="w-5 h-5" />, link: "mailto:tiwari.peeyush2006@gmail.com", label: "Email" },
                  { icon: <SiLeetcode className="w-5 h-5" />, link: "https://leetcode.com/u/Peeyush_Tiwari/", label: "LeetCode" }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target={social.label !== "Email" ? "_blank" : undefined}
                    rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                    className={`w-12 h-12 border rounded-lg flex items-center justify-center transition-all hover:shadow-md ${
                      isDarkMode
                        ? 'bg-gray-800 border-gray-700 text-gray-400 hover:text-blue-400 hover:border-blue-500'
                        : 'bg-white border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-600'
                    }`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Profile Photo */}
            <div className={`${isVisible ? 'animate-slide-up animation-delay-200' : 'opacity-0'}`}>
              <div className="relative max-w-md mx-auto">
                {/* Decorative elements */}
                <div className={`absolute -top-4 -left-4 w-72 h-72 rounded-3xl -z-10 animate-float ${
                  isDarkMode ? 'bg-blue-500/20' : 'bg-blue-200/30'
                }`}></div>
                <div className={`absolute -bottom-4 -right-4 w-72 h-72 rounded-3xl -z-10 animate-float animation-delay-2000 ${
                  isDarkMode ? 'bg-purple-500/20' : 'bg-purple-200/30'
                }`}></div>

                {/* Photo container */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/profile-photo.jpg"
                    alt="Peeyush Tiwari"
                    className="w-full h-auto object-cover aspect-square"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback */}
                  <div className={`hidden w-full aspect-square flex-col items-center justify-center ${
                    isDarkMode
                      ? 'bg-gradient-to-br from-blue-600 to-purple-700'
                      : 'bg-gradient-to-br from-blue-500 to-purple-600'
                  }`}>
                    <div className="text-white text-center">
                      <div className="text-8xl font-bold mb-4">PT</div>
                      <p className="text-white/90 text-sm px-8">Add your photo:</p>
                    </div>
                  </div>

                  {/* Badge */}
                  <div className={`absolute bottom-6 left-6 right-6 backdrop-blur-sm rounded-xl p-4 shadow-lg transition-colors ${
                    isDarkMode ? 'bg-gray-900/95' : 'bg-white/95'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className={`text-sm transition-colors ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>Currently</div>
                        <div className={`font-semibold transition-colors ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>BCA Student at VIPS-TC</div>
                      </div>
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stats Section */}
      <section className={`py-20 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 transition-colors ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>What I Bring to the Table</h2>
            <p className={`max-w-2xl mx-auto transition-colors ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              A combination of technical expertise, problem-solving skills, and practical experience
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <SiLeetcode className="w-8 h-8" />,
                title: "300+ Problems Solved",
                description: "LeetCode & GeeksforGeeks",
                color: "blue"
              },
              {
                icon: <FaFolderOpen className="w-8 h-8" />,
                title: "7 Major Projects",
                description: "AI/ML & Web Development",
                color: "purple"
              },
              {
                icon: <IbmCloud className="w-8 h-8" />,
                title: "IBM Internship",
                description: "Summer 2025",
                color: "green"
              },
              {
                icon: <img src='https://i.postimg.cc/rm6Vsw9d/VIPS.png' className='w-11 h-8'/>,
                title: "BCA Student",
                description: "VIPS Technical Campus",
                color: "pink"
              }
            ].map((stat, idx) => (
              <div
                key={idx}
                className={`group p-6 rounded-xl border transition-all hover:-translate-y-1 ${
                  isDarkMode
                    ? 'bg-gradient-to-br from-gray-700 to-gray-800 border-gray-700 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10'
                    : 'bg-gradient-to-br from-gray-50 to-gray-200 border-gray-400 hover:border-blue-200 hover:shadow-lg'
                }`}
              >
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${
                  isDarkMode
                    ? `bg-${stat.color}-500/20 text-${stat.color}-400`
                    : `bg-${stat.color}-500/20 text-${stat.color}-600`
                }`}>
                  {stat.icon}
                </div>
                <h3 className={`text-xl font-bold mb-2 transition-colors ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{stat.title}</h3>
                <p className={`text-sm transition-colors ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 transition-colors duration-300 ${
        isDarkMode
          ? 'bg-gradient-to-br from-blue-900 to-purple-900'
          : 'bg-gradient-to-br from-blue-600 to-purple-600'
      }`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className={`text-lg mb-8 max-w-2xl mx-auto ${
            isDarkMode ? 'text-blue-200' : 'text-blue-100'
          }`}>
            I'm always open to discussing new opportunities, innovative projects, and ways to contribute to meaningful work.
          </p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-all hover:shadow-xl inline-flex items-center gap-2"
          >
            Start a Conversation
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;