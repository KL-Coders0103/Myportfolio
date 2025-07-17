import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const certificates = [
  {
    title: "Digital Productivity",
    img: "/certificate/Digital Productivity certificate.png",
    description:
      "Completed the Digital Productivity course, gaining essential skills in modern productivity tools and digital workflows crucial for effective remote and office-based work.",
    issuedBy: "NIIT Foundation & YuWaah (UNICEF)",
    date: "22 Feb 2025",
    link: "https://drive.google.com/file/d/1hWRJ3P_Sc51PqohnAo5q8EQT2bVSA_hc/view?usp=sharing",
  },
  {
    title: "JavaScript Essentials",
    img: "/certificate/Javascript test certificate.png",
    description:
      "Passed a JavaScript certification test through a YouTube-based course, demonstrating a solid grasp of JavaScript syntax, logic, and DOM manipulation.",
    issuedBy: "Prashat Jain - YouTube Course",
    date: "29 Dec 2024",
    link: "https://drive.google.com/file/d/16NfZACX2lEOeKSnMwTkeX17W94UUEuHO/view?usp=sharing",
  },
  {
    title: "FrontEnd Development",
    img: "/certificate/Plasmid internship certificate.png",
    description:
      "Completed a hands-on internship focused on web development, showcasing diligence and technical capability in developing responsive web applications.",
    issuedBy: "Plasmid Innovations",
    date: "05 July 2024",
    link: "https://drive.google.com/file/d/1B4OIwU8OdLBuyklvHg7UCg8BJSFLqgHN/view?usp=sharing",
  },
  {
    title: "React Developer",
    img: "/certificate/React-js certificate.png",
    description:
      "Completed a project-based course on React.js, covering the fundamentals of component-based architecture and client-side rendering.",
    issuedBy: "Coursera",
    date: "21 Feb 2025",
    link: "https://drive.google.com/file/d/1c3m30ScsleWgS8YAiY9DBH1LgbJ7x4ON/view?usp=sharing",
  },
  {
    title: "Fundamentals of Cybersecurity",
    img: "/certificate/zalar certificate.png",
    description:
      "Completed training in cybersecurity fundamentals, focusing on core concepts like threat management, network security, and secure practices.",
    issuedBy: "Zscaler Trainings",
    date: "18 Dec 2024",
    link: "https://drive.google.com/file/d/1yLnIOViuu1urLl1FpfRY5AlYjl6TapYh/view?usp=sharing",
  },
  {
    title: "Web Full Stack Development",
    img: "/certificate/eduskils web full stack certificate.png",
    description:
      "Successfully completed a 10-week virtual internship in Full Stack Web Development, demonstrating core competencies in front-end and back-end web technologies.",
    issuedBy: "EduSkills, AICTE & National Internship Portal",
    date: "02 July 2025",
    link: "https://drive.google.com/file/d/1pgp3Qby7ZmU2uN1G-cxf3oB0H5mTvlBw/view?usp=sharing",
  },
];

export default function Certificates() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % certificates.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="certificates"
      className="py-20 bg-white dark:bg-[#111] px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          Certificates
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-10 bg-gray-100 dark:bg-[#1a1a1a] p-6 sm:p-10 rounded-xl shadow-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={`cert-img-${index}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/2"
            >
              <img
                src={certificates[index].img}
                alt={certificates[index].title}
                className="w-full max-h-[300px] sm:max-h-[350px] rounded-lg object-contain shadow-lg cursor-pointer"
              />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`cert-info-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/2 text-left space-y-4"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {certificates[index].title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {certificates[index].description}
              </p>
              <div className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                <p>
                  <strong className="text-gray-800 dark:text-gray-200">Issued By:</strong>{' '}
                  {certificates[index].issuedBy}
                </p>
                <p>
                  <strong className="text-gray-800 dark:text-gray-200">Date:</strong>{' '}
                  {certificates[index].date}
                </p>
                <p>
                  <a
                    href={certificates[index].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 dark:text-purple-400 underline hover:text-purple-800 dark:hover:text-purple-300"
                  >
                    View Certificate →
                  </a>
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex justify-center gap-3">
          {certificates.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to certificate ${i + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 transform ${
                index === i
                  ? 'bg-purple-600 scale-125'
                  : 'bg-gray-400 dark:bg-gray-600 hover:scale-110 hover:bg-purple-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
