import { useEffect, useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md px-6 py-4 flex justify-between items-center fixed top-0 left-0 w-full z-50 transition-colors">
      
     
      <h1 className="text-xl font-bold tracking-wide">My Portfolio</h1>

      
      <ul className="hidden sm:flex gap-6 font-medium">
        {['home', 'about', 'projects','skills', 'contact'].map((link) => (
          <li key={link}>
            <a
              href={`#${link}`}
              className="hover:text-indigo-600 dark:hover:text-purple-400 transition"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle Dark Mode"
        className="flex items-center gap-1 px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm transition hover:scale-105"
      >
        {darkMode ? "🌞" : "🌙"}
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}
