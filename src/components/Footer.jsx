import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-300 py-10 px-4 sm:px-6 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6 text-center">
        
        {/* Name Heading */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          Lovesh Mahendrakumar Bodhani
        </motion.h3>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base">
          {['home', 'about', 'skills', 'projects', 'contact'].map((section, i) => (
            <Link
              key={i}
              to={section}
              smooth={true}
              duration={500}
              className="cursor-pointer capitalize hover:text-purple-600 dark:hover:text-purple-400 transition"
            >
              {section}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/KL-Coders0103"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/lovesh-bodhani-7b69a6257/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:lovesh.m.bodhani@email.com"
            aria-label="Email"
            className="hover:text-purple-600 dark:hover:text-purple-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Footer Bottom Text */}
        <div className="w-full border-t border-gray-300 dark:border-gray-700 pt-6 text-sm text-center">
          © {new Date().getFullYear()} Lovesh Bodhani. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
