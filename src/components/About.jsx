import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '/about.jpg';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-[#111] px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        
        
        <div className="text-center md:text-left flex-1">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            About Me
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            Hello! I’m <strong className="text-purple-600 dark:text-purple-400">Lovesh Mahendrakumar Bodhani</strong>, a passionate Frontend Developer with a knack for building clean, user-friendly interfaces using React.js, Tailwind CSS, and modern web technologies.
            <br /><br />
            I enjoy solving problems, optimizing UI performance, and turning designs into reality. When I’m not coding, I’m exploring new tech tools or refining my UI/UX skills.
            <br /><br />
            My goal is to create experiences that are not just functional but delightful to use.
          </motion.p>
        </div>

        
        <motion.div
          className="flex-1 relative w-full max-w-sm mx-auto"
          initial={{ opacity: 0, rotate: -5 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="absolute top-3 left-3 w-full h-full rounded-xl bg-purple-200 dark:bg-purple-900 -z-10"></div>
          <img
            src={aboutImg}
            alt="Lovesh Bodhani"
            className="rounded-xl shadow-xl border-4 border-white dark:border-gray-800"
          />
        </motion.div>
      </div>
    </section>
  );
}
