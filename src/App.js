import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import SkillsPage from './components/SkillsPage';
import ProjectsPage from './components/ProjectsPage';
import AchievementsPage from './components/AchievementsPage';
import EducationPage from './components/EducationPage';
import ContactPage from './components/ContactPage';
import { projects } from './data/projects';
import { skills } from './data/skills';
import { achievements } from './data/achievements';
import { education } from './data/education';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'L') {
        setIsDarkMode(!isDarkMode);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isDarkMode]);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Load theme preference from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Save theme preference and apply to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} isDarkMode={isDarkMode} />;
      case 'about':
        return <AboutPage isDarkMode={isDarkMode} />;
      case 'skills':
        return <SkillsPage skills={skills} isDarkMode={isDarkMode} />;
      case 'projects':
        return <ProjectsPage projects={projects} isDarkMode={isDarkMode} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />;
      case 'achievements':
        return <AchievementsPage achievements={achievements} isDarkMode={isDarkMode} />;
      case 'education':
        return <EducationPage education={education} isDarkMode={isDarkMode} />;
      case 'contact':
        return <ContactPage isDarkMode={isDarkMode} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} isDarkMode={isDarkMode} />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode
        ? 'bg-gray-900 text-white'
        : 'bg-white text-gray-900'
      }`}>
      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollY={scrollY}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      <div className="pt-16">
        {renderPage()}
      </div>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;