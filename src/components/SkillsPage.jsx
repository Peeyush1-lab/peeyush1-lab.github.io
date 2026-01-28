import { Database, Brain, Layout, Code2 } from 'lucide-react';
import { SiLeetcode, SiGeeksforgeeks} from "react-icons/si";

const SkillsPage = ({ skills, isDarkMode }) => {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Skills & Technologies
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className={`rounded-xl p-8 backdrop-blur-sm transition-all ${isDarkMode ? 'bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50' : 'bg-gray-100 border border-gray-200 hover:border-cyan-500/50'}`}>
              <h2 className="text-2xl font-semibold mb-6 text-cyan-400 flex items-center gap-3">
                {category === "Data & Analytics" && <Database className="w-6 h-6" />}
                {category === "ML/AI" && <Brain className="w-6 h-6" />}
                {category === "Web Development" && <Layout className="w-6 h-6" />}
                {category === "Tools & Platforms" && <Code2 className="w-6 h-6" />}
                {category}
              </h2>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span key={skill} className={`px-4 py-2 rounded-lg text-sm transition-all cursor-default ${isDarkMode ? 'bg-slate-700/50 hover:bg-slate-600 border border-slate-600' : 'bg-gray-200 hover:bg-gray-300 border border-gray-400'} hover:scale-105`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`rounded-xl p-8 text-center ${isDarkMode ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30' : 'bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200'} backdrop-blur-sm`}>
          <h3 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Problem Solving Excellence</h3>
          <p className={`text-xl mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <span className="text-cyan-400 font-bold text-4xl">300+</span> Problems Solved
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://leetcode.com/u/Peeyush_Tiwari/" target="_blank" rel="noopener noreferrer"
               className={`px-6 py-3 rounded-lg transition-all hover:scale-105 flex items-center gap-2 ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-white hover:bg-gray-100 border border-gray-300'}`}>
              <SiLeetcode className='w-5 h-5'/>
              <span>LeetCode Profile</span>
            </a>
            <a href="https://www.geeksforgeeks.org/profile/tiwaripeeuscc" target="_blank" rel="noopener noreferrer"
               className={`px-6 py-3 rounded-lg transition-all hover:scale-105 flex items-center gap-2 ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-white hover:bg-gray-100 border border-gray-300'}`}>
              <SiGeeksforgeeks className='w-5 h-5'/>
              <span>GeeksforGeeks</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;