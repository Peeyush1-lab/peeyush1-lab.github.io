import React from "react";
import { ExternalLink } from "lucide-react";

const AchievementsPage = ({ achievements, isDarkMode }) => {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Achievements & Milestones
        </h1>
        <p
          className={`text-xl text-center mb-12 max-w-2xl mx-auto ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
        >
          Key accomplishments throughout my journey in tech and data science
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-8 backdrop-blur-sm transition-all group ${isDarkMode ? "bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50" : "bg-gray-100 border border-gray-300 hover:border-cyan-500/50"}`}
            >
              <div className="flex items-start gap-6">
                <div
                  className={`p-4 rounded-xl bg-gradient-to-br ${achievement.color} bg-opacity-80 text-white group-hover:scale-110 transition-transform`}
                >
                  {typeof achievement.icon === "string" ? (<img  src={achievement.icon}  alt={achievement.title}  className="w-8 h-8 object-contain"  />) : (achievement.icon)}
                </div>
                <div className="flex-1">
                  <h3
                    className={`text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors ${isDarkMode ? "text-white" : "text-gray-900"}`}
                  >
                    {achievement.title}
                  </h3>
                  <p className="text-cyan-400 text-sm font-semibold mb-3">
                    {achievement.platform}
                  </p>
                  <p
                    className={`leading-relaxed mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    {achievement.description}
                  </p>
                  {achievement.link && (
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Profile</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div
            className={`rounded-xl p-6 text-center ${isDarkMode ? "bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30" : "bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200"} backdrop-blur-sm`}
          >
            <h4 className="text-4xl font-bold text-cyan-400 mb-2">300+</h4>
            <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
              Problems Solved
            </p>
          </div>
          <div
            className={`rounded-xl p-6 text-center ${isDarkMode ? "bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30" : "bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200"} backdrop-blur-sm`}
          >
            <h4 className="text-4xl font-bold text-purple-400 mb-2">7</h4>
            <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
              Major Projects
            </p>
          </div>
          <div
            className={`rounded-xl p-6 text-center ${isDarkMode ? "bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30" : "bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200"} backdrop-blur-sm`}
          >
            <h4 className="text-4xl font-bold text-green-400 mb-2">10+</h4>
            <p className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
              Technologies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;
