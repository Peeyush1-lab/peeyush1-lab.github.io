import React from 'react';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';

const Navigation = ({ currentPage, setCurrentPage, isMenuOpen, setIsMenuOpen, scrollY, isDarkMode, setIsDarkMode }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrollY > 20
        ? isDarkMode
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg shadow-black/10'
          : 'bg-white/95 backdrop-blur-md shadow-sm'
        : isDarkMode
          ? 'bg-gray-900'
          : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => setCurrentPage('home')}
            className={`text-xl font-bold transition-colors ${
              isDarkMode
                ? 'text-white hover:text-blue-400'
                : 'text-gray-900 hover:text-blue-600'
            }`}
          >
            Peeyush Tiwari
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-sm font-medium transition-colors relative group ${
                  currentPage === item.id
                    ? isDarkMode ? 'text-blue-400' : 'text-blue-600'
                    : isDarkMode
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 transform transition-transform ${
                  isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                } ${
                  currentPage === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </button>
            ))}

            <a
              href="/files/resume.pdf"
              download="Peeyush_Tiwari_Resume.pdf"
              className={`ml-4 px-5 py-2.5 text-sm font-medium rounded-lg transition-all hover:shadow-lg flex items-center gap-2 ${
                isDarkMode
                  ? 'bg-blue-500 text-white hover:bg-blue-600 hover:shadow-blue-500/30'
                  : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-600/30'
              }`}
            >
              <Download className="w-4 h-4" />
              Resume
            </a>

            {/* Theme Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2.5 rounded-lg transition-all ${
                isDarkMode
                  ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`lg:hidden mt-4 pb-4 pt-4 animate-fade-in ${
            isDarkMode
              ? 'border-t border-gray-800'
              : 'border-t border-gray-100'
          }`}>
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === item.id
                      ? isDarkMode
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-blue-50 text-blue-600'
                      : isDarkMode
                        ? 'text-gray-300 hover:bg-gray-800'
                        : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="/files/resume.pdf"
                download="Peeyush_Tiwari_Resume.pdf"
                className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2 ${
                  isDarkMode
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`px-4 py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 ${
                  isDarkMode
                    ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                <span className="text-sm font-medium">
                  {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;