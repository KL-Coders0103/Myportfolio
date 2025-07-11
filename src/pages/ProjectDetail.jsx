import { useParams, Link } from "react-router-dom";

const projectData = {
  1: {
    title: 'E-Commerce Website',
    description: 'Detailed view of E-Commerce project.',
    image:'/projects/ecommerce.png',
    demo:'https://klcoders-e-commerce.netlify.app/',
    features: [
      'Product listing with images and prices',
      'Shopping cart functionality with quantity update',
      'Responsive UI using Tailwind CSS',
      'Filter and search functionality',
      'Interactive product detail view',
      'Client-side form validation for checkout',
      'Smooth transitions and hover effects'
    ],
    tech: ['HTML', 'Tailwind CSS', 'JS'],
  },
  2: {
    title: 'Portfolio Website',
    description: 'Detailed view of Portfolio project.',
    image:'/projects/Portfolio.png',
    demo:'#',
    features: [
      'Fully responsive layout across devices',
      'Light/Dark theme toggle',
      'Projects section with animations',
      'Smooth scrolling navigation',
      'Animated hero and about sections',
      'Reusable components using React',
      'Tech stack badges for each project'
    ],
    tech: ['REACT', 'CSS', 'JS', 'Tailwind CSS'],
  },
  3: {
    title: 'Weather App',
    description: 'Detailed view of Weather App.',
    image:'/projects/weather.png',
    demo:'https://kl-weather-app.netlify.app/',
    features: [
      'Real-time weather data using public API',
      'Search by city name',
      'Displays temperature, condition, humidity, and wind',
      'Dynamic icons and backgrounds based on weather',
      'Dark mode toggle',
      'Animated cloud effects',
      'Responsive design for all screen sizes'
    ],
    tech: ['HTML', 'CSS', 'JS','API'],
  },
  4:{
    title:'Todo List',
    description:'Deatiled view of Todo List App',
    image:'/projects/todo.png',
    demo:'https://todo-app-mongodb-chfc.onrender.com/',
    features: [
      'Add, delete, and update tasks',
      'Tasks stored in MongoDB (persistent storage)',
      'Uses EJS for templating and dynamic rendering',
      'Express.js backend with clean routing',
      'Responsive UI with simple and clean design',
      'Organized by task status (e.g., active/completed)'
    ],
    tech:['HTML','CSS','EJS','Express JS','Mongo DB'],
  },
  5: {
    title: 'Product Landing Page',
    description: 'Detailed view of Product Landing Page project.',
    image: '/projects/landingpage.png',
    demo: 'https://landing-page-kl.netlify.app/',
    features: [
      'Beautiful hero section with CTA',
      'Responsive design across devices',
      'Smooth scrolling navigation',
      'Service and testimonial sections',
      'Animated buttons and interactions',
      'Clean and modern UI layout'
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  6: {
    title: 'CS Registration Form',
    description: 'Detailed view of Computer Science Registration Form.',
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
    tech: ['HTML', 'CSS', 'JavaScript'],
  }
}

export default function ProjectDetail() {
    const { id } = useParams();
    const project = projectData[id]

    if(!project) return <p className="text-center text-red-500">Project not found</p>;

    return(
        <div className="min-h-screen px-6 py-20 bg-white dark:bg-black text-gray-900 dark:text-white">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10 min-h-[500px]">

    
    <div className="w-full md:w-1/2">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="mb-6">{project.description}</p>

      <h3 className="text-xl font-semibold mb-2">Features:</h3>
      <ul className="list-disc list-inside mb-6 space-y-1">
        {project.features.map((feat, idx) => (
          <li key={idx}>{feat}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mb-2">Tech Stack:</h3>
      <div className="flex gap-2 flex-wrap mb-6">
        {project.tech.map((t, i) => (
          <span
            key={i}
            className="bg-indigo-100 dark:bg-indigo-700 text-indigo-700 dark:text-white px-2 py-1 rounded text-sm"
          >
            {t}
          </span>
        ))}
      </div>

      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-8 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          🔗 View Live Demo
        </a>
      )}

      <br />
      <Link
        to="/"
        className="text-indigo-600 dark:text-purple-400 hover:underline"
      >
        ← Back to Portfolio
      </Link>
    </div>

    <div className="w-full md:w-1/2 flex justify-center items-start">
  <img
    src={project.image}
    alt={`${project.title} Screenshot`}
    className="rounded-lg shadow-md w-full h-full object-contain max-h-[700px]"
  />
</div>

  </div>
</div>

    );
}