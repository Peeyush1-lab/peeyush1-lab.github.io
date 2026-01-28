import React, { useState } from 'react';
import { Mail, Linkedin, Github, Code2, Send, Download } from 'lucide-react';

const ContactPage = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Let's Connect
        </h1>
        <p className={`text-xl text-center mb-12 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Cards */}
          <a href="mailto:tiwari.peeyush2006@gmail.com"
             className={`rounded-xl p-8 backdrop-blur-sm transition-all hover:scale-105 group ${isDarkMode ? 'bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50' : 'bg-gray-50 border border-gray-300 hover:border-cyan-500/50'}`}>
            <div className="flex items-start gap-4">
              <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all">
                <Mail className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Email</h3>
                <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>tiwari.peeyush2006@gmail.com</p>
              </div>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/peeyush-tiwari-105b22323/" target="_blank" rel="noopener noreferrer"
             className={`rounded-xl p-8 backdrop-blur-sm transition-all hover:scale-105 group ${isDarkMode ? 'bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50' : 'bg-gray-50 border border-gray-300 hover:border-cyan-500/50'}`}>
            <div className="flex items-start gap-4">
              <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all">
                <Linkedin className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>LinkedIn</h3>
                <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Connect with me</p>
              </div>
            </div>
          </a>

          <a href="https://github.com/Peeyush1-lab" target="_blank" rel="noopener noreferrer"
             className={`rounded-xl p-8 backdrop-blur-sm transition-all hover:scale-105 group ${isDarkMode ? 'bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50' : 'bg-gray-50 border border-gray-300 hover:border-cyan-500/50'}`}>
            <div className="flex items-start gap-4">
              <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all">
                <Github className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>GitHub</h3>
                <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Check out my code</p>
              </div>
            </div>
          </a>

          <a href="https://leetcode.com/u/Peeyush_Tiwari/" target="_blank" rel="noopener noreferrer"
             className={`rounded-xl p-8 backdrop-blur-sm transition-all hover:scale-105 group ${isDarkMode ? 'bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50' : 'bg-gray-50 border border-gray-300 hover:border-cyan-500/50'}`}>
            <div className="flex items-start gap-4">
              <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all">
                <Code2 className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>LeetCode</h3>
                <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>300+ problems solved</p>
              </div>
            </div>
          </a>
        </div>

        {/* Contact Form */}
        <div className={`rounded-xl p-8 backdrop-blur-sm ${isDarkMode ? 'bg-slate-800/50 border border-slate-700' : 'bg-gray-50 border border-gray-400'}`}>
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Send Me a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-500 ${isDarkMode ? 'bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400' : 'bg-white border border-gray-400 text-gray-900 placeholder-gray-500'}`}
                placeholder="Sumit Tiwari"
              />
            </div>

            <div>
              <label htmlFor="email" className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-500 ${isDarkMode ? 'bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400' : 'bg-white border border-gray-400 text-gray-900 placeholder-gray-500'}`}
                placeholder="sumit@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
                rows="5"
                className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-500 resize-none ${isDarkMode ? 'bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400' : 'bg-white border border-gray-400 text-gray-900 placeholder-gray-500'}`}
                placeholder="Tell me about your project or opportunity..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all hover:scale-105 shadow-lg shadow-cyan-500/50 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>

        <div className={`mt-8 rounded-xl p-8 text-center ${isDarkMode ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30' : 'bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200'} backdrop-blur-sm`}>
          <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Location</h3>
          <p className={`text-xl flex items-center justify-center gap-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <span className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></span>
            Delhi, India
          </p>
        </div>

        {/* Resume Download CTA */}
        <div className={`mt-8 rounded-xl p-8 text-center ${isDarkMode ? 'bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30' : 'bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200'} backdrop-blur-sm`}>
          <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Download My Resume</h3>
          <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Get a detailed overview of my experience, skills, and projects</p>
          <a
            href="/files/resume.pdf"
            download="Peeyush_Tiwari_Resume.pdf"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all hover:scale-105 shadow-lg shadow-green-500/50 text-white"
          >
            <Download className="w-5 h-5" />
            <span>Download Resume (PDF)</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;