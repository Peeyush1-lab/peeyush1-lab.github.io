import React from 'react';
import { GraduationCap } from 'lucide-react';

const EducationPage = ({ education, isDarkMode }) => {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Education
        </h1>
        <p className={`text-xl text-center mb-12 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          My academic journey and qualifications
        </p>

        <div className="space-y-8">
          {education.map((edu, idx) => (
            <div key={idx} className={`rounded-xl p-8 backdrop-blur-sm transition-all ${isDarkMode ? 'bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50' : 'bg-gray-100 border border-gray-400 hover:border-cyan-500/50'}`}>
              <div className="flex items-start gap-6">
                <div className="hidden md:block">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                    {/* <GraduationCap className="w-6 h-6" /> */}
                    <img src={edu.logo} alt="vips logo" className="w-8 h-8 object-contain"/>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{edu.degree}</h3>
                  <p className="text-cyan-400 text-lg mb-2">{edu.institution}</p>
                  <p className={`mb-4 flex items-center gap-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    {edu.duration}
                  </p>
                  <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{edu.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationPage;