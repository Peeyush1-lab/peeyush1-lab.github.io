import React from 'react';
import { Github, ExternalLink, Filter } from 'lucide-react';

const ProjectsPage = ({ projects, selectedFilter, setSelectedFilter, isDarkMode }) => {
  const filters = ['all', 'AI/ML', 'Web Development'];
  const filteredProjects = selectedFilter === 'all'
    ? projects
    : projects.filter(p => p.category === selectedFilter);

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Featured Projects
        </h1>
        <p className={`text-xl text-center mb-8 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Explore my portfolio of data science, web development, and AI/ML projects
        </p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-all ${
                selectedFilter === filter
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                  : (isDarkMode ? 'bg-slate-800/50 text-gray-300 hover:bg-slate-700 border border-slate-700' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300')
              }`}
            >
              <Filter className="w-4 h-4" />
              <span className="capitalize">{filter}</span>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className={`rounded-xl overflow-hidden backdrop-blur-sm transition-all hover:transform hover:scale-105 group ${isDarkMode ? 'bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50' : 'bg-gray-100 border border-gray-300 hover:border-cyan-500/50'}`}>
              {/* Project Thumbnail */}
              <div className={`relative h-48 overflow-hidden ${isDarkMode ? 'bg-slate-700' : 'bg-gray-200'}`}>
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-t from-slate-900 to-transparent' : 'bg-gradient-to-t from-white to-transparent'} opacity-30`}></div>
                <div className={`absolute top-4 right-4 p-3 rounded-lg ${isDarkMode ? 'bg-slate-900/80' : 'bg-white/80'} backdrop-blur-sm`}>
                  {project.icon}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className={`text-xl font-bold group-hover:text-cyan-400 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <span className={`text-sm whitespace-nowrap ml-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.date}</span>
                </div>
                <p className={`mb-4 text-sm leading-relaxed line-clamp-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.slice(0, 3).map((skill) => (
                    <span key={skill} className={`px-3 py-1 rounded-md text-xs ${isDarkMode ? 'bg-slate-700/50 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                      {skill}
                    </span>
                  ))}
                  {project.skills.length > 3 && (
                    <span className={`px-3 py-1 rounded-md text-xs ${isDarkMode ? 'bg-slate-700/50 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>
                      +{project.skills.length - 3} more
                    </span>
                  )}
                </div>
                <div className={`flex gap-3 pt-4 ${isDarkMode ? 'border-t border-slate-700' : 'border-t border-gray-200'}`}>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                      <Github className="w-4 h-4" /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;