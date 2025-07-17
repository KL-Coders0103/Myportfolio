import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);

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
      <h1 className="text-xl font-bold tracking-wide">CodeByLovesh</h1>
      <ul className="hidden sm:flex gap-6 font-medium">
        {["home", "about", "projects", "skills", "contact"].map((link) => (
          <li key={link}>
            <a
              href={`#${link}`}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 capitalize"
            >
              {link}
            </a>
          </li>
        ))}
        <li>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="ml-4 text-sm bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded cursor-pointer"
      >
        {darkMode ? "Light" : "Dark"}
      </button>
        </li>
      </ul>

      <button className="sm:hidden z-50" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      {menuOpen && (
  <ul className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 flex flex-col items-center gap-6 py-6 font-medium sm:hidden shadow-lg">
    {["home", "about", "projects", "skills", "contact"].map((link) => (
      <li key={link}>
        <a
          href={`#${link}`}
          className="hover:text-indigo-600 dark:hover:text-indigo-400 capitalize"
          onClick={() => setMenuOpen(false)}
        >
          {link}
        </a>
      </li>
    ))}
    <li>
      <button
        onClick={() => {
          setDarkMode(!darkMode);
          setMenuOpen(false);
        }}
        className="text-sm bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded cursor-pointer"
      >
        {darkMode ? "Light" : "Dark"}
      </button>
    </li>
  </ul>
)}

    </nav>
  );
}
