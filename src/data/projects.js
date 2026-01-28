import { Brain, Code2, Database, Layout } from 'lucide-react';

export const projects = [
  {
    title: "PathForge-Roadmap",
    date: "Aug 2025",
    description: "PathForge revolutionizes skill acquisition by generating personalized learning roadmaps using advanced AI algorithms. Built during the prestigious IBM Summer Internship 2025.",
    skills: ["Node.js", "API Integration", "Real-time State Management", "Team Management"],
    category: "AI/ML",
    link: "https://github.com/Peeyush1-lab/PathForge-Roadmap",
    demo: "https://peeyush1-lab.github.io/PathForge-Roadmap",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    icon: <Brain className="w-6 h-6" />
  },
  {
    title: "Book Kart",
    date: "Nov 2025",
    description: "A web-based online bookstore that allows users to browse, purchase, and manage books through an elegant PHP + HTML/CSS interface.",
    skills: ["PHP", "HTML", "CSS", "MySQL", "Project Management"],
    category: "Web Development",
    link: "https://github.com/Peeyush1-lab/Book_Kart",
    demo: "https://bookkart.rf.gd/login.php",
    thumbnail: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&h=500&fit=crop",
    icon: <Code2 className="w-6 h-6" />
  },
  {
    title: "Dumble Curl Counter",
    date: "Sep 2025",
    description: "Computer vision app using MediaPipe Pose Estimation to count dumbbell bicep curl reps in real-time by analyzing joint angles.",
    skills: ["Python", "OpenCV", "MediaPipe", "NumPy", "Pandas"],
    category: "AI/ML",
    link: "https://github.com/Peeyush1-lab/Dumble_Curl_Counter",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop",
    icon: <Database className="w-6 h-6" />
  },
  {
    title: "Currency Mate",
    date: "Mar 2025",
    description: "Real-time currency converter with live exchange rates from ExchangeRate API. Features elegant UI and instant conversion.",
    skills: ["JavaScript", "HTML", "CSS", "API Integration"],
    category: "Web Development",
    demo: "https://peeyush1-lab.github.io/CurrencyMate/",
    link: "https://github.com/Peeyush1-lab/CurrencyMate/",
    thumbnail: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=500&fit=crop",
    icon: <Layout className="w-6 h-6" />
  },
  {
    title: "Face Detection App",
    date: "2025",
    description: "Streamlit application for detecting faces in images, webcam captures, and live video streams using OpenCV's Haar Cascade classifier.",
    skills: ["Python", "Streamlit", "OpenCV", "Computer Vision"],
    category: "AI/ML",
    link: "https://github.com/Peeyush1-lab/Face-detection-app",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
    icon: <Brain className="w-6 h-6" />
  },
  {
    title: "Finger Control Volume",
    date: "2025",
    description: "Touchless, real-time system audio control using hand gestures. Adjusts volume based on thumb-index finger distance.",
    skills: ["Python", "OpenCV", "MediaPipe", "PyCaw", "NumPy"],
    category: "AI/ML",
    link: "https://github.com/Peeyush1-lab/FingerControl-Audio",
    thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=500&fit=crop",
    icon: <Code2 className="w-6 h-6" />
  },
  {
    title: "FitnessHub",
    date: "2025",
    description: "Responsive fitness and wellness web app for exploring workout programs with clean UI, smooth navigation, and authentication.",
    skills: ["HTML", "JavaScript", "CSS", "Responsive Design"],
    category: "Web Development",
    demo: "https://peeyush1-lab.github.io/FitnessHub/",
    thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop",
    icon: <Layout className="w-6 h-6" />
  }
];