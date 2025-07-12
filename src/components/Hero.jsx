import React from 'react';
import { Link } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import heroImg from '/lavii.jpg';


export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 py-20 gap-10"
    >
      {/* Text Content */}
      <div className="flex-1 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
        >
          Hi, I'm{' '}
          <span className="text-purple-600 dark:text-purple-400">
            Lovesh Mahendrakumar Bodhani
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-300"
        >
          I’m a{' '}
          <span className="text-indigo-600 dark:text-purple-400 font-semibold">
            <Typewriter
              words={[
                'Frontend Developer',
                'React Developer',
                'UI/UX Designer',
                'Backend Developer',
                'Problem Solver',
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 flex gap-4 flex-wrap justify-center md:justify-start"
        >
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition duration-300 cursor-pointer shadow-md"
          >
            View Projects
          </Link>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-indigo-600 text-indigo-600 hover:bg-indigo-100 dark:hover:bg-indigo-800 dark:text-purple-400 dark:border-purple-400 rounded-md transition duration-300 shadow-md"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

     <motion.div
  className="flex-1 flex justify-center"
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.3 }}
>
  <img
    src={heroImg}
    alt="Lovesh Bodhani Portrait"
    className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-xl shadow-lg border border-gray-300 dark:border-gray-700 transition-transform duration-300 hover:scale-105"
  />
</motion.div>

    </section>
  );
}
