import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Website',
    description: 'A fully responsive e-commerce site built with React and Tailwind CSS.',
    tech: ['HTML', 'Tailwind CSS', 'JS'],
    image:'/projects/ecommerce.png',
    demo:'https://klcoders-e-commerce.netlify.app/',
    code:"",
    features: [
      'Product listing with images and prices',
      'Shopping cart functionality with quantity update',
      'Responsive UI using Tailwind CSS',
      'Filter and search functionality',
      'Interactive product detail view',
      'Client-side form validation for checkout',
      'Smooth transitions and hover effects'
    ],
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'My personal portfolio to showcase projects and skills.',
    tech: ['REACT', 'CSS', 'JS', 'Tailwind CSS'],
    image:'/projects/Portfolio.png',
    demo:'https://klcoders-portfolio-cnx4breso-lovesh-bodhanis-projects.vercel.app/',
    code:"https://github.com/KL-Coders0103/Portfolio",
    features: [
      'Fully responsive layout across devices',
      'Light/Dark theme toggle',
      'Projects section with animations',
      'Smooth scrolling navigation',
      'Animated hero and about sections',
      'Reusable components using React',
      'Tech stack badges for each project'
    ],
  },
  {
    id: 3,
    title: 'Weather App',
    description: 'A weather application that fetches data from a public API.',
    tech: ['HTML','CSS','JS', 'API'],
    image:'/projects/weather.png',
    demo:'https://kl-weather-app.netlify.app/',
    code:"https://github.com/KL-Coders0103/weather-app",
    features: [
      'Real-time weather data using public API',
      'Search by city name',
      'Displays temperature, condition, humidity, and wind',
      'Dynamic icons and backgrounds based on weather',
      'Dark mode toggle',
      'Animated cloud effects',
      'Responsive design for all screen sizes'
    ],
  },
  {
    id:4,
    title:'Todo List',
    description:'A Todo Application that stores task in database like mongodb',
    tech:['HTML','CSS','EJS','Express JS','Mongo DB'],
    image:'/projects/todo.png',
    demo:'https://todo-app-mongodb-chfc.onrender.com/',
    code:"https://github.com/KL-Coders0103/todo-app-mongodb",
    features: [
      'Add, delete, and update tasks',
      'Tasks stored in MongoDB (persistent storage)',
      'Uses EJS for templating and dynamic rendering',
      'Express.js backend with clean routing',
      'Responsive UI with simple and clean design',
      'Organized by task status (e.g., active/completed)'
    ],
  },
  {
    id: 5,
    title: 'Landing Page',
    description: 'A modern, responsive landing page built using HTML, CSS, and JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/projects/landingpage.png',
    demo: 'https://landing-page-kl.netlify.app/',
    code:"",
    features: [
      'Beautiful hero section with CTA',
      'Responsive design across devices',
      'Smooth scrolling navigation',
      'Service and testimonial sections',
      'Animated buttons and interactions',
      'Clean and modern UI layout'
    ],
  },
  {
    id: 6,
    title: 'Registration form',
    description: 'A clean and responsive registration form with validation using vanilla JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/projects/registration.png', 
    demo: 'https://cs-registration-form.netlify.app/',
    features: [
      'Dynamic form validation with JavaScript',
      'Fully responsive layout',
      'User-friendly input fields with labels',
      'Dropdowns and radio/checkbox inputs',
      'Form submission confirmation UI',
      'Clean, professional look for academic use'
    ],
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-[#111] px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 border border-transparent hover:border-purple-500 hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-purple-100 dark:bg-purple-700 text-purple-700 dark:text-white px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-indigo-600 dark:text-purple-400 font-medium hover:underline">
                View Details →
              </p>
            </motion.div>
          ))}
        </div>
      </div>

     
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center px-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg shadow-lg p-6 max-w-3xl w-full overflow-y-auto max-h-[90vh] relative"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-red-500 hover:text-red-700 text-2xl font-bold"
              aria-label="Close modal"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>

            <img
              src={selectedProject.image}
              alt={`${selectedProject.title} Preview`}
              className="w-full rounded-lg mb-4 object-cover border border-gray-300 dark:border-gray-700"
            />

            <p className="mb-4">{selectedProject.description}</p>

            <h3 className="text-lg font-semibold mb-2">Features:</h3>
            <ul className="list-disc list-inside mb-4 space-y-1">
              {selectedProject.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-2">Tech Stack:</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-indigo-100 dark:bg-indigo-700 text-indigo-700 dark:text-white px-2 py-1 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
                >
                  🔗 View Live Demo
                </a>
              )}
              {selectedProject.code && (
                <a
                  href={selectedProject.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
                >
                  💻 View Code
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
