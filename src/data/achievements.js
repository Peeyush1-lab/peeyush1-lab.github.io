import { Trophy} from 'lucide-react';
import { SiLeetcode} from "react-icons/si";
import { FaFolderOpen } from "react-icons/fa";
import { IbmCloud } from "@carbon/icons-react";

export const achievements = [
  {
    title: "300+ Problems Solved",
    platform: "LeetCode & GeeksforGeeks",
    description: "Consistently solved algorithmic challenges across multiple platforms, demonstrating strong problem-solving skills in data structures and algorithms.",
    icon: <SiLeetcode className='w-7 h-7'/>,
    color: "from-orange-500 to-red-500",
    link: "https://leetcode.com/u/Peeyush_Tiwari/"
  },
  {
    title: "IBM Summer Internship 2025",
    platform: "PathForge Project",
    description: "Contributed to an AI-powered learning roadmap generator, gaining hands-on experience with Node.js, API integration, and real-time state management.",
    icon: <IbmCloud size={32} />,
    color: "from-green-500/90 to-emerald-600/80"
  },
  {
    title: "7 Major Projects Completed",
    platform: "GitHub Portfolio",
    description: "Built diverse projects spanning AI/ML, web development, and computer vision, showcasing versatility across multiple technology stacks.",
    icon: <FaFolderOpen className="w-8 h-8 text-white" />,
    color: "from-purple-500 to-pink-500",
    link: "https://github.com/Peeyush1-lab"
  },
  {
    title: "BCA Student",
    platform: "VIPS-TC",
    description: "Pursuing Bachelor of Computer Applications with focus on Data Structures, Machine Learning, and Full-Stack Development.",
    icon: "https://i.postimg.cc/rm6Vsw9d/VIPS.png",
    color: "bg-white"
  }
];