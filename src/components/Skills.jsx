import { motion } from 'framer-motion';
import { useState } from "react";
import {
  SiJavascript, SiReact, SiNodedotjs, SiExpress, SiMongodb,
  SiHtml5, SiCss3, SiTailwindcss, SiGit, SiGithub
} from 'react-icons/si';

const skills = {
  Frontend: [
    { name: "HTML5", icon: <SiHtml5 />, color: "text-orange-500" },
    { name: "CSS3", icon: <SiCss3 />, color: "text-blue-500" },
    { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-500" },
    { name: "React", icon: <SiReact />, color: "text-cyan-400" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-400" }
  ],
  Backend: [
    { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-600" },
    { name: "Express", icon: <SiExpress />, color: "text-gray-500" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" }
  ],
  Tools: [
    { name: "Git", icon: <SiGit />, color: "text-orange-600" },
    { name: "GitHub", icon: <SiGithub />, color: "text-black dark:text-white" }
  ]
};

const categories = ["All", ...Object.keys(skills)];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("All");

  
  const allSkills = Object.values(skills).flat();
  const displayedSkills = activeTab === "All" ? allSkills : skills[activeTab];

  return (
    <section id="skills" className="py-20 px-6 bg-white dark:bg-[#111]">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8"
        >
          My Skills
        </motion.h2>
<p className="text-gray-600 dark:text-gray-400 text-base mb-4">
  Here are the technologies I work with daily across frontend, backend, and tooling.
</p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-2 rounded-full cursor-pointer text-sm font-medium border transition 
                ${
                  activeTab === category
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 dark:bg-[#222] text-gray-800 dark:text-white"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {displayedSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group flex flex-col items-center justify-center gap-2 
  bg-indigo-50 dark:bg-[#1f1f1f] text-indigo-700 dark:text-white 
  px-4 py-5 rounded-lg shadow-md hover:scale-105 
  hover:bg-indigo-100 dark:hover:bg-indigo-700 
  transition-transform duration-300 border border-transparent 
  hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-lg"

            >
              <div className={`text-3xl group-hover:scale-110 transition ${skill.color}`}>
                {skill.icon}
              </div>
              <p className="font-medium text-sm">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
