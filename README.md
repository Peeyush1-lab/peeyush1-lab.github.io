# 🚀 Peeyush Tiwari - Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, showcasing my journey as a Data Analyst, AI/ML Enthusiast, and Front-End Developer.

[![Portfolio Preview](https://i.postimg.cc/yxrRL23V/Portfolio-preview.png)](https://postimg.cc/JHZtn6Qg)

## ✨ Features

- 🎨 **Modern UI/UX**: Clean, professional design with smooth animations and gradient effects
- 📱 **Fully Responsive**: Optimized for all devices - desktop, tablet, and mobile
- 🌐 **Multi-Page Navigation**: Separate pages for better organization and user experience
- 🖼️ **Project Showcase**: Featured projects with thumbnails, descriptions, and live demos
- 🎯 **Interactive Elements**: Hover effects, smooth transitions, and animated components
- 🌙 **Dark Theme**: Eye-friendly dark color scheme with cyan-blue gradients
- ⚡ **Fast Performance**: Lightweight and optimized for quick loading

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Netlify / GitHub Pages

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Peeyush1-lab/peeyush1-lab.github.io.git
   cd peeyush1-lab.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install required packages**
   ```bash
   npm install lucide-react
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

4. **Configure Tailwind CSS**

   Update `tailwind.config.js`:
   ```javascript
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: [
       "./src/**/*.{js,jsx,ts,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

   Update `src/index.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

5. **Run the development server**
   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📁 Project Structure

```
portfolio/
├── public/
|   ├── index.html
│   └── files/
|        └── Resume.pdf
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Footer.jsx
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── SkillsPage.jsx
│   │   ├── ProjectsPage.jsx
│   │   ├── AchievementsPage.jsx
│   │   ├── EducationPage.jsx
│   │   └── ContactPage.jsx
│   ├── data/
│   │   ├── projects.js
│   │   ├── skills.js
│   │   ├── achievements.js
│   │   └── education.js
│   ├── App.jsx
│   ├── App.css
│   └── index.js
├── package.json
├── tailwind.config.js
└── README.md
```

## 📄 Pages

- **Home** - Hero banner with introduction and quick stats
- **About** - Detailed background and journey
- **Skills** - Technical skills organized by category
- **Projects** - Portfolio of featured projects with thumbnails
- **Education** - Academic qualifications and timeline
- **Contact** - Multiple ways to get in touch

## 🎯 Key Features Breakdown

### Navigation
- Sticky navigation bar with active page highlighting
- Smooth page transitions
- Mobile-responsive hamburger menu

### Hero Section
- Animated gradient background
- Call-to-action buttons
- Social media links
- Bouncing scroll indicator

### Project Cards
- Thumbnail images with hover zoom effect
- Technology tags
- Links to GitHub repos and live demos
- Responsive grid layout

### Animations
- Fade-in animations on page load
- Hover scale effects
- Pulse animations on accent elements
- Smooth transitions throughout

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run deploy` - Deploys to GitHub Pages

## 📊 Performance

- Lighthouse Score: 95+
- Mobile-Friendly: Yes
- SEO Optimized: Yes
- Accessibility: WCAG 2.1 compliant

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Peeyush1-lab/portfolio/issues).

## 📝 License

This project is [MIT](LICENSE) licensed.

## 👨‍💻 Author

**Peeyush Tiwari**

- GitHub: [@Peeyush1-lab](https://github.com/Peeyush1-lab)
- LinkedIn: [Peeyush Tiwari](https://www.linkedin.com/in/peeyush-tiwari-105b22323/)
- LeetCode: [Peeyush_Tiwari](https://leetcode.com/u/Peeyush_Tiwari/)
- Email: tiwari.peeyush2006@gmail.com

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/)
- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

⭐ **Star this repository if you found it helpful!**

💼 **Looking for opportunities in Data Science, AI/ML, and Front-End Development**

📧 **Open to collaborations and exciting projects**