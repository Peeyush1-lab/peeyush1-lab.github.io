import React from 'react';

const AboutPage = ({ isDarkMode }) => {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          About Me
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className={`rounded-2xl p-8 backdrop-blur-sm ${isDarkMode ? 'bg-slate-800/50 border border-slate-700' : 'bg-gray-50 border border-gray-400'}`}>
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Who I Am</h2>
            <p className={`mb-4 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm a passionate Data Analyst and AI-ML Enthusiast currently pursuing my Bachelor of Computer Applications. With a strong foundation in data science and front-end development, I bridge the gap between data insights and user experience.
            </p>
            <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Based in Delhi, India, I'm constantly learning and building projects that solve real-world problems through the power of data and technology.
            </p>
          </div>

          <div className={`rounded-2xl p-8 backdrop-blur-sm ${isDarkMode ? 'bg-slate-800/50 border border-slate-700' : 'bg-gray-50 border border-gray-400'}`}>
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">What I Do</h2>
            <ul className={`space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">▹</span>
                <span>Transform complex data into actionable insights using Python</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">▹</span>
                <span>Build interactive dashboards and data visualization tools</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">▹</span>
                <span>Develop ML prototypes and computer vision applications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">▹</span>
                <span>Create user-friendly web interfaces with modern frameworks</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={`rounded-2xl p-8 backdrop-blur-sm ${isDarkMode ? 'bg-slate-800/50 border border-slate-700' : 'bg-gray-50 border border-gray-400'}`}>
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">My Journey</h2>
          <div className={`space-y-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <p>
              My journey in tech began with a curiosity about how data shapes our world. Working primarily with <span className="text-cyan-400 font-semibold">Python</span>, I've developed a keen eye for transforming raw data into meaningful stories that drive decision-making.
            </p>
            <p>
              As a problem solver at heart, I've tackled <span className="text-cyan-400 font-semibold">300+ coding challenges</span> on platforms like LeetCode and GeeksforGeeks, constantly sharpening my algorithmic thinking and technical prowess.
            </p>
            <p>
              During my <span className="text-cyan-400 font-semibold">IBM Summer Internship 2025</span>, I contributed to PathForge, an AI-powered learning roadmap generator, where I gained hands-on experience with real-time state management and API integration.
            </p>
            <p>
              My goal is to evolve into a <span className="text-cyan-400 font-semibold">Data Scientist</span>, combining statistical thinking, <span className="text-cyan-400 font-semibold">Machine learning</span>, and thoughtful design to create solutions that deliver measurable impact in the real world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;