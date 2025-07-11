import { motion } from 'framer-motion';
import React from 'react';
import {Link} from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Website',
    description: 'A fully responsive e-commerce site built with React and Tailwind CSS.',
    tech: ['HTML', 'Tailwind CSS', 'JS'],
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'My personal portfolio to showcase projects and skills.',
    tech: ['REACT', 'CSS', 'JS', 'Tailwind CSS'],
  },
  {
    id: 3,
    title: 'Weather App',
    description: 'A weather application that fetches data from a public API.',
    tech: ['HTML','CSS','JS', 'API'],
  },
  {
    id:4,
    title:'Todo List',
    description:'A Todo Application that stores task in database like mongodb',
    tech:['HTML','CSS','EJS','Express JS','Mongo DB'],
  },
  {
    id: 5,
    title: 'Landing Page',
    description: 'A modern, responsive landing page built using HTML, CSS, and JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 6,
    title: 'Registration form',
    description: 'A clean and responsive registration form with validation using vanilla JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript']
  }
];

export default function Projects() {
  return (
    <section id='projects' className='py-20 bg-gray-100 dark:bg-[#111] px-6'>
      <div className='max-w-6xl mx-auto'>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12'
        >
          My Projects
        </motion.h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className='bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 border border-transparent hover:border-purple-500 hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300'
            >
              <h3 className='text-xl font-semibold text-gray-800 dark:text-white mb-2'>
                {project.title}
              </h3>
              <p className='text-gray-600 dark:text-gray-400 mb-4'>
                {project.description}
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className='bg-purple-100 dark:bg-purple-700 text-purple-700 dark:text-white px-2 py-1 rounded-full text-xs font-medium'
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                  to={`/project/${project.id}`}
                  className='inline-block text-indigo-600 dark:text-purple-400 font-medium hover:underline'>
                  View Details →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
